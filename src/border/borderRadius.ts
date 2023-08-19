import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderRadiusValue = CSS.Property.BorderRadius;

export type BorderRadiusCSS =
  `border-top-radius:${string};border-right-radius:${string};border-bottom-radius:${string};border-left-radius:${string};`;

/**
 *
 * @example
 *   borderRadius('1px')
 *   // will result in the following:
 *   border-top-style:1px;
 *   border-right-style:1px;
 *   border-bottom-style:1px;
 *   border-left-style:1px;
 *
 */
export function borderRadius(all: BorderRadiusValue): BorderRadiusCSS;
/**
 *
 * @example
 *   borderRadius('1px', '2px')
 *   // will result in the following:
 *   border-top-style:1px;
 *   border-right-style:2px;
 *   border-bottom-style:sol1pxid;
 *   border-left-style:2px;
 *
 */
export function borderRadius(vertical: BorderRadiusValue, horizontal: BorderRadiusValue): BorderRadiusCSS;
/**
 *
 * @example
 *   borderRadius('1px', '2px', '3px')
 *   // will result in the following:
 *   border-top-style:1px;
 *   border-right-style:2px;
 *   border-bottom-style:3px;
 *   border-left-style:2px;
 *
 */
export function borderRadius(
  top: BorderRadiusValue,
  horizontal: BorderRadiusValue,
  bottom: BorderRadiusValue,
): BorderRadiusCSS;
/**
 *
 * @example
 *   borderRadius('1px', '2px', '3px', '4px')
 *   // will result in the following:
 *   border-top-style:1px;
 *   border-right-style:2px;
 *   border-bottom-style:3px;
 *   border-left-style:4px;
 *
 */
export function borderRadius(
  top: BorderRadiusValue,
  right: BorderRadiusValue,
  bottom: BorderRadiusValue,
  left: BorderRadiusValue,
): BorderRadiusCSS;

export function borderRadius(...properties: BorderRadiusValue[]): BorderRadiusCSS {
  return getStyleString('border', 'radius', ...properties) as BorderRadiusCSS;
}
