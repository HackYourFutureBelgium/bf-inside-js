/**
 *
 * @param {boolean} likePrice
 * @param {boolean} happyPrice
 * @param {boolean} nomMatter
 * @returns {boolean}
 */
export const priceAdvisor = (likePrice, happyPrice, noMatter) => {
  debugger;
  return likePrice && happyPrice && noMatter
    ? 'replace your cat with a stuffed animal'
    : likePrice && happyPrice && !noMatter
    ? 'make a friend who has a cat'
    : likePrice && !happyPrice && noMatter
    ? 'you are doing great'
    : likePrice && !happyPrice && !noMatter
    ? 'get a cat'
    : !likePrice && happyPrice && noMatter
    ? 'rethink your life choices'
    : !likePrice && happyPrice && !noMatter
    ? 'you are doing great'
    : !likePrice && !happyPrice && noMatter
    ? 'you could be doing worse'
    : // !likesCats && !isAllergic && !ownsOne
      'you are doing great';
};
