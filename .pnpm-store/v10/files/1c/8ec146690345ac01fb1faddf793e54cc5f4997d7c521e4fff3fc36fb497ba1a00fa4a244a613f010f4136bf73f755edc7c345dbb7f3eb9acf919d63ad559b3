"use strict";

const toNaturalNumber = require("es5-ext/number/to-pos-integer");

// Resolve intended inspect depth
let inspectDepth = Number(process.env.LOG_INSPECT_DEPTH || process.env.DEBUG_DEPTH);
if (inspectDepth && inspectDepth !== Infinity) inspectDepth = toNaturalNumber(inspectDepth);
if (!inspectDepth) inspectDepth = null;

module.exports = inspectDepth;
