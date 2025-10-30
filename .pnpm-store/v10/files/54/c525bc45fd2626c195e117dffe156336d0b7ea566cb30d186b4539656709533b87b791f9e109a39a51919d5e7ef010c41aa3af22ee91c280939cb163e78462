"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldUseLegacyVersioning = shouldUseLegacyVersioning;
function shouldUseLegacyVersioning(releaseConfig) {
    return process.env.NX_INTERNAL_USE_LEGACY_VERSIONING === 'false'
        ? false
        : // TODO(v21): switch this to false by default in Nx v21 and remove this function in v22
            releaseConfig?.version?.useLegacyVersioning ?? true;
}
