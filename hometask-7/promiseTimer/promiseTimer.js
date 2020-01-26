/* eslint-disable consistent-return */
function timer(sec, onTick) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (sec === 0) {
        return resolve('Timer has stopped');
      }
      if (sec < 0) {
        return reject(new Error('Timer value mustn\'t be negative'));
      }
      onTick(sec);
      sec -= 1;
    }, 1000);
  });
}

function displayTimer(output) {
  elem.textContent = output;
}

const elem = document.getElementById('timer');
const btnStart = document.getElementById('start');

btnStart.addEventListener('click', (e) => {
  e.target.setAttribute('disabled', true);

  timer(5, displayTimer)
    .then((res) => displayTimer(res))
    .catch((err) => displayTimer(err))
    .finally(() => e.target.removeAttribute('disabled'));
});
