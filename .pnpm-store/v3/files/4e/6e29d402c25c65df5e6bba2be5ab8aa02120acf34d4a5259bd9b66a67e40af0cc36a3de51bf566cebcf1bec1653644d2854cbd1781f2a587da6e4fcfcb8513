import { V as VitestEnvironment$1, S as SerializedSpec, b as RawErrsMap$1, T as TscErrorInfo$1, c as CollectLineNumbers$1, d as CollectLines$1, e as RootAndTarget$1, f as Context$1, C as CoverageProvider$1, g as ReportContext$1, a as CoverageProviderModule$1, h as CoverageReporter$1, i as CoverageProviderName, j as CoverageOptions$1, R as ResolvedCoverageOptions$1, B as BaseCoverageOptions$1, k as CoverageIstanbulOptions$1, l as CoverageV8Options$1, m as CustomProviderOptions$1, n as Reporter$1, o as Vitest$1, p as BrowserScript$1, q as BrowserConfigOptions$1, r as BuiltinEnvironment$1, P as Pool$1, s as PoolOptions$1, t as CSSModuleScopeStrategy$1, A as ApiConfig$1, u as VitestRunMode$1, D as DepsOptimizationOptions$1, v as TransformModePatterns$1, I as InlineConfig$1, w as TypecheckConfig$1, U as UserConfig$1, x as ResolvedConfig$1, y as ProjectConfig$1, z as UserWorkspaceConfig$1, E as BenchmarkUserOptions$1 } from './chunks/reporters.C_zwCd4j.js';
import { Plugin } from '@vitest/pretty-format';
import { SnapshotState } from '@vitest/snapshot';
export { SnapshotData, SnapshotMatchOptions, SnapshotResult, SnapshotSerializer, SnapshotStateOptions, SnapshotSummary, SnapshotUpdateState, UncheckedSnapshot } from '@vitest/snapshot';
import { PromisifyAssertion, Tester, ExpectStatic } from '@vitest/expect';
export { Assertion, AsymmetricMatchersContaining, ExpectPollOptions, ExpectStatic, JestAssertion } from '@vitest/expect';
import { B as BenchmarkResult } from './chunks/benchmark.puBFxyfE.js';
export { b as BenchFunction, a as Benchmark, c as BenchmarkAPI } from './chunks/benchmark.puBFxyfE.js';
import { U as UserConsoleLog, P as ProvidedContext, M as ModuleGraphData, b as Awaitable$1, N as Nullable$1, c as Arrayable$1, d as ArgumentsType$1, e as MutableArray$1, C as Constructable$1, O as OnServerRestartHandler$1, a as EnvironmentReturn$1, V as VmEnvironmentReturn$1, E as Environment$1, R as ResolvedTestEnvironment$1, J as JSDOMOptions$1, H as HappyDOMOptions$1, f as EnvironmentOptions$1 } from './chunks/environment.0M5R1SX_.js';
export { A as AfterSuiteRunMeta, g as ModuleCache } from './chunks/environment.0M5R1SX_.js';
import { TaskPopulated, TaskResultPack, File as File$1, Suite as Suite$1, Test as Test$1, Custom as Custom$1, Task as Task$1, SequenceHooks as SequenceHooks$1, SequenceSetupFiles as SequenceSetupFiles$1 } from '@vitest/runner';
export { CancelReason, DoneCallback, ExtendedContext, HookCleanupCallback, HookListener, OnTestFailedHandler, RunMode, Custom as RunnerCustomCase, Task as RunnerTask, Test as RunnerTestCase, File as RunnerTestFile, Suite as RunnerTestSuite, RuntimeContext, SuiteAPI, SuiteCollector, SuiteFactory, SuiteHooks, TaskBase, TaskContext, TaskCustomOptions, TaskMeta, TaskResult, TaskResultPack, TaskState, TestAPI, TestContext, TestFunction, TestOptions, afterAll, afterEach, beforeAll, beforeEach, describe, it, onTestFailed, onTestFinished, suite, test } from '@vitest/runner';
export { b as bench } from './chunks/suite.CcK46U-P.js';
import { F as FakeTimerInstallOpts, R as RuntimeOptions, S as SerializedConfig } from './chunks/config.DCnyCTbs.js';
export { b as RuntimeConfig, a as SerializedCoverageConfig } from './chunks/config.DCnyCTbs.js';
import { M as MockFactoryWithHelper, a as BirpcReturn } from './chunks/worker.C5iHKIaJ.js';
export { C as ContextRPC, e as ContextTestEnvironment, c as ResolveIdFunction, b as RunnerRPC, R as RuntimeRPC, W as WorkerGlobalState, d as WorkerRPC } from './chunks/worker.C5iHKIaJ.js';
import { spyOn, fn, MaybeMockedDeep, MaybeMocked, MaybePartiallyMocked, MaybePartiallyMockedDeep, MockInstance } from '@vitest/spy';
export { Mock, MockContext, MockInstance, Mocked, MockedClass, MockedFunction, MockedObject } from '@vitest/spy';
export { W as WorkerContext } from './chunks/worker.DKkAC4Qw.js';
export { ErrorWithDiff, ParsedStack, SerializedError, TestError } from '@vitest/utils';
export { DiffOptions } from '@vitest/utils/diff';
import * as chai from 'chai';
export { chai };
export { assert, should } from 'chai';
export { Bench as BenchFactory, Options as BenchOptions, Task as BenchTask, TaskResult as BenchTaskResult } from 'tinybench';
import 'vite';
import 'vite-node';
import 'node:stream';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'vite-node/server';
import '@vitest/utils/source-map';
import 'node:fs';
import '@vitest/runner/utils';
import '@vitest/snapshot/environment';
import 'node:worker_threads';

declare global {
    namespace Chai {
        interface Assertion {
            containSubset: (expected: any) => Assertion;
        }
        interface Assert {
            containSubset: (val: any, exp: any, msg?: string) => void;
        }
    }
}
interface SnapshotMatcher<T> {
    <U extends {
        [P in keyof T]: any;
    }>(snapshot: Partial<U>, message?: string): void;
    (message?: string): void;
}
interface InlineSnapshotMatcher<T> {
    <U extends {
        [P in keyof T]: any;
    }>(properties: Partial<U>, snapshot?: string, message?: string): void;
    (message?: string): void;
}
declare module '@vitest/expect' {
    interface MatcherState {
        environment: VitestEnvironment$1;
        snapshotState: SnapshotState;
    }
    interface ExpectPollOptions {
        interval?: number;
        timeout?: number;
        message?: string;
    }
    interface ExpectStatic {
        unreachable: (message?: string) => never;
        soft: <T>(actual: T, message?: string) => Assertion<T>;
        poll: <T>(actual: () => T, options?: ExpectPollOptions) => PromisifyAssertion<Awaited<T>>;
        addEqualityTesters: (testers: Array<Tester>) => void;
        assertions: (expected: number) => void;
        hasAssertions: () => void;
        addSnapshotSerializer: (plugin: Plugin) => void;
    }
    interface Assertion<T> {
        matchSnapshot: SnapshotMatcher<T>;
        toMatchSnapshot: SnapshotMatcher<T>;
        toMatchInlineSnapshot: InlineSnapshotMatcher<T>;
        toThrowErrorMatchingSnapshot: (message?: string) => void;
        toThrowErrorMatchingInlineSnapshot: (snapshot?: string, message?: string) => void;
        toMatchFileSnapshot: (filepath: string, message?: string) => Promise<void>;
    }
}
declare module '@vitest/runner' {
    interface TestContext {
        expect: ExpectStatic;
    }
    interface TaskMeta {
        typecheck?: boolean;
        benchmark?: boolean;
        failScreenshotPath?: string;
    }
    interface File {
        prepareDuration?: number;
        environmentLoad?: number;
    }
    interface TaskBase {
        logs?: UserConsoleLog[];
    }
    interface TaskResult {
        benchmark?: BenchmarkResult;
    }
}

/**
 * Negates a boolean type.
 */
declare type Not<T extends boolean> = T extends true ? false : true;
/**
 * Checks if all the boolean types in the {@linkcode Types} array are `true`.
 */
