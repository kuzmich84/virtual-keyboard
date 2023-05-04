/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/get-keys.js":
/*!****************************!*\
  !*** ./src/js/get-keys.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getKeys)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getKeys() {
  return _getKeys.apply(this, arguments);
}
function _getKeys() {
  _getKeys = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var keysURL, res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          keysURL = 'data/data.json';
          _context.next = 4;
          return fetch(keysURL);
        case 4:
          res = _context.sent;
          _context.next = 7;
          return res.json();
        case 7:
          return _context.abrupt("return", _context.sent);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          throw new Error('Возникла шибка получения клавиш');
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _getKeys.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ runOnKeys)
/* harmony export */ });
function runOnKeys(func) {
  for (var _len = arguments.length, codes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    codes[_key - 1] = arguments[_key];
  }
  var pressed = new Set();
  document.addEventListener('keydown', function (event) {
    pressed.add(event.code);
    for (var _i = 0, _codes = codes; _i < _codes.length; _i++) {
      var code = _codes[_i];
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', function (event) {
    pressed["delete"](event.code);
  });
}

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createKeyboard)
/* harmony export */ });
/* harmony import */ var _kyes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyes */ "./src/js/kyes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function createKeyboard() {
  var body = document.querySelector('body');
  var div = document.createElement('div');
  var keyboard = document.createElement('div');
  var keyboardKeys = document.createElement('div');
  var h1 = document.createElement('h1');
  var a = document.createElement('a');
  h1.innerText = 'RSS Виртуальная клавиатура';
  var textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.rows = '5';
  textarea.cols = '50';
  div.classList.add('container');
  div.append(h1);
  div.append(textarea);
  keyboard.classList.add('keyboard-wrapp');
  keyboardKeys.classList.add('keyboard-keys');
  (0,_kyes__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (keys) {
    return keys.map(function (item) {
      return keyboardKeys.append(item);
    });
  }).then(function () {
    var keyList = _toConsumableArray(document.querySelectorAll('.key'));
    keyList.map(function (key) {
      if (key.outerText === 'Backspace') {
        key.classList.add('key-backspace');
      } else if (key.outerText === 'Tab') {
        key.classList.add('key-tab');
      } else if (key.outerText === 'CapsLock') {
        key.classList.add('key-caps-lock');
      } else if (key.outerText === 'Enter') {
        key.classList.add('key-enter');
      } else if (key.outerText === 'Shift') {
        key.classList.add('key-shift');
      } else if (key.outerText === '') {
        key.classList.add('key-space');
      } else if (key.outerText === 'Ctrl') {
        key.classList.add('key-ctrl');
      } else if (key.outerText === 'Win') {
        key.classList.add('key-win');
      } else if (key.outerText === 'Alt') {
        key.classList.add('key-alt');
      }
      return null;
    });
    var shift = document.querySelectorAll('.key-shift');
    var ctrl = document.querySelectorAll('.key-ctrl');
    var alt = document.querySelectorAll('.key-alt');
    shift[0].classList.add('shift-left');
    shift[1].classList.add('shift-right');
    ctrl[0].classList.add('ctrl-left');
    ctrl[1].classList.add('ctrl-right');
    alt[0].classList.add('alt-left');
    alt[1].classList.add('alt-right');
  });
  keyboard.append(keyboardKeys);
  div.append(keyboard);
  ['Клавиатура создана в операционной системе Windows', 'Для переключения языка комбинация: левыe ctrl + alt'].map(function (item) {
    var p = document.createElement('p');
    p.innerText = item;
    return p;
  }).map(function (item2) {
    return div.append(item2);
  });
  a.href = 'https://github.com/kuzmich84/virtual-keyboard/pull/1';
  a.textContent = 'Ссылка на PullRequest: https://github.com/kuzmich84/virtual-keyboard/pull/1';
  div.append(a);
  body.append(div);
}

/***/ }),

/***/ "./src/js/kyes.js":
/*!************************!*\
  !*** ./src/js/kyes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createKyes)
/* harmony export */ });
/* harmony import */ var _get_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-keys */ "./src/js/get-keys.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createKyes() {
  return (0,_get_keys__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (data) {
    var rowList = Object.entries(data).map(function (item) {
      var row = document.createElement("div");
      item[1].map(function (key) {
        var keyDiv = document.createElement("div");
        keyDiv.classList.add("key");
        Object.entries(key).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            subKey = _ref2[0],
            value = _ref2[1];
          var span1 = document.createElement("span");
          span1.classList.add(subKey);
          Object.entries(value).map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              keyName = _ref4[0],
              valueName = _ref4[1];
            var span2 = document.createElement("span");
            if (subKey === "en" && keyName === "case-down") {
              span2.classList.add(keyName);
            } else {
              span2.classList.add(keyName);
              span2.classList.add("hidden");
            }
            span2.innerText = valueName;
            return span1.append(span2);
          });
          return keyDiv.append(span1);
        });
        return row.append(keyDiv);
      });
      row.classList.add("row");
      return row;
    });
    return rowList;
  });
}

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _js_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/keyboard */ "./src/js/keyboard.js");
/* harmony import */ var _js_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/helpers */ "./src/js/helpers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



