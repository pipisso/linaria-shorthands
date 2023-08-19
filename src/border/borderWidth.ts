import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderWidthValue = CSS.Property.BorderWidth;

type BorderWidthCSS =
  `border-top-width:${string};border-right-width:${string};border-bottom-width:${string};border-left-width:${string};`;

export function borderWidth(all: BorderWidthValue): BorderWidthCSS;
export function borderWidth(vertical: BorderWidthValue, horizontal: BorderWidthValue): BorderWidthCSS;
export function borderWidth(
  top: BorderWidthValue,
  horizontal: BorderWidthValue,
  bottom: BorderWidthValue,
): BorderWidthCSS;
export function borderWidth(
  top: BorderWidthValue,
  right: BorderWidthValue,
  bottom: BorderWidthValue,
  left: BorderWidthValue,
): BorderWidthCSS;

export function borderWidth(...properties: BorderWidthValue[]): BorderWidthCSS {
  return getStyleString('border', 'width', ...properties) as BorderWidthCSS;
}
