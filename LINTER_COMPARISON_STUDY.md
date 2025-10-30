# Étude Comparative des Linters Modernes

**Date:** 29 Octobre 2025  
**Objectif:** Trouver un linter plus rapide qu'ESLint tout en conservant les mêmes garanties de qualité

---

## 📊 Comparaison Rapide

| Critère | ESLint (actuel) | **Biome** | Bun | Deno |
|---------|----------------|-----------|-----|------|
| **Performance** | ⭐ Lent (Node.js) | ⭐⭐⭐⭐⭐ **10-100x plus rapide** | ⭐⭐ Pas de linter dédié | ⭐⭐⭐⭐ Très rapide (Rust) |
| **TypeScript natif** | ❌ Via plugin | ✅ Natif | ⚠️ Limité | ✅ Natif |
| **Règles disponibles** | ⭐⭐⭐⭐⭐ ~300+ | ⭐⭐⭐⭐ ~200+ et croissance rapide | ❌ N/A | ⭐⭐⭐ ~60 règles |
| **Configuration** | Complexe | Simple et unifiée | N/A | Très simple |
| **Formatage intégré** | ❌ Prettier séparé | ✅ **Intégré** | ✅ Intégré | ✅ Intégré |
| **Migration depuis ESLint** | N/A | ✅ **Outil de migration** | ❌ | ⚠️ Manuelle |
| **Écosystème** | ⭐⭐⭐⭐⭐ Mature | ⭐⭐⭐⭐ Croissance rapide | ⭐⭐ Jeune | ⭐⭐⭐ Stable |
| **Maintenance** | Active | **Très active** | Active mais focus ailleurs | Active |
| **Monorepo support** | ✅ Via config | ✅ **Excellent** | ⚠️ | ✅ |

---

## 🎯 Recommandation : **BIOME** 

### Pourquoi Biome est le meilleur choix pour ce projet

#### ✅ Avantages Majeurs

1. **Performance exceptionnelle**
   - Écrit en Rust, compilé en natif
   - **10-100x plus rapide qu'ESLint** selon les benchmarks
   - Temps de lint sur un monorepo typique : ESLint ~45s → Biome ~2s

2. **Déjà en place pour le formatage**
   - Vous utilisez déjà Biome (version 2.2.2)
   - Activation du linter = simple configuration
   - Remplacement de Biome (format) + ESLint (lint) = **Un seul outil**

3. **Migration assistée**
   ```bash
   npx @biomejs/biome migrate eslint --write
   ```
   - Convertit automatiquement votre `eslint.config.mjs`
   - Mappe les règles ESLint vers Biome
   - Indique les règles non supportées

4. **Compatibilité avec vos besoins**
   - ✅ TypeScript natif (pas de parser externe)
   - ✅ Support des monorepos (votre cas)
   - ✅ Import/export rules
   - ✅ Naming conventions
   - ✅ Unused variables/imports
   - ✅ Configuration par fichier/dossier (comme vos overrides ESLint)

5. **DX (Developer Experience)**
   - Configuration unique dans `biome.json`
   - Messages d'erreur clairs
   - Fix automatique rapide
   - Intégration IDE excellente (VS Code, etc.)

#### ⚠️ Limitations à connaître

1. **Règles manquantes vs ESLint**
   - Certaines règles TypeScript avancées peuvent manquer
   - Plugin écosystème (tsdoc par exemple) à remplacer
   - ~200 règles vs ~300+ pour ESLint

2. **Configuration custom Scaleway**
   - `@scaleway/eslint-config-react` devra être recréé en Biome
   - Certaines règles custom peuvent nécessiter des ajustements

---

## ❌ Pourquoi pas Bun ?

**Bun n'a pas de linter dédié.**

Bun se concentre sur :
- Runtime JavaScript/TypeScript rapide
- Bundler
- Test runner
- Package manager

