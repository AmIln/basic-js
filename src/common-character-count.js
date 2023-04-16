const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0,
  text1 = s1.split(''),
  text2 = s2.split('');
  function findRecurse(str1, str2) {
    if (str1.length > 0 && str2.length > 0) {
      if (str1.length >= str2.length) {
        for (let i=0;i<=str1.length-1;i++) {
          for (let a=0;a<=str2.length-1;a++) {
            if (str1[i] === str2[a]) {
              count++
              text1.shift();
              text2.splice(a,1);
              findRecurse(text1, text2)
            }
          }
        }
      } else {
        for (let i=0;i<=str1.length-1;i++) {
          for (let a=0;a<=str2.length-1;a++) {
            if (str1[i] === str2[a]) {
              count++
              text1.shift();
              text2.splice(a,1);
              findRecurse(text1, text2)
            }
          }
        }
      }
    }
    return
  }
  findRecurse(text1, text2)
  return count;
}

module.exports = {
  getCommonCharacterCount
};
