# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.1.0 (2025-12-19)

### Bug Fixes

- improve config formatting and exclude sdk index ([#2675](https://github.com/scaleway/scaleway-sdk-js/issues/2675)) ([366c334](https://github.com/scaleway/scaleway-sdk-js/commit/366c334ad282325ec22bce95f6d90d8130081f1f))
- read real exports from packages instead of guessing names to fix TypeScript compilation errors ([#2460](https://github.com/scaleway/scaleway-sdk-js/issues/2460)) ([c8c424e](https://github.com/scaleway/scaleway-sdk-js/commit/c8c424e09d3a365a2592f25abdc0a8d6d86e0f0b))
- **webhosting:** require domain_name on RemoveCustomDomainRequest ([#2385](https://github.com/scaleway/scaleway-sdk-js/issues/2385)) ([6fa61ad](https://github.com/scaleway/scaleway-sdk-js/commit/6fa61ad6ac165ce237629880179e391fc44bbc64))

### Features

- add extension .js for nodenext ([#2492](https://github.com/scaleway/scaleway-sdk-js/issues/2492)) ([592c46d](https://github.com/scaleway/scaleway-sdk-js/commit/592c46df916c5b8b35f26c13b626eee797970f5d))
- **chore:** add automatic README generation for npm packages ([#2541](https://github.com/scaleway/scaleway-sdk-js/issues/2541)) ([7e8f769](https://github.com/scaleway/scaleway-sdk-js/commit/7e8f769eb14972abb26d6e207844f4a8653e7e90))
- publish packages as ESM only ([#2624](https://github.com/scaleway/scaleway-sdk-js/issues/2624)) ([8ab940d](https://github.com/scaleway/scaleway-sdk-js/commit/8ab940deadfbc8fc0d540148c51868dae63a74af))
- **webhosting:** add custom domain to hosting ([#2312](https://github.com/scaleway/scaleway-sdk-js/issues/2312)) ([9205729](https://github.com/scaleway/scaleway-sdk-js/commit/920572938863202d914eae21fbc89febe3b7402c))
- **webhosting:** add fields to backup api ([#2511](https://github.com/scaleway/scaleway-sdk-js/issues/2511)) ([fd740e6](https://github.com/scaleway/scaleway-sdk-js/commit/fd740e6ac9101aea8f5a35669836cc85d5c9b1f5))
- **webhosting:** add free subdomain support ([#2302](https://github.com/scaleway/scaleway-sdk-js/issues/2302)) ([f92fbd0](https://github.com/scaleway/scaleway-sdk-js/commit/f92fbd075c97e76ef7089bd59539522a507c2f39))
- **webhosting:** add new endpoint to migrate control panel ([#2653](https://github.com/scaleway/scaleway-sdk-js/issues/2653)) ([2c113bc](https://github.com/scaleway/scaleway-sdk-js/commit/2c113bc5cc9937f4db49f2722e427fb075496121))
- **webhosting:** add offer option ([#2555](https://github.com/scaleway/scaleway-sdk-js/issues/2555)) ([7649bdf](https://github.com/scaleway/scaleway-sdk-js/commit/7649bdfac60113ace00439ff4732e2450a59f1ac))
- **webhosting:** add parent zone domain name ([#2243](https://github.com/scaleway/scaleway-sdk-js/issues/2243)) ([ba7c2fe](https://github.com/scaleway/scaleway-sdk-js/commit/ba7c2fec9899b2195a0988865500bbc4dca9a7f2))
- **webhosting:** add public backup api ([#2307](https://github.com/scaleway/scaleway-sdk-js/issues/2307)) ([1cf1b8f](https://github.com/scaleway/scaleway-sdk-js/commit/1cf1b8fc982e3de0a4b0c7fc3cf20e55f93e5f43))
- **webhosting:** add public offers control panels list ([#2559](https://github.com/scaleway/scaleway-sdk-js/issues/2559)) ([e702e66](https://github.com/scaleway/scaleway-sdk-js/commit/e702e66b321a87d3181b8c8cd027ed5836e068c5))
- **webhosting:** add the `CreateWebsite` and `DeleteWebsite` endpoints ([#2538](https://github.com/scaleway/scaleway-sdk-js/issues/2538)) ([c5da2b7](https://github.com/scaleway/scaleway-sdk-js/commit/c5da2b785055c6976c56cc56df207cb6911ddfb7))
- **webhosting:** deprecate CheckUserOwnsDomain endpoint ([#2329](https://github.com/scaleway/scaleway-sdk-js/issues/2329)) ([d4b8598](https://github.com/scaleway/scaleway-sdk-js/commit/d4b85989dad74a78b6fae3ae97b4d7522ab70b15))
- **webhosting:** implement FreeDomainAPI ([#2373](https://github.com/scaleway/scaleway-sdk-js/issues/2373)) ([50278b2](https://github.com/scaleway/scaleway-sdk-js/commit/50278b2d1e97f90d2641206570dc5b3f60bf3549))

# 1.4.0 (2025-10-29)

### Bug Fixes

- read real exports from packages instead of guessing names to fix TypeScript compilation errors ([#2460](https://github.com/scaleway/scaleway-sdk-js/issues/2460)) ([c8c424e](https://github.com/scaleway/scaleway-sdk-js/commit/c8c424e09d3a365a2592f25abdc0a8d6d86e0f0b))
- **webhosting:** require domain_name on RemoveCustomDomainRequest ([#2385](https://github.com/scaleway/scaleway-sdk-js/issues/2385)) ([6fa61ad](https://github.com/scaleway/scaleway-sdk-js/commit/6fa61ad6ac165ce237629880179e391fc44bbc64))

### Features

- add extension .js for nodenext ([#2492](https://github.com/scaleway/scaleway-sdk-js/issues/2492)) ([592c46d](https://github.com/scaleway/scaleway-sdk-js/commit/592c46df916c5b8b35f26c13b626eee797970f5d))
- **webhosting:** add custom domain to hosting ([#2312](https://github.com/scaleway/scaleway-sdk-js/issues/2312)) ([9205729](https://github.com/scaleway/scaleway-sdk-js/commit/920572938863202d914eae21fbc89febe3b7402c))
- **webhosting:** add fields to backup api ([#2511](https://github.com/scaleway/scaleway-sdk-js/issues/2511)) ([fd740e6](https://github.com/scaleway/scaleway-sdk-js/commit/fd740e6ac9101aea8f5a35669836cc85d5c9b1f5))
- **webhosting:** add free subdomain support ([#2302](https://github.com/scaleway/scaleway-sdk-js/issues/2302)) ([f92fbd0](https://github.com/scaleway/scaleway-sdk-js/commit/f92fbd075c97e76ef7089bd59539522a507c2f39))
- **webhosting:** add parent zone domain name ([#2243](https://github.com/scaleway/scaleway-sdk-js/issues/2243)) ([ba7c2fe](https://github.com/scaleway/scaleway-sdk-js/commit/ba7c2fec9899b2195a0988865500bbc4dca9a7f2))
- **webhosting:** add public backup api ([#2307](https://github.com/scaleway/scaleway-sdk-js/issues/2307)) ([1cf1b8f](https://github.com/scaleway/scaleway-sdk-js/commit/1cf1b8fc982e3de0a4b0c7fc3cf20e55f93e5f43))
- **webhosting:** add the `CreateWebsite` and `DeleteWebsite` endpoints ([#2538](https://github.com/scaleway/scaleway-sdk-js/issues/2538)) ([c5da2b7](https://github.com/scaleway/scaleway-sdk-js/commit/c5da2b785055c6976c56cc56df207cb6911ddfb7))
- **webhosting:** deprecate CheckUserOwnsDomain endpoint ([#2329](https://github.com/scaleway/scaleway-sdk-js/issues/2329)) ([d4b8598](https://github.com/scaleway/scaleway-sdk-js/commit/d4b85989dad74a78b6fae3ae97b4d7522ab70b15))
- **webhosting:** implement FreeDomainAPI ([#2373](https://github.com/scaleway/scaleway-sdk-js/issues/2373)) ([50278b2](https://github.com/scaleway/scaleway-sdk-js/commit/50278b2d1e97f90d2641206570dc5b3f60bf3549))

# 1.3.0 (2025-10-22)

### Bug Fixes

- read real exports from packages instead of guessing names to fix TypeScript compilation errors ([#2460](https://github.com/scaleway/scaleway-sdk-js/issues/2460)) ([c8c424e](https://github.com/scaleway/scaleway-sdk-js/commit/c8c424e09d3a365a2592f25abdc0a8d6d86e0f0b))
- **webhosting:** require domain_name on RemoveCustomDomainRequest ([#2385](https://github.com/scaleway/scaleway-sdk-js/issues/2385)) ([6fa61ad](https://github.com/scaleway/scaleway-sdk-js/commit/6fa61ad6ac165ce237629880179e391fc44bbc64))

### Features

- add extension .js for nodenext ([#2492](https://github.com/scaleway/scaleway-sdk-js/issues/2492)) ([592c46d](https://github.com/scaleway/scaleway-sdk-js/commit/592c46df916c5b8b35f26c13b626eee797970f5d))
- **webhosting:** add custom domain to hosting ([#2312](https://github.com/scaleway/scaleway-sdk-js/issues/2312)) ([9205729](https://github.com/scaleway/scaleway-sdk-js/commit/920572938863202d914eae21fbc89febe3b7402c))
- **webhosting:** add fields to backup api ([#2511](https://github.com/scaleway/scaleway-sdk-js/issues/2511)) ([fd740e6](https://github.com/scaleway/scaleway-sdk-js/commit/fd740e6ac9101aea8f5a35669836cc85d5c9b1f5))
- **webhosting:** add free subdomain support ([#2302](https://github.com/scaleway/scaleway-sdk-js/issues/2302)) ([f92fbd0](https://github.com/scaleway/scaleway-sdk-js/commit/f92fbd075c97e76ef7089bd59539522a507c2f39))
- **webhosting:** add parent zone domain name ([#2243](https://github.com/scaleway/scaleway-sdk-js/issues/2243)) ([ba7c2fe](https://github.com/scaleway/scaleway-sdk-js/commit/ba7c2fec9899b2195a0988865500bbc4dca9a7f2))
- **webhosting:** add public backup api ([#2307](https://github.com/scaleway/scaleway-sdk-js/issues/2307)) ([1cf1b8f](https://github.com/scaleway/scaleway-sdk-js/commit/1cf1b8fc982e3de0a4b0c7fc3cf20e55f93e5f43))
- **webhosting:** deprecate CheckUserOwnsDomain endpoint ([#2329](https://github.com/scaleway/scaleway-sdk-js/issues/2329)) ([d4b8598](https://github.com/scaleway/scaleway-sdk-js/commit/d4b85989dad74a78b6fae3ae97b4d7522ab70b15))
- **webhosting:** implement FreeDomainAPI ([#2373](https://github.com/scaleway/scaleway-sdk-js/issues/2373)) ([50278b2](https://github.com/scaleway/scaleway-sdk-js/commit/50278b2d1e97f90d2641206570dc5b3f60bf3549))

# 1.2.0 (2025-09-10)

### Features

- **webhosting:** add custom domain to hosting ([#2312](https://github.com/scaleway/scaleway-sdk-js/issues/2312)) ([9205729](https://github.com/scaleway/scaleway-sdk-js/commit/920572938863202d914eae21fbc89febe3b7402c))
- **webhosting:** add free subdomain support ([#2302](https://github.com/scaleway/scaleway-sdk-js/issues/2302)) ([f92fbd0](https://github.com/scaleway/scaleway-sdk-js/commit/f92fbd075c97e76ef7089bd59539522a507c2f39))
- **webhosting:** add parent zone domain name ([#2243](https://github.com/scaleway/scaleway-sdk-js/issues/2243)) ([ba7c2fe](https://github.com/scaleway/scaleway-sdk-js/commit/ba7c2fec9899b2195a0988865500bbc4dca9a7f2))
- **webhosting:** add public backup api ([#2307](https://github.com/scaleway/scaleway-sdk-js/issues/2307)) ([1cf1b8f](https://github.com/scaleway/scaleway-sdk-js/commit/1cf1b8fc982e3de0a4b0c7fc3cf20e55f93e5f43))
- **webhosting:** deprecate CheckUserOwnsDomain endpoint ([#2329](https://github.com/scaleway/scaleway-sdk-js/issues/2329)) ([d4b8598](https://github.com/scaleway/scaleway-sdk-js/commit/d4b85989dad74a78b6fae3ae97b4d7522ab70b15))

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.0.0 (2025-01-XX)

### ⚠ BREAKING CHANGES

- packages are ESM only

### :gear: Features

- publish packages as ESM only

## 1.1.3 (2025-06-18)

### Bug Fixes

- export locality ([#2200](https://github.com/scaleway/scaleway-sdk-js/issues/2200)) ([9f0a4ec](https://github.com/scaleway/scaleway-sdk-js/commit/9f0a4ec19e377cd90c5829604467c09a2088a38c))

## 1.1.2 (2025-05-26)

**Note:** Version bump only for package @scaleway/sdk-webhosting

## [1.1.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-webhosting@1.1.0...@scaleway/sdk-webhosting@1.1.1) (2025-05-13)

**Note:** Version bump only for package @scaleway/sdk-webhosting

# [1.1.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-webhosting@1.0.1...@scaleway/sdk-webhosting@1.1.0) (2025-05-13)

### Bug Fixes

- **bundled:** remove bundled as it's buggy with deps inside pack with… ([#2096](https://github.com/scaleway/scaleway-sdk-js/issues/2096)) ([bf33ff1](https://github.com/scaleway/scaleway-sdk-js/commit/bf33ff1f9cdd951add94817dac27239c86ef5437))

### Features

- **webhosting:** use password in base64 ([#2097](https://github.com/scaleway/scaleway-sdk-js/issues/2097)) ([a138582](https://github.com/scaleway/scaleway-sdk-js/commit/a1385826c1b734161393e7d418731a5b13f40afe))

## 1.0.1 (2025-04-28)

**Note:** Version bump only for package @scaleway/sdk-webhosting
