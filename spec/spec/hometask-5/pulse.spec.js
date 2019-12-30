describe('pulse.js', function() {

  describe('PulseTimer -> should create an instance of a PulseTimer', function() {
    it('Base test', function() {
      let pulseTimer = new PulseTimer();
      expect(pulseTimer).toEqual(jasmine.any(Object));
      expect(pulseTimer.isRunning).toBeFalse();
      expect(pulseTimer.startBaseTimer).toEqual(jasmine.any(Function));
    });
  });

  describe('Timer.startSuplTimer -> should start a supple timer', function() {
    let pulseTimer = new PulseTimer();

    beforeEach(function() {
      spyOn(pulseTimer, 'startBaseTimer');
      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it("should change the value and assign it to timer.message", function() {
      setInterval(function() {
        timerCallback();
      }, 1000);

      pulseTimer.startSuplTimer();
      jasmine.clock().tick(1000);
      expect(pulseTimer.isRunning).toBe(true);
      expect(pulseTimer.message).toEqual('Programme will start in 5');
      jasmine.clock().tick(1000);
      expect(pulseTimer.message).toEqual('Programme will start in 4');
      jasmine.clock().tick(4000);
      expect(pulseTimer.message).toEqual('Programme will start in 0');
      expect(pulseTimer.startBaseTimer).toHaveBeenCalled();
    });
  });

  describe('Timer.startBaseTimer -> should start baseTimer', function() {
    let pulseTimer = new PulseTimer();

    beforeEach(function() {
      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });
    
    it('should start baseTimer and assign its value to timer.message', function() {
      setInterval(function() {
        timerCallback();
      }, 1000);
      
      pulseTimer.isRunning = true;
      pulseTimer.startBaseTimer();
      
      jasmine.clock().tick(1000);
      expect(pulseTimer.message).toEqual('1');
      jasmine.clock().tick(5000);
      expect(pulseTimer.message).toEqual('6');
      jasmine.clock().tick(9000);
      expect(pulseTimer.message).toEqual('15');
      jasmine.clock().tick(1000);
      expect(pulseTimer.isRunning).toEqual(false);
    });
  });
});
