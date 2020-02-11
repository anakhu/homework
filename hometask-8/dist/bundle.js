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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hometask-8/dist/assets/styles.css":
/*!*******************************************!*\
  !*** ./hometask-8/dist/assets/styles.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./hometask-8/dist/assets/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./hometask-8/src/app.js":
/*!*******************************!*\
  !*** ./hometask-8/src/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routerHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routerHistory */ "./hometask-8/src/routerHistory.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./hometask-8/src/render.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ "./hometask-8/src/config.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.js */ "./hometask-8/src/search.js");
/* harmony import */ var _dist_assets_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/assets/styles.css */ "./hometask-8/dist/assets/styles.css");
/* harmony import */ var _dist_assets_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dist_assets_styles_css__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */






var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.news = [];
    this.search = new _search_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.router = new _routerHistory__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.render = new _render_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.router, this.search);
    this.search.subscribe(this.onSearchChange.bind(this));
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      fetch("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].api, "/news"), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this.news = data;
      }).then(function () {
        _this.inintRouter();

        _this.render.initMainPage(_this.news);

        _this.render.initSinglePage();

        _this.router.renderRouteContent(window.location.pathname);

        _this.search.getSearchInitialState();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "inintRouter",
    value: function inintRouter() {
      this.router.createRoute(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].routes.homepage, this.render.generateHomePage.bind(this.render));
      this.router.createRoute(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].routes.aboutPage, this.render.generateSecondaryPage.bind(this.render, 'about'));
      this.router.createRoute(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].routes.contactPage, this.render.generateSecondaryPage.bind(this.render, 'contact'));
      this.router.createRoute(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].routes.errorPage, this.render.generateSecondaryPage.bind(this.render, 'error'));
      this.router.createRoute(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].routes.newsSinglePage, this.render.generateSinglePage.bind(this.render, this.news));
      this.router.createRoute(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].routes.searchPage, this.render.displayFilteredContent.bind(this.render));
    }
  }, {
    key: "onSearchChange",
    value: function onSearchChange(data) {
      window.history.pushState(null, null, data);
      this.router.renderRouteContent(decodeURI(window.location.pathname));
    }
  }]);

  return App;
}();

var app = new App();
app.init();

/***/ }),

/***/ "./hometask-8/src/components/errorPage.js":
/*!************************************************!*\
  !*** ./hometask-8/src/components/errorPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var errorLink = document.getElementById('error-link');

function initErrorLink(render) {
  errorLink.addEventListener('click', function () {
    window.history.pushState(null, null, '/');
    render(window.location.pathname);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (initErrorLink);

/***/ }),

/***/ "./hometask-8/src/components/homePageLayout.js":
/*!*****************************************************!*\
  !*** ./hometask-8/src/components/homePageLayout.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./hometask-8/src/config.js");

var appContainer = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.mainAppContainer);
var templateScript = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.newsTemplate).innerHTML;

function initHomePageLayout(render, data) {
  var mainNewsContainer = document.createElement('div');
  mainNewsContainer.setAttribute('class', 'main-container');
  var template = Handlebars.compile(templateScript);
  mainNewsContainer.innerHTML = template(data);
  appContainer.appendChild(mainNewsContainer);
  mainNewsContainer.querySelectorAll(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.newsCard).forEach(function (card) {
    card.addEventListener('click', function () {
      var index = card.dataset.index;
      window.history.pushState(null, null, "/news/".concat(index));
      render(window.location.pathname);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (initHomePageLayout);

/***/ }),

/***/ "./hometask-8/src/components/modal.js":
/*!********************************************!*\
  !*** ./hometask-8/src/components/modal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./hometask-8/src/config.js");

var appContainer = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.mainAppContainer);
var templateScript = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.singleNewsTemplate).innerHTML;

function resetBodyOverflow() {
  var body = document.getElementsByTagName('body');

  if (body[0]) {
    body[0].style.overflow = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].styles.auto;
  }
}

function initModal(render) {
  function redirect() {
    resetBodyOverflow();
    window.history.pushState(null, null, '/');
    render(window.location.pathname);
  }

  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-overlay')) {
      redirect();
    }
  });
  window.addEventListener('keydown', function (e) {
    if (e.target.classList.contains('modal') && e.key === 'Escape') {
      redirect();
    }
  });
  var emptyModalContainer = document.createElement('div');
  emptyModalContainer.setAttribute('class', 'news-modal');
  var template = Handlebars.compile(templateScript);
  emptyModalContainer.innerHTML = template({
    news: {
      title: '',
      date: '',
      content: '',
      image: null
    }
  });
  appContainer.appendChild(emptyModalContainer);
  var modal = document.getElementById('modal');
  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-close')) {
      redirect();
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (initModal);

/***/ }),

/***/ "./hometask-8/src/components/navbar.js":
/*!*********************************************!*\
  !*** ./hometask-8/src/components/navbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./hometask-8/src/config.js");

var aboutLink = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.aboutLink);
var contactLink = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.contactLink);
var homePageLink = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.homepageLink);

function initNavbar(render) {
  aboutLink.addEventListener('click', function () {
    window.history.pushState(null, null, '/about');
    render(window.location.pathname);
  });
  contactLink.addEventListener('click', function () {
    window.history.pushState(null, null, '/contact');
    render(window.location.pathname);
  });
  homePageLink.addEventListener('click', function () {
    window.history.pushState(null, null, '/');
    render(window.location.pathname);
  });
  aboutLink.style.display = 'block';
  homePageLink.style.display = 'block';
  contactLink.style.display = 'block';
}

/* harmony default export */ __webpack_exports__["default"] = (initNavbar);

