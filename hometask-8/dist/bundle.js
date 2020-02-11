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
      var allNews = document.querySelectorAll('.news-card');
      allNews.forEach(function (news) {
        var titleValue = news.querySelector('span').innerHTML;

        if (!titleValue.toLowerCase().includes(currentSearchValue.toLowerCase())) {
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
        this.searchField.value = window.location.pathname.split('/search/value=')[1].trim();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9kaXN0L2Fzc2V0cy9zdHlsZXMuY3NzP2ZlMmMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2hvbWV0YXNrLTgvc3JjL2NvbXBvbmVudHMvZXJyb3JQYWdlLmpzIiwid2VicGFjazovLy8uL2hvbWV0YXNrLTgvc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9zcmMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9ob21ldGFzay04L3NyYy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9ob21ldGFzay04L3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ob21ldGFzay04L3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9zcmMvcm91dGVySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ob21ldGFzay04L3NyYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZXRhc2stOC9kaXN0L2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvaG90L2Rldi1zZXJ2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwibmV3cyIsInNlYXJjaCIsIlNlYXJjaCIsInJvdXRlciIsIkhpc3RvcnlSb3V0ZXIiLCJyZW5kZXIiLCJSZW5kZXIiLCJzdWJzY3JpYmUiLCJvblNlYXJjaENoYW5nZSIsImJpbmQiLCJmZXRjaCIsIkNPTkZJRyIsImFwaSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJpbmludFJvdXRlciIsImluaXRNYWluUGFnZSIsImluaXRTaW5nbGVQYWdlIiwicmVuZGVyUm91dGVDb250ZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImdldFNlYXJjaEluaXRpYWxTdGF0ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVJvdXRlIiwicm91dGVzIiwiaG9tZXBhZ2UiLCJnZW5lcmF0ZUhvbWVQYWdlIiwiYWJvdXRQYWdlIiwiZ2VuZXJhdGVTZWNvbmRhcnlQYWdlIiwiY29udGFjdFBhZ2UiLCJlcnJvclBhZ2UiLCJuZXdzU2luZ2xlUGFnZSIsImdlbmVyYXRlU2luZ2xlUGFnZSIsInNlYXJjaFBhZ2UiLCJkaXNwbGF5RmlsdGVyZWRDb250ZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRlY29kZVVSSSIsImFwcCIsImluaXQiLCJlcnJvckxpbmsiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdEVycm9yTGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3JzIiwibWFpbkFwcENvbnRhaW5lciIsInRlbXBsYXRlU2NyaXB0IiwibmV3c1RlbXBsYXRlIiwiaW5uZXJIVE1MIiwiaW5pdEhvbWVQYWdlTGF5b3V0IiwibWFpbk5ld3NDb250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzIiwiY29tcGlsZSIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsIm5ld3NDYXJkIiwiZm9yRWFjaCIsImNhcmQiLCJpbmRleCIsImRhdGFzZXQiLCJzaW5nbGVOZXdzVGVtcGxhdGUiLCJyZXNldEJvZHlPdmVyZmxvdyIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwib3ZlcmZsb3ciLCJzdHlsZXMiLCJhdXRvIiwiaW5pdE1vZGFsIiwicmVkaXJlY3QiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJrZXkiLCJlbXB0eU1vZGFsQ29udGFpbmVyIiwidGl0bGUiLCJkYXRlIiwiY29udGVudCIsImltYWdlIiwibW9kYWwiLCJhYm91dExpbmsiLCJjb250YWN0TGluayIsImhvbWVQYWdlTGluayIsImhvbWVwYWdlTGluayIsImluaXROYXZiYXIiLCJkaXNwbGF5IiwiYWxsTmV3c0NhcmRzQ29udGFpbmVyIiwic2VhcmNoRm9ybSIsImhpZGUiLCJzaG93IiwiZGltIiwiYnJpZ2h0ZW4iLCJPYnNlcnZhYmxlIiwic3Vic2NyaWJlcnMiLCJmbiIsInB1c2giLCJzdWJzY3JpYmVkRm4iLCJjYWxsIiwic2VhcmNoQmFyIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJpdGVtIiwib3BhY2l0eSIsImdldEZpbHRlclZhbHVlIiwiY3VycmVudEZpbHRlclZhbHVlIiwic2VhcmNoRmllbGQiLCJ2YWx1ZSIsImN1cnJlbnRTZWFyY2hWYWx1ZSIsInNwbGl0IiwiYWxsTmV3cyIsInRpdGxlVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaWQiLCJuZXdzRW5ydHkiLCJmaW5kIiwiTnVtYmVyIiwibW9kYWxDb250YWluZXIiLCJ0ZXh0Q29udGVudCIsImluc3RhbmNlIiwiTSIsIk1vZGFsIiwib3BlbiIsInJvdXRlTmFtZSIsImVsZW0iLCJ1cmwiLCJjYWxsYmFjayIsImN1cnJlbnRVcmwiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm9ic2VydmFibGUiLCJjdXJyZW50U3RhdGUiLCJ0cmltIiwibmV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQVUsRUFBRSxtREFxRGY7QUFDRDtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBIaXN0b3J5Um91dGVyIGZyb20gJy4vcm91dGVySGlzdG9yeSc7XG5pbXBvcnQgUmVuZGVyIGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi9jb25maWcuanMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaC5qcyc7XG5pbXBvcnQgJy4uL2Rpc3QvYXNzZXRzL3N0eWxlcy5jc3MnO1xuXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmV3cyA9IFtdO1xuICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCgpO1xuICAgIHRoaXMucm91dGVyID0gbmV3IEhpc3RvcnlSb3V0ZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IG5ldyBSZW5kZXIodGhpcy5yb3V0ZXIsIHRoaXMuc2VhcmNoKTtcbiAgICB0aGlzLnNlYXJjaC5zdWJzY3JpYmUodGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgZmV0Y2goYCR7Q09ORklHLmFwaX0vbmV3c2AsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm5ld3MgPSBkYXRhO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbmludFJvdXRlcigpO1xuICAgICAgICB0aGlzLnJlbmRlci5pbml0TWFpblBhZ2UodGhpcy5uZXdzKTtcbiAgICAgICAgdGhpcy5yZW5kZXIuaW5pdFNpbmdsZVBhZ2UoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIHRoaXMuc2VhcmNoLmdldFNlYXJjaEluaXRpYWxTdGF0ZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBpbmludFJvdXRlcigpIHtcbiAgICB0aGlzLnJvdXRlci5jcmVhdGVSb3V0ZShDT05GSUcucm91dGVzLmhvbWVwYWdlLCB0aGlzLnJlbmRlci5nZW5lcmF0ZUhvbWVQYWdlLmJpbmQodGhpcy5yZW5kZXIpKTtcbiAgICB0aGlzLnJvdXRlci5jcmVhdGVSb3V0ZShDT05GSUcucm91dGVzLmFib3V0UGFnZSwgdGhpcy5yZW5kZXIuZ2VuZXJhdGVTZWNvbmRhcnlQYWdlLmJpbmQodGhpcy5yZW5kZXIsICdhYm91dCcpKTtcbiAgICB0aGlzLnJvdXRlci5jcmVhdGVSb3V0ZShDT05GSUcucm91dGVzLmNvbnRhY3RQYWdlLCB0aGlzLnJlbmRlci5nZW5lcmF0ZVNlY29uZGFyeVBhZ2UuYmluZCh0aGlzLnJlbmRlciwgJ2NvbnRhY3QnKSk7XG4gICAgdGhpcy5yb3V0ZXIuY3JlYXRlUm91dGUoQ09ORklHLnJvdXRlcy5lcnJvclBhZ2UsIHRoaXMucmVuZGVyLmdlbmVyYXRlU2Vjb25kYXJ5UGFnZS5iaW5kKHRoaXMucmVuZGVyLCAnZXJyb3InKSk7XG4gICAgdGhpcy5yb3V0ZXIuY3JlYXRlUm91dGUoQ09ORklHLnJvdXRlcy5uZXdzU2luZ2xlUGFnZSwgdGhpcy5yZW5kZXIuZ2VuZXJhdGVTaW5nbGVQYWdlLmJpbmQodGhpcy5yZW5kZXIsIHRoaXMubmV3cykpO1xuICAgIHRoaXMucm91dGVyLmNyZWF0ZVJvdXRlKENPTkZJRy5yb3V0ZXMuc2VhcmNoUGFnZSwgdGhpcy5yZW5kZXIuZGlzcGxheUZpbHRlcmVkQ29udGVudC5iaW5kKHRoaXMucmVuZGVyKSk7XG4gIH1cblxuICBvblNlYXJjaENoYW5nZShkYXRhKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGRhdGEpO1xuICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudChkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSk7XG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmluaXQoKTtcbiIsImNvbnN0IGVycm9yTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1saW5rJyk7XG5cbmZ1bmN0aW9uIGluaXRFcnJvckxpbmsocmVuZGVyKSB7XG4gIGVycm9yTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJy8nKTtcbiAgICByZW5kZXIod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRFcnJvckxpbms7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09ORklHLnNlbGVjdG9ycy5tYWluQXBwQ29udGFpbmVyKTtcbmNvbnN0IHRlbXBsYXRlU2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcuc2VsZWN0b3JzLm5ld3NUZW1wbGF0ZSkuaW5uZXJIVE1MO1xuXG5mdW5jdGlvbiBpbml0SG9tZVBhZ2VMYXlvdXQocmVuZGVyLCBkYXRhKSB7XG4gIGNvbnN0IG1haW5OZXdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5OZXdzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbi1jb250YWluZXInKTtcblxuICBjb25zdCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZVNjcmlwdCk7XG5cbiAgbWFpbk5ld3NDb250YWluZXIuaW5uZXJIVE1MID0gdGVtcGxhdGUoZGF0YSk7XG4gIGFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTmV3c0NvbnRhaW5lcik7XG5cbiAgbWFpbk5ld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChDT05GSUcuc2VsZWN0b3JzLm5ld3NDYXJkKS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGNhcmQuZGF0YXNldDtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgL25ld3MvJHtpbmRleH1gKTtcbiAgICAgIHJlbmRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhvbWVQYWdlTGF5b3V0O1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi9jb25maWcuanMnO1xuXG5jb25zdCBhcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTkZJRy5zZWxlY3RvcnMubWFpbkFwcENvbnRhaW5lcik7XG5jb25zdCB0ZW1wbGF0ZVNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09ORklHLnNlbGVjdG9ycy5zaW5nbGVOZXdzVGVtcGxhdGUpLmlubmVySFRNTDtcblxuZnVuY3Rpb24gcmVzZXRCb2R5T3ZlcmZsb3coKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICBpZiAoYm9keVswXSkge1xuICAgIGJvZHlbMF0uc3R5bGUub3ZlcmZsb3cgPSBDT05GSUcuc3R5bGVzLmF1dG87XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1vZGFsKHJlbmRlcikge1xuICBmdW5jdGlvbiByZWRpcmVjdCgpIHtcbiAgICByZXNldEJvZHlPdmVyZmxvdygpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnLycpO1xuICAgIHJlbmRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1vdmVybGF5JykpIHtcbiAgICAgIHJlZGlyZWN0KCk7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSAmJiBlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHJlZGlyZWN0KCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBlbXB0eU1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVtcHR5TW9kYWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXdzLW1vZGFsJyk7XG5cbiAgY29uc3QgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGVTY3JpcHQpO1xuXG4gIGVtcHR5TW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gdGVtcGxhdGUoe1xuICAgIG5ld3M6IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRhdGU6ICcnLFxuICAgICAgY29udGVudDogJycsXG4gICAgICBpbWFnZTogbnVsbCxcbiAgICB9LFxuICB9KTtcblxuICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlNb2RhbENvbnRhaW5lcik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1jbG9zZScpKSB7XG4gICAgICByZWRpcmVjdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRNb2RhbDtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcblxuY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcuc2VsZWN0b3JzLmFib3V0TGluayk7XG5jb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09ORklHLnNlbGVjdG9ycy5jb250YWN0TGluayk7XG5jb25zdCBob21lUGFnZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTkZJRy5zZWxlY3RvcnMuaG9tZXBhZ2VMaW5rKTtcblxuZnVuY3Rpb24gaW5pdE5hdmJhcihyZW5kZXIpIHtcbiAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnL2Fib3V0Jyk7XG4gICAgcmVuZGVyKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0pO1xuXG4gIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnL2NvbnRhY3QnKTtcbiAgICByZW5kZXIod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSk7XG5cbiAgaG9tZVBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnLycpO1xuICAgIHJlbmRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9KTtcblxuXG4gIGFib3V0TGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgaG9tZVBhZ2VMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb250YWN0TGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdE5hdmJhcjtcbiIsImNvbnN0IENPTkZJRyA9IHtcbiAgYXBpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgcm91dGVzOiB7XG4gICAgaG9tZXBhZ2U6ICcnLFxuICAgIGFib3V0UGFnZTogJ2Fib3V0JyxcbiAgICBjb250YWN0UGFnZTogJ2NvbnRhY3QnLFxuICAgIG5ld3NTaW5nbGVQYWdlOiAnbmV3cycsXG4gICAgZXJyb3JQYWdlOiAnNDA0JyxcbiAgICBzZWFyY2hQYWdlOiAnc2VhcmNoJyxcbiAgfSxcbiAgc2VsZWN0b3JzOiB7XG4gICAgbWFpbkFwcENvbnRhaW5lcjogJy5hcHAtY29udGFpbmVyJyxcbiAgICBhbGxOZXdzQ2FyZHNDb250YWluZXI6ICcubWFpbi1jb250YWluZXInLFxuICAgIG5ld3NDYXJkOiAnLm5ld3MtY2FyZCcsXG4gICAgc2VhcmNoRm9ybTogJy5zZWFyY2gtZm9ybScsXG4gICAgbmV3c1RlbXBsYXRlOiAnI25ld3MtdGVtcGxhdGUnLFxuICAgIHNpbmdsZU5ld3NUZW1wbGF0ZTogJyNzaW5nbGUtbmV3cy10ZW1wbGF0ZScsXG4gICAgYWJvdXRMaW5rOiAnLmFib3V0JyxcbiAgICBjb250YWN0TGluazogJy5jb250YWN0JyxcbiAgICBob21lcGFnZUxpbms6ICcuYnJhbmQtbG9nbycsXG4gIH0sXG4gIHN0eWxlczoge1xuICAgIGhpZGU6ICdub25lJyxcbiAgICBzaG93OiAnYmxvY2snLFxuICAgIGRpbTogJzAuMScsXG4gICAgYnJpZ2h0ZW46ICcxJyxcbiAgICBhdXRvOiAnYXV0bycsXG4gIH0sXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsImNsYXNzIE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW107XG4gIH1cblxuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goZm4pO1xuICB9XG5cbiAgbmV4dChkYXRhKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWJzY3JpYmVkRm4pID0+IHtcbiAgICAgIHN1YnNjcmliZWRGbihkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cblxuaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZy5qcyc7XG5pbXBvcnQgaW5pdE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyLmpzJztcbmltcG9ydCBpbml0TW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL21vZGFsLmpzJztcbmltcG9ydCBpbml0SG9tZVBhZ2VMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL2hvbWVQYWdlTGF5b3V0LmpzJztcbmltcG9ydCBpbml0RXJyb3JMaW5rIGZyb20gJy4vY29tcG9uZW50cy9lcnJvclBhZ2UuanMnO1xuXG5jbGFzcyBSZW5kZXIge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIHNlYXJjaCkge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICB9XG5cbiAgaW5pdE1haW5QYWdlKGRhdGEpIHtcbiAgICBpbml0SG9tZVBhZ2VMYXlvdXQuY2FsbCh0aGlzLnJlbmRlciwgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50LmJpbmQodGhpcy5yb3V0ZXIpLCBkYXRhKTtcbiAgICBpbml0TmF2YmFyLmNhbGwodGhpcy5yb3V0ZXIsIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudC5iaW5kKHRoaXMucm91dGVyKSk7XG4gICAgaW5pdEVycm9yTGluay5jYWxsKHRoaXMucm91dGVyLCB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlcikpO1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpO1xuICAgIHNlYXJjaEJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIGdlbmVyYXRlSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcuc2VsZWN0b3JzLm1haW5BcHBDb250YWluZXIpO1xuXG4gICAgQXJyYXkuZnJvbShhcHBDb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tY29udGFpbmVyJykpIHtcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gQ09ORklHLnN0eWxlcy5oaWRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdzLWNhcmQnKV0uZm9yRWFjaCgobmV3cykgPT4ge1xuICAgICAgbmV3cy5zdHlsZS5vcGFjaXR5ID0gQ09ORklHLnN0eWxlcy5icmlnaHRlbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpO1xuICAgIHNlYXJjaEJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIHRoaXMuZ2V0RmlsdGVyVmFsdWUoKTtcbiAgfVxuXG4gIGdldEZpbHRlclZhbHVlKCkge1xuICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXJWYWx1ZSA9IHRoaXMuc2VhcmNoLnNlYXJjaEZpZWxkLnZhbHVlO1xuICAgIGlmIChjdXJyZW50RmlsdGVyVmFsdWUpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgL3NlYXJjaC92YWx1ZT0ke2N1cnJlbnRGaWx0ZXJWYWx1ZX1gKTtcbiAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlGaWx0ZXJlZENvbnRlbnQoKSB7XG4gICAgY29uc3QgY3VycmVudFNlYXJjaFZhbHVlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvc2VhcmNoL3ZhbHVlPScpWzFdO1xuICAgIGNvbnN0IGFsbE5ld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3cy1jYXJkJyk7XG4gICAgYWxsTmV3cy5mb3JFYWNoKChuZXdzKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZVZhbHVlID0gbmV3cy5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJIVE1MO1xuICAgICAgaWYgKCF0aXRsZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY3VycmVudFNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIG5ld3Muc3R5bGUub3BhY2l0eSA9IENPTkZJRy5zdHlsZXMuZGltO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3cy5zdHlsZS5vcGFjaXR5ID0gQ09ORklHLnN0eWxlcy5icmlnaHRlbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTaW5nbGVQYWdlKCkge1xuICAgIGluaXRNb2RhbC5jYWxsKHRoaXMucm91dGVyLCB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlcikpO1xuICB9XG5cbiAgZ2VuZXJhdGVTaW5nbGVQYWdlKG5ld3MpIHtcbiAgICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnbmV3cy8nKVsxXTtcbiAgICBjb25zdCBuZXdzRW5ydHkgPSBuZXdzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IE51bWJlcihpZCkpO1xuXG4gICAgaWYgKG5ld3NFbnJ0eSkge1xuICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1tb2RhbCcpO1xuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IENPTkZJRy5zdHlsZXMuc2hvdztcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50IGg0JykudGV4dENvbnRlbnQgPSBuZXdzRW5ydHkudGl0bGU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCBoNScpLnRleHRDb250ZW50ID0gbmV3c0VucnR5LmRhdGU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCBpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG5ld3NFbnJ0eS5pbWFnZSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCBwJykudGV4dENvbnRlbnQgPSBuZXdzRW5ydHkuY29udGVudDtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gTS5Nb2RhbC5pbml0KG1vZGFsKTtcbiAgICAgIGluc3RhbmNlLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVNlY29uZGFyeVBhZ2Uocm91dGVOYW1lKSB7XG4gICAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05GSUcuc2VsZWN0b3JzLm1haW5BcHBDb250YWluZXIpO1xuXG4gICAgQXJyYXkuZnJvbShhcHBDb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGlmICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMocm91dGVOYW1lKSkge1xuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBDT05GSUcuc3R5bGVzLmhpZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBDT05GSUcuc3R5bGVzLnNob3c7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIEhpc3RvcnlSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWFyY2gpIHtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLnJvdXRlcyA9IHtcbiAgICAgIDQwNDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTm90IGZvdW5kJyk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUm91dGUodXJsLCBjYWxsYmFjaykge1xuICAgIHRoaXMucm91dGVzW3VybF0gPSBjYWxsYmFjaztcbiAgfVxuXG4gIHJlbmRlclJvdXRlQ29udGVudCh1cmwpIHtcbiAgICBsZXQgY3VycmVudFVybCA9IHVybC5zcGxpdCgnLycpWzFdO1xuICAgIGlmICghY3VycmVudFVybCkge1xuICAgICAgY3VycmVudFVybCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5yb3V0ZXMsIGN1cnJlbnRVcmwpKSB7XG4gICAgICB0aGlzLnJvdXRlc1tjdXJyZW50VXJsXSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlc1s0MDRdKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlSb3V0ZXI7XG4iLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuL29ic2VydmFibGUuanMnO1xuXG5jbGFzcyBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSAnJztcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmdldFNlYXJjaEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5vYnNlcnZhYmxlLnN1YnNjcmliZShmbik7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoRmllbGQudmFsdWUudHJpbSgpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gJyc7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5uZXh0KCcvJyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VhcmNoRmllbGQudmFsdWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBgL3NlYXJjaC92YWx1ZT0ke3RoaXMuc2VhcmNoRmllbGQudmFsdWV9YDtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLm5leHQodGhpcy5jdXJyZW50U3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2VhcmNoSW5pdGlhbFN0YXRlKCkge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9zZWFyY2gvJykpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gYC8ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdLnRyaW0oKX1gO1xuICAgICAgdGhpcy5zZWFyY2hGaWVsZC52YWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnL3NlYXJjaC92YWx1ZT0nKVsxXS50cmltKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWhlYWRlcnMtY29sb3I6ICNhZmI0MmI7IFxcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXJpbW8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hbGwtbmV3cyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubmV3cy1jYXJkIHtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi8qIGNhcmQtc3R5bGUgKi9cXG4uY2FyZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uY2FyZCBpbWcge1xcbiAgbWF4LWhlaWdodDogMTMwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5jYXJkIC5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jYXJkIGg1IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2FyZCAuY2FyZC1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5tb2RhbCB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIG1vZGFsLXN0eWxlICovXFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2Uge1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVycy1jb2xvcik7XFxufVxcblxcbiNtb2RhbDEgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuIC8qIGVycm9yIHBhZ2Ugc3R5bGUgKi9cXG4uZXJyb3Ige1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4uZXJyb3IgaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5lcnJvciBoMyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Vycm9yLWxpbmsge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBhYm91dCBwYWdlIHN0eWxlICovXFxuXFxuLmFib3V0LCAuY29udGFjdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5pbnB1dC1maWVsZHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uZXdzLWNhcmQge1xcbiAgZmxleDogMCAwIDIzJTtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbi8qIG5hdiBzdHlsZSAqL1xcblxcbi5uYXYtbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UyNzIzO1xcbn1cXG5cXG4uYnJhbmQtbG9nbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxufVxcblxcbi5uYXYtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmJyYW5kLWxvZ28ge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMTAwMDAwMHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qZ2xvYmFscyB3aW5kb3cgX193ZWJwYWNrX2hhc2hfXyAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcblx0dmFyIGxhc3RIYXNoO1xuXHR2YXIgdXBUb0RhdGUgPSBmdW5jdGlvbiB1cFRvRGF0ZSgpIHtcblx0XHRyZXR1cm4gbGFzdEhhc2guaW5kZXhPZihfX3dlYnBhY2tfaGFzaF9fKSA+PSAwO1xuXHR9O1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjaygpIHtcblx0XHRtb2R1bGUuaG90XG5cdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gQ2Fubm90IGZpbmQgdXBkYXRlLiBOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCIpO1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSB3ZWJwYWNrLWRldi1zZXJ2ZXIpXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXVwVG9EYXRlKCkpIHtcblx0XHRcdFx0XHRjaGVjaygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVxdWlyZShcIi4vbG9nLWFwcGx5LXJlc3VsdFwiKSh1cGRhdGVkTW9kdWxlcywgdXBkYXRlZE1vZHVsZXMpO1xuXG5cdFx0XHRcdGlmICh1cFRvRGF0ZSgpKSB7XG5cdFx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnIpIHtcblx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdGlmIChbXCJhYm9ydFwiLCBcImZhaWxcIl0uaW5kZXhPZihzdGF0dXMpID49IDApIHtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gQ2Fubm90IGFwcGx5IHVwZGF0ZS4gTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBVcGRhdGUgZmFpbGVkOiBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cdHZhciBob3RFbWl0dGVyID0gcmVxdWlyZShcIi4vZW1pdHRlclwiKTtcblx0aG90RW1pdHRlci5vbihcIndlYnBhY2tIb3RVcGRhdGVcIiwgZnVuY3Rpb24oY3VycmVudEhhc2gpIHtcblx0XHRsYXN0SGFzaCA9IGN1cnJlbnRIYXNoO1xuXHRcdGlmICghdXBUb0RhdGUoKSAmJiBtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImlkbGVcIikge1xuXHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIENoZWNraW5nIGZvciB1cGRhdGVzIG9uIHRoZSBzZXJ2ZXIuLi5cIik7XG5cdFx0XHRjaGVjaygpO1xuXHRcdH1cblx0fSk7XG5cdGxvZyhcImluZm9cIiwgXCJbSE1SXSBXYWl0aW5nIGZvciB1cGRhdGUgc2lnbmFsIGZyb20gV0RTLi4uXCIpO1xufSBlbHNlIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9