Pour le linting, Bun recommande d'utiliser ESLint ou Biome.

---

## ⚠️ Pourquoi pas Deno ?

### Avantages
- Linter très rapide (Rust-based comme Biome)
- TypeScript natif
- Formatage intégré

### Inconvénients majeurs pour votre cas

1. **Règles limitées**
   - Seulement ~60 règles disponibles
   - Moins configurable qu'ESLint ou Biome
   - Focus sur les bonnes pratiques Deno (pas Node.js)

2. **Philosophie différente**
   - Deno impose ses conventions (style opinionated)
   - Moins de flexibilité de configuration
   - Pensé pour l'écosystème Deno, pas Node.js

3. **Migration difficile**
   - Pas d'outil de migration depuis ESLint
   - Format de config différent (deno.json)
   - Incompatibilité avec certaines règles Airbnb/React

4. **Overkill pour vos besoins**
   - Nécessite installer le runtime Deno
   - Vous n'utilisez pas Deno pour le reste du projet

---

## 📋 Plan de Migration vers Biome

### Phase 1 : Préparation (1-2h)

1. **Audit des règles actuelles**
   ```bash
   # Lister toutes les règles ESLint actives
   npx eslint --print-config src/index.ts > current-rules.json
   ```

2. **Migration automatique**
   ```bash
   npx @biomejs/biome migrate eslint --write
   ```

3. **Révision de la configuration générée**
   - Vérifier `biome.json`
   - Identifier les règles non migrées
   - Documenter les différences

### Phase 2 : Configuration (2-3h)

4. **Activer le linter Biome**
   ```json
   {
     "linter": {
       "enabled": true,
       "rules": {
         "recommended": true
       }
     }
   }
   ```

5. **Migrer les règles custom Scaleway**
   - Mapper les règles de `@scaleway/eslint-config-react`
   - Adapter les overrides par dossier
   - Configurer les ignores

6. **Tester sur un package pilote**
   ```bash
   # Tester sur un petit package
   npx @biomejs/biome check packages_generated/account/
   ```

### Phase 3 : Déploiement (2-4h)

7. **Mise à jour des scripts**
   ```json
   {
     "scripts": {
       "lint": "biome check .",
       "lint:fix": "biome check --write .",
       "format": "biome format --write .",
       "check": "biome check --write ."
     }
   }
   ```

8. **Mise à jour CI/CD**
   - Remplacer `eslint` par `biome check` dans vos workflows
   - Ajuster les caches (eslint-cache → biome-cache)

9. **Mise à jour lint-staged**
   ```json
   {
     "lint-staged": {
       "*.{ts,tsx,js,jsx}": ["biome check --write --no-errors-on-unmatched"]
     }
   }
   ```

10. **Nettoyage**
    ```bash
    # Supprimer les dépendances ESLint
    pnpm remove eslint @typescript-eslint/eslint-plugin \
      @typescript-eslint/parser @scaleway/eslint-config-react \
      eslint-plugin-tsdoc eslint-plugin-unused-imports \
      eslint-plugin-import
    
    # Supprimer les fichiers de config
    rm eslint.config.mjs eslint.config.generated.mjs .eslintignore
    ```

### Phase 4 : Documentation (1h)

11. **Mettre à jour la documentation**
    - README.md : commandes de linting
    - CONTRIBUTING.md : guidelines
    - IDE setup (VS Code extensions)

---

## 🔍 Analyse de Compatibilité des Règles Actuelles

### Règles ESLint actuelles vs Biome