declare type And<Types extends boolean[]> = Types[number] extends true ? true : false;
/**
 * Represents an equality type that returns {@linkcode Right} if
 * {@linkcode Left} is `true`,
 * otherwise returns the negation of {@linkcode Right}.
 */
declare type Eq<Left extends boolean, Right extends boolean> = Left extends true ? Right : Not<Right>;
declare const secret: unique symbol;
declare type Secret = typeof secret;
/**
 * Checks if the given type is `never`.
 */
declare type IsNever<T> = [T] extends [never] ? true : false;
/**
 * Checks if the given type is `any`.
 */
declare type IsAny<T> = [T] extends [Secret] ? Not<IsNever<T>> : false;
/**
 * Determines if the given type is `unknown`.
 */
declare type IsUnknown<T> = [unknown] extends [T] ? Not<IsAny<T>> : false;
/**
 * Determines the printable type representation for a given type.
 */
declare type PrintType<T> = IsUnknown<T> extends true ? 'unknown' : IsNever<T> extends true ? 'never' : IsAny<T> extends true ? never : boolean extends T ? 'boolean' : T extends boolean ? `literal boolean: ${T}` : string extends T ? 'string' : T extends string ? `literal string: ${T}` : number extends T ? 'number' : T extends number ? `literal number: ${T}` : T extends null ? 'null' : T extends undefined ? 'undefined' : T extends (...args: any[]) => any ? 'function' : '...';
/**
 * Subjective "useful" keys from a type. For objects it's just `keyof` but for
 * tuples/arrays it's the number keys.
 *
 * @example
 * ```ts
 * UsefulKeys<{a: 1; b: 2}> // 'a' | 'b'
 *
 * UsefulKeys<['a', 'b']> // '0' | '1'
 *
 * UsefulKeys<string[]> // number
 * ```
 */
declare type UsefulKeys<T> = T extends any[] ? {
    [K in keyof T]: K;
}[number] : keyof T;
declare type MismatchInfo<Actual, Expected> = And<[Extends<PrintType<Actual>, '...'>, Not<IsAny<Actual>>]> extends true ? And<[Extends<any[], Actual>, Extends<any[], Expected>]> extends true ? Array<MismatchInfo<Extract<Actual, any[]>[number], Extract<Expected, any[]>[number]>> : {
    [K in UsefulKeys<Actual> | UsefulKeys<Expected>]: MismatchInfo<K extends keyof Actual ? Actual[K] : never, K extends keyof Expected ? Expected[K] : never>;
} : StrictEqualUsingBranding<Actual, Expected> extends true ? Actual : `Expected: ${PrintType<Expected>}, Actual: ${PrintType<Exclude<Actual, Expected>>}`;
/**
 * Represents a deeply branded type.
 *
 * Recursively walk a type and replace it with a branded type related to the
 * original. This is useful for equality-checking stricter than
 * `A extends B ? B extends A ? true : false : false`, because it detects the
 * difference between a few edge-case types that vanilla typescript
 * doesn't by default:
 * - `any` vs `unknown`
 * - `{ readonly a: string }` vs `{ a: string }`
 * - `{ a?: string }` vs `{ a: string | undefined }`
 *
 * __Note__: not very performant for complex types - this should only be used
 * when you know you need it. If doing an equality check, it's almost always
 * better to use {@linkcode StrictEqualUsingTSInternalIdenticalToOperator}.
 */
declare type DeepBrand<T> = IsNever<T> extends true ? {
    type: 'never';
} : IsAny<T> extends true ? {
    type: 'any';
} : IsUnknown<T> extends true ? {
    type: 'unknown';
} : T extends string | number | boolean | symbol | bigint | null | undefined | void ? {
    type: 'primitive';
    value: T;
} : T extends new (...args: any[]) => any ? {
    type: 'constructor';
    params: ConstructorParams<T>;
    instance: DeepBrand<InstanceType<Extract<T, new (...args: any) => any>>>;
} : T extends (...args: infer P) => infer R ? {
    type: 'function';
    params: DeepBrand<P>;
    return: DeepBrand<R>;
    this: DeepBrand<ThisParameterType<T>>;
    props: DeepBrand<Omit<T, keyof Function>>;
} : T extends any[] ? {
    type: 'array';
    items: {
        [K in keyof T]: T[K];
    };
} : {
    type: 'object';
    properties: {
        [K in keyof T]: DeepBrand<T[K]>;
    };
    readonly: ReadonlyKeys<T>;
    required: RequiredKeys<T>;
    optional: OptionalKeys<T>;
    constructorParams: DeepBrand<ConstructorParams<T>>;
};
/**
 * Extracts the keys from a type that are required (not optional).
 */
declare type RequiredKeys<T> = Extract<{
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T], keyof T>;
/**
 * Gets the keys of an object type that are optional.
 */
declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;
/**
 * Extracts the keys from a type that are not readonly.
 */
declare type ReadonlyKeys<T> = Extract<{
    [K in keyof T]-?: ReadonlyEquivalent<{
        [_K in K]: T[K];
    }, {
        -readonly [_K in K]: T[K];
    }> extends true ? never : K;
}[keyof T], keyof T>;
/**
 * Determines if two types, are equivalent in a `readonly` manner.
 */
declare type ReadonlyEquivalent<X, Y> = Extends<(<T>() => T extends X ? true : false), (<T>() => T extends Y ? true : false)>;
/**
 * Checks if one type extends another.
 */
declare type Extends<L, R> = IsNever<L> extends true ? IsNever<R> : [L] extends [R] ? true : false;
declare type ExtendsUsingBranding<L, R> = Extends<DeepBrand<L>, DeepBrand<R>>;
declare type ExtendsExcludingAnyOrNever<L, R> = IsAny<L> extends true ? IsAny<R> : Extends<L, R>;
/**
 * Checks if two types are strictly equal using
 * the TypeScript internal identical-to operator.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/55188#issuecomment-1656328122 much history}
 */
declare type StrictEqualUsingTSInternalIdenticalToOperator<L, R> = (<T>() => T extends (L & T) | T ? true : false) extends <T>() => T extends (R & T) | T ? true : false ? IsNever<L> extends IsNever<R> ? true : false : false;
/**
 * Checks if two types are strictly equal using branding.
 */
declare type StrictEqualUsingBranding<Left, Right> = And<[
    ExtendsUsingBranding<Left, Right>,
    ExtendsUsingBranding<Right, Left>
]>;
/**
 * Extracts the parameter types from a function type.
 */
declare type Params<Actual> = Actual extends (...args: infer ParameterTypes) => any ? ParameterTypes : never;
/**
 * Represents the constructor parameters of a class or constructor function.
 * If the constructor takes no arguments, an empty array is returned.
 */
declare type ConstructorParams<Actual> = Actual extends new (...args: infer P) => any ? Actual extends new () => any ? P | [] : P : never;
declare const mismatch: unique symbol;
declare type Mismatch = {
    [mismatch]: 'mismatch';
};
/**
 * A type which should match anything passed as a value but *doesn't*
 * match {@linkcode Mismatch}. It helps TypeScript select the right overload
 * for {@linkcode PositiveExpectTypeOf.toEqualTypeOf `.toEqualTypeOf()`} and
 * {@linkcode PositiveExpectTypeOf.toMatchTypeOf `.toMatchTypeOf()`}.
 */
declare const avalue: unique symbol;
/**
 * Represents a value that can be of various types.
 */
declare type AValue = {
    [avalue]?: undefined;
} | string | number | boolean | symbol | bigint | null | undefined | void;
/**
 * Represents the type of mismatched arguments between
 * the actual result and the expected result.
 *
 * If {@linkcode ActualResult} and {@linkcode ExpectedResult} are equivalent,
 * the type resolves to an empty tuple `[]`, indicating no mismatch.
 * If they are not equivalent, it resolves to a tuple containing the element
 * {@linkcode Mismatch}, signifying a discrepancy between
 * the expected and actual results.
 */
