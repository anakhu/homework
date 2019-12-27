function Notes() {
  this.notes = [];

  this.loadNotes = () => {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];
  };

  this.updateNotes = () => {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  };

  this.addNote = (title, body) => {
    const t = title.trim();
    const b = body.trim();
    if (!checkNote(t, b)) {
      return {
        done: false,
        message: 'Both body and title are required',
      };
    }
    if (this.notes.find((item) => item.title === t)) {
      return {
        done: false,
        message: 'Note exists',
      };
    }
    const note = { title: t, body: b };
    this.notes.push(note);
    this.updateNotes();

    return {
      done: true,
      message: 'Note was added',
    };
  };

  this.deleteNote = (title) => {
    const filtered = this.notes.filter((item) => item.title !== title.trim());
    if (filtered.length === this.notes.length) {
      return {
        done: false,
        message: 'Note doesn\'t exist',
      };
    }
    this.notes = filtered;
    this.updateNotes();

    return {
      done: true,
      message: 'Note was deleted',
    };
  };

  this.readNote = (title) => {
    const result = this.notes.find((item) => item.title === title.trim());
    if (result) {
      return {
        done: true,
        message: `${result.body}`,
      };
    }

    return {
      done: false,
      message: 'Note doesn\'t exist',
    };
  };

  const checkNote = (t, b) => (!!t && !!b);
}


function UI(notes) {
  this.noteTitle = document.getElementById('title');
  this.noteBody = document.getElementById('body');
  this.addBtn = document.getElementById('btn-add');
  this.delBtn = document.getElementById('btn-del');
  this.notesLi = document.getElementById('notes-list');
  this.message = document.getElementById('message');
  this.btnShow = document.getElementById('btn-show');
  this.form = document.getElementById('form');

  this.renderNote = (title) => {
    const n = document.createElement('li');
    n.textContent = title;
    app.notesLi.appendChild(n);
  };

  this.appendNote = (title, body) => {
    const result = notes.addNote(title, body);
    if (result.done) {
      this.renderNote(title);
      this.clearInput();
    }
    this.message.textContent = result.message;
  };

  this.removeNote = (title) => {
    const result = notes.deleteNote(title.trim());

    if (result.done) {
      const noteToDelete = [...this.notesLi.children].find((item) => item.innerHTML === title);
      noteToDelete.remove();
      this.clearInput();
    }
    this.message.textContent = result.message;
  };

  this.renderNotesList = () => {
    notes.loadNotes();
    notes.notes.forEach((note) => {
      this.renderNote(note.title);
    });
  };

  this.showNoteBody = (title) => {
    const result = notes.readNote(title);
    this.message.textContent = result.message;
  };

  this.clearInput = () => {
    this.noteTitle.value = '';
    this.noteBody.value = '';
  };
}


const app = new UI(new Notes());
app.renderNotesList();

app.addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = app.noteTitle.value;
  const body = app.noteBody.value;
  app.appendNote(title, body);
});

app.delBtn.addEventListener('click', (e) => {
  e.preventDefault();
  app.removeNote(app.noteTitle.value);
});

app.btnShow.addEventListener('click', (e) => {
  e.preventDefault();
  const title = app.noteTitle.value;
  app.showNoteBody(title);
});

app.form.addEventListener('change', (e) => {
  app.message.textContent = '';
});
