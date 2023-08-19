import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type PaddingValue = CSS.Property.Padding;

type PaddingCSS = `padding-top:${string};padding-right:${string};padding-bottom:${string};padding-left:${string};`;

export function padding(all: PaddingValue): PaddingCSS;
export function padding(vertical: PaddingValue, horizontal: PaddingValue): PaddingCSS;
export function padding(top: PaddingValue, horizontal: PaddingValue, bottom: PaddingValue): PaddingCSS;
export function padding(top: PaddingValue, right: PaddingValue, bottom: PaddingValue, left: PaddingValue): PaddingCSS;

export function padding(...properties: PaddingValue[]): PaddingCSS {
  return getStyleString('padding', undefined, ...properties) as PaddingCSS;
}