declare type MismatchArgs<ActualResult extends boolean, ExpectedResult extends boolean> = Eq<ActualResult, ExpectedResult> extends true ? [] : [Mismatch];
declare const inverted: unique symbol;
declare type Inverted<T> = {
    [inverted]: T;
};
declare const expectNull: unique symbol;
declare type ExpectNull<T> = {
    [expectNull]: T;
    result: ExtendsExcludingAnyOrNever<T, null>;
};
declare const expectUndefined: unique symbol;
declare type ExpectUndefined<T> = {
    [expectUndefined]: T;
    result: ExtendsExcludingAnyOrNever<T, undefined>;
};
declare const expectNumber: unique symbol;
declare type ExpectNumber<T> = {
    [expectNumber]: T;
    result: ExtendsExcludingAnyOrNever<T, number>;
};
declare const expectString: unique symbol;
declare type ExpectString<T> = {
    [expectString]: T;
    result: ExtendsExcludingAnyOrNever<T, string>;
};
declare const expectBoolean: unique symbol;
declare type ExpectBoolean<T> = {
    [expectBoolean]: T;
    result: ExtendsExcludingAnyOrNever<T, boolean>;
};
declare const expectVoid: unique symbol;
declare type ExpectVoid<T> = {
    [expectVoid]: T;
    result: ExtendsExcludingAnyOrNever<T, void>;
};
declare const expectFunction: unique symbol;
declare type ExpectFunction<T> = {
    [expectFunction]: T;
    result: ExtendsExcludingAnyOrNever<T, (...args: any[]) => any>;
};
declare const expectObject: unique symbol;
declare type ExpectObject<T> = {
    [expectObject]: T;
    result: ExtendsExcludingAnyOrNever<T, object>;
};
declare const expectArray: unique symbol;
declare type ExpectArray<T> = {
    [expectArray]: T;
    result: ExtendsExcludingAnyOrNever<T, any[]>;
};
declare const expectSymbol: unique symbol;
declare type ExpectSymbol<T> = {
    [expectSymbol]: T;
    result: ExtendsExcludingAnyOrNever<T, symbol>;
};
declare const expectAny: unique symbol;
declare type ExpectAny<T> = {
    [expectAny]: T;
    result: IsAny<T>;
};
declare const expectUnknown: unique symbol;
declare type ExpectUnknown<T> = {
    [expectUnknown]: T;
    result: IsUnknown<T>;
};
declare const expectNever: unique symbol;
declare type ExpectNever<T> = {
    [expectNever]: T;
    result: IsNever<T>;
};
declare const expectNullable: unique symbol;
declare type ExpectNullable<T> = {
    [expectNullable]: T;
    result: Not<StrictEqualUsingBranding<T, NonNullable<T>>>;
};
/**
 * Represents a scolder function that checks if the result of an expecter
 * matches the specified options.
 */
declare type Scolder<Expecter extends {
    result: boolean;
}, Options extends {
    positive: boolean;
}> = Expecter['result'] extends Options['positive'] ? () => true : Options['positive'] extends true ? Expecter : Inverted<Expecter>;
/**
 * Represents the positive assertion methods available for type checking in the
 * {@linkcode expectTypeOf()} utility.
 */
interface PositiveExpectTypeOf<Actual> extends BaseExpectTypeOf<Actual, {
    positive: true;
    branded: false;
}> {
    toEqualTypeOf: {
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode branded `.branded.toEqualTypeOf()`}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param value - The value to compare against the expected type.
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected extends StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(value: Expected & AValue, // reason for `& AValue`: make sure this is only the selected overload when the end-user passes a value for an inferred typearg. The `Mismatch` type does match `AValue`.
        ...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected>, true>): true;
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode branded `.branded.toEqualTypeOf()`}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected extends StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected>, true>): true;
    };
    toMatchTypeOf: {
        /**
         * A less strict version of {@linkcode toEqualTypeOf `.toEqualTypeOf()`}
         * that allows for extra properties.
         * This is roughly equivalent to an `extends` constraint
         * in a function type argument.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 2 })
         * ```
         *
         * @param value - The value to compare against the expected type.
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected extends Extends<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(value: Expected & AValue, // reason for `& AValue`: make sure this is only the selected overload when the end-user passes a value for an inferred typearg. The `Mismatch` type does match `AValue`.
        ...MISMATCH: MismatchArgs<Extends<Actual, Expected>, true>): true;
        /**
         * A less strict version of {@linkcode toEqualTypeOf `.toEqualTypeOf()`}
         * that allows for extra properties.
         * This is roughly equivalent to an `extends` constraint
         * in a function type argument.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected extends Extends<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(...MISMATCH: MismatchArgs<Extends<Actual, Expected>, true>): true;
    };
    /**
     * Checks whether an object has a given property.
     *
     * @example
     * <caption>check that properties exist</caption>
     * ```ts
     * const obj = {a: 1, b: ''}
     *
     * expectTypeOf(obj).toHaveProperty('a')
     *
     * expectTypeOf(obj).not.toHaveProperty('c')
     * ```
     *
     * @param key - The property key to check for.
     * @param MISMATCH - The mismatch arguments.
     * @returns `true`.
     */
    toHaveProperty: <KeyType extends keyof Actual>(key: KeyType, ...MISMATCH: MismatchArgs<Extends<KeyType, keyof Actual>, true>) => KeyType extends keyof Actual ? PositiveExpectTypeOf<Actual[KeyType]> : true;
    /**
     * Inverts the result of the following assertions.
     *
     * @example
     * ```ts
     * expectTypeOf({ a: 1 }).not.toMatchTypeOf({ b: 1 })
     * ```
     */
    not: NegativeExpectTypeOf<Actual>;
    /**
     * Intersection types can cause issues with
     * {@linkcode toEqualTypeOf `.toEqualTypeOf()`}:
     * ```ts
     * // ❌ The following line doesn't compile, even though the types are arguably the same.
     * expectTypeOf<{ a: 1 } & { b: 2 }>().toEqualTypeOf<{ a: 1; b: 2 }>()
     * ```
     * This helper works around this problem by using
     * a more permissive but less performant check.
     *
     * __Note__: This comes at a performance cost, and can cause the compiler
     * to 'give up' if used with excessively deep types, so use sparingly.
     *
     * @see {@link https://github.com/mmkal/expect-type/pull/21 Reference}
     */
    branded: {
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode PositiveExpectTypeOf.branded `.branded.toEqualTypeOf()`}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        toEqualTypeOf: <Expected extends StrictEqualUsingBranding<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(...MISMATCH: MismatchArgs<StrictEqualUsingBranding<Actual, Expected>, true>) => true;
    };
}
/**
 * Represents the negative expectation type for the {@linkcode Actual} type.
 */
interface NegativeExpectTypeOf<Actual> extends BaseExpectTypeOf<Actual, {
    positive: false;
}> {
    toEqualTypeOf: {
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode PositiveExpectTypeOf.branded `.branded.toEqualTypeOf()`}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param value - The value to compare against the expected type.
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected>(value: Expected & AValue, ...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected>, false>): true;
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode PositiveExpectTypeOf.branded `.branded.toEqualTypeOf()`}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected>(...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected>, false>): true;
    };
    toMatchTypeOf: {
        /**
         * A less strict version of
         * {@linkcode PositiveExpectTypeOf.toEqualTypeOf `.toEqualTypeOf()`}
         * that allows for extra properties.
         * This is roughly equivalent to an `extends` constraint
         * in a function type argument.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 2 })
         * ```
         *
         * @param value - The value to compare against the expected type.
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected>(value: Expected & AValue, // reason for `& AValue`: make sure this is only the selected overload when the end-user passes a value for an inferred typearg. The `Mismatch` type does match `AValue`.
        ...MISMATCH: MismatchArgs<Extends<Actual, Expected>, false>): true;
        /**
         * A less strict version of
         * {@linkcode PositiveExpectTypeOf.toEqualTypeOf `.toEqualTypeOf()`}
         * that allows for extra properties.
         * This is roughly equivalent to an `extends` constraint
         * in a function type argument.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected>(...MISMATCH: MismatchArgs<Extends<Actual, Expected>, false>): true;
    };
    /**
     * Checks whether an object has a given property.
     *
     * @example
     * <caption>check that properties exist</caption>
     * ```ts
     * const obj = {a: 1, b: ''}
     *
     * expectTypeOf(obj).toHaveProperty('a')
     *
     * expectTypeOf(obj).not.toHaveProperty('c')
     * ```
     *
     * @param key - The property key to check for.
     * @param MISMATCH - The mismatch arguments.
     * @returns `true`.
     */
    toHaveProperty: <KeyType extends string | number | symbol>(key: KeyType, ...MISMATCH: MismatchArgs<Extends<KeyType, keyof Actual>, false>) => true;
}
/**
 * Represents a conditional type that selects either
 * {@linkcode PositiveExpectTypeOf} or {@linkcode NegativeExpectTypeOf} based
 * on the value of the `positive` property in the {@linkcode Options} type.
 */
