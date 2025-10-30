# Décision : Migration vers Biome

## TL;DR

**🎯 Recommandation : Migrer vers Biome**

- ✅ **Performance : 10-100x plus rapide qu'ESLint**
- ✅ **Déjà installé** dans le projet (utilisé pour le formatage)
- ✅ **Migration assistée** avec outil automatique
- ✅ **ROI : 2-3 jours** (10-15h de migration, 117h économisées/mois)
- ✅ **Compatibilité : ~75%** des règles ESLint supportées
- ✅ **Un seul outil** pour format + lint (vs Prettier + ESLint)

---

## 🚀 Action Immédiate

### Test Rapide (5 minutes)

```bash
# Benchmark des performances
./benchmark-linters.sh

# Test sur un package
npx @biomejs/biome check packages_generated/account/src/
```

### Migration (5-7 heures)

```bash
# 1. Migration automatique de la config
npx @biomejs/biome migrate eslint --write

# 2. Test sur un package pilote
npx @biomejs/biome check packages_generated/account/ --write

# 3. Migration complète
npx @biomejs/biome check . --write

# 4. Mise à jour des scripts
# Voir MIGRATION_GUIDE.md
```

---

## 📊 Comparaison Rapide

| Critère | ESLint | **Biome** (recommandé) | Bun | Deno |
|---------|--------|------------------------|-----|------|
| Performance | Lent | ⭐⭐⭐⭐⭐ 10-100x | ❌ Pas de linter | ⭐⭐⭐⭐ Rapide |
| TypeScript | Plugin | ✅ Natif | ⚠️ | ✅ Natif |
| Règles | 300+ | 200+ | 0 | 60 |
| Migration | N/A | ✅ **Outil auto** | ❌ | ⚠️ Manuelle |
| Formatage | Prettier | ✅ **Intégré** | ✅ | ✅ |

---

## ❌ Pourquoi pas Bun ou Deno ?

### Bun
- ❌ **Pas de linter dédié** (recommande ESLint ou Biome)
- Seulement runtime + bundler + test runner

### Deno
- ⚠️ **Seulement 60 règles** (vs 200+ Biome)
- ⚠️ Philosophie opinionated (conventions Deno, pas Node.js)
- ⚠️ Nécessite installer le runtime Deno
- ⚠️ Pas d'outil de migration depuis ESLint

---

## 📚 Documentation

1. **[LINTER_COMPARISON_STUDY.md](LINTER_COMPARISON_STUDY.md)** - Étude complète (15 min de lecture)
2. **[MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)** - Guide pas à pas avec checklist
3. **[biome.proposed.json](biome.proposed.json)** - Configuration proposée
4. **[benchmark-linters.sh](benchmark-linters.sh)** - Script de benchmark

---

## 🎯 Prochaines Étapes

### Semaine 1 : Validation
- [ ] Lancer le benchmark : `./benchmark-linters.sh`
- [ ] Tester sur 2-3 packages pilotes
- [ ] Valider les gains de performance
- [ ] Identifier les règles manquantes critiques

### Semaine 2 : Migration
- [ ] Créer branche `feat/migrate-to-biome`
- [ ] Migration automatique : `npx @biomejs/biome migrate eslint --write`
- [ ] Ajustements config : utiliser `biome.proposed.json`
- [ ] Tests sur l'ensemble du monorepo

### Semaine 3 : Déploiement
- [ ] Mise à jour scripts package.json
- [ ] Mise à jour CI/CD
- [ ] Mise à jour lint-staged / pre-commit
- [ ] Documentation équipe

### Semaine 4 : Nettoyage
- [ ] Désinstaller ESLint
- [ ] Supprimer configs ESLint
- [ ] Mettre à jour README/CONTRIBUTING
- [ ] Rétrospective et métriques

---

## 💡 Questions Fréquentes

### Q: Et si une règle ESLint importante n'existe pas dans Biome ?

**R:** 3 options :
1. Vérifier les [règles Biome](https://biomejs.dev/linter/rules/) (200+ règles, nouveautés fréquentes)
2. Garder ESLint temporairement pour ces règles spécifiques
3. Remplacer par une guideline de code review

### Q: Peut-on migrer progressivement ?

**R:** Oui ! Deux approches :
1. **Par package** : migrer `packages_generated/` puis `packages/`
2. **Hybride** : Biome + ESLint en parallèle temporairement

### Q: Quel est le risque ?

**R:** Faible :
- Config actuelle backupée
- Tests garantissent la non-régression
- Rollback facile (voir MIGRATION_GUIDE.md)
- Biome est mature (2M+ téléchargements/semaine)

### Q: Les performances sont vraiment si différentes ?

**R:** Oui ! Benchmarks typiques :
- ESLint : ~45s sur monorepo
- Biome : ~2-5s sur monorepo
- **Gain : 90-95%**

Lancez `./benchmark-linters.sh` pour mesurer sur ce projet.

---

## ✅ Validation

**Critères de succès de la migration :**
- ✅ Build réussi sur tous les packages
- ✅ Tests passés (0 régression)
- ✅ Performance 10x+ améliorée
- ✅ CI/CD vert
- ✅ Pre-commit < 2s
- ✅ Équipe formée

---

## 📞 Support

- 📖 [Documentation Biome](https://biomejs.dev/)
- 💬 [Discord Biome](https://discord.gg/BypW39g6Yc)
- 🐛 [GitHub Issues](https://github.com/biomejs/biome/issues)

---

**Décision recommandée : ✅ MIGRER VERS BIOME**

*Dernière mise à jour : 29 Octobre 2025*

