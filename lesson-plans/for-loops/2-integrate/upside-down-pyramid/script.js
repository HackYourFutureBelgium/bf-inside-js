import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById("pyramid-it").addEventListener('click', () => {
  debugger;


  let text = readString("to-pyramid");


  // read user text

  // create the pyramid
  let output = ''


  for ( let i = 0; i < text.length; i++) {
    
      
      let row = text.substr(i) + '\n'; // The substr() is extracts a part of a string.

      output = output + row;

   
  }

 display("pyramided", output)
  // display the pyramid
});
 