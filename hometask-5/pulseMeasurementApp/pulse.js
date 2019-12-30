/* eslint-disable consistent-return */
function PulseTimer() {
  let suplTimer = 5;
  let baseTimer = 1;
  let intervalId = null;
  this.isRunning = false;
  this.message = null;

  this.startSuplTimer = () => {
    this.isRunning = true;
    intervalId = setInterval(() => {
      if (suplTimer === 0) {
        clearInterval(intervalId);
        intervalId = null;
        this.startBaseTimer();
      }
      this.message = `Programme will start in ${suplTimer}`;
      suplTimer -= 1;
    }, 1000);
  };

  this.startBaseTimer = () => {
    intervalId = setInterval(() => {
      if (baseTimer > 15) {
        clearInterval(intervalId);
        this.isRunning = false;
        this.message = null;

        return true;
      }
      this.message = `${baseTimer}`;
      baseTimer += 1;
    }, 1000);
  };
}


function UI(TimerConstructor) {
  this.message = document.getElementById('message');
  this.btnStart = document.getElementById('start');
  this.input = document.getElementById('input');
  this.btnSubmit = document.getElementById('get-pulse');
  this.timer = new TimerConstructor();
  let intervalId = null;

  this.runTimer = () => {
    this.timer = new TimerConstructor();
    this.timer.startSuplTimer();
    intervalId = setInterval(() => {
      if (!this.timer.isRunning) {
        clearInterval(intervalId);
        this.message.textContent = 'Type in your pulse and press calculate!';

        return;
      }
      this.message.textContent = this.timer.message;
    }, 1000);
  };
}


const ui = new UI(PulseTimer);

ui.btnStart.addEventListener('click', () => {
  if (!ui.timer.isRunning) {
    ui.runTimer();
  } else {
    console.log('Timer is already running');
  }
});

ui.btnSubmit.addEventListener('click', () => {
  if (ui.timer.isRunning) {
    console.log('Can\'t caclulate pulse while timer is running');
  } else {
    const validatedInput = !!parseInt(ui.input.value, 10);
    ui.message.textContent = validatedInput
      ? `Your pulse is ${ui.input.value * 4}`
      : 'Wrong input. Couldn\'t caclulate your pulse';
  }
});
