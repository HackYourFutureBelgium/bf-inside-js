function repeatOrRemoveCharacters(str, count, repeat){
  if(repeat){
    return str.split('').map(char => char.repeat(count)).join('');
  } else {
    let result = '';
    let charMap = {};

    for (let char of str){
      if(!charMap[char]){
        result += char;
        charMap[char]=true;
      }
    }
    return result;
  }
}

let str = "hello";
let repeatedStr = repeatOrRemoveCharacters(str, 3, true);
let removedStr = repeatOrRemoveCharacters(str, 0, false);

console.log(repeatedStr);
console.log(removedStr);