declare type ExpectTypeOf<Actual, Options extends {
    positive: boolean;
}> = Options['positive'] extends true ? PositiveExpectTypeOf<Actual> : NegativeExpectTypeOf<Actual>;
/**
 * Represents the base interface for the
 * {@linkcode expectTypeOf()} function.
 * Provides a set of assertion methods to perform type checks on a value.
 */
interface BaseExpectTypeOf<Actual, Options extends {
    positive: boolean;
}> {
    /**
     * Checks whether the type of the value is `any`.
     */
    toBeAny: Scolder<ExpectAny<Actual>, Options>;
    /**
     * Checks whether the type of the value is `unknown`.
     */
    toBeUnknown: Scolder<ExpectUnknown<Actual>, Options>;
    /**
     * Checks whether the type of the value is `never`.
     */
    toBeNever: Scolder<ExpectNever<Actual>, Options>;
    /**
     * Checks whether the type of the value is `function`.
     */
    toBeFunction: Scolder<ExpectFunction<Actual>, Options>;
    /**
     * Checks whether the type of the value is `object`.
     */
    toBeObject: Scolder<ExpectObject<Actual>, Options>;
    /**
     * Checks whether the type of the value is an {@linkcode Array}.
     */
    toBeArray: Scolder<ExpectArray<Actual>, Options>;
    /**
     * Checks whether the type of the value is `number`.
     */
    toBeNumber: Scolder<ExpectNumber<Actual>, Options>;
    /**
     * Checks whether the type of the value is `string`.
     */
    toBeString: Scolder<ExpectString<Actual>, Options>;
    /**
     * Checks whether the type of the value is `boolean`.
     */
    toBeBoolean: Scolder<ExpectBoolean<Actual>, Options>;
    /**
     * Checks whether the type of the value is `void`.
     */
    toBeVoid: Scolder<ExpectVoid<Actual>, Options>;
    /**
     * Checks whether the type of the value is `symbol`.
     */
    toBeSymbol: Scolder<ExpectSymbol<Actual>, Options>;
    /**
     * Checks whether the type of the value is `null`.
     */
    toBeNull: Scolder<ExpectNull<Actual>, Options>;
    /**
     * Checks whether the type of the value is `undefined`.
     */
    toBeUndefined: Scolder<ExpectUndefined<Actual>, Options>;
    /**
     * Checks whether the type of the value is `null` or `undefined`.
     */
    toBeNullable: Scolder<ExpectNullable<Actual>, Options>;
    /**
     * Checks whether a function is callable with the given parameters.
     *
     * __Note__: You cannot negate this assertion with
     * {@linkcode PositiveExpectTypeOf.not `.not`} you need to use
     * `ts-expect-error` instead.
     *
     * @example
     * ```ts
     * const f = (a: number) => [a, a]
     *
     * expectTypeOf(f).toBeCallableWith(1)
     * ```
     *
     * __Known Limitation__: This assertion will likely fail if you try to use it
     * with a generic function or an overload.
     * @see {@link https://github.com/mmkal/expect-type/issues/50 This issue} for an example and a workaround.
     *
     * @param args - The arguments to check for callability.
     * @returns `true`.
     */
    toBeCallableWith: Options['positive'] extends true ? (...args: Params<Actual>) => true : never;
    /**
     * Checks whether a class is constructible with the given parameters.
     *
     * @example
     * ```ts
     * expectTypeOf(Date).toBeConstructibleWith('1970')
     *
     * expectTypeOf(Date).toBeConstructibleWith(0)
     *
     * expectTypeOf(Date).toBeConstructibleWith(new Date())
     *
     * expectTypeOf(Date).toBeConstructibleWith()
     * ```
     *
     * @param args - The arguments to check for constructibility.
     * @returns `true`.
     */
    toBeConstructibleWith: Options['positive'] extends true ? (...args: ConstructorParams<Actual>) => true : never;
    /**
     * Equivalent to the {@linkcode Extract} utility type.
     * Helps narrow down complex union types.
     *
     * @example
     * ```ts
     * type ResponsiveProp<T> = T | T[] | { xs?: T; sm?: T; md?: T }
     *
     * interface CSSProperties {
     *   margin?: string
     *   padding?: string
     * }
     *
     * function getResponsiveProp<T>(_props: T): ResponsiveProp<T> {
     *   return {}
     * }
     *
     * const cssProperties: CSSProperties = { margin: '1px', padding: '2px' }
     *
     * expectTypeOf(getResponsiveProp(cssProperties))
     *   .extract<{ xs?: any }>() // extracts the last type from a union
     *   .toEqualTypeOf<{
     *     xs?: CSSProperties
     *     sm?: CSSProperties
     *     md?: CSSProperties
     *   }>()
     *
     * expectTypeOf(getResponsiveProp(cssProperties))
     *   .extract<unknown[]>() // extracts an array from a union
     *   .toEqualTypeOf<CSSProperties[]>()
     * ```
     *
     * __Note__: If no type is found in the union, it will return `never`.
     *
     * @param v - The type to extract from the union.
     * @returns The type after extracting the type from the union.
     */
    extract: <V>(v?: V) => ExpectTypeOf<Extract<Actual, V>, Options>;
    /**
     * Equivalent to the {@linkcode Exclude} utility type.
     * Removes types from a union.
     *
     * @example
     * ```ts
     * type ResponsiveProp<T> = T | T[] | { xs?: T; sm?: T; md?: T }
     *
     * interface CSSProperties {
     *   margin?: string
     *   padding?: string
     * }
     *
     * function getResponsiveProp<T>(_props: T): ResponsiveProp<T> {
     *   return {}
     * }
     *
     * const cssProperties: CSSProperties = { margin: '1px', padding: '2px' }
     *
     * expectTypeOf(getResponsiveProp(cssProperties))
     *   .exclude<unknown[]>()
     *   .exclude<{ xs?: unknown }>() // or just `.exclude<unknown[] | { xs?: unknown }>()`
     *   .toEqualTypeOf<CSSProperties>()
     * ```
     */
    exclude: <V>(v?: V) => ExpectTypeOf<Exclude<Actual, V>, Options>;
    /**
     * Equivalent to the {@linkcode Pick} utility type.
     * Helps select a subset of properties from an object type.
     *
     * @example
     * ```ts
     * interface Person {
     *   name: string
     *   age: number
     * }
     *
     * expectTypeOf<Person>()
     *   .pick<'name'>()
     *   .toEqualTypeOf<{ name: string }>()
     * ```
     *
     * @param keyToPick - The property key to pick.
     * @returns The type after picking the property.
     */
    pick: <KeyToPick extends keyof Actual>(keyToPick?: KeyToPick) => ExpectTypeOf<Pick<Actual, KeyToPick>, Options>;
    /**
     * Equivalent to the {@linkcode Omit} utility type.
     * Helps remove a subset of properties from an object type.
     *
     * @example
     * ```ts
     * interface Person {
     *   name: string
     *   age: number
     * }
     *
     * expectTypeOf<Person>().omit<'name'>().toEqualTypeOf<{ age: number }>()
     * ```
     *
     * @param keyToOmit - The property key to omit.
     * @returns The type after omitting the property.
     */
    omit: <KeyToOmit extends keyof Actual | (PropertyKey & Record<never, never>)>(keyToOmit?: KeyToOmit) => ExpectTypeOf<Omit<Actual, KeyToOmit>, Options>;
    /**
     * Extracts a certain function argument with `.parameter(number)` call to
     * perform other assertions on it.
     *
     * @example
     * ```ts
     * function foo(a: number, b: string) {
     *   return [a, b]
     * }
     *
     * expectTypeOf(foo).parameter(0).toBeNumber()
     *
     * expectTypeOf(foo).parameter(1).toBeString()
     * ```
     *
     * @param index - The index of the parameter to extract.
     * @returns The extracted parameter type.
     */
    parameter: <Index extends keyof Params<Actual>>(index: Index) => ExpectTypeOf<Params<Actual>[Index], Options>;
    /**
     * Equivalent to the {@linkcode Parameters} utility type.
     * Extracts function parameters to perform assertions on its value.
     * Parameters are returned as an array.
     *
     * @example
     * ```ts
     * function noParam() {}
     *
     * function hasParam(s: string) {}
     *
     * expectTypeOf(noParam).parameters.toEqualTypeOf<[]>()
     *
     * expectTypeOf(hasParam).parameters.toEqualTypeOf<[string]>()
     * ```
     */
    parameters: ExpectTypeOf<Params<Actual>, Options>;
    /**
     * Equivalent to the {@linkcode ConstructorParameters} utility type.
     * Extracts constructor parameters as an array of values and
     * perform assertions on them with this method.
     *
     * @example
     * ```ts
     * expectTypeOf(Date).constructorParameters.toEqualTypeOf<
     *   [] | [string | number | Date]
     * >()
     * ```
     */
    constructorParameters: ExpectTypeOf<ConstructorParams<Actual>, Options>;
    /**
     * Equivalent to the {@linkcode ThisParameterType} utility type.
     * Extracts the `this` parameter of a function to
     * perform assertions on its value.
     *
     * @example
     * ```ts
     * function greet(this: { name: string }, message: string) {
     *   return `Hello ${this.name}, here's your message: ${message}`
     * }
     *
     * expectTypeOf(greet).thisParameter.toEqualTypeOf<{ name: string }>()
     * ```
     */
    thisParameter: ExpectTypeOf<ThisParameterType<Actual>, Options>;
    /**
     * Equivalent to the {@linkcode InstanceType} utility type.
     * Extracts the instance type of a class to perform assertions on.
     *
     * @example
     * ```ts
     * expectTypeOf(Date).instance.toHaveProperty('toISOString')
     * ```
     */
    instance: Actual extends new (...args: any[]) => infer I ? ExpectTypeOf<I, Options> : never;
    /**
     * Equivalent to the {@linkcode ReturnType} utility type.
     * Extracts the return type of a function.
     *
     * @example
     * ```ts
     * expectTypeOf(() => {}).returns.toBeVoid()
     *
     * expectTypeOf((a: number) => [a, a]).returns.toEqualTypeOf([1, 2])
     * ```
     */
    returns: Actual extends (...args: any[]) => infer R ? ExpectTypeOf<R, Options> : never;
    /**
     * Extracts resolved value of a Promise,
     * so you can perform other assertions on it.
     *
     * @example
     * ```ts
     * async function asyncFunc() {
     *   return 123
     * }
     *
     * expectTypeOf(asyncFunc).returns.resolves.toBeNumber()
     *
     * expectTypeOf(Promise.resolve('string')).resolves.toBeString()
     * ```
     *
     * Type Equivalent:
     * ```ts
     * type Resolves<PromiseType> = PromiseType extends PromiseLike<infer ResolvedType>
     *   ? ResolvedType
     *   : never
     * ```
     */
    resolves: Actual extends PromiseLike<infer ResolvedType> ? ExpectTypeOf<ResolvedType, Options> : never;
    /**
     * Extracts array item type to perform assertions on.
     *
     * @example
     * ```ts
     * expectTypeOf([1, 2, 3]).items.toEqualTypeOf<number>()
     *
     * expectTypeOf([1, 2, 3]).items.not.toEqualTypeOf<string>()
     * ```
     *
     * __Type Equivalent__:
     * ```ts
     * type Items<ArrayType> = ArrayType extends ArrayLike<infer ItemType>
     *   ? ItemType
     *   : never
     * ```
     */
    items: Actual extends ArrayLike<infer ItemType> ? ExpectTypeOf<ItemType, Options> : never;
    /**
     * Extracts the type guarded by a function to perform assertions on.
     *
     * @example
     * ```ts
     * function isString(v: any): v is string {
     *   return typeof v === 'string'
     * }
     *
     * expectTypeOf(isString).guards.toBeString()
     * ```
     */
    guards: Actual extends (v: any, ...args: any[]) => v is infer T ? ExpectTypeOf<T, Options> : never;
    /**
     * Extracts the type asserted by a function to perform assertions on.
     *
     * @example
     * ```ts
     * function assertNumber(v: any): asserts v is number {
     *   if (typeof v !== 'number')
     *     throw new TypeError('Nope !')
     * }
     *
     * expectTypeOf(assertNumber).asserts.toBeNumber()
     * ```
     */
    asserts: Actual extends (v: any, ...args: any[]) => asserts v is infer T ? unknown extends T ? never : ExpectTypeOf<T, Options> : never;
}
/**
 * Represents a function that allows asserting the expected type of a value.
 */
