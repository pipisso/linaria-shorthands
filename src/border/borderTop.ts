import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderTopWidth = CSS.Property.BorderTopWidth;
type BorderTopStyle = CSS.Property.BorderTopStyle;
type BorderTopColor = CSS.Property.BorderTopColor;

type BorderTopCSS = BorderTopCSS1 | BorderTopCSS2 | BorderTopCSS3;
type BorderTopCSS1 = `border-top-width:${BorderTopWidth};`;
type BorderTopCSS2 = `border-top-width:${BorderTopWidth};border-top-style:${BorderTopStyle};`;
type BorderTopCSS3 =
  `border-top-width:${BorderTopWidth};border-top-style:${BorderTopStyle};border-top-color:${BorderTopColor};`;

/**
 *
 * @example
 *   borderTop('1px')
 *   // will result in the following:
 *   border-top-width:1px;
 *
 */
export function borderTop(width: BorderTopWidth): BorderTopCSS1;
/**
 *
 * @example
 *   borderTop('1px', 'solid')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-top-style:solid;
 *
 */
export function borderTop(width: BorderTopWidth, style: BorderTopStyle): BorderTopCSS2;
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
export function borderTop(width: BorderTopWidth, style: BorderTopStyle, color: BorderTopColor): BorderTopCSS3;

export function borderTop(...properties: [BorderTopWidth, BorderTopStyle?, BorderTopColor?]): BorderTopCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'top', ...properties) as BorderTopCSS;
}
