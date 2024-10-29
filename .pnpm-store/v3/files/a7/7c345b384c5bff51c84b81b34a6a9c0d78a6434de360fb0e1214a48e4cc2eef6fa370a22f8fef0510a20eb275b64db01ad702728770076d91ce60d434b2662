"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserslistEsbuildMapping = exports.EsbuildEngine = exports.BrowserslistKind = void 0;
/**
 * From: https://github.com/ben-eb/caniuse-lite/blob/v1.0.30001218/data/browsers.js
 *
 * License:
 *
 * """
 * The data in this repo is available for use under a CC BY 4.0 license (http://creativecommons.org/licenses/by/4.0).
 * For attribution just mention somewhere that the source is caniuse.com.
 * If you have any questions about using the data for your project please contact me here: http://a.deveria.com/contact
 * """
 */
var BrowserslistKind;
(function (BrowserslistKind) {
    BrowserslistKind["Edge"] = "edge";
    BrowserslistKind["Firefox"] = "firefox";
    BrowserslistKind["Chrome"] = "chrome";
    BrowserslistKind["Safari"] = "safari";
    BrowserslistKind["iOS"] = "ios_saf";
    BrowserslistKind["Android"] = "android";
    BrowserslistKind["AndroidChrome"] = "and_chr";
    BrowserslistKind["AndroidFirefox"] = "and_ff";
    BrowserslistKind["AndroidUC"] = "and_uc";
    BrowserslistKind["AndroidQQ"] = "and_qq";
    BrowserslistKind["Samsung"] = "samsung";
    BrowserslistKind["Opera"] = "opera";
    BrowserslistKind["OperaMini"] = "op_mini";
    BrowserslistKind["OperaMobile"] = "op_mob";
    BrowserslistKind["IE"] = "ie";
    BrowserslistKind["IEMobile"] = "ie_mob";
    BrowserslistKind["BlackBerry"] = "bb";
    BrowserslistKind["Baidu"] = "baidu";
    BrowserslistKind["Kaios"] = "kaios";
    BrowserslistKind["Node"] = "node";
})(BrowserslistKind || (exports.BrowserslistKind = BrowserslistKind = {}));
/** https://github.com/evanw/esbuild/blob/v0.19.2/internal/compat/js_table.go#L22-L50 */
var EsbuildEngine;
(function (EsbuildEngine) {
    EsbuildEngine["Chrome"] = "chrome";
    EsbuildEngine["Deno"] = "deno";
    EsbuildEngine["Edge"] = "edge";
    EsbuildEngine["ES"] = "es";
    EsbuildEngine["Firefox"] = "firefox";
    EsbuildEngine["Hermes"] = "hermes";
    EsbuildEngine["IE"] = "ie";
    EsbuildEngine["IOS"] = "ios";
    EsbuildEngine["Node"] = "node";
    EsbuildEngine["Opera"] = "opera";
    EsbuildEngine["Rhino"] = "rhino";
    EsbuildEngine["Safari"] = "safari";
})(EsbuildEngine || (exports.EsbuildEngine = EsbuildEngine = {}));
exports.BrowserslistEsbuildMapping = {
    // exact map
    [BrowserslistKind.Edge]: EsbuildEngine.Edge,
    [BrowserslistKind.Firefox]: EsbuildEngine.Firefox,
    [BrowserslistKind.Chrome]: EsbuildEngine.Chrome,
    [BrowserslistKind.Safari]: EsbuildEngine.Safari,
    [BrowserslistKind.iOS]: EsbuildEngine.IOS,
    [BrowserslistKind.Node]: EsbuildEngine.Node,
    [BrowserslistKind.IE]: EsbuildEngine.IE,
    [BrowserslistKind.Opera]: EsbuildEngine.Opera,
    // approximate mapping
    [BrowserslistKind.Android]: EsbuildEngine.Chrome,
    [BrowserslistKind.AndroidChrome]: EsbuildEngine.Chrome,
    [BrowserslistKind.AndroidFirefox]: EsbuildEngine.Firefox,
    // the rest have no equivalent for esbuild
};
//# sourceMappingURL=types.js.map