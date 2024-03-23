// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use || instead of a conditional

// try different values and different types
const isAfterFive = true;
const isTheWeekend = false;
console.log(isAfterFive, isTheWeekend);

/*let stopWorking = isAfterFive === true;
if (!stopWorking) {
 stopWorking = isTheWeekend === true;
} */

let stopWorking = isAfterFive === true || isTheWeekend === false;


console.log(stopWorking);

console.log('-- end --');