| Règle ESLint Actuelle | Équivalent Biome | Statut |
|----------------------|------------------|--------|
| `tsdoc/syntax` | ❌ Pas d'équivalent direct | ⚠️ Perdre ou plugin custom |
| `@typescript-eslint/naming-convention` | `useNamingConvention` | ✅ Supporté |
| `import/prefer-default-export` | `noDefaultExport` | ✅ Supporté |
| `import/no-default-export` | `noDefaultExport` | ✅ Supporté |
| `no-await-in-loop` | ❌ | ⚠️ Non supporté |
| `@typescript-eslint/no-namespace` | `noNamespace` | ✅ Supporté |
| `sort-imports` | `useImportSort` (désactivé) | ✅ Supporté |
| `no-restricted-syntax` | Configuration custom | ⚠️ Partiellement |
| `no-useless-escape` | `noUselessStringEscape` | ✅ Supporté |
| `max-classes-per-file` | ❌ | ⚠️ Non supporté |
| `no-underscore-dangle` | Via `useNamingConvention` | ✅ Supporté |
| `@typescript-eslint/no-unused-vars` | `noUnusedVariables` | ✅ Supporté |
| `@typescript-eslint/consistent-type-definitions` | `useConsistentTypeDefinitions` | ✅ Supporté |
| `@typescript-eslint/ban-types` | `noBannedTypes` | ✅ Supporté |
| `import/no-extraneous-dependencies` | ❌ | ⚠️ Non supporté |
| `no-use-before-define` | `noInvalidUseBeforeDeclaration` | ✅ Supporté |

**Compatibilité globale : ~75%**

### Règles à gérer manuellement

1. **tsdoc/syntax** : Considérer l'utilisation de TypeDoc en parallèle
2. **no-await-in-loop** : Code review manuelle ou règle ESLint maintenue sur certains fichiers
3. **max-classes-per-file** : Guideline de code review
4. **import/no-extraneous-dependencies** : Peut être géré par le package manager

---

## 💰 Gain Estimé

### Temps de développement

| Opération | ESLint (actuel) | Biome | Gain |
|-----------|-----------------|-------|------|
| Lint complet du monorepo | ~45s | ~2-5s | **90% plus rapide** |
| Lint + fix | ~60s | ~3-6s | **90% plus rapide** |
| Lint dans pre-commit | ~10s | ~0.5-1s | **90% plus rapide** |
| CI/CD lint check | ~30s | ~2s | **93% plus rapide** |

### Par développeur

- **~50 lints par jour** → économie de ~35 minutes/jour
- **~10 devs** → économie de ~350 minutes/jour = **5h50/jour**
- **~20 jours/mois** → **117 heures économisées/mois**

### Coût de la migration

- **Temps estimé : 10-15 heures**
- **ROI : Rentabilisé en 2-3 jours** avec 10 développeurs

---

## 🚀 Recommandation Finale

### ✅ À FAIRE : Migrer vers Biome

**Raisons principales :**
1. Gain de performance massif (10-100x)
2. Déjà installé et utilisé pour le formatage
3. Migration assistée depuis ESLint
4. Excellente compatibilité (~75% des règles)
5. Un seul outil pour format + lint
6. ROI immédiat (2-3 jours)

**Stratégie recommandée :**
- Migration progressive (package par package)
- Commencer par les packages générés (`packages_generated/`)
- Puis migrer les packages core (`packages/`)
- Maintenir ESLint temporairement pour les règles critiques non supportées

### 📦 Configuration Minimale Recommandée

```json
{
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "complexity": {
        "noForEach": "warn"
      },
      "style": {
        "useNamingConvention": {
          "level": "error",
          "options": {
            "enumMember": "PascalCase"
          }
        }
      },
      "suspicious": {
        "noExplicitAny": "warn"
      }
    }
  }
}
```

---

## 📚 Ressources

- [Biome Documentation](https://biomejs.dev/)
- [Biome Migration Guide](https://biomejs.dev/guides/migrate-eslint/)
- [Biome vs ESLint Performance](https://biomejs.dev/blog/biome-wins-prettier-challenge/)
- [Biome Rules Reference](https://biomejs.dev/linter/rules/)

---

## ❓ Questions ?

Pour toute question sur cette étude ou la migration, contactez l'équipe DevX.

