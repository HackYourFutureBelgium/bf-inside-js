/**
 *
 */
export const shiftCharacters = (text = '', shift = 0) => {
  let newText = '';

  if (shift === 0){
    return text;
  }
  for(const char of text){
    const charCode = char.charCodeAt();
    const newCharCode = charCode + shift;
    const newChar = String.fromCharCode(newCharCode);
    newText += newChar;
  
  }
  return newText;
};
