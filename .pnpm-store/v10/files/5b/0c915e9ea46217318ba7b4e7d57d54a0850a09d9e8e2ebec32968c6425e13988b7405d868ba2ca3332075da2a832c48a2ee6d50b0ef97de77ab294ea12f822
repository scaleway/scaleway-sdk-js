/**
 * Internal fork of the unmaintained strong-log-transformer package.
 * https://github.com/strongloop/strong-log-transformer/blob/3315d59bc4c912d025e15a6ca22a600a85406f14/lib/logger.js
 *
 * Notable changes:
 * - replaced the dependency on duplexer, which has been deprecated for a long time, with inline createDuplex()
 * - modernized core node.js imports and removed the usage of deprecated node:util._extend()
 */
import stream from "node:stream";
export default Logger;
declare function Logger(options?: any): stream.Duplex;
declare namespace Logger {
    var DEFAULTS: {
        format: string;
        tag: string;
        mergeMultiline: boolean;
        timeStamp: boolean;
    };
}
