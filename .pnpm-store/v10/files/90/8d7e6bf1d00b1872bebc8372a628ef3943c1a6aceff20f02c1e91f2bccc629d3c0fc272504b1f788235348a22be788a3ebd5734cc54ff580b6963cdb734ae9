"use strict";

const ensurePlainFunction = require("type/plain-function/ensure")
    , processCallback     = require("./process-callback");

module.exports = type => (customWrite, callback = null) => {
	ensurePlainFunction(callback, { isOptional: true });
	const stream = process[`std${ type }`];
	ensurePlainFunction(customWrite);
	const originalWrite = stream.write;
	const originalStdWrite = originalWrite.bind(stream);
	stream.write = function (data) { return customWrite.call(this, data, originalStdWrite); };
	const restore = () => (stream.write = originalWrite);
	if (!callback) {
		return {
			[`originalStd${ type }Write`]: originalStdWrite,
			originalWrite,
			[`restoreStd${ type }Write`]: restore
		};
	}
	return processCallback(callback, [originalStdWrite, originalWrite], restore);
};
