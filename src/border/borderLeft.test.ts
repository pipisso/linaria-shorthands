import {expect, test} from '@jest/globals';
import {borderLeft} from './borderLeft';

test('borderLeft shorthand 1 value', () => {
  expect(borderLeft('1px')).toBe(`border-left-width:1px;`);
});

test('borderLeft shorthand 2 values', () => {
  expect(borderLeft('1px', 'solid')).toBe(`border-left-width:1px;border-left-style:solid;`);
});

test('borderLeft shorthand 3 values', () => {
  expect(borderLeft('1px', 'solid', 'red')).toBe(
    `border-left-width:1px;border-left-style:solid;border-left-color:red;`,
  );
});
