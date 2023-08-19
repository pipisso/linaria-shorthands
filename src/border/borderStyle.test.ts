import {expect, test} from '@jest/globals';
import {borderStyle} from './borderStyle';

test('borderStyle shorthand 1 value', () => {
  expect(borderStyle('solid')).toBe(
    `border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;`,
  );
});

test('borderStyle shorthand 2 values', () => {
  expect(borderStyle('solid', 'dashed')).toBe(
    `border-top-style:solid;border-right-style:dashed;border-bottom-style:solid;border-left-style:dashed;`,
  );
});

test('borderStyle shorthand 3 values', () => {
  expect(borderStyle('solid', 'dashed', 'dotted')).toBe(
    `border-top-style:solid;border-right-style:dashed;border-bottom-style:dotted;border-left-style:dashed;`,
  );
});

test('borderStyle shorthand 4 values', () => {
  expect(borderStyle('solid', 'dashed', 'dotted', 'double')).toBe(
    `border-top-style:solid;border-right-style:dashed;border-bottom-style:dotted;border-left-style:double;`,
  );
});
