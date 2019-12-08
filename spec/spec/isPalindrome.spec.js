describe('isPalindrome.js -> should return true for palindromes and false for those that are not', function() {

  describe('isPalindrome', function() {
    
    const input = ['abba', 'abbvbba', 'dinosaur', 'яблоко', 'ага'];
    const output = [true, true, false, false, true];
    const functions = [isPalindrome1, isPalindrome2, isPalindrome3, isPalindrome4];

    function testMyPalindrome(fn, input, output) {
      it(`Should return ${output} for ${input}`, function() {
        expect(fn(input)).toEqual(output);
      });
    };

    for (let j = 0; j < functions.length; j++) {
      describe(`isPalindrome${j+1}`, function() {
        for(let i = 0; i < input.length; i++){
          testMyPalindrome(functions[j], input[i], output[i]);
        }
      }) 
    }
  })
})