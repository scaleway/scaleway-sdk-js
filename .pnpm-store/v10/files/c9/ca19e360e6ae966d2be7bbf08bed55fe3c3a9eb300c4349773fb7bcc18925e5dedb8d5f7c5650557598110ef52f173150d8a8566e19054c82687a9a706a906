'use strict';

const { expect } = require('chai');
const joinTextTokens = require('../../../lib/log/join-text-tokens');

describe('lib/log/join-text-tokens.js', () => {
  it('should add new line at the of text', () => {
    expect(joinTextTokens(['foo bar'])).to.equal('foo bar\n');
  });
  it('should join separate text tokens into multiline text', () => {
    expect(joinTextTokens(['foo', 'bar', 'other'])).to.equal('foo\nbar\nother\n');
  });
  it('should resolve text tokens from input arrays recursively', () => {
    expect(joinTextTokens(['foo', ['bar', 'other', ['lorem', 'ipsum'], 'elo'], 'final'])).to.equal(
      'foo\nbar\nother\nlorem\nipsum\nelo\nfinal\n'
    );
  });
  it('should treat `null` and `undefined` values as empty stirngs', () => {
    expect(joinTextTokens(['foo', null, 'bar', undefined, 'other'])).to.equal(
      'foo\n\nbar\n\nother\n'
    );
  });
});
