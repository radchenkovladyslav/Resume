/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");


var init = function init() {
  var menu = $('.header-mob-right-menu');
  var menuImg = $('.header-mob-right-menu-img');
  var menuBox = $('.header-mob-right-menu-box');
  menu.on('click', function () {
    menu.toggleClass('is-active');
    menuImg.toggleClass('is-active');
    menuBox.fadeToggle(400);
  }); // выпадающие блоки

  $('.header-wrapper-nav-item').hover(function () {
    $(this).find('.header-nav-bar-spot').fadeIn(400);
    $(this).addClass('is-active');
  });
  $('.header-wrapper-nav-item').mouseleave(function () {
    $(this).find('.header-nav-bar-spot').fadeOut(200);
    $(this).removeClass('is-active');
  });
  $('.js-mob-menu-show-bar').on('click', function () {
    $(this).parent().find('.header-mob-right-menu-box-wrapper-right-item-desc-wrap').fadeToggle();
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  if (!sessionStorage.alreadyClicked) {
    var hidePreloader = function hidePreloader() {
      $('body .preloader').removeClass('is-active');
    };

    $('body .preloader').addClass('is-active');
    setTimeout(hidePreloader, 5000);
    sessionStorage.alreadyClicked = "true";
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ "./node_modules/ninelines-sharing/dist/ninelines-sharing.js");
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);


if (document.querySelector('[data-social]')) {
  var list = document.querySelectorAll('[data-social]');
  Array.prototype.forEach.call(list, function (item) {
    item.addEventListener('click', function (e) {
      var social = e.currentTarget.dataset.social;
      var url = location.origin + location.pathname;
      ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default.a[social](url);
    });
  });
}

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

var vars = {};
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);

vars.isMobile = function () {
  return innerWidth <= 1024;
};

vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};

vars.isIOS = function () {
  return vars.$html.hasClass('is-os-ios');
};

vars.winWidth = window.innerWidth;
/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/

vars.clearText = function (text) {
  return text.trim().replace(/\s+/g, ' ');
};
/**
* Создать куки запись
* @param {string} name Обязательное, название записи
* @param {string} value Обязательное, значение записи
* @param {string} days Обязательное, время для жизни
*/


vars.setCookie = function (name, value, days) {
  var expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }

  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
};
/**
* Получить куки запись
* @param {string} name Обязательное, название записи
*/


vars.getCookie = function (name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
};
/**
* Удалить куки запись
* @param {string} name Обязательное, название записи
*/


vars.eraseCookie = function (name) {
  document.cookie = "".concat(name, "=; Max-Age=-99999999;");
};

var dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/

vars.lockScroll = function (state, $element, name) {
  var element = $element.get(0) ? $element.get(0) : $element;

  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }

  var scrollLocks = dataScrollLocks;

  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"](element, {
      reserveScrollBarGap: true
    });
    setImmediate(function () {
      vars.$html.addClass('is-lock-scroll');
    });
  } else {
    if (typeof name === 'string') {
      scrollLocks["delete"](name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"](element);

    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["clearAllBodyScrollLocks"]();
      vars.$html.removeClass('is-lock-scroll');
    }
  }
};
/**
* Скролл до элемента
* @param {string} $container Обязательное, элемент к которому нужно скроллить
* @param {string|number} time Необязательное, время скролла
* @param {string|number} offset Необязательное, смещение скролла может быть + или -
*/


vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').stop().animate({
    scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
  }, parseInt(time, 10));
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, parseInt(time, 10) + 100);
};

var scrollDiv;
/**
* Получить размер скроллбара если он есть
* @returns {number} размер скроллбара
*/

vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.get(0).clientWidth;

  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  } // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it


  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }

  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};
/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/


function hasHoverSupport() {
  var hoverSupport;

  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }

  return hoverSupport;
}

if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}
/**
* Переопределение доступности ховера
*/


function resize() {
  setTimeout(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }

      vars.winWidth = window.innerWidth;
    }
  }, 300);
}

vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/preloader */ "./src/js/components/preloader.js");
/* harmony import */ var _modules_mapInteractive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mapInteractive */ "./src/js/modules/mapInteractive.js");
/* harmony import */ var _modules_otzyvStars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/otzyvStars */ "./src/js/modules/otzyvStars.js");
/* harmony import */ var _modules_formCheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/formCheckbox */ "./src/js/modules/formCheckbox.js");
/* harmony import */ var _modules_imgShowAnimate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/imgShowAnimate */ "./src/js/modules/imgShowAnimate.js");
/* harmony import */ var _modules_faqInteractive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/faqInteractive */ "./src/js/modules/faqInteractive.js");
/* harmony import */ var _modules_watchPopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/watchPopup */ "./src/js/modules/watchPopup.js");
/* harmony import */ var _modules_googleMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/googleMap */ "./src/js/modules/googleMap.js");
/* harmony import */ var _modules_licenseNav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/licenseNav */ "./src/js/modules/licenseNav.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _modules_sliderPreset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/sliderPreset */ "./src/js/modules/sliderPreset.js");
/* harmony import */ var _modules_showNumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/showNumbs */ "./src/js/modules/showNumbs.js");


















Object(_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_3__["ieFix"])();
Object(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_4__["vhFix"])();
_components_preloader__WEBPACK_IMPORTED_MODULE_6__["default"].init();
_modules_imgShowAnimate__WEBPACK_IMPORTED_MODULE_10__["default"].init();
_modules_mapInteractive__WEBPACK_IMPORTED_MODULE_7__["default"].init();
_modules_sliderPreset__WEBPACK_IMPORTED_MODULE_16__["default"].init();
_modules_otzyvStars__WEBPACK_IMPORTED_MODULE_8__["default"].init();
_modules_formCheckbox__WEBPACK_IMPORTED_MODULE_9__["default"].init();
_modules_faqInteractive__WEBPACK_IMPORTED_MODULE_11__["default"].init();
_modules_licenseNav__WEBPACK_IMPORTED_MODULE_14__["default"].init();
_modules_googleMap__WEBPACK_IMPORTED_MODULE_13__["default"].init();
_modules_watchPopup__WEBPACK_IMPORTED_MODULE_12__["default"].init();
_modules_showNumbs__WEBPACK_IMPORTED_MODULE_17__["default"].init();
_components_header__WEBPACK_IMPORTED_MODULE_5__["default"].init();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_15__["default"].init();

/***/ }),

/***/ "./src/js/modules/faqInteractive.js":
/*!******************************************!*\
  !*** ./src/js/modules/faqInteractive.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  var faqPoint = $('.home-faq-content-item ');
  faqPoint.on('click', function () {
    if ($(this).hasClass('is-active')) {
      faqPoint.removeClass('is-active');
      $(this).removeClass('is-active');
    } else {
      faqPoint.removeClass('is-active');
      $(this).addClass('is-active');
    }
  }); //geological interactive

  var geoPoint = $('.home-section-flex-right-table-text-item');
  geoPoint.on('click', function () {
    geoPoint.removeClass('is-active');
    $(this).addClass('is-active');

    if (geoPoint.last().hasClass('is-active')) {
      $('.home-section-flex-right-table-img').addClass('short');
    } else {
      $('.home-section-flex-right-table-img').removeClass('short');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/formCheckbox.js":
/*!****************************************!*\
  !*** ./src/js/modules/formCheckbox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  var checkboxIsChecked = $('#form-checkbox');

  function checked() {
    if (checkboxIsChecked[0].checked == true) {
      checkboxIsChecked.val('1');
    } else {
      checkboxIsChecked.val('0');
    }
  }

  checkboxIsChecked.on('click', function () {
    checked();
  }); // отправка формы

  $('#login-form-submit').on('click', function () {
    $('#login-form-submit-post').trigger('click');
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/googleMap.js":
/*!*************************************!*\
  !*** ./src/js/modules/googleMap.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    var mapOptions = {
      zoom: 18,
      center: new google.maps.LatLng(48.39361685025717, 135.12983322686944),
      styles: [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#000000"
        }, {
          "lightness": 40
        }]
      }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#000000"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }]
      }]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(48.39361685025717, 135.12983322686944),
      map: map,
      title: 'Snazzy!'
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/imgShowAnimate.js":
/*!******************************************!*\
  !*** ./src/js/modules/imgShowAnimate.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  function whowTopImg() {
    $('.js-img-show').each(function () {
      var imagePos = $(this).offset().top;
      var windowHeight = $(window).height();

      if (windowHeight > imagePos) {
        $(this).addClass("show");
      }
    });
  }

  $(document).ready(function () {
    setTimeout(whowTopImg, 1000);
  });
  $(window).scroll(function () {
    $('.js-img-show').each(function () {
      var imagePos = $(this).offset().top;
      var windowHeight = $(window).height();
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow + windowHeight - 200) {
        $(this).addClass("show");
      }
    });
  }); // right version

  function whowTopImgRight() {
    $('.js-img-show-right').each(function () {
      var imagePos = $(this).offset().top;
      var windowHeight = $(window).height();

      if (windowHeight > imagePos) {
        $(this).addClass("show");
      }
    });
  }

  $(document).ready(function () {
    setTimeout(whowTopImgRight, 1000);
  });
  $(window).scroll(function () {
    $('.js-img-show-right').each(function () {
      var imagePos = $(this).offset().top;
      var windowHeight = $(window).height();
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow + windowHeight - 200) {
        $(this).addClass("show");
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

var observer;
/**
* Модуль "Отложенная загрузка изображений"
* https://github.com/ApoorvSaxena/lozad.js
*/

