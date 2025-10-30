"use strict";

const toNaturalNumber = require("es5-ext/number/to-pos-integer");

let inspectDepth = Number(process.env.FORMAT_INSPECT_DEPTH);
if (isFinite(inspectDepth)) inspectDepth = toNaturalNumber(inspectDepth);
if (!inspectDepth) inspectDepth = 4;

module.exports = inspectDepth;
