"use strict";

const isObject                     = require("type/object/is")
    , formatParts                  = require("sprintf-kit/format-parts")
    , ansiRegex                    = require("ansi-regex")({ onlyFirst: true })
    , { blackBright, red, yellow } = require("cli-color/bare")
    , LogWriter                    = require("log/lib/abstract-writer")
    , colorsSupportLevel           = require("./private/colors-support-level")
    , levelPrefixes                = require("./level-prefixes")
    , getNamespacePrefix           = require("./get-namespace-prefix")
    , resolveParts                 = require("./resolve-format-parts");

const hasAnsi = string => ansiRegex.test(string);

const WARNING_LEVEL_INDEX = 1, ERROR_LEVEL_INDEX = 0;

class NodeLogWriter extends LogWriter {
	constructor(options = {}) {
		if (!isObject(options)) options = {};
		super(options.env || process.env, options);
	}
	setupLevelLogger(logger) {
		super.setupLevelLogger(logger);
		if (colorsSupportLevel) this.setupLevelMessageDecorator(logger);
	}
	setupLevelMessageDecorator(levelLogger) {
		if (levelLogger.levelIndex === ERROR_LEVEL_INDEX) {
			levelLogger.messageContentDecorator = red;
		} else if (levelLogger.levelIndex === WARNING_LEVEL_INDEX) {
			levelLogger.messageContentDecorator = yellow;
		}
	}
	resolveMessageTimestamp(event) {
		super.resolveMessageTimestamp(event);
		if (!colorsSupportLevel) return;
		if (event.messageTimestamp) event.messageTimestamp = blackBright(event.messageTimestamp);
	}
	resolveMessageContent(event) {
		if (!event.messageTokens.length) {
			event.messageContent = "";
			return;
		}
		const { logger } = event;
		const parts = resolveParts(...event.messageTokens);
		if (logger.messageContentDecorator) {
			parts.literals = parts.literals.map(literal => logger.messageContentDecorator(literal));
			for (const substitution of parts.substitutions) {
				const { placeholder, value } = substitution;
				if (
					placeholder.type === "s" &&
					placeholder.flags &&
					placeholder.flags.includes("#") &&
					!hasAnsi(value)
				) {
					// Raw string
					substitution.value = logger.messageContentDecorator(value);
				}
			}
		}
		event.messageContent = formatParts(parts);
	}
	writeMessage(event) { process.stderr.write(`${ event.message }\n`); }
}
NodeLogWriter.levelPrefixes = levelPrefixes;

if (colorsSupportLevel) NodeLogWriter.resolveNamespaceMessagePrefix = getNamespacePrefix;

module.exports = NodeLogWriter;
