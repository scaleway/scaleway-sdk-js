/* eslint max-lines: off */

"use strict";

const isValue      = require("type/value/is")
    , last         = require("es5-ext/array/#/last")
    , defineLength = require("es5-ext/function/_define-length")
    , callable     = require("es5-ext/object/valid-callable")
    , d            = require("d")
    , memoize      = require("memoizee")
    , fs           = require("fs")
    , util         = require("util");

const { max } = Math, { slice } = Array.prototype, queue = [], debugStats = { fd: 0, unknown: 0 };

let count = 0, limit = Infinity;

const getDeferred = () => {
	const deferred = {};
	deferred.promise = new Promise((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});
	return deferred;
};

const release = function () {
	let data;
	// eslint-disable-next-line no-unmodified-loop-condition
	while (count < limit && (data = queue.shift())) {
		try {
			const result = data.fn.apply(data.context, data.args);
			if (data.deferred) data.deferred.resolve(result);
		} catch (e) {
			if (data.deferred) {
				data.deferred.reject(e);
			} else {
				const fnCb = last.call(data.args);
				if (typeof fnCb === "function") fnCb(e);
			}
		}
	}
};

const wrap = function (asyncFn, type) {
	let self;
	debugStats[type] = 0;
	callable(asyncFn);
	return (self = defineLength(function (...args) {
		const cb = last.call(args);
		if (!exports.initialized || typeof cb !== "function") return asyncFn.apply(this, args);
		if (count >= limit) {
			queue.push({ fn: self, context: this, args });
			return null;
		}
		const openCount = count++;
		const context = this;
		args = slice.call(args, 0, -1);
		args.push(function (err, result) {
			--debugStats[type];
			--count;
			if (err && (err.code === "EMFILE" || err.code === "ENFILE")) {
				if (limit > openCount) limit = openCount - 1;
				queue.push({ fn: self, context, args });
				release();
				return;
			}
			release();
			if (typeof cb === "function") cb.call(this, err, result);
		});
		++debugStats[type];
		return asyncFn.apply(this, args);
	}, asyncFn.length));
};

const handlePromised = function () {
	const { open } = fs.promises;

	fs.promises.open = defineLength(function (...args) {
		if (count >= limit) {
			const deferred = getDeferred();
			queue.push({ fn: fs.promises.open, context: this, args, deferred });
			return deferred.promise;
		}
		const openCount = count++;
		++debugStats.promisesFd;
		return open(...args).then(
			handle => {
				const { close } = handle;
				handle.close = function () {
					return close.call(this).then(() => {
						--debugStats.promisesFd;
						--count;
						release();
					});
				};
				return handle;
			},
			function (error) {
				--debugStats.promisesFd;
				--count;
				if (error.code === "EMFILE" || error.code === "ENFILE") {
					if (limit > openCount) limit = openCount - 1;
					const deferred = getDeferred();
					queue.push({ fn: fs.open, context: this, args, deferred });
					release();
					return deferred.promise;
				}
				release();
				throw error;
			}
		);
	}, fs.promises.open.length);

	const wrapPromised = function (asyncFn, type) {
		let self;
		debugStats[type] = 0;
		return (self = defineLength(function (...args) {
			if (count >= limit) {
				const deferred = getDeferred();
				queue.push({ fn: self, context: this, args, deferred });
				return deferred.promise;
			}
			const openCount = count++;
			++debugStats[type];
			return asyncFn(...args).catch(error => {
				--debugStats[type];
				--count;
				if (error.code === "EMFILE" || error.code === "ENFILE") {
					if (limit > openCount) limit = openCount - 1;
					const deferred = getDeferred();
					queue.push({ fn: asyncFn, context: this, args, deferred });
					release();
					return deferred.promise;
				}
				release();
				throw error;
			});
		}, asyncFn.length));
	};

	fs.promises.writeFile = wrapPromised(fs.promises.writeFile, "promisesWriteFile");

	if (fs.opendirSync) {
		const wrapDirEntries = require("./lib/wrap-dir-entries");
		const { opendir } = fs.promises;
		const { opendirSync } = fs;

		const wrapDir = dir => {
			const { close, closeSync } = dir;
			dir.close = function (callback) {
				if (isValue(callback) && typeof callback !== "function") {
					return close.call(this, callback);
				}
				const promise = close.call(this).then(
					() => {
						--debugStats.dir;
						--count;
						release();
						if (callback) process.nextTick(() => callback());
					},
					error => {
						if (callback) process.nextTick(() => callback(error));
						else throw error;
					}
				);
				return callback ? undefined : promise;
			};
			dir.closeSync = function () {
				const result = closeSync.call(this);
				--debugStats.dir;
				--count;
				release();
				return result;
			};
			wrapDirEntries(dir, () => {
				--debugStats.dir;
				--count;
				release();
			});

			return dir;
		};

		fs.promises.opendir = function (path, options) {
			const args = [path, options];
			const context = this;
			if (count >= limit) {
				const deferred = getDeferred();
				// eslint-disable-next-line prefer-rest-params
				queue.push({ fn: fs.promises.opendir, context, args, deferred });
				return deferred.promise;
			}
			const openCount = count++;
			++debugStats.dir;
			return opendir(path, options).then(
				dir => wrapDir(dir),
				error => {
					--debugStats.dir;
					--count;
					if (error.code === "EMFILE" || error.code === "ENFILE") {
						if (limit > openCount) limit = openCount - 1;
						const deferred = getDeferred();
						queue.push({ fn: fs.promises.opendir, context: this, args, deferred });
						release();
						return deferred.promise;
					}
					release();
					throw error;
				}
			);
		};

		fs.opendirSync = function (path, options) {
			const dir = opendirSync.call(this, path, options);
			++debugStats.dir;
			++count;
			return wrapDir(dir);
		};

		fs.opendir = util.callbackify(fs.promises.opendir);
	}
};

