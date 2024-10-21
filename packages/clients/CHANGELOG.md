# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.51.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.50.0...@scaleway/sdk@2.51.0) (2024-10-21)

### Features

- **apple_silicon:** add server delivery status ([#1493](https://github.com/scaleway/scaleway-sdk-js/issues/1493)) ([279b60a](https://github.com/scaleway/scaleway-sdk-js/commit/279b60a570219014c2e6fcc5e9a8703d7cf8b3c5))
- **edge_services:** add ListPipelinesWithStages ([#1495](https://github.com/scaleway/scaleway-sdk-js/issues/1495)) ([c5aab4c](https://github.com/scaleway/scaleway-sdk-js/commit/c5aab4c6f5390ffb13ce93f0b312c9dbed3224ac))
- **iam:** add visible and deletable on product api keys ([#1483](https://github.com/scaleway/scaleway-sdk-js/issues/1483)) ([e06a7a9](https://github.com/scaleway/scaleway-sdk-js/commit/e06a7a9c705b0d353330e68075ec574c37262d0a))
- **instance:** add option to disable IPv6 during the migration to routed IPs ([#1507](https://github.com/scaleway/scaleway-sdk-js/issues/1507)) ([cfbfb21](https://github.com/scaleway/scaleway-sdk-js/commit/cfbfb21b0cb78f51484f4ce4f6aa05f9147c3f90))
- **instance:** set CreateServerRequest.image as optional ([#1506](https://github.com/scaleway/scaleway-sdk-js/issues/1506)) ([93d949e](https://github.com/scaleway/scaleway-sdk-js/commit/93d949e7b8f3252eb51001e23ccc08c3ce8afe03))
- **mongodb:** add Get Snapshot Endpoint ([#1508](https://github.com/scaleway/scaleway-sdk-js/issues/1508)) ([307c67f](https://github.com/scaleway/scaleway-sdk-js/commit/307c67f85e1b4ad48d3a8e40b9d36565d2a3df04))
- **mongodb:** add v1alpha1 ([#1505](https://github.com/scaleway/scaleway-sdk-js/issues/1505)) ([7d0a7fb](https://github.com/scaleway/scaleway-sdk-js/commit/7d0a7fbdfeae59e43392fa2f0c5f09d9a1069c76))
- **webhosting:** add addon domain quota warning ([#1512](https://github.com/scaleway/scaleway-sdk-js/issues/1512)) ([1578eca](https://github.com/scaleway/scaleway-sdk-js/commit/1578ecac458e7adc0ae76d1ac61226624bd8ea83))

### Bug Fixes

- **baremetal:** add bandwidth_in_bps field for PrivateNetworkOption ([#1511](https://github.com/scaleway/scaleway-sdk-js/issues/1511)) ([fadd4b5](https://github.com/scaleway/scaleway-sdk-js/commit/fadd4b5545853e7a687a7030d7c938831e046771))
- **instance:** remove deprecated bootscript ([#1484](https://github.com/scaleway/scaleway-sdk-js/issues/1484)) ([62c8390](https://github.com/scaleway/scaleway-sdk-js/commit/62c8390fb3ec8780d7b171b24c0fbd67de1c8c01))
- **instance:** remove deprecated bootscript documentation ([#1485](https://github.com/scaleway/scaleway-sdk-js/issues/1485)) ([d77bf41](https://github.com/scaleway/scaleway-sdk-js/commit/d77bf414842b82322a669609d461a862a40bad4f))
- update validation patterns ([#1510](https://github.com/scaleway/scaleway-sdk-js/issues/1510)) ([8d23c3a](https://github.com/scaleway/scaleway-sdk-js/commit/8d23c3a62fc67eaebe8bb7b5379eb339441a223e))

## [2.50.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.49.1...@scaleway/sdk@2.50.0) (2024-10-14)

### Features

- **dedibox:** add new memory type ([#1482](https://github.com/scaleway/scaleway-sdk-js/issues/1482)) ([60e5a0d](https://github.com/scaleway/scaleway-sdk-js/commit/60e5a0df24767d774d47055d4e8a91622c62059a))
- **edge_services:** add GetCurrentBilling endpoint ([#1477](https://github.com/scaleway/scaleway-sdk-js/issues/1477)) ([666c9dc](https://github.com/scaleway/scaleway-sdk-js/commit/666c9dc46f5c6b5020620d087c91ec7e6309aafa))
- **iam:** add deletable and managed fields ([#1476](https://github.com/scaleway/scaleway-sdk-js/issues/1476)) ([db22c49](https://github.com/scaleway/scaleway-sdk-js/commit/db22c49c2ec62a16a0f61a2769c037fcbca87c69))
- **serverless_jobs:** enable sdk for secrets ([#1467](https://github.com/scaleway/scaleway-sdk-js/issues/1467)) ([4f6f981](https://github.com/scaleway/scaleway-sdk-js/commit/4f6f98190f7173d9613489ceb1170305500b3a6f))
- **tem:** add auto-configuration state in domain validation ([#1466](https://github.com/scaleway/scaleway-sdk-js/issues/1466)) ([5169271](https://github.com/scaleway/scaleway-sdk-js/commit/5169271689fbbd36e6171ae70a598ed5ca3b6335))

## [2.49.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.49.0...@scaleway/sdk@2.49.1) (2024-10-07)

**Note:** Version bump only for package @scaleway/sdk

## [2.49.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.48.0...@scaleway/sdk@2.49.0) (2024-10-04)

### Features

- **iam:** make sur e-mail optional in CreateUser ([#1456](https://github.com/scaleway/scaleway-sdk-js/issues/1456)) ([f37723e](https://github.com/scaleway/scaleway-sdk-js/commit/f37723ecc2c88d4823eaa3d2670ddea5b4ff5346))

### Bug Fixes

- **edge_services:** fix plan endpoints ([#1450](https://github.com/scaleway/scaleway-sdk-js/issues/1450)) ([9e3bd41](https://github.com/scaleway/scaleway-sdk-js/commit/9e3bd41bf53288e760ae209d462e3a85a22181eb))
- **scw:** decimal json representation ([#1460](https://github.com/scaleway/scaleway-sdk-js/issues/1460)) ([6829c46](https://github.com/scaleway/scaleway-sdk-js/commit/6829c46bdc362b02fe974ca7dd18267c7c0dbd9b))

## [2.48.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.47.0...@scaleway/sdk@2.48.0) (2024-09-30)

### Features

- **baremetal:** add GetDefaultPartitioningRequest ([#1438](https://github.com/scaleway/scaleway-sdk-js/issues/1438)) ([5789768](https://github.com/scaleway/scaleway-sdk-js/commit/57897686d07a5b6a8b1b009325b616294ca8d874))
- **billing:** add exclude field to describe if filter is an excluding filter ([#1444](https://github.com/scaleway/scaleway-sdk-js/issues/1444)) ([3f36eb5](https://github.com/scaleway/scaleway-sdk-js/commit/3f36eb5f5451592e58a9b6b770c300ce54d04d20))
- **edge_services:** add GetPipelineStages endpoint ([#1449](https://github.com/scaleway/scaleway-sdk-js/issues/1449)) ([7b6726f](https://github.com/scaleway/scaleway-sdk-js/commit/7b6726f1f0f7cc6fd99d6fa687242d399d0b7dae))
- **edge_services:** add plan endpoints ([#1446](https://github.com/scaleway/scaleway-sdk-js/issues/1446)) ([51b03da](https://github.com/scaleway/scaleway-sdk-js/commit/51b03daa9bbff4dbd8c9f336d81c4ad16ce33910))
- **k8s:** add temporary feature flag for VPCv3 ([#1445](https://github.com/scaleway/scaleway-sdk-js/issues/1445)) ([21e3357](https://github.com/scaleway/scaleway-sdk-js/commit/21e3357d86a37791b24c1da1ee757abaf3ab7759))

### Bug Fixes

- **k8s:** allow empty description on kapsule clusters ([#1439](https://github.com/scaleway/scaleway-sdk-js/issues/1439)) ([3a7b87f](https://github.com/scaleway/scaleway-sdk-js/commit/3a7b87fc88998603d7df4df55c48984bbed62267))

## [2.47.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.46.0...@scaleway/sdk@2.47.0) (2024-09-23)

### Features

- **iam:** add locked status on User ([#1432](https://github.com/scaleway/scaleway-sdk-js/issues/1432)) ([238aeab](https://github.com/scaleway/scaleway-sdk-js/commit/238aeabd53c8d8d2082b137604703f353ecc45ea))
- **k8s:** add validations on Create/Update cluster ([#1436](https://github.com/scaleway/scaleway-sdk-js/issues/1436)) ([fab6928](https://github.com/scaleway/scaleway-sdk-js/commit/fab69284129d15bf1f4c8b5115a8ebce031fdcfb))
- **tem:** add project settings endpoint ([#1435](https://github.com/scaleway/scaleway-sdk-js/issues/1435)) ([773f36c](https://github.com/scaleway/scaleway-sdk-js/commit/773f36c17b4cbbda599bf56921a9c4bcc960fe00))
- **webhosting:** add send welcome email param at hosting creation ([#1433](https://github.com/scaleway/scaleway-sdk-js/issues/1433)) ([5b9496b](https://github.com/scaleway/scaleway-sdk-js/commit/5b9496b1785a7dc0d4cc243ffb0535eccf2da217))

## [2.46.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.45.0...@scaleway/sdk@2.46.0) (2024-09-16)

### Features

- add field custom_partitioning_supported to OS ([#1419](https://github.com/scaleway/scaleway-sdk-js/issues/1419)) ([136dbba](https://github.com/scaleway/scaleway-sdk-js/commit/136dbba48a60e7029a9d9b62e316e135f2e307ff))
- add webhosting/v1 and qaas ([#1427](https://github.com/scaleway/scaleway-sdk-js/issues/1427)) ([1980d7e](https://github.com/scaleway/scaleway-sdk-js/commit/1980d7e665ae7671b4c0561f0c8bac97c964d6f4))
- **baremetal:** add OptionType and ExtraOptionVars ([#1421](https://github.com/scaleway/scaleway-sdk-js/issues/1421)) ([3258595](https://github.com/scaleway/scaleway-sdk-js/commit/32585953a2275e1157344f93a91d7cfe15f0ab10))
- **cockpit:** add datasourcetype 'alerts' ([#1414](https://github.com/scaleway/scaleway-sdk-js/issues/1414)) ([9603844](https://github.com/scaleway/scaleway-sdk-js/commit/960384432d0c03c36df37e5ec02cc2c8d86391e6))
- **container:** remove JWT in favor of CreateToken ([#1408](https://github.com/scaleway/scaleway-sdk-js/issues/1408)) ([5fb4b17](https://github.com/scaleway/scaleway-sdk-js/commit/5fb4b17fcbae76125499692285b07b5b02dff20b))
- generate indexes ([#1428](https://github.com/scaleway/scaleway-sdk-js/issues/1428)) ([802854b](https://github.com/scaleway/scaleway-sdk-js/commit/802854ba23e951db11ef64cfbfa65e2ff3d15235))
- **iam:** add support for creating member within a CreateUser ([#1416](https://github.com/scaleway/scaleway-sdk-js/issues/1416)) ([bfb0ab6](https://github.com/scaleway/scaleway-sdk-js/commit/bfb0ab62a56f9342de4d0d142772647f4ddfbab3))
- **instance:** deprecate use of NATed IP in instance api documentation ([#1410](https://github.com/scaleway/scaleway-sdk-js/issues/1410)) ([8dfe2bc](https://github.com/scaleway/scaleway-sdk-js/commit/8dfe2bce726da1688cf95751e93ffdfa5c13c3bf))
- **instance:** return block_bandwidth in bytes per seconds ([#1422](https://github.com/scaleway/scaleway-sdk-js/issues/1422)) ([052d409](https://github.com/scaleway/scaleway-sdk-js/commit/052d409c715dbdb50e59d275080f17506edee2c2))
- **k8s:** expose MigrateClusterToSBSCSI ([#1413](https://github.com/scaleway/scaleway-sdk-js/issues/1413)) ([06ba7ce](https://github.com/scaleway/scaleway-sdk-js/commit/06ba7ce3196e38e8ecad3cd328a5b31eb013ecd5))
- **key_manager:** make key_id argument positional in ImportKeyMaterial and DeleteKeyMaterial ([#1409](https://github.com/scaleway/scaleway-sdk-js/issues/1409)) ([abe764a](https://github.com/scaleway/scaleway-sdk-js/commit/abe764ad082150c383934d1cf3cf5985ff92e83e))
- **tem:** add domain autoconfiguring status ([#1420](https://github.com/scaleway/scaleway-sdk-js/issues/1420)) ([ef55b9d](https://github.com/scaleway/scaleway-sdk-js/commit/ef55b9dad6a5994e77de334aabbe20dd7d80609e))

### Bug Fixes

- **ipam:** make public detach & move ips idempotency ([#1411](https://github.com/scaleway/scaleway-sdk-js/issues/1411)) ([562508f](https://github.com/scaleway/scaleway-sdk-js/commit/562508f5642468d67e3e63c42fcd0ac5be4df31b))

## [2.45.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.44.0...@scaleway/sdk@2.45.0) (2024-09-09)

### Features

- **tem:** add support for UpdateDomain ([#1412](https://github.com/scaleway/scaleway-sdk-js/issues/1412)) ([876bf75](https://github.com/scaleway/scaleway-sdk-js/commit/876bf759eb7c15a994083f13b520abcb87ca7fef))

## [2.44.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.43.0...@scaleway/sdk@2.44.0) (2024-08-26)

### Features

- **block:** add ams-2 in sbs localities ([#1391](https://github.com/scaleway/scaleway-sdk-js/issues/1391)) ([9cb1240](https://github.com/scaleway/scaleway-sdk-js/commit/9cb1240d21c0721294396205c368ca431cd18d06))
- **serverless_sqldb:** add field db_size in message DatabaseBackup ([#1392](https://github.com/scaleway/scaleway-sdk-js/issues/1392)) ([622dbc2](https://github.com/scaleway/scaleway-sdk-js/commit/622dbc27c5ff9bdb2add5e9ae1b53c5967dbec4a))

## [2.43.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.42.0...@scaleway/sdk@2.43.0) (2024-08-12)

### Features

- **apple_silicon:** adapt public API for automatic server deletion ([#1384](https://github.com/scaleway/scaleway-sdk-js/issues/1384)) ([79c21cd](https://github.com/scaleway/scaleway-sdk-js/commit/79c21cd8e5f7cd99844c4b946c2bb4cdd32a2387))
- **block:** enable snapshot export API ([#1378](https://github.com/scaleway/scaleway-sdk-js/issues/1378)) ([2728353](https://github.com/scaleway/scaleway-sdk-js/commit/27283535dc195849f5a09888ca80256397cd8f3d))
- **iam:** expose `condition` field ([#1379](https://github.com/scaleway/scaleway-sdk-js/issues/1379)) ([108f0a2](https://github.com/scaleway/scaleway-sdk-js/commit/108f0a239ff515899998bfed93b1c58d3db9dce8))
- **k8s:** add max_etcd_size in ClusterType ([#1383](https://github.com/scaleway/scaleway-sdk-js/issues/1383)) ([cb84762](https://github.com/scaleway/scaleway-sdk-js/commit/cb84762ebe5d9887617bba86d39101dbc130f1ee))
- **k8s:** add migration to SBS CSI ([#1387](https://github.com/scaleway/scaleway-sdk-js/issues/1387)) ([6482a07](https://github.com/scaleway/scaleway-sdk-js/commit/6482a072a445ce645967bd2969051c9674043c95))
- **k8s:** rationalize node bootstrap ([#1381](https://github.com/scaleway/scaleway-sdk-js/issues/1381)) ([434edec](https://github.com/scaleway/scaleway-sdk-js/commit/434edec360f1255061b9cd910c3b42fa69fdbea4))
- **serverless:** add local storage limit field ([#1380](https://github.com/scaleway/scaleway-sdk-js/issues/1380)) ([dc41d06](https://github.com/scaleway/scaleway-sdk-js/commit/dc41d066189af289c28a033bba58a34aff90af70))
- **tem:** handle autoconfig in create domain endpoint ([#1382](https://github.com/scaleway/scaleway-sdk-js/issues/1382)) ([293ac79](https://github.com/scaleway/scaleway-sdk-js/commit/293ac79e63e9a7f27f573d13ea2cde8ae8395873))
- **vpc_gw:** add ability to upgrade Public Gateway to a specific commercial offer type ([#1376](https://github.com/scaleway/scaleway-sdk-js/issues/1376)) ([724ceb5](https://github.com/scaleway/scaleway-sdk-js/commit/724ceb58242b2b883b54ae05e42332a0dc746551))
- **webhosting:** add first version of the classic mail api ([#1386](https://github.com/scaleway/scaleway-sdk-js/issues/1386)) ([ad3dfed](https://github.com/scaleway/scaleway-sdk-js/commit/ad3dfed78d50fbffe27c9766df4c0de649782df3))

## [2.42.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.41.0...@scaleway/sdk@2.42.0) (2024-07-29)

### Features

- add SVCB HTTPS in DomainRecordType ([#1372](https://github.com/scaleway/scaleway-sdk-js/issues/1372)) ([ead32a1](https://github.com/scaleway/scaleway-sdk-js/commit/ead32a1cbb14ead02d84b37440fb4220423da62c))
- **apple_silicon:** expose ssh/sudo credentials in public APIs ([#1371](https://github.com/scaleway/scaleway-sdk-js/issues/1371)) ([885f185](https://github.com/scaleway/scaleway-sdk-js/commit/885f185fbad933c5bb0cec493a10fbe4af4add2c))

### Bug Fixes

- **instance:** change export_uri to deprecated ([#1375](https://github.com/scaleway/scaleway-sdk-js/issues/1375)) ([d207b5e](https://github.com/scaleway/scaleway-sdk-js/commit/d207b5e19447f77a9667a55052dfa2d2f00af02c))

## [2.41.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.40.0...@scaleway/sdk@2.41.0) (2024-07-22)

### Features

- **tem:** update Webhook event status ([#1369](https://github.com/scaleway/scaleway-sdk-js/issues/1369)) ([9afb0ac](https://github.com/scaleway/scaleway-sdk-js/commit/9afb0ac30b9f2754772498ff0b9cfc769b0e3ed5))
- **webhosting:** add domain api ([#1368](https://github.com/scaleway/scaleway-sdk-js/issues/1368)) ([a293ad3](https://github.com/scaleway/scaleway-sdk-js/commit/a293ad31f19c5c7a8aba314897715e736d166e3f))

### Bug Fixes

- **webhosting:** add missing post body ([#1370](https://github.com/scaleway/scaleway-sdk-js/issues/1370)) ([6347911](https://github.com/scaleway/scaleway-sdk-js/commit/634791100647a70997f1c6cfb18283471f75ec65))

## [2.40.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.39.0...@scaleway/sdk@2.40.0) (2024-07-18)

### Features

- **edge_services:** add args to List filters ([#1366](https://github.com/scaleway/scaleway-sdk-js/issues/1366)) ([365da9e](https://github.com/scaleway/scaleway-sdk-js/commit/365da9e93d2cfe442eb2d6529f065574c4323105))
- **scw:** add blob to scw file marshaler ([#1367](https://github.com/scaleway/scaleway-sdk-js/issues/1367)) ([8def703](https://github.com/scaleway/scaleway-sdk-js/commit/8def703476c14f922dcfb328eea24e5bb9cea3bb))

## [2.39.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.38.1...@scaleway/sdk@2.39.0) (2024-07-15)

### Features

- **secret_manager:** add secret type to browse secret request ([#1364](https://github.com/scaleway/scaleway-sdk-js/issues/1364)) ([164601c](https://github.com/scaleway/scaleway-sdk-js/commit/164601c783a3a6c27895dff0ff21e3b6039baccc))

## [2.38.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.38.0...@scaleway/sdk@2.38.1) (2024-07-11)

### Bug Fixes

- **scw:** export Decimal class ([#1363](https://github.com/scaleway/scaleway-sdk-js/issues/1363)) ([2341b21](https://github.com/scaleway/scaleway-sdk-js/commit/2341b216a4e68cae8b1a86d01e28e028f04e62e4))

## [2.38.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.37.0...@scaleway/sdk@2.38.0) (2024-07-11)

### Features

- add decimal type ([#1334](https://github.com/scaleway/scaleway-sdk-js/issues/1334)) ([dc00cb0](https://github.com/scaleway/scaleway-sdk-js/commit/dc00cb0e3b2de5330e5e0601b5379efe34be5673))
- **inference:** update inference models ordering ([#1359](https://github.com/scaleway/scaleway-sdk-js/issues/1359)) ([1b391cc](https://github.com/scaleway/scaleway-sdk-js/commit/1b391cc41913d6c4d12b87d49de045a5b2855121))
- **ipam:** allow to list available IPs for given resource types ([#1361](https://github.com/scaleway/scaleway-sdk-js/issues/1361)) ([11be518](https://github.com/scaleway/scaleway-sdk-js/commit/11be518cabb12b45104af64b93f8d58541a7cd36))
- **scw:** add custom marshalers for Decimal ([#1362](https://github.com/scaleway/scaleway-sdk-js/issues/1362)) ([db39985](https://github.com/scaleway/scaleway-sdk-js/commit/db3998570b33dcfdd457f594badb70ffcbb2b882))
- **secret_manager:** add secret type to browse secret response ([#1360](https://github.com/scaleway/scaleway-sdk-js/issues/1360)) ([94fa112](https://github.com/scaleway/scaleway-sdk-js/commit/94fa112edd0bf6e6b7cf5861c8f8ade9cf2c9488))

## [2.37.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.36.0...@scaleway/sdk@2.37.0) (2024-07-08)

### Features

- **edge_services:** enable generation ([#1348](https://github.com/scaleway/scaleway-sdk-js/issues/1348)) ([b369062](https://github.com/scaleway/scaleway-sdk-js/commit/b369062316c01c6561adad5d9d035a2eb4a68eff))
- **lb:** display ipam_id for pn attachment in doc ([#1350](https://github.com/scaleway/scaleway-sdk-js/issues/1350)) ([b97c8cb](https://github.com/scaleway/scaleway-sdk-js/commit/b97c8cb8077dfa9f5c3e6156af5da2a12d3f9d69))
- **vpc:** add custom routes CRUD ([#1358](https://github.com/scaleway/scaleway-sdk-js/issues/1358)) ([fa10fb2](https://github.com/scaleway/scaleway-sdk-js/commit/fa10fb2c3db6b1725841aed2cb7ff523e5ebed88))
- **webhosting:** add available languages in control panel ([#1353](https://github.com/scaleway/scaleway-sdk-js/issues/1353)) ([0baf81e](https://github.com/scaleway/scaleway-sdk-js/commit/0baf81e0098775bb5fa79432fee01a733c273273))

### Bug Fixes

- **instance:** correct bootscript architecture field name ([#1337](https://github.com/scaleway/scaleway-sdk-js/issues/1337)) ([60b2334](https://github.com/scaleway/scaleway-sdk-js/commit/60b233416f531da88ca656d87b9c0abc3e0cff47))
- **marketplace:** order local images by type by default ([#1352](https://github.com/scaleway/scaleway-sdk-js/issues/1352)) ([8b46aa5](https://github.com/scaleway/scaleway-sdk-js/commit/8b46aa57315fa08845602e70fe6b7410dad93427))

## [2.36.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.35.0...@scaleway/sdk@2.36.0) (2024-07-01)

### Features

- **container:** add of sandbox ([#1338](https://github.com/scaleway/scaleway-sdk-js/issues/1338)) ([65f3c66](https://github.com/scaleway/scaleway-sdk-js/commit/65f3c66eba15435463302e1f9e5b0b3ab26fb010))
- **secret_manager:** add ListSecretTypes endpoint ([#1340](https://github.com/scaleway/scaleway-sdk-js/issues/1340)) ([21b069f](https://github.com/scaleway/scaleway-sdk-js/commit/21b069fb4eb72ce7374f75642f11d54847e8a52a))

### Bug Fixes

- **inference:** change namespace ([#1339](https://github.com/scaleway/scaleway-sdk-js/issues/1339)) ([9ff7b6d](https://github.com/scaleway/scaleway-sdk-js/commit/9ff7b6dde0d1969f11828a5d70d237d1419f5247))

## [2.35.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.34.0...@scaleway/sdk@2.35.0) (2024-06-24)

### Features

- **cockpit:** add route to update datasource name ([#1333](https://github.com/scaleway/scaleway-sdk-js/issues/1333)) ([63772b2](https://github.com/scaleway/scaleway-sdk-js/commit/63772b227a8bdb23076c6ff46b7bd44738f02384))
- **tem:** add missing rules ([#1335](https://github.com/scaleway/scaleway-sdk-js/issues/1335)) ([4bea1d2](https://github.com/scaleway/scaleway-sdk-js/commit/4bea1d2b5d1e478e0dc6013c8143451ad1e35a2c))

### Bug Fixes

- **serverless:** support rust179 instead of rust178 ([#1332](https://github.com/scaleway/scaleway-sdk-js/issues/1332)) ([877702c](https://github.com/scaleway/scaleway-sdk-js/commit/877702c50c0d446a083d04035ec781f368198264))

## [2.34.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.33.0...@scaleway/sdk@2.34.0) (2024-06-17)

### Features

- **tem:** add filters on list webhooks events endpoint ([#1313](https://github.com/scaleway/scaleway-sdk-js/issues/1313)) ([3a61fcc](https://github.com/scaleway/scaleway-sdk-js/commit/3a61fccb3189e0e58bb48dae90c870eb2b7ddc1d))

### Bug Fixes

- **dedibox:** change ip_id from string to uint64 ([#1311](https://github.com/scaleway/scaleway-sdk-js/issues/1311)) ([55cf7fb](https://github.com/scaleway/scaleway-sdk-js/commit/55cf7fb603625a011bed5e4f6215a6c5177f22f3))
- **ipam/v1:** allow source field to be null in responses ([#1315](https://github.com/scaleway/scaleway-sdk-js/issues/1315)) ([ca272ea](https://github.com/scaleway/scaleway-sdk-js/commit/ca272ea92c5bbe7a3efa3e16ecff2af1118ba47a))
- **lb:** change default value for assign_flexible_ip ([#1312](https://github.com/scaleway/scaleway-sdk-js/issues/1312)) ([b46948e](https://github.com/scaleway/scaleway-sdk-js/commit/b46948eeb84afba8069179259c70517588c3eb3f))

## [2.33.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.32.0...@scaleway/sdk@2.33.0) (2024-06-10)

### Features

- **instance:** adapt pnic creation to ipam workflow ([#1307](https://github.com/scaleway/scaleway-sdk-js/issues/1307)) ([b71a504](https://github.com/scaleway/scaleway-sdk-js/commit/b71a504155908126989c1e89b0a0a270352d0d96))
- **serverless_jobs:** add ListJobsResources method ([#1309](https://github.com/scaleway/scaleway-sdk-js/issues/1309)) ([566a38e](https://github.com/scaleway/scaleway-sdk-js/commit/566a38ece7ac0bea74c4d4881713d28d9d2a7493))
- **serverless:** add node22, python312, php83, go122 and rust178 runtimes ([#1306](https://github.com/scaleway/scaleway-sdk-js/issues/1306)) ([44bf792](https://github.com/scaleway/scaleway-sdk-js/commit/44bf792a53cfdddec1b402f342ec9779b8ea29ea))
- **tem:** list webhooks by domain ID ([#1305](https://github.com/scaleway/scaleway-sdk-js/issues/1305)) ([82c290c](https://github.com/scaleway/scaleway-sdk-js/commit/82c290c3615c15eef4a4e4a80bf46161caa84145))

## [2.32.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.31.0...@scaleway/sdk@2.32.0) (2024-06-03)

### Features

- **baremetal:** add name filter for ListOffersRequest ([#1296](https://github.com/scaleway/scaleway-sdk-js/issues/1296)) ([066a7e9](https://github.com/scaleway/scaleway-sdk-js/commit/066a7e969a11543cfa151d4b704f90ec94d7996c))
- **block:** add exporting snapshot to s3 ([#1302](https://github.com/scaleway/scaleway-sdk-js/issues/1302)) ([5a5009e](https://github.com/scaleway/scaleway-sdk-js/commit/5a5009ea69c2599ae3f118f4fb8c13825c8b3b3b))
- **instance:** move EncryptedRdpPassword elements to Server ([#1298](https://github.com/scaleway/scaleway-sdk-js/issues/1298)) ([9be8437](https://github.com/scaleway/scaleway-sdk-js/commit/9be8437301065141b7f9c3069390d7a77cd0098b))
- **k8s:** remove MigrateToPrivateNetwork rpc ([#1297](https://github.com/scaleway/scaleway-sdk-js/issues/1297)) ([41c840e](https://github.com/scaleway/scaleway-sdk-js/commit/41c840e8050e31b2261a7674783e22862080b710))
- **tem:** read update delete webhook(s) ([#1301](https://github.com/scaleway/scaleway-sdk-js/issues/1301)) ([329b018](https://github.com/scaleway/scaleway-sdk-js/commit/329b01881e418dbcbab784dd216d6853902575db))

### Bug Fixes

- **secret_manager:** update secret version status enum doc ([#1295](https://github.com/scaleway/scaleway-sdk-js/issues/1295)) ([5f2a018](https://github.com/scaleway/scaleway-sdk-js/commit/5f2a018fa0b686aa28fd7cbf72ae75ded1b7b2cb))

## [2.31.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.30.0...@scaleway/sdk@2.31.0) (2024-05-27)

### Features

- **apple_silicon:** add info on server type ([#1289](https://github.com/scaleway/scaleway-sdk-js/issues/1289)) ([ca32ce6](https://github.com/scaleway/scaleway-sdk-js/commit/ca32ce66b23be5f701e2b537b62b6c218f1f75c9))
- **block:** add volume updating status ([#1288](https://github.com/scaleway/scaleway-sdk-js/issues/1288)) ([54d6d15](https://github.com/scaleway/scaleway-sdk-js/commit/54d6d155321c70b0c0139d25998e0875c5a90f1f))
- **instance:** add encrypted rdp password method ([#1282](https://github.com/scaleway/scaleway-sdk-js/issues/1282)) ([421e1fc](https://github.com/scaleway/scaleway-sdk-js/commit/421e1fc5575ac2b4d0cc952b9b4c3d6c8cb35e47))
- **vpc/v2:** add ListSubnets ([#1287](https://github.com/scaleway/scaleway-sdk-js/issues/1287)) ([5faf63c](https://github.com/scaleway/scaleway-sdk-js/commit/5faf63ceb763fea9003a8e9b8eceede811dab296))
- **vpc/v2:** add ListSubnets docs ([#1293](https://github.com/scaleway/scaleway-sdk-js/issues/1293)) ([76da78e](https://github.com/scaleway/scaleway-sdk-js/commit/76da78e1847b2420a2b5411b05d8116dcf1312c3))
- **vpc/v2:** expose Subnet fields that v1 exposed ([#1292](https://github.com/scaleway/scaleway-sdk-js/issues/1292)) ([7900a3b](https://github.com/scaleway/scaleway-sdk-js/commit/7900a3b40cedbe6ac200e2fe06a425df6d8a9957))

## [2.30.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.29.0...@scaleway/sdk@2.30.0) (2024-05-20)

### Features

- **baremetal:** expose max bandwidth ([#1280](https://github.com/scaleway/scaleway-sdk-js/issues/1280)) ([d67f471](https://github.com/scaleway/scaleway-sdk-js/commit/d67f4713d050dbbd1c6a547e174946cc0bcad5f0))
- **key_manager:** add v1alpha1 ([#1279](https://github.com/scaleway/scaleway-sdk-js/issues/1279)) ([f3efa9a](https://github.com/scaleway/scaleway-sdk-js/commit/f3efa9add80a0388f097b7a4afe4a63fdc75bda0))

## [2.29.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.28.0...@scaleway/sdk@2.29.0) (2024-05-16)

### Features

- **ipam:** allow for bulk IPs release ([#1277](https://github.com/scaleway/scaleway-sdk-js/issues/1277)) ([01711a9](https://github.com/scaleway/scaleway-sdk-js/commit/01711a971f07f188652f033904578ced96281868))

## [2.28.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.27.0...@scaleway/sdk@2.28.0) (2024-05-15)

### Features

- **ipam:** allow filtering on pn, subnet or vpc id ([#1260](https://github.com/scaleway/scaleway-sdk-js/issues/1260)) ([c71af8b](https://github.com/scaleway/scaleway-sdk-js/commit/c71af8b7e8b4f1a7b1e2a7208baeea39b57afc27))

### Bug Fixes

- **build:** export all types ([#1261](https://github.com/scaleway/scaleway-sdk-js/issues/1261)) ([2c13c19](https://github.com/scaleway/scaleway-sdk-js/commit/2c13c19d1699d2138d0ae9c4cf2a8a29b50d93ff))

## [2.27.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.26.0...@scaleway/sdk@2.27.0) (2024-05-06)

### Features

- **block:** publish endpoint ImportSnapshotFromS3 ([#1256](https://github.com/scaleway/scaleway-sdk-js/issues/1256)) ([23abe58](https://github.com/scaleway/scaleway-sdk-js/commit/23abe58f1ae3dcac7ba15b9623ddb3fd762c162a))
- **lb:** publish flexible ip tags feature ([#1257](https://github.com/scaleway/scaleway-sdk-js/issues/1257)) ([62bdf3b](https://github.com/scaleway/scaleway-sdk-js/commit/62bdf3bd206e7cf6b657f7c4e126a9e89608c59e))

## [2.26.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.25.0...@scaleway/sdk@2.26.0) (2024-04-29)

### Features

- **apple_silicon:** add os selection fields ([#1252](https://github.com/scaleway/scaleway-sdk-js/issues/1252)) ([c68cc53](https://github.com/scaleway/scaleway-sdk-js/commit/c68cc539ee07d53f3843865e513362c248b114b2))
- **block:** add ImportSnapshotFromS3Request field explanation ([#1254](https://github.com/scaleway/scaleway-sdk-js/issues/1254)) ([081d400](https://github.com/scaleway/scaleway-sdk-js/commit/081d4003b02d285925995209dc9de0cda8fe67a1))
- **k8s:** add MigrateClusterToRoutedIPs ([#1250](https://github.com/scaleway/scaleway-sdk-js/issues/1250)) ([30adef7](https://github.com/scaleway/scaleway-sdk-js/commit/30adef791340478d9ed0c87957aed40dd0eb788b))
- **webhosting:** add a magic link autologin url for webhosting ([#1249](https://github.com/scaleway/scaleway-sdk-js/issues/1249)) ([9bf0ff8](https://github.com/scaleway/scaleway-sdk-js/commit/9bf0ff85909887aa6467beac6474a020fdc8e178))
- **webhosting:** add public reset hosting password ([#1251](https://github.com/scaleway/scaleway-sdk-js/issues/1251)) ([06b151b](https://github.com/scaleway/scaleway-sdk-js/commit/06b151bf0057c0c1326601c67d6507eadc313364))

## [2.25.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.24.0...@scaleway/sdk@2.25.0) (2024-04-22)

### Features

- **cockpit:** add v1 ([#1241](https://github.com/scaleway/scaleway-sdk-js/issues/1241)) ([6d8ef77](https://github.com/scaleway/scaleway-sdk-js/commit/6d8ef77b68c75a3ba15cedf212fcdcb29098c576))
- **instance:** deprecate some fields following ipmob introduction ([#1240](https://github.com/scaleway/scaleway-sdk-js/issues/1240)) ([d8d3091](https://github.com/scaleway/scaleway-sdk-js/commit/d8d3091d26fd4cca79a280197d8555f6487dba22))
- **k8s:** add routedIpEnabled field to Cluster ([#1243](https://github.com/scaleway/scaleway-sdk-js/issues/1243)) ([391c75e](https://github.com/scaleway/scaleway-sdk-js/commit/391c75e6916a10c79581b820d57e6ea5d4fad994))
- **rdb:** add private network provisionning mode ([#1242](https://github.com/scaleway/scaleway-sdk-js/issues/1242)) ([40437b0](https://github.com/scaleway/scaleway-sdk-js/commit/40437b071e11802f5f8c61e211bfa48d9d42dd12))

## [2.24.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.23.0...@scaleway/sdk@2.24.0) (2024-04-15)

### Features

- **iam:** add new quota fields ([#1231](https://github.com/scaleway/scaleway-sdk-js/issues/1231)) ([0a4be74](https://github.com/scaleway/scaleway-sdk-js/commit/0a4be74dd1184a99ed2db39dfcdbc8e14a8a25e7))
- **secret_manager:** add AccessSecretVersionByPath endpoint ([#1232](https://github.com/scaleway/scaleway-sdk-js/issues/1232)) ([ded7597](https://github.com/scaleway/scaleway-sdk-js/commit/ded759733f81d72d4cfc008bb3b5b7b5dbcd9a9e))
- **secret_manager:** add secret type messages to simplify deserialization ([#1227](https://github.com/scaleway/scaleway-sdk-js/issues/1227)) ([4536b46](https://github.com/scaleway/scaleway-sdk-js/commit/4536b46bd4a97cc49b38be4303d7ba5d3218e568))
- **serverless_jobs:** filter job defs and runs by organization_id ([#1228](https://github.com/scaleway/scaleway-sdk-js/issues/1228)) ([736b1c8](https://github.com/scaleway/scaleway-sdk-js/commit/736b1c87e60c590d19a248406cebe81d8d996850))
- **serverless_sqldb:** swap values of OrderBy of message ListDatabaseBackupsRequest ([#1230](https://github.com/scaleway/scaleway-sdk-js/issues/1230)) ([7c9a9b3](https://github.com/scaleway/scaleway-sdk-js/commit/7c9a9b3eefefd34e448d63a0039f2770f71472b7))
- **webhosting:** add one-time-password to hosting responses ([#1229](https://github.com/scaleway/scaleway-sdk-js/issues/1229)) ([d13076c](https://github.com/scaleway/scaleway-sdk-js/commit/d13076c2a8bd1d68aa9dc61d254ec930a4bdc109))

## [2.23.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.22.0...@scaleway/sdk@2.23.0) (2024-04-08)

### Features

- **dedibox:** add v1 ([#1215](https://github.com/scaleway/scaleway-sdk-js/issues/1215)) ([711d33d](https://github.com/scaleway/scaleway-sdk-js/commit/711d33d191ca486ea4da23fdbbe6d6c34448a56f))
- **iam:** allow filtering by name in ListQuotas ([#1212](https://github.com/scaleway/scaleway-sdk-js/issues/1212)) ([39e03b4](https://github.com/scaleway/scaleway-sdk-js/commit/39e03b470deb6dbb7b8c1e52af652b7cd762b111))
- **secret_manager:** return type on AccessSecretVersion ([#1214](https://github.com/scaleway/scaleway-sdk-js/issues/1214)) ([f29c488](https://github.com/scaleway/scaleway-sdk-js/commit/f29c488a27d731c9106baa1ae15879ec492d9e1d))
- **vpc/v2:** allow routing activation on existing VPCs ([#1221](https://github.com/scaleway/scaleway-sdk-js/issues/1221)) ([706f4a7](https://github.com/scaleway/scaleway-sdk-js/commit/706f4a72f2d7630982eacfb913cf8bf498da8a53))

## [2.22.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.21.1...@scaleway/sdk@2.22.0) (2024-04-01)

### Features

- **k8s:** allow cluster with cni=none ([#1204](https://github.com/scaleway/scaleway-sdk-js/issues/1204)) ([d5343ca](https://github.com/scaleway/scaleway-sdk-js/commit/d5343cad98f40998be3706f7ddb10ca9c2d93c26))
- **lb:** remove exclude from lb tag filter ([#1197](https://github.com/scaleway/scaleway-sdk-js/issues/1197)) ([3ba104a](https://github.com/scaleway/scaleway-sdk-js/commit/3ba104a2b0962a58cbbceb77bfb7dcd596ef1e53))
- **llm_inference:** add v1beta1 ([#1201](https://github.com/scaleway/scaleway-sdk-js/issues/1201)) ([571e7ff](https://github.com/scaleway/scaleway-sdk-js/commit/571e7ffe3f7284848ed42b874928379155e3cc67))
- **rdb:** add apply maintenance ([#1200](https://github.com/scaleway/scaleway-sdk-js/issues/1200)) ([e742fcc](https://github.com/scaleway/scaleway-sdk-js/commit/e742fcce8271797c79961214e1ca22ace9e49e0e))
- **secret:** add tags filter for browse secrets ([#1198](https://github.com/scaleway/scaleway-sdk-js/issues/1198)) ([dbc4c9a](https://github.com/scaleway/scaleway-sdk-js/commit/dbc4c9a393df8948f93189fef96d75a97827a00b))
- **serverless_jobs:** add started_at in JobRun ([#1205](https://github.com/scaleway/scaleway-sdk-js/issues/1205)) ([748e4f9](https://github.com/scaleway/scaleway-sdk-js/commit/748e4f9b54570cb0887b645ad5d56bfc87400915))

### Bug Fixes

- **rdb:** set maintenance pending status as non-transient ([#1210](https://github.com/scaleway/scaleway-sdk-js/issues/1210)) ([64f5be8](https://github.com/scaleway/scaleway-sdk-js/commit/64f5be8141d0c8501b0887fdbac9a9e7a8ad84ee))

## [2.21.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.21.0...@scaleway/sdk@2.21.1) (2024-03-18)

**Note:** Version bump only for package @scaleway/sdk

## [2.21.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.20.0...@scaleway/sdk@2.21.0) (2024-03-18)

### Features

- **cockpit:** add new Expert plan ([#1188](https://github.com/scaleway/scaleway-sdk-js/issues/1188)) ([7f7030e](https://github.com/scaleway/scaleway-sdk-js/commit/7f7030eb5a548aab047150b6fa24e28d821dccd4))
- **domain:** add status on Domain for trade integration ([#1185](https://github.com/scaleway/scaleway-sdk-js/issues/1185)) ([1a23b6a](https://github.com/scaleway/scaleway-sdk-js/commit/1a23b6a39021afd5cecd1e1688e2d6c3b74ea31c))
- **marketplace:** remove deprecated v1 ([#1182](https://github.com/scaleway/scaleway-sdk-js/issues/1182)) ([ab8bdae](https://github.com/scaleway/scaleway-sdk-js/commit/ab8bdaef0b3109ae94cf3b41807745fd01dcaf2a))
- **serverless:** remove serverless metrics and logs endpoints ([#1187](https://github.com/scaleway/scaleway-sdk-js/issues/1187)) ([1c3f106](https://github.com/scaleway/scaleway-sdk-js/commit/1c3f106577243de76732c3d2ad981e644d25ed7c))
- **tem:** add domain records and DMARC configuration ([#1186](https://github.com/scaleway/scaleway-sdk-js/issues/1186)) ([5d43aaa](https://github.com/scaleway/scaleway-sdk-js/commit/5d43aaa421036979c05824c8b602774e8f176dc4))

## [2.20.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.19.0...@scaleway/sdk@2.20.0) (2024-03-11)

### Features

- **secret_manager:** add new secret types ([#1175](https://github.com/scaleway/scaleway-sdk-js/issues/1175)) ([66382b5](https://github.com/scaleway/scaleway-sdk-js/commit/66382b56c61a8accd1189a931dca03e13b9b871c))
- **webhosting:** add "protected" field to hosting ([#1174](https://github.com/scaleway/scaleway-sdk-js/issues/1174)) ([a5fd4cc](https://github.com/scaleway/scaleway-sdk-js/commit/a5fd4cca869b2574a0a9857ec9ac70ab8e4571e7))
- **webhosting:** add domain configuration ([#1173](https://github.com/scaleway/scaleway-sdk-js/issues/1173)) ([3ecdca1](https://github.com/scaleway/scaleway-sdk-js/commit/3ecdca1314ac1e7a64b7e87919b65b0f481fdc76))

## [2.19.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.18.1...@scaleway/sdk@2.19.0) (2024-03-04)

### Features

- **block:** add new reference status not-ready-yet ([#1168](https://github.com/scaleway/scaleway-sdk-js/issues/1168)) ([5e9905a](https://github.com/scaleway/scaleway-sdk-js/commit/5e9905a0d8ed4840449acc290134b3824e985f27))
- **iam:** add create jwt method ([#1172](https://github.com/scaleway/scaleway-sdk-js/issues/1172)) ([e980276](https://github.com/scaleway/scaleway-sdk-js/commit/e98027636f00889b0d11c1880ef47834a3c59e3d))
- **secret_manager:** add ListTags to v1beta1 ([#1167](https://github.com/scaleway/scaleway-sdk-js/issues/1167)) ([b3a9ed9](https://github.com/scaleway/scaleway-sdk-js/commit/b3a9ed90ce5593da43935138e3b662c1f111e0fc))
- **vpc/v2:** add property to enable or disable routing in a VPC ([#1169](https://github.com/scaleway/scaleway-sdk-js/issues/1169)) ([2e07ffd](https://github.com/scaleway/scaleway-sdk-js/commit/2e07ffd639dcafd8aa7437fdd54fc838a48cb497))

## [2.18.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.18.0...@scaleway/sdk@2.18.1) (2024-02-26)

### Bug Fixes

- **vpc_gw:** return Empty on EnableIPMobility ([#1158](https://github.com/scaleway/scaleway-sdk-js/issues/1158)) ([94bef51](https://github.com/scaleway/scaleway-sdk-js/commit/94bef5185438db72d55fd1505cbdba64393e306e))

## [2.18.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.17.0...@scaleway/sdk@2.18.0) (2024-02-19)

### Features

- **mnq:** add support for the nl-ams region ([#1156](https://github.com/scaleway/scaleway-sdk-js/issues/1156)) ([b04e373](https://github.com/scaleway/scaleway-sdk-js/commit/b04e37355e45d74389554a88e368c85059dc329d))
- **secret_manager:** add v1beta1 ([#1151](https://github.com/scaleway/scaleway-sdk-js/issues/1151)) ([b033004](https://github.com/scaleway/scaleway-sdk-js/commit/b0330043d33fb3cec533ee157a7cfd4489bc3003))
- **vpc_gw:** introduce idempotent call to migrate PGWs to IPMob ([#1152](https://github.com/scaleway/scaleway-sdk-js/issues/1152)) ([54fffa5](https://github.com/scaleway/scaleway-sdk-js/commit/54fffa56c7df09280abc2ab438174a19a750ca43))

## [2.17.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.16.0...@scaleway/sdk@2.17.0) (2024-02-15)

### Features

- **block:** remove SnapshotSummary ([#1146](https://github.com/scaleway/scaleway-sdk-js/issues/1146)) ([41f5fef](https://github.com/scaleway/scaleway-sdk-js/commit/41f5fefa5e96a3020cc089a60e9044a8e108f40f))
- **serverless_jobs:** add local storage limit ([#1145](https://github.com/scaleway/scaleway-sdk-js/issues/1145)) ([dc885f0](https://github.com/scaleway/scaleway-sdk-js/commit/dc885f09afda4a11a812b0c1ace22d44c5e8e476))

## [2.16.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.15.0...@scaleway/sdk@2.16.0) (2024-02-12)

### Features

- **ipam:** add llm_deployment resource ([#1134](https://github.com/scaleway/scaleway-sdk-js/issues/1134)) ([46c52d3](https://github.com/scaleway/scaleway-sdk-js/commit/46c52d31ce1ef6ac2148d0dca47f3eaa4ec409aa))
- **serverless_jobs:** returns a list of job runs when starting a job definition ([#1140](https://github.com/scaleway/scaleway-sdk-js/issues/1140)) ([e9e03b8](https://github.com/scaleway/scaleway-sdk-js/commit/e9e03b83dcb2236c9ef2f387a1e2de45c8884e1a))
- **serverless:** deprecate /logs and /metrics endpoints ([#1139](https://github.com/scaleway/scaleway-sdk-js/issues/1139)) ([50451b5](https://github.com/scaleway/scaleway-sdk-js/commit/50451b56e882ad6e4dd5c3ff465ec9ee1cc24a6e))

## [2.15.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.14.0...@scaleway/sdk@2.15.0) (2024-02-05)

### Features

- **billing:** fix documentation for discounts ([#1129](https://github.com/scaleway/scaleway-sdk-js/issues/1129)) ([6da9854](https://github.com/scaleway/scaleway-sdk-js/commit/6da985478fc3aabe48bf37e15188a9245cadc573))
- **webhosting:** add language field at public hosting creation ([#1127](https://github.com/scaleway/scaleway-sdk-js/issues/1127)) ([7bf9f0e](https://github.com/scaleway/scaleway-sdk-js/commit/7bf9f0e9d8bdd885b2cfc603f1ca8c04109034ad))

## [2.14.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.13.0...@scaleway/sdk@2.14.0) (2024-01-29)

### Features

- **domain:** add status to contact message ([#1119](https://github.com/scaleway/scaleway-sdk-js/issues/1119)) ([c91af50](https://github.com/scaleway/scaleway-sdk-js/commit/c91af5041bafd8917b7d42da250ddbbcbc29f25e))
- **k8s:** add audit logs compatibility with offers ([#1115](https://github.com/scaleway/scaleway-sdk-js/issues/1115)) ([49dec97](https://github.com/scaleway/scaleway-sdk-js/commit/49dec9767edb429ab9cbb0da79f630f0d0949edb))
- **k8s:** remove some deprecated fields ([#1118](https://github.com/scaleway/scaleway-sdk-js/issues/1118)) ([4b23026](https://github.com/scaleway/scaleway-sdk-js/commit/4b23026a4925af4b701e63f2d2668e4c42e8fd77))

## [2.13.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.12.0...@scaleway/sdk@2.13.0) (2024-01-22)

### Features

- **secret_manager:** add protection in secret creation ([#1109](https://github.com/scaleway/scaleway-sdk-js/issues/1109)) ([501fb3e](https://github.com/scaleway/scaleway-sdk-js/commit/501fb3e28dadcc42fee7ac2051f296bf2d2b3fd3))
- **tem:** add dmarc validation status to DomainLastStatus endpoint ([#1108](https://github.com/scaleway/scaleway-sdk-js/issues/1108)) ([4afd042](https://github.com/scaleway/scaleway-sdk-js/commit/4afd042e9b02a2dd18a6250cd198b2f7a897f62a))

### Bug Fixes

- **k8s:** remove duplicate private type ([#1106](https://github.com/scaleway/scaleway-sdk-js/issues/1106)) ([46f2db2](https://github.com/scaleway/scaleway-sdk-js/commit/46f2db2dc0e42642eb5aede09073ccf5b42b7d5e))

## [2.12.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.11.0...@scaleway/sdk@2.12.0) (2024-01-15)

### Features

- **billing:** list discounts in v2beta1 and update list consumptions response ([#1099](https://github.com/scaleway/scaleway-sdk-js/issues/1099)) ([be05dd3](https://github.com/scaleway/scaleway-sdk-js/commit/be05dd30f8be3f29b06d64f4ce4c666685d7be66))
- **iam:** add filtering on multiple IDs on listing endpoints ([#1094](https://github.com/scaleway/scaleway-sdk-js/issues/1094)) ([359c80c](https://github.com/scaleway/scaleway-sdk-js/commit/359c80ccab0a56a155bec8dc8bdd726046f3e3ae))
- **instance:** add start_date to server maintenance ([#1101](https://github.com/scaleway/scaleway-sdk-js/issues/1101)) ([828812f](https://github.com/scaleway/scaleway-sdk-js/commit/828812fbbf718ca7736c2bf7046abafbcaeb9f2a))
- **k8s:** add field to hide token from kubeconfig ([#1093](https://github.com/scaleway/scaleway-sdk-js/issues/1093)) ([ba55c0b](https://github.com/scaleway/scaleway-sdk-js/commit/ba55c0b0c95ef2ec1a028f0a6bb8422448669e05))
- **serverless_jobs:** add run options when starting a job ([#1102](https://github.com/scaleway/scaleway-sdk-js/issues/1102)) ([4315f18](https://github.com/scaleway/scaleway-sdk-js/commit/4315f184b7f3503a8eaf168b59d695cc22e2be66))

### Bug Fixes

- **serverless_sqldb:** restore fields in messages ([#1095](https://github.com/scaleway/scaleway-sdk-js/issues/1095)) ([9951323](https://github.com/scaleway/scaleway-sdk-js/commit/9951323e8ed8fdd25a2badcee38514db040a0342))

## [2.11.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.10.0...@scaleway/sdk@2.11.0) (2024-01-08)

### Features

- **billing:** add v2beta1 API ([#1082](https://github.com/scaleway/scaleway-sdk-js/issues/1082)) ([c613a94](https://github.com/scaleway/scaleway-sdk-js/commit/c613a94d2099b1cf55cdf53481d4fc5b2f6d6abb))
- **rdb:** add instance_id to ReadReplica ([#1083](https://github.com/scaleway/scaleway-sdk-js/issues/1083)) ([60a08fc](https://github.com/scaleway/scaleway-sdk-js/commit/60a08fc91a6aa8312e04c6dcdee1ee8d2a57fc7d))
- **tem:** add field to accept new headers in create email endpoint ([#1084](https://github.com/scaleway/scaleway-sdk-js/issues/1084)) ([fd05628](https://github.com/scaleway/scaleway-sdk-js/commit/fd056280d1cb89c55f34ecb3920d67eddb65dbfa))

## [2.10.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.9.0...@scaleway/sdk@2.10.0) (2024-01-03)

### Features

- **iam:** add UpdateUser ([#1080](https://github.com/scaleway/scaleway-sdk-js/issues/1080)) ([efb630a](https://github.com/scaleway/scaleway-sdk-js/commit/efb630a29a485b7509a7728eb348b3f7ff8bf2f4))
- **lb:** generate ip_type for ListIpsRequest ([#1081](https://github.com/scaleway/scaleway-sdk-js/issues/1081)) ([e8e133b](https://github.com/scaleway/scaleway-sdk-js/commit/e8e133bffd23a8b8a66b0e76e48c5370ebbbe34e))

## [2.9.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.8.0...@scaleway/sdk@2.9.0) (2024-01-01)

### Features

- **instance:** add ipam_id to ServerIp and Ip ([#1068](https://github.com/scaleway/scaleway-sdk-js/issues/1068)) ([895328f](https://github.com/scaleway/scaleway-sdk-js/commit/895328f397349e30bd88d0165cf9af75a53343ff))
- **ipam:** allow publicly to set a custom reverse on their ip ([#1077](https://github.com/scaleway/scaleway-sdk-js/issues/1077)) ([adf09e2](https://github.com/scaleway/scaleway-sdk-js/commit/adf09e2c4b91a9494cdbe866a5ebd9f4646bfa79))
- **k8s:** use structs for node taints ([#1076](https://github.com/scaleway/scaleway-sdk-js/issues/1076)) ([1127301](https://github.com/scaleway/scaleway-sdk-js/commit/112730149f33b77729a536f936a23be358f25802))
- **lb:** attach flexible ipv6 ([#1069](https://github.com/scaleway/scaleway-sdk-js/issues/1069)) ([6096c85](https://github.com/scaleway/scaleway-sdk-js/commit/6096c85114fcde6567cb9ef98ce9a8297f519cd5))
- **secret:** add ephemeral policy ([#1072](https://github.com/scaleway/scaleway-sdk-js/issues/1072)) ([6c9197b](https://github.com/scaleway/scaleway-sdk-js/commit/6c9197b932814a95f2f035ae3245598e13074c25))
- **serverless:** add CronSchedule to job definitions ([#1074](https://github.com/scaleway/scaleway-sdk-js/issues/1074)) ([0900a76](https://github.com/scaleway/scaleway-sdk-js/commit/0900a76b57e024ae98d5f7dc09f6581aa64e9e2b))

## [2.8.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.7.0...@scaleway/sdk@2.8.0) (2023-12-18)

### Features

- **block:** remove support for import snapshot from object ([#1067](https://github.com/scaleway/scaleway-sdk-js/issues/1067)) ([0acc421](https://github.com/scaleway/scaleway-sdk-js/commit/0acc421e527565b6f6cc58abb4583ad893f7ae53))

## [2.7.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.6.0...@scaleway/sdk@2.7.0) (2023-12-15)

### Features

- **block:** add size to ImportSnapshotFromS3Request ([#1059](https://github.com/scaleway/scaleway-sdk-js/issues/1059)) ([e22c255](https://github.com/scaleway/scaleway-sdk-js/commit/e22c255960fab0db41dc5561217dfaa6371888b2))
- **block:** specify available localities ([#1061](https://github.com/scaleway/scaleway-sdk-js/issues/1061)) ([0c9c197](https://github.com/scaleway/scaleway-sdk-js/commit/0c9c197d81e9d325f564f29088c798cee2efc7fd))
- **document_db:** align proto with rdb proto ([#1066](https://github.com/scaleway/scaleway-sdk-js/issues/1066)) ([e10457e](https://github.com/scaleway/scaleway-sdk-js/commit/e10457e073c0ad8d213ba10e76091f23ade67bf4))
- **rdb:** add volume_type for snapshots ([#1062](https://github.com/scaleway/scaleway-sdk-js/issues/1062)) ([20643a7](https://github.com/scaleway/scaleway-sdk-js/commit/20643a7e71307cdbb7b4dd833bac737c8b19468d))
- **serverless_jobs:** add resources to job run ([#1060](https://github.com/scaleway/scaleway-sdk-js/issues/1060)) ([9b560c4](https://github.com/scaleway/scaleway-sdk-js/commit/9b560c42c172c7b51f4e596d8803f7b8f9741460))
- **serverless_sqldb:** generate SDKs ([#1063](https://github.com/scaleway/scaleway-sdk-js/issues/1063)) ([afde985](https://github.com/scaleway/scaleway-sdk-js/commit/afde985565b0dff7dbdbdd5440b991362740331c))

### Bug Fixes

- **k8s:** update field description ([#1064](https://github.com/scaleway/scaleway-sdk-js/issues/1064)) ([a4afc08](https://github.com/scaleway/scaleway-sdk-js/commit/a4afc0865b5518abaf672450c94813cad4950da6))
- **marketplace/v1:** remove version methods ([#1043](https://github.com/scaleway/scaleway-sdk-js/issues/1043)) ([77b70ef](https://github.com/scaleway/scaleway-sdk-js/commit/77b70efd1a06e6447f8095594c30eba26dbb0682))

## [2.6.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.5.0...@scaleway/sdk@2.6.0) (2023-12-11)

### Features

- **instance:** replace some get/put utils by patch ones ([#1010](https://github.com/scaleway/scaleway-sdk-js/issues/1010)) ([b67133c](https://github.com/scaleway/scaleway-sdk-js/commit/b67133c1cf0af4d9d3f0ea4c1877c9d1c67b8721))
- **k8s:** add nodelabels for kosmos nodes ([#1040](https://github.com/scaleway/scaleway-sdk-js/issues/1040)) ([c8437f0](https://github.com/scaleway/scaleway-sdk-js/commit/c8437f01dc8b57b88d80ed2cb3abfa6d93ea337f))

## [2.5.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.4.2...@scaleway/sdk@2.5.0) (2023-11-30)

### Features

- **cockpit:** add deleteDatasource endpoint ([#1034](https://github.com/scaleway/scaleway-sdk-js/issues/1034)) ([054d13a](https://github.com/scaleway/scaleway-sdk-js/commit/054d13a68737a7f71589d0f3dcc37ecd078e8752))
- **k8s:** add node binaries versions ([#1033](https://github.com/scaleway/scaleway-sdk-js/issues/1033)) ([89a3fb1](https://github.com/scaleway/scaleway-sdk-js/commit/89a3fb18fc99f2e2d3296822c5652f0ec7abc65f))
- **webhosting:** add control panels field in listHostings request ([#1035](https://github.com/scaleway/scaleway-sdk-js/issues/1035)) ([667fd73](https://github.com/scaleway/scaleway-sdk-js/commit/667fd73bb4c6b10c6a56ff0a48284b752a60c36e))
- **webhosting:** add fields to hosting & platforms ([#1032](https://github.com/scaleway/scaleway-sdk-js/issues/1032)) ([d025d26](https://github.com/scaleway/scaleway-sdk-js/commit/d025d26886c76bf05be7489b508920d7bf9341ea))

## [2.4.2](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.4.1...@scaleway/sdk@2.4.2) (2023-11-28)

**Note:** Version bump only for package @scaleway/sdk

## [2.4.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.4.0...@scaleway/sdk@2.4.1) (2023-11-27)

**Note:** Version bump only for package @scaleway/sdk

## [2.4.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.3.0...@scaleway/sdk@2.4.0) (2023-11-27)

### Features

- **block:** add organization_id filter in listings ([#1022](https://github.com/scaleway/scaleway-sdk-js/issues/1022)) ([2f4a741](https://github.com/scaleway/scaleway-sdk-js/commit/2f4a741117620216d2eda29401a556d529530a25))
- **domain:** add informations on scaleway product using the domain/dnszone ([#1024](https://github.com/scaleway/scaleway-sdk-js/issues/1024)) ([d1a22d9](https://github.com/scaleway/scaleway-sdk-js/commit/d1a22d90dd6453aedad6e746b524eb97551e246e))
- **iam:** add tags on applications, groups, users and policies ([#1013](https://github.com/scaleway/scaleway-sdk-js/issues/1013)) ([176ba72](https://github.com/scaleway/scaleway-sdk-js/commit/176ba7283942706ce7b65b3d1db16301fa43491e))
- **instance:** remove support for creating a volume from a volume ([#1011](https://github.com/scaleway/scaleway-sdk-js/issues/1011)) ([76a7755](https://github.com/scaleway/scaleway-sdk-js/commit/76a775529f2148b539b982674e189147b60afe4c))
- **ipam:** add resource type k8s_cluster ([#1021](https://github.com/scaleway/scaleway-sdk-js/issues/1021)) ([47ea035](https://github.com/scaleway/scaleway-sdk-js/commit/47ea0353f0cd4233404b2dd3478b6fa5779c4cac))
- **serverless_jobs:** add validation for field name ([#1025](https://github.com/scaleway/scaleway-sdk-js/issues/1025)) ([4be9f79](https://github.com/scaleway/scaleway-sdk-js/commit/4be9f79b945e76f85206a76da2808188a123effe))
- **tem:** add new task transfer online domain to scw ([#1015](https://github.com/scaleway/scaleway-sdk-js/issues/1015)) ([e73e2a8](https://github.com/scaleway/scaleway-sdk-js/commit/e73e2a8c6fd8df1f850b0ab1b547bdbdd221ca49))

### Bug Fixes

- **mnq:** remove end of life v1alpha1 ([#1014](https://github.com/scaleway/scaleway-sdk-js/issues/1014)) ([1dd4b4c](https://github.com/scaleway/scaleway-sdk-js/commit/1dd4b4cc39f47f88ac82ac294cdeb3d7a76079ad))

## [2.3.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.2.0...@scaleway/sdk@2.3.0) (2023-11-20)

### Features

- **block:** add volume last_detached_at ([#1000](https://github.com/scaleway/scaleway-sdk-js/issues/1000)) ([46619fb](https://github.com/scaleway/scaleway-sdk-js/commit/46619fbedaade6777b2500ca3b507abe543906be))
- **instance:** add endpoints to attach/detach server volumes ([#1001](https://github.com/scaleway/scaleway-sdk-js/issues/1001)) ([bf3982a](https://github.com/scaleway/scaleway-sdk-js/commit/bf3982a0f03fc22c948686761a193f9c97de6d51))
- **secret_manager:** deprecate byname api endpoints ([#999](https://github.com/scaleway/scaleway-sdk-js/issues/999)) ([6a15029](https://github.com/scaleway/scaleway-sdk-js/commit/6a150297c95c83b692deac8d78ad15b902dfe2d3))

### Bug Fixes

- update redis documentation ([#998](https://github.com/scaleway/scaleway-sdk-js/issues/998)) ([68fcedb](https://github.com/scaleway/scaleway-sdk-js/commit/68fcedb353e4ef4034a3642ebc6fe5b635366dd9))

## [2.2.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.1.0...@scaleway/sdk@2.2.0) (2023-11-13)

### Features

- **cockpit:** add default notion for datasources ([#988](https://github.com/scaleway/scaleway-sdk-js/issues/988)) ([b6360b0](https://github.com/scaleway/scaleway-sdk-js/commit/b6360b069d44bc778177664a9e84ccde77277df5))
- **cockpit:** add is_product filter to list datasource ([#992](https://github.com/scaleway/scaleway-sdk-js/issues/992)) ([9c86af7](https://github.com/scaleway/scaleway-sdk-js/commit/9c86af7e2f813cdee56444548e49e465bee944d5))
- **ipfs:** add documentation about replacePin ([#993](https://github.com/scaleway/scaleway-sdk-js/issues/993)) ([306a0d2](https://github.com/scaleway/scaleway-sdk-js/commit/306a0d2a4ded006c3ce36244a34e3a6393e84154))
- **webhosting:** add control panel support in webhosting ([#995](https://github.com/scaleway/scaleway-sdk-js/issues/995)) ([cef3269](https://github.com/scaleway/scaleway-sdk-js/commit/cef32694813980d25e4c677b0a6a87f00f13a96e))

## [2.1.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@2.0.0...@scaleway/sdk@2.1.0) (2023-11-08)

### Features

- **domain:** deprecate owner_contact_info in updateDomain ([#979](https://github.com/scaleway/scaleway-sdk-js/issues/979)) ([d87caa7](https://github.com/scaleway/scaleway-sdk-js/commit/d87caa76337694e3f8162e2cc092e22ecf17672a))

## [2.0.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.42.0...@scaleway/sdk@2.0.0) (2023-11-07)

### Features

- use new generator ([#977](https://github.com/scaleway/scaleway-sdk-js/issues/977)) ([ea3d9ee](https://github.com/scaleway/scaleway-sdk-js/commit/ea3d9ee6dfdd7bb152cb3f0ffc4ce97bc4ed8ec5))

## [1.42.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.41.0...@scaleway/sdk@1.42.0) (2023-11-06)

### Features

- **secret_manager:** add edge_services product ([#976](https://github.com/scaleway/scaleway-sdk-js/issues/976)) ([1220dc0](https://github.com/scaleway/scaleway-sdk-js/commit/1220dc09432ac94cea5b5e254e6f699547bb44d6))
- **serverless_jobs:** generate SDKs ([#974](https://github.com/scaleway/scaleway-sdk-js/issues/974)) ([97e1175](https://github.com/scaleway/scaleway-sdk-js/commit/97e1175551f8291cf1636f0b671fc723ae1a20b0))

## [1.41.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.40.0...@scaleway/sdk@1.41.0) (2023-11-02)

### Features

- **secret_manager:** add region to folders ([#973](https://github.com/scaleway/scaleway-sdk-js/issues/973)) ([f9958e8](https://github.com/scaleway/scaleway-sdk-js/commit/f9958e8f854af1fbf32fbfbd428273b16bd64cdd))

## [1.40.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.39.0...@scaleway/sdk@1.40.0) (2023-10-30)

### Features

- **secret_manager:** add ephemeral action to secret creation ([#963](https://github.com/scaleway/scaleway-sdk-js/issues/963)) ([1a3a067](https://github.com/scaleway/scaleway-sdk-js/commit/1a3a067afc973e716c92e94e16e8c0723cc6e214))
- **secret_manager:** add missing regions ([#964](https://github.com/scaleway/scaleway-sdk-js/issues/964)) ([647ca0f](https://github.com/scaleway/scaleway-sdk-js/commit/647ca0f5e40e39dda997f9237c9292e90879f8e6))
- **secret_manager:** remove useless is_ephemeral field ([#965](https://github.com/scaleway/scaleway-sdk-js/issues/965)) ([45253c3](https://github.com/scaleway/scaleway-sdk-js/commit/45253c3d91c822e4beb13ad53bdc098eae6099b3))

## [1.39.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.38.1...@scaleway/sdk@1.39.0) (2023-10-26)

### Features

- **billing:** discount application scope endpoint ([#953](https://github.com/scaleway/scaleway-sdk-js/issues/953)) ([5300fc3](https://github.com/scaleway/scaleway-sdk-js/commit/5300fc3585bb065fd996c5d2f86886b33e70d4a4))
- **cockpit:** add traces infos to plan ([#954](https://github.com/scaleway/scaleway-sdk-js/issues/954)) ([c74c0c4](https://github.com/scaleway/scaleway-sdk-js/commit/c74c0c41b52aaf9f3d5274fcb3dc2e783c4679e2))
- **iam:** add methods for public logs ([#957](https://github.com/scaleway/scaleway-sdk-js/issues/957)) ([84a7095](https://github.com/scaleway/scaleway-sdk-js/commit/84a7095a503498cfab04d8114e5e595f5125dcbe))
- **instance:** expose IP state in server.public_ips ([#956](https://github.com/scaleway/scaleway-sdk-js/issues/956)) ([3ad21cb](https://github.com/scaleway/scaleway-sdk-js/commit/3ad21cb822b589a438e2f488306df9a1af7fd144))
- **ipfs:** remove useless fields in ipfs api ([#959](https://github.com/scaleway/scaleway-sdk-js/issues/959)) ([7f57b6a](https://github.com/scaleway/scaleway-sdk-js/commit/7f57b6ae3a09cfbf80c5234b980677c899ecda25))
- **rdb:** add seemless major upgrade ([#958](https://github.com/scaleway/scaleway-sdk-js/issues/958)) ([2b19def](https://github.com/scaleway/scaleway-sdk-js/commit/2b19def877bc2cf2c2d4cc1df40c243da92c117b))
- **vpc_gw:** support passing IPAM IP IDs ([#952](https://github.com/scaleway/scaleway-sdk-js/issues/952)) ([529c0d3](https://github.com/scaleway/scaleway-sdk-js/commit/529c0d38a9bc4450db3249a810a967dc9bbea63f))

## [1.38.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.38.0...@scaleway/sdk@1.38.1) (2023-10-23)

**Note:** Version bump only for package @scaleway/sdk

## [1.38.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.37.0...@scaleway/sdk@1.38.0) (2023-10-23)

### Features

- **cockpit:** add traces endpoint ([#941](https://github.com/scaleway/scaleway-sdk-js/issues/941)) ([cbc69a3](https://github.com/scaleway/scaleway-sdk-js/commit/cbc69a382b8e7e37b656203630801732aaf5ced8))
- **ipam:** add v1 API ([#938](https://github.com/scaleway/scaleway-sdk-js/issues/938)) ([915f755](https://github.com/scaleway/scaleway-sdk-js/commit/915f7556babb617a31939dfe875258fb8783433d))
- **secret_manager:** add json type with subtype ([#939](https://github.com/scaleway/scaleway-sdk-js/issues/939)) ([f68b0ac](https://github.com/scaleway/scaleway-sdk-js/commit/f68b0acee995b88de0ee21018739a2a797a4d143))
- **serverless:** validate trigger queries ([#940](https://github.com/scaleway/scaleway-sdk-js/issues/940)) ([aa54478](https://github.com/scaleway/scaleway-sdk-js/commit/aa544782572b2d7d127be93812cf742e9163e449))
- **tem:** add domain reputation score ([#946](https://github.com/scaleway/scaleway-sdk-js/issues/946)) ([1823af4](https://github.com/scaleway/scaleway-sdk-js/commit/1823af404814703349d5d859a451080b188c37a5))
- **vpc_gw:** add field to help clients known which pwg is legacy xor ipam ([#936](https://github.com/scaleway/scaleway-sdk-js/issues/936)) ([a8334bc](https://github.com/scaleway/scaleway-sdk-js/commit/a8334bce5b7bb7111a6d43a729c0ee6822cf4be8))

## [1.37.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.36.0...@scaleway/sdk@1.37.0) (2023-10-16)

### Features

- **ipfs:** add IPNS API ([#932](https://github.com/scaleway/scaleway-sdk-js/issues/932)) ([c919d46](https://github.com/scaleway/scaleway-sdk-js/commit/c919d46713d8c7e8af499bfc30dcf594cc88a58a))
- **mnq:** allow long credentials name for serverless functions triggers compatibility ([#930](https://github.com/scaleway/scaleway-sdk-js/issues/930)) ([b1e9d0c](https://github.com/scaleway/scaleway-sdk-js/commit/b1e9d0c5e8b039af0e01998315b0c07e3922f1e2))
- **serverless:** add mnq_nats_account_id in trigger responses ([#931](https://github.com/scaleway/scaleway-sdk-js/issues/931)) ([58501e2](https://github.com/scaleway/scaleway-sdk-js/commit/58501e217f253f3375416c2749e17c4235d3913e))

## [1.36.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.35.0...@scaleway/sdk@1.36.0) (2023-10-13)

### Features

- **block:** add snapshot import ([#922](https://github.com/scaleway/scaleway-sdk-js/issues/922)) ([3d74e31](https://github.com/scaleway/scaleway-sdk-js/commit/3d74e31aeaf87f1089413d16297396bcb8962b9e))
- **cockpit:** list and get Grafana dashboards ([#916](https://github.com/scaleway/scaleway-sdk-js/issues/916)) ([3f695fa](https://github.com/scaleway/scaleway-sdk-js/commit/3f695fac15a4c27f7b5774104b8d08068d3303f5))
- **instance:** add tags in Server.public_ips ([#919](https://github.com/scaleway/scaleway-sdk-js/issues/919)) ([fa230c6](https://github.com/scaleway/scaleway-sdk-js/commit/fa230c65fd186496067bb9ef26414e97fbca2377))
- **instance:** modify UpdateServer public_ips and private_nics to match real implem ([#921](https://github.com/scaleway/scaleway-sdk-js/issues/921)) ([0f09608](https://github.com/scaleway/scaleway-sdk-js/commit/0f09608356edcde266a4324fbcc89ab673e399fe))
- **instance:** sync endpoints about the feature OS image in SBS volume ([#920](https://github.com/scaleway/scaleway-sdk-js/issues/920)) ([d9ba798](https://github.com/scaleway/scaleway-sdk-js/commit/d9ba79876e637f0a7637a85f8aac4490db7a8d38))
- **mnq:** add v1beta1 ([#917](https://github.com/scaleway/scaleway-sdk-js/issues/917)) ([9d6c414](https://github.com/scaleway/scaleway-sdk-js/commit/9d6c4145f3a5bc5f36bf9868022922d8ac8fd2ba))
- **rdb:** expose SBS IOPS ([#918](https://github.com/scaleway/scaleway-sdk-js/issues/918)) ([91e1187](https://github.com/scaleway/scaleway-sdk-js/commit/91e1187494b8864d1d3b9e178635e1f7580392e9))

## [1.35.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.34.0...@scaleway/sdk@1.35.0) (2023-10-09)

### Features

- **cockpit:** add list datasource endpoint ([#906](https://github.com/scaleway/scaleway-sdk-js/issues/906)) ([8677e4a](https://github.com/scaleway/scaleway-sdk-js/commit/8677e4a8828eee2e3a9311c0b6395d0f37b06450))
- **k8s:** expose `public_ip_disabled` field ([#907](https://github.com/scaleway/scaleway-sdk-js/issues/907)) ([58d4945](https://github.com/scaleway/scaleway-sdk-js/commit/58d4945faa568fa063e41d551b281f56ff143189))
- **serverless:** prepare for MNQ API ([#908](https://github.com/scaleway/scaleway-sdk-js/issues/908)) ([ce611bf](https://github.com/scaleway/scaleway-sdk-js/commit/ce611bf8f868f933658b92b8b18c9d97d083398e))

## [1.34.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.33.0...@scaleway/sdk@1.34.0) (2023-10-04)

### Features

- **instance:** add servers filter in ListServersRequest ([#903](https://github.com/scaleway/scaleway-sdk-js/issues/903)) ([a96eb9f](https://github.com/scaleway/scaleway-sdk-js/commit/a96eb9f9626dd3dd0f7c70858bc8adf172bcf7e7))
- **lb:** add pl-waw-3 az ([#902](https://github.com/scaleway/scaleway-sdk-js/issues/902)) ([997aa1d](https://github.com/scaleway/scaleway-sdk-js/commit/997aa1da10e777e99c725f21fab37ece13730c27))

## [1.33.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.32.1...@scaleway/sdk@1.33.0) (2023-10-02)

### Features

- **document-db:** set all docs and SDK public ([#890](https://github.com/scaleway/scaleway-sdk-js/issues/890)) ([58f9413](https://github.com/scaleway/scaleway-sdk-js/commit/58f9413634cc7e543cd8da483833806cb96f1fa0))
- **dom:** add endpoint to list Tlds Offers ([#895](https://github.com/scaleway/scaleway-sdk-js/issues/895)) ([22a5981](https://github.com/scaleway/scaleway-sdk-js/commit/22a59817f83a29a8e64fad31a2bd5a68b430e07a))
- **sbs:** switch sbs to Private Beta ([#893](https://github.com/scaleway/scaleway-sdk-js/issues/893)) ([0c50515](https://github.com/scaleway/scaleway-sdk-js/commit/0c50515bd6a87b097f4bcdd73dcc99d45aff37d7))

## [1.32.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.32.0...@scaleway/sdk@1.32.1) (2023-09-26)

### Bug Fixes

- resolveOneOf should work with false value ([#889](https://github.com/scaleway/scaleway-sdk-js/issues/889)) ([b84bf30](https://github.com/scaleway/scaleway-sdk-js/commit/b84bf3086b3c3d27bc9a4e07c497aac19486d64b))

## [1.32.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.31.0...@scaleway/sdk@1.32.0) (2023-09-25)

### Features

- add missing special secret version revision ([#882](https://github.com/scaleway/scaleway-sdk-js/issues/882)) ([2042c38](https://github.com/scaleway/scaleway-sdk-js/commit/2042c383e23dcd4b0a14d7a52fa0c6f944f13585))
- **cockpit:** create datasource ([#875](https://github.com/scaleway/scaleway-sdk-js/issues/875)) ([ab1e2a7](https://github.com/scaleway/scaleway-sdk-js/commit/ab1e2a75cf387b047c58712287c971c559d1a13f))
- **instance:** add base_volume_id filter on ListSnapshotsRequest ([#874](https://github.com/scaleway/scaleway-sdk-js/issues/874)) ([7b96fae](https://github.com/scaleway/scaleway-sdk-js/commit/7b96faea308ebe21f21e7acb3cefb5466249aa9d))
- **ipfs:** remove name resource ([#883](https://github.com/scaleway/scaleway-sdk-js/issues/883)) ([086e2a6](https://github.com/scaleway/scaleway-sdk-js/commit/086e2a63c6d497519d2e795d35dc364b11aad3d1))
- **k8s:** add filter on PrivateNetworkID ([#880](https://github.com/scaleway/scaleway-sdk-js/issues/880)) ([01b010a](https://github.com/scaleway/scaleway-sdk-js/commit/01b010acc38adda04168ac3d54462f57c227f8a3))
- **lb:** release private lb feature ([#879](https://github.com/scaleway/scaleway-sdk-js/issues/879)) ([76a1c30](https://github.com/scaleway/scaleway-sdk-js/commit/76a1c306be7195efe8c8cbe5d1f0e6aa3a485b7b))
- **rdb:** add sbs volume type ([#881](https://github.com/scaleway/scaleway-sdk-js/issues/881)) ([38af291](https://github.com/scaleway/scaleway-sdk-js/commit/38af2918f076cb5799aa68f4a3a0cdb59b066f7b))

## [1.31.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.30.0...@scaleway/sdk@1.31.0) (2023-09-18)

### Features

- **cockpit:** add traces permission to token ([#854](https://github.com/scaleway/scaleway-sdk-js/issues/854)) ([f71cea6](https://github.com/scaleway/scaleway-sdk-js/commit/f71cea629b1625df1999298582f116b487e2eca6))
- **instance:** add field private_nic_mac_address for ListServersRequest ([#858](https://github.com/scaleway/scaleway-sdk-js/issues/858)) ([322717c](https://github.com/scaleway/scaleway-sdk-js/commit/322717c9310265fd57d6d0df8edbedfa2707bc71))
- **instance:** add new sbs_volume and scratch volumes types ([#857](https://github.com/scaleway/scaleway-sdk-js/issues/857)) ([e4e2f29](https://github.com/scaleway/scaleway-sdk-js/commit/e4e2f29c4bafa8dbb43ddcde8efd9eca0bfa0b97))
- **instance:** added field type for ListIpsRequest ([#870](https://github.com/scaleway/scaleway-sdk-js/issues/870)) ([efaf8c6](https://github.com/scaleway/scaleway-sdk-js/commit/efaf8c688c9fe3d13e8c0262cb7815c971076fc2))
- **webhosting:** add addon domains limit to Product ([#868](https://github.com/scaleway/scaleway-sdk-js/issues/868)) ([f2c6d4a](https://github.com/scaleway/scaleway-sdk-js/commit/f2c6d4a4a5225e07a12edb2aa460f4cb29c68f98))

## [1.30.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.29.0...@scaleway/sdk@1.30.0) (2023-09-12)

### Features

- **instance:** add RPC for volume/snapshot migration to SBS ([#853](https://github.com/scaleway/scaleway-sdk-js/issues/853)) ([b822287](https://github.com/scaleway/scaleway-sdk-js/commit/b822287c07b3ccb11793fc1d67ee4cdecd121b3f))
- **ipfs:** add cli command for ipfs naming ([#852](https://github.com/scaleway/scaleway-sdk-js/issues/852)) ([4612c3a](https://github.com/scaleway/scaleway-sdk-js/commit/4612c3ac7fc4ded359a85c63ff6f51c5d4667ef5))

## [1.29.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.28.0...@scaleway/sdk@1.29.0) (2023-09-11)

### Features

- **dom:** add more filters on ListDNSZones to ease VPC sync ([#850](https://github.com/scaleway/scaleway-sdk-js/issues/850)) ([c7526ee](https://github.com/scaleway/scaleway-sdk-js/commit/c7526eeecaeaefbe9a23938eb81b5c06274c6c23))
- **tem:** update email flag ([#849](https://github.com/scaleway/scaleway-sdk-js/issues/849)) ([e395e5e](https://github.com/scaleway/scaleway-sdk-js/commit/e395e5e5a304723273b826618af0b23238134fb1))

## [1.28.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.27.0...@scaleway/sdk@1.28.0) (2023-09-08)

### Features

- **ipfs:** add export and import key ([#847](https://github.com/scaleway/scaleway-sdk-js/issues/847)) ([2bdd5fa](https://github.com/scaleway/scaleway-sdk-js/commit/2bdd5fa8e20cbe08dc7d2557b4814b322c2d0fdc))
- **pgw:** ipam config for native vpc integration ([#846](https://github.com/scaleway/scaleway-sdk-js/issues/846)) ([0a4eb3b](https://github.com/scaleway/scaleway-sdk-js/commit/0a4eb3bbd56bb9b060ee69bfe0f53d5bc16122a2))

## [1.27.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.26.0...@scaleway/sdk@1.27.0) (2023-09-04)

### Features

- add missing openapi spec for secret folders API ([#844](https://github.com/scaleway/scaleway-sdk-js/issues/844)) ([f24ce9b](https://github.com/scaleway/scaleway-sdk-js/commit/f24ce9bffc3d101e600e91ab6ef101a189fbad53))
- **baremetal:** add nl-ams-2 ([#840](https://github.com/scaleway/scaleway-sdk-js/issues/840)) ([92c9e54](https://github.com/scaleway/scaleway-sdk-js/commit/92c9e54953262fe141f5be035d134f91c4441135))
- **instance:** add missing 'enable_routed_ip' action ([#842](https://github.com/scaleway/scaleway-sdk-js/issues/842)) ([98a18b0](https://github.com/scaleway/scaleway-sdk-js/commit/98a18b0671d0670d53d269a0740ad7774b02995b))
- **instance:** add scratch storage ([#837](https://github.com/scaleway/scaleway-sdk-js/issues/837)) ([96a7bbd](https://github.com/scaleway/scaleway-sdk-js/commit/96a7bbd77c52f85dbb23884d1486c3a7d381967b))
- **instance:** add scratch storage max size in ListServersTypes ([#836](https://github.com/scaleway/scaleway-sdk-js/issues/836)) ([486233c](https://github.com/scaleway/scaleway-sdk-js/commit/486233c9adb55acda233e66f117478a45dc4495a))
- **ipfs:** add cid field in update name method ([#841](https://github.com/scaleway/scaleway-sdk-js/issues/841)) ([19446bd](https://github.com/scaleway/scaleway-sdk-js/commit/19446bd32085208e28db4d3853b8d74650c70189))
- **ipfs:** add ip name services ([#838](https://github.com/scaleway/scaleway-sdk-js/issues/838)) ([45847e3](https://github.com/scaleway/scaleway-sdk-js/commit/45847e349c838f90a4e0606ec3d608fa8a25caaa))

## [1.26.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.25.0...@scaleway/sdk@1.26.0) (2023-08-28)

### Features

- **domain:** add a new task type for moving project ([#828](https://github.com/scaleway/scaleway-sdk-js/issues/828)) ([4f93083](https://github.com/scaleway/scaleway-sdk-js/commit/4f930838826a2d574e3f127f020eb429b6fbcdb9))
- **function:** add go1.21 support ([#832](https://github.com/scaleway/scaleway-sdk-js/issues/832)) ([51b8592](https://github.com/scaleway/scaleway-sdk-js/commit/51b85927905306678100e9e42dc76c10ce9dc3f4))

## [1.25.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.24.0...@scaleway/sdk@1.25.0) (2023-08-14)

### Features

- **instance:** add arm64 in architecture enum ([#797](https://github.com/scaleway/scaleway-sdk-js/issues/797)) ([effdfef](https://github.com/scaleway/scaleway-sdk-js/commit/effdfefd3f10f3bd82979185145be682df36c098))
- **secret-manager:** add secret path ([#798](https://github.com/scaleway/scaleway-sdk-js/issues/798)) ([7db7c5b](https://github.com/scaleway/scaleway-sdk-js/commit/7db7c5bc0fa7d55f6aeef528d7b04f6a0c2ab89e))

## [1.24.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.23.0...@scaleway/sdk@1.24.0) (2023-08-07)

### Features

- **tem:** add flag mailbox_full ([#789](https://github.com/scaleway/scaleway-sdk-js/issues/789)) ([80d65a6](https://github.com/scaleway/scaleway-sdk-js/commit/80d65a69026dda3407e051a5ca1897d6f342ecf2))

### Bug Fixes

- **lb:** make private network's ip_id nullable ([#790](https://github.com/scaleway/scaleway-sdk-js/issues/790)) ([1c6808b](https://github.com/scaleway/scaleway-sdk-js/commit/1c6808b5782ed0718951deed765f16dc695f3158))

## [1.23.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.22.0...@scaleway/sdk@1.23.0) (2023-08-03)

### Features

- **domain:** add filter to endpoint listContacts ([#788](https://github.com/scaleway/scaleway-sdk-js/issues/788)) ([78b4d64](https://github.com/scaleway/scaleway-sdk-js/commit/78b4d649977c226550d0887c469be7a1871299e2))
- **instance:** add support for pl-waw-3 ([#785](https://github.com/scaleway/scaleway-sdk-js/issues/785)) ([2a41c43](https://github.com/scaleway/scaleway-sdk-js/commit/2a41c43d933f9024750b92131d04688a2d8ee188))
- **lb:** support dhcp/ipam private network ([#786](https://github.com/scaleway/scaleway-sdk-js/issues/786)) ([0b056b5](https://github.com/scaleway/scaleway-sdk-js/commit/0b056b5d088e0cb016b2b93e563d5a5a9b2ded42))

## [1.22.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.21.0...@scaleway/sdk@1.22.0) (2023-08-01)

### Features

- **iam/v1alpha1:** add method to create a user ([#775](https://github.com/scaleway/scaleway-sdk-js/issues/775)) ([4f4db14](https://github.com/scaleway/scaleway-sdk-js/commit/4f4db1449b9948b7706ea5d57c8370b8e027045c))
- **instance:** added field private_networks for ListServersRequest ([#779](https://github.com/scaleway/scaleway-sdk-js/issues/779)) ([5e7ff1b](https://github.com/scaleway/scaleway-sdk-js/commit/5e7ff1be91530fa64be9de4dbfd30456157f987c))
- **tem:** add spam flag ([#781](https://github.com/scaleway/scaleway-sdk-js/issues/781)) ([f96f2bf](https://github.com/scaleway/scaleway-sdk-js/commit/f96f2bfe482be7f73a6e1b2ee25ef9446a9f03e5))

### Bug Fixes

- **sm:** rename certificate type to be more generic ([#776](https://github.com/scaleway/scaleway-sdk-js/issues/776)) ([29ffba8](https://github.com/scaleway/scaleway-sdk-js/commit/29ffba8f115e45efe08cbbb97c4dd2574881152c))

## [1.21.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.20.0...@scaleway/sdk@1.21.0) (2023-07-24)

### Features

- **account/v2:** deprecate in favor of upcoming v3 ([#767](https://github.com/scaleway/scaleway-sdk-js/issues/767)) ([1b5c2ee](https://github.com/scaleway/scaleway-sdk-js/commit/1b5c2ee33a33f399826f6649ca0bc5d79581fd5d))
- **account:** add v3 and the ProjectAPI ([#769](https://github.com/scaleway/scaleway-sdk-js/issues/769)) ([bdf3d69](https://github.com/scaleway/scaleway-sdk-js/commit/bdf3d69b877df5c3a6084099d2457de37ebed76b))
- **k8s:** return more information on cluster types ([#773](https://github.com/scaleway/scaleway-sdk-js/issues/773)) ([fc96ca3](https://github.com/scaleway/scaleway-sdk-js/commit/fc96ca3289d2154efd54fd82abd9538ce3780e0e))
- **rdb:** promote read replica ([#774](https://github.com/scaleway/scaleway-sdk-js/issues/774)) ([1c1d832](https://github.com/scaleway/scaleway-sdk-js/commit/1c1d83262214672c171c119d4bb995c1b40db801))
- **tem:** add flags field on email getting methods ([#771](https://github.com/scaleway/scaleway-sdk-js/issues/771)) ([ce00ce9](https://github.com/scaleway/scaleway-sdk-js/commit/ce00ce9d34d75e14ca887fc8d39452ecf59cf581))

## [1.20.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.19.0...@scaleway/sdk@1.20.0) (2023-07-11)

### Features

- update generated APIs ([#764](https://github.com/scaleway/scaleway-sdk-js/issues/764)) ([d34ff71](https://github.com/scaleway/scaleway-sdk-js/commit/d34ff716752aff7dca37d8f8a31af10ba0a8c33f))

## [1.19.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.18.0...@scaleway/sdk@1.19.0) (2023-07-06)

### Features

- **instance:** add commercialType to UpdateServerRequest ([#761](https://github.com/scaleway/scaleway-sdk-js/issues/761)) ([04380f4](https://github.com/scaleway/scaleway-sdk-js/commit/04380f4a2df429ff9da01e94bb3953f923a5567c))
- **k8s:** add resiliency and sla to cluster types ([#759](https://github.com/scaleway/scaleway-sdk-js/issues/759)) ([bcfee00](https://github.com/scaleway/scaleway-sdk-js/commit/bcfee00ab524193a19e41c5d5c92189ff4f3a5a9))
- **rdb:** add instanceRange to NodeType ([#760](https://github.com/scaleway/scaleway-sdk-js/issues/760)) ([abdb97d](https://github.com/scaleway/scaleway-sdk-js/commit/abdb97d85631dfcd500c34c033d67f7d3dfc8437))
- **vpc/v2:** drop defaultPrivateNetworkName ([#753](https://github.com/scaleway/scaleway-sdk-js/issues/753)) ([133daa5](https://github.com/scaleway/scaleway-sdk-js/commit/133daa526182d31c24feaa323d1b1dc26cd8990c))

## [1.18.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.17.0...@scaleway/sdk@1.18.0) (2023-07-03)

### Features

- add secret protection ([#748](https://github.com/scaleway/scaleway-sdk-js/issues/748)) ([5bee9e2](https://github.com/scaleway/scaleway-sdk-js/commit/5bee9e2d432909d5d43181090f3c2c6e0efe7552))
- **k8s:** add cluster types compatibility ([#749](https://github.com/scaleway/scaleway-sdk-js/issues/749)) ([3680415](https://github.com/scaleway/scaleway-sdk-js/commit/36804151db92a86ab83e304ca49c92e897bd894a))
- **k8s:** add commitment to offer list ([#746](https://github.com/scaleway/scaleway-sdk-js/issues/746)) ([089e1c8](https://github.com/scaleway/scaleway-sdk-js/commit/089e1c8a2cb2a26b4996a1fdd510a11c7509e5af))
- **k8s:** return commitment end date ([#747](https://github.com/scaleway/scaleway-sdk-js/issues/747)) ([7ee2e85](https://github.com/scaleway/scaleway-sdk-js/commit/7ee2e856ab6bac105c5f427cebc66e562abb1acb))
- **k8s:** return maximum number of nodes supported by an offer ([#745](https://github.com/scaleway/scaleway-sdk-js/issues/745)) ([b67d4d9](https://github.com/scaleway/scaleway-sdk-js/commit/b67d4d97afad92e04789bdda8398ab28ed7a4428))

## [1.17.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.16.0...@scaleway/sdk@1.17.0) (2023-06-28)

### Features

- **containers:** add trigger CRUD ([#737](https://github.com/scaleway/scaleway-sdk-js/issues/737)) ([6102ac5](https://github.com/scaleway/scaleway-sdk-js/commit/6102ac56f81dba3bac13b5ae5669e77be0d5b2db))
- **instance:** add ipIds to CreatePrivateNIC request ([#744](https://github.com/scaleway/scaleway-sdk-js/issues/744)) ([b9558a0](https://github.com/scaleway/scaleway-sdk-js/commit/b9558a0ef4bdfc2ce271186bf5be9b0b740409c6))
- **lb:** add support for nl-ams-3 ([#742](https://github.com/scaleway/scaleway-sdk-js/issues/742)) ([822b30e](https://github.com/scaleway/scaleway-sdk-js/commit/822b30e143c09112c05a5ddc75dfd69cba03a27d))
- **marketplace:** add type field to LocalImage ([#743](https://github.com/scaleway/scaleway-sdk-js/issues/743)) ([e1bb6ce](https://github.com/scaleway/scaleway-sdk-js/commit/e1bb6cee549b965efc78f54514b9e7f584d2079b))
- **rdb:** add possibility to update BackupSchedule next update ([#739](https://github.com/scaleway/scaleway-sdk-js/issues/739)) ([f95713b](https://github.com/scaleway/scaleway-sdk-js/commit/f95713b2d2695d2e79abaf071c6192cba8869291))
- **secret:** add secret types in create secret request ([#738](https://github.com/scaleway/scaleway-sdk-js/issues/738)) ([ff391f1](https://github.com/scaleway/scaleway-sdk-js/commit/ff391f19c2cc4788a71adb8b6deaae24fb52601f))
- **vpc_gw:** add support for nl-ams-3 ([#736](https://github.com/scaleway/scaleway-sdk-js/issues/736)) ([542b877](https://github.com/scaleway/scaleway-sdk-js/commit/542b8778ee4eeb95669e4298c31b66d9553152db))
- **vpc:** enable dhcp on private network ([#741](https://github.com/scaleway/scaleway-sdk-js/issues/741)) ([2e604ff](https://github.com/scaleway/scaleway-sdk-js/commit/2e604ff69188c1e305ef145a36f7503274209530))

### Bug Fixes

- **ipfs:** use enum for status details ([#735](https://github.com/scaleway/scaleway-sdk-js/issues/735)) ([8f36b69](https://github.com/scaleway/scaleway-sdk-js/commit/8f36b698b8b4b22ff25a2625a965e5bf63d06244))

## [1.16.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.15.0...@scaleway/sdk@1.16.0) (2023-06-19)

### Features

- **instance:** add support for nl-ams-3 ([#721](https://github.com/scaleway/scaleway-sdk-js/issues/721)) ([fc8c093](https://github.com/scaleway/scaleway-sdk-js/commit/fc8c0935fb46cbb8c183f1c62b923be5f541cc86))
- **instance:** use the new 'IP Mobility' network stack ([#709](https://github.com/scaleway/scaleway-sdk-js/issues/709)) ([91d5d6f](https://github.com/scaleway/scaleway-sdk-js/commit/91d5d6f2cf78093df534aed1fb48f892f4e273cf))
- **redis:** expose if ipam to Redis PN endpoint ([#722](https://github.com/scaleway/scaleway-sdk-js/issues/722)) ([bdca967](https://github.com/scaleway/scaleway-sdk-js/commit/bdca9675b7c7825d5fc76cfc517638a01ce706ce))
- **secret:** add endpoint to list tags ([#708](https://github.com/scaleway/scaleway-sdk-js/issues/708)) ([a28d914](https://github.com/scaleway/scaleway-sdk-js/commit/a28d9142e40717f5b285b9f85361862dc28bb990))
- **vpc:** add support for nl-ams-3 ([#726](https://github.com/scaleway/scaleway-sdk-js/issues/726)) ([713f26a](https://github.com/scaleway/scaleway-sdk-js/commit/713f26a4440d3f64df0bc39c51f9a3985a5db352))
- **webhosting:** add a migrating status ([#725](https://github.com/scaleway/scaleway-sdk-js/issues/725)) ([53cbe2d](https://github.com/scaleway/scaleway-sdk-js/commit/53cbe2d1364d7b8fb6a68cec89c640f088566eb3))

## [1.15.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.14.0...@scaleway/sdk@1.15.0) (2023-06-13)

### Features

- **instance:** add totalCount field to GetServerTypesAvailabilityResponse ([#704](https://github.com/scaleway/scaleway-sdk-js/issues/704)) ([787c7c6](https://github.com/scaleway/scaleway-sdk-js/commit/787c7c6b86070cb382c950c88b07c61f5f01380a))
- **ipfs:** add v1alpha1 ([#681](https://github.com/scaleway/scaleway-sdk-js/issues/681)) ([3ec9346](https://github.com/scaleway/scaleway-sdk-js/commit/3ec9346da792c1517747fd77ac01d736d1b1bef7))
- **ipfs:** update meta field ([#688](https://github.com/scaleway/scaleway-sdk-js/issues/688)) ([3975a9f](https://github.com/scaleway/scaleway-sdk-js/commit/3975a9f0c40dfcb8a9048fe145e375260dbf8ec8))
- **k8s:** list cluster types ([#700](https://github.com/scaleway/scaleway-sdk-js/issues/700)) ([f3cf9c5](https://github.com/scaleway/scaleway-sdk-js/commit/f3cf9c585efe1f6cc3b61992e138e2738772fb55))
- **lb:** add flexible ip auto assign flag ([#689](https://github.com/scaleway/scaleway-sdk-js/issues/689)) ([d49a63e](https://github.com/scaleway/scaleway-sdk-js/commit/d49a63efb5fa9aed64a50e789f1c0ea840e56f01))
- **lb:** allow multi ip attach ([#695](https://github.com/scaleway/scaleway-sdk-js/issues/695)) ([246516e](https://github.com/scaleway/scaleway-sdk-js/commit/246516e8a85edd61e01e90f5a3dc1ba9eab0cddc))
- **tem:** rename `checkDomainLastStatus` to `getDomainLastStatus` ([#707](https://github.com/scaleway/scaleway-sdk-js/issues/707)) ([2a945c2](https://github.com/scaleway/scaleway-sdk-js/commit/2a945c220a24d0351a5bba8bfda0b71191ed6057))
- update generated APIs ([#702](https://github.com/scaleway/scaleway-sdk-js/issues/702)) ([999d052](https://github.com/scaleway/scaleway-sdk-js/commit/999d0528b3506c0804520ccca4825db907d97a0f))
- **vpc/v2:** allow setting PN name on VPC creation ([#693](https://github.com/scaleway/scaleway-sdk-js/issues/693)) ([dfab7da](https://github.com/scaleway/scaleway-sdk-js/commit/dfab7daba00532db0212e4461d6fd10fea846ad4))

### Bug Fixes

- **ipfs:** replace usage meta by info ([#694](https://github.com/scaleway/scaleway-sdk-js/issues/694)) ([8043817](https://github.com/scaleway/scaleway-sdk-js/commit/80438179d9c94ac8abff9c6be62601b55edac7c0))
- **ipfs:** replace usage meta by info ([#706](https://github.com/scaleway/scaleway-sdk-js/issues/706)) ([887e717](https://github.com/scaleway/scaleway-sdk-js/commit/887e71710354ac44c3d9adc11d2e0b8be9048576))

## [1.14.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.13.0...@scaleway/sdk@1.14.0) (2023-06-05)

### Features

- **registry:** deprecate `force` field in DeleteTagRequest ([#685](https://github.com/scaleway/scaleway-sdk-js/issues/685)) ([fb4c058](https://github.com/scaleway/scaleway-sdk-js/commit/fb4c05855061e01ff7dea76c477aef293d27ce54))
- **secret:** upgrade product field to an enum ([#680](https://github.com/scaleway/scaleway-sdk-js/issues/680)) ([e939329](https://github.com/scaleway/scaleway-sdk-js/commit/e9393297a38197c44b1768299e2dc8b04f8cffe8))
- **tem:** list emails by searching to all fields ([#686](https://github.com/scaleway/scaleway-sdk-js/issues/686)) ([1905974](https://github.com/scaleway/scaleway-sdk-js/commit/1905974714acf07ea3e9521c756ac8d1006aebd8))
- **vpc:** add `privateNetworkCount` field to VPC ([#683](https://github.com/scaleway/scaleway-sdk-js/issues/683)) ([648507d](https://github.com/scaleway/scaleway-sdk-js/commit/648507d27d4e92a775cccc289abee082cea5cc44))

## [1.13.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.12.0...@scaleway/sdk@1.13.0) (2023-05-29)

### Features

- **k8s:** add migrateToPrivateNetworkCluster endpoint ([#674](https://github.com/scaleway/scaleway-sdk-js/issues/674)) ([968fc9b](https://github.com/scaleway/scaleway-sdk-js/commit/968fc9b1e0ce6385dac1cbd5cc8d193ce0a86b79))
- **lb:** add backendId to getLbStats request ([#677](https://github.com/scaleway/scaleway-sdk-js/issues/677)) ([588e907](https://github.com/scaleway/scaleway-sdk-js/commit/588e90716011aa9bb4e2f66a9d1d5ba5f6325416))
- **rdb:** add sameZone for cross-zones ReadReplica ([#673](https://github.com/scaleway/scaleway-sdk-js/issues/673)) ([1035a22](https://github.com/scaleway/scaleway-sdk-js/commit/1035a224be036acf17b90beb31fae4eaf3d8a625))
- **secret:** add back `passwordGeneration` field ([#676](https://github.com/scaleway/scaleway-sdk-js/issues/676)) ([de11a07](https://github.com/scaleway/scaleway-sdk-js/commit/de11a07a1808ec37248348c9fc1ddfe9b50fdaf3))
- **secret:** add endpoint to generate password ([#669](https://github.com/scaleway/scaleway-sdk-js/issues/669)) ([08a9ed3](https://github.com/scaleway/scaleway-sdk-js/commit/08a9ed3c99c404413999aa17d54a0bcea487e198))
- **secret:** add projectId field in requests ([#672](https://github.com/scaleway/scaleway-sdk-js/issues/672)) ([cf3d5ff](https://github.com/scaleway/scaleway-sdk-js/commit/cf3d5ff28b359b49cd7b7750683dc022f5a2aeb5))
- **vpc:** add v2 ([#668](https://github.com/scaleway/scaleway-sdk-js/issues/668)) ([f035cd6](https://github.com/scaleway/scaleway-sdk-js/commit/f035cd62e9efa36c6853d0a5acb5c800e62e9e3d))

## [1.12.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.11.0...@scaleway/sdk@1.12.0) (2023-05-19)

### Features

- **iam:** add group members ([#665](https://github.com/scaleway/scaleway-sdk-js/issues/665)) ([d01aba0](https://github.com/scaleway/scaleway-sdk-js/commit/d01aba0e3947896c56b62dd73be413fb35adab61))
- **tem:** improve listEmails endpoint ([#666](https://github.com/scaleway/scaleway-sdk-js/issues/666)) ([72bfef4](https://github.com/scaleway/scaleway-sdk-js/commit/72bfef4e93fbc94cc77d1e8923bc9fdeaf1c1965))

### Bug Fixes

- **k8s:** change field name for Kosmos rpc message ([#664](https://github.com/scaleway/scaleway-sdk-js/issues/664)) ([b056d3c](https://github.com/scaleway/scaleway-sdk-js/commit/b056d3c34a5c0629fae46b6996a923ee8e6a0422))

## [1.11.0](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.10.1...@scaleway/sdk@1.11.0) (2023-05-15)

### Features

- **lb:** add maxConnections and timeoutQueue fields ([#652](https://github.com/scaleway/scaleway-sdk-js/issues/652)) ([2b7a29a](https://github.com/scaleway/scaleway-sdk-js/commit/2b7a29a2b38a2e523cd7cdf18de28dc6bc801e12))

## [1.10.1](https://github.com/scaleway/scaleway-sdk-js/compare/@scaleway/sdk@1.10.0...@scaleway/sdk@1.10.1) (2023-05-11)

### Bug Fixes

- unmarshal the value returned by the responseError interceptor ([#650](https://github.com/scaleway/scaleway-sdk-js/issues/650)) ([a71bed1](https://github.com/scaleway/scaleway-sdk-js/commit/a71bed14b07d8784258d45a8b0a60cfcd754688e))

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
