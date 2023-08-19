import type * as CSS from 'csstype';
import {getValues} from '../utils/getValues';

type PaddingStyle = `padding-top:${string};padding-right:${string};padding-bottom:${string};padding-left:${string};`;
type PaddingInput = CSS.StandardShorthandProperties['padding'];

export function padding(all: PaddingInput): PaddingStyle;
export function padding(vertical: PaddingInput, horizontal: PaddingInput): PaddingStyle;
export function padding(top: PaddingInput, horizontal: PaddingInput, bottom: PaddingInput): PaddingStyle;
export function padding(top: PaddingInput, right: PaddingInput, bottom: PaddingInput, left: PaddingInput): PaddingStyle;

export function padding(...properties: PaddingInput[]): PaddingStyle {
  const values = getValues<PaddingInput>(...properties);
  return `padding-top:${values[0]};padding-right:${values[1]};padding-bottom:${values[2]};padding-left:${values[3]};`;
}
