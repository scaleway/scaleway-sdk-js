"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esbuildPluginBrowserslist = exports.resolveToEsbuildTarget = void 0;
const resolveToEsbuildTarget_1 = require("./resolveToEsbuildTarget");
const util_1 = require("./util");
const resolveToEsbuildTarget = (browserlist, opts) => {
    const printUnknownTargets = opts?.printUnknownTargets ?? true;
    return (0, resolveToEsbuildTarget_1.resolveToEsbuildTarget)(browserlist, printUnknownTargets ? util_1.log : util_1.dbg).map(({ target, version }) => `${target}${version}`);
};
exports.resolveToEsbuildTarget = resolveToEsbuildTarget;
const esbuildPluginBrowserslist = (browserlist, opts) => ({
    name: util_1.PLUGIN_NAME,
    setup(build) {
        const esbuildOptions = build.initialOptions;
        if (esbuildOptions.target !== undefined) {
            (0, util_1.dbg)("Got esbuildOptions.target=%s, expected=<falsey>", esbuildOptions.target);
            throw new Error(`${util_1.PLUGIN_NAME} cannot be used with a set target`);
        }
        const resolvedTargets = (0, exports.resolveToEsbuildTarget)(browserlist, opts);
        (0, util_1.dbg)("Resolved targets: %j", resolvedTargets);
        esbuildOptions.target = resolvedTargets;
    },
});
exports.esbuildPluginBrowserslist = esbuildPluginBrowserslist;
//# sourceMappingURL=index.js.map