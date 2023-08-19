import {expect, test} from '@jest/globals';
import {borderColor} from './borderColor';

test('borderColor shorthand 1 value', () => {
  expect(borderColor('red')).toBe(
    `border-top-color:red;border-right-color:red;border-bottom-color:red;border-left-color:red;`,
  );
});

test('borderStyle shorthand 2 values', () => {
  expect(borderColor('red', 'blue')).toBe(
    `border-top-color:red;border-right-color:blue;border-bottom-color:red;border-left-color:blue;`,
  );
});

test('borderStyle shorthand 3 values', () => {
  expect(borderColor('red', 'blue', 'green')).toBe(
    `border-top-color:red;border-right-color:blue;border-bottom-color:green;border-left-color:blue;`,
  );
});

test('borderStyle shorthand 4 values', () => {
  expect(borderColor('red', 'blue', 'green', 'yellow')).toBe(
    `border-top-color:red;border-right-color:blue;border-bottom-color:green;border-left-color:yellow;`,
  );
});
