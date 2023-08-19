import type * as CSS from 'csstype';
import {getValues} from '../utils/getValues';

type MarginStyle = `margin-top:${string};margin-right:${string};margin-bottom:${string};margin-left:${string};`;
type MarginInput = CSS.StandardShorthandProperties['margin'];

export function margin(all: MarginInput): MarginStyle;
export function margin(vertical: MarginInput, horizontal: MarginInput): MarginStyle;
export function margin(top: MarginInput, horizontal: MarginInput, bottom: MarginInput): MarginStyle;
export function margin(top: MarginInput, right: MarginInput, bottom: MarginInput, left: MarginInput): MarginStyle;

export function margin(...properties: MarginInput[]): MarginStyle {
  const values = getValues<MarginInput>(...properties);
  return `margin-top:${values[0]};margin-right:${values[1]};margin-bottom:${values[2]};margin-left:${values[3]};`;
}