/***/ }),

/***/ "./hometask-8/src/config.js":
/*!**********************************!*\
  !*** ./hometask-8/src/config.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CONFIG = {
  api: 'http://localhost:3000',
  routes: {
    homepage: '',
    aboutPage: 'about',
    contactPage: 'contact',
    newsSinglePage: 'news',
    errorPage: '404',
    searchPage: 'search'
  },
  selectors: {
    mainAppContainer: '.app-container',
    allNewsCardsContainer: '.main-container',
    newsCard: '.news-card',
    searchForm: '.search-form',
    newsTemplate: '#news-template',
    singleNewsTemplate: '#single-news-template',
    aboutLink: '.about',
    contactLink: '.contact',
    homepageLink: '.brand-logo'
  },
  styles: {
    hide: 'none',
    show: 'block',
    dim: '0.1',
    brighten: '1',
    auto: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);

/***/ }),

/***/ "./hometask-8/src/observable.js":
/*!**************************************!*\
  !*** ./hometask-8/src/observable.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observable =
/*#__PURE__*/
function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.subscribers = [];
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.subscribers.push(fn);
    }
  }, {
    key: "next",
    value: function next(data) {
      this.subscribers.forEach(function (subscribedFn) {
        subscribedFn(data);
      });
    }
  }]);

  return Observable;
}();

/* harmony default export */ __webpack_exports__["default"] = (Observable);

/***/ }),

/***/ "./hometask-8/src/render.js":
/*!**********************************!*\
  !*** ./hometask-8/src/render.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./hometask-8/src/config.js");
/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar.js */ "./hometask-8/src/components/navbar.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal.js */ "./hometask-8/src/components/modal.js");
/* harmony import */ var _components_homePageLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/homePageLayout.js */ "./hometask-8/src/components/homePageLayout.js");
/* harmony import */ var _components_errorPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/errorPage.js */ "./hometask-8/src/components/errorPage.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-undef */

/* eslint-disable class-methods-use-this */






var Render =
/*#__PURE__*/
function () {
  function Render(router, search) {
    _classCallCheck(this, Render);

    this.router = router;
    this.search = search;
  }

  _createClass(Render, [{
    key: "initMainPage",
    value: function initMainPage(data) {
      _components_homePageLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"].call(this.render, this.router.renderRouteContent.bind(this.router), data);
      _components_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this.router, this.router.renderRouteContent.bind(this.router));
      _components_errorPage_js__WEBPACK_IMPORTED_MODULE_4__["default"].call(this.router, this.router.renderRouteContent.bind(this.router));
      var searchBar = document.querySelector('.search-form');
      searchBar.style.display = 'block';
    }
  }, {
    key: "generateHomePage",
    value: function generateHomePage() {
      var appContainer = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.mainAppContainer);
      Array.from(appContainer.children).forEach(function (item) {
        if (!item.classList.contains('main-container')) {
          item.style.display = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].styles.hide;
        } else {
          item.style.display = 'flex';
        }
      });

      _toConsumableArray(document.querySelectorAll('.news-card')).forEach(function (news) {
        news.style.opacity = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].styles.brighten;
      });

      var searchBar = document.querySelector('.search-form');
      searchBar.style.display = 'block';
      this.getFilterValue();
    }
  }, {
    key: "getFilterValue",
    value: function getFilterValue() {
      var currentFilterValue = this.search.searchField.value;

      if (currentFilterValue) {
        window.history.pushState(null, null, "/search/value=".concat(currentFilterValue));
        this.router.renderRouteContent(window.location.pathname);
      }
    }
  }, {
    key: "displayFilteredContent",
    value: function displayFilteredContent() {
      var currentSearchValue = window.location.pathname.split('/search/value=')[1];
      var sanitezedSearchValue = decodeURI(currentSearchValue);
      var allNews = document.querySelectorAll('.news-card');
      allNews.forEach(function (news) {
        var titleValue = news.querySelector('span').innerHTML;

        if (!titleValue.toLowerCase().includes(sanitezedSearchValue.toLowerCase())) {
          news.style.opacity = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].styles.dim;
        } else {
          news.style.opacity = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].styles.brighten;
        }
      });
    }
  }, {
    key: "initSinglePage",
    value: function initSinglePage() {
      _components_modal_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(this.router, this.router.renderRouteContent.bind(this.router));
    }
  }, {
    key: "generateSinglePage",
    value: function generateSinglePage(news) {
      var id = window.location.pathname.split('news/')[1];
      var newsEnrty = news.find(function (item) {
        return item.id === Number(id);
      });

      if (newsEnrty) {
        var modalContainer = document.querySelector('.news-modal');
        modalContainer.style.display = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].styles.show;
        var modal = document.getElementById('modal');
        document.querySelector('.modal-content h4').textContent = newsEnrty.title;
        document.querySelector('.modal-content h5').textContent = newsEnrty.date;
        document.querySelector('.modal-content img').setAttribute('src', newsEnrty.image);
        document.querySelector('.modal-content p').textContent = newsEnrty.content;
        var instance = M.Modal.init(modal);
        instance.open();
      }
    }
  }, {
    key: "generateSecondaryPage",
    value: function generateSecondaryPage(routeName) {
      var appContainer = document.querySelector(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.mainAppContainer);
      Array.from(appContainer.children).forEach(function (elem) {
        if (!elem.classList.contains(routeName)) {
          elem.style.display = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].styles.hide;
        } else {
          elem.style.display = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].styles.show;
        }
      });
    }
  }]);

  return Render;
}();

