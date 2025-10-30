#!/usr/bin/env bash

# Script de benchmark : ESLint vs Biome
# Compare les performances des deux linters sur le projet

set -e

# Couleurs pour l'output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "=========================================="
echo "🚀 Benchmark: ESLint vs Biome"
echo "=========================================="
echo ""

# Fonction pour mesurer le temps d'exécution
measure_time() {
  local start=$(date +%s.%N)
  "$@" > /dev/null 2>&1 || true
  local end=$(date +%s.%N)
  local duration=$(echo "$end - $start" | bc)
  echo "$duration"
}

# Fonction pour formatter le temps
format_time() {
  local time=$1
  printf "%.2f" "$time"
}

# Fonction pour calculer le gain
calculate_gain() {
  local old=$1
  local new=$2
  local gain=$(echo "scale=1; (($old - $new) / $old) * 100" | bc)
  echo "$gain"
}

echo "📦 Test sur un package pilote : packages_generated/account"
echo ""

# Test 1 : Lint d'un package
echo "Test 1: Lint d'un package (account)"
echo "-----------------------------------"

if command -v eslint &> /dev/null; then
  echo -n "⏱️  ESLint... "
  ESLINT_PKG_TIME=$(measure_time npx eslint packages_generated/account/src/)
  echo -e "${BLUE}$(format_time $ESLINT_PKG_TIME)s${NC}"
else
  echo -e "${YELLOW}⚠️  ESLint non installé${NC}"
  ESLINT_PKG_TIME=0
fi

echo -n "⏱️  Biome... "
BIOME_PKG_TIME=$(measure_time npx @biomejs/biome check packages_generated/account/src/)
echo -e "${BLUE}$(format_time $BIOME_PKG_TIME)s${NC}"

if (( $(echo "$ESLINT_PKG_TIME > 0" | bc -l) )); then
  GAIN_PKG=$(calculate_gain $ESLINT_PKG_TIME $BIOME_PKG_TIME)
  echo -e "${GREEN}✅ Gain: ${GAIN_PKG}% plus rapide${NC}"
  SPEEDUP=$(echo "scale=1; $ESLINT_PKG_TIME / $BIOME_PKG_TIME" | bc)
  echo -e "${GREEN}📊 Biome est ${SPEEDUP}x plus rapide${NC}"
fi

echo ""

# Test 2 : Lint du monorepo complet
echo "Test 2: Lint du monorepo complet"
echo "-----------------------------------"

if command -v eslint &> /dev/null; then
  echo -n "⏱️  ESLint (full)... "
  ESLINT_FULL_TIME=$(measure_time npx eslint --cache .)
  echo -e "${BLUE}$(format_time $ESLINT_FULL_TIME)s${NC}"
else
  echo -e "${YELLOW}⚠️  ESLint non installé${NC}"
  ESLINT_FULL_TIME=0
fi

echo -n "⏱️  Biome (full)... "
BIOME_FULL_TIME=$(measure_time npx @biomejs/biome check .)
echo -e "${BLUE}$(format_time $BIOME_FULL_TIME)s${NC}"

if (( $(echo "$ESLINT_FULL_TIME > 0" | bc -l) )); then
  GAIN_FULL=$(calculate_gain $ESLINT_FULL_TIME $BIOME_FULL_TIME)
  echo -e "${GREEN}✅ Gain: ${GAIN_FULL}% plus rapide${NC}"
  SPEEDUP_FULL=$(echo "scale=1; $ESLINT_FULL_TIME / $BIOME_FULL_TIME" | bc)
  echo -e "${GREEN}📊 Biome est ${SPEEDUP_FULL}x plus rapide${NC}"
fi

echo ""

# Test 3 : Lint avec auto-fix
echo "Test 3: Lint avec auto-fix"
echo "-----------------------------------"

# Créer un fichier de test temporaire
TEST_FILE="packages_generated/account/src/test-benchmark.ts"
cat > "$TEST_FILE" << 'EOF'
export const test = ( ) => {
  const unused = 123
  let x = 1
  return x
}
EOF

if command -v eslint &> /dev/null; then
  echo -n "⏱️  ESLint --fix... "
  ESLINT_FIX_TIME=$(measure_time npx eslint --fix "$TEST_FILE")
  echo -e "${BLUE}$(format_time $ESLINT_FIX_TIME)s${NC}"
