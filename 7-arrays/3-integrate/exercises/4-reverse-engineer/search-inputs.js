

// function to search for inputs that satisgy a codition
export const searchInputs = (arr, condition) => {
  let searchInputs = [];
  for(let i = 0; arr.length; i++){
    if(condition(arr[i])) {
      searchInputs.push(arr[i]);
    }
  }
  return searchInputs;
}