import { C as COVERAGE_STORE_KEY } from './constants-BCJfMgEg.js';

async function getProvider() {
  const providerPath = "./provider.js";
  const { IstanbulCoverageProvider } = await import(
    /* @vite-ignore */
    providerPath
  );
  return new IstanbulCoverageProvider();
}
function takeCoverage() {
  const coverage = globalThis[COVERAGE_STORE_KEY];
  globalThis[COVERAGE_STORE_KEY] = {};
  return coverage;
}
const _default = {
  getProvider,
  takeCoverage
};

export { _default as default, getProvider, takeCoverage };
