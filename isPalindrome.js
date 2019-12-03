/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

function isPalindrome1(str) {
  const result = str.split('').reduceRight((accum, curr) => {
    accum += curr;

    return accum;
  }, '');

  return result === str;
}

function isPalindrome2(str) {
  const half = Math.floor(str.length / 2);
  let first = 0;
  let last = str.length - 1;

  while (first < half) {
    if (str[first] === str[last]) {
      first += 1;
      last -= 1;
    } else {
      return false;
    }
  }

  return true;
}

function isPalindrome3(str) {
  const last = str.length - 1;
  function check(i) {
    if (i < 0) {
      return true;
    }
    if (str[i] !== str[last - i]) {
      return false;
    }

    return check(i -= 1);
  }

  return check(last);
}

function isPalindrome4(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    const cutString = str.slice(1, -1);

    return isPalindrome4(cutString);
  }

  return false;
}

// test
function makeTest(fn) {
  const string = prompt('Type your string here to check if it\'s a palindrome...');

  return !fn(string)
    ? alert(`${string} is not a palindrome `)
    : alert(`${string} is a palindrome`);
}

makeTest(isPalindrome1);
