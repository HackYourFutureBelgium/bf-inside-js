import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  // get user text
  const text = readString('user-text');

  debugger;
  // reverse text
  // let reversedString = '';
  // for (let i = 0; i < text.length; i++) {
  //   reversedString = text[i] + reversedString;
  // }

  const reversedString = text.split('').reverse().join('');

  // display reversedString
  display('reversed-output', reversedString);
});
