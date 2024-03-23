// #todo

/**
 *
 */
export const longToUpper = (arr = [], long = 0) => {
  return arr.map((item) => {
    if (long && item.length < long) {
      return item;
    }
    return item.toUpperCase();
  });
};