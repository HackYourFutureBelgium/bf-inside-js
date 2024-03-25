'use strict';

// const isPalindrome = (para) => {
//   let result = para.split('').reverse().join('');
//   return result === para;
// };

// let result = isPalindrome(123);
// console.log(result);

// let isPingdom = isPalindrome('nitin');
// console.log(isPingdom);

// sum the given value

// const sumNumber = (nams) => {
//   let sum = 0;
//   let str = nams.toString();
//   for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
//   }
//   return sum;
// };


// const sumNumber = (...args) => {
//   return args.reduce((a, b) => a + b);
// };

// let result = sumNumber(1, 2, 3, 4, 5);
// console.log(result);

// let str = 'hello';
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// const countVowels = (data) => {
//   let count = 0;
//   data.toLowerCase().split('').forEach((cha) => {
//     vowels.includes(cha) && count++;
//   });
//   return count;
// };

// const vowelsInclude = countVowels(str);
// console.log(vowelsInclude);

// const occurTime = (arrEle = [], occEle = 0) => {
//   let occurred = 0;
//   for (let i = 0; i < arrEle.length; i++) {
//     if (arrEle[i] === occEle) {
//       occurred++;
//     }
//   }
//   return occurred;
// };

// const numArr1 = [1, 2, 3, 'Hello', 4, 'hello'];

// let result = occurTime(numArr1, 'hello');
// console.log(result);

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// let result = twoSum([2, 5, 5, 11], 10);
// console.log(result);


/**
 *
 * @param num
 * @param nums
 */
// function palindromeCheck(num) {
//   let numStr = num.toString();
//   let result = numStr.split('').reverse().join('');
//   return numStr === result;
// }

// let result = palindromeCheck(121);
// console.log(result);

const removeDuplicates = (nums) => {
  let uniArr = [...new Set(nums)];
  return uniArr;
};

let result = removeDuplicates([1, 2, 3, 4, 5, 2, 3]);
console.log(result);
