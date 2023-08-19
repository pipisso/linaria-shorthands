import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderTopValue = [BorderTopWidthValue, BorderTopStyleValue?, BorderTopColorValue?];
type BorderTopWidthValue = CSS.Property.BorderTopWidth;
type BorderTopStyleValue = CSS.Property.BorderTopStyle;
type BorderTopColorValue = CSS.Property.BorderTopColor;

type BorderTopCSS = BorderTopCSS1 | BorderTopCSS2 | BorderTopCSS3;
type BorderTopCSS1 = `border-top-width:${string};`;
type BorderTopCSS2 = `${BorderTopCSS1}border-top-style:${string};`;
type BorderTopCSS3 = `${BorderTopCSS2}border-top-color:${string};`;

/**
 *
 * @example
 *   borderTop('1px')
 *   // will result in the following:
 *   border-top-width:1px;
 *
 */
export function borderTop(width: BorderTopWidthValue): BorderTopCSS1;
/**
 *
 * @example
 *   borderTop('1px', 'solid')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-top-style:solid;
 *
 */
export function borderTop(width: BorderTopWidthValue, style: BorderTopStyleValue): BorderTopCSS2;
/**
 *
 * @example
 *   borderTop('1px', 'solid', 'red')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-top-style:solid;
 *   border-top-color:red;
 *
 */
export function borderTop(
  width: BorderTopWidthValue,
  style: BorderTopStyleValue,
  color: BorderTopColorValue,
): BorderTopCSS3;

export function borderTop(...properties: BorderTopValue): BorderTopCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'top', ...properties) as BorderTopCSS;
}
