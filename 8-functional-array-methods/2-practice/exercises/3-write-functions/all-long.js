// #todo

/**
 *
 */
export const allLong = (strings = [], long = 0) => {
  let areAllLong = true;
  for (const item of strings) {
    if (item.length < long) {
      areAllLong = false;
    }
  }

  return areAllLong;
};
