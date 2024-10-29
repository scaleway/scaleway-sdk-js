import { getNames, getTests } from '@vitest/runner/utils';
import '@vitest/utils';

function hasFailedSnapshot(suite) {
  return getTests(suite).some((s) => {
    return s.result?.errors?.some(
      (e) => typeof e?.message === "string" && e.message.match(/Snapshot .* mismatched/)
    );
  });
}
function getFullName(task, separator = " > ") {
  return getNames(task).join(separator);
}
function getTestName(task, separator = " > ") {
  return getNames(task).slice(1).join(separator);
}

export { getFullName as a, getTestName as g, hasFailedSnapshot as h };
