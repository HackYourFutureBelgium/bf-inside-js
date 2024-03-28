


export const keepItems = ( arr, conditon) => {
  let keepItems = [];
  for (let i = 0; i < arr.length; i++){
    if(conditon(arr[i])){
      keepItems.push(arr[i]);
    }
  }
  return keepItems;
}


export const removeItems = (arr, conditon) => {
  let removeItems = [];
  for (let i = 0; i < arr.length; i++){
    if(!conditon(arr[i])){
      removeItems.push(arr[i]); 
    }
  }
    return removeItems;
}