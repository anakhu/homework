describe('tdd-home.js -> positiveSum -> should find sum of positive number in array', function() {

  it('Base test', function() {
    expect(positiveSum([1,2,3,4,5])).toBe(15);
    expect(positiveSum([1,-2,3,4,5])).toBe(13);
    expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
  });

  it('In case when array is empty should return 0', function() {
    expect(positiveSum([])).toBe(0);
  });

});

describe('tdd-home.js -> evenOrOdd -> should return strings \'Even\' or  \'Odd\'', function() {
  it('Base test', function() {
    expect(evenOrOdd(3456)).toBe('Even');
    expect(evenOrOdd(653)).toBe('Odd');
  });
});


describe('tdd-home.js -> centuryFromYear -> Input: year, output: century', function() {
  it('Base test', function() {
    expect(centuryFromYear(1765)).toBe(18);
    expect(centuryFromYear(45)).toBe(1);
    expect(centuryFromYear(2019)).toBe(21);
  });
});

describe('tdd-home.js -> It should remove all values from list a, which are present in list b', function() {
  it('Removing from empty array should return []', function() {
    expect(arrayDiff([], [4, 5])).toEqual([]);
  });

  it('Basic test', function() {
    expect(arrayDiff([3, 4], [3])).toEqual([4]);
  });

  it('Removing empty array should return array without diff', function() {
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
  });
});
