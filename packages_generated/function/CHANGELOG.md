# Change Log

## 2.15.0

### Minor Changes

- chore(engines): remove node engines (#3336)

- chore(release): publish

- fix: improve config formatting and exclude sdk index (#2675)

- feat(generation): improve ts metadata (#3242)

- chore(deps): update pnpm to v10.33.0 (#2905)

- feat(serverless): deprecate activate_vpc_integration and update documentation (#2318)

- feat: update generated APIs (#2881)

- chore(release): publish

- chore(release): publish

- chore(release): publish

- chore(release): publish

- chore(packages): upgrade deps (#3157)

- chore(deps): update dependency vite to v8.2.0 (#3205)

- fix: format (#2683)

- chore: add cursor pagination metadata support (#2879)

- chore(release): publish

- chore(deps): update node.js to >=20.19.1 (#2094)

- chore(release): publish

- chore(release): publish

- chore: format generated files (#2652)

- feat(serverless): add support for tags (#2064)

- chore: apply Biome formatting to generated files (#2757)

- chore(lint): update generated files (#2594)

- chore: align packages_generated scaffolding with generate-packages template and oxfmt (#2999)

- chore(release): publish

- fix(bundled): remove bundled as it's buggy with deps inside pack with… (#2096)

- feat: update generated APIs (#2568)

- chore: format generated files (#2659)

- chore(release): publish

- fix(build): output (#2842)

- chore(release): publish

- chore(serverless): deprecate CreateToken (#2620)

- chore(release): publish

- feat: publish packages as ESM only (#2624)

- chore: reorder imports/exports in generated files (#2267)

- chore(release): publish

- feat(functions): deprecate old runtimes and add new ones (#3098)

- fix(client): restore waitForResource to 4-parameter signature (#3517)

- chore(release): publish

- feat(cli): add new cli to manage sdk monorepo (#3186)

- chore(deps): update node.js to >=20.19.4 (#2280)

- chore: fix formating (#2669)

- chore(deps): update dependency prettier to v3.8.3 (#2907)

- chore(deps): update node.js to >=20.20.2 (#2960)

- chore(deps): remove all unused deps (#3165)

- chore(fmt): apply biome import reordering to generated packages (#2954)

- feat(sdk): add metadata of the package (#2902)

- chore(deps): update node.js to >=20.19.6 (#2604)

- chore: sync generated files after build (#2862)

- chore(release): publish

- chore(deps): update dependency @scaleway/random-name to v5.1.2 (#2297)

- chore(release): publish

- fix: sdk client deps (#2056)

- feat(chore): add automatic README generation for npm packages (#2541)

- chore: remove post-generate updates (#3168)

- fix: change tabs into space (#2688)

- chore(release): publish

- chore(release): publish

- chore(release): publish

- chore(release): publish

- chore(release): publish

- feat(sdk): generated packages (#2029)

- chore(release): publish

- fix: export locality (#2200)

- chore(release): publish

- chore(release): publish

- chore(release): publish

- feat: enable formatting for generated files (#2690)

- docs(serverless): clarify UpdateContainer and UpdateFunction behavior (#2347)

- fix(oxlint): enable eslint/max-params as error (#3492)

- feat: add extension .js for nodenext (#2492)

- chore(lint): lint tsconfigs (#2968)

- chore(release): publish

- chore: add extension .js for nodenext in generated files (#2472)

- chore: new formating (#2667)

- docs(serverless): clarify UpdateContainer and UpdateFunction behavior (#2353)

- chore(release): publish

- chore: reorganize import (#2520)

- feat: add support for constants (#3286)

- chore(typescript): upgrade version (#2916)

- chore(release): publish

- fix(serverless): allow empty string for privateNetworkID in create (#2223)

- chore(release): publish

- feat(functions): add audit trail annotations (#3249)

- feat: update generated APIs (#3182)

- chore(release): publish

- chore: fix metadata.gen.ts for returnTypeNamespace (#3360)

- feat(partner): remove siren_number from CreateOrganization and Organization (#3530)

- chore(release): realign git versions with npm (#3356)

- chore(generate-api): use metadata instead of ts-morph (#2901)

- chore(packages): add licence field, use exports field everywhere (#2147)

- feat(sdk): unify tools (#2903)

- feat(functions): add support for VPC integration (#2175)

- chore(release): publish

- fix(sdk): missing git url inside package.json (#3179)

- feat(sdk-react): add react sdk (#2794)

- chore(release): publish

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.8.3

## 2.14.1

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.8.2

## 2.14.0

### Minor Changes

- feat(partner): remove siren_number from CreateOrganization and Organization (#3530)

- fix(client): restore waitForResource to 4-parameter signature (#3517)

- fix(oxlint): enable eslint/max-params as error (#3492)

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.8.1

## 2.13.0

### Minor Changes

- chore(release): realign git versions with npm (#3356)

- chore(engines): remove node engines (#3336)

- chore: fix metadata.gen.ts for returnTypeNamespace (#3360)

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.8.0

## 2.12.1

### Patch Changes

- Updated dependencies


## 2.12.0

### Minor Changes

- feat: add support for constants (#3286)

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.7.0

## 2.11.0

### Minor Changes

- feat(functions): add audit trail annotations (#3249)

## 2.10.0

### Minor Changes

- feat(generation): improve ts metadata (#3242)

## 2.9.0

### Minor Changes

- chore(deps): update dependency vite to v8.2.0 (#3205)

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.6.0

## 2.8.0

### Minor Changes

- fix(sdk): missing git url inside package.json (#3179)

- feat: update generated APIs (#3182)

- feat(cli): add new cli to manage sdk monorepo (#3186)

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.5.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.7.1 (2026-07-27)

**Note:** Version bump only for package @scaleway/sdk-function





# 2.7.0 (2026-06-29)


### Features

* **functions:** deprecate old runtimes and add new ones ([#3098](https://github.com/scaleway/scaleway-sdk-js/issues/3098)) ([4d42ef6](https://github.com/scaleway/scaleway-sdk-js/commit/4d42ef6c7f717f132da202a73d0745df453e08e0))





## [2.6.2](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@2.6.1...@scaleway/sdk-function@2.6.2) (2026-06-02)

**Note:** Version bump only for package @scaleway/sdk-function





## 2.6.1 (2026-04-18)

**Note:** Version bump only for package @scaleway/sdk-function

# [2.6.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@2.5.0...@scaleway/sdk-function@2.6.0) (2026-04-17)

### Features

- **sdk:** unify tools ([#2903](https://github.com/scaleway/scaleway-sdk-js/issues/2903)) ([e0b99e4](https://github.com/scaleway/scaleway-sdk-js/commit/e0b99e47da92c514e06aef2a6c739b9653c9ba45))

# 2.5.0 (2026-04-17)

### Features

- **sdk:** add metadata of the package ([#2902](https://github.com/scaleway/scaleway-sdk-js/issues/2902)) ([e44f293](https://github.com/scaleway/scaleway-sdk-js/commit/e44f293cc1ba24625cc313b7d612ca1200b8b40f))

# [2.4.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@2.3.2...@scaleway/sdk-function@2.4.0) (2026-04-02)

### Features

- update generated APIs ([#2881](https://github.com/scaleway/scaleway-sdk-js/issues/2881)) ([79e7ad8](https://github.com/scaleway/scaleway-sdk-js/commit/79e7ad88355e2d8073764b2459749f3888493302))

## 2.3.2 (2026-03-27)

### Bug Fixes

- **build:** output ([#2842](https://github.com/scaleway/scaleway-sdk-js/issues/2842)) ([4cc01dd](https://github.com/scaleway/scaleway-sdk-js/commit/4cc01dd01c88c29f6c46afd4fc22eeb0ae392b9d))

## [2.3.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@2.3.0...@scaleway/sdk-function@2.3.1) (2026-03-05)

**Note:** Version bump only for package @scaleway/sdk-function

# 2.3.0 (2026-03-05)

### Features

- **sdk-react:** add react sdk ([#2794](https://github.com/scaleway/scaleway-sdk-js/issues/2794)) ([7dfbf6b](https://github.com/scaleway/scaleway-sdk-js/commit/7dfbf6b4d4eae5f95cd05ff7433e30c522619475))

## 2.2.1 (2026-02-23)

**Note:** Version bump only for package @scaleway/sdk-function

# [2.2.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@2.1.1...@scaleway/sdk-function@2.2.0) (2025-12-22)

### Features

- enable formatting for generated files ([#2690](https://github.com/scaleway/scaleway-sdk-js/issues/2690)) ([22bd858](https://github.com/scaleway/scaleway-sdk-js/commit/22bd8586604b732deb22c135e88690c2026b5a3d))

## [2.1.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@2.1.0...@scaleway/sdk-function@2.1.1) (2025-12-22)

### Bug Fixes

- change tabs into space ([#2688](https://github.com/scaleway/scaleway-sdk-js/issues/2688)) ([4bc7722](https://github.com/scaleway/scaleway-sdk-js/commit/4bc77229bef6d9942316fe9574f698a3684c2e41))
- format ([#2683](https://github.com/scaleway/scaleway-sdk-js/issues/2683)) ([ac589ad](https://github.com/scaleway/scaleway-sdk-js/commit/ac589ad8f5102d325d2e870ecded1fd1718b011b))

# 2.1.0 (2025-12-19)

### Bug Fixes

- improve config formatting and exclude sdk index ([#2675](https://github.com/scaleway/scaleway-sdk-js/issues/2675)) ([366c334](https://github.com/scaleway/scaleway-sdk-js/commit/366c334ad282325ec22bce95f6d90d8130081f1f))
- **serverless:** allow empty string for privateNetworkID in create ([#2223](https://github.com/scaleway/scaleway-sdk-js/issues/2223)) ([2513104](https://github.com/scaleway/scaleway-sdk-js/commit/2513104f91ac70978d75469c4205a3335839b97e))

### Features

- add extension .js for nodenext ([#2492](https://github.com/scaleway/scaleway-sdk-js/issues/2492)) ([592c46d](https://github.com/scaleway/scaleway-sdk-js/commit/592c46df916c5b8b35f26c13b626eee797970f5d))
- **chore:** add automatic README generation for npm packages ([#2541](https://github.com/scaleway/scaleway-sdk-js/issues/2541)) ([7e8f769](https://github.com/scaleway/scaleway-sdk-js/commit/7e8f769eb14972abb26d6e207844f4a8653e7e90))
- publish packages as ESM only ([#2624](https://github.com/scaleway/scaleway-sdk-js/issues/2624)) ([8ab940d](https://github.com/scaleway/scaleway-sdk-js/commit/8ab940deadfbc8fc0d540148c51868dae63a74af))
- **serverless:** deprecate activate_vpc_integration and update documentation ([#2318](https://github.com/scaleway/scaleway-sdk-js/issues/2318)) ([0a6e366](https://github.com/scaleway/scaleway-sdk-js/commit/0a6e3666b9dc6755a05f00912b1c80648c2f6923))
- update generated APIs ([#2568](https://github.com/scaleway/scaleway-sdk-js/issues/2568)) ([2f69cad](https://github.com/scaleway/scaleway-sdk-js/commit/2f69cadbcd2ad5a9559dafc96e1bb447bbd13ff9))

# 1.7.0 (2025-10-29)

### Bug Fixes

- **serverless:** allow empty string for privateNetworkID in create ([#2223](https://github.com/scaleway/scaleway-sdk-js/issues/2223)) ([2513104](https://github.com/scaleway/scaleway-sdk-js/commit/2513104f91ac70978d75469c4205a3335839b97e))

### Features

- add extension .js for nodenext ([#2492](https://github.com/scaleway/scaleway-sdk-js/issues/2492)) ([592c46d](https://github.com/scaleway/scaleway-sdk-js/commit/592c46df916c5b8b35f26c13b626eee797970f5d))
- **serverless:** deprecate activate_vpc_integration and update documentation ([#2318](https://github.com/scaleway/scaleway-sdk-js/issues/2318)) ([0a6e366](https://github.com/scaleway/scaleway-sdk-js/commit/0a6e3666b9dc6755a05f00912b1c80648c2f6923))

# 1.6.0 (2025-10-22)

### Bug Fixes

- **serverless:** allow empty string for privateNetworkID in create ([#2223](https://github.com/scaleway/scaleway-sdk-js/issues/2223)) ([2513104](https://github.com/scaleway/scaleway-sdk-js/commit/2513104f91ac70978d75469c4205a3335839b97e))

### Features

- add extension .js for nodenext ([#2492](https://github.com/scaleway/scaleway-sdk-js/issues/2492)) ([592c46d](https://github.com/scaleway/scaleway-sdk-js/commit/592c46df916c5b8b35f26c13b626eee797970f5d))
- **serverless:** deprecate activate_vpc_integration and update documentation ([#2318](https://github.com/scaleway/scaleway-sdk-js/issues/2318)) ([0a6e366](https://github.com/scaleway/scaleway-sdk-js/commit/0a6e3666b9dc6755a05f00912b1c80648c2f6923))

# 1.5.0 (2025-09-10)

### Bug Fixes

- **serverless:** allow empty string for privateNetworkID in create ([#2223](https://github.com/scaleway/scaleway-sdk-js/issues/2223)) ([2513104](https://github.com/scaleway/scaleway-sdk-js/commit/2513104f91ac70978d75469c4205a3335839b97e))

### Features

- **serverless:** deprecate activate_vpc_integration and update documentation ([#2318](https://github.com/scaleway/scaleway-sdk-js/issues/2318)) ([0a6e366](https://github.com/scaleway/scaleway-sdk-js/commit/0a6e3666b9dc6755a05f00912b1c80648c2f6923))

# 1.4.0 (2025-06-18)

### Bug Fixes

- export locality ([#2200](https://github.com/scaleway/scaleway-sdk-js/issues/2200)) ([9f0a4ec](https://github.com/scaleway/scaleway-sdk-js/commit/9f0a4ec19e377cd90c5829604467c09a2088a38c))

### Features

- **functions:** add support for VPC integration ([#2175](https://github.com/scaleway/scaleway-sdk-js/issues/2175)) ([43f3e50](https://github.com/scaleway/scaleway-sdk-js/commit/43f3e50b4ac928972232d78fb70ddeff50192d0f))

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.0.0 (2025-01-XX)

### ⚠ BREAKING CHANGES

- packages are ESM only

### :gear: Features

- publish packages as ESM only

## 1.3.2 (2025-05-26)

**Note:** Version bump only for package @scaleway/sdk-function

## [1.3.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@1.3.0...@scaleway/sdk-function@1.3.1) (2025-05-13)

**Note:** Version bump only for package @scaleway/sdk-function

# [1.3.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@1.0.1...@scaleway/sdk-function@1.3.0) (2025-05-13)

### Bug Fixes

- **bundled:** remove bundled as it's buggy with deps inside pack with… ([#2096](https://github.com/scaleway/scaleway-sdk-js/issues/2096)) ([bf33ff1](https://github.com/scaleway/scaleway-sdk-js/commit/bf33ff1f9cdd951add94817dac27239c86ef5437))

### Features

- **serverless:** add support for tags ([#2064](https://github.com/scaleway/scaleway-sdk-js/issues/2064)) ([9507acb](https://github.com/scaleway/scaleway-sdk-js/commit/9507acb1aa7d22b2abdda35bc056fa86330a37d4))

# [1.2.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@1.0.1...@scaleway/sdk-function@1.2.0) (2025-05-05)

### Features

- **serverless:** add support for tags ([#2064](https://github.com/scaleway/scaleway-sdk-js/issues/2064)) ([9507acb](https://github.com/scaleway/scaleway-sdk-js/commit/9507acb1aa7d22b2abdda35bc056fa86330a37d4))

# [1.1.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-function@1.0.1...@scaleway/sdk-function@1.1.0) (2025-05-05)

### Features

- **serverless:** add support for tags ([#2064](https://github.com/scaleway/scaleway-sdk-js/issues/2064)) ([9507acb](https://github.com/scaleway/scaleway-sdk-js/commit/9507acb1aa7d22b2abdda35bc056fa86330a37d4))

## 1.0.1 (2025-04-28)

**Note:** Version bump only for package @scaleway/sdk-function
