import v8 from 'node:v8';
import { c as createForksRpcOptions, u as unwrapSerializableConfig } from '../chunks/utils.C3_cBsyn.js';
import { r as runBaseTests } from '../chunks/base.CC5R_kgU.js';
import '@vitest/utils';
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
import '../chunks/base.DSsbfkDg.js';

class ForksBaseWorker {
  getRpcOptions() {
    return createForksRpcOptions(v8);
  }
  async executeTests(method, state) {
    const exit = process.exit;
    state.ctx.config = unwrapSerializableConfig(state.ctx.config);
    try {
      await runBaseTests(method, state);
    } finally {
      process.exit = exit;
    }
  }
  runTests(state) {
    return this.executeTests("run", state);
  }
  collectTests(state) {
    return this.executeTests("collect", state);
  }
}
var forks = new ForksBaseWorker();

export { forks as default };
