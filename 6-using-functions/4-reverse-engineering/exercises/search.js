

function searchCharacters(str, char){
  let indices = [];

  for(let i = 0; i < str.length; i++){
    if(str[i] === char){
      indices.push(i);
    }
  }
  return indices;
}

let str = "hello";
let charToSearch = 'l';
let indices = searchCharacters(str, charToSearch);

console.log(indices);