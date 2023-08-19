import {expect, test} from '@jest/globals';
import {borderWidth} from './borderWidth';

test('borderWidth shorthand 1 value', () => {
  expect(borderWidth('1px')).toBe(
    `border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;`,
  );
});

test('borderWidth shorthand 2 values', () => {
  expect(borderWidth('1px', '2px')).toBe(
    `border-top-width:1px;border-right-width:2px;border-bottom-width:1px;border-left-width:2px;`,
  );
});

test('borderWidth shorthand 3 values', () => {
  expect(borderWidth('1px', '2px', '3px')).toBe(
    `border-top-width:1px;border-right-width:2px;border-bottom-width:3px;border-left-width:2px;`,
  );
});

test('borderWidth shorthand 4 values', () => {
  expect(borderWidth('1px', '2px', '3px', '4px')).toBe(
    `border-top-width:1px;border-right-width:2px;border-bottom-width:3px;border-left-width:4px;`,
  );
});
