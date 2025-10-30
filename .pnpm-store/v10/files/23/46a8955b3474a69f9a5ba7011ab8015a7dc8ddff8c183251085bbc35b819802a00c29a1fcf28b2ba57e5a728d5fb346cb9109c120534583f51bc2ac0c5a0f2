"use strict";

let colorsSupportLevel = require("supports-color").stderr.level || 0;

if (process.env.DEBUG_COLORS) {
	// For compliance support eventual debug lib env variable
	if (/^(?:yes|on|true|enabled)$/iu.test(process.env.DEBUG_COLORS)) {
		if (!colorsSupportLevel) colorsSupportLevel = 1;
	} else if (/^(?:no|off|false|disabled)$/iu.test(process.env.DEBUG_COLORS)) {
		colorsSupportLevel = 0;
	}
}

module.exports = colorsSupportLevel;
