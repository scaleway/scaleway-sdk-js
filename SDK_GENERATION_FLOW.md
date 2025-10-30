# 🏗️ Flux de génération du SDK JavaScript Scaleway

Ce document explique comment un package SDK JavaScript est généré depuis les définitions Protobuf jusqu'à la publication sur NPM.

## 🔄 Flux complet de génération

```mermaid
flowchart TD
    A[📝 Protobuf<br/>gitlab.infra.online.net/protobuf/protobuf] --> B[🔄 Trigger<br/>MR ou Tag sur protobuf]

    B --> C[📦 pipelines<br/>Scripts d'orchestration]
    C --> D[🏭 protoc-gen<br/>Générateurs]
    D --> E[⚙️ buf generate<br/>TypeScript]
    E --> F[📁 _generated/scaleway-sdk-ts<br/>Code TS brut]
    F --> G[🧹 Formatting pipeline<br/>ESLint + Biome]

    %% Split vers repos publics et unlisted
    G --> H[📦 Repo public<br/>scaleway-sdk-js]
    G --> H2[📦 Repo unlisted<br/>scaleway-sdk-js-unlisted]

    %% Public
    H --> I[🔧 Post-gen (public)<br/>generatePackages + generateAlias]
    I --> J[📦 Packages NPM @scaleway/sdk-*]
    J --> K[🚀 Publication (public)<br/>GitHub Actions + Lerna
    Biome only (ignore **/*.gen.ts)]

    %% Unlisted
    H2 --> I2[🔧 Post-gen (unlisted)<br/>(similaire, selon besoin)]
    I2 --> J2[📦 Packages unlisted]
    J2 --> K2[🚀 Publication (unlisted)<br/>GitLab CI + registry interne<br/>ESLint + Biome sur générés (pas d'exclusion)]
```

## 🏛️ Architecture des SDK

### 1. **scaleway-sdk-js** — Architecture détaillée (public)
- **Rôle** : Monorepo public qui expose le SDK publié sur npm
- **Racine** (extraits utiles) :
  - `packages/` (code maintenu à la main)
    - `client/` → client HTTP, middlewares, retries, auth pluggable
    - `configuration-loader/` → chargement de config (env, fichiers)
    - `sdk/` → façade principale qui ré-exporte les services générés
  - `packages_generated/` (code généré)
    - `<service>/` (ex: `webhosting/`, `product_catalog/`, ...)
      - `src/`
        - `vX/` → fichiers générés (`api.gen.ts`, `types.gen.ts`, `marshalling.gen.ts`, `index.gen.ts`)
        - `index.gen.ts` → exports des versions du service
      - `package.json` (généré via templates)
      - `tsconfig.json`, `tsconfig.build.json`, `vite.config.ts` (générés)
  - `scripts/`
    - `generatePackages.ts` → génère package.json/tsconfig/vite + `src/index.gen.ts`
    - `generateAlias.ts` → génère `packages/sdk/src/index.gen.ts` (agrégateur global)
    - `templates/` → templates `package.tmpl`, `tsconfig*.json`, `vite.config.ts`
  - `eslint.config.mjs`, `biome.json` → formatage final (Biome only), exclusion `**/*.gen.ts`
  - `.github/workflows/` → build/publish (PR merge → publish from-package)
- **Flux interne** :
  1) Le pipeline amont pousse du code généré propre dans `packages_generated/`
  2) `generatePackages.ts` crée la coquille NPM par service + exports versions (package.json, tsconfig.json, vite.config.ts)
  3) `generateAlias.ts` écrit l’agrégateur global dans `packages/sdk/` et reexporte tout les packets
  4) Build: `vite` + `tsc` → `dist` par package
  5) Release: `lerna version` (PR) puis `lerna publish from-package` (après merge)

### 2. **scaleway-sdk-js-unlisted** — Architecture détaillée (unlisted)
- **Rôle** : Monorepo “unlisted” pour diffusion interne (ou non indexée npm)
- **Racine** (extraits utiles) :
  - `packages/` (sdk admin et unlisted)
  - `packages_generated/` (code généré, même structure que public)
  - `scripts/` (meme que public)
  - `eslint.config.mjs` + `biome.json` → ESLint + Biome appliqués aux générés (pas d’exclusion)
  - `.gitlab-ci.yml` → CI GitLab (build/publish vers registre interne)
- **Différences clés vs public** :
  - CI: GitLab CI (et non GitHub Actions)
  - Publication: registry interne `https://npm-registry.infra.online.net` (login via npm-cli-login) géré par la CI GitLab
  - Lint/format: ESLint (via `pnpm turbo lint`) + Prettier (via `make format`). Biome n’est pas utilisé dans le Makefile/CI unlisted, tandis que le public utilise Biome (et exclut `**/*.gen.ts`).


## 🔧 Processus détaillé

### Étape 1 : Déclenchement
Cas typiques (selon rules CI dans `pipelines/.gitlab-ci.yml`) :
- Tag sur `protobuf` → déclenche la génération complète (jobs qui appellent `update-all-protobuf.sh` sur le tag/branche)
- Merge Request (MR) sur `protobuf` → déclenche une génération partielle/preview (jobs qui appellent `update-partial-protobuf.sh`)

Exemple (tag) :
```bash
git tag v1.42.0
git push origin v1.42.0
```

