import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const text = readString('to-pyramid');

  // create the pyramid
  let pyramid = '';

  // str.substr(i) used to get back part of the string i is the staring index
  for (let i = 0; i < text.length; i++) {
    let row = text.substr(i) + '\n';
    pyramid += row;
  }

  // display the pyramid
  display('pyramided', pyramid);
});
