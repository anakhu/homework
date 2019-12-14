describe('apples.js -> getNumWord -> should return the corresponding word form for chosen number', function() {

  it("should return 'яблок' for 11", function(){
    let number = 11;
    let result = getNumWord(number, "яблоко", "яблока", "яблок");
    expect(result).toBe("яблок");
  });

  it("should return 'яблоко' for 1101", function(){
    let number = 1101;
    let result = getNumWord(number, "яблоко", "яблока", "яблок");
    expect(result).toBe("яблоко");
  });

  it("should return 'яблока' for 22", function(){
    let number = 22;
    let result = getNumWord(number, "яблоко", "яблока", "яблок");
    expect(result).toBe("яблока");
  });
  
});

