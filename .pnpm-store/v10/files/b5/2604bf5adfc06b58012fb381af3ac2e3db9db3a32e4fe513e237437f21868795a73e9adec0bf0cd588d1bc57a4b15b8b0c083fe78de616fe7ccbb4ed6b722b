// Find root, either first upper or topmost

"use strict";

const ensureValue      = require("type/value/ensure")
    , deferred         = require("deferred")
    , stat             = require("fs2/stat")
    , { resolve, sep } = require("path")
    , isPackageRoot    = require("../is-package-root");

module.exports = function (path, searchTopMost) {
	path = resolve(String(ensureValue(path)));
	return stat(path)(stats => {
		if (!stats.isDirectory()) throw new Error("Provided path is not a directory path");
		const tokens = path.split(sep);
		tokens.forEach((token, index) => {
			if (!index) return;
			tokens[index] = tokens[index - 1] + sep + token;
		});
		tokens[0] += sep;
		if (!searchTopMost) tokens.reverse();
		return deferred.find(tokens, dirPath => isPackageRoot(dirPath))(rootPath =>
			rootPath === undefined ? null : rootPath
		);
	});
};
