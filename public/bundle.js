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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/fetchCalls/getAllData/getAllThoughtsFromDatabase.js":
/*!*****************************************************************!*\
  !*** ./lib/fetchCalls/getAllData/getAllThoughtsFromDatabase.js ***!
  \*****************************************************************/
/*! exports provided: getAllThoughtsFromDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllThoughtsFromDatabase", function() { return getAllThoughtsFromDatabase; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _insertThoughtsInHtmlElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertThoughtsInHtmlElement */ "./lib/fetchCalls/getAllData/insertThoughtsInHtmlElement.js");



var getAllThoughtsFromDatabase = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:3000/api', {
              method: 'GET'
            }).then(function (res) {
              return res.json();
            }).then(_insertThoughtsInHtmlElement__WEBPACK_IMPORTED_MODULE_2__["insertThoughtsInHtmlElement"])["catch"](console.log);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllThoughtsFromDatabase() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./lib/fetchCalls/getAllData/insertThoughtsInHtmlElement.js":
/*!******************************************************************!*\
  !*** ./lib/fetchCalls/getAllData/insertThoughtsInHtmlElement.js ***!
  \******************************************************************/
/*! exports provided: insertThoughtsInHtmlElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertThoughtsInHtmlElement", function() { return insertThoughtsInHtmlElement; });
/* harmony import */ var _src_functions_createElementParagraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/functions/createElementParagraph */ "./src/functions/createElementParagraph.js");

var insertThoughtsInHtmlElement = function insertThoughtsInHtmlElement(array) {
  var idElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-toughts-area';
  var div = document.querySelector(idElement);

  if (array.length === 0) {
    Object(_src_functions_createElementParagraph__WEBPACK_IMPORTED_MODULE_0__["createElementParagraph"])(div, 'No tienes ningun pensamiento, pero puedes comenzar agregando alguno');
  }

  array.map(function (tought) {
    div.insertAdjacentHTML('afterbegin', "<div class=\"card w-50 col-lg-3\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-start\">\n            <h5 class=\"card-title\">".concat(tought.title, "</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\" class=\"js-close-btn\" data-name=\"").concat(tought.title, "\">&times;</span>\n            </button>\n          </div>\n          <p class=\"card-text\">").concat(tought.tought, "</p>\n        </div>\n      </div>"));
  });
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/functions/addAlert/addAlerts.js":
/*!*********************************************!*\
  !*** ./src/functions/addAlert/addAlerts.js ***!
  \*********************************************/
/*! exports provided: addAlerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAlerts", function() { return addAlerts; });
var addAlerts = function addAlerts(typeAlert, message) {
  var idElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-messages';
  var divAlerts = document.querySelector(idElement);
  return divAlerts.insertAdjacentHTML('afterBegin', "<div class=\"alert alert-".concat(typeAlert, " alert-dismissible fade show js-info-alert\" role=\"alert\">\n      <strong>Info </strong>").concat(message, " \n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>"));
};

/***/ }),

/***/ "./src/functions/addNewTought.js":
/*!***************************************!*\
  !*** ./src/functions/addNewTought.js ***!
  \***************************************/
/*! exports provided: addNewTought */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewTought", function() { return addNewTought; });
var addNewTought = function addNewTought(data) {
  var idElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-toughts-area';
  var title = data.title,
      tought = data.tought;
  var div = document.querySelector(idElement);
  var pInfo = document.querySelector('.js-no-toughts');
  if (pInfo) pInfo.remove();
  return div.insertAdjacentHTML('afterbegin', "<div class=\"card w-50 col-lg-3\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-start\">\n            <h5 class=\"card-title\">".concat(title, "</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\" class=\"js-close-btn\">&times;</span>\n            </button>\n          </div>\n          <p class=\"card-text\">").concat(tought, "</p>\n        </div>\n      </div>"));
};

/***/ }),

/***/ "./src/functions/createElementParagraph.js":
/*!*************************************************!*\
  !*** ./src/functions/createElementParagraph.js ***!
  \*************************************************/
/*! exports provided: createElementParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementParagraph", function() { return createElementParagraph; });
var createElementParagraph = function createElementParagraph(elementHTML, textElement) {
  elementHTML.insertAdjacentHTML('afterbegin', "<p class=\"js-no-toughts\">".concat(textElement, "</p>"));
};

/***/ }),

/***/ "./src/functions/createErrorAlerts.js":
/*!********************************************!*\
  !*** ./src/functions/createErrorAlerts.js ***!
  \********************************************/
