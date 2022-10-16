const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1,
  newString = '',
  simbol = str[0];
  for (let i=1;i<=str.length;i++) {
  if (simbol === str[i]) {
    count++
  } else {
    if (count > 1) {
      newString += count + simbol
    } else {
      newString += simbol
    }
    simbol = str[i]
    count = 1;
  }
  }
  return newString
}

module.exports = {
  encodeLine
};
