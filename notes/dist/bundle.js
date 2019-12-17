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
/******/ 	return __webpack_require__(__webpack_require__.s = "./notes/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./notes/src/index.js":
/*!****************************!*\
  !*** ./notes/src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable import/extensions */\n/* eslint-disable no-return-assign */\n/* eslint-disable no-param-reassign */\n\nconst {\n  getCurrentArray,\n  getNoteArr,\n  createNote,\n  deleteNote,\n  findNotes,\n  makeNotesList,\n  readNote,\n} = __webpack_require__(/*! ./notes.js */ \"./notes/src/notes.js\");\n\nconst container = document.querySelector('.note-container');\nconst addFormContainer = document.querySelector('.add-note-container');\nconst showFormBtn = document.querySelector('.show-form');\nconst hideFormBtn = document.querySelector('.btn-hide');\nconst addNoteButton = document.querySelector('.btn-add');\nconst title = document.querySelector('#title');\nconst body = document.querySelector('#body');\nconst message = document.querySelector('.message');\nconst searchField = document.querySelector('.search');\n\n\nfunction renderNotesList() {\n  makeNotesList().forEach((item) => {\n    renderNoteTitle(item);\n  });\n  updateNoteCount(getCurrentArray());\n}\n\nfunction renderNoteTitle(title) {\n  const note = document.createElement('div');\n  const noteTitle = document.createElement('h3');\n\n  note.setAttribute('class', 'note');\n  noteTitle.setAttribute('class', 'note-title');\n\n  noteTitle.textContent = title;\n\n  noteTitle.addEventListener('click', (e) => readNoteBody(e));\n\n  note.appendChild(noteTitle);\n\n  container.appendChild(note);\n}\n\nfunction readNoteBody(e) {\n  const title = e.target.innerHTML;\n  const body = readNote(title);\n  const noteBox = e.target.parentElement;\n\n  if (noteBox.childNodes.length < 2) {\n    const element = displayNoteBody(body);\n    noteBox.appendChild(element);\n  } else {\n    noteBox.lastChild.remove();\n  }\n}\n\nfunction displayNoteBody(body) {\n  const noteBody = document.createElement('p');\n  noteBody.setAttribute('class', 'note-body');\n  noteBody.textContent = body;\n\n  const delBtn = document.createElement('button');\n  delBtn.setAttribute('class', 'btn-delete');\n  delBtn.textContent = 'delete';\n  delBtn.addEventListener('click', (e) => removeNote(e));\n\n  noteBody.appendChild(delBtn);\n\n  return noteBody;\n}\n\nfunction addNote(title) {\n  renderNoteTitle(title);\n  updateNoteCount();\n  clearInput();\n\n  addFormContainer.style.display = 'none';\n  showFormBtn.style.display = 'block';\n}\n\nfunction removeNote(e) {\n  const noteToDelete = e.target.closest('div');\n  const titleToDelete = noteToDelete.firstChild.textContent;\n\n  deleteNote(titleToDelete);\n  noteToDelete.remove();\n  updateNoteCount();\n}\n\nfunction updateNoteCount() {\n  const counter = document.querySelector('.notes-number');\n  counter.textContent = `Notes: ${getCurrentArray().length}`;\n}\n\nfunction clearInput() {\n  title.value = '';\n  body.value = '';\n  message.textContent = '';\n}\n\nshowFormBtn.addEventListener('click', () => {\n  addFormContainer.style.display = 'block';\n  showFormBtn.style.display = 'none';\n});\n\nhideFormBtn.addEventListener('click', () => {\n  addFormContainer.style.display = 'none';\n  showFormBtn.style.display = 'block';\n  clearInput();\n});\n\naddNoteButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  const result = createNote(title.value, body.value);\n  if (typeof result === 'object') {\n    addNote(result.title);\n    message.textContent = `Note ${result.title} was created!`;\n    setTimeout(() => (message.textContent = ''), 1000);\n  } else {\n    message.textContent = result;\n  }\n});\n\nsearchField.addEventListener('keyup', () => {\n  const displayedArr = Array.from(document.getElementsByClassName('note'));\n  const searchValue = searchField.value.trim().toLowerCase();\n  const notes = displayedArr.filter((note) => note.firstChild.innerHTML.toLowerCase().includes(searchValue));\n  displayedArr.forEach((item) => {\n    const display = notes.includes(item)\n      ? 'block'\n      : 'none';\n\n    item.style.display = display;\n  });\n  message.textContent = '';\n  if (!findNotes(searchValue)) {\n    message.textContent = 'No notes were found!';\n  }\n});\n\ngetNoteArr();\nrenderNotesList();\n\n\n//# sourceURL=webpack:///./notes/src/index.js?");

/***/ }),

