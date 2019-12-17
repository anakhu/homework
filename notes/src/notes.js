/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

function initNotesApp() {
  let array = [];

  return {
    setArray: (arr) => array = arr,
    getCurrentArray: () => array,
    addToArray: (item) => array.push(item),
    deleteFromArray: (index) => array.splice(index, 1),
    getNote: (val) => {
      const trimedVal = val.trim();

      return array.find((item) => item.title === trimedVal);
    },
  };
}

const {
  setArray, getCurrentArray, addToArray, deleteFromArray, getNote,
} = initNotesApp();

function getNoteArr() {
  const notesStr = localStorage.getItem('notes');
  let notes = [];
  if (notesStr) {
    try {
      notes = JSON.parse(notesStr);
    } catch (err) {
      console.error(err);
    }
  }
  setArray(notes);
}

function updateLocalStorage() {
  localStorage.setItem('notes', JSON.stringify(getCurrentArray()));
}

function makeNotesList() {
  return getCurrentArray().map((note) => note.title);
}

function createNote(title, body) {
  const titleVal = removeWhiteSpace(title);
  const bodyVal = removeWhiteSpace(body);

  if (!isValidInput(titleVal, bodyVal)) {
    return 'Both body and title are required';
  }
  if (!isUniqueNote(titleVal)) {
    return `Note with title '${titleVal}' already exists`;
  }

  const newNote = {
    title: titleVal,
    body: bodyVal,
  };

  addToArray(newNote);
  updateLocalStorage();

  return newNote;
}

function deleteNote(title) {
  const note = getNote(title);

  if (note) {
    deleteFromArray(getCurrentArray().indexOf(note));
    updateLocalStorage();
    console.log('Note was deleted');

    return true;
  }
  console.log('Couldn\'t delete note');

  return false;
}

function readNote(title) {
  const note = getNote(title);

  return note ? note.body : '';
}

function findNotes(title) {
  const filteredArray = getCurrentArray().filter((item) => (item.title.toLowerCase().includes(title)));
  if (filteredArray.length > 0) {
    console.log(`${filteredArray.length} notes were found`);

    return true;
  }
  console.log('No notes were found');

  return false;
}

// input validation
function removeWhiteSpace(val) {
  const regex = new RegExp(/\s{2,}/, 'g');

  return val.replace(regex, ' ').trim();
}

function isValidInput(title, body) {
  return !!title && !!body;
}

function isUniqueNote(title) {
  return !getNote(title);
}

module.exports = {
  getCurrentArray,
  getNoteArr,
  createNote,
  deleteNote,
  findNotes,
  makeNotesList,
  readNote,
};
