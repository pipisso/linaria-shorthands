import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderBottomValue = [BorderBottomWidthValue, BorderBottomStyleValue?, BorderBottomColorValue?];
type BorderBottomWidthValue = CSS.Property.BorderBottomWidth;
type BorderBottomStyleValue = CSS.Property.BorderBottomStyle;
type BorderBottomColorValue = CSS.Property.BorderBottomColor;

type BorderBottomCSS = BorderBottomCSS1 | BorderBottomCSS2 | BorderBottomCSS3;
type BorderBottomCSS1 = `border-bottom-width:${string};`;
type BorderBottomCSS2 = `${BorderBottomCSS1}border-bottom-style:${string};`;
type BorderBottomCSS3 = `${BorderBottomCSS2}border-bottom-color:${string};`;

/**
 *
 * @example
 *   borderBottom('1px')
 *   // will result in the following:
 *   border-bottom-width:1px;
 *
 */
export function borderBottom(width: BorderBottomWidthValue): BorderBottomCSS1;
/**
 *
 * @example
 *   borderBottom('1px', 'solid')
 *   // will result in the following:
 *   border-bottom-width:1px;
 *   border-bottom-style:solid;
 *
 */
export function borderBottom(width: BorderBottomWidthValue, style: BorderBottomStyleValue): BorderBottomCSS2;
/**
 *
 * @example
 *   borderBottom('1px', 'solid', 'red')
 *   // will result in the following:
 *   border-bottom-width:1px;
 *   border-bottom-style:solid;
 *   border-bottom-color:red;
 *
 */
export function borderBottom(
  width: BorderBottomWidthValue,
  style: BorderBottomStyleValue,
  color: BorderBottomColorValue,
): BorderBottomCSS3;

export function borderBottom(...properties: BorderBottomValue): BorderBottomCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'bottom', ...properties) as BorderBottomCSS;
}
