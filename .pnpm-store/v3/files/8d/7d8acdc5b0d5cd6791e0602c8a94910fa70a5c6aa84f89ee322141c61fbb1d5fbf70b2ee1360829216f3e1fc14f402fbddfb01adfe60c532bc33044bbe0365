"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackagesInPackageManagerWorkspace = getPackagesInPackageManagerWorkspace;
exports.needsInstall = needsInstall;
const package_manager_1 = require("../../../utils/package-manager");
const workspace_root_1 = require("../../../utils/workspace-root");
const package_json_1 = require("../../../plugins/package-json");
const workspace_context_1 = require("../../../utils/workspace-context");
async function getPackagesInPackageManagerWorkspace(packageManager) {
    if (!(0, package_manager_1.isWorkspacesEnabled)(packageManager, workspace_root_1.workspaceRoot)) {
        return new Set();
    }
    const patterns = (0, package_json_1.getGlobPatternsFromPackageManagerWorkspaces)(workspace_root_1.workspaceRoot);
    return new Set(await (0, workspace_context_1.globWithWorkspaceContext)(workspace_root_1.workspaceRoot, patterns));
}
async function needsInstall(packageManager, originalPackagesInPackageManagerWorkspaces) {
    if (!(0, package_manager_1.isWorkspacesEnabled)(packageManager, workspace_root_1.workspaceRoot)) {
        return false;
    }
    const updatedPackagesInPackageManagerWorkspaces = await getPackagesInPackageManagerWorkspace(packageManager);
    if (updatedPackagesInPackageManagerWorkspaces.size !==
        originalPackagesInPackageManagerWorkspaces.size) {
        return true;
    }
    for (const pkg of updatedPackagesInPackageManagerWorkspaces) {
        if (!originalPackagesInPackageManagerWorkspaces.has(pkg)) {
            return true;
        }
    }
    return false;
}
