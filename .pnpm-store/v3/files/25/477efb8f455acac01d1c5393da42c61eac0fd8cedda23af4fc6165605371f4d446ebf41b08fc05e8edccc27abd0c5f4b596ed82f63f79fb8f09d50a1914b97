import v8 from 'node:v8';
import { c as createForksRpcOptions, u as unwrapSerializableConfig } from '../chunks/utils.C3_cBsyn.js';
import { r as runVmTests } from '../chunks/vm.DcSuuaHr.js';
import '@vitest/utils';
import 'node:vm';
import 'node:url';
import 'pathe';
import '../chunks/console.Bgn7_A1x.js';
import 'node:stream';
import 'node:console';
import 'node:path';
import 'tinyrainbow';
import '../chunks/date.W2xKR2qe.js';
import '@vitest/runner/utils';
import '../chunks/utils.Ck2hJTRs.js';
import '../chunks/env.BU041cs9.js';
import 'std-env';
import '../chunks/execute.Cjlr2CRw.js';
import 'node:fs';
import 'vite-node/client';
import 'vite-node/utils';
import '@vitest/utils/error';
import '../path.js';
import '../chunks/base.DSsbfkDg.js';
import 'node:module';
import 'vite-node/constants';

class ForksVmWorker {
  getRpcOptions() {
    return createForksRpcOptions(v8);
  }
  async executeTests(method, state) {
    const exit = process.exit;
    state.ctx.config = unwrapSerializableConfig(state.ctx.config);
    try {
      await runVmTests(method, state);
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
var vmForks = new ForksVmWorker();

export { vmForks as default };
