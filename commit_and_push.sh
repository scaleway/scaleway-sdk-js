#!/usr/bin/env bash

#####################################################################
# Script pour committer et pusher les changements                   #
# du nouveau script setupNewProducts.ts                             #
#####################################################################

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Commit & Push: New Products Setup Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Vérifier qu'on est dans le bon répertoire
if [ ! -f "package.json" ] || [ ! -d "scripts" ]; then
  echo "❌ Erreur: Ce script doit être exécuté depuis la racine du repo scaleway-sdk-js"
  exit 1
fi

echo "📝 Fichiers modifiés:"
git status --short

echo ""
echo "📦 Changements à committer:"
echo "  1. Nouveau script scripts/setupNewProducts.ts"
echo "  2. Script ajouté au package.json"
echo "  3. Commande ajoutée au Makefile"
echo "  4. Documentation ajoutée (scripts/README.md)"
echo ""

read -p "Voulez-vous voir le diff ? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  git diff
fi

echo ""
read -p "Committer ces changements ? (y/N) " -n 1 -r
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Annulé"
  exit 0
fi

# Ajouter les fichiers modifiés
echo "📝 Ajout des fichiers..."
git add scripts/setupNewProducts.ts
git add scripts/README.md
git add package.json
git add Makefile

echo "✅ Fichiers ajoutés"

# Commit
echo ""
echo "💾 Commit..."
git commit -S -m "feat: add automatic new products setup script

- Add scripts/setupNewProducts.ts for automatic detection & config
- Detects new products (have .gen.ts but no package.json)
- Generates config files (package.json, tsconfig, vite.config)
- Updates packages/sdk/package.json with new dependencies
- Runs generateAlias to update SDK exports
- Updates pnpm-lock.yaml
- Add Makefile command: make setup-new-products
- Add comprehensive documentation in scripts/README.md

Benefits:
- Fully automatic: no manual steps needed
- Supports both @scaleway and @scaleway-internal scopes
- Includes dry-run mode for testing
- Called automatically from pipeline
- Testable locally"

echo "✅ Commit créé avec succès"

echo ""
read -p "Pusher sur origin ? (y/N) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  echo "📤 Push sur origin/$BRANCH..."
  git push origin "$BRANCH"
  echo "✅ Push réussi"
else
  echo "ℹ️  Push annulé. Vous pouvez pusher plus tard avec:"
  echo "   git push origin $(git rev-parse --abbrev-ref HEAD)"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Terminé !"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Prochaines étapes:"
echo "  1. Tester localement avec: make setup-new-products --dry-run"
echo "  2. Vérifier que le pipeline l'appelle correctement"
echo ""


