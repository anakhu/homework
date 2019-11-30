function getUserData() {

  let user = [];
  
  while (user.length < 5) {

    if (user.length === 0 ) {
      makeQuestion(
        'Введите Ваше имя',
        'Имя должно состоять только из букв русского алфавита',
        isValidName, 
        'string',
        user,
        1)
      }

    if (user.length === 1 ) {
      makeQuestion(
        'Введите Вашу фамилию',
        'Фамилия должна состоять только из букв русского алфавита',
        isValidName,
        'string',
        user,
        2)
      }

    if (user.length === 2) {
      makeQuestion(
        'Введите Ваше отчество?',
        'Отчество должно состоять букв русского алфавита',
        isValidName,
        'string',
        user,
        3)
      }
    
    if (user.length === 3) {
      makeQuestion(
        'Сколько Вам лет?',
        'Пожалуйста, введите число от 1 до 120',
        isValidAge,
        'number',
        user,
        4)
      }

    if (user.length === 4) {
      let sex = confirm('Ваш пол мужской? Confirm(мужской), Cancel(женский)')
      ? 'мужской'
      : 'женский';
      user.push(sex);
      }

  return user.length === 5 ? user : null;

  }
}

function makeQuestion(initialQuestion, errorQuestion, validator, expectedVal, arr, length) {
      
  let status = true;
  let q = initialQuestion;

  while (arr.length < length && status === true) {
    let result = prompt(q);

    if (result === null) {
      let response = handleCancel()

      if (response) {
        console.log('exit');
        status = false;
      } else { 
        continue
      }
    } 
      
    let validationResult = validator(result);

    if (validationResult) {
      expectedVal === 'string'
      ? arr.push(result[0].toUpperCase() + result.slice(1))
      : arr.push(parseInt(result, 10))
      status = false;
    } else {
        q = errorQuestion;
    }
  }
}


// input validation

function isValidName(promptValue) {

  const regex = new RegExp(/^[а-я]+$/, 'i');
  return regex.test(promptValue);

}

function isValidAge(promptValue) {

  let age = parseInt(promptValue, 10);
  return isNaN(age) || age <= 0 || age > 120 ? false : true;

}


function handleCancel() {
  return response = confirm('Вы действительно хотите выйти? Все данные будут потеряны!');
}


function isRetired(sex, age) {
  return (sex === 'мужской' && age >= 63 || sex === 'женский' && age >= 58) ? 'да' : 'нет';
}


function displayUserInfo() {

  try {
    let [firstName, lastName, patronymic, age, sex] = getUserData();

    alert(
      `Ваше ФИО: ${firstName} ${lastName} ${patronymic}
      Ваш возраст в годах: ${age}
      Ваш возраст в днях: ${age * 365}
      Через 5 лет Вам будет: ${age+5}
      Ваш пол: ${sex}
      Вы на пенсии: ${isRetired(sex, age)}`   
    )
  } catch (error) {
    console.log('Ошибка получения данных от пользователя');
  }
}

displayUserInfo();
