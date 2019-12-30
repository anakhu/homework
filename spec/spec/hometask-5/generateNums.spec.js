describe('generateNums.js', function() {

  describe('generateNumber -> should generate a number from 0 to 100', function() {
    let result = generateNumber();

    it('Base test', function() {
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
    });
  });
  describe('checkNumber -> should return success message if odd ot throw a new error', function() {

    it('Base test', function() {
      expect(function() {checkNumber(90)}).toThrow(new Error(`Failure! Number 90 is even!`));
      expect(checkNumber(21)).toEqual('Success! Number 21 is odd!');
    });
  });

  describe('callFnTwentyTimes -> should call setIntreval method', function() {

    beforeEach(function() {
      spyOn(window, 'setInterval');
    });
    
    it('Base test', function() {
      callFnTwentyTimes();
      expect(window.setInterval).toHaveBeenCalled();
    });
  });
});