### Étape 2 : Orchestration (pipelines)
Selon l’évènement, le pipeline appelle l’un de ces scripts :
- Full regen (tag) → `update-all-protobuf.sh` (branch/tag)
- Partial regen (MR) → `update-partial-protobuf.sh` (tag diff)

Exemples :
```bash
# Full regen (sur tag)
./scripts/global/update-all-protobuf.sh \
  --tool sdk-js \
  --branch v1.42.0 \
  --commit-title "feat: generate SDK"

# Partial regen (sur MR)
./scripts/global/update-partial-protobuf.sh \
  --tool sdk-js \
  --tag v1.42.0
```

### Étape 3 : Génération (protoc-gen)
```bash
# Configuration buf.gen.yaml
plugins:
  - local: protoc-gen-sdk-ts
    out: ./_generated/scaleway-sdk-ts
    opt:
      - yaml_root=protobuf
      - visibility=public
      - api_out=packages_generated

# Génération
buf generate --timeout 10m
```

### Étape 4 : Formatage
```bash
# Formatage TypeScript généré
cd internal/protoc-gen-sdk-ts/formatting
./run.sh -i ../../../_generated/scaleway-sdk-ts/packages_generated

# Processus :
# 1. pnpm install
# 2. ENTRY_POINT="$INPUT_DIR" pnpm tsx ./generate.ts
# 3. pnpm eslint --fix "$INPUT_DIR/**/*.ts"
# 4. pnpm biome check --write "$INPUT_DIR"
```

#### **🔧 Scripts de formatage dans protoc-gen**

**📍 Localisation :** `/usr/tools/sdk-ts-formatting` (dans protoc-gen)

**🎯 Rôle :** Formatage et post-génération des fichiers TypeScript générés par `buf generate`

**📁 Scripts disponibles :**

1. **`run.sh`** - Script principal d'orchestration
   - **Paramètres :**
     - `-i INPUT_DIR` : Dossier contenant les fichiers à formater
     - `-f FLAG` : Type de formatage (`new-package` ou par défaut)
     - `-v VERBOSE` : Mode verbeux
   - **Processus :**
     ```bash
     # 1. Installation des dépendances
     pnpm install
     
     # 2. Post-génération selon le flag
     if [ "$FLAG" == "new-package" ]; then
         ENTRY_POINT="$INPUT_DIR" pnpm tsx ./generatePackages.ts
     else
         ENTRY_POINT="$INPUT_DIR" pnpm tsx ./generate.ts (need to clean)
     fi
     
     # 3. Formatage ESLint
     pnpm eslint --no-eslintrc --config ./.eslintrc --quiet --fix "$INPUT_DIR/**/*.ts" (need to clarify)
     
     # 4. Formatage Biome
     pnpm biome check --linter-enabled=false --write "$INPUT_DIR"
     ```

**⚙️ Configuration :**

- **ESLint** (`.eslintrc`) : Configuration spécifique avec règles d'import et formatage
- **Biome** (`biome.json`) : Problematique !! Configuration différente du repo `scaleway-sdk-js` 
  - formate les `*.gen.ts`


2. **`protoc-gen/formatting/generatePackages.ts` (pipeline)** — Post‑génération côté pipeline
   - **Objectif**: génere/modifie les index.gen.ts pour réexporter les services, dans le service et a la racine du service (src/v*/index.gen.ts(re-exporte les artefacts) et src/index.gen.ts reexporte les versions )
   - **Où**: `internal/protoc-gen-sdk-ts/formatting/generatePackages.ts` (exécuté dans le container protoc‑gen).
   - **Entrées**: `packages_generated/<service>/src/vX/{api.gen.ts, types.gen.ts, marshalling.gen.ts}`.
   - **Sorties principales**:
     - `src/vX/index.gen.ts` (par version):
       ```ts
       export * from './api.gen'
       export * from './types.gen'
       // (éventuellement marshalling.gen si destiné à l’export)
       ```
     - `src/index.gen.ts` (racine du service):
       - rassemble toutes les versions détectées; en mode “new‑package”, produit des exports nominaux cohérents (pré‑SDK), p.ex.:
         ```ts
         export * as v1 from './v1/index.gen'
         export * as v2alpha1 from './v2alpha1/index.gen'
         ```
 



### Étape 5 : Post-génération (scaleway-sdk-js)
```bash
# Scripts de post-génération
pnpm run generatePackages  # Génère package.json, tsconfig, etc.
pnpm run generateAlias     # Génère index.gen.ts avec exports
pnpm format               # Formatage final (maintenant exclut *.gen.ts)
```
Note: en CI (public), cette étape est déclenchée automatiquement via le script `prebuild` (voir `package.json`), juste avant `pnpm turbo build`.

#### **🔧 Scripts de post-génération détaillés**

##### **A. `generatePackages.ts` - Configuration des packages**

**🎯 Rôle :** Génère les fichiers de configuration nécessaires pour chaque package généré.

**📍 Où :** `scripts/generatePackages.ts`

**⚙️ Comment :** Utilise des templates pour générer automatiquement les fichiers de configuration.

**📁 Fichiers générés :**

