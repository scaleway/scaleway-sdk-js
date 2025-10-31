# Spec-Based Marshalling - Proof of Concept ✅

## 📋 Contexte

**Ticket**: DEVTOOLSDEVTOOLS-1090 - Do (un)marshalling using object specs instead of methods

**Problème actuel** : Le SDK utilise des fonctions générées automatiquement pour marshaller/unmarshaller chaque type, ce qui peut causer :
- 🔄 Des dépendances circulaires entre types
- 🚫 Impossibilité de faire de la réflexion runtime
- 📦 Beaucoup de code généré

**Solution proposée** : Utiliser des spécifications déclaratives (objets) qui décrivent la structure des types, avec des fonctions génériques qui interprètent ces specs.

---

## ✅ Phase 1 : Proof of Concept (TERMINÉ)

### 🎯 Ce qui a été fait

#### 1. Nouveau système de specs (`packages/client/src/helpers/spec-marshalling.ts`)

**Interfaces créées** :
- `FieldSpec` : Spécification d'un champ individuel
- `TypeSpec` : Spécification d'un type complet
- `SpecRegistry` : Registre pour stocker et référencer les specs

**Fonctions génériques implémentées** :
- `unmarshalWithSpec()` : Unmarshalling générique basé sur spec
- `marshalWithSpec()` : Marshalling générique basé sur spec
- `unmarshal()` / `marshal()` : Fonctions de convenance

**Features supportées** :
- ✅ Types de base : string, number, boolean, date
- ✅ Types complexes : arrays, maps, nested objects
- ✅ Références entre types (résout les dépendances circulaires)
- ✅ Conversion snake_case ↔ camelCase
- ✅ Valeurs par défaut (defaultProjectId, etc.)
- ✅ Champs optionnels

#### 2. Tests complets (`packages/client/src/helpers/__tests__/spec-marshalling.test.ts`)

**30 tests unitaires** couvrant :
- Types de base
- Conversions de nommage
- Types complexes (arrays, maps)
- Objets imbriqués avec références
- Gestion d'erreurs
- Valeurs par défaut
- Exemple réel avec le type `Human`

**Résultat** : ✅ 30/30 tests passent

#### 3. Documentation et exemple (`packages/client/src/helpers/__examples__/human-spec-example.ts`)

Un exemple complet montrant :
- Comparaison approche ancienne vs nouvelle
- Utilisation des specs
- Avantages démontrés (réflexion, validation, etc.)
- Stratégie de migration

#### 4. Export public (`packages/client/src/internals.ts`)

Les nouvelles fonctions sont maintenant exportées et disponibles :
```typescript
export type { FieldSpec, TypeSpec }
export {
  specRegistry,
  SpecRegistry,
  unmarshal,
  unmarshalWithSpec,
  marshal,
  marshalWithSpec,
}
```

---

## 📊 Comparaison des approches

### ❌ Avant : Fonctions générées

```typescript
// ~25 lignes de code par type
export const unmarshalHuman = (data: unknown): Human => {
  if (!isJSONObject(data)) {
    throw new TypeError(...)
  }
  return {
    name: data.name,
    age: data.age,
    createdAt: unmarshalDate(data.created_at),
    address: unmarshalAddress(data.address), // ⚠️ Dépendance circulaire possible
    // ... 10+ autres champs
  } as Human
}
```

**Problèmes** :
- Dépendances entre fonctions
- Pas de réflexion possible
- Code verbeux

### ✅ Après : Specs déclaratives

```typescript
// ~15 lignes de data par type
export const HumanSpec: TypeSpec = {
  type: 'object',
  fields: {
    name: { source: 'name', type: 'string' },
    age: { source: 'age', type: 'number' },
    createdAt: { source: 'created_at', type: 'date' },
    address: { source: 'address', type: 'reference', specName: 'Address' }, // ✅ Pas de dépendance
  }
}

// Usage
const human = unmarshal<Human>(data, HumanSpec)
```

**Avantages** :
- ✅ Pas de dépendances circulaires (juste des objets)
- ✅ Réflexion possible runtime
- ✅ Plus facile à tester et maintenir
- ✅ Auto-documenté

---

## 🔄 Stratégie de migration recommandée

### Phase 1 : Migration douce (v3.0)

Générer **les deux** pour assurer la rétrocompatibilité :

```typescript
// Nouveau : La spec
export const HumanSpec: TypeSpec = { ... }

// Ancien : Wrapper déprécié
/**
 * @deprecated Use unmarshal(data, HumanSpec) instead
 */
export const unmarshalHuman = (data: unknown): Human => {
  return unmarshal<Human>(data, HumanSpec)
}
```

