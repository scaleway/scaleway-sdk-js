// Generates module path resolver for Node.js
// Used to generate both sync and async version

"use strict";

const isObject     = require("type/object/is")
    , ensureString = require("type/string/ensure")
    , getResolver  = require("../get-resolver")
    , { resolve }  = require("path");

module.exports = function (confirmFile, resolvePackageMain) {
	const resolveModule = getResolver([".js", ".json", ".node"], confirmFile, resolvePackageMain);
	return function (dir, path, options = {}) {
		if (!isObject(options)) options = {};
		dir = resolve(ensureString(dir));
		path = ensureString(path);
		if (!path) throw new TypeError("Empty string is not a valid require path");
		return resolveModule(dir, path).then(result => {
			if (result) return result;
			if (options.silent) return null;
			const error = new Error(`Cannot find module '${ path }'`);
			error.code = "MODULE_NOT_FOUND";
			throw error;
		});
	};
};
