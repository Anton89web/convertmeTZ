/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/activeItem.js":
/*!*************************************!*\
  !*** ./src/assets/js/activeItem.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeItem\": function() { return /* binding */ activeItem; }\n/* harmony export */ });\nfunction removeActive(items, addClass) {\n  items.forEach(e => e.classList.remove(addClass))\n}\n\nfunction activeItem(items, addClass) {\n  removeActive(items)\n  items.forEach(item => {\n    item.addEventListener(\"click\", () => {\n      removeActive(items, addClass)\n      item.classList.add(addClass)\n    })\n  })\n}\n\nactiveItem(document.querySelectorAll('.links__item'), 'header__link_active')\n\n\n//# sourceURL=webpack://ConvertMe/./src/assets/js/activeItem.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://ConvertMe/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/mack.js":
/*!*******************************!*\
  !*** ./src/assets/js/mack.js ***!
  \*******************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  let eventCalllback = function (e) {\n    let el = e.target,\n      clearVal = el.dataset.phoneClear,\n      pattern = el.dataset.phonePattern,\n      matrix_def = \"+7(___) ___-__-__\",\n      matrix = pattern ? pattern : matrix_def,\n      i = 0,\n      def = matrix.replace(/\\D/g, \"\"),\n      val = e.target.value.replace(/\\D/g, \"\");\n    if (clearVal !== 'false' && e.type === 'blur') {\n      if (val.length < matrix.match(/([\\_\\d])/g).length) {\n        e.target.value = '';\n        return;\n      }\n    }\n    if (def.length >= val.length) val = def;\n    e.target.value = matrix.replace(/./g, function (a) {\n      return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\n    });\n  }\n  let phone_inputs = document.querySelectorAll('[data-phone-pattern]');\n  for (let elem of phone_inputs) {\n    for (let ev of ['input', 'blur', 'focus']) {\n      elem.addEventListener(ev, eventCalllback);\n    }\n  }\n});\n\n//# sourceURL=webpack://ConvertMe/./src/assets/js/mack.js?");

/***/ }),

/***/ "./src/assets/js/mobileMenu.js":
/*!*************************************!*\
  !*** ./src/assets/js/mobileMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": function() { return /* binding */ showMenu; }\n/* harmony export */ });\nconst menuBtn = document.querySelector('.hamburger')\nconst menu = document.querySelector(\".header__links-wrapper\")\nconst lineTop = document.querySelector('.hamburger__line-top')\nconst lineCenter = document.querySelector('.hamburger__line-center')\nconst lineBottom = document.querySelector('.hamburger__line-bottom')\n\nfunction showMenu() {\n  menu.classList.toggle(\"hide_mobile_menu\")\n  document.body.classList.toggle(\"stop__scroll\")\n  lineTop.classList.toggle(\"top\")\n  lineCenter.classList.toggle(\"none\")\n  lineBottom.classList.toggle(\"bottom\")\n}\n\nmenuBtn.addEventListener(\"click\", e => showMenu())\n\n\n//# sourceURL=webpack://ConvertMe/./src/assets/js/mobileMenu.js?");

/***/ }),

/***/ "./src/assets/js/popup.js":
/*!********************************!*\
  !*** ./src/assets/js/popup.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileMenu */ \"./src/assets/js/mobileMenu.js\");\n\r\n\r\nfunction Popup() {\r\n  const popup = document.querySelector('.popup')\r\n  const btnModal = document.querySelector('.btn-modal')\r\n  const btnClose = document.querySelector('.popup__close')\r\n  const btnSubmit = document.querySelector('.form__btn')\r\n  const closeCross = document.querySelector(\".popup__close-cross\")\r\n  const body = document.body\r\n\r\n  const hidePopup = () => {\r\n    body.classList.remove('stop__scroll')\r\n    popup.classList.add('popup-hide')\r\n    popup.style.top = '0'\r\n  }\r\n\r\n  const showPopup = () => {\r\n    popup.style.top = `${window.pageYOffset}px`\r\n    popup.classList.remove('popup-hide')\r\n    ;(0,_mobileMenu__WEBPACK_IMPORTED_MODULE_0__.showMenu)()\r\n    body.classList.add('stop__scroll')\r\n  }\r\n\r\n  btnModal.addEventListener(\"click\", showPopup)\r\n\r\n  popup.addEventListener(\"click\", e => {\r\n    if (e.target === btnSubmit) {\r\n      e.preventDefault()\r\n      document.popup.reset()\r\n      hidePopup()\r\n    } else if (e.target === popup || e.target === btnClose || e.target === closeCross) {\r\n      hidePopup()\r\n    }\r\n  })\r\n}\r\n\r\nPopup()\n\n//# sourceURL=webpack://ConvertMe/./src/assets/js/popup.js?");

