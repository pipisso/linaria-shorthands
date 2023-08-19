type Property = 'margin' | 'padding' | 'border';
type Suffix = 'style' | 'width' | 'color' | undefined;

const positions = ['top', 'right', 'bottom', 'left'];

export function getStyleString<T>(property: Property, suffix: Suffix, ...values: T[]): string {
  const [firstValue, secondValue = firstValue, thirdValue = firstValue, fourthValue = secondValue] = values;
  const valueList = [firstValue, secondValue, thirdValue, fourthValue];

  let styleString = '';

  for (let i = 0; i < valueList.length; i += 1) {
    const newProperty = `${property}-${positions[i]}${suffix ? `-${suffix}` : ''}`;
    styleString += `${newProperty}:${valueList[i]};`;
  }

  return styleString;
}
