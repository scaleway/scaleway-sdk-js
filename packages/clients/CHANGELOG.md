# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.10.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.9.0...@scaleway/sdk@1.10.0) (2023-05-10)

### Features

- add `responseError` interceptor ([#643](https://github.com/scaleway/scaleway-sdk-js/issues/643)) ([cd58ba4](https://github.com/scaleway/scaleway-sdk-js/commit/cd58ba43210eb0d9229f500d65d30a8f30af8253))

## [1.9.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.8.0...@scaleway/sdk@1.9.0) (2023-05-08)

### Features

- **account/v2:** default generated project name ([#636](https://github.com/scaleway/scaleway-sdk-js/issues/636)) ([c75d638](https://github.com/scaleway/scaleway-sdk-js/commit/c75d638ae73ca8079d863ddaa56b0267868f09a3))
- **baremetal:** define if an organization is allowed to install the OS ([#640](https://github.com/scaleway/scaleway-sdk-js/issues/640)) ([6cdffdf](https://github.com/scaleway/scaleway-sdk-js/commit/6cdffdf99109e278bfb7895edd5344acb0aebc62))
- **function:** add node20 runtime ([#637](https://github.com/scaleway/scaleway-sdk-js/issues/637)) ([6fd59dd](https://github.com/scaleway/scaleway-sdk-js/commit/6fd59dd9be0aa7e727d31d60089ec84e7cb4c8e2))
- **iam:** add accountRootUserId in User ([#644](https://github.com/scaleway/scaleway-sdk-js/issues/644)) ([3897493](https://github.com/scaleway/scaleway-sdk-js/commit/38974939fe8aa86c1cc3f5f9b2ba43149cca5938))

## [1.8.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.7.0...@scaleway/sdk@1.8.0) (2023-04-24)

### Features

- **container:** add cpuLimit to create / update containers ([#618](https://github.com/scaleway/scaleway-sdk-js/issues/618)) ([100247e](https://github.com/scaleway/scaleway-sdk-js/commit/100247eda87db35261980f23ea757c9af4bb3324))

## [1.7.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.6.0...@scaleway/sdk@1.7.0) (2023-04-17)

### Features

- **iam:** add User.mfa and deprecate twoFactorEnabled ([#586](https://github.com/scaleway/scaleway-sdk-js/issues/586)) ([39e3dda](https://github.com/scaleway/scaleway-sdk-js/commit/39e3dda9236ce913330ef042bf17f5e1fc6598e4))
- **secret:** add isLatest field to SecretVersion ([#582](https://github.com/scaleway/scaleway-sdk-js/issues/582)) ([3cb7ec1](https://github.com/scaleway/scaleway-sdk-js/commit/3cb7ec144ee050eeb8efe3c11e6fc291d3ddb74e))
- **secret:** add managed secrets ([#606](https://github.com/scaleway/scaleway-sdk-js/issues/606)) ([b3547f5](https://github.com/scaleway/scaleway-sdk-js/commit/b3547f5eacbb6e182c0a0008bef9a094de9e72fc))
- **secret:** add secret version CRC32 ([#578](https://github.com/scaleway/scaleway-sdk-js/issues/578)) ([f1a5662](https://github.com/scaleway/scaleway-sdk-js/commit/f1a56629e0af1749c166c95116677f9204b9a311))
- **secret:** use optional type for some request fields ([#610](https://github.com/scaleway/scaleway-sdk-js/issues/610)) ([34bbc3e](https://github.com/scaleway/scaleway-sdk-js/commit/34bbc3e758f5fcae03dedfe96167dd268c5d5e55))
- **serverless:** add build message ([#608](https://github.com/scaleway/scaleway-sdk-js/issues/608)) ([ba02c93](https://github.com/scaleway/scaleway-sdk-js/commit/ba02c93979a8f5e4e80ccb8fc531d9f37a3694c5))

### Bug Fixes

- **serverless:** make some fields optional to create/update triggers ([#579](https://github.com/scaleway/scaleway-sdk-js/issues/579)) ([370d81c](https://github.com/scaleway/scaleway-sdk-js/commit/370d81c019684d4e150d653d2e0dfb22a17e3228))

## [1.6.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.5.0...@scaleway/sdk@1.6.0) (2023-04-03)

### Features

- **cockpit:** add listPlans and selectPlan endpoints ([#569](https://github.com/scaleway/scaleway-sdk-js/issues/569)) ([78a74da](https://github.com/scaleway/scaleway-sdk-js/commit/78a74dae2e345003765f0315405ebecd76ae3a14))
- **cockpit:** get usage metrics ([#562](https://github.com/scaleway/scaleway-sdk-js/issues/562)) ([b0b8f80](https://github.com/scaleway/scaleway-sdk-js/commit/b0b8f80beaf1b53ed6d2e3e79ac88e0d0bc9c7e6))
- **iam:** use the same validation rule for pages ([#572](https://github.com/scaleway/scaleway-sdk-js/issues/572)) ([b70829c](https://github.com/scaleway/scaleway-sdk-js/commit/b70829cf0e1333e91de64e06a74c277539878f59))
- **lb:** add new backend options: retries, redispatch and fastinter ([#559](https://github.com/scaleway/scaleway-sdk-js/issues/559)) ([954a6b2](https://github.com/scaleway/scaleway-sdk-js/commit/954a6b2c50842a536475507bcbd9f9f8a7714f1e))
- **redis:** ipam integration ([#564](https://github.com/scaleway/scaleway-sdk-js/issues/564)) ([5f95d68](https://github.com/scaleway/scaleway-sdk-js/commit/5f95d68000b44f18b70229e20a90f3fd0538ec8b))
- **secret:** add option to disable previous version when creating a new Secret Version ([#561](https://github.com/scaleway/scaleway-sdk-js/issues/561)) ([e8bd249](https://github.com/scaleway/scaleway-sdk-js/commit/e8bd249641160fda68ccdf3453ea6c13139cfad0))
- **secret:** add option to generate passwords ([#567](https://github.com/scaleway/scaleway-sdk-js/issues/567)) ([7767a7d](https://github.com/scaleway/scaleway-sdk-js/commit/7767a7d8ea3d3b2598c8cc068a7702d30a2a286c))
- **serverless:** change UpdateTriggerRequest to only be able to update a few fields ([#566](https://github.com/scaleway/scaleway-sdk-js/issues/566)) ([3cfa9e9](https://github.com/scaleway/scaleway-sdk-js/commit/3cfa9e97e729dbd6ea8762cd48145bb434510532))
- **vpc:** allow listing regional PN using includeRegional parameter ([#565](https://github.com/scaleway/scaleway-sdk-js/issues/565)) ([ee5ac49](https://github.com/scaleway/scaleway-sdk-js/commit/ee5ac494263025a0014f00d4153a6c899f35687e))

## [1.5.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.4.0...@scaleway/sdk@1.5.0) (2023-03-27)

### Features

- **account:** remove v2alpha1 (please migrate to IAM) ([#548](https://github.com/scaleway/scaleway-sdk-js/issues/548)) ([cbb2f85](https://github.com/scaleway/scaleway-sdk-js/commit/cbb2f85485376a490d27be60c9c178dc016bd0c9))
- **billing:** add v2alpha1 ([#531](https://github.com/scaleway/scaleway-sdk-js/issues/531)) ([d6a86c4](https://github.com/scaleway/scaleway-sdk-js/commit/d6a86c4005c0bc615df92abaf9506c501168f6d7))
- **cockpit:** generate token name by default ([#551](https://github.com/scaleway/scaleway-sdk-js/issues/551)) ([7ec9ab2](https://github.com/scaleway/scaleway-sdk-js/commit/7ec9ab26db06eb8eb5764664f643755d6714d178))
- **function:** add logoUrl to Runtime ([#547](https://github.com/scaleway/scaleway-sdk-js/issues/547)) ([56077e6](https://github.com/scaleway/scaleway-sdk-js/commit/56077e6c1e9c66f45479be8997cc0c93622ef825))
- **k8s:** add privateNetworkId field ([#539](https://github.com/scaleway/scaleway-sdk-js/issues/539)) ([f09fa40](https://github.com/scaleway/scaleway-sdk-js/commit/f09fa4090b30c01ca6fbd217a4b04df3d788a411))
- **k8s:** method to change cluster type ([#534](https://github.com/scaleway/scaleway-sdk-js/issues/534)) ([0b439b9](https://github.com/scaleway/scaleway-sdk-js/commit/0b439b93afd23b32e133fb94b206e600903da1b4))
- **serverless:** add mnq credential id on trigger ([#535](https://github.com/scaleway/scaleway-sdk-js/issues/535)) ([a2fd61e](https://github.com/scaleway/scaleway-sdk-js/commit/a2fd61e9a1caa73115084d2f39bd0cc8672b02d3))

### Bug Fixes

- **fetch:** check response is of proper type without using instanceof ([#536](https://github.com/scaleway/scaleway-sdk-js/issues/536)) ([e1184d1](https://github.com/scaleway/scaleway-sdk-js/commit/e1184d1dfbfeee90ba9f86130f88588b4ebf91de))
- **secret-manager:** incomplete API descriptions ([#530](https://github.com/scaleway/scaleway-sdk-js/issues/530)) ([0ac0753](https://github.com/scaleway/scaleway-sdk-js/commit/0ac07539eacc47540c6dcb8b984394c186c42ee6))

## [1.4.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.2.0...@scaleway/sdk@1.4.0) (2023-03-15)

### Features

- **dom:** add `natural_person` as a contact legal extension ([#504](https://github.com/scaleway/scaleway-sdk-js/issues/504)) ([20b42f0](https://github.com/scaleway/scaleway-sdk-js/commit/20b42f04b91953177f10a95a4dd9be14ee6c11fb))
- **rdb:** prepare ipam integration ([#501](https://github.com/scaleway/scaleway-sdk-js/issues/501)) ([65e95be](https://github.com/scaleway/scaleway-sdk-js/commit/65e95be31aaa0af9ed119c0be14417f68232a7b4))
- **tem:** add subject to Email, and add acceptToS to CreateDomainRequest ([#521](https://github.com/scaleway/scaleway-sdk-js/issues/521)) ([74564a2](https://github.com/scaleway/scaleway-sdk-js/commit/74564a273950c544e7cf31439d3500c146bc6bb7))
- **vpc_gw:** add dhcp field in CreateGatewayNetworkRequest ([#502](https://github.com/scaleway/scaleway-sdk-js/issues/502)) ([2852168](https://github.com/scaleway/scaleway-sdk-js/commit/28521687e5483390fc2e69047b567169c6794940))
- **webhosting:** filter listOffers with hostingId and indicate the available ones ([#503](https://github.com/scaleway/scaleway-sdk-js/issues/503)) ([b726ef0](https://github.com/scaleway/scaleway-sdk-js/commit/b726ef0673a07bc407a9071c9512a75200f5b42f))

## [1.2.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.1.0...@scaleway/sdk@1.2.0) (2023-03-06)

### Features

- add nl-ams-3 zone ([#499](https://github.com/scaleway/scaleway-sdk-js/issues/499)) ([451b4ae](https://github.com/scaleway/scaleway-sdk-js/commit/451b4aef543a538f95e4c07b1e633cd6a2a2ccbc))
- **iam:** add ListJWTs, GetJWT, and DeleteJWT ([#493](https://github.com/scaleway/scaleway-sdk-js/issues/493)) ([a4ebbb8](https://github.com/scaleway/scaleway-sdk-js/commit/a4ebbb852b3f554caf2f96dabfd9e0c2fe440da3))
- **iam:** add listQuota method ([#483](https://github.com/scaleway/scaleway-sdk-js/issues/483)) ([c2225b6](https://github.com/scaleway/scaleway-sdk-js/commit/c2225b62efb39ed5bcf94a61f21a34f6a7ea7104))
- **lb:** add ipamConfig to PrivateNetwork ([#484](https://github.com/scaleway/scaleway-sdk-js/issues/484)) ([cff9a33](https://github.com/scaleway/scaleway-sdk-js/commit/cff9a331aa7f44d797de39ca24a28064735538e5))
- **rdb:** migrate endpoint from one instance to another ([#488](https://github.com/scaleway/scaleway-sdk-js/issues/488)) ([212bedf](https://github.com/scaleway/scaleway-sdk-js/commit/212bedfed7bf0376df9ecf9fc985f8dec11b7c0e))
- **webhosting:** add v1alpha1 ([#498](https://github.com/scaleway/scaleway-sdk-js/issues/498)) ([4cf3d8d](https://github.com/scaleway/scaleway-sdk-js/commit/4cf3d8de37fc92981cd93405c64cacb4b1ce9819))

### Bug Fixes

- **k8s:** export getClusterKubeConfig ([#487](https://github.com/scaleway/scaleway-sdk-js/issues/487)) ([6ab9df8](https://github.com/scaleway/scaleway-sdk-js/commit/6ab9df88e4c4cc5119230c8111b17c43daed975c))

## [1.1.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.0.0...@scaleway/sdk@1.1.0) (2023-02-27)

### Features

- **baremetal:** add privateBandwidth, sharedBandwidth and tags to Offer ([#476](https://github.com/scaleway/scaleway-sdk-js/issues/476)) ([373706c](https://github.com/scaleway/scaleway-sdk-js/commit/373706c768b9acc59a4a4fb28964579b297bdcfc))
- **cockpit:** add v1beta1 ([#469](https://github.com/scaleway/scaleway-sdk-js/issues/469)) ([9b88df0](https://github.com/scaleway/scaleway-sdk-js/commit/9b88df00aed630216568baae02a0e2d232a7d6a0))
- **instance:** add pagination to listPrivateNICs and add updatePrivateNIC endpoint ([#467](https://github.com/scaleway/scaleway-sdk-js/issues/467)) ([5e6ab40](https://github.com/scaleway/scaleway-sdk-js/commit/5e6ab40b017bed27601bc640123c083cefcdc1a2))
- **rdb:** add generation property to NodeType ([#465](https://github.com/scaleway/scaleway-sdk-js/issues/465)) ([4f7415e](https://github.com/scaleway/scaleway-sdk-js/commit/4f7415e973d69bd6f6cb8fab4c6df04a24d9f572))
- **rdb:** deprecate ACLRule port ([#470](https://github.com/scaleway/scaleway-sdk-js/issues/470)) ([c0deb0a](https://github.com/scaleway/scaleway-sdk-js/commit/c0deb0abe9e50fed916d7e0330e846f12ef5f62e))
- **secret_manager:** add endpoints \*ByName() ([#479](https://github.com/scaleway/scaleway-sdk-js/issues/479)) ([276302a](https://github.com/scaleway/scaleway-sdk-js/commit/276302a5e46e9de18695219c61fc7cea8fd4a15b))
- **serverless:** add mnqProjectId and mnqRegion for triggers ([#480](https://github.com/scaleway/scaleway-sdk-js/issues/480)) ([95edb87](https://github.com/scaleway/scaleway-sdk-js/commit/95edb87e64ba6d3a586f48ecff2de849000283a2))

### Bug Fixes

- avoid fallback on default projectId and organizationId for optional fields ([#478](https://github.com/scaleway/scaleway-sdk-js/issues/478)) ([84ca4cc](https://github.com/scaleway/scaleway-sdk-js/commit/84ca4cc895a2a96966fe79de8ab4cae70f3c48cd))

## [1.0.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.38...@scaleway/sdk@1.0.0) (2023-02-21)

### Features

- **k8s:** create external node ([#461](https://github.com/scaleway/scaleway-sdk-js/issues/461)) ([371a2bb](https://github.com/scaleway/scaleway-sdk-js/commit/371a2bb945b27416ca0df580b21de6294e94c9df))
- prepare v1 release ([#454](https://github.com/scaleway/scaleway-sdk-js/issues/454)) ([57bc014](https://github.com/scaleway/scaleway-sdk-js/commit/57bc014556338ba9fa7eca2a2d4179f5ff8383be))
- **serverless:** add Go 1.20 runtime ([#460](https://github.com/scaleway/scaleway-sdk-js/issues/460)) ([a7da4e2](https://github.com/scaleway/scaleway-sdk-js/commit/a7da4e2478793c3c5d7b3558e1cf4c6982731982))

### Bug Fixes

- **autocompletion:** treat known localities and string as distinguishable types ([#422](https://github.com/scaleway/scaleway-sdk-js/issues/422)) ([4a78253](https://github.com/scaleway/scaleway-sdk-js/commit/4a7825383567160516a283d5d50069b89181499c))

## [0.1.0-beta.38](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.37...@scaleway/sdk@0.1.0-beta.38) (2023-02-20)

### Features

- **iam:** add more filtering options for listAPIKeys ([#442](https://github.com/scaleway/scaleway-sdk-js/issues/442)) ([e0fd34f](https://github.com/scaleway/scaleway-sdk-js/commit/e0fd34f73dda8f1d66833d0b86e15bd63c79d89d))
- **secret:** retrieve secrets by name ([#447](https://github.com/scaleway/scaleway-sdk-js/issues/447)) ([df79670](https://github.com/scaleway/scaleway-sdk-js/commit/df7967049c7aac0e6ab0d648f13b93910310a8b4))
- **serverless:** simplify the triggers by merging Trigger and TriggerInput ([#452](https://github.com/scaleway/scaleway-sdk-js/issues/452)) ([19469cd](https://github.com/scaleway/scaleway-sdk-js/commit/19469cd28ebe53205568eb1e7308519364efd71d))
- use Blob type to download files ([#441](https://github.com/scaleway/scaleway-sdk-js/issues/441)) ([31685d2](https://github.com/scaleway/scaleway-sdk-js/commit/31685d20ab154daed1f00318d22736be8d8a46f7))

### Bug Fixes

- **iam:** add global BearerType type ([#446](https://github.com/scaleway/scaleway-sdk-js/issues/446)) ([5e9c196](https://github.com/scaleway/scaleway-sdk-js/commit/5e9c196cc56dc8c97bd521f1f0de0c3cc045e614))
- **iam:** use expired and not expirable to filter expired API keys ([#448](https://github.com/scaleway/scaleway-sdk-js/issues/448)) ([18e89ac](https://github.com/scaleway/scaleway-sdk-js/commit/18e89acfb51a9be7b6f73285875ea587919b980a))
- **lb:** set match fields as optional ([#453](https://github.com/scaleway/scaleway-sdk-js/issues/453)) ([a622d81](https://github.com/scaleway/scaleway-sdk-js/commit/a622d81357b4cfbd1d1988269dc3044169c6e9be))

## [0.1.0-beta.37](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.36...@scaleway/sdk@0.1.0-beta.37) (2023-02-13)

### Features

- **domain:** add more filtering options to list tasks ([#424](https://github.com/scaleway/scaleway-sdk-js/issues/424)) ([f5a022d](https://github.com/scaleway/scaleway-sdk-js/commit/f5a022d57bdae78d19adbccbd59707d099bd8dca))
- **instance:** deprecate bootscript ([#425](https://github.com/scaleway/scaleway-sdk-js/issues/425)) ([b1a793b](https://github.com/scaleway/scaleway-sdk-js/commit/b1a793b4bab298e51efcc8c47100678bc0c83454))
- **serverless:** add node19 runtime ([#432](https://github.com/scaleway/scaleway-sdk-js/issues/432)) ([02c1a71](https://github.com/scaleway/scaleway-sdk-js/commit/02c1a713beea8c3e89fc4b97dc62d858055221ad))
- **vpc:** deprecate update PN subnets ([#423](https://github.com/scaleway/scaleway-sdk-js/issues/423)) ([ec29a86](https://github.com/scaleway/scaleway-sdk-js/commit/ec29a86e46ed52115ee27474b55d84064d09c22c))

### Bug Fixes

- avoid defaultValue for standard fields in nested marshallers ([#434](https://github.com/scaleway/scaleway-sdk-js/issues/434)) ([40198be](https://github.com/scaleway/scaleway-sdk-js/commit/40198bee45e504ac7ec7adacbaf19e9026bf6349))
- **domain:** remove one-of for checkContactsCompatibility ([#435](https://github.com/scaleway/scaleway-sdk-js/issues/435)) ([8928956](https://github.com/scaleway/scaleway-sdk-js/commit/892895613061858c5f26bb565a9eb1a11f44d2d9))

## [0.1.0-beta.36](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.35...@scaleway/sdk@0.1.0-beta.36) (2023-02-01)

### Features

- **dom:** add information on domain actions/prices ([#416](https://github.com/scaleway/scaleway-sdk-js/issues/416)) ([7f0356c](https://github.com/scaleway/scaleway-sdk-js/commit/7f0356c007349e7ac5ac1633eb835e7c9dc48903))
- **secret:** add filter on status for listSecretVersions ([#411](https://github.com/scaleway/scaleway-sdk-js/issues/411)) ([6a655c4](https://github.com/scaleway/scaleway-sdk-js/commit/6a655c417d522234015b6434537f31fd4e5259b9))

## [0.1.0-beta.35](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.34...@scaleway/sdk@0.1.0-beta.35) (2023-01-27)

### Features

- **domain:** add additional dates to RenewableDomain ([#403](https://github.com/scaleway/scaleway-sdk-js/issues/403)) ([9b3ea74](https://github.com/scaleway/scaleway-sdk-js/commit/9b3ea744eea6b4055a28f8f1d1d6e45080b7fe07))
- **instance:** add getServerUserData method ([#405](https://github.com/scaleway/scaleway-sdk-js/issues/405)) ([ff030cf](https://github.com/scaleway/scaleway-sdk-js/commit/ff030cf5509ae9154f118bd6266ae21a6acaa57e))
- **lb:** add redirect acl ([#400](https://github.com/scaleway/scaleway-sdk-js/issues/400)) ([e60bb9e](https://github.com/scaleway/scaleway-sdk-js/commit/e60bb9efca9768db7f78db4f14b6133812b09b81))
- **redis:** remove v1alpha1 ([#398](https://github.com/scaleway/scaleway-sdk-js/issues/398)) ([a301de7](https://github.com/scaleway/scaleway-sdk-js/commit/a301de78ed69b92e5ea524235471d04fa413b345))
- update to Node18, remove cross-fetch, and run tests on node+jsdom ([#386](https://github.com/scaleway/scaleway-sdk-js/issues/386)) ([4e1fe02](https://github.com/scaleway/scaleway-sdk-js/commit/4e1fe02b54939d2d4008b9c53d56ea2553c796fb))
- use `T[]` array style ([#397](https://github.com/scaleway/scaleway-sdk-js/issues/397)) ([8573336](https://github.com/scaleway/scaleway-sdk-js/commit/85733366cc38edfa69e6635a08f978b846b5ccdb))

### Bug Fixes

- **errors:** adjust message of QuotasExceededError ([#404](https://github.com/scaleway/scaleway-sdk-js/issues/404)) ([01b33a7](https://github.com/scaleway/scaleway-sdk-js/commit/01b33a70af963da080e576f375f767caabf5a78d))

## [0.1.0-beta.34](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.33...@scaleway/sdk@0.1.0-beta.34) (2023-01-23)

### Features

- **domain:** add strictSearch filter to search API ([#383](https://github.com/scaleway/scaleway-sdk-js/issues/383)) ([f1b2253](https://github.com/scaleway/scaleway-sdk-js/commit/f1b2253791776c15895c3fa699f7f756c8917d1d))
- **instance:** add reason field in ServerMaintenance ([#391](https://github.com/scaleway/scaleway-sdk-js/issues/391)) ([4d94855](https://github.com/scaleway/scaleway-sdk-js/commit/4d948553ddfbf21f8ffc2347e5964e44a2f42d73))
- **instance:** add setServerUserData method ([#387](https://github.com/scaleway/scaleway-sdk-js/issues/387)) ([54b98a0](https://github.com/scaleway/scaleway-sdk-js/commit/54b98a0e9239d5be11a3623289f7679dca6dba10))
- **iot:** deprecate GetHubMetrics and GetDeviceMetrics ([#376](https://github.com/scaleway/scaleway-sdk-js/issues/376)) ([9e02d3c](https://github.com/scaleway/scaleway-sdk-js/commit/9e02d3cdca8fb97e08607f10208b119d8c7420fd))
- **lb:** add header host in match route ([#377](https://github.com/scaleway/scaleway-sdk-js/issues/377)) ([6425574](https://github.com/scaleway/scaleway-sdk-js/commit/6425574a427a0d8458ac1be4ad0bd5cbf2fea2d6))
- **marketplace:** add label listing and extra information to listLocalImages ([#382](https://github.com/scaleway/scaleway-sdk-js/issues/382)) ([ef438cd](https://github.com/scaleway/scaleway-sdk-js/commit/ef438cd5786d578aaa6d33f7d8bbf4a77294eac7))
- **redis:** add field upgradableVersions ([#384](https://github.com/scaleway/scaleway-sdk-js/issues/384)) ([7e7f641](https://github.com/scaleway/scaleway-sdk-js/commit/7e7f6413c792d2523445c252585a38f6726e752b))

### Bug Fixes

- **tem:** remove GetServiceInfo ([#389](https://github.com/scaleway/scaleway-sdk-js/issues/389)) ([350e122](https://github.com/scaleway/scaleway-sdk-js/commit/350e1222d47ca1ed143e2f24c0966f4af06c498f))

## [0.1.0-beta.33](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.32...@scaleway/sdk@0.1.0-beta.33) (2023-01-17)

### Features

- **lb:** add description field to acls ([#372](https://github.com/scaleway/scaleway-sdk-js/issues/372)) ([13359b9](https://github.com/scaleway/scaleway-sdk-js/commit/13359b96460f6916c2d4646bd7f81a07b813badb))
- **secret:** add v1alpha1 ([#374](https://github.com/scaleway/scaleway-sdk-js/issues/374)) ([9b922e5](https://github.com/scaleway/scaleway-sdk-js/commit/9b922e56bda6d3cca6e1236dfd594fb68ac0365e))

### Bug Fixes

- **tem:** adjust type of content field in CreateEmailRequestAttachment ([#373](https://github.com/scaleway/scaleway-sdk-js/issues/373)) ([2920308](https://github.com/scaleway/scaleway-sdk-js/commit/2920308f310a67fdbd389b1fd80ef8fa0583bc37))

## [0.1.0-beta.32](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.31...@scaleway/sdk@0.1.0-beta.32) (2023-01-12)

### Features

- **instance:** add util to update an image ([#365](https://github.com/scaleway/scaleway-sdk-js/issues/365)) ([3fa36e6](https://github.com/scaleway/scaleway-sdk-js/commit/3fa36e6de0084f95386aab1ea14bfd7db55d5c28))

### Bug Fixes

- **instance:** switch some types of CreateImageRequest to optional ([#364](https://github.com/scaleway/scaleway-sdk-js/issues/364)) ([aa22929](https://github.com/scaleway/scaleway-sdk-js/commit/aa2292928920bfac99bf451755989bddfd6f6b7d))
- **mnq:** clean unused code ([#359](https://github.com/scaleway/scaleway-sdk-js/issues/359)) ([21e02a5](https://github.com/scaleway/scaleway-sdk-js/commit/21e02a51ce22529ff9b995818a0698af2d451f95))

## [0.1.0-beta.31](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.30...@scaleway/sdk@0.1.0-beta.31) (2023-01-10)

### Features

- add validation rules ([#345](https://github.com/scaleway/scaleway-sdk-js/issues/345)) ([26d62aa](https://github.com/scaleway/scaleway-sdk-js/commit/26d62aadba15d2575909259a8524310bac132a02))
- **serverless:** add missing localities ([#341](https://github.com/scaleway/scaleway-sdk-js/issues/341)) ([157c4ac](https://github.com/scaleway/scaleway-sdk-js/commit/157c4ac720374344f0f1edd62539741dddc6ae88))

### Bug Fixes

- set most enums as optional ([#340](https://github.com/scaleway/scaleway-sdk-js/issues/340)) ([872df25](https://github.com/scaleway/scaleway-sdk-js/commit/872df253e47b7c99b76688e29c4c7a36e976df3f))

## [0.1.0-beta.30](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.29...@scaleway/sdk@0.1.0-beta.30) (2023-01-03)

### Features

- **instance:** add locality pl-waw-2 ([#324](https://github.com/scaleway/scaleway-sdk-js/issues/324)) ([0476c07](https://github.com/scaleway/scaleway-sdk-js/commit/0476c072ed143cac146fffa41c98ed6d1fe0bdf3))
- **tem:** add transient states and waiters ([#325](https://github.com/scaleway/scaleway-sdk-js/issues/325)) ([808abb3](https://github.com/scaleway/scaleway-sdk-js/commit/808abb3e133d7bad4b44fa7f5318fe14bb5b3243))
- **vpc:** filter private_networks by ids ([#314](https://github.com/scaleway/scaleway-sdk-js/issues/314)) ([54605fa](https://github.com/scaleway/scaleway-sdk-js/commit/54605fa6860df25c0d0a2a72cc48054606c4f5b3))

### Bug Fixes

- **instance:** accept null for some fields ([#339](https://github.com/scaleway/scaleway-sdk-js/issues/339)) ([c620af7](https://github.com/scaleway/scaleway-sdk-js/commit/c620af7aa6bfcab93863afd8c8b0cbbe789d8752))

## [0.1.0-beta.29](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.28...@scaleway/sdk@0.1.0-beta.29) (2022-12-21)

### Features

- **serverless:** add PHP 8.2 runtime ([#303](https://github.com/scaleway/scaleway-sdk-js/issues/303)) ([827645d](https://github.com/scaleway/scaleway-sdk-js/commit/827645d27dd32e736e5c92be2942968876fd9ad8))

### Bug Fixes

- **instance:** remove NullableStringValue type ([#305](https://github.com/scaleway/scaleway-sdk-js/issues/305)) ([b54ed03](https://github.com/scaleway/scaleway-sdk-js/commit/b54ed03f790dd087a0b7f5658dff11f27c233202))

## [0.1.0-beta.28](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.27...@scaleway/sdk@0.1.0-beta.28) (2022-12-19)

### Features

- **rdb:** add isHaRequired flag on node type ([#292](https://github.com/scaleway/scaleway-sdk-js/issues/292)) ([deb3fba](https://github.com/scaleway/scaleway-sdk-js/commit/deb3fba2b05624a524faa183b84529a06ed1327d))
- **vpc:** add more localities ([#289](https://github.com/scaleway/scaleway-sdk-js/issues/289)) ([76f9b2a](https://github.com/scaleway/scaleway-sdk-js/commit/76f9b2a90b5715b2697a84fe5fb012415d4dd21d))

## [0.1.0-beta.27](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.26...@scaleway/sdk@0.1.0-beta.27) (2022-12-12)

### Features

- **baremetal:** add CPU benchmark in an offer ([#284](https://github.com/scaleway/scaleway-sdk-js/issues/284)) ([3b3a3af](https://github.com/scaleway/scaleway-sdk-js/commit/3b3a3af9ec0610199758f3b0bcf7dc84ca112471))

## [0.1.0-beta.26](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.25...@scaleway/sdk@0.1.0-beta.26) (2022-12-05)

### Features

- **baremetal:** add PrivateNetwork API ([#267](https://github.com/scaleway/scaleway-sdk-js/issues/267)) ([dcf8861](https://github.com/scaleway/scaleway-sdk-js/commit/dcf886105666eace8cbe299307ff12d57389cb75))
- **marketplace:** add v2 ([#265](https://github.com/scaleway/scaleway-sdk-js/issues/265)) ([7a11917](https://github.com/scaleway/scaleway-sdk-js/commit/7a11917702683d98af210029e2fc3c561b2d55c5))
- **serverless:** https redirection ([#263](https://github.com/scaleway/scaleway-sdk-js/issues/263)) ([574588f](https://github.com/scaleway/scaleway-sdk-js/commit/574588f949b5068331c4e4dc6ec82b4b90367017))
- **tem:** change domain statistics ([#268](https://github.com/scaleway/scaleway-sdk-js/issues/268)) ([670225d](https://github.com/scaleway/scaleway-sdk-js/commit/670225d142a7e81a18bac95c84a33d26512e46cd))
- **tem:** filter list emails by messageId ([#264](https://github.com/scaleway/scaleway-sdk-js/issues/264)) ([2d42c92](https://github.com/scaleway/scaleway-sdk-js/commit/2d42c925455471112dc831612c4a75bc22fde15a))

## [0.1.0-beta.25](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.24...@scaleway/sdk@0.1.0-beta.25) (2022-11-25)

### Features

- **lb:** add pl-waw-2 zone ([#250](https://github.com/scaleway/scaleway-sdk-js/issues/250)) ([8a9d10d](https://github.com/scaleway/scaleway-sdk-js/commit/8a9d10d919a0dbd84cfb34b733b360aa72d638fd))

### Bug Fixes

- **vpc_gw:** running is not a transient state ([#253](https://github.com/scaleway/scaleway-sdk-js/issues/253)) ([c22d752](https://github.com/scaleway/scaleway-sdk-js/commit/c22d752d1272ecb9942fe728a73ec42a5aeceea5))

## [0.1.0-beta.24](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.23...@scaleway/sdk@0.1.0-beta.24) (2022-11-23)

### Features

- **account:** remove the MFA endpoints ([#244](https://github.com/scaleway/scaleway-sdk-js/issues/244)) ([39a0dcd](https://github.com/scaleway/scaleway-sdk-js/commit/39a0dcd910a2145643765d4c734699d49989aec5))
- **baremetal:** expose licence restrictions on OS ([#247](https://github.com/scaleway/scaleway-sdk-js/issues/247)) ([53154fc](https://github.com/scaleway/scaleway-sdk-js/commit/53154fcacbd587facb29a9aaadf7365a1440583c))
- **lb:** add ignore ssl server verify ([#242](https://github.com/scaleway/scaleway-sdk-js/issues/242)) ([f434a42](https://github.com/scaleway/scaleway-sdk-js/commit/f434a427650135931b86e4ba57c54f16826fb105))
- **lb:** enable http3 and add host header field in HL ([#246](https://github.com/scaleway/scaleway-sdk-js/issues/246)) ([290a443](https://github.com/scaleway/scaleway-sdk-js/commit/290a443c60d70e6dda106d5ae617e4711bc926f7))
- **serverless:** add name field to crons ([#243](https://github.com/scaleway/scaleway-sdk-js/issues/243)) ([a1e71a4](https://github.com/scaleway/scaleway-sdk-js/commit/a1e71a45af3d1102155f305341eb489353a4bd18))

## [0.1.0-beta.23](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.22...@scaleway/sdk@0.1.0-beta.23) (2022-11-21)

### Features

- **serverless:** add Rust 1.65, Python 3.11 and Go 1.19 ([#233](https://github.com/scaleway/scaleway-sdk-js/issues/233)) ([e3cc123](https://github.com/scaleway/scaleway-sdk-js/commit/e3cc1236e9be34df9cf4b22515174d50a2c47f11))

### Bug Fixes

- **domain:** add SSL certificate and domain waiters ([#232](https://github.com/scaleway/scaleway-sdk-js/issues/232)) ([9ffd698](https://github.com/scaleway/scaleway-sdk-js/commit/9ffd69806ce7364bea4ee79dd0aa3bd839bd57f1))
- **rdb:** add read replica and snapshot waiters ([#231](https://github.com/scaleway/scaleway-sdk-js/issues/231)) ([7766b91](https://github.com/scaleway/scaleway-sdk-js/commit/7766b91639d7fb77e7de7414b25bfbad143ac0e0))

## [0.1.0-beta.22](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.21...@scaleway/sdk@0.1.0-beta.22) (2022-11-14)

### Features

- **account:** add MFA OTP ([#224](https://github.com/scaleway/scaleway-sdk-js/issues/224)) ([aeed476](https://github.com/scaleway/scaleway-sdk-js/commit/aeed476d9d2ccdba7e8c963b734dbc8d4cdb3650))
- **rdb:** database engine upgrade ([#225](https://github.com/scaleway/scaleway-sdk-js/issues/225)) ([3c6c143](https://github.com/scaleway/scaleway-sdk-js/commit/3c6c1435ce1afe7288bdeaf08b5404132359cb33))

## [0.1.0-beta.21](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.20...@scaleway/sdk@0.1.0-beta.21) (2022-11-07)

**Note:** Version bump only for package @scaleway/sdk

## [0.1.0-beta.20](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.19...@scaleway/sdk@0.1.0-beta.20) (2022-11-07)

### Features

- add zone pl-waw-2 ([#202](https://github.com/scaleway/scaleway-sdk-js/issues/202)) ([3a8ec2f](https://github.com/scaleway/scaleway-sdk-js/commit/3a8ec2f83224a87a6a316e011b4c8109077f960c))
- **baremetal:** add support for private network ([#211](https://github.com/scaleway/scaleway-sdk-js/issues/211)) ([26d25c8](https://github.com/scaleway/scaleway-sdk-js/commit/26d25c858b87a1f1258bdbe943cf24333e50b84e))
- **iam:** clone a policy ([#204](https://github.com/scaleway/scaleway-sdk-js/issues/204)) ([8a68eca](https://github.com/scaleway/scaleway-sdk-js/commit/8a68eca54ca841a626ef43cf85e2c36879ba13e4))
- **redis:** specify support of zone pl-waw-2 ([#201](https://github.com/scaleway/scaleway-sdk-js/issues/201)) ([918f54a](https://github.com/scaleway/scaleway-sdk-js/commit/918f54a8fbb05eaafbbd3f6c407f686c6bdb5c41))

### Bug Fixes

- **client:** adjust DefaultValues so it contains defaultPageSize ([#210](https://github.com/scaleway/scaleway-sdk-js/issues/210)) ([252356a](https://github.com/scaleway/scaleway-sdk-js/commit/252356adc18ba2a87ce0b8aaee0ddf9b256716c6))

## [0.1.0-beta.19](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.18...@scaleway/sdk@0.1.0-beta.19) (2022-10-31)

### Features

- **mnq:** set by default a random name when creating a namespace or credential ([#192](https://github.com/scaleway/scaleway-sdk-js/issues/192)) ([f4ccf51](https://github.com/scaleway/scaleway-sdk-js/commit/f4ccf518cdf1efaa935971f308fb7e8f632e3cd3))

## [0.1.0-beta.18](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.17...@scaleway/sdk@0.1.0-beta.18) (2022-10-27)

### Features

- **tem:** rename product from TEM to TransactionalEmail for clarity ([#189](https://github.com/scaleway/scaleway-sdk-js/issues/189)) ([41f8272](https://github.com/scaleway/scaleway-sdk-js/commit/41f82727102b73aaf7926712c4ea2a3f53abc4e9))

## [0.1.0-beta.17](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.16...@scaleway/sdk@0.1.0-beta.17) (2022-10-27)

### Features

- allow Blob response thanks to responseType parameter ([#163](https://github.com/scaleway/scaleway-sdk-js/issues/163)) ([1b4bf75](https://github.com/scaleway/scaleway-sdk-js/commit/1b4bf7535eb38c728ea1ddd237574063989a843f))
- **mnq:** add field to filter by organization ([#166](https://github.com/scaleway/scaleway-sdk-js/issues/166)) ([2cb3572](https://github.com/scaleway/scaleway-sdk-js/commit/2cb35724eb7fe40fabefe20e4a938bc132030de1))
- **redis:** allow filtering the list of Clusters using version attribute ([#172](https://github.com/scaleway/scaleway-sdk-js/issues/172)) ([eff3a04](https://github.com/scaleway/scaleway-sdk-js/commit/eff3a04680fc52ff6327502d879e4711a76fe849))
- **redis:** expose user_name field of the Cluster Object ([#167](https://github.com/scaleway/scaleway-sdk-js/issues/167)) ([dfe8a96](https://github.com/scaleway/scaleway-sdk-js/commit/dfe8a962918f02f6f449ca1a47731a3e844dcb03))
- **tem:** filter by name for listDomains ([#182](https://github.com/scaleway/scaleway-sdk-js/issues/182)) ([e9c8927](https://github.com/scaleway/scaleway-sdk-js/commit/e9c8927c84eccbfe4f58473be3364cded07b2cd7))

### Bug Fixes

- **instance:** remove unused fields ([#181](https://github.com/scaleway/scaleway-sdk-js/issues/181)) ([cb0895a](https://github.com/scaleway/scaleway-sdk-js/commit/cb0895abd2015c87c435b7543586e8eaba1e51c2))
- **rdb:** add name and version optional fields on ListDatabaseEngineRequest ([#165](https://github.com/scaleway/scaleway-sdk-js/issues/165)) ([d17cc86](https://github.com/scaleway/scaleway-sdk-js/commit/d17cc8600b30bb160ffaf6c0d6ac79d36f9242ce))
- **tem:** fix devtools generation ([#162](https://github.com/scaleway/scaleway-sdk-js/issues/162)) ([6ecb1f4](https://github.com/scaleway/scaleway-sdk-js/commit/6ecb1f47cb2138321cf23e287d6056fd13d0db05))
- **tem:** remove duplicate code ([#170](https://github.com/scaleway/scaleway-sdk-js/issues/170)) ([098e518](https://github.com/scaleway/scaleway-sdk-js/commit/098e5189999c4e51d44472d28ba1ad8232a3ee6c))

## [0.1.0-beta.16](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.15...@scaleway/sdk@0.1.0-beta.16) (2022-10-17)

### Features

- **redis:** support nl-ams-2 locality ([#155](https://github.com/scaleway/scaleway-sdk-js/issues/155)) ([b82a04a](https://github.com/scaleway/scaleway-sdk-js/commit/b82a04a19d2c10e8f0b449f0898c5cf4867683ed))
- return the response as-if for unknown content type ([#145](https://github.com/scaleway/scaleway-sdk-js/issues/145)) ([e684403](https://github.com/scaleway/scaleway-sdk-js/commit/e68440339579c3dd79d73ed19bb674e6f62b5ffe))
- **transactional_email:** add organizationId filter to listDomains ([#151](https://github.com/scaleway/scaleway-sdk-js/issues/151)) ([0c38eea](https://github.com/scaleway/scaleway-sdk-js/commit/0c38eea11509e85016d786aa4fd3d44fe609571a))

## [0.1.0-beta.15](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.14...@scaleway/sdk@0.1.0-beta.15) (2022-10-10)

### Features

- **baremetal:** add resetting case to server status ([#140](https://github.com/scaleway/scaleway-sdk-js/issues/140)) ([6d4e414](https://github.com/scaleway/scaleway-sdk-js/commit/6d4e41453f541635a1fc0d93c07c202562da4255))
- **redis:** launch general availability with v1 ([#139](https://github.com/scaleway/scaleway-sdk-js/issues/139)) ([e9b0092](https://github.com/scaleway/scaleway-sdk-js/commit/e9b0092d8b986d6d0b65fa1edba225f38bea5312))
- **transactional_email:** launch the v1alpha1 ([#147](https://github.com/scaleway/scaleway-sdk-js/issues/147)) ([6069731](https://github.com/scaleway/scaleway-sdk-js/commit/6069731cf00ae3fabfeb6cb2fc5a6f7bfa130c7d))

### Bug Fixes

- use custom httpClient passed to createAdvancedClient ([#143](https://github.com/scaleway/scaleway-sdk-js/issues/143)) ([fa5b22a](https://github.com/scaleway/scaleway-sdk-js/commit/fa5b22ab608acaddabc44b88c603a90f8cf28a4f))

## [0.1.0-beta.14](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.13...@scaleway/sdk@0.1.0-beta.14) (2022-10-03)

### Features

- **instance:** add snapshot states for snapshot transfer ([#137](https://github.com/scaleway/scaleway-sdk-js/issues/137)) ([cf2c148](https://github.com/scaleway/scaleway-sdk-js/commit/cf2c14816edacf77e92707dcb02c69346a9bcccc))
- **mnq:** add created_at and updated_at fields to namespace ([#131](https://github.com/scaleway/scaleway-sdk-js/issues/131)) ([d05dc63](https://github.com/scaleway/scaleway-sdk-js/commit/d05dc63b2d7c4f8d4c00d2011d8097babc59929e))
- **mnq:** sort namespaces by date ([#135](https://github.com/scaleway/scaleway-sdk-js/issues/135)) ([0f3bbf7](https://github.com/scaleway/scaleway-sdk-js/commit/0f3bbf7262bc3908154397f858ea0f47289da765))

### Bug Fixes

- **instance:** make volumeId field optional when creating a snapshot ([#134](https://github.com/scaleway/scaleway-sdk-js/issues/134)) ([428e6c4](https://github.com/scaleway/scaleway-sdk-js/commit/428e6c40cfc6f937870f0bae3decdd760b0f8d00))

## [0.1.0-beta.13](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.12...@scaleway/sdk@0.1.0-beta.13) (2022-09-28)

### Features

- **domain:** add host management ([#122](https://github.com/scaleway/scaleway-sdk-js/issues/122)) ([41f967f](https://github.com/scaleway/scaleway-sdk-js/commit/41f967fa18d4a39db9ee638f9217c7fc70f0297c))
- **functions:** add trigger management ([#128](https://github.com/scaleway/scaleway-sdk-js/issues/128)) ([cda0909](https://github.com/scaleway/scaleway-sdk-js/commit/cda0909e3ffbb856723c0154550b83ca5c763a45))
- **iam:** add deleteUser ([#127](https://github.com/scaleway/scaleway-sdk-js/issues/127)) ([3275d2c](https://github.com/scaleway/scaleway-sdk-js/commit/3275d2ce7aaeac4840a910a7937b6367caf7ab82))
- **lb:** add ssl bridging ([#126](https://github.com/scaleway/scaleway-sdk-js/issues/126)) ([f49fad3](https://github.com/scaleway/scaleway-sdk-js/commit/f49fad3f84727ae1081c69f49774c400960608ab))

## [0.1.0-beta.12](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.11...@scaleway/sdk@0.1.0-beta.12) (2022-09-26)

### Features

- **redis:** add initializing status ([#117](https://github.com/scaleway/scaleway-sdk-js/issues/117)) ([537d321](https://github.com/scaleway/scaleway-sdk-js/commit/537d321c610258e15cfc619ea54f87108b90fab2))

## [0.1.0-beta.11](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.10...@scaleway/sdk@0.1.0-beta.11) (2022-09-16)

### Features

- **domain:** filter domain on listDomains ([#110](https://github.com/scaleway/scaleway-sdk-js/issues/110)) ([175d61c](https://github.com/scaleway/scaleway-sdk-js/commit/175d61c81f64d15dbc29339aa8a0720ae1717137))
- **instance:** add capabilities for ServerType ([#112](https://github.com/scaleway/scaleway-sdk-js/issues/112)) ([b24a74c](https://github.com/scaleway/scaleway-sdk-js/commit/b24a74c130178aa511ae3795d16a25469e5c11f7))

## [0.1.0-beta.10](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.9...@scaleway/sdk@0.1.0-beta.10) (2022-09-12)

### Features

- **account:** add the possibility to filter projects by id ([#100](https://github.com/scaleway/scaleway-sdk-js/issues/100)) ([1d489f4](https://github.com/scaleway/scaleway-sdk-js/commit/1d489f428ca301673abf0c6b9341785632b1545a))
- **serverless:** add token description ([#98](https://github.com/scaleway/scaleway-sdk-js/issues/98)) ([f084c8a](https://github.com/scaleway/scaleway-sdk-js/commit/f084c8a187267a3c6289fa6173c6f8dc235277d1))

## [0.1.0-beta.9](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.8...@scaleway/sdk@0.1.0-beta.9) (2022-09-05)

**Note:** Version bump only for package @scaleway/sdk

## [0.1.0-beta.8](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.7...@scaleway/sdk@0.1.0-beta.8) (2022-08-26)

### Features

- **function:** add new runtime statuses ([#79](https://github.com/scaleway/scaleway-sdk-js/issues/79)) ([19b2632](https://github.com/scaleway/scaleway-sdk-js/commit/19b2632391178d006be9184f56d5cc5fbca17981))
- **iam:** use a random name when creating a resource ([#74](https://github.com/scaleway/scaleway-sdk-js/issues/74)) ([bbbd435](https://github.com/scaleway/scaleway-sdk-js/commit/bbbd435b54c23f9c19d8a39d8088ba28415d68ab))
- **instance:** add information in Dashboard entity ([#80](https://github.com/scaleway/scaleway-sdk-js/issues/80)) ([1265c70](https://github.com/scaleway/scaleway-sdk-js/commit/1265c7084c04c9c83fc87445a483c7e5c441221a))
- **instance:** add snapshot export ([#75](https://github.com/scaleway/scaleway-sdk-js/issues/75)) ([24f78bc](https://github.com/scaleway/scaleway-sdk-js/commit/24f78bc7da6fcf136dd75a148542b8a7d66de3ce))

## [0.1.0-beta.7](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.6...@scaleway/sdk@0.1.0-beta.7) (2022-08-22)

### Features

- **domain:** check if contacts are compatible with a domain or a tld ([#55](https://github.com/scaleway/scaleway-sdk-js/issues/55)) ([41aa4ca](https://github.com/scaleway/scaleway-sdk-js/commit/41aa4ca35598b266271dbe68634fd72bb9ab4171))
- **k8s:** disallow setting Ingress or Dashboard ([#63](https://github.com/scaleway/scaleway-sdk-js/issues/63)) ([1a05a42](https://github.com/scaleway/scaleway-sdk-js/commit/1a05a42f719b9a96e7c56e409d6dc5df02459889))

## [0.1.0-beta.6](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.5...@scaleway/sdk@0.1.0-beta.6) (2022-08-15)

**Note:** Version bump only for package @scaleway/sdk

## [0.1.0-beta.5](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.4...@scaleway/sdk@0.1.0-beta.5) (2022-08-08)

### Features

- **domain:** deprecate contact questions ([#45](https://github.com/scaleway/scaleway-sdk-js/issues/45)) ([11cdb4b](https://github.com/scaleway/scaleway-sdk-js/commit/11cdb4bf840eebca76340bbe3733f889b1e25d94))
- **instance:** deprecate exportUri on volumes ([#44](https://github.com/scaleway/scaleway-sdk-js/issues/44)) ([b7fefb8](https://github.com/scaleway/scaleway-sdk-js/commit/b7fefb8d018af1116cb8e5c57f27edaa1db60bef))
- **k8s:** add registering case to NodeStatus ([#39](https://github.com/scaleway/scaleway-sdk-js/issues/39)) ([f20d171](https://github.com/scaleway/scaleway-sdk-js/commit/f20d171a0404ebf8775cd8e4effc9484155ae493))
- **k8s:** add replace and skipDrain options when deleting a node ([#40](https://github.com/scaleway/scaleway-sdk-js/issues/40)) ([7d7a849](https://github.com/scaleway/scaleway-sdk-js/commit/7d7a849915d2e8e24afd31c7735f8b9e68157678))

## [0.1.0-beta.4](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.3...@scaleway/sdk@0.1.0-beta.4) (2022-08-01)

### Features

- **k8s:** deprecate ReplaceNode (use DeleteNode instead) ([#34](https://github.com/scaleway/scaleway-sdk-js/issues/34)) ([e6342ec](https://github.com/scaleway/scaleway-sdk-js/commit/e6342ecae48ac585bb14c40c6cc55b9d51473dae))
- **rdb:** add read replica ([#36](https://github.com/scaleway/scaleway-sdk-js/issues/36)) ([8002709](https://github.com/scaleway/scaleway-sdk-js/commit/80027094da1bf78b337307cc994e1622cf9882f8))

## [0.1.0-beta.3](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.2...@scaleway/sdk@0.1.0-beta.3) (2022-07-26)

### Features

- **mnq:** add AMQP credentials ([#26](https://github.com/scaleway/scaleway-sdk-js/issues/26)) ([bb5eac7](https://github.com/scaleway/scaleway-sdk-js/commit/bb5eac76e36885e56d343890a592e6734db32612))

### Bug Fixes

- unmarshal TimeSeriesPoint from an array ([#25](https://github.com/scaleway/scaleway-sdk-js/issues/25)) ([207b4aa](https://github.com/scaleway/scaleway-sdk-js/commit/207b4aa2bf2642cf4ec0dfe07bccaf16e471e96b))

## [0.1.0-beta.2](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@0.1.0-beta.1...@scaleway/sdk@0.1.0-beta.2) (2022-07-13)

### Features

- **account:** add v2 ([#15](https://github.com/scaleway/scaleway-sdk-js/issues/15)) ([f8d7ab3](https://github.com/scaleway/scaleway-sdk-js/commit/f8d7ab38b9f4a810bb86327807639b468a98eec9))
