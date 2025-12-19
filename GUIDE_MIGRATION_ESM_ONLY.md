# Guide de migration : SDK JS vers ESM Only

## 📋 État actuel

Le SDK JS a déjà :

- ✅ `"type": "module"` dans tous les `package.json`
- ✅ Le champ `exports` configuré dans tous les packages
- ❌ **MAIS** génère encore ESM + CJS (`formats: ['es', 'cjs']`)
- ❌ **MAIS** les `exports` incluent encore `"require"` pour CJS

## 🎯 Objectif

Retirer le support CommonJS pour publier les packages en **ESM uniquement**, conformément à la stratégie définie dans `scaleway-lib` (PR #1145).

## ⚠️ Prérequis IMPORTANTS

**AVANT de commencer**, vérifier que tous les projets internes Scaleway utilisant le SDK JS sont prêts pour ESM :

| Projet             | Statut ESM   | Action requise        |
| ------------------ | ------------ | --------------------- |
| **Public Console** | ✅ Ready     | OK                    |
| **Admin Console**  | ❌ Not ready | Attendre la migration |
| **Websites**       | ❌ Not ready | Attendre la migration |

**⚠️ Ne pas procéder tant que Admin Console et Websites ne sont pas prêts !**

## 🔧 Étapes de migration

### Étape 1 : Mise à jour de la configuration Vite

**Fichier** : `vite.config.ts` (racine)

**Avant** :

```typescript
lib: {
  formats: ['es', 'cjs'],  // ❌ À retirer
}
```

**Après** :

```typescript
lib: {
  formats: ['es'],  // ✅ ESM uniquement
}
```

### Étape 2 : Mise à jour des `package.json` - Retirer les références CJS

Pour **chaque package** (packages/ et packages_generated/), mettre à jour le champ `exports` :

#### Pour les packages standards (client, configuration-loader, sdk)

**Avant** :

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs", // ❌ À retirer
      "default": "./dist/index.js"
    }
  }
}
```

**Après** :

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js" // ✅ ESM uniquement
    }
  }
}
```

#### Pour les packages générés (account, instance, etc.)

**Avant** :

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.gen.d.ts",
      "import": "./dist/index.gen.js",
      "require": "./dist/index.gen.cjs", // ❌ À retirer
      "default": "./dist/index.gen.js"
    },
    "./*": {
      "types": "./dist/*/index.gen.d.ts",
      "import": "./dist/*/index.gen.js",
      "require": "./dist/*/index.gen.cjs", // ❌ À retirer
      "default": "./dist/*/index.gen.js"
    }
  }
}
```

**Après** :

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.gen.d.ts",
      "default": "./dist/index.gen.js" // ✅ ESM uniquement
    },
    "./*": {
      "types": "./dist/*/index.gen.d.ts",
      "default": "./dist/*/index.gen.js" // ✅ ESM uniquement
    }
  }
}
```

**Note** : Le champ `"import"` peut être retiré car `"default"` est utilisé pour ESM.

### Étape 3 : Mettre à jour le template de génération

**Fichier** : `scripts/templates/package.tmpl`

Ce template est utilisé pour générer les `package.json` des packages générés. Il doit être mis à jour pour retirer les références CJS.

**Avant** :

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.gen.d.ts",
      "import": "./dist/index.gen.js",
      "require": "./dist/index.gen.cjs", // ❌ À retirer
      "default": "./dist/index.gen.js"
    },
    "./*": {
      "types": "./dist/*/index.gen.d.ts",
      "import": "./dist/*/index.gen.js",
      "require": "./dist/*/index.gen.cjs", // ❌ À retirer
      "default": "./dist/*/index.gen.js"
    }
  }
}
```

**Après** :

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.gen.d.ts",
      "default": "./dist/index.gen.js" // ✅ ESM uniquement
    },
    "./*": {
      "types": "./dist/*/index.gen.d.ts",
      "default": "./dist/*/index.gen.js" // ✅ ESM uniquement
    }
  }
}
```

**Note** : Après cette modification, régénérer les packages avec `pnpm run generatePackages` pour appliquer les changements.

### Étape 4 : Nettoyer les fichiers CJS existants

Après le build, supprimer tous les fichiers `.cjs` du dossier `dist/` de chaque package :

```bash
# Exemple pour un package
find packages -name "*.cjs" -type f -delete
find packages_generated -name "*.cjs" -type f -delete
```

### Étape 5 : Tests et validation

1. **Build** : Vérifier que le build fonctionne

   ```bash
   pnpm run build
   ```

2. **Typecheck** : Vérifier TypeScript

   ```bash
   pnpm run typecheck
   ```

3. **Tests** : Exécuter tous les tests

   ```bash
   pnpm run test
   ```

