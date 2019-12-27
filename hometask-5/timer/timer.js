function Timer(limit, onTick) {
  this.maxTime = (limit > 60 || limit <= 0) ? 60 : limit;
  this.currentTime = this.maxTime;
  this.onTick = onTick;
  this.intervalId = null;
  this.isPaused = false;
}

Timer.prototype.decrement = function decrement() {
  if (this.currentTime > 0) {
    this.currentTime -= 1;
  } else {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
};

Timer.prototype.run = function run() {
  this.intervalId = setInterval(() => {
    if (!this.isPaused) {
      this.onTick(this.currentTime);
      this.decrement();
    }
  }, 1000);
};

Timer.prototype.reset = function reset() {
  if (this.currentTime === 0) {
    this.currentTime = this.maxTime;
    this.isPaused = false;
    this.run();
  }
};

Timer.prototype.toggle = function toggle() {
  if (this.intervalId === null) {
    this.reset();
  } else {
    this.isPaused = !this.isPaused;
  }
};


const timerElement = document.getElementById('timer');
const timerBtn = document.getElementById('pause');

function renderTimer(secondsLeft) {
  timerElement.textContent = secondsLeft;
}

const timer = new Timer(75, renderTimer);
timer.run();

timerBtn.addEventListener('click', () => {
  timer.toggle();
});
