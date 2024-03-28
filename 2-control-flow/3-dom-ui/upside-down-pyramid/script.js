import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  // debugger;

  // read user text
  const text = readString('to-pyramid');

  // create the pyramid
  let output = '';

  for (let i = 0; i < text.length; i++) {
    
    // .....instead of text.substr we can use text.slice also
    let row = text.substr(i) + '\n';       
    output += row;
  }

  // display the pyramid
  display('pyramided', output);
});