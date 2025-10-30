/**
 * css-calc.js
 */

import { calc } from '@csstools/css-calc';
import { TokenType, tokenize } from '@csstools/css-tokenizer';
import { LRUCache } from 'lru-cache';
import { isString } from './common.js';
import { roundToPrecision, valueToJsonString } from './util.js';

/* constants */
import {
  FN_VAR, NUM, SYN_FN_MATH, SYN_FN_MATH_CALC, SYN_FN_MATH_VAR, SYN_FN_VAR,
  VAL_SPEC
} from './constant.js';
const {
  CloseParen: PAREN_CLOSE, Comment: COMMENT, Dimension: DIM, EOF,
  Function: FUNC, OpenParen: PAREN_OPEN, Whitespace: W_SPACE
} = TokenType;
const HEX = 16;
const MAX_PCT = 100;

/* regexp */
const REG_FN_MATH_CALC = new RegExp(SYN_FN_MATH_CALC);
const REG_FN_VAR = new RegExp(SYN_FN_VAR);
const REG_OPERATOR = /\s[*+/-]\s/;
const REG_START_MATH = new RegExp(SYN_FN_MATH);
const REG_START_MATH_VAR = new RegExp(SYN_FN_MATH_VAR);
const REG_TYPE_DIM = new RegExp(`^(${NUM})([a-z]+)$`);
const REG_TYPE_DIM_PCT = new RegExp(`^(${NUM})([a-z]+|%)$`);
const REG_TYPE_PCT = new RegExp(`^(${NUM})%$`);

/* cached results */
export const cachedResults = new LRUCache({
  max: 4096
});

/**
 * calclator
 */
export class Calculator {
  /* private */
  // number
  #hasNum;
  #numSum;
  #numMul;
  // percentage
  #hasPct;
  #pctSum;
  #pctMul;
  // dimension
  #hasDim;
  #dimSum;
  #dimSub;
  #dimMul;
  #dimDiv;
  // et cetra
  #hasEtc;
  #etcSum;
  #etcSub;
  #etcMul;
  #etcDiv;

  /**
   * constructor
   */
  constructor() {
    // number
    this.#hasNum = false;
    this.#numSum = [];
    this.#numMul = [];
    // percentage
    this.#hasPct = false;
    this.#pctSum = [];
    this.#pctMul = [];
    // dimension
    this.#hasDim = false;
    this.#dimSum = [];
    this.#dimSub = [];
    this.#dimMul = [];
    this.#dimDiv = [];
    // et cetra
    this.#hasEtc = false;
    this.#etcSum = [];
    this.#etcSub = [];
    this.#etcMul = [];
    this.#etcDiv = [];
  }

  get hasNum() {
    return this.#hasNum;
  }

  set hasNum(value) {
    this.#hasNum = !!value;
  }

  get numSum() {
    return this.#numSum;
  }

  get numMul() {
    return this.#numMul;
  }

  get hasPct() {
    return this.#hasPct;
  }

  set hasPct(value) {
    this.#hasPct = !!value;
  }

  get pctSum() {
    return this.#pctSum;
  }

  get pctMul() {
    return this.#pctMul;
  }

  get hasDim() {
    return this.#hasDim;
  }

  set hasDim(value) {
    this.#hasDim = !!value;
  }

  get dimSum() {
    return this.#dimSum;
  }

  get dimSub() {
    return this.#dimSub;
  }

  get dimMul() {
    return this.#dimMul;
  }

  get dimDiv() {
    return this.#dimDiv;
  }

  get hasEtc() {
    return this.#hasEtc;
  }

  set hasEtc(value) {
    this.#hasEtc = !!value;
  }

  get etcSum() {
    return this.#etcSum;
  }

  get etcSub() {
    return this.#etcSub;
  }

  get etcMul() {
    return this.#etcMul;
  }

  get etcDiv() {
    return this.#etcDiv;
  }

  /**
   * clear values
   * @returns {void}
   */
  clear() {
    // number
    this.#hasNum = false;
    this.#numSum = [];
    this.#numMul = [];
    // percentage
    this.#hasPct = false;
    this.#pctSum = [];
    this.#pctMul = [];
    // dimension
    this.#hasDim = false;
    this.#dimSum = [];
    this.#dimSub = [];
    this.#dimMul = [];
    this.#dimDiv = [];
    // et cetra
    this.#hasEtc = false;
    this.#etcSum = [];
    this.#etcSub = [];
    this.#etcMul = [];
    this.#etcDiv = [];
  }

