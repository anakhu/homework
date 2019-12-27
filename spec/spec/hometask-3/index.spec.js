describe('index.js', function() {
  describe('Notes -> should create a new instance of notes when called', function() {
    it('should create and object', function () {
      let notes = new Notes();
      expect(notes).toEqual(jasmine.any(Object));
      expect(notes.notes).toEqual(jasmine.any(Array));
    });
  });

  describe('Notes.loadNotes() -> should get items from local storage', function() {
    beforeEach(function() {
      const fakeArr = JSON.stringify([{title: 'note', body: 'todo'}]);
      spyOn(Storage.prototype, 'getItem').and.returnValue(fakeArr);
    });

    it('Base Test', function() {
      const notes = new Notes();
      notes.loadNotes();
      expect(Storage.prototype.getItem).toHaveBeenCalled();
      expect(notes.notes.length).toEqual(1);
      expect(notes.notes[0]).toEqual({title: 'note', body: 'todo'});
    });
  });

  describe('Notes.updateNotes() -> it should update local storage ', function() {
    beforeEach(function() {
      spyOn(Storage.prototype, 'setItem');
    });
    it('Base test', function() {
      const notes = new Notes();
      notes.updateNotes();
      expect(Storage.prototype.setItem).toHaveBeenCalled();
    });
  });

  describe('Notes.addNote() -> should append note to array', function() {
    it('Base test', function() {
      const notes = new Notes();
      const note1 = notes.addNote('note1','body1');
      const note2 = notes.addNote('note1', 'body');
      const note3 = notes.addNote('', '');
      expect(note1.done).toBe(true);
      expect(notes.notes.length).toEqual(1);
      expect(note2.done).toBe(false);
      expect(note2.message).toEqual('Note exists');
      expect(note3.message).toEqual('Both body and title are required');
    });
  });

  describe('Notes.deleteNote() -> should delete note from array if the note exists', function() {
    it('Base test', function() {
      const notes = new Notes();
      notes.addNote('title1', 'body1');
      notes.addNote('title2', 'body2');
      expect(notes.deleteNote('title1').done).toBe(true);
      expect(notes.notes.length).toEqual(1);
      expect(notes.deleteNote('title5').done).toBe(false);
      expect(notes.deleteNote('title5').message).toEqual('Note doesn\'t exist');
    });
  });

  describe('Notes.readNote() -> should return body of the chosen note', function() {
    it('Base test', function() {
      const notes = new Notes();
      notes.addNote('title1', 'body1');
      expect(notes.readNote('title1').done).toBe(true);
      expect(notes.readNote('title1').message).toEqual('body1');
      expect(notes.readNote('title5').done).toBe(false);
      expect(notes.readNote('title5').message).toEqual('Note doesn\'t exist');
    });
  });
});
