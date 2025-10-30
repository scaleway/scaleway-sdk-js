import prettier, { SupportOption } from "prettier";
import { JsdocOptions } from "./types";
declare const options: Record<keyof JsdocOptions, SupportOption>;
declare const defaultOptions: JsdocOptions;
declare const languages: prettier.SupportLanguage[];
declare const parsers: {
    readonly babel: {
        preprocess: (text: string, options: prettier.ParserOptions) => string;
        parse: any;
        astFormat: string;
        hasPragma?: ((text: string) => boolean) | undefined;
        locStart: (node: any) => number;
        locEnd: (node: any) => number;
    };
    readonly "babel-flow": {
        preprocess: (text: string, options: prettier.ParserOptions) => string;
        parse: any;
        astFormat: string;
        hasPragma?: ((text: string) => boolean) | undefined;
        locStart: (node: any) => number;
        locEnd: (node: any) => number;
    };
    readonly "babel-ts": {
        preprocess: (text: string, options: prettier.ParserOptions) => string;
        parse: any;
        astFormat: string;
        hasPragma?: ((text: string) => boolean) | undefined;
        locStart: (node: any) => number;
        locEnd: (node: any) => number;
    };
    readonly flow: {
        preprocess: (text: string, options: prettier.ParserOptions) => string;
        parse: any;
        astFormat: string;
        hasPragma?: ((text: string) => boolean) | undefined;
        locStart: (node: any) => number;
        locEnd: (node: any) => number;
    };
    readonly typescript: prettier.Parser<any>;
    readonly "jsdoc-parser": {
        preprocess: (text: string, options: prettier.ParserOptions) => string;
        parse: any;
        astFormat: string;
        hasPragma?: ((text: string) => boolean) | undefined;
        locStart: (node: any) => number;
        locEnd: (node: any) => number;
    };
};
export { languages, options, parsers, defaultOptions };
