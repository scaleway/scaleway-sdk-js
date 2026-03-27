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
	pnpm run updatePackageDependencies
	pnpm install

publish: install-dependencies
	pnpm run build
	pnpm lerna changed
	git add .
	git commit -m "chore: update generated files" || true
	pnpm lerna version -y --no-private --force-git-tag --create-release github
