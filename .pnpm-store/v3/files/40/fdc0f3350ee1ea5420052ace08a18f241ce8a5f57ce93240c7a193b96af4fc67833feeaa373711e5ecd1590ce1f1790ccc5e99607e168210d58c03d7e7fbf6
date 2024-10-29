"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbConnection = getDbConnection;
const native_1 = require("../native");
const cache_directory_1 = require("./cache-directory");
const package_json_1 = require("../../package.json");
const dbConnectionMap = new Map();
function getDbConnection(opts = {}) {
    opts.directory ??= cache_directory_1.workspaceDataDirectory;
    const key = `${opts.directory}:${opts.dbName ?? 'default'}`;
    const connection = getEntryOrSet(dbConnectionMap, key, () => (0, native_1.connectToNxDb)(opts.directory, package_json_1.version, opts.dbName));
    return connection;
}
function getEntryOrSet(map, key, defaultValue) {
    const existing = map.get(key);
    if (existing) {
        return existing;
    }
    const val = defaultValue();
    map.set(key, val);
    return val;
}
