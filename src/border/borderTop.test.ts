import {expect, test} from '@jest/globals';
import {borderTop} from './borderTop';

test('borderTop shorthand 1 value', () => {
  expect(borderTop('1px')).toBe(`border-top-width:1px;`);
});

test('borderTop shorthand 2 values', () => {
  expect(borderTop('1px', 'solid')).toBe(`border-top-width:1px;border-top-style:solid;`);
});

test('borderTop shorthand 3 values', () => {
  expect(borderTop('1px', 'solid', 'red')).toBe(`border-top-width:1px;border-top-style:solid;border-top-color:red;`);
});
