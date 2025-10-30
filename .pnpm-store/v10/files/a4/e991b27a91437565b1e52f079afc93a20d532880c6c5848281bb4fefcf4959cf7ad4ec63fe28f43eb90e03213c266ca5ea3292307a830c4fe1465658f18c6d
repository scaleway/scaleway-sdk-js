"use strict";

const isCallable   = require("es5-ext/object/is-callable")
    , isValue      = require("es5-ext/object/is-value")
    , { dirname }  = require("path")
    , { resolve }  = require("path")
    , { readlink } = require("./readlink")
    , { realpath } = require("./realpath");

module.exports = function (path, options = {}, cb = null) {
	path = resolve(String(path));
	if (!isValue(cb) && isCallable(options)) {
		cb = options;
		options = {};
	} else {
		options = Object(options);
	}
	const expectedLinkPath = options.linkPath
		? resolve(dirname(path), String(options.linkPath))
		: null;
	return readlink(path, {})(
		linkPath => {
			if (!linkPath) return null;
			if (!expectedLinkPath) return true;
			if (!options.recursive) return resolve(dirname(path), linkPath) === expectedLinkPath;
			return realpath(path, { loose: true })(finalLinkPath => {
				if (!finalLinkPath) return false;
				return finalLinkPath === expectedLinkPath;
			});
		},
		error => {
			if (error.code === "ENOENT") return null;
			if (error.code === "EINVAL") return false;
			if (error.code === "ENOTDIR") return null;
			if (error.code === "UNKNOWN") return null;
			throw error;
		}
	).cb(cb);
};
module.exports.returnsPromise = true;
