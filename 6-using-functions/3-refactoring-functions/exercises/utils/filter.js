/**
 *
 */
export const filter = (toFilter, removeThese) => {
  if(!removeThese) {
    return toFilter;
  }
  let filteredString = '';
  for(const char of toFilter){
    if(removeThese.toLowerCase().indexOf(char.toLowerCase()) === -1) {
      filteredString += char;
    }
  };
  return filteredString;
};
