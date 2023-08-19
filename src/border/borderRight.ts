import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderRightWidth = CSS.Property.BorderRightWidth;
type BorderRightStyle = CSS.Property.BorderRightStyle;
type BorderRightColor = CSS.Property.BorderRightColor;

type BorderRightCSS = BorderRightCSS1 | BorderRightCSS2 | BorderRightCSS3;
type BorderRightCSS1 = `border-right-width:${BorderRightWidth};`;
type BorderRightCSS2 = `border-right-width:${BorderRightWidth};border-right-style:${BorderRightStyle};`;
type BorderRightCSS3 =
  `border-right-width:${BorderRightWidth};border-right-style:${BorderRightStyle};border-right-color:${BorderRightColor};`;

/**
 *
 * @example
 *   borderRight('1px')
 *   // will result in the following:
 *   border-right-width:1px;
 *
 */
export function borderRight(width: BorderRightWidth): BorderRightCSS1;
/**
 *
 * @example
 *   borderRight('1px', 'solid')
 *   // will result in the following:
 *   border-right-width:1px;
 *   border-right-style:solid;
 *
 */
export function borderRight(width: BorderRightWidth, style: BorderRightStyle): BorderRightCSS2;
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
export function borderRight(width: BorderRightWidth, style: BorderRightStyle, color: BorderRightColor): BorderRightCSS3;

export function borderRight(...properties: [BorderRightWidth, BorderRightStyle?, BorderRightColor?]): BorderRightCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'right', ...properties) as BorderRightCSS;
}