/*! exports provided: createErrorAlerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorAlerts", function() { return createErrorAlerts; });
/* harmony import */ var _addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAlert/addAlerts */ "./src/functions/addAlert/addAlerts.js");

var createErrorAlerts = function createErrorAlerts(data) {
  data.map(function (elem) {
    Object(_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_0__["addAlerts"])('danger', "".concat(elem));
  });
};

/***/ }),

/***/ "./src/functions/deleteElementByDataset.js":
/*!*************************************************!*\
  !*** ./src/functions/deleteElementByDataset.js ***!
  \*************************************************/
/*! exports provided: deleteElementByDataset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteElementByDataset", function() { return deleteElementByDataset; });
var deleteElementByDataset = function deleteElementByDataset(dataset) {
  var divToughts = Array.from(document.querySelectorAll('.js-close-btn'));
  divToughts.map(function (element) {
    if (dataset === element.dataset.name) {
      element.parentElement.parentElement.parentElement.parentElement.remove();
    }
  });
};

/***/ }),

/***/ "./src/functions/deleteInputs.js":
/*!***************************************!*\
  !*** ./src/functions/deleteInputs.js ***!
  \***************************************/
/*! exports provided: deleteInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInputs", function() { return deleteInputs; });
var deleteInputs = function deleteInputs(idElement) {
  var form = document.querySelector(idElement);
  var inputs = Array.from(form.getElementsByTagName("input"));
  return inputs.map(function (input) {
    return input.value = '';
  });
};

/***/ }),

/***/ "./src/functions/hideAlertWithSeconds.js":
/*!***********************************************!*\
  !*** ./src/functions/hideAlertWithSeconds.js ***!
  \***********************************************/
/*! exports provided: hideAlertWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAlertWithSeconds", function() { return hideAlertWithSeconds; });
var hideAlertWithSeconds = function hideAlertWithSeconds(miliseconds, className) {
  setTimeout(function () {
    document.querySelector(className).remove();
  }, miliseconds);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fetchCalls_getAllData_getAllThoughtsFromDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fetchCalls/getAllData/getAllThoughtsFromDatabase */ "./lib/fetchCalls/getAllData/getAllThoughtsFromDatabase.js");
/* harmony import */ var _functions_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/addAlert/addAlerts */ "./src/functions/addAlert/addAlerts.js");
/* harmony import */ var _functions_addNewTought__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/addNewTought */ "./src/functions/addNewTought.js");
/* harmony import */ var _functions_createErrorAlerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/createErrorAlerts */ "./src/functions/createErrorAlerts.js");
/* harmony import */ var _functions_deleteElementByDataset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/deleteElementByDataset */ "./src/functions/deleteElementByDataset.js");
/* harmony import */ var _functions_deleteInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/deleteInputs */ "./src/functions/deleteInputs.js");
/* harmony import */ var _functions_hideAlertWithSeconds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/hideAlertWithSeconds */ "./src/functions/hideAlertWithSeconds.js");









