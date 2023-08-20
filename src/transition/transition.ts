import type * as CSS from 'csstype';

type TransitionValue = [
  TransitionPropertyValue,
  TransitionDurationValue,
  TransitionTimingFunctionValue?,
  TransitionDelayValue?,
];
type TransitionPropertyValue = CSS.Property.TransitionProperty;
type TransitionDurationValue = CSS.Property.TransitionDuration;
type TransitionTimingFunctionValue = CSS.Property.TransitionTimingFunction;
type TransitionDelayValue = CSS.Property.TransitionDelay;

type TransitionCSS =
  `transition-duration:${string};transition-timing-function:${string};transition-delay:${string};transition-property:${string};`;

/**
 *
 * @example
 *   transition('color', '1s')
 *   // will result in the following:
 *   transition-duration:1s;
 *   transition-timing-function:ease;
 *   transition-delay:0s;
 *   transition-property:color;
 *
 */
export function transition(property: TransitionPropertyValue, duration: TransitionDurationValue): TransitionCSS;
/**
 *
 * @example
 *   transition('color', '1s', 'ease-out')
 *   // will result in the following:
 *   transition-duration:1s;
 *   transition-timing-function:ease-out;
 *   transition-delay:0s;
 *   transition-property:color;
 *
 */
export function transition(
  property: TransitionPropertyValue,
  duration: TransitionDurationValue,
  timingFunction: TransitionTimingFunctionValue,
): TransitionCSS;
/**
 *
 * @example
 *   transition('color', '1s', 'ease-out', '2s')
 *   // will result in the following:
 *   transition-duration:1s;
 *   transition-timing-function:ease-out;
 *   transition-delay:2s;
 *   transition-property:color;
 *
 */
export function transition(
  property: TransitionPropertyValue,
  duration: TransitionDurationValue,
  timingFunction: TransitionTimingFunctionValue,
  delay: TransitionDelayValue,
): TransitionCSS;
/**
 *
 * @example
 *   transition(['color', '1s', 'ease-out', '2s'], ['background-color', '3s', 'ease-in', '4s'])
 *   // will result in the following:
 *   transition-duration:1s,3s;
 *   transition-timing-function:ease-out,ease-in;
 *   transition-delay:2s,4s;
 *   transition-property:color,background-color;
 *
 */
export function transition(...properties: TransitionValue[]): TransitionCSS;

export function transition(...properties: TransitionValue | TransitionValue[]): TransitionCSS {
  if (Array.isArray(properties[0])) {
    const chunkDuration = [] as TransitionDurationValue[];
    const chunkTimingFunction = [] as TransitionTimingFunctionValue[];
    const chunkDelay = [] as TransitionDelayValue[];
    const chunkProperty = [] as TransitionPropertyValue[];

    for (let i = 0; i < properties.length; i++) {
      const [property, duration, timingFunction = 'ease', delay = '0s'] = properties[i] as TransitionValue;
      chunkDuration.push(duration);
      chunkProperty.push(property);
      chunkTimingFunction.push(timingFunction);
      chunkDelay.push(delay);
    }
    return `transition-duration:${chunkDuration.join(',')};transition-timing-function:${chunkTimingFunction.join(
      ',',
    )};transition-delay:${chunkDelay.join(',')};transition-property:${chunkProperty.join(',')};`;
  } else {
    const [property, duration, timingFunction = 'ease', delay = '0s'] = properties;

    return `transition-duration:${duration};transition-timing-function:${timingFunction};transition-delay:${delay};transition-property:${property};`;
  }
}
