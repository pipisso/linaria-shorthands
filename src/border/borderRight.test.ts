import {expect, test} from '@jest/globals';
import {borderRight} from './borderRight';

test('borderRight shorthand 1 value', () => {
  expect(borderRight('1px')).toBe(`border-right-width:1px;`);
});

test('borderRight shorthand 2 values', () => {
  expect(borderRight('1px', 'solid')).toBe(`border-right-width:1px;border-right-style:solid;`);
});

test('borderRight shorthand 3 values', () => {
  expect(borderRight('1px', 'solid', 'red')).toBe(
    `border-right-width:1px;border-right-style:solid;border-right-color:red;`,
  );
});
