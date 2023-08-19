import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type BorderWidthStyle =
  `border-top-width:${string};border-right-width:${string};border-bottom-width:${string};border-left-width:${string};`;
type BorderWidthInput = CSS.StandardShorthandProperties['borderWidth'];

export function borderWidth(all: BorderWidthInput): BorderWidthStyle;
export function borderWidth(vertical: BorderWidthInput, horizontal: BorderWidthInput): BorderWidthStyle;
export function borderWidth(
  top: BorderWidthInput,
  horizontal: BorderWidthInput,
  bottom: BorderWidthInput,
): BorderWidthStyle;
export function borderWidth(
  top: BorderWidthInput,
  right: BorderWidthInput,
  bottom: BorderWidthInput,
  left: BorderWidthInput,
): BorderWidthStyle;

export function borderWidth(...properties: BorderWidthInput[]): BorderWidthStyle {
  return getStyleString('border', 'width', ...properties) as BorderWidthStyle;
}
