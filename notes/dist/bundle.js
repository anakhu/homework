/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./notes/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./notes/index.js":
/*!************************!*\
  !*** ./notes/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable import/extensions */\n/* eslint-disable no-return-assign */\n/* eslint-disable no-param-reassign */\nconst {\n  getCurrentArray, getNoteArr, createNote, deleteNote, isUniqueNote,\n} = __webpack_require__(/*! ./notes.js */ \"./notes/notes.js\");\n\nconst container = document.querySelector('.note-container');\n\nfunction renderNotesList() {\n  getCurrentArray().forEach((item) => {\n    renderNote(item);\n  });\n  updateNoteCount(getCurrentArray());\n}\n\nfunction updateNoteCount() {\n  const counter = document.querySelector('.notes-number');\n  counter.textContent = `Notes: ${getCurrentArray().length}`;\n}\n\nfunction renderNote({ title, body }) {\n  const note = document.createElement('div');\n  const noteTitle = document.createElement('h3');\n  const noteBody = document.createElement('p');\n  const delBtn = document.createElement('button');\n\n  note.setAttribute('class', 'note');\n  noteTitle.setAttribute('class', 'note-title');\n  noteBody.setAttribute('class', 'note-body');\n  delBtn.setAttribute('class', 'btn-delete');\n\n  noteTitle.textContent = title;\n  noteBody.textContent = body;\n  delBtn.textContent = 'delete';\n\n  delBtn.addEventListener('click', (e) => removeNote(e));\n  noteTitle.addEventListener('click', (e) => displayNoteDetails(e));\n\n  noteBody.appendChild(delBtn);\n  note.appendChild(noteTitle);\n  note.appendChild(noteBody);\n\n  container.appendChild(note);\n}\n\nfunction displayNoteDetails(e) {\n  const noteBodyToDisplay = e.target.nextSibling;\n  const { display } = noteBodyToDisplay.style;\n\n  noteBodyToDisplay.style.display = display === 'none' || !display\n    ? 'block'\n    : 'none';\n}\n\nfunction removeNote(e) {\n  const noteToDelete = e.target.closest('div');\n  deleteNote(noteToDelete);\n  noteToDelete.remove();\n  updateNoteCount();\n}\n\nfunction addNote(note) {\n  renderNote(note);\n  updateNoteCount();\n  clearInput();\n  addFormContainer.style.display = 'none';\n  showFormBtn.style.display = 'block';\n}\n\n// form impementation\nconst addFormContainer = document.querySelector('.add-note-container');\nconst showFormBtn = document.querySelector('.show-form');\nconst hideFormBtn = document.querySelector('.btn-hide');\nconst addNoteButton = document.querySelector('.btn-add');\nconst titleContainer = document.getElementById('note-title');\nconst bodyContainer = document.getElementById('note-body');\n\nconst title = titleContainer.querySelector('#title');\nconst titleWarningMessage = titleContainer.querySelector('.warning');\nconst body = bodyContainer.querySelector('#body');\nconst bodyWarningMessage = bodyContainer.querySelector('.warning');\n\n\nshowFormBtn.addEventListener('click', () => {\n  addFormContainer.style.display = 'block';\n  showFormBtn.style.display = 'none';\n});\n\nhideFormBtn.addEventListener('click', () => {\n  addFormContainer.style.display = 'none';\n  showFormBtn.style.display = 'block';\n  clearInput();\n});\n\naddNoteButton.addEventListener('click', (e) => {\n  e.preventDefault();\n\n  const titleVal = title.value.trim();\n  const bodyVal = body.value.trim();\n  const titleUnique = isUniqueNote(titleVal);\n\n  if (!titleVal) {\n    titleWarningMessage.textContent = 'Title is required';\n  } else if (!titleUnique) {\n    titleWarningMessage.textContent = `Note with title '${titleVal}' already exists`;\n  } else {\n    titleWarningMessage.textContent = '';\n  }\n\n  if (!bodyVal) {\n    bodyWarningMessage.textContent = 'Body is required';\n  } else {\n    bodyWarningMessage.textContent = '';\n  }\n\n  if (titleVal && bodyVal && titleUnique) {\n    const newNote = createNote(titleVal, bodyVal);\n    addNote(newNote);\n  }\n});\n\nfunction clearInput() {\n  title.value = '';\n  body.value = '';\n  titleWarningMessage.textContent = '';\n  bodyWarningMessage.textContent = '';\n}\n\n// search field implementation\nconst searchField = document.querySelector('.search');\n\nsearchField.addEventListener('keyup', () => {\n  const displayedArr = Array.from(document.getElementsByClassName('note'));\n  const searchValue = searchField.value;\n  const arr = displayedArr.filter((note) => (\n    note.firstChild.innerHTML.toLowerCase().includes(searchValue.toLowerCase())\n  ));\n  displayedArr.forEach((item) => (arr.includes(item) ? item.style.display = 'block' : item.style.display = 'none'));\n});\n\n\ngetNoteArr();\nrenderNotesList();\n\n\n//# sourceURL=webpack:///./notes/index.js?");

/***/ }),

/***/ "./notes/notes.js":
/*!************************!*\
  !*** ./notes/notes.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable import/prefer-default-export */\n/* eslint-disable no-return-assign */\n/* eslint-disable no-param-reassign */\n\nfunction initNotesApp() {\n  let array = [];\n\n  return {\n    setArray: (arr) => array = arr,\n    getCurrentArray: () => array,\n    addToArray: (item) => array.push(item),\n    deleteFromArray: (index) => array.splice(index, 1),\n  };\n}\n\nconst {\n  setArray, getCurrentArray, addToArray, deleteFromArray,\n} = initNotesApp();\n\n\nfunction getNoteArr() {\n  const notesStr = localStorage.getItem('notes');\n  let notes = [];\n  if (notesStr) {\n    try {\n      notes = JSON.parse(notesStr);\n    } catch (err) {\n      console.error(err);\n    }\n  }\n  setArray(notes);\n}\n\nfunction createNote(title, body) {\n  const newNote = {\n    title,\n    body,\n    id: getCurrentArray().length + 1,\n  };\n  addToArray(newNote);\n  updateLocalStorage();\n\n  return newNote;\n}\n\nfunction deleteNote(note) {\n  const arrDel = getCurrentArray().find((item) => item.title === note.firstChild.textContent);\n  deleteFromArray(getCurrentArray().indexOf(arrDel));\n  updateLocalStorage();\n}\n\nfunction isUniqueNote(title) {\n  const existingNote = getCurrentArray().find((note) => (note.title === title.trim()));\n\n  return !existingNote;\n}\n\nfunction updateLocalStorage() {\n  localStorage.setItem('notes', JSON.stringify(getCurrentArray()));\n}\n\nmodule.exports = {\n  getCurrentArray, getNoteArr, createNote, deleteNote, isUniqueNote,\n};\n\n\n//# sourceURL=webpack:///./notes/notes.js?");

/***/ })

/******/ });