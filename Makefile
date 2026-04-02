WORKDIR = $(shell pwd)

LIBRARIES = $(shell find packages packages_generated -mindepth 1 -maxdepth 1 -type d)

build:
	pnpm run build

install-dependencies:
	pnpm install

build-tools:
	pnpm turbo build --filter=./tools/*

release-prepare: install-dependencies build-tools
	pnpm install
	pnpm run build

release-check:
	@if [ -n "$$(git status --porcelain --untracked-files=normal)" ]; then \
		echo "Working tree must be clean before running release-check."; \
		git status --short; \
		exit 1; \
	fi
	@$(MAKE) release-prepare
	@if [ -n "$$(git status --porcelain --untracked-files=normal)" ]; then \
		echo "Release preparation modified the worktree. Commit generated files before publishing."; \
		git status --short; \
		exit 1; \
	fi

format:
	pnpm run format

format-check:
	pnpm run format:check

format-generated:
	pnpm install
	pnpm biome format --write packages_generated/
	pnpm biome check --write --unsafe packages_generated/

typing:
	pnpm run typecheck

lint:
	pnpm run lint

test:
	pnpm run test

test-coverage:
	pnpm run test:coverage

doc:
	pnpm run doc

prebuild:
	pnpm run prebuild

generate-alias:
	pnpm run generateAlias

generate-packages:
	pnpm run generatePackages

setup-new-products:
	pnpm turbo build --filter=@scaleway/generate-packages
	pnpm install
	pnpm run setupNewProducts

publish: install-dependencies
	pnpm run build
	pnpm lerna changed
	git add .
	git commit -m "chore: update generated files" || true
	pnpm lerna version -y --no-private --force-git-tag --create-release github
