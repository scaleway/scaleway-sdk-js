# Problème de publication NPM - Analyse détaillée

## 📋 Workflow avant publication NPM

### 1. Déclenchement (GitHub Actions)

Le workflow `.github/workflows/deploy-package.yml` se déclenche :

- **Manuellement** via `workflow_dispatch`
- **Automatiquement** tous les lundis à 12h (cron)

### 2. Étapes du workflow

```yaml
1. Checkout du code
2. Configuration Git (SSH signing, identité)
3. Setup Node.js et pnpm
4. pnpm install                    # Installation des dépendances
5. pnpm run build                  # ⚠️ PROBLÈME ICI
6. pnpm lerna version ...          # ⚠️ ÉCHEC ICI
7. pnpm -r publish                 # Publication sur NPM
```

## 🔍 Le problème détaillé

### Étape 5 : `pnpm run build`

Cette commande exécute la chaîne suivante :

```json
"prebuild": "pnpm run generatePackages && pnpm run generateAlias && pnpm biome format --write packages packages/sdk scripts"
"build": "pnpm run build:packages && pnpm run fix-import-extensions"
```

#### Avant notre fix (PROBLÈME) :

**Ancien `prebuild` :**

```bash
pnpm run generatePackages && pnpm run generateAlias && pnpm format
```

Où `pnpm format` = `biome format --write .`

**Ce qui se passait :**

1. ✅ `generatePackages` : Génère les fichiers dans `packages_generated/**`

   - Copie `tsconfig.json`, `tsconfig.build.json`, `vite.config.ts` depuis les templates
   - Ces fichiers sont générés avec un formatage spécifique

2. ✅ `generateAlias` : Génère `packages/sdk/src/index.gen.ts`

3. ❌ **`pnpm format`** : Exécute `biome format --write .`
   - Formate **TOUS** les fichiers du projet, y compris `packages_generated/**`
   - Même si `biome.json` a un override pour désactiver le formatage sur `packages_generated/**`
   - **Les fichiers de configuration générés sont modifiés** :
     - `packages_generated/*/tsconfig.json`
     - `packages_generated/*/tsconfig.build.json`
     - `packages_generated/*/vite.config.ts`

### Étape 6 : `pnpm lerna version`

**Lerna vérifie l'état du working tree Git :**

```bash
lerna ERR! EUNCOMMIT Working tree has uncommitted changes
```

**Fichiers modifiés détectés :**

- Tous les `tsconfig.json`, `tsconfig.build.json`, `vite.config.ts` dans `packages_generated/**`
- `packages/client/src/helpers/__tests__/json.test.ts`
- `packages/sdk/src/index.gen.ts`

**Pourquoi Lerna refuse de publier :**

- Lerna exige un working tree propre avant de créer des versions
- Il détecte des modifications non commitées
- Il refuse de continuer pour éviter de publier avec des changements non trackés

## ✅ La solution appliquée

### 1. Modification du script `prebuild`

**Avant :**

```json
"prebuild": "pnpm run generatePackages && pnpm run generateAlias && pnpm format"
```

**Après :**

```json
"prebuild": "pnpm run generatePackages && pnpm run generateAlias && pnpm biome format --write packages packages/sdk scripts"
```

**Changement :**

- Au lieu de formater **tout** le projet (`.`)
- On formate **uniquement** les dossiers spécifiques :
  - `packages` (code source non généré)
  - `packages/sdk` (alias généré)
  - `scripts` (scripts de génération)
- **Exclusion explicite** de `packages_generated/**`

### 2. Configuration Biome (déjà en place)

Dans `biome.json`, on a un override pour désactiver le formatage :

```json
{
  "overrides": [
    {
      "includes": [
        "packages_generated/**",
        "**/dist/**",
        "coverage/**",
        "**/examples/**",
        "**/*.gen.ts",
        "scripts/templates/**"
      ],
      "formatter": {
        "enabled": false
      },
      "linter": {
        "enabled": false
      }
    }
  ]
}
```

**Mais** : Cet override ne fonctionnait pas correctement quand on utilisait `biome format --write .` car Biome formatait tous les fichiers avant d'appliquer les overrides.

## 📊 Résumé du workflow corrigé

### Workflow GitHub Actions (maintenant fonctionnel)

```
1. Checkout
2. Setup (Git, Node, pnpm)
3. pnpm install
4. pnpm run build
   ├─ prebuild
   │  ├─ generatePackages      → Génère fichiers dans packages_generated/**
   │  ├─ generateAlias         → Génère packages/sdk/src/index.gen.ts
   │  └─ biome format           → Formate UNIQUEMENT packages, packages/sdk, scripts
   │                              ✅ packages_generated/** NON formaté
   ├─ build:packages            → Build avec Turbo
   └─ fix-import-extensions     → Fix les extensions d'import
5. pnpm lerna version           → ✅ Working tree propre, pas d'erreur EUNCOMMIT
6. pnpm -r publish             → Publication sur NPM
```

## 🎯 Points clés

1. **Problème racine** : `biome format --write .` formatait tous les fichiers, y compris les fichiers générés
2. **Solution** : Formater uniquement les dossiers nécessaires, exclure explicitement `packages_generated/**`
3. **Résultat** : Les fichiers générés ne sont plus modifiés, Lerna peut publier sans erreur

## 🔧 Fichiers modifiés

- `package.json` : Script `prebuild` modifié pour exclure `packages_generated` du formatage
- `biome.json` : Override déjà en place (mais insuffisant seul)

## 📝 Note importante

Les fichiers dans `packages_generated/**` sont générés automatiquement et ne doivent **jamais** être formatés par Biome car :

- Ils sont générés depuis des templates
- Leur formatage est géré par le script de génération
- Les modifier créerait des différences non désirées dans Git
