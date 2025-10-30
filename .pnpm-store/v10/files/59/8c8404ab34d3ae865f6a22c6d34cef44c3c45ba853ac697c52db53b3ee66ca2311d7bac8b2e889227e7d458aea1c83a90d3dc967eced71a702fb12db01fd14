"use strict";

const { resolveNamespaceMessagePrefix } = require("log/lib/abstract-writer")
    , colorsSupportLevel                = require("./private/colors-support-level");

if (!colorsSupportLevel) {
	module.exports = resolveNamespaceMessagePrefix;
	return;
}

const colors = (() => {
	if (colorsSupportLevel >= 2) {
		return [
			20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75,
			76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160,
			161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185,
			196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221
		];
	}
	return [6, 2, 3, 4, 5, 1];
})();

// Simple deterministic namespace to color resolver
// Credit: visionmedia/debug
// https://github.com/visionmedia/debug/blob/22f993216dcdcee07eb0601ea71a917e4925a30a/src/common.js#L46-L55
const assignColor = namespace => {
	let hash = 0;
	for (const char of namespace) {
		hash = (hash << 5) - hash + char.charCodeAt(0);
		hash |= 0; // Convert to 32bit integer
	}
	return colors[Math.abs(hash) % colors.length];
};

module.exports = logger => {
	const namespaceString = resolveNamespaceMessagePrefix(logger);
	if (!namespaceString) return null;
	const color = (() => {
		if (logger.namespaceAnsiColor) return logger.namespaceAnsiColor;
		const [rootNamespace] = logger.namespaceTokens;
		const assignedColor = assignColor(rootNamespace);
		logger.levelRoot.get(rootNamespace).namespaceAnsiColor = assignedColor;
		return assignedColor;
	})();
	return `\u001b[3${ color < 8 ? color : `8;5;${ color }` };1m${ namespaceString }\u001b[39;22m`;
};