var init = function init() {
  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
    rootMargin: '10px 0px',
    // syntax similar to that of CSS Margin
    threshold: 0.1,
    // ratio of element convergence
    enableAutoReload: true,
    // it will reload the new image when validating attributes changes
    loaded: function loaded(el) {
      el.classList.add('is-loaded');
    }
  });
  observer.observe();
};
/**
* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
* @param {string} img Обязательное, элемент img
*/


var trigger = function trigger(img) {
  observer.triggerLoad(img);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  trigger: trigger
});

/***/ }),

/***/ "./src/js/modules/licenseNav.js":
/*!**************************************!*\
  !*** ./src/js/modules/licenseNav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  var licensePoint = $('.company-license-nav-item');
  var licenseBox = $('.company-license-box');
  licensePoint.on('click', function () {
    var idLicense = $(this).attr('id');
    licensePoint.removeClass('is-active');
    $(this).addClass('is-active');

    if (idLicense == 'id-license-1') {
      $('.company-license-nav-license').addClass('is-active');

      if ($(window).width() < 1023) {
        $('.company-license-nav-license').slick('setPosition');
      }
    } else {
      $('.company-license-nav-license').removeClass('is-active');
    }

    if (idLicense == 'id-license-2') {
      $('.company-license-nav-sertificate').addClass('is-active');

      if ($(window).width() < 1023) {
        $('.company-license-nav-sertificate').slick('setPosition');
      }
    } else {
      $('.company-license-nav-sertificate').removeClass('is-active');
    }

    if (idLicense == 'id-license-3') {
      $('.company-license-nav-evidence').addClass('is-active');

      if ($(window).width() < 1023) {
        $('.company-license-nav-evidence').slick('setPosition');
      }
    } else {
      $('.company-license-nav-evidence').removeClass('is-active');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/mapInteractive.js":
/*!******************************************!*\
  !*** ./src/js/modules/mapInteractive.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  var infoPoint = $('.js-map-active');
  infoPoint.on('click', function () {
    if ($(this).children().hasClass('is-active')) {
      infoPoint.children().removeClass('is-active');
      $(this).children().removeClass('is-active');
    } else {
      infoPoint.children().removeClass('is-active');
      $(this).children().addClass('is-active');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/otzyvStars.js":
/*!**************************************!*\
  !*** ./src/js/modules/otzyvStars.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  // sumStars - число звезд рейтинга у отзыва
  var sumStars = 5;

  for (var i = 0; i < sumStars; i++) {
    $('.js-otzyv-stars').append('<img src="images/main/otzyv/star.svg" alt="" class="home-otzyv-content-item-stars-star" />');
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/showNumbs.js":
/*!*************************************!*\
  !*** ./src/js/modules/showNumbs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  var numbAnim;
  var numbStop;
  $(window).scroll(function () {
    var numbPos = $('.js-numb-show').offset().top;
    var windowHeight = $(window).height();
    var topOfWindow = $(window).scrollTop();

    if (numbPos < topOfWindow + windowHeight - 200 && numbStop != 2) {
      numbStart();
      console.log('srcoll', numbAnim);
    }
  });

  function numbStart() {
    numbStop = 2;
    var time = 1;
    $('.js-numb-show-item span').each(function () {
      var i = 1,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          _int = setInterval(function () {
        if (i <= num) {
          that.html(i);
        } else {
          clearInterval(_int);
        }

        i++;
      }, step);
    });
    console.log('numbStart', numbAnim);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/sliderPreset.js":
/*!****************************************!*\
  !*** ./src/js/modules/sliderPreset.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);



var init = function init() {
  // header-slider start
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-header .slider');
  var sliderProgress = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-slider-nav .progress');
  var progressBarLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-header .slider__label');
  var progressLast = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-header .progress-last');
  sliderProgress.addClass('is-active');
  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-header .home-slider-btn-next').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-header .slider').slick('slickNext');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-header .home-slider-btn-prev').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-header .slider').slick('slickPrev');
  });
  var quantitySlides = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".home-header .slider").slick("getSlick").slideCount;

  var sliderNav = function sliderNav(event, slick, currentSlide, nextSlide) {
    if (quantitySlides < 10) {
      progressLast.text('0' + quantitySlides);
    } else {
      progressLast.text(quantitySlides);
    }
  }; // progress bar 


  slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    sliderProgress.removeClass('is-active');
    setTimeout(function () {
      sliderProgress.addClass('is-active');
    }, 100);
  });
  sliderNav(); // header-slider end
  // company-slider start

  var sliderCompany = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-company-item .slider');
  sliderCompany.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows: false
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-company .home-slider-btn-next').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-company .slider').slick('slickNext');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-company .home-slider-btn-prev').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-company .slider').slick('slickPrev');
  }); // company-slider end
  // otzyv-slider start

  var sliderOtzyv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-otzyv .slider');
  sliderOtzyv.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    dots: false,
    arrows: false
  }); // otzyv-slider end
  // services-slider start

  var sliderServices = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-proposal .slider');
  sliderServices.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    dots: false,
    arrows: false
  }); // services-slider end
  // work-step-slider start

  var sliderStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .slider');
  var progressBarStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .progress');
  var progressBarLabelStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .slider__label');
  var progressLastStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .progress-last');
  sliderStep.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .step-work-btn-next').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .slider').slick('slickNext');
    var curentStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .slider').slick('slickCurrentSlide');
    var tureCurentStep = curentStep + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work-progress-first-numb').text(tureCurentStep);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .step-work-btn-prev').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .slider').slick('slickPrev');
    var curentStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .slider').slick('slickCurrentSlide');
    var tureCurentStep = curentStep + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work-progress-first-numb').text(tureCurentStep);
  });
  sliderStep.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var curentStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work .slider').slick('slickCurrentSlide');
    var tureCurentStep = curentStep + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work-progress-first-numb').text(tureCurentStep);
    setTimeout(function () {
      progressBarStep.addClass('is-active');
    }, 100);
  });
  sliderNav();
  var quantitySlidesStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".step-work .slider").slick("getSlick").slideCount;

  var sliderNav = function sliderNav(event, slick, currentSlide, nextSlide) {
    if (quantitySlidesStep < 10) {
      progressLastStep.text('0' + quantitySlidesStep);
    } else {
      progressLastStep.text(quantitySlidesStep);
    }
  };

  sliderNav();
  sliderStep.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    sliderProgress.removeClass('is-active');
    setTimeout(function () {
      sliderProgress.addClass('is-active');
    }, 100);
  }); // work-step-slider ens
  // team-slider start

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1023) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#team-team').addClass('slider');
    var sliderTeam = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.team .slider');
    sliderTeam.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      speed: 800,
      dots: false,
      arrows: false
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1023) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#team-team').addClass('slider');
      var sliderTeam = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.team .slider');
      sliderTeam.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 800,
        dots: false,
        arrows: false
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#team-team').removeClass('slider');
    }
  }); // team-slider ens
  // team-slider start

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1430) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.vacancy-advantages-box-right').addClass('slider');
    var sliderVacancy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.vacancy-advantages-box-right.slider');
    sliderVacancy.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      speed: 800,
      dots: false,
      arrows: false
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1430) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.vacancy-advantages-box-right').addClass('slider');
      var sliderVacancy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.vacancy-advantages-box-right.slider');
      sliderVacancy.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        infinite: false,
        arrows: false
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.vacancy-advantages-box-right').removeClass('slider');
    }
  }); // team-slider ens
  // otzyv-page-slider start

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1023) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#otzyv-content-flex').addClass('slider');
    var sliderVacancy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.otzyv-content-flex.slider');
    sliderVacancy.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      speed: 800,
      dots: false,
      arrows: false
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1023) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#otzyv-content-flex').addClass('slider');
      var sliderVacancy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.otzyv-content-flex.slider');
      sliderVacancy.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        infinite: false,
        arrows: false
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#otzyv-content-flex').removeClass('slider');
    }
  }); // team-slider end
  // article-news-slider start
  // var sliderArticleNews = $('.news-article-slider');
  // sliderArticleNews.slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 800,
  //   dots: false,
  //   infinite: false,
  //   arrows : false
  // });
  // $('.news-article-btn-next').on('click', function() {
  //   $('.news-article .slider').slick('slickNext');
  // });
  // $('.news-article-btn-prev').on('click', function() {
  //   $('.news-article .slider').slick('slickPrev');
  // });
  // article-news-slider end
  // company-slider start

  var sliderCompanySertif = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.company-license-box');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load resize', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 1023) {
      sliderCompanySertif.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        infinite: true,
        arrows: false
      });
    }
  });
  var sliderCompanySertifNav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.company-license-nav');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load resize', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 767) {
      sliderCompanySertifNav.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        infinite: false,
        arrows: false
      });
    }
  }); // company-slider end

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-geography-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows: false
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-section-flex-mob').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows: false
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load resize', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 1023) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        infinite: false,
        arrows: false
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work-mob-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows: false,
    asNavFor: '.step-work-mob-nav'
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-work-mob-nav').slick({
    asNavFor: '.step-work-mob-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/watchPopup.js":
/*!**************************************!*\
  !*** ./src/js/modules/watchPopup.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  $('.popup-contacts-closer').on('click', function () {
    $('.popup-contacts').fadeOut();
  });
  $('.js-popup-contacts-watch').on('click', function () {
    $('.popup-contacts').fadeIn();
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);




 // import objectFitVideos from 'object-fit-videos';

svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_4___default()(); // objectFitVideos();

window.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.objectFitImages = object_fit_images__WEBPACK_IMPORTED_MODULE_4___default.a; // window.objectFitVideos = objectFitVideos;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */

