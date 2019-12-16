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
  };
}

const {
  setArray, getCurrentArray, addToArray, deleteFromArray,
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

function createNote(title, body) {
  const newNote = {
    title,
    body,
    id: getCurrentArray().length + 1,
  };
  addToArray(newNote);
  updateLocalStorage();

  return newNote;
}

function deleteNote(note) {
  const arrDel = getCurrentArray().find((item) => item.title === note.firstChild.textContent);
  deleteFromArray(getCurrentArray().indexOf(arrDel));
  updateLocalStorage();
}

function isUniqueNote(title) {
  const existingNote = getCurrentArray().find((note) => (note.title === title.trim()));

  return !existingNote;
}

function updateLocalStorage() {
  localStorage.setItem('notes', JSON.stringify(getCurrentArray()));
}

module.exports = {
  getCurrentArray, getNoteArr, createNote, deleteNote, isUniqueNote,
};
