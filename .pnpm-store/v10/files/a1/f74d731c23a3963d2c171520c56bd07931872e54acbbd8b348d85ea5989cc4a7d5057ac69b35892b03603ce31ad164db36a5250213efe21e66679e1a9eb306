"use strict";

const strip = require("cli-color/strip");

module.exports = content => {
	if (!content) return 0;
	const columns = process.stdout.columns || 80;
	let lineCount = 0;
	for (const line of strip(content).split("\n")) {
		lineCount += Math.ceil([...line].length / columns) || 1;
	}
	return lineCount;
};
