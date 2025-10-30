/* eslint max-lines: off */

// Copy file
// Credit: Isaac Schlueter
// http://groups.google.com/group/nodejs/msg/ef4de0b516f7d5b8

"use strict";

const isCallable       = require("es5-ext/object/is-callable")
    , isValue          = require("es5-ext/object/is-value")
    , normalizeOptions = require("es5-ext/object/normalize-options")
    , d                = require("d")
    , deferred         = require("deferred")
    , fs               = require("fs")
    , path             = require("path")
    , mkdir            = require("./mkdir")
    , rm               = require("./rm")
    , unlink           = require("./unlink");

const objHasOwnProperty = Object.prototype.hasOwnProperty
    , { defineProperty } = Object
    , { dirname } = path
    , { resolve } = path
    , { createReadStream } = fs
    , { createWriteStream } = fs
    , { stat } = fs;

const fixOptions = function (options) {
	if (options.hasOwnProperty) return options;
	return defineProperty(options, "hasOwnProperty", d(objHasOwnProperty));
};

const copyFileWithMode = function (def, source, dest, options) {
	let read, write;
	let isResolved = false;

	try { read = createReadStream(source); }
	catch (e) { return def.reject(e); }
	read.on("error", e => {
		if (isResolved) return;
		if (options.loose && e.code === "ENOENT") def.resolve(unlink(dest, { loose: true })(false));
		else def.reject(e);
	});

	try {
		write = createWriteStream(dest, fixOptions(options));
	} catch (e1) {
		read.destroy();
		return def.reject(e1);
	}

	write.on("error", e => {
		isResolved = true;
		read.destroy();
		if (e.code === "ENOENT" && options.intermediate) {
			mkdir(dirname(resolve(dest)), { intermediate: true }).done(() => {
				options = normalizeOptions(options);
				delete options.intermediate;
				copyFileWithMode(def, source, dest, options);
			}, def.reject);
			return;
		}
		def.reject(e);
	});
	read.pipe(write);
	write.on("close", () => {
		if (isResolved) return;
		def.resolve(true);
	});

	return def.promise;
};

const copyFile = function (source, dest, options) {
	const def = deferred();
	if (options.mode) {
		copyFileWithMode(def, source, dest, options);
		return def.promise;
	}
	stat(source, (e, stats) => {
		if (e) {
			if (options.loose && e.code === "ENOENT") {
				def.resolve(false);
				return;
			}
			def.reject(e);
			return;
		}
		options = normalizeOptions(options);
		options.mode = stats.mode;
		stat(dest, error => {
			if (!error) {
				if (options.force) {
					rm(dest, { recursive: true, force: true, loose: true }).then(() =>
						copyFileWithMode(def, source, dest, options)
					);
				} else {
					def.reject(new Error(`Destinaton '${ dest }' exists`));
				}
			} else if (error.code === "ENOENT") {
				copyFileWithMode(def, source, dest, options);
			} else {
				def.reject(error);
			}
		});
	});
	return def.promise;
};
copyFile.returnsPromise = true;

module.exports = exports = function (source, dest, options = {}, cb = null) {
	if (!isValue(cb) && isCallable(options)) {
		cb = options;
		options = {};
	}

	return copyFile(String(source), String(dest), options).cb(cb);
};
exports.copy = copyFile;
exports.returnsPromise = true;
