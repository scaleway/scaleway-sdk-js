"use strict";

const readline   = require("readline")
    , MuteStream = require("mute-stream");

// Credit: Reworked (trimmed and fixed) solution as found in Ora
// https://github.com/sindresorhus/ora
module.exports = class StdinDiscarder {
	constructor() {
		this.write = process.stdout.write.bind(process.stdout);
		this.mutedStream = new MuteStream();
		this.mutedStream.pipe(process.stdout);
		this.mutedStream.mute();
	}
	start() {
		this.rl = readline.createInterface({ input: process.stdin, output: this.mutedStream });
		this.rl.on("SIGINT", () => {
			if (process.listenerCount("SIGINT")) {
				process.emit("SIGINT");
			} else {
				this.rl.close();
				process.kill(process.pid, "SIGINT");
			}
		});
		// Hide cursor
		this.write("\u001B[?25l");
	}
	stop() {
		this.rl.close();
		delete this.rl;
		// Show cursor
		this.write("\u001B[?25h");
	}
};
