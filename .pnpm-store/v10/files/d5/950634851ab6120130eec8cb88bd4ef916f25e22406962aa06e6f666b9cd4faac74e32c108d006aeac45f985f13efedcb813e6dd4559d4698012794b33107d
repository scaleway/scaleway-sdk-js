"use strict";

const d = require("d");

const isWindows = process.platform === "win32";

module.exports = {
	_shouldAddProgressAnimationPrefix: d(false),
	_progressAnimationInterval: d(isWindows ? 100 : 80),
	_progressAnimationIntervalId: d(null),
	_progressAnimationPrefixFrames: d(
		isWindows
			? ["┤", "┘", "┴", "└", "├", "┌", "┬", "┐"]
			: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
	)
};
