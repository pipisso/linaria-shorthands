import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderColorStyle =
  `border-top-color:${string};border-right-color:${string};border-bottom-color:${string};border-left-color:${string};`;
type BorderColorInput = CSS.StandardShorthandProperties['borderColor'];

export function borderColor(all: BorderColorInput): BorderColorStyle;
export function borderColor(vertical: BorderColorInput, horizontal: BorderColorInput): BorderColorStyle;
export function borderColor(
  top: BorderColorInput,
  horizontal: BorderColorInput,
  bottom: BorderColorInput,
): BorderColorStyle;
export function borderColor(
  top: BorderColorInput,
  right: BorderColorInput,
  bottom: BorderColorInput,
  left: BorderColorInput,
): BorderColorStyle;

export function borderColor(...properties: BorderColorInput[]): BorderColorStyle {
  return getStyleString('border', 'color', ...properties) as BorderColorStyle;
}