module.exports = exports = memoize(() => {
	const { open, openSync, close, closeSync } = fs;

	if (exports.initialized) return;

	fs.open = function (path, flags, mode, fnCb) {
		if (count >= limit) {
			// eslint-disable-next-line prefer-rest-params
			queue.push({ fn: fs.open, context: this, args: arguments });
			return;
		}
		const openCount = count++;
		// eslint-disable-next-line prefer-rest-params
		const args = arguments;
		fnCb = last.call(args);
		++debugStats.fd;
		open(path, flags, mode, function (err, fd) {
			if (err) {
				--debugStats.fd;
				--count;
				if (err.code === "EMFILE" || err.code === "ENFILE") {
					if (limit > openCount) limit = openCount - 1;
					queue.push({ fn: fs.open, context: this, args });
					release();
					return;
				}
				release();
			}
			if (typeof fnCb === "function") fnCb(err, fd);
		});
	};

	fs.openSync = function (pathIgnored, flagsIgnored, modeIgnored) {
		const result = openSync.call(this, pathIgnored, flagsIgnored, modeIgnored);
		++debugStats.fd;
		++count;
		return result;
	};

	fs.close = function (fd, fnCb) {
		close(fd, err => {
			if (!err) {
				--debugStats.fd;
				--count;
				release();
			}
			if (typeof fnCb === "function") fnCb(err);
		});
	};

	fs.closeSync = function (fd) {
		const result = closeSync(fd);
		--debugStats.fd;
		--count;
		release();
		return result;
	};

	fs.readdir = wrap(fs.readdir, "readdir");
	// Needed for Node >=1.2 because of commit e65308053c
	fs.readFile = wrap(fs.readFile, "readFile");

	if (fs.promises) handlePromised();

	Object.defineProperty(exports, "initialized", d("e", true));
});

Object.defineProperties(exports, {
	initialized: d("ce", false),
	limit: d.gs(() => limit, nLimit => { if (limit >= nLimit) limit = max(nLimit, 5); }),
	available: d.gs(() => max(limit - count, 0)),
	taken: d.gs(() => count),
	open: d(() => {
		++debugStats.unknown;
		++count;
	}),
	close: d(() => {
		--debugStats.unknown;
		--count;
		if (release) release();
	}),
	wrap: d(wrap),
	debugStats: d(debugStats),
});
