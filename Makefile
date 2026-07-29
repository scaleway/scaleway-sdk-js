WORKDIR = $(shell pwd)

LIBRARIES = $(shell find packages packages_generated -mindepth 1 -maxdepth 1 -type d)

build:
	pnpm turbo build

install-dependencies:
	pnpm install --no-frozen-lockfile
	pnpm fix-deps

generate:
	buf generate --timeout 0
	make format

post_generate:
	pnpm install --no-frozen-lockfile
	pnpm run prebuild
	pnpm run fix-deps
