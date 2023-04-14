const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d);
  };
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (date.hasOwnProperty("toString")) {
    throw new Error("Invalid date!");
  }
  if (!isValidDate(date)) {
    throw new Error("Invalid date!");
  }

  if (typeof Date.parse(date) === 'number') {
    switch(date.getMonth()) {
      case 2:
      case 3:
      case 4:
        return 'spring';
        break;

      case 5:
      case 6:
      case 7:
        return 'summer';
        break;

      case 8:
      case 9:
      case 10:
        return 'autumn';
        break;

      default:
        return 'winter'
    }
  } else {
    return false
  }
}

module.exports = {
  getSeason
};
