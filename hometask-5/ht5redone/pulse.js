/* eslint-disable no-undef */
const message = document.getElementById('message');
const input = document.getElementById('input-field');
const btnStart = document.getElementById('start');
const btnCalc = document.getElementById('calculate');

function createDelayedTimer() {
  const delayedTimer = new Timer(15, (secondsLeft) => {
    message.textContent = secondsLeft;
    if (!secondsLeft) {
      message.textContent = 'Type your pulse and click calculate!';
      btnStart.removeAttribute('disabled');
      btnCalc.removeAttribute('disabled');
    }
  });

  delayedTimer.run();
  delayedTimer.toggle();

  return delayedTimer;
}

function createPulseTimer(baseTimer) {
  const pulseTimer = new Timer(5, (secondsLeft) => {
    message.textContent = `Program will start in ${secondsLeft}`;
    if (!secondsLeft) {
      baseTimer.toggle();
    }
  });

  return pulseTimer;
}

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', true);
  btnCalc.setAttribute('disabled', true);

  const delayedTimer = createDelayedTimer();
  const pulseTimer = createPulseTimer(delayedTimer);

  pulseTimer.run();
});

btnCalc.addEventListener('click', () => {
  const validatedInput = !!parseInt(input.value, 10);
  message.textContent = validatedInput
    ? `Your pulse is ${input.value * 4}`
    : 'Wrong input. Couldn\'t caclulate your pulse';
});
