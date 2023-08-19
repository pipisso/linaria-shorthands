type Property = 'margin' | 'padding' | 'border';
type Suffix = [string, string, string];
type Position = 'top' | 'right' | 'bottom' | 'left';

export function getFixedStyleString<T>(property: Property, suffix: Suffix, position: Position, ...values: T[]): string {
  let styleString = '';

  for (let i = 0; i < values.length; i += 1) {
    const newProperty = `${property}-${position}-${suffix[i]}`;
    styleString += `${newProperty}:${values[i]};`;
  }

  return styleString;
}
