import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type PaddingValue = CSS.Property.Padding;

type PaddingCSS = `padding-top:${string};padding-right:${string};padding-bottom:${string};padding-left:${string};`;

/**
 *
 * @example
 *   padding('1px')
 *   // will result in the following:
 *   padding-top:1px;
 *   padding-right:1px;
 *   padding-bottom:1px;
 *   padding-left:1px;
 *
 */
export function padding(all: PaddingValue): PaddingCSS;
/**
 *
 * @example
 *   padding('1px', '2px')
 *   // will result in the following:
 *   padding-top:1px;
 *   padding-right:2px;
 *   padding-bottom:1px;
 *   padding-left:2px;
 *
 */
export function padding(vertical: PaddingValue, horizontal: PaddingValue): PaddingCSS;
/**
 *
 * @example
 *   padding('1px', '2px', '3px')
 *   // will result in the following:
 *   padding-top:1px;
 *   padding-right:2px;
 *   padding-bottom:3px;
 *   padding-left:2px;
 *
 */
export function padding(top: PaddingValue, horizontal: PaddingValue, bottom: PaddingValue): PaddingCSS;
/**
 *
 * @example
 *   padding('1px', '2px', '3px', '4px')
 *   // will result in the following:
 *   padding-top:1px;
 *   padding-right:2px;
 *   padding-bottom:3px;
 *   padding-left:4px;
 *
 */
export function padding(top: PaddingValue, right: PaddingValue, bottom: PaddingValue, left: PaddingValue): PaddingCSS;

export function padding(...properties: PaddingValue[]): PaddingCSS {
  return getStyleString('padding', undefined, ...properties) as PaddingCSS;
}
