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
  setArray(JSON.parse(localStorage.getItem('notes')));
}

// render notes
const container = document.querySelector('.note-container');

function renderNotesList() {
  getCurrentArray().forEach((item) => {
    renderNote(item);
  });
  updateNoteCount(getCurrentArray());
}

function renderNote({ title, body }) {
  const note = document.createElement('div');
  const noteTitle = document.createElement('h3');
  const noteBody = document.createElement('p');
  const delBtn = document.createElement('button');

  note.setAttribute('class', 'note');
  noteTitle.setAttribute('class', 'note-title');
  noteBody.setAttribute('class', 'note-body');
  delBtn.setAttribute('class', 'btn-delete');

  noteTitle.textContent = title;
  noteBody.textContent = body;
  delBtn.textContent = 'delete';

  delBtn.addEventListener('click', (e) => removeNote(e));
  noteTitle.addEventListener('click', (e) => displayNoteDetails(e));

  noteBody.appendChild(delBtn);
  note.appendChild(noteTitle);
  note.appendChild(noteBody);

  container.appendChild(note);
}

function displayNoteDetails(e) {
  const noteBodyToDisplay = e.target.nextSibling;
  const { display } = noteBodyToDisplay.style;

  noteBodyToDisplay.style.display = display === 'none' || !display
    ? 'block'
    : 'none';
}

function removeNote(e) {
  const noteToDelete = e.target.closest('div');
  deleteNote(noteToDelete);
  noteToDelete.remove();
  updateNoteCount();
}

function addNote(note) {
  renderNote(note);
  updateNoteCount();
  clearInput();
  addFormContainer.style.display = 'none';
  showFormBtn.style.display = 'block';
}

// form impementation
const form = document.querySelector('.add-note-form');
const addFormContainer = document.querySelector('.add-note-container');
const showFormBtn = document.querySelector('.show-form');
const hideFormBtn = document.querySelector('.btn-hide');
const addNoteButton = document.querySelector('.btn-add');
const titleContainer = document.getElementById('note-title');
const bodyContainer = document.getElementById('note-body');

const title = titleContainer.querySelector('#title');
const titleWarningMessage = titleContainer.querySelector('.warning');
const body = bodyContainer.querySelector('#body');
const bodyWarningMessage = bodyContainer.querySelector('.warning');

showFormBtn.addEventListener('click', () => {
  addFormContainer.style.display = 'block';
  showFormBtn.style.display = 'none';
});

hideFormBtn.addEventListener('click', () => {
  addFormContainer.style.display = 'none';
  showFormBtn.style.display = 'block';
  clearInput();
});

addNoteButton.addEventListener('click', (e) => {
  e.preventDefault();

  const titleVal = title.value.trim();
  const bodyVal = body.value.trim();
  const titleUnique = isUniqueNote(titleVal);

  if (!titleVal) {
    titleWarningMessage.textContent = 'Title is required';
  } else if (!titleUnique) {
    titleWarningMessage.textContent = `Note with title '${titleVal}' already exists`;
  } else {
    titleWarningMessage.textContent = '';
  }

  if (!bodyVal) {
    bodyWarningMessage.textContent = 'Body is required';
  } else {
    bodyWarningMessage.textContent = '';
  }

  if (titleVal && bodyVal && titleUnique) {
    const newNote = createNote(titleVal, bodyVal);
    addNote(newNote);
  }
});


function isUniqueNote(title) {
  const existingNote = getCurrentArray().find((note) => (note.title === title.trim()));

  return !existingNote;
}

function clearInput() {
  title.value = '';
  body.value = '';
  titleWarningMessage.textContent = '';
  bodyWarningMessage.textContent = '';
}

// note search implementation
const searchField = document.querySelector('.search');

searchField.addEventListener('keyup', () => {
  const displayedArr = Array.from(document.getElementsByClassName('note'));
  const searchValue = searchField.value;
  const arr = displayedArr.filter((note) => (
    note.firstChild.innerHTML.toLowerCase().includes(searchValue.toLowerCase())
  ));
  displayedArr.forEach((item) => (arr.includes(item) ? item.style.display = 'block' : item.style.display = 'none'));
});


// array manipulation
function createNote(title, body) {
  const newNote = {
    title,
    body,
    id: getCurrentArray().length + 1,
  };
  addToArray(newNote);
  updateLocalStorge();

  return newNote;
}

function deleteNote(note) {
  const arrDel = getCurrentArray().find((item) => item.title === note.firstChild.textContent);
  deleteFromArray(getCurrentArray().indexOf(arrDel));
  updateLocalStorge();
}

function updateLocalStorge() {
  localStorage.setItem('notes', JSON.stringify(getCurrentArray()));
}

function updateNoteCount() {
  const counter = document.querySelector('.notes-number');
  counter.textContent = `Notes: ${getCurrentArray().length}`;
}


getNoteArr();
renderNotesList();
