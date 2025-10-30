"use strict";

const ensureString = require("type/string/ensure")
    , isObject     = require("type/object/is")
    , path         = require("path")
    , fs           = require("fs");

module.exports = (filename, options = {}) => {
	filename = path.resolve(ensureString(filename));
	if (!isObject(options)) options = {};
	try {
		fs.unlinkSync(filename);
	} catch (error) {
		if (error.code === "ENOENT" && options.loose) return;
		throw error;
	}
};
