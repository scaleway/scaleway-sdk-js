// Function that provides map of rules found in ignorefiles for given ignorefile
// type. Additinally it invokes event on changes in map which are results of
// changes in ignorefiles.

"use strict";

var invoke    = require("es5-ext/function/invoke")
  , assign    = require("es5-ext/object/assign")
  , isValue   = require("es5-ext/object/is-value")
  , forEach   = require("es5-ext/object/for-each")
  , isCopy    = require("es5-ext/object/is-copy-deep")
  , endsWith  = require("es5-ext/string/#/ends-with")
  , deferred  = require("deferred")
  , pathUtils = require("path")
  , findRoot  = require("./find-root")
  , readFile  = require("../read-file").readFile
  , dirname   = pathUtils.dirname
  , sep       = pathUtils.sep
  , ConfMap
  , readRules
  , readRulesWatcher
  , paths
  , getMap
  , lockId    = 0;

paths = function (rootPath, path2) {
	var starter, data;
	starter = [rootPath];
	if (rootPath === path2) {
		return starter;
	}
	if (endsWith.call(rootPath, sep)) {
		data = path2.slice(rootPath.length).split(sep);
		starter.push((rootPath += data.shift()));
	} else {
		data = path2.slice(rootPath.length + 1).split(sep);
	}
	return starter.concat(data.map(function (path) { return (rootPath += sep + path); }));
};

readRules = function (path) {
	return this.readFile(path + sep + this.filename)(
		function (src) { return isValue(src) ? this.parse(src, path) : src; }.bind(this)
	);
};
readRulesWatcher = function (path) {
	var watcher, promise, current;
	watcher = this.readFile(path + sep + this.filename);
	promise = watcher(
		function (src) { return (current = isValue(src) ? this.parse(src, path) : src); }.bind(this)
	);
	watcher.on(
		"change",
		function (data) {
			data = isValue(data) ? this.parse(data, path) : data;
			if (data === current) return;
			if (
				isValue(current) &&
				isValue(data) &&
				typeof current === "object" &&
				isCopy(current, data)
			) {
				return;
			}
			current = promise.value = data;
			promise.emit("change", current, path);
		}.bind(this)
	);
	promise.close = watcher.close;
	return promise;
};

ConfMap = function (path, watch) {
	this.path = path;
	this.watch = watch;
	this.data = { root: null, map: {} };
	assign(this, deferred());
	if (this.watch) {
		this.onRulesChange = this.onRulesChange.bind(this);
		this.rulePromises = {};
		this.promise.close = this.close.bind(this);
	}
};
ConfMap.prototype = {
	init: function (lFindRoot) {
		this.findRoot = lFindRoot;
		if (this.watch) {
			lFindRoot.on("change", this.updateRoot.bind(this));
		}
		lFindRoot.done(
			function (rootPath) {
				if (rootPath) {
					this.data.root = rootPath;
					this.addPaths(rootPath, this.path).done(
						function () { this.resolve(this.data); }.bind(this), this.resolve
					);
				} else {
					this.resolve(this.data);
				}
			}.bind(this),
			this.resolve
		);
		return this.promise;
	},
	close: function () {
		if (this.rulePromises) {
			this.findRoot.close();
			forEach(this.rulePromises, invoke("close"));
			delete this.rulePromises;
		}
	},
	parse: String,
	readFile: function (path) { return readFile(path, { loose: true, watch: this.watch }); },
	onRulesChange: function (rules, path) {
		if (isValue(rules)) {
			this.data.map[path] = rules;
		} else {
			delete this.data.map[path];
		}
		this.promise.emit("change", this.data);
	},
	addPaths: function (rootPath, path) {
		return deferred.map(
			paths(rootPath, path),
			function (lPath) {
				var rules = this.readRules(lPath);
				if (this.watch) {
					this.rulePromises[lPath] = rules;
					rules.on("change", this.onRulesChange);
				}
				return rules.aside(
					function (lRules) {
						if (isValue(lRules)) {
							this[lPath] = lRules;
						}
					}.bind(this.data.map)
				)(
					null,
					function (err) {
						// Watcher might have been closed in a meantime, if it was we ignore
						// this error as we're not interested in that value anymore
						return this.rulePromises[lPath] ? err : null;
					}.bind(this)
				);
			},
			this
		);
	},
	removePaths: function (rootPath, path) {
		paths(rootPath, path).forEach(function (lPath) {
			var promise = this.rulePromises[lPath];
			delete this.rulePromises[lPath];
			delete this.data.map[lPath];
			promise.close();
		}, this);
	},
	updateRoot: function (rootPath) {
		var lock = ++lockId;
		if (!rootPath) {
			this.removePaths(this.data.root, this.path);
			this.data.root = null;
			this.promise.emit("change", this.data);
		} else if (!this.data.root) {
			this.data.root = rootPath;
			this.addPaths(rootPath, this.path).done(
				function () {
					if (lock === lockId) {
						this.promise.emit("change", this.data);
					}
				}.bind(this)
			);
		} else if (this.data.root < rootPath) {
			this.removePaths(this.data.root, dirname(rootPath));
			this.data.root = rootPath;
			this.promise.emit("change", this.data);
		} else {
			this.addPaths(rootPath, dirname(this.data.root)).done(
				function () {
					if (lock === lockId) {
						this.promise.emit("change", this.data);
					}
				}.bind(this)
			);
			this.data.root = rootPath;
		}
	}
};

getMap = module.exports = function (path, mode, watch, parse) {
	var map = new ConfMap(path, watch);
	map.filename = mode.filename;
	map.readRules = watch ? readRulesWatcher : readRules;
	if (parse) {
		map.parse = parse;
	}
	return map.init(findRoot(watch ? mode.isRootWatcher : mode.isRoot, path, { watch: watch }));
};
getMap.ConfMap = ConfMap;
getMap.readRules = readRules;
getMap.readRulesWatcher = readRulesWatcher;
