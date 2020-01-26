describe('promiseTimer.js', function() {
  describe('timer', function() {
    let timesCalled = 0;

    beforeEach(function() {
      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
      timesCalled = 0;
    });

    it("Should return a promise and call the provided callback function expected number of times", function() {
      setInterval(function() {
        timerCallback();
      }, 1000);

      const promise = timer(5, () => {timesCalled += 1});
      jasmine.clock().tick(1000);
      expect(timesCalled).toEqual(1);
      jasmine.clock().tick(5000);
      expect(timesCalled).toEqual(5);
      expect(promise).toEqual(jasmine.any(Promise));
    });

    it('Should resolve with expected message', function(done) {
      const promise = timer(2, () => {timesCalled += 1});
      jasmine.clock().tick(3000);
      promise.then(res => {
        expect(res).toEqual('Timer has stopped');
        done();
      });
    });

    it('Should reject if the function is called with negative arguments', function(done) {
      const promise = timer(-3, () => {timesCalled += 1});
      jasmine.clock().tick(1000);
      promise.catch(err => {
        expect(err).toMatch('Timer value mustn\'t be negative');
        done();
      });
    });
  });
});
