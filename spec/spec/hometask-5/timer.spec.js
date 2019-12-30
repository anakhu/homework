describe('timer.js', function() {
  let count = 0;
  let myFunc = function() {
    count += 1;
  }

  describe('Timer() -> should create a new instance of Timer', function() {
    let timer = new Timer(10, myFunc);

    it('Base test', function() {
      expect(timer).toEqual(jasmine.any(Object));
      expect(timer.isPaused).toEqual(false);
      expect(timer.currentTime).toEqual(10);
    });
  });

  describe('Timer.prototype.decrement -> should decrement currentTime value', function() {
    let timer = new Timer(10, myFunc);

    it('Base test', function() {
      timer.decrement();
      expect(timer.currentTime).toEqual(9);
      timer.decrement();
      expect(timer.currentTime).toEqual(8);
    });
  });

  describe('Timer.prototype.run -> window setInterval should be called', function() {
    let timer = new Timer(10, myFunc);

    beforeEach(function() {
      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
      count = 0;
    });

    afterEach(function() {
      jasmine.clock().uninstall();
      count = 0;
    });

    it('Base test', function() {
      setInterval(function() {
        timerCallback();
      }, 1000);

     timer.run();
     expect(timer.isPaused).toBeFalse();
     jasmine.clock().tick(1000);
     expect(timer.currentTime).toEqual(9);
     jasmine.clock().tick(5000);
     expect(timer.currentTime).toEqual(4);
     expect(count).toEqual(6);
    });
  });

  describe('Timer.prototype.reset -> should reset timer', function() {
    let timer = new Timer(20, myFunc);
    timer.maxTime = 20;
    timer.currentTime = 0;

    it('Base test', function() {
      timer.reset();
      expect(timer.currentTime).toEqual(20);
    });
  });

  describe('Timer.prototype.toggle -> should reset the timer or pause/start it', function() {
    let timer = new Timer(3, myFunc);

    beforeEach(function() {
      spyOn(timer, 'reset');
    });
    
    it('Base test', function() {
      timer.isPaused = true;
      timer.intervalId = 1;
      timer.toggle();
      expect(timer.isPaused).toBe(false);
      timer.intervalId = null;
      timer.toggle();
      expect(timer.reset).toHaveBeenCalled();
    });
  });
});
