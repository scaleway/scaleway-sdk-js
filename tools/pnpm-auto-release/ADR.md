# ADR: Replace Lerna with pnpm-auto-release

- **Status**: Accepted
- **Date**: 2026-07-23
- **Decision makers**: Developer Tools team

## Context

The `scaleway-sdk-js-unlisted` monorepo used Lerna to manage independent per-package versioning and publishing across 150+ packages. A bot pushes conventional commits directly to `main` (no merge requests). A scheduled GitLab CI pipeline runs `lerna changed` / `lerna publish` to detect and release changed packages.

### Problems with Lerna

1. **npm coupling**: Despite `lerna.json` setting `"npmClient": "pnpm"`, Lerna's `publish` uses npm-flavored operations internally. It requires `npx npm-cli-login` for registry auth instead of pnpm's native config.

2. **Catalog incompatibility**: Lerna reads `package.json` files directly and chokes on pnpm's `catalog:` feature, which the project wants to adopt to centralize shared dependency versions.

3. **Maintenance**: Lerna v9 is minimally maintained. The project only uses `version` and `publish`, which are thin wrappers. The `bootstrap`, `link`, and `add` commands were removed in v7+.

4. **GitLab releases broken**: Lerna's `--create-release gitlab` option had been broken since 2024 and no longer worked.

## Decision

Replace Lerna with a minimal script (`pnpm-auto-release`) that leverages pnpm v11's native changeset support.

The tool is a single `cli.ts` (~115 lines) with one helper file (`utils.ts`, ~68 lines) and zero runtime dependencies. It does only what pnpm cannot:

1. **Detect changed packages** — `git diff --name-only` since the last `chore(release): publish` commit, matched against workspace package paths.
2. **Write changeset files** — one `.changeset/*.md` per affected package (all `minor`).

Everything else is delegated to pnpm:

| Step                    | Owner                                              |
| ----------------------- | -------------------------------------------------- |
| Detect changed packages | `git diff --name-only`                             |
| Write changeset files   | `cli.ts` (writeFileSync)                           |
| Bump versions           | `pnpm version -r` (handles dependency propagation) |
| Git commit              | `cli.ts` (git commit)                              |
| Git tags                | `cli.ts` (git tag per package)                     |
| Push                    | `cli.ts` (git push)                                |
| Publish                 | `pnpm publish -r`                                  |

### Why all packages as `minor`?

The bot pushes generated SDK updates frequently. The exact bump type (patch vs minor) doesn't matter to downstream consumers — what matters is that changed packages and their dependents get new versions. Using `minor` for all changes keeps the logic trivial. `pnpm version -r` then automatically propagates `patch` bumps to packages that depend on the changed ones.

### Why not Changesets or semantic-release?

- **Changesets** requires contributor-authored `.changeset/*.md` files on PRs. The bot-driven no-PR workflow means nobody writes changesets. The tool bridges this by auto-generating them from git history.
- **semantic-release** requires per-package configs or a community monorepo fork. Overkill for a use case where all changes are `minor`.

## Consequences

### Positive

- **Zero runtime dependencies** — only `@types/node` in devDeps.
- **Catalog-compatible** — `pnpm version -r` and `pnpm publish -r` handle `catalog:` references natively.
- **Dependency propagation** — `pnpm version -r` automatically bump packages whose dependencies changed (e.g. `sdk` gets a patch bump when `sdk-iam` changes).
- **~180 lines total** across 2 files. Fully auditable.

### Negative

- **No changelog generation** — the tool does not produce `CHANGELOG.md` files. This was an explicit trade-off: the bot's commit messages are already visible in git history, and maintaining changelog formatting code was the largest source of complexity in previous iterations.
- **No conventional commit classification** — all changes are `minor` regardless of commit type (`feat`, `fix`, etc.). If per-type bumping is needed later, a `classifyBump` function can be added.
- **No GitLab Releases** — Git tags are pushed and visible in GitLab's UI, but no Release API entries are created. Lerna's `--create-release gitlab` was already broken, so this is not a regression.

## Future considerations

- Add changelog generation if downstream consumers require it.
- Add `--bump-type <type>` flag if per-release control is needed.
- Migrate `pnpm-workspace.yaml` `overrides:` to `catalog:` now that the tooling is pnpm-native.
