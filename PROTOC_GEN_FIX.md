# Fix pour protoc-gen-sdk-ts : Filtrer les exports invalides dans index.gen.ts

## Problème

Le fichier `index.gen.ts` exporte des types qui n'existent pas dans `types.gen.ts`, causant des erreurs de compilation TypeScript.

## Cause

Le template `index.ts.tmpl` utilise `.PublicMessages` qui retourne tous les messages publics, mais certains messages peuvent ne pas être générés dans `types.gen.ts` à cause de filtres comme `ShouldGenerateMessage()`.

## Solution

Ajouter une méthode `GeneratedPublicMessages()` qui filtre les messages en utilisant `ShouldGenerateMessage()`.

## Modifications à apporter

### 1. Ajouter la méthode dans `plugin.go`

Ajouter cette méthode après `MessagesAndEnumsByName` (vers la ligne 263) :

```go
// GeneratedPublicMessages returns only messages that will actually be generated in types.gen.ts
func (m *FileModifier) GeneratedPublicMessages() []*protocgencore.Message {
	pluginConfig := &PluginConfiguration{}
	return lo.Filter(m.PublicMessages(), func(message *protocgencore.Message, _ int) bool {
		shouldGenerate, _ := pluginConfig.ShouldGenerateMessage(message)
		return shouldGenerate
	})
}
```

**Note** : Cette méthode utilise une nouvelle instance de `PluginConfiguration` pour appeler `ShouldGenerateMessage()`. Si `ShouldGenerateMessage()` nécessite un état partagé, il faudra peut-être passer `PluginConfiguration` à `FileModifier` ou utiliser une autre approche.

### 2. Modifier le template `templates/index.ts.tmpl`

Remplacer la ligne 18 :

```go
{{- range $messageOrEnum := (.MessagesAndEnumsByName .PublicMessages .Enums) }}
```

Par :

```go
{{- range $messageOrEnum := (.MessagesAndEnumsByName .GeneratedPublicMessages .Enums) }}
```

## Fichiers à modifier

1. `/Users/jonathanremy/Desktop/protoc-gen/internal/protoc-gen-sdk-ts/plugin.go`

   - Ajouter la méthode `GeneratedPublicMessages()` après `MessagesAndEnumsByName`

2. `/Users/jonathanremy/Desktop/protoc-gen/internal/protoc-gen-sdk-ts/templates/index.ts.tmpl`
   - Remplacer `.PublicMessages` par `.GeneratedPublicMessages` à la ligne 18

## Tests

Après modification, tester avec :

- Les packages `product_catalog` et `webhosting` qui avaient des problèmes
- Vérifier que tous les exports dans `index.gen.ts` existent dans `types.gen.ts`
