/**
 *
 */
export const reverse = (text) => {
  let reversedText = "";
  for (const char of text) {
    reversedText = char + reversedText;
  }
  return reversedText;
};
