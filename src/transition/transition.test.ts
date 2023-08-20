import {expect, test} from '@jest/globals';
import {transition} from './transition';

test('transition shorthand 2 values', () => {
  expect(transition('color', '1s')).toBe(
    `transition-duration:1s;transition-timing-function:ease;transition-delay:0s;transition-property:color;`,
  );
});

test('transition shorthand 3 values', () => {
  expect(transition('color', '1s', 'ease-out')).toBe(
    `transition-duration:1s;transition-timing-function:ease-out;transition-delay:0s;transition-property:color;`,
  );
});

test('transition shorthand 4 values', () => {
  expect(transition('color', '1s', 'ease-out', '2s')).toBe(
    `transition-duration:1s;transition-timing-function:ease-out;transition-delay:2s;transition-property:color;`,
  );
});
test('transition shorthand 4 values', () => {
  expect(transition(['color', '1s', 'ease-out', '2s'])).toBe(
    `transition-duration:1s;transition-timing-function:ease-out;transition-delay:2s;transition-property:color;`,
  );
});
test('transition shorthand 4 values', () => {
  expect(transition(['color', '1s', 'ease-out', '2s'], ['background-color', '2s', 'ease-in', '4s'])).toBe(
    `transition-duration:1s,2s;transition-timing-function:ease-out,ease-in;transition-delay:2s,4s;transition-property:color,background-color;`,
  );
});