  /**
   * sort values
   * @param {Array} values - values
   * @returns {Array} - sorted values
   */
  sort(values = []) {
    const arr = [...values];
    if (arr.length > 1) {
      arr.sort((a, b) => {
        let res;
        if (REG_TYPE_DIM_PCT.test(a) && REG_TYPE_DIM_PCT.test(b)) {
          const [, valA, unitA] = REG_TYPE_DIM_PCT.exec(a);
          const [, valB, unitB] = REG_TYPE_DIM_PCT.exec(b);
          if (unitA === unitB) {
            if (Number(valA) === Number(valB)) {
              res = 0;
            } else if (Number(valA) > Number(valB)) {
              res = 1;
            } else {
              res = -1;
            }
          } else if (unitA > unitB) {
            res = 1;
          } else {
            res = -1;
          }
        } else {
          if (a === b) {
            res = 0;
          } else if (a > b) {
            res = 1;
          } else {
            res = -1;
          }
        }
        return res;
      });
    }
    return arr;
  }

  /**
   * multiply values
   * @returns {?string} - resolved value
   */
  multiply() {
    const value = [];
    let num;
    if (this.#hasNum) {
      num = 1;
      for (const i of this.#numMul) {
        num *= i;
        if (num === 0 || !Number.isFinite(num) || Number.isNaN(num)) {
          break;
        }
      }
      if (!this.#hasPct && !this.#hasDim && !this.hasEtc) {
        value.push(num);
      }
    }
    if (this.#hasPct) {
      if (!this.#hasNum) {
        num = 1;
      }
      for (const i of this.#pctMul) {
        num *= i;
        if (num === 0 || !Number.isFinite(num) || Number.isNaN(num)) {
          break;
        }
      }
      if (Number.isFinite(num)) {
        num = `${num}%`;
      }
      if (!this.#hasDim && !this.hasEtc) {
        value.push(num);
      }
    }
    if (this.#hasDim) {
      let dim, mul, div;
      if (this.#dimMul.length) {
        if (this.#dimMul.length === 1) {
          [mul] = this.#dimMul;
        } else {
          mul = `${this.sort(this.#dimMul).join(' * ')}`;
        }
      }
      if (this.#dimDiv.length) {
        if (this.#dimDiv.length === 1) {
          [div] = this.#dimDiv;
        } else {
          div = `${this.sort(this.#dimDiv).join(' * ')}`;
        }
      }
      if (Number.isFinite(num)) {
        if (mul) {
          if (div) {
            if (div.includes('*')) {
              dim = calc(`calc(${num} * ${mul} / (${div}))`, {
                toCanonicalUnits: true
              });
            } else {
              dim = calc(`calc(${num} * ${mul} / ${div})`, {
                toCanonicalUnits: true
              });
            }
          } else {
            dim = calc(`calc(${num} * ${mul})`, {
              toCanonicalUnits: true
            });
          }
        } else {
          if (div.includes('*')) {
            dim = calc(`calc(${num} / (${div}))`, {
              toCanonicalUnits: true
            });
          } else {
            dim = calc(`calc(${num} / ${div})`, {
              toCanonicalUnits: true
            });
          }
        }
        value.push(dim.replace(/^calc/, ''));
      } else {
        if (!value.length && num !== undefined) {
          value.push(num);
        }
        if (mul) {
          if (div) {
            if (div.includes('*')) {
              dim = calc(`calc(${mul} / (${div}))`, {
                toCanonicalUnits: true
              });
            } else {
              dim = calc(`calc(${mul} / ${div})`, {
                toCanonicalUnits: true
              });
            }
          } else {
            dim = calc(`calc(${mul})`, {
              toCanonicalUnits: true
            });
          }
          if (value.length) {
            value.push('*', dim.replace(/^calc/, ''));
          } else {
            value.push(dim.replace(/^calc/, ''));
          }
        } else {
          dim = calc(`calc(${div})`, {
            toCanonicalUnits: true
          });
          if (value.length) {
            value.push('/', dim.replace(/^calc/, ''));
          } else {
            value.push('1', '/', dim.replace(/^calc/, ''));
          }
        }
      }
    }
    if (this.#hasEtc) {
      if (this.#etcMul.length) {
        if (!value.length && num !== undefined) {
          value.push(num);
        }
        const mul = this.sort(this.#etcMul).join(' * ');
        if (value.length) {
          value.push(`* ${mul}`);
        } else {
          value.push(`${mul}`);
        }
      }
      if (this.#etcDiv.length) {
        const div = this.sort(this.#etcDiv).join(' * ');
        if (div.includes('*')) {
          if (value.length) {
            value.push(`/ (${div})`);
          } else {
            value.push(`1 / (${div})`);
          }
        } else if (value.length) {
          value.push(`/ ${div}`);
        } else {
          value.push(`1 / ${div}`);
        }
      }
    }
    return value.join(' ') || null;
  }

  /**
   * sum values
   * @returns {?string} - resolved value
   */
  sum() {
    const value = [];
    if (this.#hasNum) {
      let num = 0;
      for (const i of this.#numSum) {
        num += i;
        if (!Number.isFinite(num) || Number.isNaN(num)) {
          break;
        }
      }
      value.push(num);
    }
    if (this.#hasPct) {
      let num = 0;
      for (const i of this.#pctSum) {
        num += i;
        if (!Number.isFinite(num) || Number.isNaN(num)) {
          break;
        }
      }
      if (Number.isFinite(num)) {
        num = `${num}%`;
      }
      if (value.length) {
        value.push(`+ ${num}`);
      } else {
        value.push(num);
      }
    }
    if (this.#hasDim) {
      let dim, sum, sub;
      if (this.#dimSum.length) {
        sum = this.#dimSum.join(' + ');
      }
      if (this.#dimSub.length) {
        sub = this.#dimSub.join(' + ');
      }
      if (sum) {
        if (sub) {
          if (sub.includes('-')) {
            dim = calc(`calc(${sum} - (${sub}))`, {
              toCanonicalUnits: true
            });
          } else {
            dim = calc(`calc(${sum} - ${sub})`, {
              toCanonicalUnits: true
            });
          }
        } else {
          dim = calc(`calc(${sum})`, {
            toCanonicalUnits: true
          });
        }
      } else {
        dim = calc(`calc(-1 * (${sub}))`, {
          toCanonicalUnits: true
        });
      }
      if (value.length) {
        value.push('+', dim.replace(/^calc/, ''));
      } else {
        value.push(dim.replace(/^calc/, ''));
      }
    }
    if (this.#hasEtc) {
      if (this.#etcSum.length) {
        const sum = this.sort(this.#etcSum).map(item => {
          let res;
          if (REG_OPERATOR.test(item) &&
              !item.startsWith('(') && !item.endsWith(')')) {
            res = `(${item})`;
          } else {
            res = item;
          }
          return res;
        }).join(' + ');
        if (value.length) {
          if (this.#etcSum.length > 1) {
            value.push(`+ (${sum})`);
          } else {
            value.push(`+ ${sum}`);
          }
        } else {
          value.push(`${sum}`);
        }
      }
      if (this.#etcSub.length) {
        const sub = this.sort(this.#etcSub).map(item => {
          let res;
          if (REG_OPERATOR.test(item) &&
              !item.startsWith('(') && !item.endsWith(')')) {
            res = `(${item})`;
          } else {
            res = item;
          }
          return res;
        }).join(' + ');
        if (value.length) {
          if (this.#etcSub.length > 1) {
            value.push(`- (${sub})`);
          } else {
            value.push(`- ${sub}`);
          }
        } else if (this.#etcSub.length > 1) {
          value.push(`-1 * (${sub})`);
        } else {
          value.push(`-1 * ${sub}`);
        }
      }
    }
    return value.join(' ') || null;
  }
}

