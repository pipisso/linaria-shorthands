import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type MarginValue = CSS.Property.Margin;

type MarginCSS = `margin-top:${string};margin-right:${string};margin-bottom:${string};margin-left:${string};`;

export function margin(all: MarginValue): MarginCSS;
export function margin(vertical: MarginValue, horizontal: MarginValue): MarginCSS;
export function margin(top: MarginValue, horizontal: MarginValue, bottom: MarginValue): MarginCSS;
export function margin(top: MarginValue, right: MarginValue, bottom: MarginValue, left: MarginValue): MarginCSS;

export function margin(...properties: MarginValue[]): MarginCSS {
  return getStyleString('margin', undefined, ...properties) as MarginCSS;
}
