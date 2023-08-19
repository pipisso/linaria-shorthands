import {expect, test} from '@jest/globals';
import {borderBottom} from './borderBottom';

test('borderBottom shorthand 1 value', () => {
  expect(borderBottom('1px')).toBe(`border-bottom-width:1px;`);
});

test('borderBottom shorthand 2 values', () => {
  expect(borderBottom('1px', 'solid')).toBe(`border-bottom-width:1px;border-bottom-style:solid;`);
});

test('borderBottom shorthand 3 values', () => {
  expect(borderBottom('1px', 'solid', 'red')).toBe(
    `border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:red;`,
  );
});