declare type _ExpectTypeOf = {
    /**
     * Asserts the expected type of a value.
     *
     * @param actual - The actual value being asserted.
     * @returns An object representing the expected type assertion.
     */
    <Actual>(actual: Actual): ExpectTypeOf<Actual, {
        positive: true;
        branded: false;
    }>;
    /**
     * Asserts the expected type of a value without providing an actual value.
     *
     * @returns An object representing the expected type assertion.
     */
    <Actual>(): ExpectTypeOf<Actual, {
        positive: true;
        branded: false;
    }>;
};
/**
 * Similar to Jest's `expect`, but with type-awareness.
 * Gives you access to a number of type-matchers that let you make assertions about the
 * form of a reference or generic type parameter.
 *
 * @example
 * import {foo, bar} from '../foo'
 * import {expectTypeOf} from 'expect-type'
 *
 * test('foo types', () => {
 *   // make sure `foo` has type {a: number}
 *   expectTypeOf(foo).toMatchTypeOf({a: 1})
 *   expectTypeOf(foo).toHaveProperty('a').toBeNumber()
 *
 *   // make sure `bar` is a function taking a string:
 *   expectTypeOf(bar).parameter(0).toBeString()
 *   expectTypeOf(bar).returns.not.toBeAny()
 * })
 *
 * @description
 * See the [full docs](https://npmjs.com/package/expect-type#documentation) for lots more examples.
 */
declare const expectTypeOf: _ExpectTypeOf;

interface AssertType {
    <T>(value: T): void;
}
declare const assertType: AssertType;

/**
 * This utils allows computational intensive tasks to only be ran once
 * across test reruns to improve the watch mode performance.
 *
 * Currently only works with `poolOptions.<pool>.isolate: false`
 *
 * @experimental
 */
declare function runOnce<T>(fn: () => T, key?: string): T;
/**
 * Get a boolean indicates whether the task is running in the first time.
 * Could only be `false` in watch mode.
 *
 * Currently only works with `isolate: false`
 *
 * @experimental
 */
declare function isFirstRun(): boolean;

declare function createExpect(test?: TaskPopulated): ExpectStatic;
declare const globalExpect: ExpectStatic;

type WaitForCallback<T> = () => T | Promise<T>;
interface WaitForOptions {
    /**
     * @description Time in ms between each check callback
     * @default 50ms
     */
    interval?: number;
    /**
     * @description Time in ms after which the throw a timeout error
     * @default 1000ms
     */
    timeout?: number;
}
declare function waitFor<T>(callback: WaitForCallback<T>, options?: number | WaitForOptions): Promise<T>;
type WaitUntilCallback<T> = () => T | Promise<T>;
interface WaitUntilOptions extends Pick<WaitForOptions, 'interval' | 'timeout'> {
}
type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T;
declare function waitUntil<T>(callback: WaitUntilCallback<T>, options?: number | WaitUntilOptions): Promise<Truthy<T>>;

