import { Profiler } from 'node:inspector';
import { V8CoverageProvider } from './provider.js';
import 'istanbul-lib-coverage';
import 'vitest/coverage';
import 'vitest';
import 'vitest/node';

declare const _default: {
    startCoverage(): void;
    takeCoverage(): Promise<{
        result: Profiler.ScriptCoverage[];
    }>;
    stopCoverage(): void;
    getProvider(): Promise<V8CoverageProvider>;
};

export { _default as default };
