/* eslint-disable import/extensions */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

const {
  getCurrentArray,
  getNoteArr,
  createNote,
  deleteNote,
  findNotes,
  makeNotesList,
  readNote,
} = require('./notes.js');

const container = document.querySelector('.note-container');
const addFormContainer = document.querySelector('.add-note-container');
const showFormBtn = document.querySelector('.show-form');
const hideFormBtn = document.querySelector('.btn-hide');
const addNoteButton = document.querySelector('.btn-add');
const title = document.querySelector('#title');
const body = document.querySelector('#body');
const message = document.querySelector('.message');
const searchField = document.querySelector('.search');


function renderNotesList() {
  makeNotesList().forEach((item) => {
    renderNoteTitle(item);
  });
  updateNoteCount(getCurrentArray());
}

function renderNoteTitle(title) {
  const note = document.createElement('div');
  const noteTitle = document.createElement('h3');

  note.setAttribute('class', 'note');
  noteTitle.setAttribute('class', 'note-title');

  noteTitle.textContent = title;

  noteTitle.addEventListener('click', (e) => readNoteBody(e));

  note.appendChild(noteTitle);

  container.appendChild(note);
}

function readNoteBody(e) {
  const title = e.target.innerHTML;
  const body = readNote(title);
  const noteBox = e.target.parentElement;

  if (noteBox.childNodes.length < 2) {
    const element = displayNoteBody(body);
    noteBox.appendChild(element);
  } else {
    noteBox.lastChild.remove();
  }
}

function displayNoteBody(body) {
  const noteBody = document.createElement('p');
  noteBody.setAttribute('class', 'note-body');
  noteBody.textContent = body;

  const delBtn = document.createElement('button');
  delBtn.setAttribute('class', 'btn-delete');
  delBtn.textContent = 'delete';
  delBtn.addEventListener('click', (e) => removeNote(e));

  noteBody.appendChild(delBtn);

  return noteBody;
}

function addNote(title) {
  renderNoteTitle(title);
  updateNoteCount();
  clearInput();

  addFormContainer.style.display = 'none';
  showFormBtn.style.display = 'block';
}

function removeNote(e) {
  const noteToDelete = e.target.closest('div');
  const titleToDelete = noteToDelete.firstChild.textContent;

  deleteNote(titleToDelete);
  noteToDelete.remove();
  updateNoteCount();
}

function updateNoteCount() {
  const counter = document.querySelector('.notes-number');
  counter.textContent = `Notes: ${getCurrentArray().length}`;
}

function clearInput() {
  title.value = '';
  body.value = '';
  message.textContent = '';
}

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
  const result = createNote(title.value, body.value);
  if (typeof result === 'object') {
    addNote(result.title);
    message.textContent = `Note ${result.title} was created!`;
    setTimeout(() => (message.textContent = ''), 1000);
  } else {
    message.textContent = result;
  }
});

searchField.addEventListener('keyup', () => {
  const displayedArr = Array.from(document.getElementsByClassName('note'));
  const searchValue = searchField.value.trim().toLowerCase();
  const notes = displayedArr.filter((note) => note.firstChild.innerHTML.toLowerCase().includes(searchValue));
  displayedArr.forEach((item) => {
    const display = notes.includes(item)
      ? 'block'
      : 'none';

    item.style.display = display;
  });
  message.textContent = '';
  if (!findNotes(searchValue)) {
    message.textContent = 'No notes were found!';
  }
});

getNoteArr();
renderNotesList();
