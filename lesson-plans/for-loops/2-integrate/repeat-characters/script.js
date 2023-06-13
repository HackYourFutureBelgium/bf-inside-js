import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values

  const text = readString('user-text');
  const repeatCount = readNumber('number-of-times');


  // Repeat each character in the string
  let repeatedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    for (let j = 0; j < repeatCount; j++) {
      repeatedText += char;
    }
  }
console.log(repeatedText);
  // Display the repeated text
  display('repeated-output', repeatedText);

});
