/* eslint max-statements: off, max-lines: off */

"use strict";

const invoke         = require("es5-ext/function/invoke")
    , noop           = require("es5-ext/function/noop")
    , isCallable     = require("es5-ext/object/is-callable")
    , isValue        = require("es5-ext/object/is-value")
    , forEach        = require("es5-ext/object/for-each")
    , memoize        = require("memoizee")
    , deferred       = require("deferred")
    , ignore         = require("ignore")
    , pathUtils      = require("path")
    , modes          = require("./lib/ignore-modes")
    , getMap         = require("./lib/get-conf-file-map")
    , memoizeWatcher = require("./lib/memoize-watcher")
    , findRoot       = require("./lib/find-root");

const { isArray } = Array
    , { push } = Array.prototype
    , { call } = Function.prototype
    , trim = call.bind(String.prototype.trim)
    , { dirname } = pathUtils
    , { resolve } = pathUtils
    , { sep } = pathUtils
    , { ConfMap } = getMap
    , eolRe = /(?:\r\n|[\n\r\u2028\u2029])/u;

const prepareRules = function (data) { return data.map(trim).filter(Boolean).reverse(); };

const parseSrc = function (src) { return prepareRules(String(src).split(eolRe)); };

const compile = function (maps, result) {
	const data = (result.data = {}), paths = (result.paths = []);

	// Merge rules found in ignorefiles
	maps.forEach(map => {
		forEach(map.map, (rules, path) => {
			if (!rules.length) return;
			if (!data[path]) {
				paths.push(path);
				data[path] = [];
			}
			data[path].push(rules);
		});
	});
	result.paths.sort();
	return result;
};

const applyRules = function (rules, rootPath, path) {
	if (!rootPath.endsWith(sep)) rootPath += sep;
	if (!path.startsWith(rootPath)) return { value: false, target: path };
	rules = rules
		.slice()
		.reverse()
		.filter(rule => !rule.startsWith("#"));
	const ig = ignore().add(rules);
	const testPath = path.slice(rootPath.length);
	let result = ig.ignores(testPath);
	if (!result) {
		const excludeRules = rules.filter(rule => rule.startsWith("!"));
		if (excludeRules.length) {
			const ig2 = ignore().add(excludeRules.map(rule => rule.slice(1)));
			if (!ig2.ignores(testPath)) result = null;
		} else {
			result = null;
		}
	}
	return { value: result, target: path };
};

const applyGlobalRules = function (path, rules) {
	// Check global rules
	const value = applyRules(rules, path.slice(0, path.indexOf(sep) + 1), path);
	return Boolean(value.value);
};

const buildMap = function (lDirname, lGetMap, watch) {
	let promise, maps;
	const data = {};
	lGetMap = lGetMap.map((getSubMap, index) => {
		const map = getSubMap(lDirname);
		if (watch) {
			map.on("change", targetMap => {
				if (maps) {
					maps[index] = targetMap;
					compile(maps, data);
					promise.emit("change", data);
				}
			});
		}
		return map;
	});
	if (lGetMap.length > 1) {
		promise = deferred.map(lGetMap)(result => {
			maps = result;
			return compile(maps, data);
		});
	} else {
		promise = lGetMap[0](map => {
			maps = [map];
			return compile(maps, data);
		});
	}
	if (watch) {
		promise.close = function () { lGetMap.forEach(invoke("close")); };
	}
	return promise;
};

const IsIgnored = function (path, watch) {
	this.path = path;
	this.dirname = dirname(path);
	this.watch = watch;
};