1. **`package.json`** (template : `scripts/templates/package.tmpl`)
   - Nom du package : `@scaleway/sdk-{service-name}`
   - Configuration des exports (ESM + CommonJS)
   - Dépendances : `@scaleway/sdk-std`, `@scaleway/random-name`
   - Peer dependencies : `@scaleway/sdk-client`
   - Scripts de build : `vite build` + `tsc --declaration`

2. **`tsconfig.json`** (template : `scripts/templates/tsconfig.json`)
   - Étend la configuration TypeScript du projet parent
   - Inclut tous les fichiers `.ts` et `.tsx` du dossier `src/`

3. **`tsconfig.build.json`** (template : `scripts/templates/tsconfig.build.json`)
   - Configuration spécifique pour la génération des types
   - Utilisé par le script `type:generate`

4. **`vite.config.ts`** (template : `scripts/templates/vite.config.ts`)
   - Configuration Vite pour le build du package
   - Point d'entrée : `src/index.gen.ts`
   - Merge avec la configuration par défaut du projet

5. **`src/index.gen.ts`** (généré dynamiquement)
   - Exports de toutes les versions du service
   - Format : `export * as {ServiceName}{Version} from './{version}/index.gen'`
   - Exemple : `export * as ProductCatalogV2alpha1 from './v2alpha1/index.gen'`


##### **B. `generateAlias.ts` - Exports unifiés du SDK principal**

**🎯 Rôle :** Génère le fichier `packages/sdk/src/index.gen.ts` qui exporte tous les services de manière unifiée.

**📍 Où :** `scripts/generateAlias.ts`

**📁 Fichier généré :** `packages/sdk/src/index.gen.ts`

**⚙️ Comment :** Scanne tous les services dans `packages_generated/` et génère les exports.

**📋 Structure générée :**

```typescript
/**
 * This file is automatically generated
 * PLEASE DO NOT EDIT HERE
 */

// Imports de tous les services
import { ProductCatalogV2alpha1 } from '@scaleway/sdk-product-catalog'
import { WebhostingV1 } from '@scaleway/sdk-webhosting'
// ... autres services

// Exports directs (dépréciés)
export { ProductCatalogV2alpha1, WebhostingV1, ... }

// Exports par namespace (recommandés)
export const ProductCatalog = {
  v2alpha1: ProductCatalogV2alpha1,
}
export const Webhosting = {
  v1: WebhostingV1,
}
// ... autres services
```

**🎯 Avantages :**
- **API unifiée** : Un seul point d'entrée pour tous les services
- **Versioning clair** : Chaque service a son namespace avec ses versions
- **Rétrocompatibilité** : Exports directs maintenus (avec warning de dépréciation)
- **Type safety** : TypeScript complet avec autocomplétion

**⚠️ IMPORTANT : La post-génération est lancée à 2 endroits différents :**

#### **A. Dans le pipeline GitLab (pipelines repo)**
- **Quand** : Après `buf generate` dans le script `update-all-protobuf.sh`
- **Où** : Ligne 674-684 du script
- **Ce qui se passe** :
  ```bash
  # Typescript: clean generated
  if [ "$TOOL" == "sdk-js" ] || [ "$TOOL" == "sdk-js-unlisted" ]; then
    RUN_DIR=$(pwd)
    cd "/usr/tools/sdk-ts-formatting"
    
    for GENERATED_PATH in "${GENERATED_PATHS[@]}"; do
      ./run.sh -i "${RUN_DIR}/${GENERATED_PATH}" -f "${FLAG_FORMATTING}"
    done
    
    cd "${RUN_DIR}"
    # generated by formatting script
    git add "**/index.gen.ts"
  fi
  ```
- **Résultat** : Génère les fichiers `index.gen.ts` et formate le code
- **Formatage** : ESLint + Biome (avec config spécifique)

#### **B. Dans le workflow GitHub Actions (scaleway-sdk-js repo)**
- **Quand** : Lors du build automatique (cron ou manuel)
- **Où** : Script `prebuild` dans `package.json`
- **Ce qui se passe** :
  ```bash
  "prebuild": "pnpm run generatePackages && pnpm run generateAlias && pnpm format"
  ```
- **Résultat** : Régénère les fichiers de configuration et exports
- **Formatage** : Biome seulement (config du repo scaleway-sdk-js)

### **⚠️ Différence de formatage entre les 2 endroits :**

#### **Pipeline GitLab (protoc-gen) :**
```bash
# 1. ESLint avec config spécifique
pnpm eslint --no-eslintrc --config ./.eslintrc --quiet --fix "$INPUT_DIR/**/*.ts"

# 2. Biome avec config spécifique  
pnpm biome check --linter-enabled=false --write "$INPUT_DIR"
```

#### **GitHub Actions (scaleway-sdk-js) :**
```bash
# Biome seulement avec config du repo
pnpm format  # = "biome check --linter-enabled=false --write ."
```

### Exemples concrets (entrées → sorties)

- Après `buf generate` (sortie brute):
  - `packages_generated/product_catalog/src/v2alpha1/api.gen.ts`
  - `packages_generated/product_catalog/src/v2alpha1/types.gen.ts`
  - `packages_generated/product_catalog/src/v2alpha1/marshalling.gen.ts`

- Après formatting (pipeline):
  - Génère/écrit `packages_generated/product_catalog/src/index.gen.ts` avec:
    - new-package: `export * as ProductCatalogV2alpha1 from './v2alpha1/index.gen'`
  - Trie/organise les imports, supprime les imports inutilisés, applique ESLint+Biome.

