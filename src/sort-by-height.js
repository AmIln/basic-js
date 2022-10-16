const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrMinus = []
  for (let i=0;i<arr.length;i++) {
    if (arr[i] < 0) {
      arrMinus.push(i)
    }
  }
  let newArray = arr.sort(function(a,b) {return a - b}),
      needArray = []
  for (let a=0;a<=newArray.length;a++) {
    if (newArray[a] > 0) {
      needArray.push(newArray[a])
    }
  }
  for (let b=0;b<arrMinus.length;b++) {
    needArray.splice(arrMinus[b],0,-1)
  }
  return needArray
}

module.exports = {
  sortByHeight
};
