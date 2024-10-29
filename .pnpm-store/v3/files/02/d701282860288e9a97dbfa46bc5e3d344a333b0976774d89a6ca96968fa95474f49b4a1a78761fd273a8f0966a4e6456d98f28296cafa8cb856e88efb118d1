import { relative } from 'pathe';
import '@vitest/runner/utils';
import '@vitest/utils';
import { g as getWorkerState } from './utils.Ck2hJTRs.js';
import './env.BU041cs9.js';

function getRunMode() {
  return getWorkerState().config.mode;
}
function isRunningInBenchmark() {
  return getRunMode() === "benchmark";
}
const relativePath = relative;
function removeUndefinedValues(obj) {
  for (const key in Object.keys(obj)) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}

export { removeUndefinedValues as a, isRunningInBenchmark as i, relativePath as r };