/**
 * sort calc values
 * @param {Array} values - values
 * @param {boolean} finalize - finalize
 * @returns {string} - sorted value
 */
export const sortCalcValues = (values = [], finalize = false) => {
  if (values.length < 3) {
    return null;
  }
  const start = values.shift();
  const end = values.pop();
  if (values.length === 1) {
    const [value] = values;
    return `${start}${value}${end}`;
  }
  const sortedValues = [];
  const cal = new Calculator();
  let operator;
  for (let i = 0, l = values.length; i < l; i++) {
    const value = values[i];
    if (value === '*' || value === '/') {
      operator = value;
    } else if (value === '+' || value === '-') {
      const sortedValue = cal.multiply();
      sortedValues.push(sortedValue, value);
      cal.clear();
      operator = null;
    } else {
      switch (operator) {
        case '/': {
          if (Number.isFinite(value * 1)) {
            cal.hasNum = true;
            cal.numMul.push(1 / value);
          } else if (REG_TYPE_PCT.test(value)) {
            const [, val] = REG_TYPE_PCT.exec(value);
            cal.hasPct = true;
            cal.pctMul.push(MAX_PCT * MAX_PCT / Number(val));
          } else if (REG_TYPE_DIM.test(value)) {
            cal.hasDim = true;
            cal.dimDiv.push(value);
          } else {
            cal.hasEtc = true;
            cal.etcDiv.push(value);
          }
          break;
        }
        case '*':
        default: {
          if (Number.isFinite(value * 1)) {
            cal.hasNum = true;
            cal.numMul.push(value * 1);
          } else if (REG_TYPE_PCT.test(value)) {
            const [, val] = REG_TYPE_PCT.exec(value);
            cal.hasPct = true;
            cal.pctMul.push(Number(val));
          } else if (REG_TYPE_DIM.test(value)) {
            cal.hasDim = true;
            cal.dimMul.push(value);
          } else {
            cal.hasEtc = true;
            cal.etcMul.push(value);
          }
        }
      }
      if (i === l - 1) {
        const sortedValue = cal.multiply();
        sortedValues.push(sortedValue);
        cal.clear();
        operator = null;
      }
    }
  }
  let resolvedValue;
  if (finalize && (sortedValues.includes('+') || sortedValues.includes('-'))) {
    const finalizedValues = [];
    cal.clear();
    operator = null;
    for (let i = 0, l = sortedValues.length; i < l; i++) {
      const value = sortedValues[i];
      if (value === '+' || value === '-') {
        operator = value;
      } else {
        switch (operator) {
          case '-': {
            if (Number.isFinite(value * 1)) {
              cal.hasNum = true;
              cal.numSum.push(-1 * value);
            } else if (REG_TYPE_PCT.test(value)) {
              const [, val] = REG_TYPE_PCT.exec(value);
              cal.hasPct = true;
              cal.pctSum.push(-1 * Number(val));
            } else if (REG_TYPE_DIM.test(value)) {
              cal.hasDim = true;
              cal.dimSub.push(value);
            } else {
              cal.hasEtc = true;
              cal.etcSub.push(value);
            }
            break;
          }
          case '+':
          default: {
            if (Number.isFinite(value * 1)) {
              cal.hasNum = true;
              cal.numSum.push(value * 1);
            } else if (REG_TYPE_PCT.test(value)) {
              const [, val] = REG_TYPE_PCT.exec(value);
              cal.hasPct = true;
              cal.pctSum.push(Number(val));
            } else if (REG_TYPE_DIM.test(value)) {
              cal.hasDim = true;
              cal.dimSum.push(value);
            } else {
              cal.hasEtc = true;
              cal.etcSum.push(value);
            }
          }
        }
        if (i === l - 1) {
          const sortedValue = cal.sum();
          finalizedValues.push(sortedValue);
          cal.clear();
          operator = null;
        }
      }
    }
    resolvedValue = finalizedValues.join(' ');
  } else {
    resolvedValue = sortedValues.join(' ');
  }
  return `${start}${resolvedValue}${end}`;
};

