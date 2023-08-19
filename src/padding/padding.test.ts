import {expect, test} from '@jest/globals';
import {padding} from './padding';

test('padding shorthand 1 value', () => {
  expect(padding('1px')).toBe(`padding-top:1px;padding-right:1px;padding-bottom:1px;padding-left:1px;`);
});

test('padding shorthand 2 values', () => {
  expect(padding('1px', '2px')).toBe(`padding-top:1px;padding-right:2px;padding-bottom:1px;padding-left:2px;`);
});

test('padding shorthand 3 values', () => {
  expect(padding('1px', '2px', '3px')).toBe(`padding-top:1px;padding-right:2px;padding-bottom:3px;padding-left:2px;`);
});

test('padding shorthand 4 values', () => {
  expect(padding('1px', '2px', '3px', '4px')).toBe(
    `padding-top:1px;padding-right:2px;padding-bottom:3px;padding-left:4px;`,
  );
});
