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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./hometask-7/weather/utils.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./hometask-7/weather/ui.js");



function initApp() {
  const ui = new _ui_js__WEBPACK_IMPORTED_MODULE_1__["UI"]();
  const app = new _ui_js__WEBPACK_IMPORTED_MODULE_1__["WeatherApp"](
    ui.renderWeatherTemplate,
    ui.displyWeatherOutputField,
    ui.displayMessage,
    ui.spinner,
  );

  ui.locationForm.addEventListener('submit', (e) => {
    ui.clearWeatherOutputField();
    e.preventDefault();

    const inputValues = ui.getFormData();
    const data = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["buildRequestData"])(inputValues);

    const url = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["buildUrl"])(
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["REQUEST_CONFIG"],
      data,
    );

    ui.spinner.style.display = 'block';
    app.getWeather(url);
  });

  ui.hourRangeInput.addEventListener('change', (e) => {
    const activeWeatherCard = document.querySelector('div.carousel-item-active');
    activeWeatherCard.setAttribute('class', 'carousel-item');
    const currentWeatherCard = document.getElementById(e.target.value);
    currentWeatherCard.setAttribute('class', 'carousel-item-active');
  });

  ui.prevHourHandle.addEventListener('click', (e) => {
    const activeWeatherCard = document.querySelector('div.carousel-item-active');
    const prevWeatherCard = document.getElementById(`${(+activeWeatherCard.id - 1)}`);
    if (prevWeatherCard) {
      prevWeatherCard.setAttribute('class', 'carousel-item-active');
      activeWeatherCard.setAttribute('class', 'carousel-item');
    }
  });

  ui.nextHourHandle.addEventListener('click', (e) => {
    const activeWeatherCard = document.querySelector('div.carousel-item-active');
    const nextWeatherCard = document.getElementById(`${(+activeWeatherCard.id + 1)}`);
    if (nextWeatherCard) {
      nextWeatherCard.setAttribute('class', 'carousel-item-active');
      activeWeatherCard.setAttribute('class', 'carousel-item');
    }
  });
}

initApp();


/***/ }),

/***/ "./hometask-7/weather/ui.js":
/*!**********************************!*\
  !*** ./hometask-7/weather/ui.js ***!
  \**********************************/
/*! exports provided: UI, WeatherApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherApp", function() { return WeatherApp; });
function UI() {
  this.locationForm = document.getElementById('geoposition-form');
  this.body = document.getElementById('body');
  this.prevHourHandle = document.querySelector('.carousel-control-prev');
  this.nextHourHandle = document.querySelector('.carousel-control-next');
  this.hourRangeInput = document.getElementById('range-input');
  this.weatherOutput = document.getElementById('weather-output');
  this.carousel = document.getElementById('carouselExampleControls');
  this.weatherOutputField = document.getElementById('weather-output-field');
  this.message = document.getElementById('message');
  this.spinner = document.getElementById('spinner');

  this.getFormData = () => {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    return {
      latitude,
      longitude,
    };
  };

  this.displayMessage = (content, status) => {
    this.message.textContent = content;
    const messageColor = status ? 'text-success text-center' : 'text-danger text-center';
    this.message.setAttribute('class', messageColor);
  };

  this.displyWeatherOutputField = () => {
    this.weatherOutputField.style.display = 'block';
  };

  this.clearWeatherOutputField = () => {
    this.weatherOutput.textContent = '';
    this.weatherOutputField.style.display = 'none';
  };

  this.renderWeatherTemplate = ({ hourly, timezone }) => {
    hourly.data.forEach((item, index) => {
      const card = document.createElement('div');
      card.setAttribute('id', index);
      if (index === 0) {
        card.setAttribute('class', 'carousel-item-active');
      } else {
        card.setAttribute('class', 'carousel-item');
      }
      card.insertAdjacentHTML('beforeend', `<h3><strong>Weather in ${timezone} tomorrow</strong></h3>`);
      card.insertAdjacentHTML('beforeend', `<h3>${index}:00</h3>`);
      card.insertAdjacentHTML('beforeend', `<h3>${item.summary}</h3>`);
      card.insertAdjacentHTML('beforeend',
        `<p>${item.temperature} &#176;F / ${Math.round((item.temperature - 32) * (5 / 9))} &#176;C </p>`);
      card.insertAdjacentHTML('beforeend', `<p>Humidity: ${item.humidity}</p>`);
      card.insertAdjacentHTML('beforeend', `<p>Windspeed: ${item.windSpeed}</p>`);
      this.weatherOutput.appendChild(card);
    });
  };
}


function WeatherApp(
  outputRenderer,
  displayHandler,
  messageDisplayHandler,
  spinnerElement,
) {
  this.getWeather = (url) => {
    fetch(url)
      .then((response) => {
        spinnerElement.style.display = 'none';
        if (!response.ok) {
          throw new Error('Fetch error');
        }

        return response.json();
      })
      .then((data) => outputRenderer(data))
      .then(() => displayHandler())
      .then(() => messageDisplayHandler('Successful fetch request!', 1))
      .catch((error) => {
        messageDisplayHandler('Couldn\'t get the weather!', 0);
        console.log(error.message);
      });
  };
}


/***/ }),