/* harmony default export */ __webpack_exports__["default"] = (Render);

/***/ }),

/***/ "./hometask-8/src/routerHistory.js":
/*!*****************************************!*\
  !*** ./hometask-8/src/routerHistory.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./hometask-8/src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable array-callback-return */

/* eslint-disable consistent-return */

/* eslint-disable class-methods-use-this */


var HistoryRouter =
/*#__PURE__*/
function () {
  function HistoryRouter(search) {
    var _this = this;

    _classCallCheck(this, HistoryRouter);

    this.search = search;
    this.routes = {
      404: function _() {
        console.log('Not found');
      }
    };
    window.addEventListener('popstate', function () {
      _this.renderRouteContent(window.location.pathname);
    });
  }

  _createClass(HistoryRouter, [{
    key: "createRoute",
    value: function createRoute(url, callback) {
      this.routes[url] = callback;
    }
  }, {
    key: "renderRouteContent",
    value: function renderRouteContent(url) {
      var currentUrl = url.split('/')[1];

      if (!currentUrl) {
        currentUrl = '';
      }

      if (Object.prototype.hasOwnProperty.call(this.routes, currentUrl)) {
        this.routes[currentUrl]();
      } else {
        this.routes[404]();
      }
    }
  }]);

  return HistoryRouter;
}();

/* harmony default export */ __webpack_exports__["default"] = (HistoryRouter);

/***/ }),

/***/ "./hometask-8/src/search.js":
/*!**********************************!*\
  !*** ./hometask-8/src/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable.js */ "./hometask-8/src/observable.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Search =
/*#__PURE__*/
function () {
  function Search() {
    _classCallCheck(this, Search);

    this.searchField = document.getElementById('search');
    this.observable = new _observable_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.currentState = '';
    this.init();
    this.getSearchInitialState();
  }

  _createClass(Search, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.observable.subscribe(fn);
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.searchField.addEventListener('keyup', function () {
        if (!_this.searchField.value.trim()) {
          _this.currentState = '';

          _this.observable.next('/');

          return;
        }

        if (_this.searchField.value) {
          _this.currentState = "/search/value=".concat(_this.searchField.value);

          _this.observable.next(_this.currentState);
        }
      });
    }
  }, {
    key: "getSearchInitialState",
    value: function getSearchInitialState() {
      if (window.location.pathname.includes('/search/')) {
        this.currentState = "/".concat(window.location.pathname.split('/')[1].trim());
        this.searchField.value = decodeURI(window.location.pathname.split('/search/value=')[1].trim());
      }
    }
  }]);

  return Search;
}();

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./hometask-8/dist/assets/styles.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./hometask-8/dist/assets/styles.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  --headers-color: #afb42b; \n}\n\nhtml {\n  font-family: 'Arimo', sans-serif;\n}\n\nbody {\n  margin: 0 auto;\n}\n\nmain {\n  max-width: 95%;\n  margin: 0px auto;\n}\n\nlabel {\n  font-size: 1.5rem;\n}\n\n.all-news {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.news-card {\n  margin: 0px auto;\n  padding: 0px;\n}\n\n/* card-style */\n.card {\n  cursor: pointer;\n  min-width: 250px;\n}\n\n.card img {\n  max-height: 130px;\n  opacity: 0.8;\n}\n\n.card .card-title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.card h5 {\n  font-weight: bold;\n}\n\n.card .card-content {\n  text-align: justify;\n}\n\n.modal {\n  width: 80%;\n  margin: 0px auto;\n  height: 100vh;\n}\n\n/* modal-style */\n\n.modal-content {\n  text-align: justify;\n  font-size: 2rem;\n}\n\n.modal-content img {\n  width: 100%;\n}\n\n.modal-close {\n  background: var(--headers-color);\n}\n\n#modal1 img {\n  width: 100%;\n  margin: 0 auto;\n  display: block;\n}\n\n /* error page style */\n.error {\n  text-align: center;\n  margin: 0px auto;\n  max-width: 80%;\n}\n\n.error img {\n  width: 100px;\n  height: 100px;\n}\n\n.error h3 {\n  font-weight: bold;\n}\n\n#error-link {\n  cursor: pointer;\n}\n\n/* about page style */\n\n.about, .contact {\n  text-align: center;\n  margin: 0px auto;\n  max-width: 80%;\n}\n\n.input-field{\n  height: 30px;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.news-card {\n  flex: 0 0 23%;\n  margin: 5px;\n  align-self: stretch;\n  display: flex;\n}\n\n\n/* nav style */\n\n.nav-link {\n  cursor: pointer;\n  padding: 0px 10px;\n  letter-spacing: 5px;\n}\n\n.nav-link:hover {\n  background-color: #3e2723;\n}\n\n.brand-logo {\n  cursor: pointer;\n  margin-top: 10px;\n  letter-spacing: 10px;\n}\n\n.nav-wrapper {\n  padding: 0px;\n  font-weight: bold;\n}\n\n\n@media only screen and (max-width: 800px) {\n  .brand-logo {\n    letter-spacing: 0px;\n    margin-top: -1000000px;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!***********************************!*\
  !*** (webpack)/hot/dev-server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals window __webpack_hash__ */
