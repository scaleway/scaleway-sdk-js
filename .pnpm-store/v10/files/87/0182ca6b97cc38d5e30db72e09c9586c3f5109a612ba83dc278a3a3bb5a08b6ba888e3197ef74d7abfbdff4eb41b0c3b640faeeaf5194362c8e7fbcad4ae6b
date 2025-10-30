"use strict";

const isCallable = require("es5-ext/object/is-callable")
    , isValue    = require("es5-ext/object/is-value")
    , startsWith = require("es5-ext/string/#/starts-with")
    , deferred   = require("deferred")
    , path       = require("path")
    , lstat      = require("./lstat")
    , mkdir      = require("./mkdir")
    , readdir    = require("./readdir")
    , readlink   = require("./readlink")
    , symlink    = require("./symlink")
    , copyFile   = require("./copy").copy;

const copyDir = function (source, dest, options, sourceTop, destTop) {
	return readdir(source, {
		type: { directory: true, file: true, symbolicLink: true },
		depth: Infinity
	})(
		files =>
			deferred.map(files, relativePath => {
				const filename = path.resolve(source, relativePath);
				return lstat(filename)(stats => {
					if (stats.isDirectory()) {
						return mkdir(path.resolve(dest, relativePath), { intermediate: true });
					}
					if (stats.isFile()) {
						return copyFile(filename, path.resolve(dest, relativePath), {
							intermediate: true
						});
					}
					if (!stats.isSymbolicLink()) return null;
					return readlink(filename)(linkPath => {
						linkPath = path.resolve(path.dirname(filename), linkPath);
						const linkDirname = path.dirname(linkPath);
						if (
							linkDirname === sourceTop ||
							startsWith.call(linkDirname, sourceTop + path.sep)
						) {
							linkPath = path.resolve(destTop, linkPath.slice(sourceTop.length + 1));
						}
						return symlink(
							path.relative(path.dirname(path.resolve(dest, relativePath)), linkPath),
							path.resolve(dest, relativePath),
							{ intermediate: true }
						);
					});
				});
			}),
		error => {
			if (options.loose && error.code === "ENOENT") return false;
			throw error;
		}
	)(true);
};
copyDir.returnsPromise = true;

module.exports = exports = function (source, dest, options = null, cb = null) {
	if (!isValue(cb) && isCallable(options)) {
		cb = options;
		options = {};
	}

	source = path.resolve(String(source));
	dest = path.resolve(String(dest));
	return lstat(dest, { loose: true })(stats => {
		if (stats && stats.isDirectory()) {
			return readdir(dest).then(filenames => {
				if (!filenames.length) return;
				throw new Error("Destination path is not empty");
			});
		}
		return null;
	})(() => copyDir(source, dest, options, source, dest)).cb(cb);
};
exports.copyDir = copyDir;
exports.returnsPromise = true;
