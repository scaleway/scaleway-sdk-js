export const cachedResults: LRUCache<{}, {}, unknown>;
export class Calculator {
    set hasNum(value: boolean);
    get hasNum(): boolean;
    get numSum(): any[];
    get numMul(): any[];
    set hasPct(value: boolean);
    get hasPct(): boolean;
    get pctSum(): any[];
    get pctMul(): any[];
    set hasDim(value: boolean);
    get hasDim(): boolean;
    get dimSum(): any[];
    get dimSub(): any[];
    get dimMul(): any[];
    get dimDiv(): any[];
    set hasEtc(value: boolean);
    get hasEtc(): boolean;
    get etcSum(): any[];
    get etcSub(): any[];
    get etcMul(): any[];
    get etcDiv(): any[];
    clear(): void;
    sort(values?: any[]): any[];
    multiply(): string | null;
    sum(): string | null;
    #private;
}
export function sortCalcValues(values?: any[], finalize?: boolean): string;
export function serializeCalc(value: string, opt?: {
    format?: string;
}): string | null;
export function resolveDimension(token: any[], opt?: {
    dimension?: object;
}): string | null;
export function parseTokens(tokens: Array<any[]>, opt?: object): Array<string>;
export function cssCalc(value: string, opt?: {
    dimension?: object;
    format?: string;
}): string | null;
import { LRUCache } from 'lru-cache';
