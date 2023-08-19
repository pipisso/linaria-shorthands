import type * as CSS from 'csstype';
import {getStyleString} from '../utils/getStyleString';

type MarginValue = CSS.Property.Margin;

type MarginCSS = `margin-top:${string};margin-right:${string};margin-bottom:${string};margin-left:${string};`;

/**
 *
 * @example
 *   margin('1px')
 *   // will result in the following:
 *   margin-top:1px;
 *   margin-right:1px;
 *   margin-bottom:1px;
 *   margin-left:1px;
 *
 */
export function margin(all: MarginValue): MarginCSS;
/**
 *
 * @example
 *   margin('1px', '2px')
 *   // will result in the following:
 *   margin-top:1px;
 *   margin-right:2px;
 *   margin-bottom:1px;
 *   margin-left:2px;
 *
 */
export function margin(vertical: MarginValue, horizontal: MarginValue): MarginCSS;
/**
 *
 * @example
 *   margin('1px', '2px', '3px')
 *   // will result in the following:
 *   margin-top:1px;
 *   margin-right:2px;
 *   margin-bottom:3px;
 *   margin-left:2px;
 *
 */
export function margin(top: MarginValue, horizontal: MarginValue, bottom: MarginValue): MarginCSS;
/**
 *
 * @example
 *   margin('1px', '2px', '3px', '4px')
 *   // will result in the following:
 *   margin-top:1px;
 *   margin-right:2px;
 *   margin-bottom:3px;
 *   margin-left:4px;
 *
 */
export function margin(top: MarginValue, right: MarginValue, bottom: MarginValue, left: MarginValue): MarginCSS;

export function margin(...properties: MarginValue[]): MarginCSS {
  return getStyleString('margin', undefined, ...properties) as MarginCSS;
}
