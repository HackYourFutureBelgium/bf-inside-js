/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {_} [_=_] - Some text to remove characters from.
 * @param {_} [_=_] - The characters to keep.
 * @returns {_} Text with only the given characters still in it.
 */
export const keepCharacters = (text = '', chars = '') => {
  let newText = '';
  for(const char of text){
    if (chars.indexOf(char) !== -1){
    newText += char;
    }
  }
  return newText;
};
