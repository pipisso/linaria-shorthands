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

export function border(width: BorderWidth): BorderCSS1;
export function border(width: BorderWidth, style: BorderStyle): BorderCSS2;
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
