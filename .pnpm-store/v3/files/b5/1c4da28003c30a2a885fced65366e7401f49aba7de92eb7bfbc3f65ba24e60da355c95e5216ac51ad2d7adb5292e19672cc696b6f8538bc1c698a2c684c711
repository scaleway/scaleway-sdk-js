import { r as runBaseTests } from '../chunks/base.CC5R_kgU.js';
import { a as createThreadsRpcOptions } from '../chunks/utils.C3_cBsyn.js';
import 'vite-node/client';
import '../chunks/utils.Ck2hJTRs.js';
import '../chunks/execute.Cjlr2CRw.js';
import 'node:vm';
import 'node:url';
import 'node:fs';
import 'vite-node/utils';
import 'pathe';
import '@vitest/utils/error';
import '../path.js';
import '@vitest/utils';
import '../chunks/base.DSsbfkDg.js';

class ThreadsBaseWorker {
  getRpcOptions(ctx) {
    return createThreadsRpcOptions(ctx);
  }
  runTests(state) {
    return runBaseTests("run", state);
  }
  collectTests(state) {
    return runBaseTests("collect", state);
  }
}
var threads = new ThreadsBaseWorker();

export { threads as default };
