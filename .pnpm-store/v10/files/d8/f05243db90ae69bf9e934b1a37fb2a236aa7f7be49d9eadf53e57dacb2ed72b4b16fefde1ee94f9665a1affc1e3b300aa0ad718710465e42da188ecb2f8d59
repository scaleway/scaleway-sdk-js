"use strict";

const ensureString   = require("es5-ext/object/validate-stringifiable-value")
    , ensureValue    = require("es5-ext/object/valid-value")
    , ensureInterval = require("timers-ext/valid-timeout")
    , d              = require("d")
    , autoBind       = require("d/auto-bind")
    , strip          = require("cli-color/strip")
    , defaults       = require("./defaults");

module.exports = {
	_progressAnimationPrefixFramesCurrentIndex: d(0),
	progressAnimationPrefixFrames: d.gs(
		function () { return this._progressAnimationPrefixFrames; },
		function (frames) {
			frames = Array.from(frames, ensureString);
			if (frames.length < 2) {
				throw new TypeError("Expected at least two animation frames");
			}
			this._progressAnimationPrefixFrames = frames;
			this._progressAnimationPrefixFramesCurrentIndex = 0;
			this._rewriteProgressAnimationFrame();
		}
	),
	progressAnimationInterval: d.gs(
		function () { return this._progressAnimationInterval; },
		function (interval) {
			interval = ensureInterval(interval);
			if (this._progressAnimationInterval === interval) return;
			this._progressAnimationInterval = interval;
			if (!this._shouldAddProgressAnimationPrefix) return;
			clearInterval(this._progressAnimationIntervalId);
			this._progressAnimationIntervalId = setInterval(
				this._rewriteProgressAnimationFrame, interval
			);
			if (this._progressAnimationIntervalId.unref) {
				this._progressAnimationIntervalId.unref();
			}
		}
	),
	shouldAddProgressAnimationPrefix: d.gs(
		function () { return this._shouldAddProgressAnimationPrefix; },
		function (value) {
			value = Boolean(ensureValue(value));
			if (this._shouldAddProgressAnimationPrefix === value) return;
			if (this._progressContent) {
				const prefix = `${
					this._progressAnimationPrefixFrames[
						this._progressAnimationPrefixFramesCurrentIndex
					]
				} `;
				let progressRows = this._progressContent.split("\n");
				if (value) {
					progressRows = progressRows.map(
						progressRow => progressRow && prefix + progressRow
					);
				} else {
					progressRows = progressRows.map(progressRow =>
						progressRow.slice(prefix.length)
					);
				}
				this._progressContent = progressRows.join("\n");
				this._repaint();
			}
			this._shouldAddProgressAnimationPrefix = value;
			if (value) {
				this._progressAnimationIntervalId = setInterval(
					this._rewriteProgressAnimationFrame, 80
				);
				if (this._progressAnimationIntervalId.unref) {
					this._progressAnimationIntervalId.unref();
				}
			} else {
				clearInterval(this._progressAnimationIntervalId);
			}
		}
	),
	...defaults,
	...autoBind({
		_rewriteProgressAnimationFrame: d(function () {
			if (!this._rawProgressRows.length) return;
			this._progressAnimationPrefixFramesCurrentIndex =
				(this._progressAnimationPrefixFramesCurrentIndex + 1) %
				this._progressAnimationPrefixFrames.length;
			const prefix = `${
				this._progressAnimationPrefixFrames[this._progressAnimationPrefixFramesCurrentIndex]
			} `;
			const paddingLength = [...strip(prefix)].length;
			this._progressContent = `${
				this._rawProgressRows
					.map(progressRow => {
						if (!progressRow) return "";
						return (
							prefix +
							progressRow.split("\n").join(`\n${ " ".repeat(paddingLength) }`)
						);
					})
					.join("\n")
			}\n`;
			this._repaint();
		})
	})
};
