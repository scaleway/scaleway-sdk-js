"use strict";

const isCallable = require("es5-ext/object/is-callable")
    , isValue    = require("es5-ext/object/is-value")
    , isString   = require("es5-ext/string/is-string")
    , deferred   = require("deferred")
    , path       = require("path")
    , original   = require("fs").symlink
    , mkdir      = require("./mkdir")
    , isSymlink  = require("./is-symlink")
    , unlink     = require("./unlink");

const symlink = function (src, dest, options) {
	const def = deferred();
	original(src, dest, options.type, err => {
		if (err) {
			def.reject(err);
			return;
		}
		def.resolve(true);
	});
	return def.promise.catch(error => {
		if (!options.loose && !options.force) throw error;
		if (error.code === "EEXIST") {
			return isSymlink(dest, { linkPath: src })(result => {
				if (result) return Promise.resolve(false);
				if (!options.force) throw error;
				return unlink(dest).then(() => symlink(src, dest, options), () => { throw error; });
			});
		}
		throw error;
	});
};
symlink.returnsPromise = true;

module.exports = exports = function (src, dest, options = {}, cb = null) {
	src = String(src);
	dest = path.resolve(String(dest));
	if (!isValue(cb) && isCallable(options)) {
		cb = options;
		options = {};
	} else {
		options = isString(options) ? { type: options } : Object(options);
	}

	if (options.intermediate) {
		return mkdir(path.dirname(dest), { intermediate: true })(() =>
			symlink(src, dest, options)
		).cb(cb);
	}

	return symlink(src, dest, options).cb(cb);
};
exports.returnsPromise = true;
exports.symlink = symlink;
