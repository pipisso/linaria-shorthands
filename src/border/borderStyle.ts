import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderStyleValue = CSS.Property.BorderStyle;

export type BorderStyleCSS =
  `border-top-style:${string};border-right-style:${string};border-bottom-style:${string};border-left-style:${string};`;

/**
 *
 * @example
 *   borderStyle('solid')
 *   // will result in the following:
 *   border-top-style:solid;
 *   border-right-style:solid;
 *   border-bottom-style:solid;
 *   border-left-style:solid;
 *
 */
export function borderStyle(all: BorderStyleValue): BorderStyleCSS;
/**
 *
 * @example
 *   borderStyle('solid', 'dashed')
 *   // will result in the following:
 *   border-top-style:solid;
 *   border-right-style:dashed;
 *   border-bottom-style:solid;
 *   border-left-style:dashed;
 *
 */
export function borderStyle(vertical: BorderStyleValue, horizontal: BorderStyleValue): BorderStyleCSS;
/**
 *
 * @example
 *   borderStyle('solid', 'dashed', 'dotted')
 *   // will result in the following:
 *   border-top-style:solid;
 *   border-right-style:dashed;
 *   border-bottom-style:dotted;
 *   border-left-style:dashed;
 *
 */
export function borderStyle(
  top: BorderStyleValue,
  horizontal: BorderStyleValue,
  bottom: BorderStyleValue,
): BorderStyleCSS;
/**
 *
 * @example
 *   borderStyle('solid', 'dashed', 'dotted', 'double')
 *   // will result in the following:
 *   border-top-style:solid;
 *   border-right-style:dashed;
 *   border-bottom-style:dotted;
 *   border-left-style:double;
 *
 */
export function borderStyle(
  top: BorderStyleValue,
  right: BorderStyleValue,
  bottom: BorderStyleValue,
  left: BorderStyleValue,
): BorderStyleCSS;

export function borderStyle(...properties: BorderStyleValue[]): BorderStyleCSS {
  return getStyleString('border', 'style', ...properties) as BorderStyleCSS;
}
