const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0,
      failIndex = [];
  function addSum(arr) {
    for (let i=0;i<=arr.length-1;i++) {
      if (arr === matrix[0]) {
        sum += arr[i];
        if (arr[i] > 0) {
          failIndex[i] = true;
        } else {
          failIndex[i] = false;
        }
      } else {
        if (arr[i] > 0) {
          if (failIndex[i]) {
            sum += arr[i];
          }
           failIndex[i] = true;
      } else {
          failIndex[i] = false;
      }
      }
      
    }
  }
  for (let a=0;a<=matrix.length-1;a++) {
    addSum(matrix[a])
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
