"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveToEsbuildTarget = void 0;
const zod_1 = require("zod");
const types_1 = require("./types");
const util_1 = require("./util");
const BrowserSchema = zod_1.z.nativeEnum(types_1.BrowserslistKind);
/** 123 or 123.456 or 123.456.789 */
const VersionSchema = zod_1.z.string().regex(/^(\d+\.\d+\.\d+|\d+\.\d+|\d+)$/);
const resolveToEsbuildTarget = (browserlist, logFn) => {
    const targets = browserlist
        .map((entry) => {
        const [rawBrowser, rawVersionOrRange] = entry.split(" ");
        const rawVersionNormalized = rawVersionOrRange
            // e.g. 13.4-13.7, take the lower range
            ?.replace(/-[\d.]+$/, "")
            // all => replace with 1
            .replace("all", "1");
        const browserResult = BrowserSchema.safeParse(rawBrowser);
        const versionResult = VersionSchema.safeParse(rawVersionNormalized);
        (0, util_1.dbg)("Got result for entry=%s: %j", entry, {
            rawBrowser,
            rawVersionOrRange,
            rawVersionNormalized,
            browserResult,
            versionResult,
        });
        if (!browserResult.success || !versionResult.success) {
            logFn(`Could not parse Browserslist result to a meaningful format. entry=${entry}`);
            return undefined;
        }
        const { data: browser } = browserResult;
        const { data: version } = versionResult;
        const esbuildTarget = types_1.BrowserslistEsbuildMapping[browser];
        (0, util_1.dbg)("Got target for entry=%s: %s", entry, esbuildTarget);
        if (esbuildTarget === undefined) {
            logFn(`Skipping unknown target: entry=${entry}, browser=${browser}, version=${version}`);
            return undefined;
        }
        return { target: esbuildTarget, version };
    })
        .filter((x) => x != null);
    if (targets.length === 0) {
        throw new Error("Could not resolve any esbuild targets");
    }
    return targets;
};
exports.resolveToEsbuildTarget = resolveToEsbuildTarget;
//# sourceMappingURL=resolveToEsbuildTarget.js.map