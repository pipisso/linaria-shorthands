import type * as CSS from 'csstype';
import {getValues} from '../utils/getValues';

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
  const values = getValues<BorderWidthInput>(...properties);
  return `border-top-width:${values[0]};border-right-width:${values[1]};border-bottom-width:${values[2]};border-left-width:${values[3]};`;
}
