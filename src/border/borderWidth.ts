import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderWidthValue = CSS.Property.BorderWidth;

export type BorderWidthCSS =
  `border-top-width:${string};border-right-width:${string};border-bottom-width:${string};border-left-width:${string};`;

/**
 *
 * @example
 *   borderWidth('1px')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-right-width:1px;
 *   border-bottom-width:1px;
 *   border-left-width:1px;
 *
 */
export function borderWidth(all: BorderWidthValue): BorderWidthCSS;
/**
 *
 * @example
 *   borderWidth('1px', '2px')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-right-width:2px;
 *   border-bottom-width:1px;
 *   border-left-width:2px;
 *
 */
export function borderWidth(vertical: BorderWidthValue, horizontal: BorderWidthValue): BorderWidthCSS;
/**
 *
 * @example
 *   borderWidth('1px', '2px', '3px')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-right-width:2px;
 *   border-bottom-width:3px;
 *   border-left-width:2px;
 *
 */
export function borderWidth(
  top: BorderWidthValue,
  horizontal: BorderWidthValue,
  bottom: BorderWidthValue,
): BorderWidthCSS;
/**
 *
 * @example
 *   borderWidth('1px', '2px', '3px', '4px')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-right-width:2px;
 *   border-bottom-width:3px;
 *   border-left-width:4px;
 *
 */
export function borderWidth(
  top: BorderWidthValue,
  right: BorderWidthValue,
  bottom: BorderWidthValue,
  left: BorderWidthValue,
): BorderWidthCSS;

export function borderWidth(...properties: BorderWidthValue[]): BorderWidthCSS {
  return getStyleString('border', 'width', ...properties) as BorderWidthCSS;
}
