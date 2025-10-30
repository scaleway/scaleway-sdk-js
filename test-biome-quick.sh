#!/usr/bin/env bash

# Script de test rapide pour Biome
# Teste Biome sur un petit échantillon sans modifier les fichiers

set -e

echo "=========================================="
echo "🧪 Test Rapide de Biome"
echo "=========================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Vérifier que Biome est installé
if ! command -v npx &> /dev/null; then
    echo -e "${YELLOW}⚠️  npx non trouvé. Installez Node.js.${NC}"
    exit 1
fi

echo "1️⃣  Test sur un petit package (account)"
echo "-----------------------------------"
echo ""

# Test sans modification
echo "📋 Analyse (sans modification) :"
npx @biomejs/biome check packages_generated/account/src/ --max-diagnostics=20 || true

echo ""
echo "-----------------------------------"
echo ""

echo "2️⃣  Statistiques du projet"
echo "-----------------------------------"
echo ""

# Compter les fichiers TypeScript
TS_FILES=$(find packages_generated packages -name "*.ts" ! -name "*.gen.ts" ! -path "*/node_modules/*" ! -path "*/dist/*" 2>/dev/null | wc -l | tr -d ' ')
echo "📊 Fichiers TypeScript : ${TS_FILES}"

# Compter les packages
PACKAGES=$(find packages_generated -maxdepth 1 -type d ! -name "packages_generated" 2>/dev/null | wc -l | tr -d ' ')
echo "📦 Packages générés : ${PACKAGES}"

echo ""
echo "-----------------------------------"
echo ""

echo "3️⃣  Comparaison des configs"
echo "-----------------------------------"
echo ""

echo "Config actuelle (formatage uniquement) :"
if [ -f "biome.json" ]; then
    echo -e "${BLUE}✓ biome.json trouvé${NC}"
    LINTER_ENABLED=$(grep -A1 '"linter"' biome.json | grep '"enabled"' | grep -o 'true\|false' || echo "false")
    echo "  Linter activé : ${LINTER_ENABLED}"
else
    echo -e "${YELLOW}✗ biome.json non trouvé${NC}"
fi

echo ""
echo "Config proposée (formatage + linting) :"
if [ -f "biome.proposed.json" ]; then
    echo -e "${GREEN}✓ biome.proposed.json trouvé${NC}"
    LINTER_ENABLED_PROPOSED=$(grep -A1 '"linter"' biome.proposed.json | grep '"enabled"' | grep -o 'true\|false' || echo "false")
    echo "  Linter activé : ${LINTER_ENABLED_PROPOSED}"
else
    echo -e "${YELLOW}✗ biome.proposed.json non trouvé${NC}"
fi

echo ""
echo "-----------------------------------"
echo ""

echo "4️⃣  Test avec la config proposée"
echo "-----------------------------------"
echo ""

if [ -f "biome.proposed.json" ]; then
    echo "📋 Test avec biome.proposed.json (avec linter activé) :"
    npx @biomejs/biome check packages_generated/account/src/ --config-path=biome.proposed.json --max-diagnostics=20 || true
else
    echo -e "${YELLOW}⚠️  biome.proposed.json non trouvé. Utilisez la config par défaut.${NC}"
fi

echo ""
echo "=========================================="
echo "✅ Test terminé !"
echo "=========================================="
echo ""

echo "📚 Prochaines étapes :"
echo ""
echo "1. Lire la décision : LINTER_DECISION.md"
echo "2. Voir l'étude complète : LINTER_COMPARISON_STUDY.md"
echo "3. Lancer le benchmark : ./benchmark-linters.sh"
echo "4. Migrer : MIGRATION_GUIDE.md"
echo ""

echo "💡 Pour tester avec modifications (format + lint) :"
echo "   npx @biomejs/biome check packages_generated/account/ --write --config-path=biome.proposed.json"
echo ""

