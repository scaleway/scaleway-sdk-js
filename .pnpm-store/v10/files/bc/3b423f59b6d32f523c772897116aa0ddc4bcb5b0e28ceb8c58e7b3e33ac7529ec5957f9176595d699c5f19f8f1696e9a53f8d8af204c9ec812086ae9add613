"use strict";

const d                   = require("d")
    , overrideStdoutWrite = require("process-utils/override-stdout-write")
    , overrideStderrWrite = require("process-utils/override-stderr-write")
    , StdinDiscarder      = require("../stdin-discarder");

module.exports = {
	_isStdoutOverriden: d(false),
	_isStderrRedirected: d(false),
	_isStdObserved: d(false),
	overrideStd: d(function () {
		if (this._isStdObserved) {
			this._stdoutData.restoreStdoutWrite();
			this._stderrData.restoreStderrWrite();
			this._isStdObserved = false;
		}
		if (!this._isStdinDiscarded && this._shouldDiscardStdin) {
			if (!this._sdtinDiscarder) this._sdtinDiscarder = new StdinDiscarder();
			this._sdtinDiscarder.start();
			this._isStdinDiscarded = true;
		}
		if (!this._isStdoutOverriden && this._shouldOverrideStdout) {
			this._stdoutData = overrideStdoutWrite(data => this._repaint(data));
			this._writeOriginalStdout = this._stdoutData.originalStdoutWrite;
			this._isStdoutOverriden = true;
		}
		if (!this._isStderrRedirected && this._shouldRedirectStderr) {
			this._stderrData = overrideStderrWrite(data => process.stdout.write(data));
			this._isStderrRedirected = true;
		}
		this._isActive = true;
	}),
	restoreStd: d(function () {
		if (this._isStdoutOverriden) {
			this._stdoutData.restoreStdoutWrite();
			delete this._writeOriginalStdout;
			this._isStdoutOverriden = false;
		}
		if (this._isStderrRedirected) {
			this._stderrData.restoreStderrWrite();
			this._isStderrRedirected = false;
		}
		if (this._isStdinDiscarded) {
			this._sdtinDiscarder.stop();
			this._isStdinDiscarded = false;
		}
		this._isActive = false;
		if (!this._isStdObserved) {
			this._isStdObserved = true;
			this._stdoutData = overrideStdoutWrite((data, originalWrite) => {
				originalWrite(data);
				this._updateLastOutCharacters(data);
			});
			this._stderrData = overrideStderrWrite((data, originalWrite) => {
				originalWrite(data);
				this._updateLastOutCharacters(data);
			});
		}
	})
};
