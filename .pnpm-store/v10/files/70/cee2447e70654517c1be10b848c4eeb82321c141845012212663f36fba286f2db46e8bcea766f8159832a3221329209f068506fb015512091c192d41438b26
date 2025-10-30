'use strict';

const { expect } = require('chai');

const allOff = require('event-emitter/all-off');
const getOutputReporter = require('../../../lib/log/get-output-reporter');

const emitter = getOutputReporter.emitter;

describe('lib/log/get-output-reporter.js', () => {
  let events;

  beforeEach(() => {
    events = [];
    emitter.on('write', (event) => events.push(event));
  });
  afterEach(() => {
    allOff(emitter);
  });

  it('should return output intances factory', () => {
    expect(typeof getOutputReporter('test').get('test')).to.equal('function');
  });

  it('should return same output reporter instance for same namespace', () => {
    expect(getOutputReporter('test')).to.equal(getOutputReporter('test'));
  });

  it('should return same writer instance for same name', () => {
    expect(getOutputReporter('test').get('test')).to.equal(getOutputReporter('test').get('test'));
  });

  it('should emit write events', () => {
    const writeOutput = getOutputReporter('test').get('mode');
    writeOutput('#1', 'other');
    writeOutput('#2', 'another');
    expect(events).to.deep.equal([
      { namespace: 'test', mode: 'mode', textTokens: ['#1', 'other'] },
      { namespace: 'test', mode: 'mode', textTokens: ['#2', 'another'] },
    ]);
  });
});