else
  echo -e "${YELLOW}⚠️  ESLint non installé${NC}"
  ESLINT_FIX_TIME=0
fi

# Restaurer le fichier
cat > "$TEST_FILE" << 'EOF'
export const test = ( ) => {
  const unused = 123
  let x = 1
  return x
}
EOF

echo -n "⏱️  Biome check --write... "
BIOME_FIX_TIME=$(measure_time npx @biomejs/biome check --write "$TEST_FILE")
echo -e "${BLUE}$(format_time $BIOME_FIX_TIME)s${NC}"

# Nettoyer
rm -f "$TEST_FILE"

if (( $(echo "$ESLINT_FIX_TIME > 0" | bc -l) )); then
  GAIN_FIX=$(calculate_gain $ESLINT_FIX_TIME $BIOME_FIX_TIME)
  echo -e "${GREEN}✅ Gain: ${GAIN_FIX}% plus rapide${NC}"
  SPEEDUP_FIX=$(echo "scale=1; $ESLINT_FIX_TIME / $BIOME_FIX_TIME" | bc)
  echo -e "${GREEN}📊 Biome est ${SPEEDUP_FIX}x plus rapide${NC}"
fi

echo ""

# Récapitulatif
echo "=========================================="
echo "📊 RÉCAPITULATIF"
echo "=========================================="
echo ""

if (( $(echo "$ESLINT_PKG_TIME > 0" | bc -l) )); then
  echo "Package (account):"
  echo "  ESLint: $(format_time $ESLINT_PKG_TIME)s"
  echo "  Biome:  $(format_time $BIOME_PKG_TIME)s"
  echo -e "  ${GREEN}Gain: ${SPEEDUP}x plus rapide${NC}"
  echo ""
fi

if (( $(echo "$ESLINT_FULL_TIME > 0" | bc -l) )); then
  echo "Monorepo complet:"
  echo "  ESLint: $(format_time $ESLINT_FULL_TIME)s"
  echo "  Biome:  $(format_time $BIOME_FULL_TIME)s"
  echo -e "  ${GREEN}Gain: ${SPEEDUP_FULL}x plus rapide${NC}"
  echo ""
fi

if (( $(echo "$ESLINT_FIX_TIME > 0" | bc -l) )); then
  echo "Auto-fix:"
  echo "  ESLint: $(format_time $ESLINT_FIX_TIME)s"
  echo "  Biome:  $(format_time $BIOME_FIX_TIME)s"
  echo -e "  ${GREEN}Gain: ${SPEEDUP_FIX}x plus rapide${NC}"
  echo ""
fi

# Estimation des gains pour l'équipe
if (( $(echo "$ESLINT_FULL_TIME > 0" | bc -l) )); then
  echo "💰 Estimation des gains pour l'équipe:"
  echo ""
  
  # Calculs
  GAIN_PER_LINT=$(echo "$ESLINT_FULL_TIME - $BIOME_FULL_TIME" | bc)
  LINTS_PER_DAY=50
  DEVS=10
  DAYS_PER_MONTH=20
  
  GAIN_PER_DAY=$(echo "$GAIN_PER_LINT * $LINTS_PER_DAY" | bc)
  GAIN_PER_DEV_MONTH=$(echo "$GAIN_PER_DAY * $DAYS_PER_MONTH / 60" | bc) # en minutes
  GAIN_TEAM_MONTH=$(echo "$GAIN_PER_DEV_MONTH * $DEVS / 60" | bc) # en heures
  
  echo "  Par lint: $(format_time $GAIN_PER_LINT)s économisés"
  echo "  Par jour (${LINTS_PER_DAY} lints): $(format_time $GAIN_PER_DAY)s = $(echo "scale=1; $GAIN_PER_DAY / 60" | bc) minutes"
  echo "  Par dev/mois: $(format_time $GAIN_PER_DEV_MONTH) minutes"
  echo "  Pour l'équipe (${DEVS} devs/mois): $(format_time $GAIN_TEAM_MONTH) heures"
  echo ""
fi

echo "=========================================="
echo -e "${GREEN}✅ Benchmark terminé !${NC}"
echo "=========================================="
echo ""
echo "📖 Pour migrer vers Biome, consultez:"
echo "   - LINTER_COMPARISON_STUDY.md (étude complète)"
echo "   - MIGRATION_GUIDE.md (guide pas à pas)"
echo "   - biome.proposed.json (config proposée)"

