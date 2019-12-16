describe('notes.js', function() {

    describe('getNoteArr -> should get items from localStorage and write them into array', function() {
      const fakeArr = JSON.stringify([{title: 'title', body: 'body', id: 1}]);
      beforeEach(function() {
        spyOn(Storage.prototype, 'getItem').and.returnValue(fakeArr);
      });

      it('should call setItem method and result in arr length of 1', function() {
        getNoteArr();
        let currentArr = getCurrentArray();
        expect(Storage.prototype.getItem).toHaveBeenCalled();
        expect(currentArr).toEqual([{title: 'title', body: 'body', id: 1}]);
        expect(currentArr.length).toEqual(1);
      });
    });

    describe('updateLocalStorage -> should update local storage', function() {
      beforeEach(function() {
        spyOn(Storage.prototype, 'setItem');
      });

      it('should call setItem method on local storage', function() {
        updateLocalStorage();
        expect(Storage.prototype.setItem).toHaveBeenCalled();
      });
    });

    describe('createNote -> should create a new note and append it to array', function() {
      beforeEach(function() {
        spyOn(Storage.prototype, 'setItem');
      });

      it('should create a new note, result in arr length of 2 and update localStorage', function() {
        setArray([{title: 'title', body: 'body', id: 1}]);
        let result = createNote('title1', 'body1');
        let currentArr = getCurrentArray();
        expect(result).toEqual({title: 'title1', body: 'body1', id: 2});
        expect(currentArr.length).toEqual(2);
        expect(Storage.prototype.setItem).toHaveBeenCalled();
      });
    });

    describe('deleteNote -> should delete items from array', function() {
      beforeEach(function() {
        spyOn(Storage.prototype, 'setItem');
        spyOn(Array.prototype, 'find').and.returnValue({title: 'title', body: 'body', id: 1});
      });
      
      it('should remove note from array and update local storage', function() {
        setArray([{title: 'title', body: 'body', id: 1}, {title: 'title1', body: 'body1', id: 2}]);
        deleteNote('title');
        expect(getCurrentArray().length).toEqual(1);
        expect(Storage.prototype.setItem).toHaveBeenCalled();
      });
    });
    
    describe('isUniqueNote -> should check array for notes with given title and return false if the note exists', function() {

      it('should return false for existing notes and true for unique', function() {
        setArray([{title: 'title', body: 'body', id: 1}, {title: 'title1', body: 'body1', id: 2}]);
        expect(isUniqueNote('title')).toBe(false);
        expect(isUniqueNote('title3')).toBe(true);
      });
    });
});
