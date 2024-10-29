"use strict";
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const utils_1 = require("../utils");
const enumValues = {
    type: 'string',
    enum: ['always', 'ignorePackages', 'never'],
};
const patternProperties = {
    type: 'object',
    patternProperties: { '.*': enumValues },
};
const properties = {
    type: 'object',
    properties: {
        pattern: patternProperties,
        ignorePackages: {
            type: 'boolean',
        },
    },
};
function buildProperties(context) {
    const result = {
        defaultConfig: 'never',
        pattern: {},
        ignorePackages: false,
    };
    for (const obj of context.options) {
        if (typeof obj === 'string') {
            result.defaultConfig = obj;
            continue;
        }
        if (obj.pattern === undefined && obj.ignorePackages === undefined) {
            Object.assign(result.pattern, obj);
            continue;
        }
        if (obj.pattern !== undefined) {
            Object.assign(result.pattern, obj.pattern);
        }
        if (obj.ignorePackages !== undefined) {
            result.ignorePackages = obj.ignorePackages;
        }
    }
    if (result.defaultConfig === 'ignorePackages') {
        result.defaultConfig = 'always';
        result.ignorePackages = true;
    }
    return result;
}
function isExternalRootModule(file) {
    if (file === '.' || file === '..') {
        return false;
    }
    const slashCount = file.split('/').length - 1;
    if (slashCount === 0) {
        return true;
    }
    if ((0, utils_1.isScoped)(file) && slashCount <= 1) {
        return true;
    }
    return false;
}
module.exports = (0, utils_1.createRule)({
    name: 'extensions',
    meta: {
        type: 'suggestion',
        docs: {
            category: 'Style guide',
            description: 'Ensure consistent use of file extension within the import path.',
        },
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [enumValues],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [enumValues, properties],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [properties],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [patternProperties],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [enumValues, patternProperties],
                    additionalItems: false,
                },
            ],
        },
        messages: {
            missing: 'Missing file extension {{extension}}for "{{importPath}}"',
            unexpected: 'Unexpected use of file extension "{{extension}}" for "{{importPath}}"',
        },
    },
    defaultOptions: [],
    create(context) {
        const props = buildProperties(context);
        function getModifier(extension) {
            return props.pattern[extension] || props.defaultConfig;
        }
        function isUseOfExtensionRequired(extension, isPackage) {
            return (getModifier(extension) === 'always' &&
                (!props.ignorePackages || !isPackage));
        }
        function isUseOfExtensionForbidden(extension) {
            return getModifier(extension) === 'never';
        }
        function isResolvableWithoutExtension(file) {
            const extension = node_path_1.default.extname(file);
            const fileWithoutExtension = file.slice(0, -extension.length);
            const resolvedFileWithoutExtension = (0, utils_1.resolve)(fileWithoutExtension, context);
            return resolvedFileWithoutExtension === (0, utils_1.resolve)(file, context);
        }
        return (0, utils_1.moduleVisitor)((source, node) => {
            if (!source || !source.value) {
                return;
            }
            const importPathWithQueryString = source.value;
            if ((0, utils_1.isBuiltIn)(importPathWithQueryString, context.settings)) {
                return;
            }
            const importPath = importPathWithQueryString.replace(/\?(.*)$/, '');
            if (isExternalRootModule(importPath)) {
                return;
            }
            const resolvedPath = (0, utils_1.resolve)(importPath, context);
            const extension = node_path_1.default
                .extname(resolvedPath || importPath)
                .slice(1);
            const isPackage = (0, utils_1.isExternalModule)(importPath, (0, utils_1.resolve)(importPath, context), context) || (0, utils_1.isScoped)(importPath);
            if (!extension || !importPath.endsWith(`.${extension}`)) {
                if (('importKind' in node && node.importKind === 'type') ||
                    ('exportKind' in node && node.exportKind === 'type')) {
                    return;
                }
                const extensionRequired = isUseOfExtensionRequired(extension, isPackage);
                const extensionForbidden = isUseOfExtensionForbidden(extension);
                if (extensionRequired && !extensionForbidden) {
                    context.report({
                        node: source,
                        messageId: 'missing',
                        data: {
                            extension: extension ? `"${extension}" ` : '',
                            importPath: importPathWithQueryString,
                        },
                    });
                }
            }
            else if (extension &&
                isUseOfExtensionForbidden(extension) &&
                isResolvableWithoutExtension(importPath)) {
                context.report({
                    node: source,
                    messageId: 'unexpected',
                    data: {
                        extension,
                        importPath: importPathWithQueryString,
                    },
                });
            }
        }, { commonjs: true });
    },
});
//# sourceMappingURL=extensions.js.map