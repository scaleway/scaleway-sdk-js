"use strict";

const ensureString           = require("es5-ext/object/validate-stringifiable-value")
    , isObject               = require("type/object/is")
    , isValue                = require("type/value/is")
    , d                      = require("d")
    , strip                  = require("cli-color/strip")
    , updateProgressProps    = require("./update-progress-props")
    , overrideStdProps       = require("./override-std-props")
    , progressAnimationProps = require("./progress-animation-props")
    , disableProps           = require("./disable-props")
    , repaintProps           = require("./repaint-props");

class CliProgressFooter {
	constructor(options = {}) {
		if (!isObject(options)) options = {};
		const shouldDiscardStdin = (() => {
			if (process.platform === "win32") return false;
			if (!process.stdin.isTTY) return false;
			return isValue(options.discardStdin) ? Boolean(options.discardStdin) : true;
		})();
		Object.defineProperties(this, {
			_progressLinesCount: d(0),
			_progressOverflowLinesCount: d(0),
			_progressContent: d(""),
			_rawProgressRows: d([]),
			_lastOutLineLength: d(0),
			_lastOutCharacters: d(""),
			_isActive: d(false),
			_shouldOverrideStdout: d(
				isValue(options.overrideStdout) ? Boolean(options.overrideStdout) : true
			),
			_shouldRedirectStderr: d(
				isValue(options.redirectStderr) ? Boolean(options.redirectStderr) : true
			),
			_shouldDiscardStdin: d(shouldDiscardStdin)
		});
		this.restoreStd();
		const shouldWorkaroundChildProcess = isValue(options.workaroundChildProcess)
			? Boolean(options.workaroundChildProcess)
			: true;
		if (shouldWorkaroundChildProcess) this.workaroundChildProcess();
	}
	writeStdout(data) {
		data = ensureString(data);
		if (this._isActive) this._repaint(data);
		else this._writeOriginalStdout(data);
	}

	_writeOriginalStdout(data) { process.stdout.write(data); }
	_updateLastOutCharacters(data) {
		const trailingData = strip(data.slice(-50));
		switch (trailingData.length) {
			case 0:
				break;
			case 1:
				this._lastOutCharacters = this._lastOutCharacters.slice(-1) + trailingData;
				break;
			default:
				this._lastOutCharacters = trailingData.slice(-2);
		}
	}
}

Object.defineProperties(CliProgressFooter.prototype, {
	...updateProgressProps,
	...progressAnimationProps,
	...overrideStdProps,
	...disableProps,
	...repaintProps
});

module.exports = CliProgressFooter;
