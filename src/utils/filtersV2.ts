export function customFilter<T>(
  array: T[],
  removeUndefined: boolean = true,
  removeNull: boolean = false
): T[] {
  const retVal: T[] = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      retVal.push(array[i])
    }
  }
  return retVal
}
