# Migration ESLint → Biome - Résumé des changements

## 📋 Vue d'ensemble

Migration complète du linting/formatting de ESLint + Prettier vers Biome dans le SDK JavaScript Scaleway.

**Améliorations suite à review ChatGPT appliquées** ✅

---

## 🗑️ Fichiers supprimés

### Configuration ESLint

- `eslint.config.mjs` - Configuration ESLint principale
- `eslint.config.generated.mjs` - Configuration auto-générée

---

## ➕ Fichier ajouté : `biome.json`

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true,
    "defaultBranch": "main"
  },
  "files": {
    "ignoreUnknown": true
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineEnding": "lf",
    "lineWidth": 80,
    "attributePosition": "auto"
  },
  "javascript": {
    "formatter": {
      "jsxQuoteStyle": "double",
      "quoteProperties": "asNeeded",
      "trailingCommas": "all",
      "semicolons": "asNeeded",
      "arrowParentheses": "asNeeded",
      "bracketSpacing": true,
      "bracketSameLine": false,
      "quoteStyle": "single",
      "attributePosition": "auto"
    }
  },
  "json": {
    "formatter": {
      "enabled": false
    },
    "parser": {
      "allowComments": true
    },
    "linter": {
      "enabled": false
    }
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "style": {
        "noDefaultExport": "error"
      }
    }
  },
  "overrides": [
    {
      "includes": [
        "packages_generated/**",
        "**/dist/**",
        "coverage/**",
        "**/examples/**",
        "**/*.gen.ts"
      ],
      "linter": {
        "enabled": false
      }
    },
    {
      "includes": [
        "vite.config.ts",
        "vitest.config.ts",
        "**/*.config.ts",
        "**/*.config.js"
      ],
      "linter": {
        "rules": {
          "style": {
            "noDefaultExport": "off"
          }
        }
      }
    },
    {
      "includes": ["**/*.test.ts", "**/__tests__/**/*.ts"],
      "linter": {
        "rules": {
          "correctness": {
            "noUnusedVariables": "off"
          },
          "style": {
            "useNamingConvention": "off"
          }
        }
      }
    },
    {
      "includes": [
        "packages/client/src/internal/interceptors/types.ts",
        "packages/client/src/scw/auth.ts",
        "packages/client/src/scw/fetch/http-interceptors.ts"
      ],
      "linter": {
        "rules": {
          "style": {
            "useShorthandFunctionType": "off"
          }
        }
      }
    }
  ],
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}
```

**Points clés de la config Biome :**

- ✅ **VCS intégré** : `useIgnoreFile: true` utilise le `.gitignore` natif (source unique de vérité)
- ✅ **Organisation des imports** : activée via `assist.actions.source.organizeImports: "on"`
- ✅ Ignore les fichiers générés (`**/*.gen.ts`, `packages_generated/**`)
- ✅ Ignore les répertoires build (`dist/`, `coverage/`, `examples/`)
- ✅ Format : single quotes, semicolons optionnels, trailing commas
- ✅ **Overrides consolidés** : un seul override pour tous les fichiers générés (pas de doublons)
- ✅ Désactivation de certaines règles pour préserver l'API publique

**Améliorations appliquées vs version initiale :**

- ❌ Supprimé `files.experimentalScannerIgnores` (clé expérimentale instable)
- ✅ Consolidation des overrides (réduction des doublons)
- ✅ Configuration plus simple et robuste

---

## 📦 `package.json` - Modifications

### Scripts modifiés (améliorés)

```json
{
  "scripts": {
    "format": "biome format --write .", // Simplifié : format uniquement (plus rapide)
    "format:check": "biome format .", // Pour CI : lecture seule
    "lint": "biome lint .", // Inchangé
    "check": "biome check .", // Nouveau : tout-en-un pour local
    "prettier": "prettier --write '**/*.{md,mdx,yml,yaml}'"
  }
}
```

**Changements vs ESLint :**

- Avant : `biome check --linter-enabled=false --write .` (lent, pas clair)
- Après : `biome format --write .` (rapide, explicite)

### Dépendances supprimées

```diff
- "@scaleway/eslint-config-react"
- "@typescript-eslint/eslint-plugin"
- "@typescript-eslint/parser"
- "eslint"
- "eslint-plugin-tsdoc"
- "eslint-plugin-unused-imports"
- "eslint-plugin-import"
```

### lint-staged modifié

```json
{
  "lint-staged": {
    "packages/*/src/**/*.{ts,tsx,js,jsx}": [
      "biome check --write --no-errors-on-unmatched --files-ignore-unknown=true"
    ],
    "scripts/**/*.ts": [
      "biome check --write --no-errors-on-unmatched --files-ignore-unknown=true"
    ],
    "*.y?(a)ml": ["prettier --write"],
    "*.md?(x)": ["prettier --write"]
  }
}
```

---

## 🔧 Corrections de code pour respecter les règles Biome

### 1. **Performance : `noAccumulatingSpread`**

❌ **Avant** (utilisation de spread dans reduce - O(n²)):

```typescript
// packages/client/src/helpers/json.ts
return Object.entries(obj).reduce(
  (result, [key, value]) => ({
    ...result,
    [camelize(key)]: ignoreKeys.includes(key)
      ? (value as unknown)
      : camelizeKeys(value, ignoreKeys),
  }),
  {} as Record<string, unknown>,
) as T
```

✅ **Après** (boucle for...of - O(n)):

```typescript
const result: Record<string, unknown> = {}
for (const [key, value] of Object.entries(obj)) {
  result[camelize(key)] = ignoreKeys.includes(key)
    ? (value as unknown)
    : camelizeKeys(value, ignoreKeys)
}
return result as T
```

**Impact** : Évite O(n²) allocations mémoire, réduit la pression sur le GC.

**Fichiers concernés :**

- `packages/client/src/helpers/json.ts`
- `packages/client/src/helpers/marshalling.ts`
- `packages/configuration-loader/src/config-loader.ts`

---

### 2. **Complexité : `noExcessiveCognitiveComplexity`**

Ajout de commentaires `biome-ignore` pour les fonctions complexes légitimement :

```typescript
// packages/client/src/scw/client-settings.ts
/* biome-ignore lint/complexity/noExcessiveCognitiveComplexity: validation function with multiple checks */
export const assertValidSettings = (settings: Partial<Settings>): void => {
  // ... multiple validations ...
}

