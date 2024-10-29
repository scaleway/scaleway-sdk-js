"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNxCloudOnboardingURLForWelcomeApp = createNxCloudOnboardingURLForWelcomeApp;
exports.getNxCloudAppOnBoardingUrl = getNxCloudAppOnBoardingUrl;
exports.readNxCloudToken = readNxCloudToken;
const devkit_exports_1 = require("../../devkit-exports");
const is_workspace_claimed_1 = require("./is-workspace-claimed");
const url_shorten_1 = require("./url-shorten");
const run_command_1 = require("../../tasks-runner/run-command");
async function createNxCloudOnboardingURLForWelcomeApp(tree, token) {
    token = token || readNxCloudToken(tree);
    if (!token) {
        return 'not-configured';
    }
    return (await (0, is_workspace_claimed_1.isWorkspaceClaimed)(token)) ? 'claimed' : 'unclaimed';
}
async function getNxCloudAppOnBoardingUrl(token) {
    if (!token) {
        return null;
    }
    const onboardingUrl = await (0, url_shorten_1.createNxCloudOnboardingURL)('nx-welcome-app', token);
    return onboardingUrl;
}
function readNxCloudToken(tree) {
    const nxJson = (0, devkit_exports_1.readNxJson)(tree);
    const { accessToken, nxCloudId } = (0, run_command_1.getRunnerOptions)('default', nxJson, {}, true);
    return accessToken || nxCloudId;
}
