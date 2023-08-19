import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderLeftWidth = CSS.Property.BorderLeftWidth;
type BorderLeftStyle = CSS.Property.BorderLeftStyle;
type BorderLeftColor = CSS.Property.BorderLeftColor;

type BorderLeftCSS = BorderLeftCSS1 | BorderLeftCSS2 | BorderLeftCSS3;
type BorderLeftCSS1 = `border-left-width:${BorderLeftWidth};`;
type BorderLeftCSS2 = `border-left-width:${BorderLeftWidth};border-left-style:${BorderLeftStyle};`;
type BorderLeftCSS3 =
  `border-left-width:${BorderLeftWidth};border-left-style:${BorderLeftStyle};border-left-color:${BorderLeftColor};`;

export function borderLeft(width: BorderLeftWidth): BorderLeftCSS1;
export function borderLeft(width: BorderLeftWidth, style: BorderLeftStyle): BorderLeftCSS2;
export function borderLeft(width: BorderLeftWidth, style: BorderLeftStyle, color: BorderLeftColor): BorderLeftCSS3;

export function borderLeft(...properties: [BorderLeftWidth, BorderLeftStyle?, BorderLeftColor?]): BorderLeftCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'left', ...properties) as BorderLeftCSS;
}
