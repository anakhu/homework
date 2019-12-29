/* eslint-disable import/extensions */
/* eslint-disable no-return-assign */

// import { daysToBirthday, checkInput } from './getDaysToNextBirthday.js';

const body = document.getElementsByTagName('body')[0];
const dateInput = document.createElement('input');
const p = document.createElement('p');
p.textContent = 'Type your birthday date and press \'Enter\' (for example: 1996-12-03)';
dateInput.setAttribute('type', 'text');
dateInput.setAttribute('placeholder', 'year-month-day');
const resultMessage = document.createElement('h3');
resultMessage.textContent = '';

dateInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const result = checkInput(e.target.value);
    const output = result
      ? `Days to your birthday: ${daysToBirthday(e.target.value)}`
      : 'Wrong input!';

    resultMessage.textContent = output;
  }
});

body.appendChild(p);
body.appendChild(dateInput);
body.appendChild(resultMessage);
