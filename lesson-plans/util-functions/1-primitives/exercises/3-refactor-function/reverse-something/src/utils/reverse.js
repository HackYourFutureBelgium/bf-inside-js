/**
 *
 */
export const reverse = (text = '') => {
  let reversedtext = '';
  for ( const char of text){
    reversedtext = char + reversedtext;
  }
  return reversedtext;
};
