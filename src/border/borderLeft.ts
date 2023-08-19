import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderLeftValue = [BorderLeftWidthValue, BorderLeftStyleValue?, BorderLeftColorValue?];
type BorderLeftWidthValue = CSS.Property.BorderLeftWidth;
type BorderLeftStyleValue = CSS.Property.BorderLeftStyle;
type BorderLeftColorValue = CSS.Property.BorderLeftColor;

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
export function borderLeft(width: BorderLeftWidthValue): BorderLeftCSS1;
/**
 *
 * @example
 *   borderLeft('1px', 'solid')
 *   // will result in the following:
 *   border-left-width:1px;
 *   border-left-style:solid;
 *
 */
export function borderLeft(width: BorderLeftWidthValue, style: BorderLeftStyleValue): BorderLeftCSS2;
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
export function borderLeft(
  width: BorderLeftWidthValue,
  style: BorderLeftStyleValue,
  color: BorderLeftColorValue,
): BorderLeftCSS3;

export function borderLeft(...properties: BorderLeftValue): BorderLeftCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'left', ...properties) as BorderLeftCSS;
}