if (false) { var hotEmitter, check, log, upToDate, lastHash; } else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}


/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi webpack/hot/dev-server ./hometask-8/src/app.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack/hot/dev-server */"./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__(/*! ./hometask-8/src/app.js */"./hometask-8/src/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9kaXN0L2Fzc2V0cy9zdHlsZXMuY3NzP2ZlMmMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2hvbWV0YXNrLTgvc3JjL2NvbXBvbmVudHMvZXJyb3JQYWdlLmpzIiwid2VicGFjazovLy8uL2hvbWV0YXNrLTgvc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9zcmMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9ob21ldGFzay04L3NyYy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9ob21ldGFzay04L3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ob21ldGFzay04L3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9zcmMvcm91dGVySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ob21ldGFzay04L3NyYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9kaXN0L2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvaG90L2Rldi1zZXJ2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwibmV3cyIsInNlYXJjaCIsIlNlYXJjaCIsInJvdXRlciIsIkhpc3RvcnlSb3V0ZXIiLCJyZW5kZXIiLCJSZW5kZXIiLCJzdWJzY3JpYmUiLCJvblNlYXJjaENoYW5nZSIsImJpbmQiLCJmZXRjaCIsIkNPTkZJRyIsImFwaSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJpbmludFJvdXRlciIsImluaXRNYWluUGFnZSIsImluaXRTaW5nbGVQYWdlIiwicmVuZGVyUm91dGVDb250ZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImdldFNlYXJjaEluaXRpYWxTdGF0ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVJvdXRlIiwicm91dGVzIiwiaG9tZXBhZ2UiLCJnZW5lcmF0ZUhvbWVQYWdlIiwiYWJvdXRQYWdlIiwiZ2VuZXJhdGVTZWNvbmRhcnlQYWdlIiwiY29udGFjdFBhZ2UiLCJlcnJvclBhZ2UiLCJuZXdzU2luZ2xlUGFnZSIsImdlbmVyYXRlU2luZ2xlUGFnZSIsInNlYXJjaFBhZ2UiLCJkaXNwbGF5RmlsdGVyZWRDb250ZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRlY29kZVVSSSIsImFwcCIsImluaXQiLCJlcnJvckxpbmsiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdEVycm9yTGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3JzIiwibWFpbkFwcENvbnRhaW5lciIsInRlbXBsYXRlU2NyaXB0IiwibmV3c1RlbXBsYXRlIiwiaW5uZXJIVE1MIiwiaW5pdEhvbWVQYWdlTGF5b3V0IiwibWFpbk5ld3NDb250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzIiwiY29tcGlsZSIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsIm5ld3NDYXJkIiwiZm9yRWFjaCIsImNhcmQiLCJpbmRleCIsImRhdGFzZXQiLCJzaW5nbGVOZXdzVGVtcGxhdGUiLCJyZXNldEJvZHlPdmVyZmxvdyIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwib3ZlcmZsb3ciLCJzdHlsZXMiLCJhdXRvIiwiaW5pdE1vZGFsIiwicmVkaXJlY3QiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJrZXkiLCJlbXB0eU1vZGFsQ29udGFpbmVyIiwidGl0bGUiLCJkYXRlIiwiY29udGVudCIsImltYWdlIiwibW9kYWwiLCJhYm91dExpbmsiLCJjb250YWN0TGluayIsImhvbWVQYWdlTGluayIsImhvbWVwYWdlTGluayIsImluaXROYXZiYXIiLCJkaXNwbGF5IiwiYWxsTmV3c0NhcmRzQ29udGFpbmVyIiwic2VhcmNoRm9ybSIsImhpZGUiLCJzaG93IiwiZGltIiwiYnJpZ2h0ZW4iLCJPYnNlcnZhYmxlIiwic3Vic2NyaWJlcnMiLCJmbiIsInB1c2giLCJzdWJzY3JpYmVkRm4iLCJjYWxsIiwic2VhcmNoQmFyIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJpdGVtIiwib3BhY2l0eSIsImdldEZpbHRlclZhbHVlIiwiY3VycmVudEZpbHRlclZhbHVlIiwic2VhcmNoRmllbGQiLCJ2YWx1ZSIsImN1cnJlbnRTZWFyY2hWYWx1ZSIsInNwbGl0Iiwic2FuaXRlemVkU2VhcmNoVmFsdWUiLCJhbGxOZXdzIiwidGl0bGVWYWx1ZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJpZCIsIm5ld3NFbnJ0eSIsImZpbmQiLCJOdW1iZXIiLCJtb2RhbENvbnRhaW5lciIsInRleHRDb250ZW50IiwiaW5zdGFuY2UiLCJNIiwiTW9kYWwiLCJvcGVuIiwicm91dGVOYW1lIiwiZWxlbSIsInVybCIsImNhbGxiYWNrIiwiY3VycmVudFVybCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5Iiwib2JzZXJ2YWJsZSIsImN1cnJlbnRTdGF0ZSIsInRyaW0iLCJuZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBVSxFQUFFLG1EQXFEZjtBQUNEO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IEhpc3RvcnlSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJIaXN0b3J5JztcbmltcG9ydCBSZW5kZXIgZnJvbSAnLi9yZW5kZXIuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZy5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLmpzJztcbmltcG9ydCAnLi4vZGlzdC9hc3NldHMvc3R5bGVzLmNzcyc7XG5cblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uZXdzID0gW107XG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKCk7XG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgSGlzdG9yeVJvdXRlcigpO1xuICAgIHRoaXMucmVuZGVyID0gbmV3IFJlbmRlcih0aGlzLnJvdXRlciwgdGhpcy5zZWFyY2gpO1xuICAgIHRoaXMuc2VhcmNoLnN1YnNjcmliZSh0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBmZXRjaChgJHtDT05GSUcuYXBpfS9uZXdzYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMubmV3cyA9IGRhdGE7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmluaW50Um91dGVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyLmluaXRNYWluUGFnZSh0aGlzLm5ld3MpO1xuICAgICAgICB0aGlzLnJlbmRlci5pbml0U2luZ2xlUGFnZSgpO1xuICAgICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgdGhpcy5zZWFyY2guZ2V0U2VhcmNoSW5pdGlhbFN0YXRlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGluaW50Um91dGVyKCkge1xuICAgIHRoaXMucm91dGVyLmNyZWF0ZVJvdXRlKENPTkZJRy5yb3V0ZXMuaG9tZXBhZ2UsIHRoaXMucmVuZGVyLmdlbmVyYXRlSG9tZVBhZ2UuYmluZCh0aGlzLnJlbmRlcikpO1xuICAgIHRoaXMucm91dGVyLmNyZWF0ZVJvdXRlKENPTkZJRy5yb3V0ZXMuYWJvdXRQYWdlLCB0aGlzLnJlbmRlci5nZW5lcmF0ZVNlY29uZGFyeVBhZ2UuYmluZCh0aGlzLnJlbmRlciwgJ2Fib3V0JykpO1xuICAgIHRoaXMucm91dGVyLmNyZWF0ZVJvdXRlKENPTkZJRy5yb3V0ZXMuY29udGFjdFBhZ2UsIHRoaXMucmVuZGVyLmdlbmVyYXRlU2Vjb25kYXJ5UGFnZS5iaW5kKHRoaXMucmVuZGVyLCAnY29udGFjdCcpKTtcbiAgICB0aGlzLnJvdXRlci5jcmVhdGVSb3V0ZShDT05GSUcucm91dGVzLmVycm9yUGFnZSwgdGhpcy5yZW5kZXIuZ2VuZXJhdGVTZWNvbmRhcnlQYWdlLmJpbmQodGhpcy5yZW5kZXIsICdlcnJvcicpKTtcbiAgICB0aGlzLnJvdXRlci5jcmVhdGVSb3V0ZShDT05GSUcucm91dGVzLm5ld3NTaW5nbGVQYWdlLCB0aGlzLnJlbmRlci5nZW5lcmF0ZVNpbmdsZVBhZ2UuYmluZCh0aGlzLnJlbmRlciwgdGhpcy5uZXdzKSk7XG4gICAgdGhpcy5yb3V0ZXIuY3JlYXRlUm91dGUoQ09ORklHLnJvdXRlcy5zZWFyY2hQYWdlLCB0aGlzLnJlbmRlci5kaXNwbGF5RmlsdGVyZWRDb250ZW50LmJpbmQodGhpcy5yZW5kZXIpKTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKGRhdGEpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuaW5pdCgpO1xuIiwiY29uc3QgZXJyb3JMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLWxpbmsnKTtcblxuZnVuY3Rpb24gaW5pdEVycm9yTGluayhyZW5kZXIpIHtcbiAgZXJyb3JMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnLycpO1xuICAgIHJlbmRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEVycm9yTGluaztcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcblxuY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcuc2VsZWN0b3JzLm1haW5BcHBDb250YWluZXIpO1xuY29uc3QgdGVtcGxhdGVTY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTkZJRy5zZWxlY3RvcnMubmV3c1RlbXBsYXRlKS5pbm5lckhUTUw7XG5cbmZ1bmN0aW9uIGluaXRIb21lUGFnZUxheW91dChyZW5kZXIsIGRhdGEpIHtcbiAgY29uc3QgbWFpbk5ld3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbk5ld3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlU2NyaXB0KTtcblxuICBtYWluTmV3c0NvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZShkYXRhKTtcbiAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5OZXdzQ29udGFpbmVyKTtcblxuICBtYWluTmV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKENPTkZJRy5zZWxlY3RvcnMubmV3c0NhcmQpLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gY2FyZC5kYXRhc2V0O1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvbmV3cy8ke2luZGV4fWApO1xuICAgICAgcmVuZGVyKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0SG9tZVBhZ2VMYXlvdXQ7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09ORklHLnNlbGVjdG9ycy5tYWluQXBwQ29udGFpbmVyKTtcbmNvbnN0IHRlbXBsYXRlU2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcuc2VsZWN0b3JzLnNpbmdsZU5ld3NUZW1wbGF0ZSkuaW5uZXJIVE1MO1xuXG5mdW5jdGlvbiByZXNldEJvZHlPdmVyZmxvdygpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gIGlmIChib2R5WzBdKSB7XG4gICAgYm9keVswXS5zdHlsZS5vdmVyZmxvdyA9IENPTkZJRy5zdHlsZXMuYXV0bztcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TW9kYWwocmVuZGVyKSB7XG4gIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xuICAgIHJlc2V0Qm9keU92ZXJmbG93KCk7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICcvJyk7XG4gICAgcmVuZGVyKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLW92ZXJsYXknKSkge1xuICAgICAgcmVkaXJlY3QoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpICYmIGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgcmVkaXJlY3QoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVtcHR5TW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW1wdHlNb2RhbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld3MtbW9kYWwnKTtcblxuICBjb25zdCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZVNjcmlwdCk7XG5cbiAgZW1wdHlNb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7XG4gICAgbmV3czoge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGF0ZTogJycsXG4gICAgICBjb250ZW50OiAnJyxcbiAgICAgIGltYWdlOiBudWxsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eU1vZGFsQ29udGFpbmVyKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWNsb3NlJykpIHtcbiAgICAgIHJlZGlyZWN0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdE1vZGFsO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi9jb25maWcuanMnO1xuXG5jb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTkZJRy5zZWxlY3RvcnMuYWJvdXRMaW5rKTtcbmNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcuc2VsZWN0b3JzLmNvbnRhY3RMaW5rKTtcbmNvbnN0IGhvbWVQYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09ORklHLnNlbGVjdG9ycy5ob21lcGFnZUxpbmspO1xuXG5mdW5jdGlvbiBpbml0TmF2YmFyKHJlbmRlcikge1xuICBhYm91dExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICcvYWJvdXQnKTtcbiAgICByZW5kZXIod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSk7XG5cbiAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICcvY29udGFjdCcpO1xuICAgIHJlbmRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9KTtcblxuICBob21lUGFnZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICcvJyk7XG4gICAgcmVuZGVyKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0pO1xuXG5cbiAgYWJvdXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBob21lUGFnZUxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnRhY3RMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0TmF2YmFyO1xuIiwiY29uc3QgQ09ORklHID0ge1xuICBhcGk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICByb3V0ZXM6IHtcbiAgICBob21lcGFnZTogJycsXG4gICAgYWJvdXRQYWdlOiAnYWJvdXQnLFxuICAgIGNvbnRhY3RQYWdlOiAnY29udGFjdCcsXG4gICAgbmV3c1NpbmdsZVBhZ2U6ICduZXdzJyxcbiAgICBlcnJvclBhZ2U6ICc0MDQnLFxuICAgIHNlYXJjaFBhZ2U6ICdzZWFyY2gnLFxuICB9LFxuICBzZWxlY3RvcnM6IHtcbiAgICBtYWluQXBwQ29udGFpbmVyOiAnLmFwcC1jb250YWluZXInLFxuICAgIGFsbE5ld3NDYXJkc0NvbnRhaW5lcjogJy5tYWluLWNvbnRhaW5lcicsXG4gICAgbmV3c0NhcmQ6ICcubmV3cy1jYXJkJyxcbiAgICBzZWFyY2hGb3JtOiAnLnNlYXJjaC1mb3JtJyxcbiAgICBuZXdzVGVtcGxhdGU6ICcjbmV3cy10ZW1wbGF0ZScsXG4gICAgc2luZ2xlTmV3c1RlbXBsYXRlOiAnI3NpbmdsZS1uZXdzLXRlbXBsYXRlJyxcbiAgICBhYm91dExpbms6ICcuYWJvdXQnLFxuICAgIGNvbnRhY3RMaW5rOiAnLmNvbnRhY3QnLFxuICAgIGhvbWVwYWdlTGluazogJy5icmFuZC1sb2dvJyxcbiAgfSxcbiAgc3R5bGVzOiB7XG4gICAgaGlkZTogJ25vbmUnLFxuICAgIHNob3c6ICdibG9jaycsXG4gICAgZGltOiAnMC4xJyxcbiAgICBicmlnaHRlbjogJzEnLFxuICAgIGF1dG86ICdhdXRvJyxcbiAgfSxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ09ORklHO1xuIiwiY2xhc3MgT2JzZXJ2YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICBuZXh0KGRhdGEpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZWRGbikgPT4ge1xuICAgICAgc3Vic2NyaWJlZEZuKGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5pbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCBpbml0TmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIuanMnO1xuaW1wb3J0IGluaXRNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwuanMnO1xuaW1wb3J0IGluaXRIb21lUGFnZUxheW91dCBmcm9tICcuL2NvbXBvbmVudHMvaG9tZVBhZ2VMYXlvdXQuanMnO1xuaW1wb3J0IGluaXRFcnJvckxpbmsgZnJvbSAnLi9jb21wb25lbnRzL2Vycm9yUGFnZS5qcyc7XG5cbmNsYXNzIFJlbmRlciB7XG4gIGNvbnN0cnVjdG9yKHJvdXRlciwgc2VhcmNoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gIH1cblxuICBpbml0TWFpblBhZ2UoZGF0YSkge1xuICAgIGluaXRIb21lUGFnZUxheW91dC5jYWxsKHRoaXMucmVuZGVyLCB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlciksIGRhdGEpO1xuICAgIGluaXROYXZiYXIuY2FsbCh0aGlzLnJvdXRlciwgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50LmJpbmQodGhpcy5yb3V0ZXIpKTtcbiAgICBpbml0RXJyb3JMaW5rLmNhbGwodGhpcy5yb3V0ZXIsIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudC5iaW5kKHRoaXMucm91dGVyKSk7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJyk7XG4gICAgc2VhcmNoQmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgZ2VuZXJhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBhcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTkZJRy5zZWxlY3RvcnMubWFpbkFwcENvbnRhaW5lcik7XG5cbiAgICBBcnJheS5mcm9tKGFwcENvbnRhaW5lci5jaGlsZHJlbikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1jb250YWluZXInKSkge1xuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBDT05GSUcuc3R5bGVzLmhpZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld3MtY2FyZCcpXS5mb3JFYWNoKChuZXdzKSA9PiB7XG4gICAgICBuZXdzLnN0eWxlLm9wYWNpdHkgPSBDT05GSUcuc3R5bGVzLmJyaWdodGVuO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJyk7XG4gICAgc2VhcmNoQmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgdGhpcy5nZXRGaWx0ZXJWYWx1ZSgpO1xuICB9XG5cbiAgZ2V0RmlsdGVyVmFsdWUoKSB7XG4gICAgY29uc3QgY3VycmVudEZpbHRlclZhbHVlID0gdGhpcy5zZWFyY2guc2VhcmNoRmllbGQudmFsdWU7XG4gICAgaWYgKGN1cnJlbnRGaWx0ZXJWYWx1ZSkge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvc2VhcmNoL3ZhbHVlPSR7Y3VycmVudEZpbHRlclZhbHVlfWApO1xuICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUZpbHRlcmVkQ29udGVudCgpIHtcbiAgICBjb25zdCBjdXJyZW50U2VhcmNoVmFsdWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy9zZWFyY2gvdmFsdWU9JylbMV07XG4gICAgY29uc3Qgc2FuaXRlemVkU2VhcmNoVmFsdWUgPSBkZWNvZGVVUkkoY3VycmVudFNlYXJjaFZhbHVlKTtcbiAgICBjb25zdCBhbGxOZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld3MtY2FyZCcpO1xuICAgIGFsbE5ld3MuZm9yRWFjaCgobmV3cykgPT4ge1xuICAgICAgY29uc3QgdGl0bGVWYWx1ZSA9IG5ld3MucXVlcnlTZWxlY3Rvcignc3BhbicpLmlubmVySFRNTDtcbiAgICAgIGlmICghdGl0bGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNhbml0ZXplZFNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIG5ld3Muc3R5bGUub3BhY2l0eSA9IENPTkZJRy5zdHlsZXMuZGltO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3cy5zdHlsZS5vcGFjaXR5ID0gQ09ORklHLnN0eWxlcy5icmlnaHRlbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTaW5nbGVQYWdlKCkge1xuICAgIGluaXRNb2RhbC5jYWxsKHRoaXMucm91dGVyLCB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlcikpO1xuICB9XG5cbiAgZ2VuZXJhdGVTaW5nbGVQYWdlKG5ld3MpIHtcbiAgICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnbmV3cy8nKVsxXTtcbiAgICBjb25zdCBuZXdzRW5ydHkgPSBuZXdzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IE51bWJlcihpZCkpO1xuXG4gICAgaWYgKG5ld3NFbnJ0eSkge1xuICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1tb2RhbCcpO1xuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IENPTkZJRy5zdHlsZXMuc2hvdztcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50IGg0JykudGV4dENvbnRlbnQgPSBuZXdzRW5ydHkudGl0bGU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCBoNScpLnRleHRDb250ZW50ID0gbmV3c0VucnR5LmRhdGU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCBpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG5ld3NFbnJ0eS5pbWFnZSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCBwJykudGV4dENvbnRlbnQgPSBuZXdzRW5ydHkuY29udGVudDtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gTS5Nb2RhbC5pbml0KG1vZGFsKTtcbiAgICAgIGluc3RhbmNlLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVNlY29uZGFyeVBhZ2Uocm91dGVOYW1lKSB7XG4gICAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcuc2VsZWN0b3JzLm1haW5BcHBDb250YWluZXIpO1xuXG4gICAgQXJyYXkuZnJvbShhcHBDb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGlmICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMocm91dGVOYW1lKSkge1xuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBDT05GSUcuc3R5bGVzLmhpZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBDT05GSUcuc3R5bGVzLnNob3c7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIEhpc3RvcnlSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWFyY2gpIHtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLnJvdXRlcyA9IHtcbiAgICAgIDQwNDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTm90IGZvdW5kJyk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUm91dGUodXJsLCBjYWxsYmFjaykge1xuICAgIHRoaXMucm91dGVzW3VybF0gPSBjYWxsYmFjaztcbiAgfVxuXG4gIHJlbmRlclJvdXRlQ29udGVudCh1cmwpIHtcbiAgICBsZXQgY3VycmVudFVybCA9IHVybC5zcGxpdCgnLycpWzFdO1xuICAgIGlmICghY3VycmVudFVybCkge1xuICAgICAgY3VycmVudFVybCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5yb3V0ZXMsIGN1cnJlbnRVcmwpKSB7XG4gICAgICB0aGlzLnJvdXRlc1tjdXJyZW50VXJsXSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlc1s0MDRdKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlSb3V0ZXI7XG4iLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuL29ic2VydmFibGUuanMnO1xuXG5jbGFzcyBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSAnJztcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmdldFNlYXJjaEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5vYnNlcnZhYmxlLnN1YnNjcmliZShmbik7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoRmllbGQudmFsdWUudHJpbSgpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gJyc7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5uZXh0KCcvJyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VhcmNoRmllbGQudmFsdWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBgL3NlYXJjaC92YWx1ZT0ke3RoaXMuc2VhcmNoRmllbGQudmFsdWV9YDtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLm5leHQodGhpcy5jdXJyZW50U3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2VhcmNoSW5pdGlhbFN0YXRlKCkge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9zZWFyY2gvJykpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gYC8ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdLnRyaW0oKX1gO1xuICAgICAgdGhpcy5zZWFyY2hGaWVsZC52YWx1ZSA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy9zZWFyY2gvdmFsdWU9JylbMV0udHJpbSgpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0taGVhZGVycy1jb2xvcjogI2FmYjQyYjsgXFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdBcmltbycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbm1haW4ge1xcbiAgbWF4LXdpZHRoOiA5NSU7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFsbC1uZXdzIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5uZXdzLWNhcmQge1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLyogY2FyZC1zdHlsZSAqL1xcbi5jYXJkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbi5jYXJkIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAxMzBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmNhcmQgLmNhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNhcmQgaDUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYXJkIC5jYXJkLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogbW9kYWwtc3R5bGUgKi9cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2RhbC1jbG9zZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXJzLWNvbG9yKTtcXG59XFxuXFxuI21vZGFsMSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4gLyogZXJyb3IgcGFnZSBzdHlsZSAqL1xcbi5lcnJvciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5lcnJvciBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmVycm9yIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZXJyb3ItbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGFib3V0IHBhZ2Ugc3R5bGUgKi9cXG5cXG4uYWJvdXQsIC5jb250YWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLmlucHV0LWZpZWxke1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5ld3MtY2FyZCB7XFxuICBmbGV4OiAwIDAgMjMlO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuLyogbmF2IHN0eWxlICovXFxuXFxuLm5hdi1saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTI3MjM7XFxufVxcblxcbi5icmFuZC1sb2dvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG59XFxuXFxuLm5hdi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuYnJhbmQtbG9nbyB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IC0xMDAwMDAwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLypnbG9iYWxzIHdpbmRvdyBfX3dlYnBhY2tfaGFzaF9fICovXG5pZiAobW9kdWxlLmhvdCkge1xuXHR2YXIgbGFzdEhhc2g7XG5cdHZhciB1cFRvRGF0ZSA9IGZ1bmN0aW9uIHVwVG9EYXRlKCkge1xuXHRcdHJldHVybiBsYXN0SGFzaC5pbmRleE9mKF9fd2VicGFja19oYXNoX18pID49IDA7XG5cdH07XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cdHZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKCkge1xuXHRcdG1vZHVsZS5ob3Rcblx0XHRcdC5jaGVjayh0cnVlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24odXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0aWYgKCF1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBDYW5ub3QgZmluZCB1cGRhdGUuIE5lZWQgdG8gZG8gYSBmdWxsIHJlbG9hZCFcIik7XG5cdFx0XHRcdFx0bG9nKFxuXHRcdFx0XHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltITVJdIChQcm9iYWJseSBiZWNhdXNlIG9mIHJlc3RhcnRpbmcgdGhlIHdlYnBhY2stZGV2LXNlcnZlcilcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghdXBUb0RhdGUoKSkge1xuXHRcdFx0XHRcdGNoZWNrKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXF1aXJlKFwiLi9sb2ctYXBwbHktcmVzdWx0XCIpKHVwZGF0ZWRNb2R1bGVzLCB1cGRhdGVkTW9kdWxlcyk7XG5cblx0XHRcdFx0aWYgKHVwVG9EYXRlKCkpIHtcblx0XHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gQXBwIGlzIHVwIHRvIGRhdGUuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHR2YXIgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcblx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSBDYW5ub3QgYXBwbHkgdXBkYXRlLiBOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFVwZGF0ZSBmYWlsZWQ6IFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0dmFyIGhvdEVtaXR0ZXIgPSByZXF1aXJlKFwiLi9lbWl0dGVyXCIpO1xuXHRob3RFbWl0dGVyLm9uKFwid2VicGFja0hvdFVwZGF0ZVwiLCBmdW5jdGlvbihjdXJyZW50SGFzaCkge1xuXHRcdGxhc3RIYXNoID0gY3VycmVudEhhc2g7XG5cdFx0aWYgKCF1cFRvRGF0ZSgpICYmIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiaWRsZVwiKSB7XG5cdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gQ2hlY2tpbmcgZm9yIHVwZGF0ZXMgb24gdGhlIHNlcnZlci4uLlwiKTtcblx0XHRcdGNoZWNrKCk7XG5cdFx0fVxuXHR9KTtcblx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFdhaXRpbmcgZm9yIHVwZGF0ZSBzaWduYWwgZnJvbSBXRFMuLi5cIik7XG59IGVsc2Uge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJbSE1SXSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLlwiKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=