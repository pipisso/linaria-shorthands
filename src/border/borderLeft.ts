import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderLeftWidth = CSS.Property.BorderLeftWidth;
type BorderLeftStyle = CSS.Property.BorderLeftStyle;
type BorderLeftColor = CSS.Property.BorderLeftColor;

type BorderLeftCSS = BorderLeftCSS1 | BorderLeftCSS2 | BorderLeftCSS3;
type BorderLeftCSS1 = `border-left-width:${string};`;
type BorderLeftCSS2 = `${BorderLeftCSS1}border-left-style:${string};`;
type BorderLeftCSS3 = `${BorderLeftCSS2}border-left-color:${string};`;

/**
 *
 * @example
 *   borderLeft('1px')
 *   // will result in the following:
 *   border-left-width:1px;
 *
 */
export function borderLeft(width: BorderLeftWidth): BorderLeftCSS1;
/**
 *
 * @example
 *   borderLeft('1px', 'solid')
 *   // will result in the following:
 *   border-left-width:1px;
 *   border-left-style:solid;
 *
 */
export function borderLeft(width: BorderLeftWidth, style: BorderLeftStyle): BorderLeftCSS2;
/**
 *
 * @example
 *   borderLeft('1px', 'solid', 'red')
 *   // will result in the following:
 *   border-left-width:1px;
 *   border-left-style:solid;
 *   border-left-color:red;
 *
 */
export function borderLeft(width: BorderLeftWidth, style: BorderLeftStyle, color: BorderLeftColor): BorderLeftCSS3;

export function borderLeft(...properties: [BorderLeftWidth, BorderLeftStyle?, BorderLeftColor?]): BorderLeftCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'left', ...properties) as BorderLeftCSS;
}