**Impact** : ❌ Aucun breaking change !

### Phase 2 : Période de transition (v3.1 - v3.x)

- Les deux approches coexistent
- Documentation mise à jour
- Warnings de dépréciation
- 6+ mois de transition

### Phase 3 : Nettoyage (v4.0)

- Supprimer les fonctions wrapper
- Garder uniquement les specs
- Breaking change assumé (mais minimal)

---

## 📈 Bénéfices concrets

### 1. Résolution des dépendances circulaires

**Avant** :
```typescript
// ❌ Circular dependency error possible
unmarshalHuman → unmarshalAddress → unmarshalHuman
```

**Après** :
```typescript
// ✅ Juste des objets, pas de dépendances
HumanSpec (data) → AddressSpec (data) → Resolved!
```

### 2. Réflexion runtime

```typescript
// Inspecter les champs d'un type
console.log(Object.keys(HumanSpec.fields))
// ['id', 'name', 'age', 'createdAt', ...]

// Trouver tous les champs de type 'date'
const dateFields = Object.entries(HumanSpec.fields)
  .filter(([_, spec]) => spec.type === 'date')
  .map(([name]) => name)
// ['createdAt', 'updatedAt']
```

### 3. Validation et documentation automatique

```typescript
// Générer automatiquement la documentation
function generateDoc(spec: TypeSpec) {
  return Object.entries(spec.fields).map(([name, field]) => 
    `- ${name} (${field.type}): ${field.source}`
  )
}
```

### 4. Réduction de la complexité du code généré

- Fonctions : ~25 lignes × 50 types = **1250 lignes**
- Specs : ~15 lignes × 50 types = **750 lignes**
- **Gain : ~40% de code en moins**

---

## 🚀 Prochaines étapes

### Phase 2 : Modifier le générateur protobuf

**Dossier** : `/Users/jonathanremy/Desktop/protoc-gen/internal/protoc-gen-sdk-ts/`

**Fichiers à modifier** :
1. `templates/marshalling.ts.tmpl` : Nouveau template pour générer les specs
2. `message.go` : Logique de génération adaptée
3. Tests : Mettre à jour les golden files

**Objectif** : Générer automatiquement :
```typescript
// Au lieu de
export const unmarshalHuman = (data: unknown) => { ... }

// Générer
export const HumanSpec: TypeSpec = { ... }
export const unmarshalHuman = (data: unknown) => unmarshal(data, HumanSpec) // wrapper déprécié
```

### Phase 3 : Tests et validation

1. Régénérer tous les packages avec le nouveau système
2. Lancer tous les tests du SDK
3. Vérifier les performances
4. Valider avec des cas d'usage réels

### Phase 4 : Documentation et communication

1. Mettre à jour le MIGRATION_GUIDE.md
2. Créer des exemples de migration
3. Annoncer le changement dans le CHANGELOG
4. Donner 6+ mois avant v4.0

---

## 🎓 Pour aller plus loin

### Types non encore implémentés

Ces types nécessitent du marshalling custom (déjà disponible dans `custom-marshalling.ts`) :

- `Money` : Conversion montant + devise
- `TimeSeries` : Structure complexe de séries temporelles
- `Decimal` : Précision décimale
- `Blob`/`ScwFile` : Upload de fichiers

**Action** : Intégrer ces marshallers dans le système de specs

### Optimisations possibles

1. **Cache des specs** : Éviter de reparsing à chaque appel
2. **Validation de specs** : Vérifier la cohérence des specs au build
3. **Génération de types** : Générer les types TS à partir des specs
4. **Performance** : Benchmarks avant/après

---

## 📝 Résumé

| Critère | Avant | Après | Gain |
|---------|-------|-------|------|
| Dépendances circulaires | ⚠️ Possibles | ✅ Impossibles | 🎯 |
| Réflexion runtime | ❌ Non | ✅ Oui | 🎯 |
| Lignes de code | ~1250 | ~750 | -40% |
| Maintenabilité | 😐 | 😊 | 🎯 |
| Breaking changes | - | ❌ Aucun (Phase 1) | 🎯 |
| Tests | - | ✅ 30/30 passent | 🎯 |

---

## ✅ Validation

**Phase 1 (POC) : TERMINÉ** ✅

- [x] Interfaces TypeScript
- [x] Fonctions génériques unmarshal/marshal
- [x] Support types complexes
- [x] Tests unitaires (30/30)
- [x] Exemple concret avec Human
- [x] Documentation

**Prêt pour Phase 2** : Modification du générateur protobuf 🚀

---

**Date** : 31 octobre 2025  
**Auteur** : @jonathan
**Status** : ✅ POC validé, prêt pour implémentation complète