// packages/client/src/scw/fetch/response-parser.ts
/* biome-ignore lint/complexity/noExcessiveCognitiveComplexity: response parsing with multiple content types and error handling */
export const responseParser = async <T = unknown>(
  // ... parsing logic ...
)

// packages/configuration-loader/src/yml-loader.ts
/* biome-ignore lint/complexity/noExcessiveCognitiveComplexity: YAML parsing with multiple states */
export const convertYamlToConfiguration = (input: string | null): ConfigurationType => {
  // ... state machine pour parser YAML ...
}
```

**Note** : Dette technique documentée, refactoring à planifier (extraction de helpers purs).

---

### 3. **Sécurité : `noNonNullAssertion` et `noExplicitAny`**

❌ **Avant**:

```typescript
// scripts/setupNewProducts.ts
while (stack.length) {
  const p = stack.pop()! // Non-null assertion dangereuse
  const st = statSync(p)
}

const sdkPackage = safeReadJson(sdkPackageJsonPath) as any
```

✅ **Après**:

```typescript
while (stack.length) {
  const p = stack.pop()
  if (!p) break // Check explicite
  const st = statSync(p)
}

// Ajout du type approprié
import type { PackageJSON } from './types.js'
const sdkPackage = safeReadJson(sdkPackageJsonPath) as PackageJSON
```

**Bénéfice** : Évite les crashes runtime, type safety améliorée.

---

### 4. **Architecture : `noStaticOnlyClass`**

❌ **Avant** (classe statique uniquement):

```typescript
// packages/client/src/scw/errors/non-standard/invalid-request-mapper.ts
export class InvalidRequestMapper {
  static fromJSON(jsonError: ScalewayError): InvalidRequestError | null {
    // ...
  }
}

// Utilisation
InvalidRequestMapper.fromJSON(error)
```

✅ **Après** (fonction pure):

```typescript
export function mapInvalidRequestFromJSON(
  jsonError: ScalewayError,
): InvalidRequestError | null {
  // ... même logique ...
}

// Utilisation
mapInvalidRequestFromJSON(error)
```

**Bénéfices :**

- Meilleure testabilité (pas d'état)
- Tree-shaking amélioré (fonctions pures)
- Plus lisible (intention claire)

**Idem pour** `UnknownResourceMapper` → `mapUnknownResourceFromJSON`

---

### 5. **Style : `useNamingConvention`**

Gestion des exceptions pour les noms snake_case requis par l'API :

```typescript
// packages/client/src/scw/custom-marshalling.ts
export type Money = {
  /* biome-ignore lint/style/useNamingConvention: currency_code is API field name */
  currency_code: string  // Nom imposé par l'API Scaleway
  units?: string
  nanos?: number
}

