"use strict";

const entries            = require("es5-ext/object/entries")
    , clc                = require("cli-color/bare")
    , defaultSymbols     = require("log/lib/level-symbols")
    , colorsSupportLevel = require("./private/colors-support-level");

const symbols = (() => {
	if (process.platform !== "win32" && colorsSupportLevel >= 2) return defaultSymbols;
	return {
		debug: "*",
		info: "i",
		notice: "i",
		warning: "‼",
		error: "×",
		critical: "×",
		alert: "×",
		emergency: "×"
	};
})();

if (!colorsSupportLevel) {
	module.exports = symbols;
	return;
}
const coloredSymbols = (module.exports = {});
for (const [levelName, colorDecorator] of entries({
	debug: clc.blackBright,
	info: clc.blueBright,
	notice: clc.yellow,
	warning: clc.yellowBright,
	error: clc.redBright,
	critical: clc.bgRedBright.whiteBright,
	alert: clc.bgRedBright.whiteBright,
	emergency: clc.bgRedBright.whiteBright
})) {
	coloredSymbols[levelName] = colorDecorator(symbols[levelName]);
}
