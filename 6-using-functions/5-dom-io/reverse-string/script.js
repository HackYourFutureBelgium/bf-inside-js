import { readString, display } from '../../../lib/dom-io.js';

import {reverseString} from './utils/reverse-string.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  // get user input
  const text = readString('user-text');

  const finalText = reverseString(text);

  display('reversed-output', finalText);
});