- Après post‑génération (repo public):
  - `packages_generated/product_catalog/package.json` (depuis `scripts/templates/package.tmpl`)
  - `packages_generated/product_catalog/tsconfig.json`, `tsconfig.build.json`, `vite.config.ts`
  - `packages_generated/product_catalog/src/index.gen.ts` (exports versions avec noms)
  - `packages/sdk/src/index.gen.ts` (agrégateur global via `scripts/generateAlias.ts`)

## 🗺️ Schéma “Qui génère quoi” et enchaînement des étapes

```mermaid
flowchart TD
  A[📝 Protobuf<br/>gitlab.infra.online.net/protobuf/protobuf]
  B[🔄 Pipelines repo<br/>update-*protobuf.sh]
  C[🏭 protoc-gen<br/>protoc-gen-sdk-ts]
  D[⚙️ buf generate
     → packages_generated (brut)]
  E[🧹 Formatting (pipeline)
     /usr/tools/sdk-ts-formatting/run.sh\n- generate.ts / generatePackages.ts\n- ESLint (config dédiée)\n- Biome (sans exclure *.gen.ts)]
  F[⬆️ Push vers repo public
     scaleway-sdk-js]
  G[🔧 Post-génération (repo public)
     - scripts/generatePackages.ts\n     - scripts/generateAlias.ts\n     - Biome (exclut **/*.gen.ts)]
  H[🏗️ Build & 📦 Publish
     vite + tsc • lerna • npm]

  A --> B --> C --> D --> E --> F --> G --> H
```


3. Formatting (pipeline)
   - Script: `/usr/tools/sdk-ts-formatting/run.sh -i <packages_generated> -f <flag>`
   - Flag: `new-package` (utilise `generatePackages.ts`) ou legacy (`generate.ts`)
   - Outils: `pnpm eslint --no-eslintrc --config ./.eslintrc --fix`, puis `pnpm biome check --linter-enabled=false --write`
   - Note: pas d'exclusion de `**/*.gen.ts`

4. Push vers `scaleway-sdk-js`
   - Contenu: code généré propre + `src/index.gen.ts` (niveau service)

5. Post‑génération (repo public)
   - `pnpm run generatePackages`: ajoute `package.json`, `tsconfig*`, `vite.config.ts`, et (ré)écrit `src/index.gen.ts`
   - `pnpm run generateAlias`: écrit `packages/sdk/src/index.gen.ts` (namespace par service: `ProductCatalog.v2alpha1`, …)
   - `pnpm format`: Biome (exclut `**/*.gen.ts`)

6. Build & Publish
   - `vite build` + `tsc --declaration` par package
   - `lerna version` + `pnpm -r publish`

## ❓ FAQ

- Pourquoi ne pas tout formater dans `scaleway-sdk-js` ?
  - Pour éviter de re‑toucher les générés à chaque run, garder des PRs propres et accélérer la CI. Le formatage déterministe est fait en amont.

- Pourquoi des règles ESLint/Biome différentes ?
  - Le pipeline vise le déterminisme sur les générés; le repo public vise la DX et exclut les générés pour limiter le bruit.

- Qui crée `packages_generated/<service>/src/index.gen.ts` ?
  - Pipeline (formatting) le crée d’abord (legacy/new‑package). Puis le script `scripts/generatePackages.ts` peut le réécrire selon les conventions du repo.

- Qui crée `packages/sdk/src/index.gen.ts` ?
  - Uniquement le script `scripts/generateAlias.ts` dans `scaleway-sdk-js`.

- Peut‑on unifier les scripts ?
  - Mieux: partager une librairie de primitives (découverte services/versions, helpers noms, templates) et garder deux entrées minces adaptées à chaque environnement (pipeline vs repo public).

---

## Guide (pas-à-pas) : Ajouter un nouveau produit — Public vs Unlisted

Ce guide pas‑à‑pas couvre l’ajout d’un produit côté public et côté unlisted (privé). Les commandes sont identiques jusqu’à la création des packages; seules l’intégration et la publication diffèrent.

### 📋 Vue d'ensemble

Quand un nouveau produit est ajouté via les fichiers protobuf, plusieurs étapes sont nécessaires pour l'intégrer complètement dans l'écosystème SDK :

1. Génération automatique : Les fichiers `.gen.ts` sont créés automatiquement
2. Configuration du package : Créer les fichiers de configuration pour le nouveau package
3. Déclaration dans les SDKs principaux : Ajouter le nouveau produit aux SDKs globaux
4. Mise à jour des dépendances : Synchroniser les lockfiles

---

### 🔄 Étape 1 : Génération des fichiers protobuf (commun)

Commande
```bash
buf generate --timeout 0
```

Pourquoi ?
- Génère les fichiers TypeScript depuis les définitions protobuf
- Crée automatiquement `packages_generated/[product_name]/src/` avec les fichiers `.gen.ts`
- Base nécessaire pour toutes les étapes suivantes

Résultat attendu
```
packages_generated/partition_internal/
├── src/
│   ├── v1beta1/
│   │   ├── api.gen.ts
│   │   ├── marshalling.gen.ts
│   │   └── index.gen.ts
│   └── index.gen.ts
```

