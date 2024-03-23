// #todo

'use strict';

console.log('-- begin --');

/* Reversicasify

  you can use for loops to do some logic for each element in a string
*/

let originalString = 'abcde';                  
console.log('originalString:', originalString);

let reverseString = '';

for (let i = originalString.length -1 ; i >= 0; i--) {

 const newLetter = originalString[i];
 reverseString +=newLetter;
 console.log(i);
 console.log('reverseString', reverseString);

}

 let upperCasedString = '';

 for(let i = 0 ; i < reverseString.length ; i++){
   const newUpperCased = reverseString[i].toUpperCase();
   upperCasedString += newUpperCased

   console.log(i);
   console.log('upperCasedString', upperCasedString);

 
}
console.assert(
  reverseString === 'edcba', 'reversed string is the original reversed',
  );

console.assert(
  upperCasedString === 'EDCBA', 'upper case string is all upper case',
  );
