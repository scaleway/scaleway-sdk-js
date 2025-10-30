// Maintain support for very old versions of Node.js

"use strict";

module.exports = Buffer.from
	? Buffer.from
	: function (data, encoding) {
			// eslint-disable-next-line no-buffer-constructor
			return new Buffer(data, encoding);
	  };
