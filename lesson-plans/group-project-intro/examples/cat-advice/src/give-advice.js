import { readBoolean, display } from '../../../../../lib/dom-io.js';

import { priceAdvisorAdvisor } from './utils/cat-advisor.js';
import { priceAdvisor } from './utils/price-advisor.js';

// once when the script is loaded
debugger;

// declare the function to call each time a user clicks
const giveAdvice = () => {
  // each time the user interacts
  debugger;

  // read the user's boolean input from the UI

  const likePrice = readBoolean('likes-cats');
  const happyPrice = readBoolean('is-allergic');
  const noMatter = readBoolean('owns-one');

  // generate good advice

  const advice = priceAdvisor(likePrice, happyPrice, noMatter);

  // share your advice with the user

  display('message', advice);
};

// attach the event listener to call the function each time the user clicks
document.getElementById('give-advice').addEventListener('click', giveAdvice);
