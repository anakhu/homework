describe('secondsToTomorrow.js', function() {
  describe('calcSecondsToTomorrow -> should return seconds left to tomorrow', function() {
    it('Base test', function() {
      expect(calcSecondsToTomorrow()).toBeTruthy();
      expect(calcSecondsToTomorrow()).toBeLessThanOrEqual(86400);
    });
  });
});