/**
 * serialize calc
 * @param {string} value - value
 * @param {object} [opt] - options
 * @param {string} [opt.format] - output format
 * @returns {?string} - resolved value
 */
export const serializeCalc = (value, opt = {}) => {
  const { format } = opt;
  if (isString(value)) {
    if (!REG_START_MATH_VAR.test(value) || format !== VAL_SPEC) {
      return value;
    }
    value = value.toLowerCase().trim();
  } else {
    throw new TypeError(`${value} is not a string`);
  }
  const cacheKey = `{serializeCalc:${value},opt:${valueToJsonString(opt)}}`;
  if (cachedResults.has(cacheKey)) {
    return cachedResults.get(cacheKey);
  }
  const items = tokenize({ css: value }).map(token => {
    const [type, value] = token;
    let res;
    if (type !== W_SPACE && type !== COMMENT) {
      res = value;
    }
    return res;
  }).filter(v => v);
  let startIndex = items.findLastIndex(item => /\($/.test(item));
  while (startIndex) {
    const endIndex = items.findIndex((item, index) => {
      return item === ')' && index > startIndex;
    });
    const slicedValues = items.slice(startIndex, endIndex + 1);
    let serializedValue = sortCalcValues(slicedValues);
    if (REG_START_MATH_VAR.test(serializedValue)) {
      serializedValue = calc(serializedValue, {
        toCanonicalUnits: true
      });
    }
    items.splice(startIndex, endIndex - startIndex + 1, serializedValue);
    startIndex = items.findLastIndex(item => /\($/.test(item));
  }
  const serializedCalc = sortCalcValues(items, true);
  if (cacheKey) {
    cachedResults.set(cacheKey, serializedCalc);
  }
  return serializedCalc;
};

/**
 * resolve dimension
 * @param {Array} token - token
 * @param {object} [opt] - options
 * @param {object} [opt.dimension] - dimension
 * @returns {?string} - resolved value
 */
export const resolveDimension = (token, opt = {}) => {
  if (!Array.isArray(token)) {
    throw new TypeError(`${token} is not an array.`);
  }
  const [, value,,, detail = {}] = token;
  const { unit, value: relativeValue } = detail;
  const { dimension = {} } = opt;
  if (unit === 'px') {
    return value;
  }
  let res;
  if (unit && Number.isFinite(relativeValue)) {
    let pixelValue;
    if (Object.hasOwnProperty.call(dimension, unit)) {
      pixelValue = dimension[unit];
    } else if (typeof dimension.callback === 'function') {
      pixelValue = dimension.callback(unit);
    }
    if (Number.isFinite(pixelValue)) {
      res = `${relativeValue * pixelValue}px`;
    }
  }
  return res ?? null;
};

/**
 * parse tokens
 * @param {Array.<Array>} tokens - tokens
 * @param {object} [opt] - options
 * @returns {Array.<string>} - parsed tokens
 */
export const parseTokens = (tokens, opt = {}) => {
  if (!Array.isArray(tokens)) {
    throw new TypeError(`${tokens} is not an array.`);
  }
  const { format } = opt;
  const mathFunc = new Set();
  let nest = 0;
  const res = [];
  while (tokens.length) {
    const token = tokens.shift();
    if (!Array.isArray(token)) {
      throw new TypeError(`${token} is not an array.`);
    }
    const [type, value] = token;
    switch (type) {
      case DIM: {
        let resolvedValue;
        if (format === VAL_SPEC && !mathFunc.has(nest)) {
          resolvedValue = value;
        } else {
          resolvedValue = resolveDimension(token, opt);
          if (!resolvedValue) {
            resolvedValue = value;
          }
        }
        res.push(resolvedValue);
        break;
      }
      case FUNC:
      case PAREN_OPEN: {
        res.push(value);
        nest++;
        if (REG_START_MATH.test(value)) {
          mathFunc.add(nest);
        }
        break;
      }
      case PAREN_CLOSE: {
        if (res.length) {
          const lastValue = res[res.length - 1];
          if (lastValue === ' ') {
            res.splice(-1, 1, value);
          } else {
            res.push(value);
          }
        } else {
          res.push(value);
        }
        if (mathFunc.has(nest)) {
          mathFunc.delete(nest);
        }
        nest--;
        break;
      }
      case W_SPACE: {
        if (res.length) {
          const lastValue = res[res.length - 1];
          if (!lastValue.endsWith('(') && lastValue !== ' ') {
            res.push(value);
          }
        }
        break;
      }
      default: {
        if (type !== COMMENT && type !== EOF) {
          res.push(value);
        }
      }
    }
  }
  return res;
};

/**
 * resolve CSS calc()
 * @param {string} value - color value including calc()
 * @param {object} [opt] - options
 * @param {object} [opt.dimension] - dimension
 * @param {string} [opt.format] - output format
 * @returns {?string} - value
 */
export const cssCalc = (value, opt = {}) => {
  const { format, dimension } = opt;
  if (isString(value)) {
    if (REG_FN_VAR.test(value)) {
      if (format === VAL_SPEC) {
        return value;
      // var() must be resolved before cssCalc()
      } else {
        throw new SyntaxError(`Unexpected token ${FN_VAR} found.`);
      }
    } else if (!REG_FN_MATH_CALC.test(value)) {
      return value;
    }
    value = value.toLowerCase().trim();
  } else {
    throw new TypeError(`${value} is not a string`);
  }
  let cacheKey;
  if (typeof dimension?.callback !== 'function') {
    cacheKey = `{cssCalc:${value},opt:${valueToJsonString(opt)}}`;
    if (cachedResults.has(cacheKey)) {
      return cachedResults.get(cacheKey);
    }
  }
  let resolvedValue;
  if (dimension) {
    const tokens = tokenize({ css: value });
    const values = parseTokens(tokens, opt);
    resolvedValue = calc(values.join(''), {
      toCanonicalUnits: true
    });
  } else {
    resolvedValue = calc(value, {
      toCanonicalUnits: true
    });
  }
  if (REG_START_MATH_VAR.test(value)) {
    if (REG_TYPE_DIM_PCT.test(resolvedValue)) {
      const [, val, unit] = REG_TYPE_DIM_PCT.exec(resolvedValue);
      resolvedValue = `${roundToPrecision(Number(val), HEX)}${unit}`;
    }
    // wrap with `calc()`
    if (resolvedValue && !REG_START_MATH_VAR.test(resolvedValue) &&
        format === VAL_SPEC) {
      resolvedValue = `calc(${resolvedValue})`;
    }
  }
  if (cacheKey) {
    cachedResults.set(cacheKey, resolvedValue);
  }
  return resolvedValue;
};
