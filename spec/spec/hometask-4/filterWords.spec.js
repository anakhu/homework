describe('filterWords -> should return a filtered array excluding words from another array', function() {
  it('Base test', function() {
    const words = ['hello', 'goodbye', 'center', 'back', 'midget', 'form', 'lost', 'doodle', 'niGGer'];
    const forbiddenWords = ['nigger', 'Midget', 'Doodle'];
    const filter = getFilter(forbiddenWords);
    const filtered = filter(words);
    expect(filter).toEqual(jasmine.any(Function));
    expect(filtered).toEqual(['hello', 'goodbye', 'center', 'back', 'form', 'lost']);
  });
});
