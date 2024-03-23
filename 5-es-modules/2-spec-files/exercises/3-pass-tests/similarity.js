// #todo

/**
 * this function decides how similar two values are
 * @param {any} a - the first value
 * @param {any} b - the second value
 * @returns {string} how similar are a and b?
 */
export const similarity = (a, b) => {
  if (Object.is(a, b)) {
    return 'exactly the same';
  } else if (typeof a === typeof b) {
    return 'the same type';
  } else {
    return 'nothing alike';
  }
};
