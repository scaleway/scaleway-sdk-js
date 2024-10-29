import type { FileExtension } from '../types';
declare const enumValues: {
    type: "string";
    enum: string[];
};
type DefaultConfig = (typeof enumValues)['enum'][number];
type MessageId = 'missing' | 'unexpected';
type NormalizedOptions = {
    defaultConfig?: DefaultConfig;
    pattern?: Record<FileExtension, DefaultConfig>;
    ignorePackages?: boolean;
};
type Options = DefaultConfig | NormalizedOptions;
declare const _default: import("@typescript-eslint/utils/ts-eslint").RuleModule<MessageId, Options[], {
    category?: string;
    recommended?: true;
}, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
export = _default;