IsIgnored.prototype = {
	init(mapPromise) {
		this.mapPromise = mapPromise;
		this.promise = mapPromise(data => {
			this.data = data;
			return this.calculate();
		});
		if (this.watch) {
			mapPromise.on("change", () => {
				const value = this.calculate();
				if (value !== this.promise.value) {
					this.promise.value = value;
					this.promise.emit("change", value, this.path);
				}
			});
			this.promise.close = this.close.bind(this);
		}
		return this.promise;
	},
	close() { this.mapPromise.close(); },
	calculate() {
		let current, result = false;

		if (!this.data.paths) return false;

		// Apply rules
		current = this.path;
		this.data.paths.some(function (rulesPath, index) {
			if (rulesPath.length > this.dirname.length) return true;
			if (index) {
				const dirIgnored = this.data.paths
					.slice(0, index)
					.some(function (preRulesPath) {
						return this.data.data[preRulesPath].some(
							rules => applyRules(rules, preRulesPath, rulesPath).value, this
						);
					}, this);
				if (dirIgnored) return false;
			}
			this.data.data[rulesPath].forEach(function (rules) {
				let data = applyRules(rules, rulesPath, current);
				if (data.value === false && current !== pathUtils) {
					data = applyRules(rules, rulesPath, this.path);
				}
				if (data.target !== current || isValue(data.value)) {
					result = data.value;
				}
				current = data.target;
			}, this);
			return false;
		}, this);
		return Boolean(result);
	}
};

const isIgnored = function (mode, path, options) {
	let globalRules, getMapFns, promise;

	if (isValue(options.globalRules)) {
		globalRules = isArray(options.globalRules)
			? options.globalRules
			: String(options.globalRules).split(eolRe);
	}

	const { watch } = options;
	const lIsIgnored = new IsIgnored(path, watch);
	const lDirname = lIsIgnored.dirname;

	if (mode) {
		getMapFns = [];
		if (!globalRules) globalRules = [];
		if (!isArray(mode)) {
			if (!modes[mode]) throw new Error(`Unknown mode '${ mode }'`);
			mode = [mode];
		}
		mode.forEach(name => {
			const lMode = modes[name];
			if (!lMode) throw new Error(`Unknown mode '${ name }'`);
			getMapFns.push(pathIgnored => getMap(lDirname, lMode, watch, parseSrc));
			if (lMode.globalRules) push.apply(globalRules, lMode.globalRules);
		});
	}

	if (globalRules) {
		globalRules = prepareRules(globalRules);
		if (applyGlobalRules(path, globalRules)) {
			promise = deferred(true);
			if (watch) promise.close = noop;
			return promise;
		}
	}

	if (!mode) {
		promise = deferred(false);
		if (watch) promise.close = noop;
		return promise;
	}

	return lIsIgnored.init(buildMap(lDirname, getMapFns, watch));
};
isIgnored.returnsPromise = true;

module.exports = exports = function (mode, path, options = {}, cb = null) {
	path = resolve(String(path));

	if (!cb) {
		if (isCallable(options)) {
			cb = options;
			options = {};
		}
	}
	return isIgnored(mode, path, options).cb(cb);
};

exports.returnsPromise = true;
exports.isIgnored = isIgnored;
exports.IsIgnored = IsIgnored;
exports.applyGlobalRules = applyGlobalRules;

exports.getIsIgnored = function (modeNames, globalRules, watch) {
	const mapGetters = [];
	if (!globalRules) globalRules = [];
	const memo = watch ? memoizeWatcher : memoize;
	modeNames.forEach(name => {
		const mode = modes[name];
		if (!mode) throw new Error(`Unknown mode '${ name }'`);
		const isRoot = memo(mode[watch ? "isRootWatcher" : "isRoot"], { primitive: true });
		const readRules = memo(getMap[watch ? "readRulesWatcher" : "readRules"], {
			primitive: true
		});
		mapGetters.push(path => {
			const map = new ConfMap(path, watch);
			map.filename = mode.filename;
			map.readRules = readRules;
			map.parse = parseSrc;
			return map.init(findRoot(isRoot, path, { watch }));
		});
		if (mode.globalRules) push.apply(globalRules, mode.globalRules);
	});
	const build = memo(lDirname => buildMap(lDirname, mapGetters, watch), { primitive: true });

	return {
		isIgnored(path) {
			const lIsIgnored = new IsIgnored(path, watch);
			return lIsIgnored.init(build(lIsIgnored.dirname));
		},
		globalRules: globalRules.length ? prepareRules(globalRules) : null
	};
};
