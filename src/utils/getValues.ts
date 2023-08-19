export function getValues<T>(...values: T[]): T[] {
  const [firstValue, secondValue = firstValue, thirdValue = firstValue, fourthValue = secondValue] = values;

  return [firstValue, secondValue, thirdValue, fourthValue];
}
