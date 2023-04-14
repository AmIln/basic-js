const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (members === null || members === undefined || members === false) {
    return false
  }
  let teamName = '';
  for (let i=0;i<=members.length-1;i++) {
    if (typeof(members[i]) === "string") {
      let element = members[i].trim();
      if (!Number(element[0])) {
        teamName += element[0].toLocaleUpperCase();
      }
    }
  }
  return teamName.split('').sort().toString().replace(/[\,]/g,'')
}

module.exports = {
  createDreamTeam
};
