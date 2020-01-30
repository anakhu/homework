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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hometask-7/weather/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hometask-7/weather/main.js":
/*!************************************!*\
  !*** ./hometask-7/weather/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./hometask-7/weather/utils.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./hometask-7/weather/ui.js\");\n\n\n\nfunction initApp() {\n  const ui = new _ui_js__WEBPACK_IMPORTED_MODULE_1__[\"UI\"]();\n  const app = new _ui_js__WEBPACK_IMPORTED_MODULE_1__[\"WeatherApp\"](\n    ui.renderWeatherTemplate,\n    ui.displyWeatherOutputField,\n    ui.displayMessage,\n    ui.spinner,\n  );\n\n  ui.locationForm.addEventListener('submit', (e) => {\n    ui.clearWeatherOutputField();\n    e.preventDefault();\n\n    const inputValues = ui.getFormData();\n    const data = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"buildRequestData\"])(inputValues);\n\n    const url = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"buildUrl\"])(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_CONFIG\"],\n      data,\n    );\n\n    ui.spinner.style.display = 'block';\n    app.getWeather(url);\n  });\n\n  ui.hourRangeInput.addEventListener('change', (e) => {\n    const activeWeatherCard = document.querySelector('div.carousel-item-active');\n    activeWeatherCard.setAttribute('class', 'carousel-item');\n    const currentWeatherCard = document.getElementById(e.target.value);\n    currentWeatherCard.setAttribute('class', 'carousel-item-active');\n  });\n\n  ui.prevHourHandle.addEventListener('click', (e) => {\n    const activeWeatherCard = document.querySelector('div.carousel-item-active');\n    const prevWeatherCard = document.getElementById(`${(+activeWeatherCard.id - 1)}`);\n    if (prevWeatherCard) {\n      prevWeatherCard.setAttribute('class', 'carousel-item-active');\n      activeWeatherCard.setAttribute('class', 'carousel-item');\n    }\n  });\n\n  ui.nextHourHandle.addEventListener('click', (e) => {\n    const activeWeatherCard = document.querySelector('div.carousel-item-active');\n    const nextWeatherCard = document.getElementById(`${(+activeWeatherCard.id + 1)}`);\n    if (nextWeatherCard) {\n      nextWeatherCard.setAttribute('class', 'carousel-item-active');\n      activeWeatherCard.setAttribute('class', 'carousel-item');\n    }\n  });\n}\n\n\ninitApp();\n\n\n//# sourceURL=webpack:///./hometask-7/weather/main.js?");

/***/ }),

/***/ "./hometask-7/weather/ui.js":
/*!**********************************!*\
  !*** ./hometask-7/weather/ui.js ***!
  \**********************************/
/*! exports provided: UI, WeatherApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UI\", function() { return UI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeatherApp\", function() { return WeatherApp; });\nfunction UI() {\n  this.locationForm = document.getElementById('geoposition-form');\n  this.body = document.getElementById('body');\n  this.prevHourHandle = document.querySelector('.carousel-control-prev');\n  this.nextHourHandle = document.querySelector('.carousel-control-next');\n  this.hourRangeInput = document.getElementById('range-input');\n  this.weatherOutput = document.getElementById('weather-output');\n  this.carousel = document.getElementById('carouselExampleControls');\n  this.weatherOutputField = document.getElementById('weather-output-field');\n  this.message = document.getElementById('message');\n  this.spinner = document.getElementById('spinner');\n\n  this.getFormData = () => {\n    const latitude = document.getElementById('latitude').value;\n    const longitude = document.getElementById('longitude').value;\n\n    return {\n      latitude,\n      longitude,\n    };\n  };\n\n  this.displayMessage = (content, status) => {\n    this.message.textContent = content;\n    const messageColor = status ? 'text-success text-center' : 'text-danger text-center';\n    this.message.setAttribute('class', messageColor);\n  };\n\n  this.displyWeatherOutputField = () => {\n    this.weatherOutputField.style.display = 'block';\n  };\n\n  this.clearWeatherOutputField = () => {\n    this.weatherOutput.textContent = '';\n    this.weatherOutputField.style.display = 'none';\n  };\n\n  this.renderWeatherTemplate = ({ hourly, timezone }) => {\n    hourly.data.forEach((item, index) => {\n      const card = document.createElement('div');\n      card.setAttribute('id', index);\n      if (index === 0) {\n        card.setAttribute('class', 'carousel-item-active');\n      } else {\n        card.setAttribute('class', 'carousel-item');\n      }\n      card.insertAdjacentHTML('beforeend', `<h3><strong>Weather in ${timezone} tomorrow</strong></h3>`);\n      card.insertAdjacentHTML('beforeend', `<h3>${index}:00</h3>`);\n      card.insertAdjacentHTML('beforeend', `<h3>${item.summary}</h3>`);\n      card.insertAdjacentHTML('beforeend',\n        `<p>${item.temperature} &#176;F / ${Math.round((item.temperature - 32) * (5 / 9))} &#176;C </p>`);\n      card.insertAdjacentHTML('beforeend', `<p>Humidity: ${item.humidity}</p>`);\n      card.insertAdjacentHTML('beforeend', `<p>Windspeed: ${item.windSpeed}</p>`);\n      this.weatherOutput.appendChild(card);\n    });\n  };\n}\n\n\nfunction WeatherApp(\n  outputRenderer,\n  displayHandler,\n  messageDisplayHandler,\n  spinnerElement,\n) {\n  this.getWeather = (url) => {\n    fetch(url)\n      .then((response) => {\n        spinnerElement.style.display = 'none';\n        if (!response.ok) {\n          throw new Error('Fetch error');\n        }\n\n        return response.json();\n      })\n      .then((data) => outputRenderer(data))\n      .then(() => displayHandler())\n      .then(() => messageDisplayHandler('Successful fetch request!', 1))\n      .catch((error) => {\n        messageDisplayHandler('Couldn\\'t get the weather!', 0);\n        console.log(error.message);\n      });\n  };\n}\n\n\n//# sourceURL=webpack:///./hometask-7/weather/ui.js?");

/***/ }),

/***/ "./hometask-7/weather/utils.js":
/*!*************************************!*\
  !*** ./hometask-7/weather/utils.js ***!
  \*************************************/
/*! exports provided: REQUEST_CONFIG, buildUrl, buildRequestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_CONFIG\", function() { return REQUEST_CONFIG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildUrl\", function() { return buildUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildRequestData\", function() { return buildRequestData; });\n/* eslint-disable import/prefer-default-export */\nconst REQUEST_CONFIG = {\n  proxy: 'https://cors-anywhere.herokuapp.com',\n  api: 'https://api.darksky.net/forecast',\n  key: 'bc42ea325247cf608683d5cb0b6393fe',\n};\n\nfunction buildUrl({ proxy, api, key }, { latitude, longitude, tomorrow }) {\n  return `${proxy}/${api}/${key}/${latitude},${longitude},${tomorrow}`;\n}\n\nfunction buildRequestData({ latitude, longitude }) {\n  const tomorrow = getTomorrowSec();\n\n  return {\n    latitude,\n    longitude,\n    tomorrow,\n  };\n}\n\nfunction getTomorrowSec() {\n  const today = new Date();\n  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) / 1000;\n\n  return tomorrow;\n}\n\n\n//# sourceURL=webpack:///./hometask-7/weather/utils.js?");

/***/ })

/******/ });