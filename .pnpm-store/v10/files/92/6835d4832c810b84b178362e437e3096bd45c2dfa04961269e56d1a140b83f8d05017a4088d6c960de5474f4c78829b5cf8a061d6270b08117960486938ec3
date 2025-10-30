"use strict";

const PassThru              = require("../../utils/pass-thru")
    , isModuleNotFoundError = require("../../is-module-not-found-error");

const resolver = function () { return new PassThru(null); };

module.exports = function (t, a) {
	const resolve = t(resolver, resolver);
	a.throws(() => { resolve(); }, TypeError);
	a.throws(() => { resolve("asdfa"); }, TypeError);
	a.throws(() => { resolve("asdfa", ""); }, TypeError);
	try {
		resolve("asdfa", "elo");
		throw new Error("Unexpected");
	} catch (error) {
		a(isModuleNotFoundError(error, "elo"), true);
	}
};
