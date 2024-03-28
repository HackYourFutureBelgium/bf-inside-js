// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of a ternary

// try different values and different types
const isVegetarian = '';
console.log(isVegetarian);

let favoriteFood;

if (isVegetarian === true){
  favoriteFood = 'beans';
} else if(isVegetarian === false){
  favoriteFood = 'bacon';
} else {
  favoriteFood = 'beans and bacon'
}


//const favoriteFood = isVegetarian ? 'beans' : 'bacon';
console.log(favoriteFood);

console.log('-- end --');
