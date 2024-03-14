/**
 * returns true if a string is longer than 5 characters
 * otherwise returns false
 * @param {string} str - the string to check
 * @returns {boolean} is the string longer than 5?
 */
export const longerThanFive = (str) => {
  if (str.length <= 5){
    return false
  } else if (str.length > 5){
  return true
   }
};
