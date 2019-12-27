/* eslint-disable import/prefer-default-export */
function daysToBirthday(input) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, date] = input.split('-');
  const bd = new Date(year, month - 1, date);

  let nextBd;

  if (today.getMonth() === bd.getMonth() && today.getDate() <= bd.getDate()) {
    nextBd = new Date(today.getFullYear(), month - 1, date);
  } else {
    nextBd = new Date(today.getFullYear() + 1, month - 1, date);
  }

  return Math.ceil((nextBd - today) / (1000 * 3600 * 24));
}


function checkInput(input) {
  const regex = new RegExp(/\d{4}-\d{2}-\d{2}/, 'g');

  if (regex.test(input)) {
    const inp = input.split('-');
    if (inp[1] <= 12 && inp[2] <= 31 && new Date().getFullYear() >= inp[0]) {
      return true;
    }
  }

  return false;
}

// export { daysToBirthday, checkInput };
