import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderColorValue = CSS.Property.BorderColor;

export type BorderColorCSS =
  `border-top-color:${string};border-right-color:${string};border-bottom-color:${string};border-left-color:${string};`;

/**
 *
 * @example
 *   borderColor('red')
 *   // will result in the following:
 *   border-top-color:red;
 *   border-right-color:red;
 *   border-bottom-color:red;
 *   border-left-color:red
 *
 */
export function borderColor(all: BorderColorValue): BorderColorCSS;
/**
 *
 * @example
 *   borderColor('red', 'blue')
 *   // will result in the following:
 *   border-top-color:red;
 *   border-right-color:blue;
 *   border-bottom-color:red;
 *   border-left-color:blue;
 *
 */
export function borderColor(vertical: BorderColorValue, horizontal: BorderColorValue): BorderColorCSS;
/**
 *
 * @example
 *   borderColor('red', 'blue', 'green')
 *   // will result in the following:
 *   border-top-color:red;
 *   border-right-color:blue;
 *   border-bottom-color:green;
 *   border-left-color:blue;
 *
 */
export function borderColor(
  top: BorderColorValue,
  horizontal: BorderColorValue,
  bottom: BorderColorValue,
): BorderColorCSS;
/**
 *
 * @example
 *   borderColor('red', 'blue', 'green', 'yellow')
 *   // will result in the following:
 *   border-top-color:red;
 *   border-right-color:blue;
 *   border-bottom-color:green;
 *   border-left-color:yellow;
 *
 */
export function borderColor(
  top: BorderColorValue,
  right: BorderColorValue,
  bottom: BorderColorValue,
  left: BorderColorValue,
): BorderColorCSS;

export function borderColor(...properties: BorderColorValue[]): BorderColorCSS {
  return getStyleString('border', 'color', ...properties) as BorderColorCSS;
}