---

### 🔧 Étape 2 : Génération des fichiers de configuration (commun)

Commande
```bash
pnpm run generateIndex
# ou directement
pnpm dlx tsx ./scripts/generatePackages.ts
```

Pourquoi ?
- Crée automatiquement `package.json` pour le nouveau produit
- Génère les fichiers de build : `tsconfig.json`, `vite.config.ts`, `tsconfig.build.json`
- Configure l'export structure dans `src/index.gen.ts`
- Standardise la configuration selon les conventions du workspace

Fichiers créés
```
packages_generated/partition_internal/
├── package.json          # ← Configuration npm du package
├── tsconfig.json         # ← Configuration TypeScript
├── tsconfig.build.json   # ← Configuration TypeScript pour le build
├── vite.config.ts        # ← Configuration Vite pour le bundling
└── src/index.gen.ts      # ← Exports principaux du package
```

Contenu type du `package.json` généré
```json
{
  "name": "@scaleway-internal/sdk-partition-internal",
  "version": "1.0.0",
  "description": "Scaleway SDK partition-internal",
  "dependencies": {
    "@scaleway-internal/sdk-std": "workspace:*",
    "@scaleway/random-name": "5.1.2"
  },
  "peerDependencies": {
    "@scaleway/sdk-client": "*"
  },
  "devDependencies": {
    "@scaleway/sdk-client": "*"
  }
}
```

---

### 📦 Étape 3 : Intégration dans le SDK principal (public)

Fichier à modifier
`packages/sdk/package.json`

Modification
```json
{
  "dependencies": {
    // ... autres dépendances
    "@scaleway-internal/sdk-partition-internal": "workspace:*",
    // ... autres dépendances
  }
}
```

Pourquoi ?
- Permet l'import du nouveau produit dans le SDK principal
- Résout les dépendances au moment du build
- Rend le produit accessible via `import { ... } from '@scaleway-internal/sdk'`

Fichier à modifier
`packages/sdk/src/index.gen.ts`

Modification
```typescript
// ... autres exports
export * from '@scaleway-internal/sdk-partition-internal'
// ... autres exports
```

Pourquoi ?
- Expose publiquement le nouveau produit
- Permet l'utilisation : `import { PartitionInternalV1beta1 } from '@scaleway-internal/sdk'`
- Maintient la cohérence de l'API publique

---

### 🔐 Étape 4 : Intégration dans le SDK Admin (unlisted)

Fichier à modifier
`packages/sdk-admin/package.json`

Modification
```json
{
  "dependencies": {
    // ... autres dépendances
    "@scaleway-internal/sdk-partition-internal": "workspace:*",
    // ... autres dépendances
  }
}
```

Pourquoi ?
- SDK Admin inclut TOUS les produits (publics + privés + admin)
- Résout les erreurs TypeScript lors du build
- Permet l'accès complet depuis `@scaleway-internal/sdk-admin`

Fichier à modifier
`packages/sdk-admin/src/index.gen.ts`

Modification
```typescript
// ... autres exports
export * from '@scaleway-internal/sdk-partition-internal'
// ... autres exports
```

Pourquoi ?
- Expose le produit dans le SDK Admin
- Permet l'utilisation : `import { PartitionInternalV1beta1 } from '@scaleway-internal/sdk-admin'`
- Maintient la parité entre SDK principal et Admin

---

### 🔄 Étape 5 : Mise à jour des dépendances (commun)

Commande
```bash
pnpm install
```

Pourquoi ?
- Met à jour `pnpm-lock.yaml` avec les nouvelles dépendances
- Résout les dépendances workspace (`workspace:*`)
- Synchronise l'environnement pour éviter les erreurs CI/CD
- Prépare l'environnement pour le build

---

### 🧹 Étape 6 : Vérification et nettoyage (commun)

Vérification des versions avec manypkg
```bash
pnpm exec manypkg check
```

Si des erreurs apparaissent :
```bash
pnpm exec manypkg fix
```

Pourquoi ?
- Vérifie la cohérence des versions entre packages
- Corrige automatiquement les incohérences (ex: `*` vs `^1.3.1`)
- Évite les erreurs de build liées aux versions

---

### 🚀 Étape 7 : Build et validation (commun)

Test du build
```bash
pnpm run build
```

Pourquoi ?
- Valide que tout compile correctement
- Détecte les erreurs avant le déploiement
- Génère les types TypeScript (.d.ts)

---

### 📝 Étape 8 : Commit et déploiement

Cas Public (repo GitHub `scaleway-sdk-js`):
```bash
# versionnez les packages dans une PR (bump versions package.json), mergez
# la publication est automatique via GitHub Actions (release-on-pr-merge)
```

Cas Unlisted (repo GitLab `scaleway-sdk-js-unlisted`):
```bash
# publication via pipeline planifiée (JOB=release-to-nexus) ou manuelle
# reprend les étapes de .gitlab-ci.yml (.base_deploy)
```

Structure de commit recommandée
```bash
git add packages_generated/partition_internal/
git add packages/sdk/package.json packages/sdk/src/index.gen.ts
git add packages/sdk-admin/package.json packages/sdk-admin/src/index.gen.ts
git add pnpm-lock.yaml

git commit -m "feat: add partition-internal product support

- Add generated files for partition-internal product
- Configure package.json and build files
- Add to main SDK and SDK Admin exports
- Update dependencies and lockfile"
```