// packages/client/src/scw/fetch/build-fetcher.ts
headers: {
  /* biome-ignore lint/style/useNamingConvention: Accept is standard HTTP header name */
  Accept: 'application/json',
}
```

**Rationale** : Reflète fidèlement le contrat wire/API, nécessaire pour la compatibilité.

---

### 6. **Documentation des interfaces publiques (nouveau)**

Ajout de commentaires explicatifs dans les fichiers avec `useShorthandFunctionType: off` :

```typescript
/**
 * Interceptor type definitions.
 *
 * Note: This file uses interface call signatures instead of shorthand function types
 * to maintain clear, documented public API signatures that are more readable in IDE
 * tooltips and generated documentation.
 */
```

**Fichiers concernés :**

- `packages/client/src/internal/interceptors/types.ts`
- `packages/client/src/scw/auth.ts`
- `packages/client/src/scw/fetch/http-interceptors.ts`

**Bénéfice** : Rationale documenté pour les futurs contributeurs, décision technique explicite.

---

### 7. **Regex : `noEmptyCharacterClassInRegex`**

❌ **Avant**:

```typescript
// packages/configuration-loader/src/yml-loader.ts
const DETECT_SECTION_REGEX = /^\s*([^]+?):\s*$/ // [^] peut matcher rien
```

✅ **Après**:

```typescript
const DETECT_SECTION_REGEX = /^\s*([\s\S]+?):\s*$/ // [\s\S] = n'importe quel caractère
```

---

### 8. **Variables : `noInnerDeclarations`**

❌ **Avant** (déclarations var à l'intérieur de blocs):

```javascript
// packages/client/src/vendor/base64/index.js
function encode(input) {
  if (condition) {
    var result = '' // Déclaration dans un bloc
  }
}
```

✅ **Après** (hoisting explicite):

```javascript
function encode(input) {
  var result = '' // Déclaration en haut de la fonction
  if (condition) {
    // ...
  }
}
```

---

### 9. **Assignments : `noAssignInExpressions`**

❌ **Avant**:

```typescript
// scripts/generateAlias.ts
while ((match = IMPORT_REGEX.exec(contents))) {
  // ...
}
```

✅ **Après**:

```typescript
let match: RegExpExecArray | null = IMPORT_REGEX.exec(contents)
while (match) {
  // ... use match ...
  match = IMPORT_REGEX.exec(contents)
}
```

---

## 📊 Statistiques

### Fichiers modifiés (handwritten uniquement)

- `biome.json` - Configuration
- `package.json` - Scripts & dépendances
- `pnpm-lock.yaml` - Régénéré
- **8 fichiers** dans `packages/client/src/`
- **2 fichiers** dans `packages/configuration-loader/src/`
- **5 fichiers** dans `scripts/`

### Types de règles corrigées

1. **Performance** : `noAccumulatingSpread` (3 fichiers) → O(n²) → O(n)
2. **Complexité** : `noExcessiveCognitiveComplexity` (3 fonctions, documentées)
3. **Sécurité** : `noNonNullAssertion`, `noExplicitAny` (1 fichier)
4. **Architecture** : `noStaticOnlyClass` (2 classes → fonctions pures)
5. **Style** : `useNamingConvention` (cas spéciaux API documentés)
6. **Correctness** : `noInnerDeclarations`, `noEmptyCharacterClassInRegex`

### Règles désactivées de manière justifiée

- `noDefaultExport` pour fichiers de config (Vite, Vitest) → requis par les outils
- `useShorthandFunctionType` pour interfaces publiques → lisibilité API (maintenant documenté)
- `noUnusedVariables` et `useNamingConvention` pour tests → flexibilité tests/mocks
- Tous les fichiers `**/*.gen.ts` → code généré, pas de contrôle

---

## ✅ Bénéfices de la migration

### Performance

1. **Linting ~100x plus rapide** : Biome vs ESLint (écrit en Rust)
2. **Scripts optimisés** : `format` séparé du `lint` (pas de parsing inutile)
3. **Code optimisé** : Détection de patterns O(n²) (spread accumulation)

### Maintenabilité

1. **Moins de dépendances** : 7 packages npm en moins
2. **Configuration unifiée** : Un seul fichier `biome.json` vs multiple configs ESLint
3. **Configuration robuste** : Pas de clés expérimentales, utilise `.gitignore` natif
4. **Documentation inline** : Rationale des overrides et ignores expliqué

### Qualité de code

1. **Règles modernes** : Détection de patterns anti-performance
2. **Sécurité type** : Moins de `any`, plus de types explicites
3. **Architecture** : Conversion classes statiques → fonctions pures (testabilité)

### Developer Experience

1. **Intégration Git** : VCS aware, respect du `.gitignore` natif
2. **Organisation imports** : Automatique
3. **Scripts clairs** : Intention explicite (`format` vs `lint` vs `check`)

---

## 🎯 Points d'attention pour review

### Questions à poser à une IA de review :

1. **Architecture** : La conversion des classes statiques en fonctions (`InvalidRequestMapper` → `mapInvalidRequestFromJSON`) est-elle une bonne pratique pour un SDK public ?

2. **Performance** : Les changements `reduce + spread` → `for...of` sont-ils justifiés du point de vue performance pour un SDK ?

3. **Complexité** : Les 3 fonctions avec `noExcessiveCognitiveComplexity` ignorée devraient-elles être refactorisées immédiatement ou peut-on les garder en dette technique ?

4. **API publique** : Les overrides pour `useShorthandFunctionType` sur les interfaces sont-ils nécessaires ou devrait-on utiliser des types fonctions partout ?

5. **Naming conventions** : La gestion des snake_case pour les champs API avec `biome-ignore` est-elle la meilleure approche ?

6. **Tests** : Désactiver `noUnusedVariables` pour tous les tests est-il trop permissif ?

7. **Configuration** : Y a-t-il des règles Biome importantes que nous aurions manquées ?

8. **Scripts npm** : L'approche avec `format`, `format:check`, `lint` et `check` séparés est-elle optimale ?

---

## 📝 Fichiers ignorés (pas de changements requis)

- `packages_generated/**` - Code auto-généré (108+ fichiers)
- `**/*.gen.ts` - Tous les fichiers générés
- `dist/**` - Fichiers compilés
- `coverage/**` - Rapports de tests
- `examples/**` - Code d'exemples

**Seul le code handwritten a été corrigé.**

---

## 🔄 Couverture fonctionnelle vs ESLint

### Fonctionnalités perdues

1. **`eslint-plugin-import`** : Résolution avancée & ordre d'imports

   - **Mitigation** : Le script `typecheck` existant (`pnpm turbo typecheck`) couvre la résolution d'imports et types manquants

2. **`eslint-plugin-tsdoc`** : Validation des tags TSDoc

   - **Impact** : Si le SDK s'appuie sur TSDoc pour génération de doc, envisager un outil dédié (API Extractor)

3. **`@scaleway/eslint-config-react`** : Règles React
   - **Impact** : Aucun (SDK pur, pas de composants React)

### Fonctionnalités nouvelles

1. **Organisation automatique des imports** : Activé via `assist.actions.source.organizeImports`
2. **Détection de patterns anti-performance** : `noAccumulatingSpread`
3. **VCS awareness** : Utilisation native du `.gitignore`
4. **Format + Lint en un seul outil** : Plus besoin de Prettier séparé (sauf MD/YAML)

---

## 🏁 Conclusion

### Status

✅ **Migration complète et testée**
✅ **Améliorations suite à review ChatGPT appliquées**
✅ **0 erreurs de lint sur le code handwritten**
✅ **Configuration robuste et maintenable**

### Prochaines étapes (optionnel, non bloquant)

1. Réduire progressivement l'override `noUnusedVariables` pour les tests (convention `_unused`)
2. Refactorer les 3 fonctions complexes (dette technique documentée)
3. Évaluer si un outil TSDoc dédié est nécessaire pour la génération de doc

### Validation

- ✅ `pnpm run lint` : 0 erreurs handwritten
- ✅ `pnpm run format:check` : conforme
- ✅ `pnpm typecheck` : résolution imports OK
- ✅ Tests : tous passent
- ✅ CI : prête

---

**Date de migration** : 3 novembre 2025  
**Review** : ChatGPT 4  
**Améliorations appliquées** : ✅ Toutes (clé expérimentale supprimée, scripts clarifiés, documentation inline ajoutée)
