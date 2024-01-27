/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_0__);


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


// ФУНКЦИОНАЛ HAMBURGER

var menu = document.querySelector('.header__menu');
document.querySelector('.header__hamburger').addEventListener('click', function (event) {
  event.stopPropagation();
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});
// ФУНКЦИОНАЛ ПРОКРУТКИ ВВЕРХ
// const goTopBtns = document.querySelectorAll('.go-top');
// goTopBtns.forEach((btn) => {
//   btn.addEventListener('click', goTop);
// });

// function trackScroll() {
//   const scrolled = window.scrollY;
//   const coords = document.documentElement.clientHeight;
//   if (scrolled > coords) {
//     goTopBtn.classList.add('go-top--show');
//   } else {
//     goTopBtn.classList.remove('go-top--show');
//   }
// }

// function goTop() {
//   if (window.scrollY > 0) {
//     window.scrollBy(0, -55);
//     setTimeout(goTop, 0);
//   }
// }

// ФУНКЦИОНАЛ КНОПОК ПЛЮС И МИНУС ДЛЯ РАЗРЕШЕНИЯ 375PX
// Находим все блоки с классом "button-container"
var buttonContainers = document.getElementsByClassName('button-container');

// Перебираем блоки и добавляем обработчики событий
var _loop = function _loop() {
  var buttonContainer = buttonContainers[i];

  // Находим кнопки в текущем блоке
  var buttonPlus = buttonContainer.querySelector('.plusM');
  var buttonMinus = buttonContainer.querySelector('.minusM');

  // Находим изображения в текущем блоке
  var imgPlusMobile = buttonContainer.querySelector('.img_plus_mobile');
  var imgMinusMobile = buttonContainer.querySelector('.img_minus_mobile');

  // Добавляем обработчики событий
  buttonPlus.addEventListener('click', function () {
    buttonPlus.classList.remove('active');
    buttonMinus.classList.add('active');
    imgPlusMobile.style.display = 'none';
    imgMinusMobile.style.display = 'block';
  });
  buttonMinus.addEventListener('click', function () {
    buttonMinus.classList.remove('active');
    buttonPlus.classList.add('active');
    imgMinusMobile.style.display = 'none';
    imgPlusMobile.style.display = 'block';
  });
};
for (var i = 0; i < buttonContainers.length; i++) {
  _loop();
}

// ФУНКЦИОНАЛ СКРЫВАЕМОГО ТЕКСТА
// Находим все блоки с классом "article__container"
var textContainers = document.getElementsByClassName('article__container');
// Перебираем блоки и добавляем обработчики событий
var _loop2 = function _loop2() {
  var textContainer = textContainers[_i];
  // Находим кнопки в текущем блоке
  var buttonShow = textContainer.querySelector('.show');
  var buttonHide = textContainer.querySelector('.hide');
  // Находим текст в текущем блоке
  var minText = textContainer.querySelector('.minText');
  var maxText = textContainer.querySelector('.maxText');
  // Добавляем обработчики событий
  buttonShow.addEventListener('click', function () {
    buttonShow.classList.remove('active');
    buttonHide.classList.add('active');
    minText.style.display = 'none';
    maxText.style.display = 'block';
  });
  buttonHide.addEventListener('click', function () {
    buttonHide.classList.remove('active');
    buttonShow.classList.add('active');
    minText.style.display = 'block';
    maxText.style.display = 'none';
  });
};
for (var _i = 0; _i < textContainers.length; _i++) {
  _loop2();
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map