document.addEventListener('DOMContentLoaded', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var form, areaTougths;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(_lib_fetchCalls_getAllData_getAllThoughtsFromDatabase__WEBPACK_IMPORTED_MODULE_2__["getAllThoughtsFromDatabase"])();

        case 2:
          form = document.querySelector('.js-form');
          form.addEventListener('submit', function (event) {
            event.preventDefault();
            var inputs = Array.from(form.getElementsByTagName("input"));
            var values = inputs.map(function (input) {
              return input.value;
            });
            var dataObj = {
              title: values[0],
              tought: values[1]
            };
            fetch('/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataObj)
            }).then(function (res) {
              return res.json();
            }).then(function (data) {
              if (data.errors) {
                Object(_functions_createErrorAlerts__WEBPACK_IMPORTED_MODULE_5__["createErrorAlerts"])(data.errors);
                return;
              }

              Object(_functions_deleteInputs__WEBPACK_IMPORTED_MODULE_7__["deleteInputs"])('.js-form');
              Object(_functions_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_3__["addAlerts"])('success', 'Pensamiento guardado con exito');
              Object(_functions_hideAlertWithSeconds__WEBPACK_IMPORTED_MODULE_8__["hideAlertWithSeconds"])(3000, '.js-info-alert');
              Object(_functions_addNewTought__WEBPACK_IMPORTED_MODULE_4__["addNewTought"])(data);
            })["catch"](function (err) {
              console.log(err);
              Object(_functions_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_3__["addAlerts"])('danger', 'Ha ocurrido un error intenta de nuevo');
            });
          });
          areaTougths = document.querySelector('.js-toughts');
          areaTougths.addEventListener('click', /*#__PURE__*/function () {
            var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
              var idElement, resp, data;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(event.target.tagName !== 'SPAN')) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      idElement = {
                        title: event.target.dataset.name
                      };
                      _context.prev = 3;
                      _context.next = 6;
                      return fetch("http://localhost:3000/api".concat(idElement), {
                        method: "DELETE",
                        headers: {
                          'Content-type': "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify(idElement)
                      });

                    case 6:
                      resp = _context.sent;
                      _context.next = 9;
                      return resp.json();

                    case 9:
                      data = _context.sent;
                      Object(_functions_deleteElementByDataset__WEBPACK_IMPORTED_MODULE_6__["deleteElementByDataset"])(data.title);
                      Object(_functions_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_3__["addAlerts"])('success', 'se elimino con exito el pensamiento');
                      Object(_functions_hideAlertWithSeconds__WEBPACK_IMPORTED_MODULE_8__["hideAlertWithSeconds"])(3000, '.js-info-alert');
                      _context.next = 18;
                      break;

                    case 15:
                      _context.prev = 15;
                      _context.t0 = _context["catch"](3);
                      console.log(_context.t0);

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[3, 15]]);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZldGNoQ2FsbHMvZ2V0QWxsRGF0YS9nZXRBbGxUaG91Z2h0c0Zyb21EYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZmV0Y2hDYWxscy9nZXRBbGxEYXRhL2luc2VydFRob3VnaHRzSW5IdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9hZGRBbGVydC9hZGRBbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9hZGROZXdUb3VnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVFbGVtZW50UGFyYWdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlRXJyb3JBbGVydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9kZWxldGVFbGVtZW50QnlEYXRhc2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZGVsZXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvaGlkZUFsZXJ0V2l0aFNlY29uZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldEFsbFRob3VnaHRzRnJvbURhdGFiYXNlIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwianNvbiIsImluc2VydFRob3VnaHRzSW5IdG1sRWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJhcnJheSIsImlkRWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImNyZWF0ZUVsZW1lbnRQYXJhZ3JhcGgiLCJtYXAiLCJ0b3VnaHQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0aXRsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwicnVudGltZSIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsIm9iaiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJjYWxsIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZWNvcmQiLCJyZXN1bHQiLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0Iiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiRnVuY3Rpb24iLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZ2V0IiwibCIsImFkZEFsZXJ0cyIsInR5cGVBbGVydCIsIm1lc3NhZ2UiLCJkaXZBbGVydHMiLCJhZGROZXdUb3VnaHQiLCJkYXRhIiwicEluZm8iLCJyZW1vdmUiLCJlbGVtZW50SFRNTCIsInRleHRFbGVtZW50IiwiY3JlYXRlRXJyb3JBbGVydHMiLCJlbGVtIiwiZGVsZXRlRWxlbWVudEJ5RGF0YXNldCIsImRhdGFzZXQiLCJkaXZUb3VnaHRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZGVsZXRlSW5wdXRzIiwiZm9ybSIsImlucHV0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5wdXQiLCJoaWRlQWxlcnRXaXRoU2Vjb25kcyIsIm1pbGlzZWNvbmRzIiwiY2xhc3NOYW1lIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YU9iaiIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9ycyIsImFyZWFUb3VndGhzIiwidGFyZ2V0IiwidGFnTmFtZSIsInJlc3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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bnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgaW5zZXJ0VGhvdWdodHNJbkh0bWxFbGVtZW50IH0gZnJvbSBcIi4vaW5zZXJ0VGhvdWdodHNJbkh0bWxFbGVtZW50XCJcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRob3VnaHRzRnJvbURhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaScsIHtcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oaW5zZXJ0VGhvdWdodHNJbkh0bWxFbGVtZW50KVxuICAgIC5jYXRjaChjb25zb2xlLmxvZylcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50UGFyYWdyYXBoIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudFBhcmFncmFwaFwiXG5cbmV4cG9ydCBjb25zdCBpbnNlcnRUaG91Z2h0c0luSHRtbEVsZW1lbnQgPSAoXG4gIGFycmF5LFxuICBpZEVsZW1lbnQgPSAnLmpzLXRvdWdodHMtYXJlYSdcbikgPT4ge1xuICBcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZEVsZW1lbnQpXG4gIFxuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgY3JlYXRlRWxlbWVudFBhcmFncmFwaChcbiAgICAgIGRpdixcbiAgICAgICdObyB0aWVuZXMgbmluZ3VuIHBlbnNhbWllbnRvLCBwZXJvIHB1ZWRlcyBjb21lbnphciBhZ3JlZ2FuZG8gYWxndW5vJ1xuICAgIClcbiAgfVxuXG4gIGFycmF5Lm1hcCh0b3VnaHQgPT4ge1xuICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLFxuICAgIGA8ZGl2IGNsYXNzPVwiY2FyZCB3LTUwIGNvbC1sZy0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHt0b3VnaHQudGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImpzLWNsb3NlLWJ0blwiIGRhdGEtbmFtZT1cIiR7dG91Z2h0LnRpdGxlfVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiR7dG91Z2h0LnRvdWdodH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YFxuICAgIClcbiAgfSlcbiBcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJleHBvcnQgY29uc3QgYWRkQWxlcnRzID0gKHR5cGVBbGVydCwgbWVzc2FnZSwgaWRFbGVtZW50ID0gJy5qcy1tZXNzYWdlcycpID0+IHtcbiAgY29uc3QgZGl2QWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZEVsZW1lbnQpXG5cbiAgcmV0dXJuIGRpdkFsZXJ0cy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLFxuICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtJHt0eXBlQWxlcnR9IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyBqcy1pbmZvLWFsZXJ0XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8c3Ryb25nPkluZm8gPC9zdHJvbmc+JHttZXNzYWdlfSBcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+YFxuICApXG59IiwiZXhwb3J0IGNvbnN0IGFkZE5ld1RvdWdodCA9IChkYXRhLCBpZEVsZW1lbnQgPSAnLmpzLXRvdWdodHMtYXJlYScpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgdG91Z2h0IH0gPSBkYXRhXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWRFbGVtZW50KVxuICBjb25zdCBwSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uby10b3VnaHRzJylcblxuICBpZihwSW5mbykgcEluZm8ucmVtb3ZlKClcblxuICByZXR1cm4gZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgYDxkaXYgY2xhc3M9XCJjYXJkIHctNTAgY29sLWxnLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke3RpdGxlfTwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJqcy1jbG9zZS1idG5cIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj4ke3RvdWdodH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YFxuICApXG4gIFxufSIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50UGFyYWdyYXBoID0gKGVsZW1lbnRIVE1MLCB0ZXh0RWxlbWVudCkgPT4ge1xuICBlbGVtZW50SFRNTC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLFxuICAgIGA8cCBjbGFzcz1cImpzLW5vLXRvdWdodHNcIj4ke3RleHRFbGVtZW50fTwvcD5gXG4gIClcbn0iLCJpbXBvcnQgeyBhZGRBbGVydHMgfSBmcm9tIFwiLi9hZGRBbGVydC9hZGRBbGVydHNcIlxuXG5leHBvcnQgY29uc3QgY3JlYXRlRXJyb3JBbGVydHMgPSAoZGF0YSkgPT4ge1xuXG4gIGRhdGEubWFwKGVsZW0gPT4ge1xuICAgIGFkZEFsZXJ0cyhcbiAgICAgICdkYW5nZXInLFxuICAgICAgYCR7ZWxlbX1gXG4gICAgKVxuICB9KVxuXG59IiwiZXhwb3J0IGNvbnN0IGRlbGV0ZUVsZW1lbnRCeURhdGFzZXQgPSAoZGF0YXNldCkgPT4ge1xuICBjb25zdCBkaXZUb3VnaHRzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xvc2UtYnRuJylcbiAgKTtcbiAgXG4gIGRpdlRvdWdodHMubWFwKGVsZW1lbnQgPT4ge1xuICAgIGlmIChkYXRhc2V0ID09PSBlbGVtZW50LmRhdGFzZXQubmFtZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuICB9KVxufSIsImV4cG9ydCBjb25zdCBkZWxldGVJbnB1dHMgPSAoaWRFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkRWxlbWVudClcbiAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIikpXG4gIHJldHVybiBpbnB1dHMubWFwKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpXG5cbn1cblxuXG4iLCJleHBvcnQgY29uc3QgaGlkZUFsZXJ0V2l0aFNlY29uZHMgPSAobWlsaXNlY29uZHMsIGNsYXNzTmFtZSkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSkucmVtb3ZlKClcbiAgfSwgbWlsaXNlY29uZHMpO1xufSIsImltcG9ydCB7IGdldEFsbFRob3VnaHRzRnJvbURhdGFiYXNlIH0gZnJvbSAnLi4vbGliL2ZldGNoQ2FsbHMvZ2V0QWxsRGF0YS9nZXRBbGxUaG91Z2h0c0Zyb21EYXRhYmFzZSdcbmltcG9ydCB7IGFkZEFsZXJ0cyB9IGZyb20gJy4vZnVuY3Rpb25zL2FkZEFsZXJ0L2FkZEFsZXJ0cydcbmltcG9ydCB7IGFkZE5ld1RvdWdodCB9IGZyb20gJy4vZnVuY3Rpb25zL2FkZE5ld1RvdWdodCdcbmltcG9ydCB7IGNyZWF0ZUVycm9yQWxlcnRzIH0gZnJvbSAnLi9mdW5jdGlvbnMvY3JlYXRlRXJyb3JBbGVydHMnXG5pbXBvcnQgeyBkZWxldGVFbGVtZW50QnlEYXRhc2V0IH0gZnJvbSAnLi9mdW5jdGlvbnMvZGVsZXRlRWxlbWVudEJ5RGF0YXNldCdcbmltcG9ydCB7IGRlbGV0ZUlucHV0cyB9IGZyb20gJy4vZnVuY3Rpb25zL2RlbGV0ZUlucHV0cydcbmltcG9ydCB7IGhpZGVBbGVydFdpdGhTZWNvbmRzIH0gZnJvbSAnLi9mdW5jdGlvbnMvaGlkZUFsZXJ0V2l0aFNlY29uZHMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIFxuICBhd2FpdCBnZXRBbGxUaG91Z2h0c0Zyb21EYXRhYmFzZSgpXG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtJylcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIikpXG4gICAgY29uc3QgdmFsdWVzID0gaW5wdXRzLm1hcChpbnB1dCA9PiBpbnB1dC52YWx1ZSlcblxuICAgIGNvbnN0IGRhdGFPYmogPSB7XG4gICAgICB0aXRsZTogdmFsdWVzWzBdLFxuICAgICAgdG91Z2h0OiB2YWx1ZXNbMV1cbiAgICB9XG5cbiAgICBmZXRjaCgnLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YU9iailcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcblxuICAgICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICBjcmVhdGVFcnJvckFsZXJ0cyhkYXRhLmVycm9ycylcbiAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZUlucHV0cygnLmpzLWZvcm0nKVxuICAgICAgICBhZGRBbGVydHMoXG4gICAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAgICdQZW5zYW1pZW50byBndWFyZGFkbyBjb24gZXhpdG8nXG4gICAgICAgIClcblxuICAgICAgICBoaWRlQWxlcnRXaXRoU2Vjb25kcygzMDAwLCAnLmpzLWluZm8tYWxlcnQnKVxuXG4gICAgICAgIGFkZE5ld1RvdWdodChkYXRhKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGFkZEFsZXJ0cyhcbiAgICAgICAgICAnZGFuZ2VyJyxcbiAgICAgICAgICAnSGEgb2N1cnJpZG8gdW4gZXJyb3IgaW50ZW50YSBkZSBudWV2bydcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBcbiAgfSlcblxuICBjb25zdCBhcmVhVG91Z3RocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b3VnaHRzJylcbiAgXG4gIGFyZWFUb3VndGhzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnU1BBTicpIHJldHVybiBcblxuICAgIGNvbnN0IGlkRWxlbWVudCA9IHtcbiAgICAgIHRpdGxlOiBldmVudC50YXJnZXQuZGF0YXNldC5uYW1lXG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkke2lkRWxlbWVudH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZEVsZW1lbnQpXG4gICAgICB9KVxuICAgICAgXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKClcbiAgICAgIGRlbGV0ZUVsZW1lbnRCeURhdGFzZXQoZGF0YS50aXRsZSlcblxuICAgICAgYWRkQWxlcnRzKFxuICAgICAgICAnc3VjY2VzcycsXG4gICAgICAgICdzZSBlbGltaW5vIGNvbiBleGl0byBlbCBwZW5zYW1pZW50bydcbiAgICAgIClcblxuICAgICAgaGlkZUFsZXJ0V2l0aFNlY29uZHMoMzAwMCwgJy5qcy1pbmZvLWFsZXJ0JylcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH0pXG4gIFxufSlcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9