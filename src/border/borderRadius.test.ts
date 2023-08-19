import {expect, test} from '@jest/globals';
import {borderRadius} from './borderRadius';

test('borderStyle shorthand 1 value', () => {
  expect(borderRadius('1px')).toBe(
    `border-top-radius:1px;border-right-radius:1px;border-bottom-radius:1px;border-left-radius:1px;`,
  );
});

test('borderRadius shorthand 2 values', () => {
  expect(borderRadius('1px', '2px')).toBe(
    `border-top-radius:1px;border-right-radius:2px;border-bottom-radius:1px;border-left-radius:2px;`,
  );
});

test('borderRadius shorthand 3 values', () => {
  expect(borderRadius('1px', '2px', '3px')).toBe(
    `border-top-radius:1px;border-right-radius:2px;border-bottom-radius:3px;border-left-radius:2px;`,
  );
});

test('borderRadius shorthand 4 values', () => {
  expect(borderRadius('1px', '2px', '3px', '4px')).toBe(
    `border-top-radius:1px;border-right-radius:2px;border-bottom-radius:3px;border-left-radius:4px;`,
  );
});
