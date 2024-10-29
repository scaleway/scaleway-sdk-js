import { VitestRunner, VitestRunnerImportSource, File, Suite, Task, CancelReason, Test, Custom, TaskContext, ExtendedContext } from '@vitest/runner';
import { S as SerializedConfig } from './chunks/config.DCnyCTbs.js';
import * as tinybench from 'tinybench';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/snapshot/environment';

declare class VitestTestRunner implements VitestRunner {
    config: SerializedConfig;
    private snapshotClient;
    private workerState;
    private __vitest_executor;
    private cancelRun;
    private assertionsErrors;
    pool: string;
    constructor(config: SerializedConfig);
    importFile(filepath: string, source: VitestRunnerImportSource): unknown;
    onCollectStart(file: File): void;
    onBeforeRunFiles(): void;
    onAfterRunFiles(): void;
    onAfterRunSuite(suite: Suite): Promise<void>;
    onAfterRunTask(test: Task): void;
    onCancel(_reason: CancelReason): void;
    onBeforeRunTask(test: Task): Promise<void>;
    onBeforeRunSuite(suite: Suite): Promise<void>;
    onBeforeTryTask(test: Task): void;
    onAfterTryTask(test: Task): void;
    extendTaskContext<T extends Test | Custom>(context: TaskContext<T>): ExtendedContext<T>;
}

declare class NodeBenchmarkRunner implements VitestRunner {
    config: SerializedConfig;
    private __vitest_executor;
    constructor(config: SerializedConfig);
    importTinybench(): Promise<typeof tinybench>;
    importFile(filepath: string, source: VitestRunnerImportSource): unknown;
    runSuite(suite: Suite): Promise<void>;
    runTask(): Promise<void>;
}

export { NodeBenchmarkRunner, VitestTestRunner };
