import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderStyleStyle =
  `border-top-style:${string};border-right-style:${string};border-bottom-style:${string};border-left-style:${string};`;
type BorderStyleInput = CSS.StandardShorthandProperties['borderStyle'];

export function borderStyle(all: BorderStyleInput): BorderStyleStyle;
export function borderStyle(vertical: BorderStyleInput, horizontal: BorderStyleInput): BorderStyleStyle;
export function borderStyle(
  top: BorderStyleInput,
  horizontal: BorderStyleInput,
  bottom: BorderStyleInput,
): BorderStyleStyle;
export function borderStyle(
  top: BorderStyleInput,
  right: BorderStyleInput,
  bottom: BorderStyleInput,
  left: BorderStyleInput,
): BorderStyleStyle;

export function borderStyle(...properties: BorderStyleInput[]): BorderStyleStyle {
  return getStyleString('border', 'style', ...properties) as BorderStyleStyle;
}
