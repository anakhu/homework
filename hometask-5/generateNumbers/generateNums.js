function generateNumber() {
  return Math.round(Math.random() * 100);
}

function checkNumber(number) {
  if (number % 2 === 0) {
    throw new Error(`Failure! Number ${number} is even!`);
  }

  return `Success! Number ${number} is odd!`;
}

function callFnTwentyTimes() {
  let timer = 20;
  let intervalId = null;

  intervalId = setInterval(() => {
    if (timer === 0) {
      clearInterval(intervalId);

      return;
    }
    const number = generateNumber();
    try {
      const result = checkNumber(number);
      console.log(result);
    } catch (error) {
      console.warn(error.message);
    }
    timer -= 1;
  }, 1000);
}
