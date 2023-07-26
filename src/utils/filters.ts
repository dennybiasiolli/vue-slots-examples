// /**
//  * removing `undefined` elements
//  */
// export function customFilter<T>(array: T[]): T[] {
//   const retVal: T[] = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== undefined) {
//       retVal.push(array[i])
//     }
//   }
//   return retVal
// }

// /**
//  * removing `undefined` elements
//  * optionally removing `null` elements
//  */
// export function customFilter<T>(
//   array: T[],
//   removeUndefined: boolean = true,
//   removeNull: boolean = false
// ): T[] {
//   const retVal: T[] = []
//   for (let i = 0; i < array.length; i++) {
//     if ((removeUndefined && array[i] === undefined) || (removeNull && array[i] === null)) {
//       continue
//     }
//     retVal.push(array[i])
//   }
//   return retVal
// }

// /**
//  * removing `undefined` elements
//  * optionally removing `null` elements
//  * optionally removing `false` elements
//  */
// export function customFilter<T>(
//   array: T[],
//   removeUndefined: boolean = true,
//   removeNull: boolean = false,
//   removeFalse: boolean = false
// ): T[] {
//   const retVal: T[] = []
//   for (let i = 0; i < array.length; i++) {
//     if (
//       (removeUndefined && array[i] === undefined) ||
//       (removeNull && array[i] === null) ||
//       (removeFalse && array[i] === false)
//     ) {
//       continue
//     }
//     retVal.push(array[i])
//   }
//   return retVal
// }

// /**
//  * removing `undefined` elements
//  * optionally removing `null` elements
//  * optionally removing `false` elements
//  * optionally removing `''` elements
//  */
// export function customFilter<T>(
//   array: T[],
//   removeUndefined: boolean = true,
//   removeNull: boolean = false,
//   removeFalse: boolean = false,
//   removeEmpty: boolean = false
// ): T[] {
//   const retVal: T[] = []
//   for (let i = 0; i < array.length; i++) {
//     if (
//       (removeUndefined && array[i] === undefined) ||
//       (removeNull && array[i] === null) ||
//       (removeFalse && array[i] === false) ||
//       (removeEmpty && array[i] === '')
//     ) {
//       continue
//     }
//     retVal.push(array[i])
//   }
//   return retVal
// }

// /**
//  * removing `undefined` elements
//  * optionally removing `null` elements
//  * optionally removing `false` elements
//  * optionally removing `''` elements
//  * optionally removing `0` elements
//  */
// export function customFilter<T>(
//   array: T[],
//   removeUndefined: boolean = true,
//   removeNull: boolean = false,
//   removeFalse: boolean = false,
//   removeEmpty: boolean = false,
//   removeZero: boolean = false
// ): T[] {
//   const retVal: T[] = []
//   for (let i = 0; i < array.length; i++) {
//     if (
//       (removeUndefined && array[i] === undefined) ||
//       (removeNull && array[i] === null) ||
//       (removeFalse && array[i] === false) ||
//       (removeEmpty && array[i] === '') ||
//       (removeZero && array[i] === 0)
//     ) {
//       continue
//     }
//     retVal.push(array[i])
//   }
//   return retVal
// }

/**
 * removing `undefined` elements
 * optionally removing `null` elements
 * optionally removing `false` elements
 * optionally removing `''` elements
 * optionally removing `0` elements
 * optionally removing `'0'` elements
 */
export function customFilter<T>(
  array: T[],
  removeUndefined: boolean = true,
  removeNull: boolean = false,
  removeFalse: boolean = false,
  removeEmpty: boolean = false,
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
