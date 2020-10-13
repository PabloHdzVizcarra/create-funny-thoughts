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

/***/ "./src/functions/createThougths.js":
/*!*****************************************!*\
  !*** ./src/functions/createThougths.js ***!
  \*****************************************/
/*! exports provided: createThougths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createThougths", function() { return createThougths; });
/* harmony import */ var _createElementParagraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementParagraph */ "./src/functions/createElementParagraph.js");

var createThougths = function createThougths(array) {
  var idElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-toughts-area';
  var div = document.querySelector(idElement);

  if (array.length === 0) {
    Object(_createElementParagraph__WEBPACK_IMPORTED_MODULE_0__["createElementParagraph"])(div, 'No tienes ningun pensamiento, pero puedes comenzar agregando alguno');
  }

  array.map(function (tought) {
    div.insertAdjacentHTML('afterbegin', "<div class=\"card w-50 col-lg-3\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-start\">\n            <h5 class=\"card-title\">".concat(tought.title, "</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\" class=\"js-close-btn\" data-name=\"").concat(tought.title, "\">&times;</span>\n            </button>\n          </div>\n          <p class=\"card-text\">").concat(tought.tought, "</p>\n        </div>\n      </div>"));
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
/* harmony import */ var _functions_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/addAlert/addAlerts */ "./src/functions/addAlert/addAlerts.js");
/* harmony import */ var _functions_addNewTought__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/addNewTought */ "./src/functions/addNewTought.js");
/* harmony import */ var _functions_createErrorAlerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/createErrorAlerts */ "./src/functions/createErrorAlerts.js");
/* harmony import */ var _functions_createThougths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/createThougths */ "./src/functions/createThougths.js");
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
          return fetch('http://localhost:3000/api', {
            method: 'GET'
          }).then(function (res) {
            return res.json();
          }).then(_functions_createThougths__WEBPACK_IMPORTED_MODULE_5__["createThougths"])["catch"](console.log);

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
                Object(_functions_createErrorAlerts__WEBPACK_IMPORTED_MODULE_4__["createErrorAlerts"])(data.errors);
                return;
              }

              Object(_functions_deleteInputs__WEBPACK_IMPORTED_MODULE_7__["deleteInputs"])('.js-form');
              Object(_functions_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_2__["addAlerts"])('success', 'Pensamiento guardado con exito');
              Object(_functions_hideAlertWithSeconds__WEBPACK_IMPORTED_MODULE_8__["hideAlertWithSeconds"])(3000, '.js-info-alert');
              Object(_functions_addNewTought__WEBPACK_IMPORTED_MODULE_3__["addNewTought"])(data);
            })["catch"](function (err) {
              console.log(err);
              Object(_functions_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_2__["addAlerts"])('danger', 'Ha ocurrido un error intenta de nuevo');
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
                      Object(_functions_addAlert_addAlerts__WEBPACK_IMPORTED_MODULE_2__["addAlerts"])('success', 'se elimino con exito el pensamiento');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvYWRkQWxlcnQvYWRkQWxlcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvYWRkTmV3VG91Z2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudFBhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUVycm9yQWxlcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlVGhvdWd0aHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9kZWxldGVFbGVtZW50QnlEYXRhc2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZGVsZXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvaGlkZUFsZXJ0V2l0aFNlY29uZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsInJ1bnRpbWUiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJvYmoiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiY2FsbCIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVjb3JkIiwicmVzdWx0IiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwibmV4dCIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwidG9TdHJpbmciLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJyZXZlcnNlIiwibGVuZ3RoIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkZ1bmN0aW9uIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImdldCIsImwiLCJhZGRBbGVydHMiLCJ0eXBlQWxlcnQiLCJtZXNzYWdlIiwiaWRFbGVtZW50IiwiZGl2QWxlcnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYWRkTmV3VG91Z2h0IiwiZGF0YSIsInRpdGxlIiwidG91Z2h0IiwiZGl2IiwicEluZm8iLCJyZW1vdmUiLCJjcmVhdGVFbGVtZW50UGFyYWdyYXBoIiwiZWxlbWVudEhUTUwiLCJ0ZXh0RWxlbWVudCIsImNyZWF0ZUVycm9yQWxlcnRzIiwibWFwIiwiZWxlbSIsImNyZWF0ZVRob3VndGhzIiwiYXJyYXkiLCJkZWxldGVFbGVtZW50QnlEYXRhc2V0IiwiZGF0YXNldCIsImRpdlRvdWdodHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJkZWxldGVJbnB1dHMiLCJmb3JtIiwiaW5wdXRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnB1dCIsImhpZGVBbGVydFdpdGhTZWNvbmRzIiwibWlsaXNlY29uZHMiLCJjbGFzc05hbWUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YU9iaiIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9ycyIsImFyZWFUb3VndGhzIiwidGFyZ2V0IiwidGFnTmFtZSIsInJlc3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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K0JBQU8sRUFBRTtBQUNQLDBDQUFnQjtBQURULHlCQUZ1RDtBQUtoRUMsNEJBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVqRCxTQUFmO0FBTDBELHVCQUExQyxDQVJVOztBQUFBO0FBUTVCc0QsMEJBUjRCO0FBQUE7QUFBQSw2QkFnQmZBLElBQUksQ0FBQ2QsSUFBTCxFQWhCZTs7QUFBQTtBQWdCNUJsQywwQkFoQjRCO0FBaUJsQ2Msc0hBQXNCLENBQUNkLElBQUksQ0FBQ0MsS0FBTixDQUF0QjtBQUVBVixxR0FBUyxDQUNQLFNBRE8sRUFFUCxxQ0FGTyxDQUFUO0FBS0FvQyxrSEFBb0IsQ0FBQyxJQUFELEVBQU8sZ0JBQVAsQ0FBcEI7QUF4QmtDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBMkJsQ1EsNkJBQU8sQ0FBQ0MsR0FBUjs7QUEzQmtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXRDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTFENEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBOUMsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImV4cG9ydCBjb25zdCBhZGRBbGVydHMgPSAodHlwZUFsZXJ0LCBtZXNzYWdlLCBpZEVsZW1lbnQgPSAnLmpzLW1lc3NhZ2VzJykgPT4ge1xuICBjb25zdCBkaXZBbGVydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkRWxlbWVudClcblxuICByZXR1cm4gZGl2QWxlcnRzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsXG4gICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC0ke3R5cGVBbGVydH0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IGpzLWluZm8tYWxlcnRcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgIDxzdHJvbmc+SW5mbyA8L3N0cm9uZz4ke21lc3NhZ2V9IFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5gXG4gIClcbn0iLCJleHBvcnQgY29uc3QgYWRkTmV3VG91Z2h0ID0gKGRhdGEsIGlkRWxlbWVudCA9ICcuanMtdG91Z2h0cy1hcmVhJykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCB0b3VnaHQgfSA9IGRhdGFcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZEVsZW1lbnQpXG4gIGNvbnN0IHBJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5vLXRvdWdodHMnKVxuXG4gIGlmKHBJbmZvKSBwSW5mby5yZW1vdmUoKVxuXG4gIHJldHVybiBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxcbiAgICBgPGRpdiBjbGFzcz1cImNhcmQgdy01MCBjb2wtbGctM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7dGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImpzLWNsb3NlLWJ0blwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiR7dG91Z2h0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gIClcbiAgXG59IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnRQYXJhZ3JhcGggPSAoZWxlbWVudEhUTUwsIHRleHRFbGVtZW50KSA9PiB7XG4gIGVsZW1lbnRIVE1MLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgYDxwIGNsYXNzPVwianMtbm8tdG91Z2h0c1wiPiR7dGV4dEVsZW1lbnR9PC9wPmBcbiAgKVxufSIsImltcG9ydCB7IGFkZEFsZXJ0cyB9IGZyb20gXCIuL2FkZEFsZXJ0L2FkZEFsZXJ0c1wiXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFcnJvckFsZXJ0cyA9IChkYXRhKSA9PiB7XG5cbiAgZGF0YS5tYXAoZWxlbSA9PiB7XG4gICAgYWRkQWxlcnRzKFxuICAgICAgJ2RhbmdlcicsXG4gICAgICBgJHtlbGVtfWBcbiAgICApXG4gIH0pXG5cbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50UGFyYWdyYXBoIH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudFBhcmFncmFwaFwiXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaG91Z3RocyA9IChcbiAgYXJyYXksXG4gIGlkRWxlbWVudCA9ICcuanMtdG91Z2h0cy1hcmVhJ1xuKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWRFbGVtZW50KVxuICBcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIGNyZWF0ZUVsZW1lbnRQYXJhZ3JhcGgoXG4gICAgICBkaXYsXG4gICAgICAnTm8gdGllbmVzIG5pbmd1biBwZW5zYW1pZW50bywgcGVybyBwdWVkZXMgY29tZW56YXIgYWdyZWdhbmRvIGFsZ3VubydcbiAgICApXG4gIH1cblxuICBhcnJheS5tYXAodG91Z2h0ID0+IHtcbiAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxcbiAgICBgPGRpdiBjbGFzcz1cImNhcmQgdy01MCBjb2wtbGctM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7dG91Z2h0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJqcy1jbG9zZS1idG5cIiBkYXRhLW5hbWU9XCIke3RvdWdodC50aXRsZX1cIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj4ke3RvdWdodC50b3VnaHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmBcbiAgICApXG4gIH0pXG4gXG59IiwiZXhwb3J0IGNvbnN0IGRlbGV0ZUVsZW1lbnRCeURhdGFzZXQgPSAoZGF0YXNldCkgPT4ge1xuICBjb25zdCBkaXZUb3VnaHRzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xvc2UtYnRuJylcbiAgKTtcbiAgXG4gIGRpdlRvdWdodHMubWFwKGVsZW1lbnQgPT4ge1xuICAgIGlmIChkYXRhc2V0ID09PSBlbGVtZW50LmRhdGFzZXQubmFtZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuICB9KVxufSIsImV4cG9ydCBjb25zdCBkZWxldGVJbnB1dHMgPSAoaWRFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkRWxlbWVudClcbiAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIikpXG4gIHJldHVybiBpbnB1dHMubWFwKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpXG5cbn1cblxuXG4iLCJleHBvcnQgY29uc3QgaGlkZUFsZXJ0V2l0aFNlY29uZHMgPSAobWlsaXNlY29uZHMsIGNsYXNzTmFtZSkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSkucmVtb3ZlKClcbiAgfSwgbWlsaXNlY29uZHMpO1xufSIsImltcG9ydCB7IGFkZEFsZXJ0cyB9IGZyb20gJy4vZnVuY3Rpb25zL2FkZEFsZXJ0L2FkZEFsZXJ0cydcbmltcG9ydCB7IGFkZE5ld1RvdWdodCB9IGZyb20gJy4vZnVuY3Rpb25zL2FkZE5ld1RvdWdodCdcbmltcG9ydCB7IGNyZWF0ZUVycm9yQWxlcnRzIH0gZnJvbSAnLi9mdW5jdGlvbnMvY3JlYXRlRXJyb3JBbGVydHMnXG5pbXBvcnQgeyBjcmVhdGVUaG91Z3RocyB9IGZyb20gJy4vZnVuY3Rpb25zL2NyZWF0ZVRob3VndGhzJ1xuaW1wb3J0IHsgZGVsZXRlRWxlbWVudEJ5RGF0YXNldCB9IGZyb20gJy4vZnVuY3Rpb25zL2RlbGV0ZUVsZW1lbnRCeURhdGFzZXQnXG5pbXBvcnQgeyBkZWxldGVJbnB1dHMgfSBmcm9tICcuL2Z1bmN0aW9ucy9kZWxldGVJbnB1dHMnXG5pbXBvcnQgeyBoaWRlQWxlcnRXaXRoU2Vjb25kcyB9IGZyb20gJy4vZnVuY3Rpb25zL2hpZGVBbGVydFdpdGhTZWNvbmRzJ1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIFxuICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaScsIHtcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oY3JlYXRlVGhvdWd0aHMpXG4gICAgLmNhdGNoKGNvbnNvbGUubG9nKVxuICBcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtJylcbiAgXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpKVxuICAgIGNvbnN0IHZhbHVlcyA9IGlucHV0cy5tYXAoaW5wdXQgPT4gaW5wdXQudmFsdWUpXG5cbiAgICBjb25zdCBkYXRhT2JqID0ge1xuICAgICAgdGl0bGU6IHZhbHVlc1swXSxcbiAgICAgIHRvdWdodDogdmFsdWVzWzFdXG4gICAgfVxuXG4gICAgZmV0Y2goJy8nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG5cbiAgICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgY3JlYXRlRXJyb3JBbGVydHMoZGF0YS5lcnJvcnMpXG4gICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkZWxldGVJbnB1dHMoJy5qcy1mb3JtJylcbiAgICAgICAgYWRkQWxlcnRzKFxuICAgICAgICAgICdzdWNjZXNzJyxcbiAgICAgICAgICAnUGVuc2FtaWVudG8gZ3VhcmRhZG8gY29uIGV4aXRvJ1xuICAgICAgICApXG5cbiAgICAgICAgaGlkZUFsZXJ0V2l0aFNlY29uZHMoMzAwMCwgJy5qcy1pbmZvLWFsZXJ0JylcblxuICAgICAgICBhZGROZXdUb3VnaHQoZGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBhZGRBbGVydHMoXG4gICAgICAgICAgJ2RhbmdlcicsXG4gICAgICAgICAgJ0hhIG9jdXJyaWRvIHVuIGVycm9yIGludGVudGEgZGUgbnVldm8nXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXG4gIH0pXG5cbiAgY29uc3QgYXJlYVRvdWd0aHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG91Z2h0cycpXG4gIFxuICBhcmVhVG91Z3Rocy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1NQQU4nKSByZXR1cm4gXG5cbiAgICBjb25zdCBpZEVsZW1lbnQgPSB7XG4gICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LmRhdGFzZXQubmFtZVxuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJHtpZEVsZW1lbnR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWRFbGVtZW50KVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpXG4gICAgICBkZWxldGVFbGVtZW50QnlEYXRhc2V0KGRhdGEudGl0bGUpXG5cbiAgICAgIGFkZEFsZXJ0cyhcbiAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAnc2UgZWxpbWlubyBjb24gZXhpdG8gZWwgcGVuc2FtaWVudG8nXG4gICAgICApXG5cbiAgICAgIGhpZGVBbGVydFdpdGhTZWNvbmRzKDMwMDAsICcuanMtaW5mby1hbGVydCcpXG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9KVxuICBcbn0pXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==