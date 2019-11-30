// variant one

function isPalindrome1(str) {
  let result = str.split('').reduceRight( (accum, curr) => {
    accum += curr;
    return accum;
    }, '')
  return result === str;
}

//variant two

function isPalindrome2(str) {

  let half = Math.floor( str.length / 2 );
  let first = 0;
  let last = str.length - 1;

  while (first < half) {
    if (str[first] === str[last]) {
      first++;
      last --;
    } else {
      return false;
    }
  }

  return true;
}

//variant three

function isPalindrome3(str) {
  const last = str.length - 1;
  
  function check(i) {
    if (i < 0) {
      return true;
    }

    if (str[i] !== str[last - i]) {
      return false;
    }

    return check(--i);
  }

  return check(last);
}

// variant four

function isPalindrome(str) {

  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length-1]) {
    let cutString = str.slice(1, -1);
    
    return isPalindrome4(cutString);
  }

  return false;
}

// test 

function makeTest(fn) {
  let string = prompt('Type your string here to check if it\'s a palindrome...');

  return !fn(string)
    ? alert (`${string} is not a palindrome `)
    : alert (`${string} is a palindrome` )
}


makeTest(isPalindrome1);

