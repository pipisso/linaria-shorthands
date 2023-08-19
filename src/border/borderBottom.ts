import type * as CSS from 'csstype';
import {getFixedStyleString} from '../utils/getFixedStyleString';

type BorderBottomWidth = CSS.Property.BorderBottomWidth;
type BorderBottomStyle = CSS.Property.BorderBottomStyle;
type BorderBottomColor = CSS.Property.BorderBottomColor;

type BorderBottomCSS = BorderBottomCSS1 | BorderBottomCSS2 | BorderBottomCSS3;
type BorderBottomCSS1 = `border-bottom-width:${BorderBottomWidth};`;
type BorderBottomCSS2 = `border-bottom-width:${BorderBottomWidth};border-bottom-style:${BorderBottomStyle};`;
type BorderBottomCSS3 =
  `border-bottom-width:${BorderBottomWidth};border-bottom-style:${BorderBottomStyle};border-bottom-color:${BorderBottomColor};`;

export function borderBottom(width: BorderBottomWidth): BorderBottomCSS1;
export function borderBottom(width: BorderBottomWidth, style: BorderBottomStyle): BorderBottomCSS2;
export function borderBottom(
  width: BorderBottomWidth,
  style: BorderBottomStyle,
  color: BorderBottomColor,
): BorderBottomCSS3;

export function borderBottom(
  ...properties: [BorderBottomWidth, BorderBottomStyle?, BorderBottomColor?]
): BorderBottomCSS {
  return getFixedStyleString('border', ['width', 'style', 'color'], 'bottom', ...properties) as BorderBottomCSS;
}
