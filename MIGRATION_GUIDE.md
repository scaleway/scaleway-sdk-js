# Guide de Migration ESLint → Biome

## 🎯 Objectif

Migrer de ESLint vers Biome pour obtenir un gain de performance de 10-100x tout en maintenant la qualité du code.

---

## ✅ Checklist de Migration

### Étape 1 : Backup et Préparation

- [ ] Commit tous les changements en cours
- [ ] Créer une branche de migration : `git checkout -b feat/migrate-to-biome`
- [ ] Backup de la config actuelle : `cp eslint.config.mjs eslint.config.mjs.backup`

### Étape 2 : Test de Biome (Sans Toucher à ESLint)

```bash
# Tester le linter Biome sur un petit package
npx @biomejs/biome check packages_generated/account/src/ --verbose

# Voir les différences avec la config proposée
cp biome.proposed.json biome.test.json
npx @biomejs/biome check packages_generated/account/src/ --config-path=biome.test.json
```

**🔍 À vérifier :**
- Nombre d'erreurs détectées
- Types d'erreurs (comparer avec ESLint)
- Temps d'exécution

### Étape 3 : Migration Progressive

#### Option A : Migration Automatique (Recommandée en premier)

```bash
# Biome va lire votre eslint.config.mjs et générer la config
npx @biomejs/biome migrate eslint --write

# Cela va modifier votre biome.json
# Comparer avec biome.proposed.json
```

#### Option B : Migration Manuelle (Plus de contrôle)

```bash
# Remplacer biome.json par la version proposée
cp biome.proposed.json biome.json
```

### Étape 4 : Test sur un Package Pilote

```bash
# Choisir un petit package généré comme pilote
cd packages_generated/account

# Lancer Biome
npx @biomejs/biome check src/ --write

# Comparer avec ESLint
pnpm eslint src/

# Vérifier que le build passe
pnpm build

# Vérifier que les tests passent
pnpm test
```

**✅ Critères de validation :**
- Build réussi
- Tests passés
- Nombre d'erreurs Biome ≈ nombre d'erreurs ESLint (±10%)
- Code formaté correctement

### Étape 5 : Mise à Jour des Scripts

```json
// package.json (root)
{
  "scripts": {
    // Ancien (à commenter temporairement)
    // "lint": "eslint --cache .",
    
    // Nouveau
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "lint:ci": "biome ci .",
    "format": "biome format --write .",
    "check": "biome check --write ."
  }
}
```

### Étape 6 : Mise à Jour lint-staged

```json
// package.json (root)
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx,json}": [
      "biome check --write --no-errors-on-unmatched --files-ignore-unknown=true"
    ],
    "*.y?(a)ml": [
      "prettier --write"
    ],
    "*.md?(x)": [
      "prettier --write"
    ]
  }
}
```

### Étape 7 : Test Pre-commit Hook

```bash
# Faire un petit changement
echo "// test" >> packages/client/src/index.ts

# Tester le hook
git add packages/client/src/index.ts
git commit -m "test: biome pre-commit hook"

# Vérifier que Biome s'est exécuté
# Revenir en arrière
git reset HEAD~1
git checkout packages/client/src/index.ts
```

### Étape 8 : Migration Complète du Monorepo

```bash
# Lancer Biome sur tout le projet
npx @biomejs/biome check . --write

# Vérifier les erreurs restantes
npx @biomejs/biome check .

# Commit les changements de formatage
git add -A
git commit -S -m "style: apply biome formatting"
```

### Étape 9 : Mise à Jour CI/CD

#### GitHub Actions (exemple)

```yaml
# .github/workflows/lint.yml
name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Run Biome
        run: pnpm biome ci .
```

### Étape 10 : Nettoyage ESLint

⚠️ **ATTENTION : Faire cette étape en dernier, après validation complète**

