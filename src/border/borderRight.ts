import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderRightValue = [BorderRightWidthValue, BorderRightStyleValue?, BorderRightColorValue?];
type BorderRightWidthValue = CSS.Property.BorderRightWidth;
type BorderRightStyleValue = CSS.Property.BorderRightStyle;
type BorderRightColorValue = CSS.Property.BorderRightColor;

type BorderRightCSS = BorderRightCSS1 | BorderRightCSS2 | BorderRightCSS3;
type BorderRightCSS1 = `border-right-width:${string};`;
type BorderRightCSS2 = `${BorderRightCSS1}border-right-style:${string};`;
type BorderRightCSS3 = `${BorderRightCSS2}border-right-color:${string};`;

/**
 *
 * @example
 *   borderRight('1px')
 *   // will result in the following:
 *   border-right-width:1px;
 *
 */
export function borderRight(width: BorderRightWidthValue): BorderRightCSS1;
/**
 *
 * @example
 *   borderRight('1px', 'solid')
 *   // will result in the following:
 *   border-right-width:1px;
 *   border-right-style:solid;
 *
 */
export function borderRight(width: BorderRightWidthValue, style: BorderRightStyleValue): BorderRightCSS2;
/**
 *
 * @example
 *   borderRight('1px', 'solid', 'red')
 *   // will result in the following:
 *   border-right-width:1px;
 *   border-right-style:solid;
 *   border-right-color:red;
 *
 */
export function borderRight(
  width: BorderRightWidthValue,
  style: BorderRightStyleValue,
  color: BorderRightColorValue,
): BorderRightCSS3;

export function borderRight(...properties: BorderRightValue): BorderRightCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'right', ...properties) as BorderRightCSS;
}
