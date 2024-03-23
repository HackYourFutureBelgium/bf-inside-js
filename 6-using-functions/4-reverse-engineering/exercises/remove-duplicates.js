function removeDuplicatecharacter(str){
  let charMap = {};
  let result = '';

  for(let char of str){
    if (!charMap[char]) {
      result += char;
      charMap[char] = true;
    }
  }
  return result
}
 let str = "hello";
 let uniqueStr = removeDuplicatecharacter(str);
 console.log(uniqueStr);