"use strict";

const d                  = require("d")
    , strip              = require("cli-color/strip")
    , resolveLinesLength = require("./resolve-lines-length");

const newLineRe = /[\n\r]/u;

module.exports = {
	updateProgress: d(function (progressRows) {
		if (!Array.isArray(progressRows)) {
			progressRows = progressRows ? progressRows.split(newLineRe) : [];
		}
		if (this._isDisabled) {
			this._disabledProgressRows = progressRows;
			return;
		}
		this._rawProgressRows = progressRows;
		if (progressRows.length) {
			if (this._shouldAddProgressAnimationPrefix) {
				const prefix = `${
					this._progressAnimationPrefixFrames[
						this._progressAnimationPrefixFramesCurrentIndex
					]
				} `;
				const paddingLength = [...strip(prefix)].length;
				progressRows = progressRows.map(progressRow => {
					if (!progressRow) return progressRow;
					return (
						prefix + progressRow.split("\n").join(`\n${ " ".repeat(paddingLength) }`)
					);
				});
			}
			this._progressContent = `${ progressRows.join("\n") }\n`;
			if (!this._isActive) this.overrideStd();
		} else {
			this._progressContent = "";
			if (!this._isActive) return;
		}
		this._repaint();
		const newProgressLinesCount = resolveLinesLength(this._progressContent);

		if (newProgressLinesCount !== this._progressLinesCount) {
			this._progressOverflowLinesCount += this._progressLinesCount - newProgressLinesCount;
			if (this._progressOverflowLinesCount < 0) this._progressOverflowLinesCount = 0;
		}
		this._progressLinesCount = newProgressLinesCount;
		if (!this._progressContent) {
			this.restoreStd();
			this._progressOverflowLinesCount = 0;
		}
	})
};
