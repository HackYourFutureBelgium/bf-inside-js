import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values

  const text = readString('user-text');
  const skipCount = readNumber('skip-size');
  
  // create a new string with skipped characters

  let skippedString = '';
  for (let i = 0; i < text.length; i+=skipCount){
    skippedString += text[i];
  }

  // display the skipped string
  display('skipped-output', skippedString);
});