(0,_js_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
function init() {
  var keys = _toConsumableArray(document.querySelectorAll('.key'));
  var textarea = document.querySelector('textarea');
  keys.map(function (item, i, arr) {
    if (i === 0) {
      item.setAttribute('keycode', 'Backquote');
    } else if (i > 0 && i <= 10) {
      item.setAttribute('keycode', "Digit".concat(arr[i].innerText.toUpperCase()));
    } else if (i === 11) {
      item.setAttribute('keycode', 'Minus');
    } else if (i === 12) {
      item.setAttribute('keycode', 'Equal');
    } else if (i === 13) {
      item.setAttribute('keycode', 'Backspace');
    } else if (i === 14) {
      item.setAttribute('keycode', 'Tab');
    } else if (i === 25) {
      item.setAttribute('keycode', 'BracketLeft');
    } else if (i === 26) {
      item.setAttribute('keycode', 'BracketRight');
    } else if (i === 27) {
      item.setAttribute('keycode', 'Backslash');
    } else if (i === 28) {
      item.setAttribute('keycode', 'CapsLock');
    } else if (i === 38) {
      item.setAttribute('keycode', 'Semicolon');
    } else if (i === 39) {
      item.setAttribute('keycode', 'Quote');
    } else if (i === 40) {
      item.setAttribute('keycode', 'Enter');
    } else if (i === 41) {
      item.setAttribute('keycode', 'ShiftLeft');
    } else if (i === 49) {
      item.setAttribute('keycode', 'Comma');
    } else if (i === 50) {
      item.setAttribute('keycode', 'Period');
    } else if (i === 51) {
      item.setAttribute('keycode', 'Slash');
    } else if (i === 52) {
      item.setAttribute('keycode', 'ArrowUp');
    } else if (i === 53) {
      item.setAttribute('keycode', 'ShiftRight');
    } else if (i === 54) {
      item.setAttribute('keycode', 'ControlLeft');
    } else if (i === 55) {
      item.setAttribute('keycode', 'OSLeft');
    } else if (i === 56) {
      item.setAttribute('keycode', 'AltLeft');
    } else if (i === 57) {
      item.setAttribute('keycode', 'Space');
    } else if (i === 58) {
      item.setAttribute('keycode', 'AltRight');
    } else if (i === 59) {
      item.setAttribute('keycode', 'ArrowLeft');
    } else if (i === 60) {
      item.setAttribute('keycode', 'ArrowDown');
    } else if (i === 61) {
      item.setAttribute('keycode', 'ArrowRight');
    } else if (i === 62) {
      item.setAttribute('keycode', 'ControlRight');
    } else {
      item.setAttribute('keycode', "Key".concat(arr[i].innerText.toUpperCase()));
    }
    item.querySelector('.ru').classList.add('hidden');
    return null;
  });
  var isCaps = false;
  window.addEventListener('keydown', function (e) {
    e.preventDefault();
    keys.map(function (item, i, arr) {
      if (e.code === arr[i].getAttribute('keycode')) {
        arr[i].classList.add('active');
        var spanList = _toConsumableArray(item.querySelector(".".concat(localStorage.lang)).querySelectorAll('span'));
        spanList.map(function (spanitem) {
          if (!spanitem.classList.contains('hidden')) {
            if (e.code === 'Tab' || e.code === 'Space') {
              textarea.value += '  ';
              return '';
            }
            if (e.code === 'CapsLock' || e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'ControlRight' || e.code === 'ControlLeft' || e.code === 'AltRight' || e.code === 'AltLeft') {
              return '';
            }
            if (e.code === 'Enter') {
              textarea.value += '\r\n';
              return '';
            }
            if (e.code === 'Backspace') {
              textarea.value = textarea.value.slice(0, -1);
              return '';
            }
            if (e.code === 'ArrowLeft' || e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowRight') {
              return '';
            }
            textarea.value += spanitem.innerText;
          }
          return true;
        });
      }
      return true;
    });
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      keys.map(function (item) {
        if (isCaps) {
          item.querySelector(".".concat(localStorage.lang)).querySelector('.caps').classList.add('hidden');
          item.querySelector(".".concat(localStorage.lang)).querySelector('.shift-caps').classList.remove('hidden');
          return '';
        }
        item.querySelector(".".concat(localStorage.lang)).querySelector('.case-down').classList.add('hidden');
        item.querySelector(".".concat(localStorage.lang)).querySelector('.case-up').classList.remove('hidden');
        return true;
      });
    }
    if (e.code === 'CapsLock') {
      if (isCaps) {
        isCaps = false;
      } else {
        isCaps = true;
      }
      keys.map(function (item) {
        item.querySelector(".".concat(localStorage.lang)).querySelector('.case-down').classList.toggle('hidden');
        item.querySelector(".".concat(localStorage.lang)).querySelector('.caps').classList.toggle('hidden');
        return true;
      });
    }
  });
  window.addEventListener('keyup', function (e) {
    keys.map(function (item, i, arr) {
      if (e.code === arr[i].getAttribute('keycode')) {
        arr[i].classList.remove('active');
        arr[i].classList.add('remove');
      }
      setTimeout(function () {
        arr[i].classList.remove('remove');
      }, 200);
      return null;
    });
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      keys.map(function (item) {
        if (isCaps) {
          item.querySelector(".".concat(localStorage.lang)).querySelector('.caps').classList.remove('hidden');
          item.querySelector(".".concat(localStorage.lang)).querySelector('.shift-caps').classList.add('hidden');
          return '';
        }
        item.querySelector(".".concat(localStorage.lang)).querySelector('.case-down').classList.remove('hidden');
        item.querySelector(".".concat(localStorage.lang)).querySelector('.case-up').classList.add('hidden');
        return null;
      });
    }
  });
  keys.map(function (key) {
    key.addEventListener('mousedown', function (e) {
      e.currentTarget.classList.add('active');
      var spanList = _toConsumableArray(e.currentTarget.querySelector(".".concat(localStorage.lang)).querySelectorAll('span'));
      if (e.currentTarget.getAttribute('keycode') === 'CapsLock') {
        keys.map(function (itemCaps) {
          itemCaps.querySelector(".".concat(localStorage.lang)).querySelector('.case-down').classList.toggle('hidden');
          itemCaps.querySelector(".".concat(localStorage.lang)).querySelector('.caps').classList.toggle('hidden');
          return true;
        });
      }
      if (e.currentTarget.getAttribute('keycode') === 'ShiftLeft') {
        keys.map(function (itemShift) {
          if (isCaps) {
            itemShift.querySelector(".".concat(localStorage.lang)).querySelector('.caps').classList.remove('hidden');
            itemShift.querySelector(".".concat(localStorage.lang)).querySelector('.shift-caps').classList.add('hidden');
            return '';
          }
          itemShift.querySelector(".".concat(localStorage.lang)).querySelector('.case-down').classList.remove('hidden');
          itemShift.querySelector(".".concat(localStorage.lang)).querySelector('.case-up').classList.add('hidden');
          return null;
        });
      }
      spanList.map(function (item) {
        if (!item.classList.contains('hidden')) {
          if (item.innerText === 'Tab' || e.code === 'Space') {
            textarea.value += '  ';
            return '';
          }
          if (item.innerText === 'CapsLock' || item.innerText === 'Shift' || item.innerText === 'Ctrl' || item.innerText === 'Alt') {
            return '';
          }
          if (item.innerText === 'Enter') {
            textarea.value += '\r\n';
            return '';
          }
          if (item.innerText === 'Backspace') {
            textarea.value = textarea.value.slice(0, -1);
            return '';
          }
          if (item.innerText === '◄' || item.innerText === '▲' || item.innerText === '▼' || item.innerText === '►') {
            return '';
          }
          textarea.value += item.innerText;
        }
        return true;
      });
    });
    key.addEventListener('mouseup', function (e) {
      e.currentTarget.classList.remove('active');
      e.currentTarget.classList.add('remove');
      setTimeout(function () {
        key.classList.remove('remove');
      }, 200);
    });
    return null;
  });
  (0,_js_helpers__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    if (localStorage.lang === 'en') {
      localStorage.setItem('lang', 'ru');
    } else {
      localStorage.setItem('lang', 'en');
    }
    keys.map(function (item) {
      item.querySelector('.en').classList.toggle('hidden');
      item.querySelector('.ru').classList.toggle('hidden');
      item.querySelector('.ru').querySelector('.case-down').classList.toggle('hidden');
      item.querySelector('.en').querySelector('.case-down').classList.toggle('hidden');
      return null;
    });
  }, 'ControlLeft', 'AltLeft');
}
setTimeout(function () {
  localStorage.setItem('lang', 'en');
  init();
}, 1000);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map