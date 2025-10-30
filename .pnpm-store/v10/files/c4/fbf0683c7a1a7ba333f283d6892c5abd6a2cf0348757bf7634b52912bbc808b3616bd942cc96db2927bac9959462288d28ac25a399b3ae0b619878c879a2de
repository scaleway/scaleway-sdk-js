"use strict";

const partial    = require("es5-ext/function/#/partial")
    , isCallable = require("es5-ext/object/is-callable")
    , isValue    = require("es5-ext/object/is-value")
    , deferred   = require("deferred")
    , fs         = require("fs")
    , pathUtils  = require("path")
    , chmod      = require("./chmod")
    , lstat      = require("./lstat")
    , readdir    = require("./readdir")
    , unlink     = require("./unlink");

const original = fs.rmdir, { resolve } = pathUtils, { sep } = pathUtils, empty = {};

const rmcontent = function (path, options) {
	return readdir(path)(
		function self(files, repeated) {
			return deferred.map(files, name => {
				const filename = path + sep + name;
				let aborted;
				return lstat(filename)(
					stats => {
						if (aborted || options.aborted) return null;
						if (options.recursive && stats.isDirectory()) {
							return rmcontent(filename, options)(null, err2 => {
								options.aborted = true;
								throw err2;
							});
						}
						if (options.force) {
							return unlink(filename)(null, err2 => {
								if (err2.code === "ENOENT") return;
								aborted = true;
								throw err2;
							});
						}
						const err = new Error(`ENOTEMPTY rmdir '${ path }'`);
						err.errno = 53;
						err.code = "ENOTEMPTY";
						err.path = path;
						options.aborted = true;
						throw err;
					},
					err => {
						if (err.code === "ENOENT") return;
						options.aborted = true;
						throw err;
					}
				);
			})(null, err => {
				if (!options.aborted && !repeated && err.code === "EACCES" && chmod) {
					return chmod(path, 146)(partial.call(self, files, true));
				}
				throw err;
			});
		},
		err => {
			if (err.code === "ENOENT") return;
			throw err;
		}
	)(
		() => {
			if (options.aborted) return null;
			return rmdir(path, empty)(null, err => {
				if (options.aborted) return null;
				if (err.code === "ENOTEMPTY") {
					// Race condition (new files were added to the directory in a meantime)
					return rmcontent(path, options);
				}
				if (err.code === "ENOENT") return null;
				throw err;
			});
		},
		err => {
			if (err.code === "ENOENT") return;
			throw err;
		}
	);
};

const rmdir = function (path, options) {
	const def = deferred();
	original(path, err => {
		if (err) {
			if (err.code === "ENOTEMPTY") {
				if (options.recursive || options.force) {
					def.resolve(rmcontent(path, options));
					return;
				}
			} else if (err.code === "ENOENT") {
				if (options.loose) {
					def.resolve(null);
					return;
				}
			}
			def.reject(err);
			return;
		}
		def.resolve(null);
	});
	return def.promise;
};
rmdir.returnsPromise = true;

module.exports = exports = function (path, options = {}, cb = null) {
	path = resolve(String(path));

	if (!isValue(cb) && isCallable(options)) {
		cb = options;
		options = {};
	} else {
		options = Object(options);
	}

	return rmdir(path, options).cb(cb);
};
exports.returnsPromise = true;
exports.rmdir = rmdir;
