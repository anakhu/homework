/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

function positiveSum(arr) {
  return arr.reduce((a, c) => (c >= 0 ? a += c : a), 0);
}

function evenOrOdd(num) {
  return num % 2 ? 'Odd' : 'Even';
}

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

function arrayDiff(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}
