/**
@typedef {import('./regex.js').PluginData} PluginData
*/
/**
Apply transformations for atomic groups: `(?>…)`.
@param {string} expression
@param {PluginData} data
@returns {string}
*/
export function atomicPlugin(expression: string, data: PluginData): string;
/**
Transform posessive quantifiers into atomic groups. The posessessive quantifiers are:
`?+`, `*+`, `++`, `{N}+`, `{N,}+`, `{N,N}+`.
This follows Java, PCRE, Perl, and Python.
Possessive quantifiers in Oniguruma and Onigmo are only: `?+`, `*+`, `++`.
@param {string} expression
@returns {string}
*/
export function possessivePlugin(expression: string): string;
export type PluginData = import("./regex.js").PluginData;
