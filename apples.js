function getNumWord(num, word1, word2, word5) {
   let dd = num % 100;
   let oneDigit = num % 10;

   switch(true) {

     case dd >= 11 && dd <= 19:
       return word5;

     case oneDigit === 1:
       return word1;

     case oneDigit >= 2 && oneDigit <= 4:
       return word2;

     default:
      return word5;
   }
}


function makeTest() {

  let applesCount = parseInt(prompt('Сколько яблок?'));

  if (applesCount) {
    alert('У вас ' + applesCount + ' ' + getNumWord(applesCount,
    'яблоко', 'яблока', 'яблок'));
  }
}


makeTest();
