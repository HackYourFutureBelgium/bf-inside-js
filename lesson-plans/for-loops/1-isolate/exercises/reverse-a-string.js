/*
  create a loop that will log the letters in reverse order
*/

let before = 'hello';
let after = '';

for (let i = before.length - 1; i >= 0; i--) {
  after += before[i]
}

console.log(after);
