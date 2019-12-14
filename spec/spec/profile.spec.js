describe('profile.js', function() {
  
  // test multiple functions with the same input and output
  function testMyFunction(fn, input, output) {
    it(`should return ${output} for ${input}`, function() {
      expect(fn(input)).toBe(output);
    });
  };

  describe('isValidAge -> should return true if chosen number greater than 1 and less or equal to 121', function() {
    const args = ['twenty-one', '23', '0', '--', '121'];
    const result = [false, true, false, false, false, false];

    for (let i = 0; i < args.length; i++) {
      testMyFunction(isValidAge, args[i], result[i]);
    };
  });

  describe('isValidName -> should return true if chosen name consists of 1 or more characters of the Russian alphabet', function() {
    const args = ['Kate', 'Ф', '0', '', 'Александр'];
    const result = [false, true, false, false, true];

    for (let i = 0; i < args.length; i++) {
      testMyFunction(isValidName, args[i], result[i]);
    };
  });

  describe('isRetired -> should return "yes" if chosen age is greater or equal to 63 for men and 58 for women', function() {

    it('should be \'no\' if female and 23', function() {
      let result = isRetired('женский', 23);
      expect(result).toMatch('нет');
    });

    it('should be \'yes\' if male and 64', function() {
      let result = isRetired('мужской', 64);
      expect(result).toMatch('да');
    });
  });

  describe('handleCancel -> should trigger confirm', function() {

    beforeEach(function(){
      spyOn(window, 'confirm');
    });

    it('confirm has been called', function() {
      handleCancel();
      expect(window.confirm).toHaveBeenCalled()
    });
  });

  // test functions with fake user input
  const fakeUserInput = ['Иван', 'Иванович', 'Иванов', 30, 'мужской'];
  
  describe('getUserData -> should return an array of 5 items with user data', function() { 

    let step = 0;
    let testArr = [];

    beforeEach(function () {

      spyOn(window, 'prompt').and.callFake(function() {
        const result = fakeUserInput[step];
        step++;
        testArr.push(result);
        return result;
      });

      spyOn(window, 'confirm').and.callFake(function() {
        const result = fakeUserInput[step];
        testArr.push(result);
        return result;
      });
    });

    afterEach(function () {
      step = 0;
      testArr = [];
    });

    it('should return array of 5 items (["Иван", "Иванович", "Иванов", 30, "мужской"])', function() {
      expect(getUserData()).toEqual(["Иван", "Иванович", "Иванов", 30, "мужской"]); 
    });
  });


  describe('makeQuestion ->  should prompt a question and push its value into array if valid', function() {
    
    let testArr = [];
    let args = ['Введите Ваше имя', 'Имя должно состоять только из букв русского алфавита', isValidName, 'string', testArr, 1];
    let testVal = fakeUserInput[0];
    
    beforeEach(function() {
      spyOn(window, 'prompt').and.returnValue(testVal);
    });

    afterAll(function() {
      testArr = [];
    });
    
    it('should have arr.length of 1', function() {
      makeQuestion(...args);
      expect(testArr.length).toBe(1);
    });

    it('should have "Иван" in the array', function() {
      makeQuestion(...args)
      expect(testArr[0]).toBe(testVal);
    });
  });


  describe('displayUserInfo -> should trigger alert that displays user data if data has been provided', function() {
    let step = 0;

    beforeEach(function() {

      spyOn(window, 'prompt').and.callFake(function() {
        const result = fakeUserInput[step];
        step++;
        return result;
      });

      spyOn(window, 'confirm').and.callFake(function() {
        const result = fakeUserInput[step];
        return result;
      });

      spyOn(window, 'alert');
    });

    afterEach(function() {
      step = 0;
    });

    it('should trigger alert with user data', function() {
      displayUserInfo();
      expect(window.alert).toHaveBeenCalled();
    });
  });
});