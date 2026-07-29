WORKDIR = $(shell pwd)

LIBRARIES = $(shell find packages packages_generated -mindepth 1 -maxdepth 1 -type d)

build:
	pnpm run build

install-dependencies:
	pnpm install --no-frozen-lockfile
	pnpm fix-deps

build-tools:
	pnpm turbo build --filter=./tools/* --force


format:
	pnpm run format

format-check:
	pnpm run format:check

format-generated:
	pnpm install
	pnpm format:generated
	pnpm lint

typing:
	pnpm typecheck

lint:
	pnpm lint

test:
	pnpm run test

test-coverage:
	pnpm run test:coverage

doc:
	pnpm run doc

prebuild:
	pnpm run prebuild


setup-new-products:
	pnpm setupNewProducts
	pnpm install --no-frozen-lockfile

post_generate:
	$(MAKE) format-generated
	$(MAKE) prebuild
	$(MAKE) build-tools
	pnpm install --no-frozen-lockfile
	pnpm turbo run build --filter='./packages_generated/*'
	## Force link bin
	rm -rf node_modules/ &&	pnpm install
	pnpm --filter @scaleway/sdk-react run generate
	pnpm --filter @scaleway/sdk-react-hooks run generate

publish: install-dependencies
	pnpm run build
	pnpm-auto-release