/***/ }),

/***/ "./src/assets/js/scrollTo.js":
/*!***********************************!*\
  !*** ./src/assets/js/scrollTo.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileMenu */ \"./src/assets/js/mobileMenu.js\");\n\r\n\r\nfunction scrollTo(links) {\r\n  links.forEach(link => link.addEventListener(\"click\", e => {\r\n    e.preventDefault()\r\n    ;(0,_mobileMenu__WEBPACK_IMPORTED_MODULE_0__.showMenu)()\r\n    const target = document.querySelector(\"#\" + link.hash.slice(1))\r\n    target.scrollIntoView({behavior: \"smooth\"})\r\n  }))\r\n}\r\n\r\nscrollTo(document.querySelectorAll('.link'))\n\n//# sourceURL=webpack://ConvertMe/./src/assets/js/scrollTo.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("$(document).ready(function(){\n  $('.carousel').slick({\n    dots: true,\n    infinite: true,\n    speed: 800,\n    fade: true,\n    cssEase: 'linear',\n    arrows: false,\n    autoplay: true,\n    autoplaySpeed: 2000,\n  });\n});\n\n\n//# sourceURL=webpack://ConvertMe/./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/tabContent.js":
/*!*************************************!*\
  !*** ./src/assets/js/tabContent.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _activeItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeItem */ \"./src/assets/js/activeItem.js\");\n\n\nconst arrContent = [\n  [\n    'Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).',\n    'Design & Create highly engaging industry-related content in both photo, gif & video format',\n    'Publish Posts on various social media channels',\n    'Promote content on social networks and monitor engagement (e.g. comments and shares)',\n    'Research industry-related topics',\n    'Editing audio and sound design on projects',\n    'Engage in opportunities to develop original content and concepts for web and mobile',\n    'Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.',\n    'Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels',\n  ],\n  [\n    'Requirements',\n    'Design & Create highly engaging industry-related content in both photo, gif & video format',\n    'Instagram, Tiktok and YouTube, adapting content to suit different channels',\n    'Publish Posts on various social media channels',\n    'Editing audio and sound design on projects',\n    'Promote content on social networks and monitor engagement (e.g. comments and shares)',\n    'Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest',\n    'Engage in opportunities to develop original content and concepts for web and mobile',\n    'Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.',\n  ],\n  [\n    'Responsibilities',\n    'Design & Create highly engaging industry-related content in both photo, gif & video format',\n    'Engage in opportunities to develop original content and concepts for web and mobile',\n    'Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.',\n    'Publish Posts on various social media channels',\n    'Promote content on social networks and monitor engagement (e.g. comments and shares)',\n    'Research industry-related topics',\n    'Editing audio and sound design on projects',\n    'Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels',\n  ],\n]\nconst ul = document.querySelector('.details__list-items')\nconst tabs = document.querySelectorAll('.details__tab')\n\nfunction insertContent(content) {\n  ul.innerHTML = ''\n  content.forEach(text => {\n    ul.insertAdjacentHTML(\"beforeend\",\n      `<li class=\"details__list-item\">${text}</li>`)\n  })\n}\n\nfunction createTabContent() {\n  (0,_activeItem__WEBPACK_IMPORTED_MODULE_0__.activeItem)(tabs, 'details__tab-active')\n  tabs.forEach((tab, i) => {\n    tab.addEventListener(\"click\", () => {\n      insertContent(arrContent[i])\n    })\n  })\n}\n\ncreateTabContent()\ninsertContent(arrContent[0])\n\n\n//# sourceURL=webpack://ConvertMe/./src/assets/js/tabContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/assets/js/activeItem.js");
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	__webpack_require__("./src/assets/js/mack.js");
/******/ 	__webpack_require__("./src/assets/js/mobileMenu.js");
/******/ 	__webpack_require__("./src/assets/js/popup.js");
/******/ 	__webpack_require__("./src/assets/js/scrollTo.js");
/******/ 	__webpack_require__("./src/assets/js/slider.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/tabContent.js");
/******/ 	
/******/ })()
;