4. **Vérifier les dist/** : S'assurer qu'il n'y a plus de fichiers `.cjs`

### Étape 6 : Versioning et CHANGELOG

#### Bump de version majeure

Pour **chaque package**, faire un bump de version majeure :

- `@scaleway/sdk-client` : `1.x.x` → `2.0.0`
- `@scaleway/sdk` : `2.x.x` → `3.0.0`
- `@scaleway/configuration-loader` : `1.x.x` → `2.0.0`
- Tous les packages générés : `1.x.x` → `2.0.0` (ou incrémenter la version majeure actuelle)

#### Mise à jour des CHANGELOG.md

Pour **chaque package**, ajouter une entrée dans le CHANGELOG :

```markdown
## X.0.0 (YYYY-MM-DD)

### ⚠ BREAKING CHANGES

- packages are ESM only

### :gear: Features

- publish packages as ESM only ([#XXX](https://github.com/scaleway/scaleway-sdk-js/issues/XXX))
```

### Étape 7 : Mise à jour de la documentation

1. **README.md** : Ajouter une note

   ```markdown
   ## Module System

   We only output ESM modules. Please [read this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
   ```

2. **Exemples** : Mettre à jour les exemples pour utiliser `import` au lieu de `require`

## 📦 Packages à migrer

### Packages principaux

- [ ] `packages/client/package.json`
- [ ] `packages/sdk/package.json`
- [ ] `packages/configuration-loader/package.json`

### Packages générés (tous dans `packages_generated/`)

- [ ] `account/package.json`
- [ ] `applesilicon/package.json`
- [ ] `audit_trail/package.json`
- [ ] `autoscaling/package.json`
- [ ] `baremetal/package.json`
- [ ] `billing/package.json`
- [ ] `block/package.json`
- [ ] `cockpit/package.json`
- [ ] `container/package.json`
- [ ] `datawarehouse/package.json`
- [ ] `dedibox/package.json`
- [ ] `domain/package.json`
- [ ] `edge_services/package.json`
- [ ] `environmental_footprint/package.json`
- [ ] `file/package.json`
- [ ] `flexibleip/package.json`
- [ ] `function/package.json`
- [ ] `iam/package.json`
- [ ] `inference/package.json`
- [ ] `instance/package.json`
- [ ] `interlink/package.json`
- [ ] `iot/package.json`
- [ ] `ipam/package.json`
- [ ] `jobs/package.json`
- [ ] `k8s/package.json`
- [ ] `kafka/package.json`
- [ ] `key_manager/package.json`
- [ ] `lb/package.json`
- [ ] `marketplace/package.json`
- [ ] `mnq/package.json`
- [ ] `mongodb/package.json`
- [ ] `product_catalog/package.json`
- [ ] `qaas/package.json`
- [ ] `rdb/package.json`
- [ ] `redis/package.json`
- [ ] `registry/package.json`
- [ ] `s2s_vpn/package.json`
- [ ] `secret/package.json`
- [ ] `serverless_sqldb/package.json`
- [ ] `std/package.json`
- [ ] `tem/package.json`
- [ ] `test/package.json`
- [ ] `vpc/package.json`
- [ ] `vpcgw/package.json`
- [ ] `webhosting/package.json`

## 🔍 Vérifications finales

- [ ] `vite.config.ts` : `formats: ['es']` uniquement
- [ ] Tous les `package.json` : pas de `"require"` dans `exports`
- [ ] Tous les `package.json` : `"type": "module"` présent
- [ ] Aucun fichier `.cjs` dans les `dist/`
- [ ] Build fonctionne : `pnpm run build`
- [ ] Tests passent : `pnpm run test`
- [ ] Typecheck passe : `pnpm run typecheck`
- [ ] CHANGELOG mis à jour pour tous les packages
- [ ] Versions bumpées (breaking change)
- [ ] Documentation mise à jour

## 📚 Référence

Cette migration suit le même processus que la PR #1145 de `scaleway-lib` :

- [Commit de référence](https://github.com/scaleway/scaleway-lib/commit/4c25097254a5ba7f0a5dbb6fdf5d6578a75f777a)
- [Documentation détaillée](../scaleway-lib/DOCUMENTATION_PR_1145_ESM_ONLY.md)

## ⚠️ Breaking Changes pour les consommateurs

Les projets utilisant le SDK JS devront :

1. **Utiliser la syntaxe ESM** :

   ```javascript
   // ❌ Avant (CommonJS)
   const { Scaleway } = require('@scaleway/sdk')

   // ✅ Après (ESM)
   import { Scaleway } from '@scaleway/sdk'
   ```

2. **Avoir `"type": "module"` dans leur `package.json`** (ou utiliser un bundler moderne)

3. **Mettre à jour leur configuration TypeScript** :
   ```json
   {
     "compilerOptions": {
       "module": "ESNext",
       "moduleResolution": "bundler"
     }
   }
   ```

## 🎯 Checklist complète

- [ ] Vérifier que tous les projets internes sont prêts (Public Console ✅, Admin Console ❌, Websites ❌)
- [ ] Mettre à jour `vite.config.ts` : `formats: ['es']`
- [ ] Mettre à jour `scripts/templates/package.tmpl` : retirer `"require"` des `exports`
- [ ] Régénérer les packages : `pnpm run generatePackages`
- [ ] Mettre à jour manuellement les `package.json` non générés (client, sdk, configuration-loader)
- [ ] Nettoyer les fichiers `.cjs` existants
- [ ] Tester le build : `pnpm run build`
- [ ] Tester TypeScript : `pnpm run typecheck`
- [ ] Tester les tests : `pnpm run test`
- [ ] Bump de version majeure pour tous les packages
- [ ] Mettre à jour tous les CHANGELOG.md
- [ ] Mettre à jour le README.md
- [ ] Créer la PR avec le message : `feat!: publish packages as ESM only`

---

**Note** : Cette migration ne doit être effectuée qu'une fois que tous les projets internes Scaleway (Admin Console et Websites) seront prêts pour ESM.