type ESModuleExports = Record<string, unknown>;
interface VitestUtils {
    /**
     * Checks if fake timers are enabled.
     */
    isFakeTimers: () => boolean;
    /**
     * This method wraps all further calls to timers until [`vi.useRealTimers()`](https://vitest.dev/api/vi#vi-userealtimers) is called.
     */
    useFakeTimers: (config?: FakeTimerInstallOpts) => VitestUtils;
    /**
     * Restores mocked timers to their original implementations. All timers that were scheduled before will be discarded.
     */
    useRealTimers: () => VitestUtils;
    /**
     * This method will call every timer that was initiated after [`vi.useFakeTimers`](https://vitest.dev/api/vi#vi-usefaketimers) call.
     * It will not fire any timer that was initiated during its call.
     */
    runOnlyPendingTimers: () => VitestUtils;
    /**
     * This method will asynchronously call every timer that was initiated after [`vi.useFakeTimers`](https://vitest.dev/api/vi#vi-usefaketimers) call, even asynchronous ones.
     * It will not fire any timer that was initiated during its call.
     */
    runOnlyPendingTimersAsync: () => Promise<VitestUtils>;
    /**
     * This method will invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimers` will be fired.
     * If you have an infinite interval, it will throw after 10,000 tries (can be configured with [`fakeTimers.loopLimit`](https://vitest.dev/config/#faketimers-looplimit)).
     */
    runAllTimers: () => VitestUtils;
    /**
     * This method will asynchronously invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimersAsync` will be fired even asynchronous timers.
     * If you have an infinite interval, it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](https://vitest.dev/config/#faketimers-looplimit)).
     */
    runAllTimersAsync: () => Promise<VitestUtils>;
    /**
     * Calls every microtask that was queued by `process.nextTick`. This will also run all microtasks scheduled by themselves.
     */
    runAllTicks: () => VitestUtils;
    /**
     * This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first.
     */
    advanceTimersByTime: (ms: number) => VitestUtils;
    /**
     * This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first. This will include and await asynchronously set timers.
     */
    advanceTimersByTimeAsync: (ms: number) => Promise<VitestUtils>;
    /**
     * Will call next available timer. Useful to make assertions between each timer call. You can chain call it to manage timers by yourself.
     */
    advanceTimersToNextTimer: () => VitestUtils;
    /**
     * Will call next available timer and wait until it's resolved if it was set asynchronously. Useful to make assertions between each timer call.
     */
    advanceTimersToNextTimerAsync: () => Promise<VitestUtils>;
    /**
     * Get the number of waiting timers.
     */
    getTimerCount: () => number;
    /**
     * If fake timers are enabled, this method simulates a user changing the system clock (will affect date related API like `hrtime`, `performance.now` or `new Date()`) - however, it will not fire any timers.
     * If fake timers are not enabled, this method will only mock `Date.*` and `new Date()` calls.
     */
    setSystemTime: (time: number | string | Date) => VitestUtils;
    /**
     * Returns mocked current date that was set using `setSystemTime`. If date is not mocked the method will return `null`.
     */
    getMockedSystemTime: () => Date | null;
    /**
     * When using `vi.useFakeTimers`, `Date.now` calls are mocked. If you need to get real time in milliseconds, you can call this function.
     */
    getRealSystemTime: () => number;
    /**
     * Removes all timers that are scheduled to run. These timers will never run in the future.
     */
    clearAllTimers: () => VitestUtils;
    /**
     * Creates a spy on a method or getter/setter of an object similar to [`vi.fn()`](https://vitest.dev/api/vi#vi-fn). It returns a [mock function](https://vitest.dev/api/mock).
     * @example
     * ```ts
     * const cart = {
     *   getApples: () => 42
     * }
     *
     * const spy = vi.spyOn(cart, 'getApples').mockReturnValue(10)
     *
     * expect(cart.getApples()).toBe(10)
     * expect(spy).toHaveBeenCalled()
     * expect(spy).toHaveReturnedWith(10)
     * ```
     */
    spyOn: typeof spyOn;
    /**
     * Creates a spy on a function, though can be initiated without one. Every time a function is invoked, it stores its call arguments, returns, and instances. Also, you can manipulate its behavior with [methods](https://vitest.dev/api/mock).
     *
     * If no function is given, mock will return `undefined`, when invoked.
     * @example
     * ```ts
     * const getApples = vi.fn(() => 0)
     *
     * getApples()
     *
     * expect(getApples).toHaveBeenCalled()
     * expect(getApples).toHaveReturnedWith(0)
     *
     * getApples.mockReturnValueOnce(5)
     *
     * expect(getApples()).toBe(5)
     * expect(getApples).toHaveNthReturnedWith(2, 5)
     * ```
     */
    fn: typeof fn;
    /**
     * Wait for the callback to execute successfully. If the callback throws an error or returns a rejected promise it will continue to wait until it succeeds or times out.
     *
     * This is very useful when you need to wait for some asynchronous action to complete, for example, when you start a server and need to wait for it to start.
     * @example
     * ```ts
     * const server = createServer()
     *
     * await vi.waitFor(
     *   () => {
     *     if (!server.isReady)
     *       throw new Error('Server not started')
     *
     *     console.log('Server started')
     *   }, {
     *     timeout: 500, // default is 1000
     *     interval: 20, // default is 50
     *   }
     * )
     * ```
     */
    waitFor: typeof waitFor;
    /**
     * This is similar to [`vi.waitFor`](https://vitest.dev/api/vi#vi-waitfor), but if the callback throws any errors, execution is immediately interrupted and an error message is received.
     *
     * If the callback returns a falsy value, the next check will continue until a truthy value is returned. This is useful when you need to wait for something to exist before taking the next step.
     * @example
     * ```ts
     * const element = await vi.waitUntil(
     *   () => document.querySelector('.element'),
     *   {
     *     timeout: 500, // default is 1000
     *     interval: 20, // default is 50
     *   }
     * )
     *
     * // do something with the element
     * expect(element.querySelector('.element-child')).toBeTruthy()
     * ```
     */
    waitUntil: typeof waitUntil;
    /**
     * Run the factory before imports are evaluated. You can return a value from the factory
     * to reuse it inside your [`vi.mock`](https://vitest.dev/api/vi#vi-mock) factory and tests.
     *
     * If used with [`vi.mock`](https://vitest.dev/api/vi#vi-mock), both will be hoisted in the order they are defined in.
     */
    hoisted: <T>(factory: () => T) => T;
    /**
     * Mocks every import call to the module even if it was already statically imported.
     *
     * The call to `vi.mock` is hoisted to the top of the file, so you don't have access to variables declared in the global file scope
     * unless they are defined with [`vi.hoisted`](https://vitest.dev/api/vi#vi-hoisted) before this call.
     *
     * Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking#modules).
     * @param path Path to the module. Can be aliased, if your Vitest config supports it
     * @param factory Mocked module factory. The result of this function will be an exports object
     */
    mock(path: string, factory?: MockFactoryWithHelper): void;
    mock<T>(module: Promise<T>, factory?: MockFactoryWithHelper<T>): void;
    /**
     * Removes module from mocked registry. All calls to import will return the original module even if it was mocked before.
     *
     * This call is hoisted to the top of the file, so it will only unmock modules that were defined in `setupFiles`, for example.
     * @param path Path to the module. Can be aliased, if your Vitest config supports it
     */
    unmock(path: string): void;
    unmock(module: Promise<unknown>): void;
    /**
     * Mocks every subsequent [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) call.
     *
     * Unlike [`vi.mock`](https://vitest.dev/api/vi#vi-mock), this method will not mock statically imported modules because it is not hoisted to the top of the file.
     *
     * Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking#modules).
     * @param path Path to the module. Can be aliased, if your Vitest config supports it
     * @param factory Mocked module factory. The result of this function will be an exports object
     */
    doMock(path: string, factory?: MockFactoryWithHelper): void;
    doMock<T>(module: Promise<T>, factory?: MockFactoryWithHelper<T>): void;
    /**
     * Removes module from mocked registry. All subsequent calls to import will return original module.
     *
     * Unlike [`vi.unmock`](https://vitest.dev/api/vi#vi-unmock), this method is not hoisted to the top of the file.
     * @param path Path to the module. Can be aliased, if your Vitest config supports it
     */
    doUnmock(path: string): void;
    doUnmock(module: Promise<unknown>): void;
    /**
     * Imports module, bypassing all checks if it should be mocked.
     * Can be useful if you want to mock module partially.
     * @example
     * ```ts
     * vi.mock('./example.js', async () => {
     *  const axios = await vi.importActual<typeof import('./example.js')>('./example.js')
     *
     *  return { ...axios, get: vi.fn() }
     * })
     * ```
     * @param path Path to the module. Can be aliased, if your config supports it
     */
    importActual: <T = ESModuleExports>(path: string) => Promise<T>;
    /**
     * Imports a module with all of its properties and nested properties mocked.
     *
     * Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking#modules).
     * @example
     * ```ts
     * const example = await vi.importMock<typeof import('./example.js')>('./example.js')
     * example.calc.mockReturnValue(10)
     * expect(example.calc()).toBe(10)
     * ```
     * @param path Path to the module. Can be aliased, if your config supports it
     * @returns Fully mocked module
     */
    importMock: <T = ESModuleExports>(path: string) => Promise<MaybeMockedDeep<T>>;
    /**
     * Type helper for TypeScript. Just returns the object that was passed.
     *
     * When `partial` is `true` it will expect a `Partial<T>` as a return value. By default, this will only make TypeScript believe that
     * the first level values are mocked. You can pass down `{ deep: true }` as a second argument to tell TypeScript that the whole object is mocked, if it actually is.
     * @example
     * ```ts
     * import example from './example.js'
     * vi.mock('./example.js')
     *
     * test('1 + 1 equals 10' async () => {
     *  vi.mocked(example.calc).mockReturnValue(10)
     *  expect(example.calc(1, '+', 1)).toBe(10)
     * })
     * ```
     * @param item Anything that can be mocked
     * @param deep If the object is deeply mocked
     * @param options If the object is partially or deeply mocked
     */
    mocked: (<T>(item: T, deep?: false) => MaybeMocked<T>) & (<T>(item: T, deep: true) => MaybeMockedDeep<T>) & (<T>(item: T, options: {
        partial?: false;
        deep?: false;
    }) => MaybeMocked<T>) & (<T>(item: T, options: {
        partial?: false;
        deep: true;
    }) => MaybeMockedDeep<T>) & (<T>(item: T, options: {
        partial: true;
        deep?: false;
    }) => MaybePartiallyMocked<T>) & (<T>(item: T, options: {
        partial: true;
        deep: true;
    }) => MaybePartiallyMockedDeep<T>) & (<T>(item: T) => MaybeMocked<T>);
    /**
     * Checks that a given parameter is a mock function. If you are using TypeScript, it will also narrow down its type.
     */
    isMockFunction: (fn: any) => fn is MockInstance;
    /**
     * Calls [`.mockClear()`](https://vitest.dev/api/mock#mockclear) on every mocked function. This will only empty `.mock` state, it will not reset implementation.
     *
     * It is useful if you need to clean up mock between different assertions.
     */
    clearAllMocks: () => VitestUtils;
    /**
     * Calls [`.mockReset()`](https://vitest.dev/api/mock#mockreset) on every mocked function. This will empty `.mock` state, reset "once" implementations and force the base implementation to return `undefined` when invoked.
     *
     * This is useful when you want to completely reset a mock to the default state.
     */
    resetAllMocks: () => VitestUtils;
    /**
     * Calls [`.mockRestore()`](https://vitest.dev/api/mock#mockrestore) on every mocked function. This will restore all original implementations.
     */
    restoreAllMocks: () => VitestUtils;
    /**
     * Makes value available on global namespace.
     * Useful, if you want to have global variables available, like `IntersectionObserver`.
     * You can return it back to original value with `vi.unstubAllGlobals`, or by enabling `unstubGlobals` config option.
     */
    stubGlobal: (name: string | symbol | number, value: unknown) => VitestUtils;
    /**
     * Changes the value of `import.meta.env` and `process.env`.
     * You can return it back to original value with `vi.unstubAllEnvs`, or by enabling `unstubEnvs` config option.
     */
    stubEnv: <T extends string>(name: T, value: T extends 'PROD' | 'DEV' | 'SSR' ? boolean : string) => VitestUtils;
    /**
     * Reset the value to original value that was available before first `vi.stubGlobal` was called.
     */
    unstubAllGlobals: () => VitestUtils;
    /**
     * Reset environmental variables to the ones that were available before first `vi.stubEnv` was called.
     */
    unstubAllEnvs: () => VitestUtils;
    /**
     * Resets modules registry by clearing the cache of all modules. This allows modules to be reevaluated when reimported.
     * Top-level imports cannot be re-evaluated. Might be useful to isolate modules where local state conflicts between tests.
     *
     * This method does not reset mocks registry. To clear mocks registry, use [`vi.unmock`](https://vitest.dev/api/vi#vi-unmock) or [`vi.doUnmock`](https://vitest.dev/api/vi#vi-dounmock).
     */
    resetModules: () => VitestUtils;
    /**
     * Wait for all imports to load. Useful, if you have a synchronous call that starts
     * importing a module that you cannot await otherwise.
     * Will also wait for new imports, started during the wait.
     */
    dynamicImportSettled: () => Promise<void>;
    /**
     * Updates runtime config. You can only change values that are used when executing tests.
     */
    setConfig: (config: RuntimeOptions) => void;
    /**
     * If config was changed with `vi.setConfig`, this will reset it to the original state.
     */
    resetConfig: () => void;
}
declare const vitest: VitestUtils;
declare const vi: VitestUtils;

