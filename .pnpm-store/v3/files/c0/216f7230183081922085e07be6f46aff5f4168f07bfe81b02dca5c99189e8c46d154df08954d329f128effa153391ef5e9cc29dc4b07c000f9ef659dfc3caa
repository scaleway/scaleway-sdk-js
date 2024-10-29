import { Custom } from '@vitest/runner';
import { ChainableFunction } from '@vitest/runner/utils';
import { TaskResult, Bench, Options } from 'tinybench';

interface Benchmark extends Custom {
    meta: {
        benchmark: true;
        result?: TaskResult;
    };
}
interface BenchmarkResult extends TaskResult {
    name: string;
    rank: number;
}
type BenchFunction = (this: Bench) => Promise<void> | void;
type ChainableBenchmarkAPI = ChainableFunction<'skip' | 'only' | 'todo', (name: string | Function, fn?: BenchFunction, options?: Options) => void>;
type BenchmarkAPI = ChainableBenchmarkAPI & {
    skipIf: (condition: any) => ChainableBenchmarkAPI;
    runIf: (condition: any) => ChainableBenchmarkAPI;
};

export type { BenchmarkResult as B, Benchmark as a, BenchFunction as b, BenchmarkAPI as c };
