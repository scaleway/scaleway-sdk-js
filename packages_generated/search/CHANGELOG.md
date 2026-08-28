# Change Log

## 1.11.0

### Minor Changes

- feat(search): remove temporarily IAM from public search (#3265)

- feat: add support for constants (#3286)

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.7.0

## 1.10.0

### Minor Changes

- feat(generation): improve ts metadata (#3242)

## 1.9.0

### Minor Changes

- fix(search): add missing instance_template in Resource.Type (#3233)

## 1.8.0

### Minor Changes

- refactor(search): remove enum and use a string instead (#3216)

- docs: fix typos (#3221)

- feat(datawarehouse): allow max CPU field up to 30 DTWH-563 (#3220)

## 1.7.0

### Minor Changes

- chore(deps): update dependency vite to v8.2.0 (#3205)

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.6.0

## 1.6.0

### Minor Changes

- fix(sdk): missing git url inside package.json (#3179)

- feat: update generated APIs (#3182)

- feat(cli): add new cli to manage sdk monorepo (#3186)

### Patch Changes

- Updated dependencies:
  - @scaleway/sdk-std@2.5.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.5.0 (2026-07-27)


### Features

* **search:** add relevance value to order_by enum ([#3159](https://github.com/scaleway/scaleway-sdk-js/issues/3159)) ([809f720](https://github.com/scaleway/scaleway-sdk-js/commit/809f7202db41cc817900743c3c51515ae71b5bc9))
* **search:** add sort/pagination and empty query possible ([#3149](https://github.com/scaleway/scaleway-sdk-js/issues/3149)) ([c94a5d1](https://github.com/scaleway/scaleway-sdk-js/commit/c94a5d1fef5f4d6afcd14c493c9144071b5477b2))





## [1.4.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-search@1.4.0...@scaleway/sdk-search@1.4.1) (2026-06-29)

**Note:** Version bump only for package @scaleway/sdk-search





# [1.4.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-search@1.3.0...@scaleway/sdk-search@1.4.0) (2026-06-22)


### Bug Fixes

* **searchdb:** add ignore_empty to node fields to fix backward compatibility ([#3053](https://github.com/scaleway/scaleway-sdk-js/issues/3053)) ([96296e8](https://github.com/scaleway/scaleway-sdk-js/commit/96296e8a165fe065c32b88696f9c9a03318abd67))


### Features

* **search/v1alpha1:** add iam resources ([#3052](https://github.com/scaleway/scaleway-sdk-js/issues/3052)) ([0e1d752](https://github.com/scaleway/scaleway-sdk-js/commit/0e1d75234bd29eaab4c067768b0ac73e9d66ac77))
* **search:** add support for `autoscaling_group` ([#3081](https://github.com/scaleway/scaleway-sdk-js/issues/3081)) ([2c6fbca](https://github.com/scaleway/scaleway-sdk-js/commit/2c6fbcada6c6895bccbcec74d5a540f093eb2e65))
* **search:** add support for `sedb_cluster` ([#3068](https://github.com/scaleway/scaleway-sdk-js/issues/3068)) ([1ed3dca](https://github.com/scaleway/scaleway-sdk-js/commit/1ed3dca585e5f1746342243e631fbd036e4e0b61))





# [1.3.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-search@1.2.0...@scaleway/sdk-search@1.3.0) (2026-06-15)


### Features

* **search:** add filters to search resources ([#3028](https://github.com/scaleway/scaleway-sdk-js/issues/3028)) ([14f4554](https://github.com/scaleway/scaleway-sdk-js/commit/14f455463a665328f32645c29c9cd7ab0b3fd3f5))
* **search:** add support for `kafk_cluster` ([#3051](https://github.com/scaleway/scaleway-sdk-js/issues/3051)) ([5813e10](https://github.com/scaleway/scaleway-sdk-js/commit/5813e107084b525c42468816b80c3a7ef9c1c92d))





# 1.2.0 (2026-06-08)


### Features

* **cockpit:** add api search integration ([#3018](https://github.com/scaleway/scaleway-sdk-js/issues/3018)) ([be67ee2](https://github.com/scaleway/scaleway-sdk-js/commit/be67ee2271941b3d5a8aacc263b7ce8ba451696e))
* **search:** add support for instance_private_nic instance_snapshot and instance_placement_group ([#3016](https://github.com/scaleway/scaleway-sdk-js/issues/3016)) ([54ad561](https://github.com/scaleway/scaleway-sdk-js/commit/54ad56196bf078e3a7793f68bb795dd0b7401041))





# 1.1.0 (2026-06-02)


### Features

* **messageq:** add generated messageq package ([#2962](https://github.com/scaleway/scaleway-sdk-js/issues/2962)) ([1cef2b1](https://github.com/scaleway/scaleway-sdk-js/commit/1cef2b10607641d85fc9be2272f60b12a2e5081c))
* **search:** add new resource types ([#2965](https://github.com/scaleway/scaleway-sdk-js/issues/2965)) ([73d844a](https://github.com/scaleway/scaleway-sdk-js/commit/73d844a2c9b3463ce899ea7a59d0e92cbca7f421))
* **search:** add support for CLI ([#2931](https://github.com/scaleway/scaleway-sdk-js/issues/2931)) ([d70238d](https://github.com/scaleway/scaleway-sdk-js/commit/d70238d8eb29f527658689ea07ec77cfa483262a))