declare function getRunningMode(): "watch" | "run";
declare function isWatchMode(): boolean;

/**
 * Gives access to injected context provided from the main thread.
 * This usually returns a value provided by `globalSetup` or an external library.
 */
declare function inject<T extends keyof ProvidedContext & string>(key: T): ProvidedContext[T];

interface BrowserUI {
    setCurrentFileId: (fileId: string) => void;
    setIframeViewport: (width: number, height: number) => Promise<void>;
}

interface SourceMap {
    file: string;
    mappings: string;
    names: string[];
    sources: string[];
    sourcesContent?: string[];
    version: number;
    toString: () => string;
    toUrl: () => string;
}
interface TransformResultWithSource {
    code: string;
    map: SourceMap | {
        mappings: '';
    } | null;
    etag?: string;
    deps?: string[];
    dynamicDeps?: string[];
    source?: string;
}
interface WebSocketHandlers {
    onTaskUpdate: (packs: TaskResultPack[]) => void;
    getFiles: () => File$1[];
    getTestFiles: () => Promise<SerializedSpec[]>;
    getPaths: () => string[];
    getConfig: () => SerializedConfig;
    getModuleGraph: (projectName: string, id: string, browser?: boolean) => Promise<ModuleGraphData>;
    getTransformResult: (projectName: string, id: string, browser?: boolean) => Promise<TransformResultWithSource | undefined>;
    readTestFile: (id: string) => Promise<string | null>;
    saveTestFile: (id: string, content: string) => Promise<void>;
    rerun: (files: string[]) => Promise<void>;
    updateSnapshot: (file?: File$1) => Promise<void>;
    getUnhandledErrors: () => unknown[];
}
interface WebSocketEvents {
    onCollected?: (files?: File$1[]) => Awaitable$1<void>;
    onFinished?: (files: File$1[], errors: unknown[], coverage?: unknown) => Awaitable$1<void>;
    onTaskUpdate?: (packs: TaskResultPack[]) => Awaitable$1<void>;
    onUserConsoleLog?: (log: UserConsoleLog) => Awaitable$1<void>;
    onPathsCollected?: (paths?: string[]) => Awaitable$1<void>;
    onSpecsCollected?: (specs?: SerializedSpec[]) => Awaitable$1<void>;
    onFinishedReportCoverage: () => void;
}
type WebSocketRPC = BirpcReturn<WebSocketEvents, WebSocketHandlers>;

