"use strict";

module.exports = (dir, callback) => {
	const { entries } = dir;

	dir.entries = async function* () {
		for await (const entry of entries.call(this)) yield entry;
		callback();
	};

	Object.defineProperty(dir, Symbol.asyncIterator, {
		__proto__: null,
		value: dir.entries,
		enumerable: false,
		writable: true,
		configurable: true,
	});
};
