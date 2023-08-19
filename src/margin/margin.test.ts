import {expect, test} from '@jest/globals';
import {margin} from './margin';

test('margin shorthand 1 value', () => {
  expect(margin('1px')).toBe(`margin-top:1px;margin-right:1px;margin-bottom:1px;margin-left:1px;`);
});

test('margin shorthand 2 values', () => {
  expect(margin('1px', '2px')).toBe(`margin-top:1px;margin-right:2px;margin-bottom:1px;margin-left:2px;`);
});

test('margin shorthand 3 values', () => {
  expect(margin('1px', '2px', '3px')).toBe(`margin-top:1px;margin-right:2px;margin-bottom:3px;margin-left:2px;`);
});

test('margin shorthand 4 values', () => {
  expect(margin('1px', '2px', '3px', '4px')).toBe(`margin-top:1px;margin-right:2px;margin-bottom:3px;margin-left:4px;`);
});
