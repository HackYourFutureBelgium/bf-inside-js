import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const text = readString('to-pyramid');

  // create the pyramid

  // for (_; _; _) {
  //   for (_; _; _) {}
  // }

  let pyramid = '';
  for (let i = 0; i < text.length; i++) {
    pyramid += text.substr(i) + '\n';
  }
  // display the pyramid
  display('pyramided', pyramid);
});
// let pyramid = '';
//   for (let i = 0; i <= bricks.length; i++) {
//     pyramid += bricks.substr(0, i) + `\n`;
//   }
