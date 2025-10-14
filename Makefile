WORKDIR = $(shell pwd)

LIBRARIES = $(shell find packages packages_generated -mindepth 1 -maxdepth 1 -type d)

build:
	pnpm run build

install-dependencies:
	pnpm install

format:
	pnpm run format

format-check:
	pnpm run format:check

format-generated:
	pnpm install
	pnpm eslint --config eslint.config.generated.mjs --fix packages_generated/**/*.ts
	pnpm biome check --linter-enabled=false --write packages_generated/

typing:
	pnpm run typecheck

lint:
	pnpm run lint

test:
	pnpm turbo test

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

generate-global-sdk-package:
	pnpm run generateGlobalSdkPackage

test-release:
	@echo "Testing release process (dry-run)..."
	@echo "Simulating: pnpm lerna publish from-package -y --no-private --dist-tag latest"
	pnpm lerna publish from-package --no-push --no-git-tag-version --no-private --dist-tag latest --loglevel silly
	@echo "✅ Release dry-run completed successfully"

publish: install-dependencies
	pnpm run build
	pnpm lerna changed
	git add .
	git commit -m "chore: update generated files" || true
	pnpm lerna version -y --no-private --force-git-tag --create-release github
