"use strict";

const fs            = require("fs")
    , path          = require("path")
    , ensureString  = require("type/string/ensure")
    , isObject      = require("type/object/is")
    , toShortString = require("type/lib/to-short-string");

module.exports = (dirnameInput, options = {}) => {
	const dirname = path.resolve(ensureString(dirnameInput));
	if (!isObject(options)) options = {};
	if (!options.recursive) {
		fs.rmdirSync(dirname);
		return;
	}
	try {
		emptyDirSync(dirname, options);
		fs.rmdirSync(dirname);
	} catch (error) {
		if (!error.errors) throw error;
		let errorMessage = `Could not remove ${ toShortString(dirnameInput) } due to:\n- ${
			error.errors.slice(0, 5).map(({ code, _filename }) => `${ code } on ${ _filename }`)
		}`;
		if (error.errors.length > 5) {
			errorMessage += `\nand ${ error.errors.length - 5 } other errors`;
		}
		throw Object.assign(new Error(errorMessage), { errors: error.errors });
	}
};

const emptyDirSync = require("./empty-dir-sync");
