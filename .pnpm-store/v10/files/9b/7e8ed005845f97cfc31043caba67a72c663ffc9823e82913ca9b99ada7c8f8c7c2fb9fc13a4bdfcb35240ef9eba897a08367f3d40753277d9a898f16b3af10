"use strict";

const fs            = require("fs")
    , path          = require("path")
    , ensureString  = require("type/string/ensure")
    , isObject      = require("type/object/is")
    , toShortString = require("type/lib/to-short-string");

const emptyDirSync = (dirname, options) => {
	let errors;
	for (const basename of fs.readdirSync(dirname)) {
		const filename = path.resolve(dirname, basename);
		try {
			const stats = fs.statSync(filename);
			if (stats.isDirectory()) {
				if (options.recursive) emptyDirSync(filename, options);
				rmDirSync(filename);
			} else {
				fs.unlinkSync(filename);
			}
		} catch (error) {
			if (!errors) errors = [];
			if (error.errors) errors.push(...error.errors);
			else errors.push(Object.assign(error, { _filename: filename }));
		}
	}
	if (errors) {
		throw Object.assign(new Error("Could not empty dir"), { errors });
	}
};

module.exports = (dirnameInput, options = {}) => {
	const dirname = path.resolve(ensureString(dirnameInput));
	if (!isObject(options)) options = {};
	try {
		emptyDirSync(dirname, options);
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

const rmDirSync = require("./rmdir-sync");
