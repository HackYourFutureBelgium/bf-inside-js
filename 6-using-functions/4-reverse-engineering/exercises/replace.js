function replaceCharacters(str, oldChar, newChar){
  return str.split(oldChar).join(newChar);
}
let str = "hello";
let replacedStr = replaceCharacters(str, 'l', 'x');

console.log(replacedStr);