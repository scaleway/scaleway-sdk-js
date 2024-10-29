"use strict";
const utils_1 = require("../utils");
module.exports = (0, utils_1.createRule)({
    name: 'unambiguous',
    meta: {
        type: 'suggestion',
        docs: {
            category: 'Module systems',
            description: 'Forbid potentially ambiguous parse goal (`script` vs. `module`).',
        },
        schema: [],
        messages: {
            module: 'This module could be parsed as a valid script.',
        },
    },
    defaultOptions: [],
    create(context) {
        if (context.parserOptions.sourceType !== 'module') {
            return {};
        }
        return {
            Program(ast) {
                if (!(0, utils_1.isUnambiguousModule)(ast)) {
                    context.report({
                        node: ast,
                        messageId: 'module',
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=unambiguous.js.map