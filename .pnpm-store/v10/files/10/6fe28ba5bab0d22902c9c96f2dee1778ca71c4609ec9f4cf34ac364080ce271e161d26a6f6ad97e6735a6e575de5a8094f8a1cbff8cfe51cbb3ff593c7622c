"use strict";

const isThenable    = require("type/thenable/is")
    , finallyMethod = require("ext/thenable_/finally");

module.exports = (callback, callbackArgs, restore) => {
	let result;
	try {
		result = callback(...callbackArgs);
	} catch (error) {
		restore();
		throw error;
	}
	if (!isThenable(result)) {
		restore();
		return result;
	}
	return finallyMethod.call(result, restore);
};