/***/ "./hometask-7/weather/utils.js":
/*!*************************************!*\
  !*** ./hometask-7/weather/utils.js ***!
  \*************************************/
/*! exports provided: REQUEST_CONFIG, buildUrl, buildRequestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_CONFIG", function() { return REQUEST_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return buildUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildRequestData", function() { return buildRequestData; });
const REQUEST_CONFIG = {
  proxy: 'https://cors-anywhere.herokuapp.com',
  api: 'https://api.darksky.net/forecast',
  key: 'bc42ea325247cf608683d5cb0b6393fe',
};

function buildUrl({ proxy, api, key }, { latitude, longitude, tomorrow }) {
  return `${proxy}/${api}/${key}/${latitude},${longitude},${tomorrow}`;
}

function buildRequestData({ latitude, longitude }) {
  const tomorrow = getTomorrowSec();

  return {
    latitude,
    longitude,
    tomorrow,
  };
}

function getTomorrowSec() {
  const today = new Date();
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) / 1000;

  return tomorrow;
}




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stNy93ZWF0aGVyL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stNy93ZWF0aGVyL3VpLmpzIiwid2VicGFjazovLy8uL2hvbWV0YXNrLTcvd2VhdGhlci91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUF3RTtBQUMvQjs7QUFFekM7QUFDQSxpQkFBaUIseUNBQUU7QUFDbkIsa0JBQWtCLGlEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtFQUFnQjs7QUFFakMsZ0JBQWdCLDBEQUFRO0FBQ3hCLE1BQU0sd0RBQWM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsdURBQXVELDRCQUE0QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHVEQUF1RCw0QkFBNEI7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHFFQUFxRSxTQUFTO0FBQzlFLGtEQUFrRCxNQUFNO0FBQ3hELGtEQUFrRCxhQUFhO0FBQy9EO0FBQ0EsY0FBYyxpQkFBaUIsT0FBTyxNQUFNLDhDQUE4QyxPQUFPO0FBQ2pHLDJEQUEyRCxjQUFjO0FBQ3pFLDREQUE0RCxlQUFlO0FBQzNFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCLEdBQUcsZ0NBQWdDO0FBQ3hFLFlBQVksTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLFVBQVUsR0FBRyxTQUFTO0FBQ3JFOztBQUVBLDJCQUEyQixzQkFBc0I7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVzRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2hvbWV0YXNrLTcvd2VhdGhlci9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IHsgUkVRVUVTVF9DT05GSUcsIGJ1aWxkVXJsLCBidWlsZFJlcXVlc3REYXRhIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBVSSwgV2VhdGhlckFwcCB9IGZyb20gJy4vdWkuanMnO1xuXG5mdW5jdGlvbiBpbml0QXBwKCkge1xuICBjb25zdCB1aSA9IG5ldyBVSSgpO1xuICBjb25zdCBhcHAgPSBuZXcgV2VhdGhlckFwcChcbiAgICB1aS5yZW5kZXJXZWF0aGVyVGVtcGxhdGUsXG4gICAgdWkuZGlzcGx5V2VhdGhlck91dHB1dEZpZWxkLFxuICAgIHVpLmRpc3BsYXlNZXNzYWdlLFxuICAgIHVpLnNwaW5uZXIsXG4gICk7XG5cbiAgdWkubG9jYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgdWkuY2xlYXJXZWF0aGVyT3V0cHV0RmllbGQoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHVpLmdldEZvcm1EYXRhKCk7XG4gICAgY29uc3QgZGF0YSA9IGJ1aWxkUmVxdWVzdERhdGEoaW5wdXRWYWx1ZXMpO1xuXG4gICAgY29uc3QgdXJsID0gYnVpbGRVcmwoXG4gICAgICBSRVFVRVNUX0NPTkZJRyxcbiAgICAgIGRhdGEsXG4gICAgKTtcblxuICAgIHVpLnNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYXBwLmdldFdlYXRoZXIodXJsKTtcbiAgfSk7XG5cbiAgdWkuaG91clJhbmdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBjb25zdCBhY3RpdmVXZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jYXJvdXNlbC1pdGVtLWFjdGl2ZScpO1xuICAgIGFjdGl2ZVdlYXRoZXJDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbScpO1xuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjdXJyZW50V2VhdGhlckNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJvdXNlbC1pdGVtLWFjdGl2ZScpO1xuICB9KTtcblxuICB1aS5wcmV2SG91ckhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlV2VhdGhlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2Fyb3VzZWwtaXRlbS1hY3RpdmUnKTtcbiAgICBjb25zdCBwcmV2V2VhdGhlckNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsoK2FjdGl2ZVdlYXRoZXJDYXJkLmlkIC0gMSl9YCk7XG4gICAgaWYgKHByZXZXZWF0aGVyQ2FyZCkge1xuICAgICAgcHJldldlYXRoZXJDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbS1hY3RpdmUnKTtcbiAgICAgIGFjdGl2ZVdlYXRoZXJDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2Fyb3VzZWwtaXRlbScpO1xuICAgIH1cbiAgfSk7XG5cbiAgdWkubmV4dEhvdXJIYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVdlYXRoZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNhcm91c2VsLWl0ZW0tYWN0aXZlJyk7XG4gICAgY29uc3QgbmV4dFdlYXRoZXJDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7KCthY3RpdmVXZWF0aGVyQ2FyZC5pZCArIDEpfWApO1xuICAgIGlmIChuZXh0V2VhdGhlckNhcmQpIHtcbiAgICAgIG5leHRXZWF0aGVyQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0tYWN0aXZlJyk7XG4gICAgICBhY3RpdmVXZWF0aGVyQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0nKTtcbiAgICB9XG4gIH0pO1xufVxuXG5pbml0QXBwKCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gVUkoKSB7XG4gIHRoaXMubG9jYXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlb3Bvc2l0aW9uLWZvcm0nKTtcbiAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcbiAgdGhpcy5wcmV2SG91ckhhbmRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250cm9sLXByZXYnKTtcbiAgdGhpcy5uZXh0SG91ckhhbmRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250cm9sLW5leHQnKTtcbiAgdGhpcy5ob3VyUmFuZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZS1pbnB1dCcpO1xuICB0aGlzLndlYXRoZXJPdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1vdXRwdXQnKTtcbiAgdGhpcy5jYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbEV4YW1wbGVDb250cm9scycpO1xuICB0aGlzLndlYXRoZXJPdXRwdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLW91dHB1dC1maWVsZCcpO1xuICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xuICB0aGlzLnNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpO1xuXG4gIHRoaXMuZ2V0Rm9ybURhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF0aXR1ZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0aXR1ZGUnKS52YWx1ZTtcbiAgICBjb25zdCBsb25naXR1ZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9uZ2l0dWRlJykudmFsdWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGUsXG4gICAgfTtcbiAgfTtcblxuICB0aGlzLmRpc3BsYXlNZXNzYWdlID0gKGNvbnRlbnQsIHN0YXR1cykgPT4ge1xuICAgIHRoaXMubWVzc2FnZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgY29uc3QgbWVzc2FnZUNvbG9yID0gc3RhdHVzID8gJ3RleHQtc3VjY2VzcyB0ZXh0LWNlbnRlcicgOiAndGV4dC1kYW5nZXIgdGV4dC1jZW50ZXInO1xuICAgIHRoaXMubWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbWVzc2FnZUNvbG9yKTtcbiAgfTtcblxuICB0aGlzLmRpc3BseVdlYXRoZXJPdXRwdXRGaWVsZCA9ICgpID0+IHtcbiAgICB0aGlzLndlYXRoZXJPdXRwdXRGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICB0aGlzLmNsZWFyV2VhdGhlck91dHB1dEZpZWxkID0gKCkgPT4ge1xuICAgIHRoaXMud2VhdGhlck91dHB1dC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRoaXMud2VhdGhlck91dHB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgdGhpcy5yZW5kZXJXZWF0aGVyVGVtcGxhdGUgPSAoeyBob3VybHksIHRpbWV6b25lIH0pID0+IHtcbiAgICBob3VybHkuZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5kZXgpO1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJvdXNlbC1pdGVtLWFjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhcm91c2VsLWl0ZW0nKTtcbiAgICAgIH1cbiAgICAgIGNhcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGgzPjxzdHJvbmc+V2VhdGhlciBpbiAke3RpbWV6b25lfSB0b21vcnJvdzwvc3Ryb25nPjwvaDM+YCk7XG4gICAgICBjYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxoMz4ke2luZGV4fTowMDwvaDM+YCk7XG4gICAgICBjYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxoMz4ke2l0ZW0uc3VtbWFyeX08L2gzPmApO1xuICAgICAgY2FyZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICAgIGA8cD4ke2l0ZW0udGVtcGVyYXR1cmV9ICYjMTc2O0YgLyAke01hdGgucm91bmQoKGl0ZW0udGVtcGVyYXR1cmUgLSAzMikgKiAoNSAvIDkpKX0gJiMxNzY7QyA8L3A+YCk7XG4gICAgICBjYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxwPkh1bWlkaXR5OiAke2l0ZW0uaHVtaWRpdHl9PC9wPmApO1xuICAgICAgY2FyZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8cD5XaW5kc3BlZWQ6ICR7aXRlbS53aW5kU3BlZWR9PC9wPmApO1xuICAgICAgdGhpcy53ZWF0aGVyT3V0cHV0LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBXZWF0aGVyQXBwKFxuICBvdXRwdXRSZW5kZXJlcixcbiAgZGlzcGxheUhhbmRsZXIsXG4gIG1lc3NhZ2VEaXNwbGF5SGFuZGxlcixcbiAgc3Bpbm5lckVsZW1lbnQsXG4pIHtcbiAgdGhpcy5nZXRXZWF0aGVyID0gKHVybCkgPT4ge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzcGlubmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGZXRjaCBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4gb3V0cHV0UmVuZGVyZXIoZGF0YSkpXG4gICAgICAudGhlbigoKSA9PiBkaXNwbGF5SGFuZGxlcigpKVxuICAgICAgLnRoZW4oKCkgPT4gbWVzc2FnZURpc3BsYXlIYW5kbGVyKCdTdWNjZXNzZnVsIGZldGNoIHJlcXVlc3QhJywgMSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIG1lc3NhZ2VEaXNwbGF5SGFuZGxlcignQ291bGRuXFwndCBnZXQgdGhlIHdlYXRoZXIhJywgMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG59XG4iLCJjb25zdCBSRVFVRVNUX0NPTkZJRyA9IHtcbiAgcHJveHk6ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbScsXG4gIGFwaTogJ2h0dHBzOi8vYXBpLmRhcmtza3kubmV0L2ZvcmVjYXN0JyxcbiAga2V5OiAnYmM0MmVhMzI1MjQ3Y2Y2MDg2ODNkNWNiMGI2MzkzZmUnLFxufTtcblxuZnVuY3Rpb24gYnVpbGRVcmwoeyBwcm94eSwgYXBpLCBrZXkgfSwgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlLCB0b21vcnJvdyB9KSB7XG4gIHJldHVybiBgJHtwcm94eX0vJHthcGl9LyR7a2V5fS8ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX0sJHt0b21vcnJvd31gO1xufVxuXG5mdW5jdGlvbiBidWlsZFJlcXVlc3REYXRhKHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9KSB7XG4gIGNvbnN0IHRvbW9ycm93ID0gZ2V0VG9tb3Jyb3dTZWMoKTtcblxuICByZXR1cm4ge1xuICAgIGxhdGl0dWRlLFxuICAgIGxvbmdpdHVkZSxcbiAgICB0b21vcnJvdyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9tb3Jyb3dTZWMoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgKyAxKSAvIDEwMDA7XG5cbiAgcmV0dXJuIHRvbW9ycm93O1xufVxuXG5leHBvcnQgeyBSRVFVRVNUX0NPTkZJRywgYnVpbGRVcmwsIGJ1aWxkUmVxdWVzdERhdGEgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=