import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  // debugger;

  // read user values
  const numberOfChars = readNumber('skip-size');
  const userText = readString('user-text');
  // create a new string with skipped characters
  let newString = '';
  for (let i = 0; i < userText.length; i += numberOfChars) {
    newString += userText[i];
  }
  // display the skipped string
  display('skipped-output', newString);
});

  // const numberOfChars = 3;
  // const userText = 'mvowsm aldf kmafk mflam';

  // let newString = '';
  // for (let i = 0; i < userText.length; i += numberOfChars){
  //   newString += userText[i];
  // }

  // console.log(newString);

