const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = Array.from(String(n)),
      count,
      summ = arr.toSpliced(0,1);
  for (let i=0;i<=arr.length-1;i++) {
    let numberSumm = Number(summ.toString().replace(/[\,]/g,'')),
        newSumm = Number(arr.toSpliced(i,1).toString().replace(/[\,]/g,''));
    if (numberSumm < newSumm) {
      count = newSumm;
      summ = arr.toSpliced(i,1);
    } else {
      count = numberSumm;
    }
  }
  return count
}

module.exports = {
  deleteDigit
};
