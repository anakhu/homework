describe('notes.js', function() {

    describe('getNoteArr -> should get items from localStorage and write them into array', function() {
      const fakeArr = JSON.stringify([{title: 'title', body: 'body'}]);
      beforeEach(function() {
        spyOn(Storage.prototype, 'getItem').and.returnValue(fakeArr);
      });

      it('should call setItem method and result in arr length of 1', function() {
        getNoteArr();
        let currentArr = getCurrentArray();
        expect(Storage.prototype.getItem).toHaveBeenCalled();
        expect(currentArr).toEqual([{title: 'title', body: 'body'}]);
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

    describe('makeNotesList -> should return an array of titles', function() {
      it('should return array of 2 items', function() {
        setArray([{title: 'title', body: 'body'}, {title: 'title1', body: 'body1'}]);
        expect(makeNotesList().length).toBe(2);
        expect(makeNotesList()[1]).toEqual('title1');
      });
    });

    describe('createNote -> should create a new note and append it to array', function() {
      beforeEach(function() {
        spyOn(Storage.prototype, 'setItem');
      });

      it('should create a new note, result in arr length of 2 and update localStorage', function() {
        setArray([{title: 'title', body: 'body'}]);
        expect(createNote('title1', 'body1')).toEqual({title: 'title1', body: 'body1'});
        expect(getCurrentArray().length).toEqual(2);
        expect(Storage.prototype.setItem).toHaveBeenCalled();
      });
      it('should return an error message if validation failed', function() {
        setArray([{title: 'title', body: 'body'}]);
        expect(createNote('', 'body')).toEqual('Both body and title are required');
        expect(createNote('title', 'body')).toEqual('Note with title \'title\' already exists');
      });
    });

    describe('deleteNote -> should delete items from array', function() {
      beforeEach(function() {
        spyOn(Storage.prototype, 'setItem');
      });
      
      it('should remove note from array and update local storage', function() {
        setArray([{title: 'title', body: 'body'}, {title: 'title1', body: 'body1'}]);
        deleteNote('title');
        expect(deleteNote('title2')).toBeFalsy();
        expect(getCurrentArray().length).toEqual(1);
        expect(Storage.prototype.setItem).toHaveBeenCalled();
      });
    });

    describe('readNote -> should return content of note if title exists', function() {
      it('should return note body', function() {
        setArray([{title: 'title', body: 'body'}, {title: 'title1', body: 'body1'}]);
        expect(readNote('title')).toEqual('body');
        expect(readNote('title2')).toBe('');
      });
    });

    describe('findNotes -> should return true if 1 or more notes were found', function() {
      it('should return an array of 2 item', function() {
        setArray([{title: 'title', body: 'body'}, {title: 'title1', body: 'body1'}]);
        expect(findNotes('title')).toEqual(true);
        expect(findNotes('body')).toEqual(false);
      });
    });

    describe('removeWhiteSpace -> should replace multiple whitespace', function() {
      it('should remove redundant whitespace chars', function() {
        expect(removeWhiteSpace('  23  34 ').length).toEqual(5);
        expect(removeWhiteSpace('  body  ')).toEqual('body');
      });
    });
   
    describe('isValidInput -> should return false for invalid input', function() {
      it('should be false for empty strings', function() {
        expect(isValidInput('title', 'body')).toEqual(true);
        expect(isValidInput('', 'body')).toEqual(false);
      })
    })
    
    describe('isUniqueNote -> should check array for notes with given title and return false if the note exists', function() {
      it('should return false for existing notes and true for unique', function() {
        setArray([{title: 'title', body: 'body'}, {title: 'title1', body: 'body1'}]);
        expect(isUniqueNote('title')).toBe(false);
        expect(isUniqueNote('title3')).toBe(true);
      });
    });
});