```bash
# Supprimer les dépendances ESLint
pnpm remove -W eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  @scaleway/eslint-config-react \
  eslint-plugin-tsdoc \
  eslint-plugin-unused-imports \
  eslint-plugin-import

# Supprimer les fichiers de config
rm eslint.config.mjs
rm eslint.config.generated.mjs
rm .eslintignore
rm -rf .eslintcache

# Commit
git add package.json pnpm-lock.yaml
git commit -S -m "chore: remove eslint dependencies"
```

### Étape 11 : Mise à Jour de la Documentation

- [ ] Mettre à jour `README.md` avec les nouvelles commandes
- [ ] Mettre à jour `CONTRIBUTING.md`
- [ ] Documenter les extensions VS Code recommandées
- [ ] Mettre à jour les instructions d'installation

#### Extensions VS Code recommandées

```json
// .vscode/extensions.json
{
  "recommendations": [
    "biomejs.biome"
  ],
  "unwantedRecommendations": [
    "dbaeumer.vscode-eslint"
  ]
}
```

#### Configuration VS Code

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "never"
  },
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[json]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}
```

---

## 🐛 Troubleshooting

### Problème : Trop d'erreurs après migration

**Solution :** Commencer avec une config plus permissive

```json
{
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": false,
      "correctness": {
        "noUnusedVariables": "warn"
      }
    }
  }
}
```

Puis activer progressivement plus de règles.

### Problème : Règle ESLint importante non supportée

**Solutions :**
1. Vérifier si une règle équivalente existe dans Biome
2. Maintenir ESLint uniquement pour cette règle
3. Créer une règle custom Biome (avancé)
4. Remplacer par une review manuelle

### Problème : Performance pas améliorée

**Vérifications :**
- Biome est bien utilisé (pas ESLint) : `which biome`
- Pas de fichiers trop larges ignorés
- Cache activé
- Pas de fichiers node_modules inclus par erreur

### Problème : Import sorting different

```json
{
  "assist": {
    "actions": {
      "source": {
        "organizeImports": {
          "enabled": false
        }
      }
    }
  }
}
```

Désactiver le tri automatique des imports si cela crée trop de diff.

---

## 📊 Métriques de Succès

### Performance

Mesurer les temps avant/après :

```bash
# ESLint
time pnpm eslint .

# Biome
time pnpm biome check .
```

**Objectif : 10x plus rapide minimum**

### Qualité

```bash
# Compter les erreurs détectées
pnpm biome check . 2>&1 | grep "errors"
```

**Objectif : Même niveau de détection (±10%)**

### DX (Developer Experience)

- [ ] Pre-commit hook < 2s
- [ ] CI lint < 5s
- [ ] Feedback IDE instantané
- [ ] Messages d'erreur clairs

---

## 🎉 Validation Finale

- [ ] ✅ Tous les packages buildent
- [ ] ✅ Tous les tests passent
- [ ] ✅ CI/CD vert
- [ ] ✅ Pre-commit hook fonctionne
- [ ] ✅ Performance 10x améliorée
- [ ] ✅ Équipe formée sur Biome
- [ ] ✅ Documentation à jour
- [ ] ✅ ESLint désinstallé

---

## 📞 Support

En cas de problème, consulter :
- [Documentation Biome](https://biomejs.dev/)
- [Guide de migration officiel](https://biomejs.dev/guides/migrate-eslint/)
- [Discord Biome](https://discord.gg/BypW39g6Yc)
- L'étude comparative : `LINTER_COMPARISON_STUDY.md`

---

## 🔄 Rollback en Cas de Problème

```bash
# Revenir à ESLint
git checkout main -- eslint.config.mjs package.json pnpm-lock.yaml biome.json

# Réinstaller les dépendances
pnpm install

# Restaurer les scripts
# (éditer package.json manuellement)
```

---

## ⏱️ Timeline Estimée

- **Étapes 1-2 (Test)** : 30 min
- **Étapes 3-4 (Pilote)** : 1h
- **Étapes 5-8 (Migration)** : 2-3h
- **Étapes 9-11 (Finalisation)** : 1-2h

**Total : 5-7 heures de travail**

**ROI : Rentabilisé en 2-3 jours avec 10 développeurs**