/**
* Много разных фиксов для ie,
* чтобы не было лишних проблем
* Performance.now()
* forEach
* CustomEvent
* includes
* matches
* closest
* prepend
* append
* before
* remove
* startsWith
* Performance.now()
* https://gist.github.com/paulirish/5438650
*/
var ieFix = function ieFix() {
  (function () {
    if ("performance" in window == false) {
      window.performance = {};
    } // thanks IE8


    Date.now = Date.now || function () {
      return new Date().getTime();
    };

    if ("now" in window.performance == false) {
      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })(); // forEach


  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // CustomEvent


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // includes


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  } // closest


  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // prepend


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }

      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }

      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }

      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }

      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  } // Fixes
  //---------------------------------
  // ie download


  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }

    var filename = el.getAttribute("download");

    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };

      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");

    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  } // ie svg focus fix


  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };

  unfocusableSvg(); //ie footer nailing

  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;

    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0; // eslint-disable-next-line no-unused-expressions

      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };

    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };

  ieFooterNailing();
};



/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vhFix", function() { return vhFix; });
/**
* Модуль исправления багов на iOs устройствах
* определяет высоту экрана и при любом изменении переопределяет её
* в стилях используйте кастомные стили var(--vh)
*/
var vhFix = function vhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    window.addEventListener('resize', function () {
      vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    });
  }
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map