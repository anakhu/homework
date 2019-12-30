/* eslint-disable no-undef */
function generateNumber() {
  return Math.round(Math.random() * 100);
}

function checkNumber(num) {
  if (num % 2 === 0) {
    throw new Error(`Failure! Number ${num} is even!`);
  }

  return `Success! Number ${num} is odd!`;
}

const numTimer = new Timer(20, () => {
  const number = generateNumber();
  try {
    const result = checkNumber(number);
    console.log(result);
  } catch (error) {
    console.warn(error.message);
  }
});

numTimer.run();