/***/ "./notes/src/notes.js":
/*!****************************!*\
  !*** ./notes/src/notes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable import/prefer-default-export */\n/* eslint-disable no-return-assign */\n/* eslint-disable no-param-reassign */\n\nfunction initNotesApp() {\n  let array = [];\n\n  return {\n    setArray: (arr) => array = arr,\n    getCurrentArray: () => array,\n    addToArray: (item) => array.push(item),\n    deleteFromArray: (index) => array.splice(index, 1),\n    getNote: (val) => {\n      const trimedVal = val.trim();\n\n      return array.find((item) => item.title === trimedVal);\n    },\n  };\n}\n\nconst {\n  setArray, getCurrentArray, addToArray, deleteFromArray, getNote,\n} = initNotesApp();\n\nfunction getNoteArr() {\n  const notesStr = localStorage.getItem('notes');\n  let notes = [];\n  if (notesStr) {\n    try {\n      notes = JSON.parse(notesStr);\n    } catch (err) {\n      console.error(err);\n    }\n  }\n  setArray(notes);\n}\n\nfunction updateLocalStorage() {\n  localStorage.setItem('notes', JSON.stringify(getCurrentArray()));\n}\n\nfunction makeNotesList() {\n  return getCurrentArray().map((note) => note.title);\n}\n\nfunction createNote(title, body) {\n  const titleVal = removeWhiteSpace(title);\n  const bodyVal = removeWhiteSpace(body);\n\n  if (!isValidInput(titleVal, bodyVal)) {\n    return 'Both body and title are required';\n  }\n  if (!isUniqueNote(titleVal)) {\n    return `Note with title '${titleVal}' already exists`;\n  }\n\n  const newNote = {\n    title: titleVal,\n    body: bodyVal,\n  };\n\n  addToArray(newNote);\n  updateLocalStorage();\n\n  return newNote;\n}\n\nfunction deleteNote(title) {\n  const note = getNote(title);\n\n  if (note) {\n    deleteFromArray(getCurrentArray().indexOf(note));\n    updateLocalStorage();\n    console.log('Note was deleted');\n\n    return true;\n  }\n  console.log('Couldn\\'t delete note');\n\n  return false;\n}\n\nfunction readNote(title) {\n  const note = getNote(title);\n\n  return note ? note.body : '';\n}\n\nfunction findNotes(title) {\n  const filteredArray = getCurrentArray().filter((item) => (item.title.toLowerCase().includes(title)));\n  if (filteredArray.length > 0) {\n    console.log(`${filteredArray.length} notes were found`);\n\n    return true;\n  }\n  console.log('No notes were found');\n\n  return false;\n}\n\n// input validation\nfunction removeWhiteSpace(val) {\n  const regex = new RegExp(/\\s{2,}/, 'g');\n\n  return val.replace(regex, ' ').trim();\n}\n\nfunction isValidInput(title, body) {\n  return !!title && !!body;\n}\n\nfunction isUniqueNote(title) {\n  return !getNote(title);\n}\n\nmodule.exports = {\n  getCurrentArray,\n  getNoteArr,\n  createNote,\n  deleteNote,\n  findNotes,\n  makeNotesList,\n  readNote,\n};\n\n\n//# sourceURL=webpack:///./notes/src/notes.js?");

/***/ })

/******/ });