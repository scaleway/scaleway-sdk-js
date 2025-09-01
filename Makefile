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

publish: install-dependencies
	pnpm run build
	pnpm lerna changed
	git add .
	git commit -m "chore: update generated files" || true
	pnpm lerna version -y --no-private --force-git-tag --create-release github