---

### 🔍 Points d'attention et dépannage

Erreurs communes

1. `Cannot find module '@scaleway-internal/sdk-[product]'`
   - Cause : Dépendance manquante dans `package.json`
   - Solution : Ajouter la dépendance dans le SDK concerné

2. `pnpm-lock.yaml is not up to date`
   - Cause : Lockfile non synchronisé
   - Solution : `pnpm install` puis commit du lockfile

3. `manypkg` errors sur les versions
   - Cause : Versions incohérentes entre packages
   - Solution : `pnpm exec manypkg fix`

4. Build qui échoue sur un package spécifique
   - Cause : Configuration de build manquante
   - Solution : Vérifier que `generateIndex` a bien créé tous les fichiers

Vérifications finales

- [ ] Le nouveau package build sans erreur
- [ ] Le SDK principal exporte le nouveau produit
- [ ] Le SDK Admin exporte le nouveau produit  
- [ ] `pnpm-lock.yaml` est à jour
- [ ] `manypkg check` passe sans erreur
- [ ] Les tests CI/CD passent

---

### 🎯 Résumé de la logique

1. Protobuf → Code : `buf generate` crée les fichiers TypeScript
2. Code → Package : `generateIndex` configure le package npm
3. Package → SDK : Ajout manuel aux SDKs pour l'exposition publique
4. SDK → Dépendances : `pnpm install` synchronise tout
5. Validation : `manypkg` et build vérifient la cohérence

Cette approche garantit que chaque nouveau produit est correctement intégré dans l'écosystème SDK avec une configuration standardisée et des dépendances cohérentes.

## 📁 Structure des fichiers générés

### Dans `packages_generated/`
```
packages_generated/
├── account/
│   ├── src/
│   │   ├── v3/
│   │   │   ├── api.gen.ts      # Classes API
│   │   │   ├── types.gen.ts    # Types TypeScript
│   │   │   ├── marshalling.gen.ts # Sérialisation
│   │   │   └── index.gen.ts    # Exports
│   │   └── index.gen.ts        # Exports par version
│   ├── package.json            # Généré automatiquement
│   ├── tsconfig.json           # Généré automatiquement
│   └── vite.config.ts          # Généré automatiquement
└── ...
```

### Qui génère quoi et quand

- api.gen.ts (Step: Génération — Étape 3)
  - Généré par: plugin `protoc-gen-sdk-ts` (repo `protoc-gen`) via `buf generate`
  - Où: `packages_generated/<service>/src/vX/api.gen.ts`

- types.gen.ts (Step: Génération — Étape 3)
  - Généré par: plugin `protoc-gen-sdk-ts` via `buf generate`
  - Où: `packages_generated/<service>/src/vX/types.gen.ts`

- marshalling.gen.ts (Step: Génération — Étape 3)
  - Généré par: plugin `protoc-gen-sdk-ts` via `buf generate`
  - Où: `packages_generated/<service>/src/vX/marshalling.gen.ts`

- content.gen.ts / validation-rules.gen.ts (si présents) (Step: Génération — Étape 3)
  - Généré par: plugin `protoc-gen-sdk-ts` via `buf generate`
  - Où: `packages_generated/<service>/src/vX/*.gen.ts`

- index.gen.ts (dans un dossier de version `vX`) (Step: Génération — Étape 3)
  - Généré par: plugin `protoc-gen-sdk-ts` via `buf generate`
  - Où: `packages_generated/<service>/src/vX/index.gen.ts`

- index.gen.ts (à la racine de `src/`) (Step: Post-génération — Étape 5)
  - Généré par: script `scripts/generatePackages.ts` (repo `scaleway-sdk-js`), fonction `exportProductVersions()`
  - Où: `packages_generated/<service>/src/index.gen.ts`
  - Contenu: Exports de toutes les versions du service (ex: `export * as ProductCatalogV2alpha1 from './v2alpha1/index.gen'`)

- package.json (Step: Post-génération — Étape 5)
  - Généré par: script `scripts/generatePackages.ts` avec template `scripts/templates/package.tmpl`
  - Où: `packages_generated/<service>/package.json`
  - Contenu: Configuration NPM avec nom `@scaleway/sdk-{service}`, exports ESM/CommonJS, dépendances

- tsconfig.json / tsconfig.build.json (Step: Post-génération — Étape 5)
  - Générés par: script `scripts/generatePackages.ts` avec templates
  - Où: `packages_generated/<service>/tsconfig.json` et `tsconfig.build.json`
  - Contenu: Configuration TypeScript étendant le projet parent

- vite.config.ts (Step: Post-génération — Étape 5)
  - Généré par: script `scripts/generatePackages.ts` avec template `scripts/templates/vite.config.ts`
  - Où: `packages_generated/<service>/vite.config.ts`
  - Contenu: Configuration Vite pour build avec point d'entrée `src/index.gen.ts`

- packages/sdk/src/index.gen.ts (Step: Post-génération — Étape 5)
  - Généré par: script `scripts/generateAlias.ts` (aggrège tous les services/versions)
  - Où: `packages/sdk/src/index.gen.ts`
  - Contenu: Exports unifiés de tous les services avec namespaces (ex: `export const ProductCatalog = { v2alpha1: ProductCatalogV2alpha1 }`)

