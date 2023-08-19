import {expect, test} from '@jest/globals';
import {border} from './border';

test('border shorthand 1 value', () => {
  expect(border('1px')).toBe(
    `border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;`,
  );
});

test('border shorthand 2 values', () => {
  expect(border('1px', 'solid')).toBe(
    `border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;`,
  );
});

test('border shorthand 3 values', () => {
  expect(border('1px', 'solid', 'red')).toBe(
    `border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:red;border-right-color:red;border-bottom-color:red;border-left-color:red;`,
  );
});
