# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.1.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-iam@1.3.0...@scaleway/sdk-iam@2.1.0) (2025-12-19)

### Bug Fixes

- **iam/v1alpha1:** add max_bytes rule to password validation ([#2259](https://github.com/scaleway/scaleway-sdk-js/issues/2259)) ([c9a68c1](https://github.com/scaleway/scaleway-sdk-js/commit/c9a68c13fa69f50182e301da89efe95165a4477f))
- **iam/v1alpha1:** add max_bytes rule to update password validation ([#2260](https://github.com/scaleway/scaleway-sdk-js/issues/2260)) ([ab7dde5](https://github.com/scaleway/scaleway-sdk-js/commit/ab7dde5289593fc942b2558185a311f35764d15e))
- **iam/v1alpha1:** set UpdateOrganizationLoginMethods body ([#2508](https://github.com/scaleway/scaleway-sdk-js/issues/2508)) ([08c24a6](https://github.com/scaleway/scaleway-sdk-js/commit/08c24a64096de5c596f251919cc2f3780f38554c))
- improve config formatting and exclude sdk index ([#2675](https://github.com/scaleway/scaleway-sdk-js/issues/2675)) ([366c334](https://github.com/scaleway/scaleway-sdk-js/commit/366c334ad282325ec22bce95f6d90d8130081f1f))

### Features

- **chore:** add automatic README generation for npm packages ([#2541](https://github.com/scaleway/scaleway-sdk-js/issues/2541)) ([7e8f769](https://github.com/scaleway/scaleway-sdk-js/commit/7e8f769eb14972abb26d6e207844f4a8653e7e90))
- **iam/v1alpha1:** add GetSamlInformation ([#2324](https://github.com/scaleway/scaleway-sdk-js/issues/2324)) ([71db561](https://github.com/scaleway/scaleway-sdk-js/commit/71db5612a9d20b18c97932831c2cddf12ebcccc3))
- **iam/v1alpha1:** add ParseSamlMetadata ([#2523](https://github.com/scaleway/scaleway-sdk-js/issues/2523)) ([b0db04d](https://github.com/scaleway/scaleway-sdk-js/commit/b0db04de8017560b9897b0a4bc3b598cebcc756e))
- **iam/v1alpha1:** add UpdateOrganizationLoginMethods ([#2484](https://github.com/scaleway/scaleway-sdk-js/issues/2484)) ([9b35ebb](https://github.com/scaleway/scaleway-sdk-js/commit/9b35ebbefe6e9edc6ad6f32885db5373079f7fff))
- **iam:** add expires_at to updateable API key fields ([#2532](https://github.com/scaleway/scaleway-sdk-js/issues/2532)) ([6b7d806](https://github.com/scaleway/scaleway-sdk-js/commit/6b7d806b150889d13a44186a37685dde83689d3a))
- **iam:** add GetOrganizationScim method ([#2633](https://github.com/scaleway/scaleway-sdk-js/issues/2633)) ([b686e0b](https://github.com/scaleway/scaleway-sdk-js/commit/b686e0b57f168841cbb0a6a77d3eea14d7613ece))
- **iam:** add max_api_key_expiration_duration to OrganizationSecuritySettings ([#2527](https://github.com/scaleway/scaleway-sdk-js/issues/2527)) ([deb9c44](https://github.com/scaleway/scaleway-sdk-js/commit/deb9c4413f5db5570f6af51c88af5763f533f1af))
- **iam:** add max_login_session_days security setting ([#2450](https://github.com/scaleway/scaleway-sdk-js/issues/2450)) ([72dff65](https://github.com/scaleway/scaleway-sdk-js/commit/72dff65c03d7fbd71f03d6e36cbe78f9e098a210))
- **iam:** add saml certificate expires_at field ([#2248](https://github.com/scaleway/scaleway-sdk-js/issues/2248)) ([95288dc](https://github.com/scaleway/scaleway-sdk-js/commit/95288dc74cc591026533ace8189a198f531305e1))
- **iam:** add SCIM related endpoints ([#2562](https://github.com/scaleway/scaleway-sdk-js/issues/2562)) ([8d3966f](https://github.com/scaleway/scaleway-sdk-js/commit/8d3966fc66614bc28d3801f0c847a44df9345b53))
- **iam:** increase max username length ([#2674](https://github.com/scaleway/scaleway-sdk-js/issues/2674)) ([2f52671](https://github.com/scaleway/scaleway-sdk-js/commit/2f52671d9e2216713b29eb8027cfdf8b15509160))
- **iam:** remove guest from user type ([#2494](https://github.com/scaleway/scaleway-sdk-js/issues/2494)) ([f21355c](https://github.com/scaleway/scaleway-sdk-js/commit/f21355c92a8ca675af3c894877d0754224b88e4d))
- **iam:** remove MigrateOrganizationGuests method ([#2507](https://github.com/scaleway/scaleway-sdk-js/issues/2507)) ([ef40081](https://github.com/scaleway/scaleway-sdk-js/commit/ef4008131343cd6bab1f5e20dbba8616688b89ee))
- **iam:** rework saml endpoints ([#2346](https://github.com/scaleway/scaleway-sdk-js/issues/2346)) ([6d3a37d](https://github.com/scaleway/scaleway-sdk-js/commit/6d3a37dfcf4731df4546827ea73d60f55147eb22))
- publish packages as ESM only ([#2624](https://github.com/scaleway/scaleway-sdk-js/issues/2624)) ([8ab940d](https://github.com/scaleway/scaleway-sdk-js/commit/8ab940deadfbc8fc0d540148c51868dae63a74af))
- update generated APIs ([#2568](https://github.com/scaleway/scaleway-sdk-js/issues/2568)) ([2f69cad](https://github.com/scaleway/scaleway-sdk-js/commit/2f69cadbcd2ad5a9559dafc96e1bb447bbd13ff9))

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.0.0 (2025-01-XX)

### ⚠ BREAKING CHANGES

- packages are ESM only

### :gear: Features

- publish packages as ESM only

# [1.6.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-iam@1.3.0...@scaleway/sdk-iam@1.6.0) (2025-10-29)

### Bug Fixes

- **iam/v1alpha1:** add max_bytes rule to password validation ([#2259](https://github.com/scaleway/scaleway-sdk-js/issues/2259)) ([c9a68c1](https://github.com/scaleway/scaleway-sdk-js/commit/c9a68c13fa69f50182e301da89efe95165a4477f))
- **iam/v1alpha1:** add max_bytes rule to update password validation ([#2260](https://github.com/scaleway/scaleway-sdk-js/issues/2260)) ([ab7dde5](https://github.com/scaleway/scaleway-sdk-js/commit/ab7dde5289593fc942b2558185a311f35764d15e))
- **iam/v1alpha1:** set UpdateOrganizationLoginMethods body ([#2508](https://github.com/scaleway/scaleway-sdk-js/issues/2508)) ([08c24a6](https://github.com/scaleway/scaleway-sdk-js/commit/08c24a64096de5c596f251919cc2f3780f38554c))

### Features

- **iam/v1alpha1:** add GetSamlInformation ([#2324](https://github.com/scaleway/scaleway-sdk-js/issues/2324)) ([71db561](https://github.com/scaleway/scaleway-sdk-js/commit/71db5612a9d20b18c97932831c2cddf12ebcccc3))
- **iam/v1alpha1:** add ParseSamlMetadata ([#2523](https://github.com/scaleway/scaleway-sdk-js/issues/2523)) ([b0db04d](https://github.com/scaleway/scaleway-sdk-js/commit/b0db04de8017560b9897b0a4bc3b598cebcc756e))
- **iam/v1alpha1:** add UpdateOrganizationLoginMethods ([#2484](https://github.com/scaleway/scaleway-sdk-js/issues/2484)) ([9b35ebb](https://github.com/scaleway/scaleway-sdk-js/commit/9b35ebbefe6e9edc6ad6f32885db5373079f7fff))
- **iam:** add expires_at to updateable API key fields ([#2532](https://github.com/scaleway/scaleway-sdk-js/issues/2532)) ([6b7d806](https://github.com/scaleway/scaleway-sdk-js/commit/6b7d806b150889d13a44186a37685dde83689d3a))
- **iam:** add max_api_key_expiration_duration to OrganizationSecuritySettings ([#2527](https://github.com/scaleway/scaleway-sdk-js/issues/2527)) ([deb9c44](https://github.com/scaleway/scaleway-sdk-js/commit/deb9c4413f5db5570f6af51c88af5763f533f1af))
- **iam:** add max_login_session_days security setting ([#2450](https://github.com/scaleway/scaleway-sdk-js/issues/2450)) ([72dff65](https://github.com/scaleway/scaleway-sdk-js/commit/72dff65c03d7fbd71f03d6e36cbe78f9e098a210))
- **iam:** add saml certificate expires_at field ([#2248](https://github.com/scaleway/scaleway-sdk-js/issues/2248)) ([95288dc](https://github.com/scaleway/scaleway-sdk-js/commit/95288dc74cc591026533ace8189a198f531305e1))
- **iam:** remove guest from user type ([#2494](https://github.com/scaleway/scaleway-sdk-js/issues/2494)) ([f21355c](https://github.com/scaleway/scaleway-sdk-js/commit/f21355c92a8ca675af3c894877d0754224b88e4d))
- **iam:** remove MigrateOrganizationGuests method ([#2507](https://github.com/scaleway/scaleway-sdk-js/issues/2507)) ([ef40081](https://github.com/scaleway/scaleway-sdk-js/commit/ef4008131343cd6bab1f5e20dbba8616688b89ee))
- **iam:** rework saml endpoints ([#2346](https://github.com/scaleway/scaleway-sdk-js/issues/2346)) ([6d3a37d](https://github.com/scaleway/scaleway-sdk-js/commit/6d3a37dfcf4731df4546827ea73d60f55147eb22))

# [1.5.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-iam@1.3.0...@scaleway/sdk-iam@1.5.0) (2025-10-22)

### Bug Fixes

- **iam/v1alpha1:** add max_bytes rule to password validation ([#2259](https://github.com/scaleway/scaleway-sdk-js/issues/2259)) ([c9a68c1](https://github.com/scaleway/scaleway-sdk-js/commit/c9a68c13fa69f50182e301da89efe95165a4477f))
- **iam/v1alpha1:** add max_bytes rule to update password validation ([#2260](https://github.com/scaleway/scaleway-sdk-js/issues/2260)) ([ab7dde5](https://github.com/scaleway/scaleway-sdk-js/commit/ab7dde5289593fc942b2558185a311f35764d15e))
- **iam/v1alpha1:** set UpdateOrganizationLoginMethods body ([#2508](https://github.com/scaleway/scaleway-sdk-js/issues/2508)) ([08c24a6](https://github.com/scaleway/scaleway-sdk-js/commit/08c24a64096de5c596f251919cc2f3780f38554c))

### Features

- **iam/v1alpha1:** add GetSamlInformation ([#2324](https://github.com/scaleway/scaleway-sdk-js/issues/2324)) ([71db561](https://github.com/scaleway/scaleway-sdk-js/commit/71db5612a9d20b18c97932831c2cddf12ebcccc3))
- **iam/v1alpha1:** add ParseSamlMetadata ([#2523](https://github.com/scaleway/scaleway-sdk-js/issues/2523)) ([b0db04d](https://github.com/scaleway/scaleway-sdk-js/commit/b0db04de8017560b9897b0a4bc3b598cebcc756e))
- **iam/v1alpha1:** add UpdateOrganizationLoginMethods ([#2484](https://github.com/scaleway/scaleway-sdk-js/issues/2484)) ([9b35ebb](https://github.com/scaleway/scaleway-sdk-js/commit/9b35ebbefe6e9edc6ad6f32885db5373079f7fff))
- **iam:** add max_api_key_expiration_duration to OrganizationSecuritySettings ([#2527](https://github.com/scaleway/scaleway-sdk-js/issues/2527)) ([deb9c44](https://github.com/scaleway/scaleway-sdk-js/commit/deb9c4413f5db5570f6af51c88af5763f533f1af))
- **iam:** add max_login_session_days security setting ([#2450](https://github.com/scaleway/scaleway-sdk-js/issues/2450)) ([72dff65](https://github.com/scaleway/scaleway-sdk-js/commit/72dff65c03d7fbd71f03d6e36cbe78f9e098a210))
- **iam:** add saml certificate expires_at field ([#2248](https://github.com/scaleway/scaleway-sdk-js/issues/2248)) ([95288dc](https://github.com/scaleway/scaleway-sdk-js/commit/95288dc74cc591026533ace8189a198f531305e1))
- **iam:** remove guest from user type ([#2494](https://github.com/scaleway/scaleway-sdk-js/issues/2494)) ([f21355c](https://github.com/scaleway/scaleway-sdk-js/commit/f21355c92a8ca675af3c894877d0754224b88e4d))
- **iam:** remove MigrateOrganizationGuests method ([#2507](https://github.com/scaleway/scaleway-sdk-js/issues/2507)) ([ef40081](https://github.com/scaleway/scaleway-sdk-js/commit/ef4008131343cd6bab1f5e20dbba8616688b89ee))
- **iam:** rework saml endpoints ([#2346](https://github.com/scaleway/scaleway-sdk-js/issues/2346)) ([6d3a37d](https://github.com/scaleway/scaleway-sdk-js/commit/6d3a37dfcf4731df4546827ea73d60f55147eb22))

# [1.4.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-iam@1.3.0...@scaleway/sdk-iam@1.4.0) (2025-09-10)

### Bug Fixes

- **iam/v1alpha1:** add max_bytes rule to password validation ([#2259](https://github.com/scaleway/scaleway-sdk-js/issues/2259)) ([c9a68c1](https://github.com/scaleway/scaleway-sdk-js/commit/c9a68c13fa69f50182e301da89efe95165a4477f))
- **iam/v1alpha1:** add max_bytes rule to update password validation ([#2260](https://github.com/scaleway/scaleway-sdk-js/issues/2260)) ([ab7dde5](https://github.com/scaleway/scaleway-sdk-js/commit/ab7dde5289593fc942b2558185a311f35764d15e))

### Features

- **iam/v1alpha1:** add GetSamlInformation ([#2324](https://github.com/scaleway/scaleway-sdk-js/issues/2324)) ([71db561](https://github.com/scaleway/scaleway-sdk-js/commit/71db5612a9d20b18c97932831c2cddf12ebcccc3))
- **iam:** add saml certificate expires_at field ([#2248](https://github.com/scaleway/scaleway-sdk-js/issues/2248)) ([95288dc](https://github.com/scaleway/scaleway-sdk-js/commit/95288dc74cc591026533ace8189a198f531305e1))
- **iam:** rework saml endpoints ([#2346](https://github.com/scaleway/scaleway-sdk-js/issues/2346)) ([6d3a37d](https://github.com/scaleway/scaleway-sdk-js/commit/6d3a37dfcf4731df4546827ea73d60f55147eb22))

# 1.3.0 (2025-06-30)

### Features

- **iam:** allow @ in username ([#2212](https://github.com/scaleway/scaleway-sdk-js/issues/2212)) ([b5b799f](https://github.com/scaleway/scaleway-sdk-js/commit/b5b799f074734a5adb9f80b458d7d9297779af3b))

# 1.2.0 (2025-06-18)

### Features

- **iam/v1alpha1:** add user connection routes ([#2164](https://github.com/scaleway/scaleway-sdk-js/issues/2164)) ([83c5b67](https://github.com/scaleway/scaleway-sdk-js/commit/83c5b67c89c37fb2c0b131abb38987e288f1d0dc))
- **iam:** add GetOrganization and SetOrganizationAlias ([#2183](https://github.com/scaleway/scaleway-sdk-js/issues/2183)) ([486aa0e](https://github.com/scaleway/scaleway-sdk-js/commit/486aa0edc08ab8a56e480611dc9c7da6b99b2668))
- **iam:** increase rules condition max_len to 2048 ([#2172](https://github.com/scaleway/scaleway-sdk-js/issues/2172)) ([7c8eeee](https://github.com/scaleway/scaleway-sdk-js/commit/7c8eeeeb5bc94ff0d115b7322f40ce4a48839df8))

## [1.1.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-iam@1.1.0...@scaleway/sdk-iam@1.1.1) (2025-05-26)

**Note:** Version bump only for package @scaleway/sdk-iam

# [1.1.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-iam@1.0.3...@scaleway/sdk-iam@1.1.0) (2025-05-19)

### Features

- **iam:** add guest migration endpoint ([#2132](https://github.com/scaleway/scaleway-sdk-js/issues/2132)) ([95da633](https://github.com/scaleway/scaleway-sdk-js/commit/95da6339fd169635dc54f26d409705a47777ccc6))

## [1.0.3](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-iam@1.0.2...@scaleway/sdk-iam@1.0.3) (2025-05-13)

**Note:** Version bump only for package @scaleway/sdk-iam

## [1.0.2](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk-iam@1.0.1...@scaleway/sdk-iam@1.0.2) (2025-05-13)

### Bug Fixes

- **bundled:** remove bundled as it's buggy with deps inside pack with… ([#2096](https://github.com/scaleway/scaleway-sdk-js/issues/2096)) ([bf33ff1](https://github.com/scaleway/scaleway-sdk-js/commit/bf33ff1f9cdd951add94817dac27239c86ef5437))

## 1.0.1 (2025-04-28)

**Note:** Version bump only for package @scaleway/sdk-iam
