/**
 * removing `undefined` elements
 * optionally removing `null` elements
 * optionally removing `''` elements
 * optionally removing `false` elements
 * optionally removing `0` elements
 * optionally removing `'0'` elements
 */
export function customFilter<T>(
  array: T[],
  removeUndefined: boolean = true,
  removeNull: boolean = false,
  removeEmpty: boolean = false,
  removeFalse: boolean = false,
  removeZero: boolean = false,
  removeZeroString: boolean = false
): T[] {
  const retVal: T[] = []
  for (let i = 0; i < array.length; i++) {
    if (
      (removeUndefined && array[i] === undefined) ||
      (removeNull && array[i] === null) ||
      (removeFalse && array[i] === false) ||
      (removeEmpty && array[i] === '') ||
      (removeZero && array[i] === 0) ||
      (removeZeroString && array[i] === '0')
    ) {
      continue
    }
    retVal.push(array[i])
  }
  return retVal
}
