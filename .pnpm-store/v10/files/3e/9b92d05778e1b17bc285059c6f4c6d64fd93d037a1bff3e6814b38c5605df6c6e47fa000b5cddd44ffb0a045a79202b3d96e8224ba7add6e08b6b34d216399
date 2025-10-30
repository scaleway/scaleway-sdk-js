'use strict';

const { expect } = require('chai');

const allOff = require('event-emitter/all-off');
const getProgressReporter = require('../../../lib/log/get-progress-reporter');

const emitter = getProgressReporter.emitter;

describe('lib/log/get-progress-reporter.js', () => {
  let events;

  beforeEach(() => {
    events = [];
    emitter.on('update', (event) => events.push(['update', event]));
    emitter.on('remove', (event) => events.push(['remove', event]));
  });
  afterEach(() => {
    allOff(emitter);
  });

  it('should return progress instances factory', () => {
    expect(typeof getProgressReporter('test').get('some-progress').info).to.equal('function');
  });

  it('should return same progress reporter instance for same namespace', () => {
    expect(getProgressReporter('test')).to.equal(getProgressReporter('test'));
  });

  it('should return same progress instance for same name', () => {
    expect(getProgressReporter('test').get('upload')).to.equal(
      getProgressReporter('test').get('upload')
    );
  });

  it('should allow to create unnamed progress instances', () => {
    const progress = getProgressReporter('test').create();
    expect(typeof progress.info).to.equal('function');
    progress.notice('#1');
    progress.info('#1');
    const progressName = events[0][1].name;
    expect(typeof progressName).to.equal('string');
    expect(events).to.deep.equal([
      [
        'update',
        {
          namespace: 'test',
          name: progressName,
          level: 'notice',
          levelIndex: 2,
          textTokens: '#1',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'test',
          name: progressName,
          level: 'info',
          levelIndex: 3,
          textTokens: '#1',
          options: null,
        },
      ],
    ]);
  });

  it('should support initial message when creating unnamed progress instance', () => {
    getProgressReporter('test').create({ message: 'Initial' });
    const progressName = events[0][1].name;
    expect(events).to.deep.equal([
      [
        'update',
        {
          namespace: 'test',
          name: progressName,
          level: 'notice',
          levelIndex: 2,
          textTokens: 'Initial',
          options: null,
        },
      ],
    ]);
  });

  it('should support allow to name progresses via `create`', () => {
    const progress = getProgressReporter('test');
    expect(progress.create({ name: 'test-name' })).to.equal(progress.get('test-name'));
    expect(() => {
      progress.create({ name: 'test-name' });
    })
      .to.throw(Error)
      .with.property('code', 'PROGRESS_NAME_TAKEN');
  });

  it('should support different verbosity levels', () => {
    const progress = getProgressReporter('test').get('upload');
    progress.notice('#1');
    progress.info('#1');
    progress.notice('#2');
    progress.info('#2');
    expect(events).to.deep.equal([
      [
        'update',
        {
          namespace: 'test',
          name: 'upload',
          level: 'notice',
          levelIndex: 2,
          textTokens: '#1',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'test',
          name: 'upload',
          level: 'info',
          levelIndex: 3,
          textTokens: '#1',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'test',
          name: 'upload',
          level: 'notice',
          levelIndex: 2,
          textTokens: '#2',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'test',
          name: 'upload',
          level: 'info',
          levelIndex: 3,
          textTokens: '#2',
          options: null,
        },
      ],
    ]);
  });

  it('should support aliases', () => {
    const progress = getProgressReporter('test').get('upload');
    progress.update('#1');
    expect(events).to.deep.equal([
      [
        'update',
        {
          namespace: 'test',
          name: 'upload',
          level: 'notice',
          levelIndex: 2,
          textTokens: '#1',
          options: null,
        },
      ],
    ]);
  });

  it('should identify different progress events', () => {
    const progress1 = getProgressReporter('test').get('upload');
    const progress2 = getProgressReporter('other').get('upload');
    const progress3 = getProgressReporter('test').get('package');
    progress1.notice('#1-1');
    progress2.notice('#2-1');
    progress1.info('#1-1');
    progress2.info('#2-1');
    progress3.notice('#3-1');

    expect(events).to.deep.equal([
      [
        'update',
        {
          namespace: 'test',
          name: 'upload',
          level: 'notice',
          levelIndex: 2,
          textTokens: '#1-1',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'other',
          name: 'upload',
          level: 'notice',
          levelIndex: 2,
          textTokens: '#2-1',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'test',
          name: 'upload',
          level: 'info',
          levelIndex: 3,
          textTokens: '#1-1',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'other',
          name: 'upload',
          level: 'info',
          levelIndex: 3,
          textTokens: '#2-1',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'test',
          name: 'package',
          level: 'notice',
          levelIndex: 2,
          textTokens: '#3-1',
          options: null,
        },
      ],
    ]);
  });

  it('should emit remove intent', () => {
    const progress1 = getProgressReporter('test').get('upload');
    const progress2 = getProgressReporter('other').get('upload');
    progress1.notice('#1-1');
    progress2.notice('#2-1');
    progress2.remove();
    progress1.remove();

    expect(events).to.deep.equal([
      [
        'update',
        {
          namespace: 'test',
          name: 'upload',
          level: 'notice',
          levelIndex: 2,
          textTokens: '#1-1',
          options: null,
        },
      ],
      [
        'update',
        {
          namespace: 'other',
          name: 'upload',
          level: 'notice',
          levelIndex: 2,
          textTokens: '#2-1',
          options: null,
        },
      ],
      ['remove', { namespace: 'other', name: 'upload' }],
      ['remove', { namespace: 'test', name: 'upload' }],
    ]);
  });
});
