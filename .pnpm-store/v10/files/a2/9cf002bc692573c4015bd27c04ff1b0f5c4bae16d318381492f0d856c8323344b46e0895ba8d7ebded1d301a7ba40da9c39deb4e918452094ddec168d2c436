"use strict";

const isCallable  = require("es5-ext/object/is-callable")
    , isValue     = require("es5-ext/object/is-value")
    , deferred    = require("deferred")
    , { resolve } = require("path")
    , original    = require("fs").unlink;

const unlink = function (path, options) {
	const def = deferred();
	original(path, err => {
		if (err) {
			if (err.code === "ENOENT" && options.loose) def.resolve();
			else def.reject(err);
			return;
		}
		def.resolve();
	});
	return def.promise;
};
unlink.returnsPromise = true;

module.exports = exports = function (path, options = {}, cb = null) {
	path = resolve(String(path));
	if (!isValue(cb) && isCallable(options)) {
		cb = options;
		options = {};
	} else {
		options = Object(options);
	}

	return unlink(path, options).cb(cb);
};
exports.returnsPromise = true;
exports.unlink = unlink;
