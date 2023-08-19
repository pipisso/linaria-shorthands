import type * as CSS from 'csstype';
import {borderWidth, type BorderWidthCSS} from './borderWidth';
import {borderStyle, type BorderStyleCSS} from './borderStyle';
import {borderColor, type BorderColorCSS} from './borderColor';

type BorderWidth = CSS.Property.BorderWidth;
type BorderStyle = CSS.Property.BorderStyle;
type BorderColor = CSS.Property.BorderColor;

type BorderCSS = BorderCSS1 | BorderCSS2 | BorderCSS3;
type BorderCSS1 = BorderWidthCSS;
type BorderCSS2 = `${BorderWidthCSS}${BorderStyleCSS}`;
type BorderCSS3 = `${BorderWidthCSS}${BorderStyleCSS}${BorderColorCSS}`;

/**
 *
 * @example
 *   border('1px')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-right-width:1px;
 *   border-bottom-width:1px;
 *   border-left-width:1px
 *
 */
export function border(width: BorderWidth): BorderCSS1;
/**
 *
 * @example
 *   border('1px', 'solid')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-right-width:1px;
 *   border-bottom-width:1px;
 *   border-left-width:1px;
 *   border-top-style:solid;
 *   border-right-style:solid;
 *   border-bottom-style:solid;
 *   border-left-style:solid;
 *
 */
export function border(width: BorderWidth, style: BorderStyle): BorderCSS2;
/**
 *
 * @example
 *   border('1px', 'solid', 'red')
 *   // will result in the following:
 *   border-top-width:1px;
 *   border-right-width:1px;
 *   border-bottom-width:1px;
 *   border-left-width:1px;
 *   border-top-style:solid;
 *   border-right-style:solid;
 *   border-bottom-style:solid;
 *   border-left-style:solid;
 *   border-top-color:red;
 *   border-right-color:red;
 *   border-bottom-color:red;
 *   border-left-color:red;
 *
 */
export function border(width: BorderWidth, style: BorderStyle, color: BorderColor): BorderCSS3;

export function border(...properties: [BorderWidth, BorderStyle?, BorderColor?]): BorderCSS {
  let css = '';
  css += borderWidth(properties[0]);
  if (properties[1]) {
    css += borderStyle(properties[1]);
    if (properties[2]) {
      css += borderColor(properties[2]);
    }
  }

  return css as BorderCSS;
}
