import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderColorValue = CSS.Property.BorderColor;

export type BorderColorCSS =
  `border-top-color:${string};border-right-color:${string};border-bottom-color:${string};border-left-color:${string};`;

export function borderColor(all: BorderColorValue): BorderColorCSS;
export function borderColor(vertical: BorderColorValue, horizontal: BorderColorValue): BorderColorCSS;
export function borderColor(
  top: BorderColorValue,
  horizontal: BorderColorValue,
  bottom: BorderColorValue,
): BorderColorCSS;
export function borderColor(
  top: BorderColorValue,
  right: BorderColorValue,
  bottom: BorderColorValue,
  left: BorderColorValue,
): BorderColorCSS;

export function borderColor(...properties: BorderColorValue[]): BorderColorCSS {
  return getStyleString('border', 'color', ...properties) as BorderColorCSS;
}
