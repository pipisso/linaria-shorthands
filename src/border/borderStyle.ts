import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderStyleValue = CSS.Property.BorderStyle;

type BorderStyleCSS =
  `border-top-style:${string};border-right-style:${string};border-bottom-style:${string};border-left-style:${string};`;

export function borderStyle(all: BorderStyleValue): BorderStyleCSS;
export function borderStyle(vertical: BorderStyleValue, horizontal: BorderStyleValue): BorderStyleCSS;
export function borderStyle(
  top: BorderStyleValue,
  horizontal: BorderStyleValue,
  bottom: BorderStyleValue,
): BorderStyleCSS;
export function borderStyle(
  top: BorderStyleValue,
  right: BorderStyleValue,
  bottom: BorderStyleValue,
  left: BorderStyleValue,
): BorderStyleCSS;

export function borderStyle(...properties: BorderStyleValue[]): BorderStyleCSS {
  return getStyleString('border', 'style', ...properties) as BorderStyleCSS;
}