- dist/** (bundles .js/.cjs/.d.ts) (Step: Build — Étape 6)
  - Généré par: `vite build` + `tsc --declaration` dans chaque package
  - Où: `packages_generated/<service>/dist/**` et `packages/sdk/dist/**`

### Dans `packages/sdk/src/`
```
packages/sdk/src/
└── index.gen.ts  # Exports unifiés de tous les services
```

## 🎯 Types de génération

### 1. **Génération complète** (`update-all-protobuf.sh`)
- **Déclencheur** : Tag sur protobuf
- **Action** : Régénère tous les packages
- **Résultat** : Mise à jour majeure
- **Post-génération** : Dans le pipeline GitLab (ligne 674-684)

### 2. **Génération partielle** (`update-partial-protobuf.sh`)
- **Déclencheur** : MR sur protobuf
- **Action** : Régénère seulement les services modifiés
- **Résultat** : Mise à jour ciblée
- **Post-génération** : Dans le pipeline GitLab

### 3. **Preview** (`preview-protobuf.sh`)
- **Déclencheur** : MR sur protobuf
- **Action** : Génère un preview des changements
- **Résultat** : PR de preview pour validation
- **Post-génération** : Dans le pipeline GitLab

### 4. **Build automatique** (GitHub Actions)
- **Déclencheur** : Cron (lundi 12h) ou manuel
- **Action** : Build et publication des packages
- **Post-génération** : Dans le workflow GitHub Actions (script `prebuild`)

## 🔧 Configuration des générateurs

### protoc-gen-sdk-ts
```go
// Plugin principal TypeScript
type PluginConfiguration struct {
    protocgencore.DefaultPluginConfiguration
}

func (p *PluginConfiguration) GetPluginType() (protocgencore.PluginType, string) {
    return protocgencore.PluginTypeSDK, "js"
}
```

### Options de génération
```yaml
# buf.gen.yaml
opt:
  - yaml_root=protobuf           # Racine des fichiers YAML
  - visibility=public            # Visibilité des APIs
  - api_out=packages_generated   # Dossier de sortie
  - import_source=internal       # Source des imports
  - dev=1                        # Mode développement
```

## 🚀 Workflow de publication

### Déploiement NPM: Public vs Unlisted

#### A. Public (`scaleway-sdk-js`, GitHub Actions)

- Emplacement workflow: `.github/workflows/release-on-pr-merge.yml`
- Déclencheur: Merge d'une PR sur `main`
- Étapes clés:
  - `pnpm install` puis `pnpm run build`
  - Publication via Lerna depuis les versions existantes dans `package.json`:
    ```bash
    pnpm lerna publish from-package -y --no-private --dist-tag latest
    ```
  - Authentification NPM: `NODE_AUTH_TOKEN` / `NPM_TOKEN` secrets GitHub
- Dist-tag par défaut: `latest`

Checklist rapide (local):
```bash
pnpm run build
# s'assurer que les package.json ont été versionnés (via PR dédiée)
# merger la PR → GitHub Action publie automatiquement
```

#### B. Unlisted (privé), repo: `scaleway-sdk-js-unlisted` (GitLab CI)

- Emplacement CI: `.gitlab-ci.yml`
- Déclencheur: pipeline « scheduled » avec `JOB=release-to-nexus`
- Registre NPM: `https://$NPM_REGISTRY` (interne)
- Étapes clés (job `.base_deploy`):
  - Login NPM via `npm-cli-login`:
    ```bash
    npx npm-cli-login -u $NPM_REGISTRY_USER -p $NPM_REGISTRY_PASSWD -e $GIT_USER_EMAIL -r $NPM_PUBLISH_REGISTRY
    ```
  - Build monorepo puis publication via Lerna:
    ```bash
    pnpm run build
    pnpm lerna changed
    pnpm exec lerna publish -y --registry $NPM_PUBLISH_REGISTRY --create-release gitlab --ignore-scripts
    ```

Checklist rapide (local):
```bash
# Dans scaleway-sdk-js-unlisted
pnpm run build
# Publication est gérée par la pipeline planifiée (schedule)
# pour un push manuel, reproduire le login NPM interne + lerna publish
```

#### Différences clés Public vs Unlisted
- **Hébergement**: GitHub Actions (public) vs GitLab CI (interne)
- **Registre**: `registry.npmjs.org` (public) vs `npm-registry.infra.online.net` (interne)
- **Auth**: GitHub `NPM_TOKEN` OIDC vs GitLab variables/secrets + `npm-cli-login`
- **Déclencheur**: merge PR (public) vs scheduled/manual (unlisted)
- **Commandes**: `lerna publish from-package` (public) vs `lerna publish` (unlisted) avec `--registry` interne

## 🎛️ Commandes utiles

### Développement local
```bash
# Générer localement
cd protoc-gen
make generate
make clean-sdk-ts

# Tester
cd scaleway-sdk-js
pnpm run prebuild
pnpm run build
```

### Scripts de post-génération
```bash
# Générer les configurations des packages
pnpm run generatePackages
# ou avec un dossier spécifique
npx tsx scripts/generatePackages.ts --src="packages_generated"

# Générer les exports unifiés du SDK principal
pnpm run generateAlias
# ou directement
npx tsx scripts/generateAlias.ts

# Vérifier les templates utilisés
ls scripts/templates/
# package.tmpl, tsconfig.json, tsconfig.build.json, vite.config.ts
```

### Debug
```bash
# Voir les fichiers générés
ls -la protoc-gen/_generated/scaleway-sdk-ts/packages_generated/

# Vérifier le formatage
cd protoc-gen/internal/protoc-gen-sdk-ts/formatting
./run.sh -i ../../../_generated/scaleway-sdk-ts/packages_generated -v
```

## 🔍 Points d'attention

### 1. **Fichiers générés**
- Les fichiers `*.gen.ts` sont générés automatiquement
- Ne pas les modifier manuellement
- Exclus du formatage Biome pour éviter les conflits

### 2. **Formatage**
- ESLint + Biome appliqués après génération
- Formatage déterministe pour éviter les diffs

### 3. **Versioning**
- Lerna gère le versioning automatique
- Conventional Commits pour les messages

### 4. **Sécurité**
- Tokens NPM et GitHub requis
- Workflow sécurisé avec secrets

## 📚 Ressources

- [Repository protobuf](https://gitlab.infra.online.net/protobuf/protobuf)
- [Repository pipelines](https://gitlab.infra.online.net/protobuf/pipelines)
- [Repository protoc-gen](https://gitlab.infra.online.net/protobuf/protoc-gen)
- [Repository scaleway-sdk-js](https://github.com/scaleway/scaleway-sdk-js)
- [Documentation Buf](https://docs.buf.build/)
- [Documentation Lerna](https://lerna.js.org/)

## 📚 Tutos rapides & erreurs fréquentes

### Tutos rapides

1) Lancer le workflow de bump de versions (PR)
- Actions → “Bump versions (PR)” → Run workflow
- Le job crée une branche `ci/release-bump-<run>`, met à jour les versions via Lerna, crée un commit signé (via l’API GitHub), ouvre une PR et active l’auto‑merge.

2) Publier après merge (dry‑run par défaut)
- Après merge sur `main`, “Release on PR merge” s’exécute
- Utilise `lerna publish from-package` (adapter le dry‑run si besoin)

3) Exiger les commits signés
- Settings → Rules → Rulesets → ajouter la règle “Require signed commits”
- En CI, préférer la création du commit via l’API GitHub (signature auto‑Verified) ou configurer SSH/GPG signing

4) Activer une protection de branche minimale (si Rulesets indisponibles)
- Branch protection: require PR, status checks, block force pushes, allow deletions=false

### Erreurs fréquentes & correctifs

- pnpm/action-setup → “No pnpm version is specified”
  - Fix: pinner `version` dans l’étape: `- uses: pnpm/action-setup@v4` avec `with: version: 9.15.0`

- Lerna 7 → `ECONFIGWORKSPACES` / “useWorkspaces removed”
  - Fix: dans `lerna.json`, remplacer `useWorkspaces: true` par `"packages": ["packages/*"]`

- GitHub API commits → 422 `parents is not an array`
  - Fix: envoyer un vrai tableau JSON: `--raw-field parents[]="$PARENT_SHA"`

- Push refusé sur main → “Changes must be made through a pull request”
  - Cause: ruleset/branch protection active
  - Fix: créer une branche + PR (ou configurer un bypass actor côté ruleset si la politique l’autorise)

- `.npmrc` → `Failed to replace env in config: ${NPM_TOKEN}`
  - Fix: retirer `_authToken=${NPM_TOKEN}` si vous ne publiez pas; garder `registry=https://registry.npmjs.org/`

- Actions sans droits PR/contents
  - Fix: dans `permissions:` du workflow, ajouter `contents: write`, `pull-requests: write`

- Merge queue indisponible via ruleset/API
  - Cause: plan/feature
  - Fix: activer via l’UI (Settings → Branches → Merge queue) si proposé; sinon rester en auto‑merge standard

- Commits non “Verified” avec “Require signed commits”
  - Fix: créer le commit via l’API GitHub (gh api) pour signature bot auto; ou configurer SSH/GPG signing dans le job + ajouter la clé de signature côté compte/bot

- Diffs de formatage sur fichiers générés
  - Fix: exclure `**/*.gen.ts` côté repo public (Biome); laisser le formatage déterministe en pipeline

## ❓ Pourquoi ESLint ET Biome ?

- ESLint (qualité/règles avancées)
  - Étendable (plugins) et précis (ex: `import/order` avec groupes/breaklines, `@typescript-eslint/no-floating-promises`, interdiction d'`export default`, règles projet).
  - Idéal pour corriger les artefacts du code généré (imports inutiles, ordre spécifique), et imposer des conventions fortes.

- Biome (formatage ultra‑rapide et déterministe)
  - Uniformise le style (indentation, quotes, trailing commas) et peut réordonner des imports simples.
  - Très rapide, peu de bruit en PR.

- Stratégie retenue
  - Pipeline de génération (protoc‑gen): ESLint puis Biome sur les fichiers générés → code propre + format stable avant push.
  - Repo public (`scaleway-sdk-js`): Biome uniquement, avec exclusion de `**/*.gen.ts` → évite de retoucher les générés et garde des PRs lisibles.
