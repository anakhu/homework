/* eslint-disable no-confusing-arrow */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */

const ID = 'id';
const NAME = 'name';
const DOB = 'dob';
const DESC = 'desc';
const ASC = 'asc';

function usersSort(param1, param2, param3 = ASC) {
  const arr = [...param1];

  function convertVal(obj, key) {
    switch (key) {
    case ID:
      return +obj[key];
    case DOB:
      return +new Date([year, month, day] = obj[key].split('-'));
    case NAME:
    default:
      return obj[key];
    }
  }

  function sort(prop, order) {
    if (order === DESC) {
      return arr.sort((a, b) => convertVal(a, prop) < convertVal(b, prop) ? 1 : -1);
    }

    return arr.sort((a, b) => convertVal(a, prop) > convertVal(b, prop) ? 1 : -1);
  }

  return sort(param2, param3);
}