/** @deprecated import `TypeCheckRawErrorsMap` from `vitest/node` instead */
type RawErrsMap = RawErrsMap$1;
/** @deprecated import `TypeCheckErrorInfo` from `vitest/node` instead */
type TscErrorInfo = TscErrorInfo$1;
/** @deprecated import `TypeCheckCollectLineNumbers` from `vitest/node` instead */
type CollectLineNumbers = CollectLineNumbers$1;
/** @deprecated import `TypeCheckCollectLines` from `vitest/node` instead */
type CollectLines = CollectLines$1;
/** @deprecated import `TypeCheckRootAndTarget` from `vitest/node` instead */
type RootAndTarget = RootAndTarget$1;
/** @deprecated import `TypeCheckContext` from `vitest/node` instead */
type Context = Context$1;
/** @deprecated use `RunnerTestSuite` instead */
type Suite = Suite$1;
/** @deprecated use `RunnerTestFile` instead */
type File = File$1;
/** @deprecated use `RunnerTestCase` instead */
type Test = Test$1;
/** @deprecated use `RunnerCustomCase` instead */
type Custom = Custom$1;
/** @deprecated use `RunnerTask` instead */
type Task = Task$1;

/** @deprecated do not use, internal helper */
type Awaitable<T> = Awaitable$1<T>;
/** @deprecated do not use, internal helper */
type Nullable<T> = Nullable$1<T>;
/** @deprecated do not use, internal helper */
type Arrayable<T> = Arrayable$1<T>;
/** @deprecated do not use, internal helper */
type ArgumentsType<T> = ArgumentsType$1<T>;
/** @deprecated do not use, internal helper */
type MutableArray<T extends readonly any[]> = MutableArray$1<T>;
/** @deprecated do not use, internal helper */
type Constructable = Constructable$1;
/** @deprecated import from `vitest/node` instead */
type OnServerRestartHandler = OnServerRestartHandler$1;

/** @deprecated import from `vitest/environments` instead */
type EnvironmentReturn = EnvironmentReturn$1;
/** @deprecated import from `vitest/environments` instead */
type VmEnvironmentReturn = VmEnvironmentReturn$1;
/** @deprecated import from `vitest/environments` instead */
type Environment = Environment$1;
/** @deprecated do not use it */
type ResolvedTestEnvironment = ResolvedTestEnvironment$1;
/** @deprecated import from `vitest/node` instead */
type CoverageProvider = CoverageProvider$1;
/** @deprecated import from `vitest/node` instead */
type ReportContext = ReportContext$1;
/** @deprecated import from `vitest/node` instead */
type CoverageProviderModule = CoverageProviderModule$1;
/** @deprecated import from `vitest/node` instead */
type CoverageReporter = CoverageReporter$1;
/** @deprecated import from `vitest/node` instead */
type CoverageOptions<T extends CoverageProviderName = CoverageProviderName> = CoverageOptions$1<T>;
/** @deprecated import from `vitest/node` instead */
type ResolvedCoverageOptions<T extends CoverageProviderName = CoverageProviderName> = ResolvedCoverageOptions$1<T>;
/** @deprecated import from `vitest/node` instead */
type BaseCoverageOptions = BaseCoverageOptions$1;
/** @deprecated import from `vitest/node` instead */
type CoverageIstanbulOptions = CoverageIstanbulOptions$1;
/** @deprecated import from `vitest/node` instead */
type CoverageV8Options = CoverageV8Options$1;
/** @deprecated import from `vitest/node` instead */
type CustomProviderOptions = CustomProviderOptions$1;

/** @deprecated import from `vitest/node` instead */
type Reporter = Reporter$1;
/** @deprecated import from `vitest/node` instead */
type Vitest = Vitest$1;

/** @deprecated import from `vitest/node` instead */
type BrowserScript = BrowserScript$1;
/** @deprecated import from `vitest/node` instead */
type BrowserConfigOptions = BrowserConfigOptions$1;
/** @deprecated import from `vitest/node` instead */
type SequenceHooks = SequenceHooks$1;
/** @deprecated import from `vitest/node` instead */
type SequenceSetupFiles = SequenceSetupFiles$1;
/** @deprecated import from `vitest/node` instead */
type BuiltinEnvironment = BuiltinEnvironment$1;
/** @deprecated import from `vitest/node` instead */
type VitestEnvironment = VitestEnvironment$1;
/** @deprecated import from `vitest/node` instead */
type Pool = Pool$1;
/** @deprecated import from `vitest/node` instead */
type PoolOptions = PoolOptions$1;
/** @deprecated import from `vitest/node` instead */
type CSSModuleScopeStrategy = CSSModuleScopeStrategy$1;
/** @deprecated import from `vitest/node` instead */
type ApiConfig = ApiConfig$1;
/** @deprecated import from `vitest/node` instead */
type JSDOMOptions = JSDOMOptions$1;
/** @deprecated import from `vitest/node` instead */
type HappyDOMOptions = HappyDOMOptions$1;
/** @deprecated import from `vitest/node` instead */
type EnvironmentOptions = EnvironmentOptions$1;
/** @deprecated import from `vitest/node` instead */
type VitestRunMode = VitestRunMode$1;
/** @deprecated import from `vitest/node` instead */
type DepsOptimizationOptions = DepsOptimizationOptions$1;
/** @deprecated import from `vitest/node` instead */
type TransformModePatterns = TransformModePatterns$1;
/** @deprecated import from `vitest/node` instead */
type InlineConfig = InlineConfig$1;
/** @deprecated import from `vitest/node` instead */
type TypecheckConfig = TypecheckConfig$1;
/** @deprecated import from `vitest/node` instead */
type UserConfig = UserConfig$1;
/** @deprecated import from `vitest/node` instead */
type ResolvedConfig = ResolvedConfig$1;
/** @deprecated import from `vitest/node` instead */
type ProjectConfig = ProjectConfig$1;
/** @deprecated import from `vitest/node` instead */
type UserWorkspaceConfig = UserWorkspaceConfig$1;

/** @deprecated use `SerializedSpec` instead */
type SerializableSpec = SerializedSpec;

/** @deprecated import from `vitest/node` instead */
type BenchmarkUserOptions = BenchmarkUserOptions$1;

export { type ApiConfig, type ArgumentsType, type Arrayable, type AssertType, type Awaitable, type BaseCoverageOptions, BenchmarkResult, type BenchmarkUserOptions, type BrowserConfigOptions, type BrowserScript, type BrowserUI, type BuiltinEnvironment, type CSSModuleScopeStrategy, type CollectLineNumbers, type CollectLines, type Constructable, type Context, type CoverageIstanbulOptions, type CoverageOptions, type CoverageProvider, type CoverageProviderModule, type CoverageReporter, type CoverageV8Options, type Custom, type CustomProviderOptions, type DepsOptimizationOptions, type Environment, type EnvironmentOptions, type EnvironmentReturn, type ExpectTypeOf, type File, type HappyDOMOptions, type InlineConfig, type JSDOMOptions, ModuleGraphData, type MutableArray, type Nullable, type OnServerRestartHandler, type Pool, type PoolOptions, type ProjectConfig, ProvidedContext, type RawErrsMap, type ReportContext, type Reporter, type ResolvedConfig, type ResolvedCoverageOptions, type ResolvedTestEnvironment, type RootAndTarget, type SequenceHooks, type SequenceSetupFiles, type SerializableSpec, SerializedConfig, SerializedSpec, type Suite, type Task, type Test, type TransformModePatterns, type TransformResultWithSource, type TscErrorInfo, type TypecheckConfig, type UserConfig, UserConsoleLog, type UserWorkspaceConfig, type Vitest, type VitestEnvironment, type VitestRunMode, type VitestUtils, type VmEnvironmentReturn, type WebSocketEvents, type WebSocketHandlers, type WebSocketRPC, assertType, createExpect, globalExpect as expect, expectTypeOf, getRunningMode, inject, isFirstRun, isWatchMode, runOnce, vi, vitest };
