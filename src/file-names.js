const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newNames = names,
  arrayIndex = []
function rename(arr) {
for (let i=0;i<arr.length;i++) {
  let index = arr.indexOf(arr[i], i+1),
      count = 1;
if (index != -1) {
  newNames[index] += '(' + count + ')'
  function check() {
    if (arr.includes(arr[i], index+1)) {
      count++
      index = arr.indexOf(arr[i], index+1);
      newNames[index] += '(' + count + ')';
    } else {
      count = 1;
    }
  }
  check()
}
}
}
rename(newNames)
return newNames
}

module.exports = {
  renameFiles
};
