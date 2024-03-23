/**
 * takes an array of strings and returns a new array
 *  the new array contains all the numbery strings, cast to number
 * does not modify the argument
 * @param {string[]} arr - the array of strings
 * @returns {number[]} an array containing numbers that aren't NaN
 */
export const numberyNumberify = (arr) => {
  const newArray = [];
  arr.forEach((item) => {
    if(! isNaN(item)){
      newArray.push(Number(item));
    }
  });

  return newArray;
};
