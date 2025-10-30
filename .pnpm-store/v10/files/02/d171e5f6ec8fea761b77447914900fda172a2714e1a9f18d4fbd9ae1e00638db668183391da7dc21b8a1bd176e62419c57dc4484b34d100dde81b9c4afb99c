"use strict";

const d            = require("d")
    , childProcess = require("child_process");

const shouldDisable = stdio => {
	if (!stdio) return false;
	if (stdio === "inherit") return true;
	if (!Array.isArray(stdio)) return false;
	return (
		stdio.includes(1) ||
		stdio.includes(2) ||
		stdio.includes(process.stdout) ||
		stdio.includes(process.stderr) ||
		stdio.includes("inherit")
	);
};

const handleSubProcessAsync = (subProcess, stdio, cliProgressFooter) => {
	if (!shouldDisable(stdio)) return subProcess;
	cliProgressFooter.disable();
	return subProcess
		.once("error", error => {
			cliProgressFooter.enable();
			if (!subProcess.listenerCount("error")) throw error;
		})
		.on("close", () => cliProgressFooter.enable());
};

const handleSubProcessSync = (runSubProcess, stdio, cliProgressFooter) => {
	if (!shouldDisable(stdio)) return runSubProcess();
	cliProgressFooter.disable();
	try { return runSubProcess(); }
	finally { cliProgressFooter.enable(); }
};

module.exports = {
	_isDisabled: d(false),
	_disabledCounter: d(0),
	enable: d(function () {
		if (!this._isDisabled) return;
		if (--this._disabledCounter) return;
		this._isDisabled = false;
		this.updateProgress(this._disabledProgressRows);
		this._disabledProgressRows = null;
	}),
	disable: d(function () {
		++this._disabledCounter;
		if (this._isDisabled) return;
		this._disabledProgressRows = this._rawProgressRows;
		this.updateProgress();
		this._isDisabled = true;
	}),
	workaroundChildProcess: d(function () {
		const originalChildProcess = (this._originalChildProcess = {
			fork: childProcess.fork,
			spawn: childProcess.spawn,
			execFileSync: childProcess.execFileSync,
			execSync: childProcess.execSync,
			spawnSync: childProcess.spawnSync
		});

		const cliProgressFooter = this;
		childProcess.fork = function (modulePath, args = [], options = {}) {
			const inputOptions = Array.isArray(args) ? options : args;
			const subProcess = originalChildProcess.fork.call(this, modulePath, args, options);
			return handleSubProcessAsync(
				subProcess, (inputOptions && inputOptions.stdio) || "inherit", cliProgressFooter
			);
		};
		childProcess.spawn = function (command, args = [], options = {}) {
			const inputOptions = Array.isArray(args) ? options : args;
			const subProcess = originalChildProcess.spawn.call(this, command, args, options);
			return handleSubProcessAsync(
				subProcess, inputOptions && inputOptions.stdio, cliProgressFooter
			);
		};
		childProcess.execFileSync = function (command, args = [], options = {}) {
			const inputOptions = Array.isArray(args) ? options : args;
			return handleSubProcessSync(
				() => originalChildProcess.execFileSync.call(this, command, args, options),
				inputOptions && inputOptions.stdio, cliProgressFooter
			);
		};
		childProcess.execSync = function (command, options = {}) {
			return handleSubProcessSync(
				() => originalChildProcess.execSync.call(this, command, options),
				options && options.stdio, cliProgressFooter
			);
		};
		childProcess.spawnSync = function (command, args = [], options = {}) {
			const inputOptions = Array.isArray(args) ? options : args;
			return handleSubProcessSync(
				() => originalChildProcess.spawnSync.call(this, command, args, options),
				inputOptions && inputOptions.stdio, cliProgressFooter
			);
		};
	}),
	restoreChildProcess: d(function () { Object.assign(childProcess, this._originalChildProcess); })
};
