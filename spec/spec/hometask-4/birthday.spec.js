describe('birthday.js', function() {
  describe('checkInput -> should return false for input in format different from \'year-month-day\'', function (){
    const correctInput = '2000-03-10';
    const wrongInput1 = '2021-03-10';
    const wrongInput2 = '1980/10/11';

    it('Base test', function() {
      expect(checkInput(correctInput)).toBeTrue();
      expect(checkInput(wrongInput1)).toBeFalse();
      expect(checkInput(wrongInput2)).toBeFalse();
    });
  });

  describe('daysToBirthday -> should return days left to the next birthday', function() {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const tomorrowStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 1}`;

    it('Base test', function() {
      expect(daysToBirthday(todayStr)).toBe(0);
      expect(daysToBirthday('1999-12-03')).not.toBeLessThan(0);
      expect(daysToBirthday(tomorrowStr)).toBe(1);
    });
  });
});
