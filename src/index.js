import { curry, keys, memoize } from 'lodash';

const map = curry((fn, o) => keys(o).map((k, i) => fn(k, o[k], i)));

const toCharCode = (x, i) => x.charCodeAt(0) * (i + 1);

const sum = (x, y) => x + y;

const encode = memoize((x) => x.split('').map(toCharCode).reduce(sum));

const encodeLine = (xs, i) => xs.map(encode).reduce(sum) * (i + 1);

export const hash = (o) =>
  map((k, v) => [k, v], o).map(encodeLine).reduce(sum).toString(36);
