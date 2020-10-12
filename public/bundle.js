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

/***/ "./src/functions/addAlerts.js":
/*!************************************!*\
  !*** ./src/functions/addAlerts.js ***!
  \************************************/
/*! exports provided: addAlerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAlerts", function() { return addAlerts; });
var addAlerts = function addAlerts(typeAlert, message) {
  var idElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-messages';
  var divAlerts = document.querySelector(idElement);
  divAlerts.insertAdjacentHTML('afterBegin', "<div class=\"alert alert-".concat(typeAlert, " alert-dismissible fade show\" role=\"alert\">\n      <strong>Info </strong>").concat(message, " \n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>"));
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
  console.log('Agregando tarea a la pantalla');
  var title = data.title,
      tought = data.tought;
  console.log(tought);
  var div = document.querySelector(idElement);
  var pInfo = document.querySelector('.js-no-toughts');
  if (pInfo) pInfo.remove();
  div.insertAdjacentHTML('afterbegin', "<div class=\"card w-50 col-lg-3\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-start\">\n            <h5 class=\"card-title\">".concat(title, "</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\" class=\"js-close-btn\">&times;</span>\n            </button>\n          </div>\n          <p class=\"card-text\">").concat(tought, "</p>\n        </div>\n      </div>"));
};

/***/ }),

/***/ "./src/functions/checkForValidationErrors.js":
/*!***************************************************!*\
  !*** ./src/functions/checkForValidationErrors.js ***!
  \***************************************************/
/*! exports provided: checkForValidationErrorsWhenCreatingThought */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForValidationErrorsWhenCreatingThought", function() { return checkForValidationErrorsWhenCreatingThought; });
/* harmony import */ var _addAlerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAlerts */ "./src/functions/addAlerts.js");

var checkForValidationErrorsWhenCreatingThought = function checkForValidationErrorsWhenCreatingThought(data) {
  data.map(function (elem) {
    Object(_addAlerts__WEBPACK_IMPORTED_MODULE_0__["addAlerts"])('danger', "".concat(elem));
  });
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
  inputs.map(function (input) {
    return input.value = '';
  });
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
/* harmony import */ var _functions_addAlerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/addAlerts */ "./src/functions/addAlerts.js");
/* harmony import */ var _functions_addNewTought__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/addNewTought */ "./src/functions/addNewTought.js");
/* harmony import */ var _functions_checkForValidationErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/checkForValidationErrors */ "./src/functions/checkForValidationErrors.js");
/* harmony import */ var _functions_createThougths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/createThougths */ "./src/functions/createThougths.js");
/* harmony import */ var _functions_deleteElementByDataset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/deleteElementByDataset */ "./src/functions/deleteElementByDataset.js");
/* harmony import */ var _functions_deleteInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/deleteInputs */ "./src/functions/deleteInputs.js");








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
                return Object(_functions_checkForValidationErrors__WEBPACK_IMPORTED_MODULE_4__["checkForValidationErrorsWhenCreatingThought"])(data.errors);
              }

              Object(_functions_deleteInputs__WEBPACK_IMPORTED_MODULE_7__["deleteInputs"])('.js-form');
              Object(_functions_addAlerts__WEBPACK_IMPORTED_MODULE_2__["addAlerts"])('success', 'Pensamiento guardado con exito');
              Object(_functions_addNewTought__WEBPACK_IMPORTED_MODULE_3__["addNewTought"])(data);
            })["catch"](function (err) {
              console.log(err);
              Object(_functions_addAlerts__WEBPACK_IMPORTED_MODULE_2__["addAlerts"])('danger', 'Ha ocurrido un error intenta de nuevo');
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
                      _context.next = 16;
                      break;

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](3);
                      console.log(_context.t0);

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[3, 13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvYWRkQWxlcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvYWRkTmV3VG91Z2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvY2hlY2tGb3JWYWxpZGF0aW9uRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudFBhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVRob3VndGhzLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZGVsZXRlRWxlbWVudEJ5RGF0YXNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2RlbGV0ZUlucHV0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwicnVudGltZSIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsIm9iaiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJjYWxsIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZWNvcmQiLCJyZXN1bHQiLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0Iiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiRnVuY3Rpb24iLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZ2V0IiwibCIsImFkZEFsZXJ0cyIsInR5cGVBbGVydCIsIm1lc3NhZ2UiLCJpZEVsZW1lbnQiLCJkaXZBbGVydHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGROZXdUb3VnaHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwidG91Z2h0IiwiZGl2IiwicEluZm8iLCJyZW1vdmUiLCJjaGVja0ZvclZhbGlkYXRpb25FcnJvcnNXaGVuQ3JlYXRpbmdUaG91Z2h0IiwibWFwIiwiZWxlbSIsImNyZWF0ZUVsZW1lbnRQYXJhZ3JhcGgiLCJlbGVtZW50SFRNTCIsInRleHRFbGVtZW50IiwiY3JlYXRlVGhvdWd0aHMiLCJhcnJheSIsImRlbGV0ZUVsZW1lbnRCeURhdGFzZXQiLCJkYXRhc2V0IiwiZGl2VG91Z2h0cyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicGFyZW50RWxlbWVudCIsImRlbGV0ZUlucHV0cyIsImZvcm0iLCJpbnB1dHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZldGNoIiwicmVzIiwianNvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhT2JqIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3JzIiwiYXJlYVRvdWd0aHMiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwicmVzcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFF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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF0Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF2RDRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTlDLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJleHBvcnQgY29uc3QgYWRkQWxlcnRzID0gKHR5cGVBbGVydCwgbWVzc2FnZSwgaWRFbGVtZW50ID0gJy5qcy1tZXNzYWdlcycpID0+IHtcbiAgY29uc3QgZGl2QWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZEVsZW1lbnQpXG5cbiAgZGl2QWxlcnRzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsXG4gICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC0ke3R5cGVBbGVydH0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8c3Ryb25nPkluZm8gPC9zdHJvbmc+JHttZXNzYWdlfSBcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+YFxuICApXG59IiwiZXhwb3J0IGNvbnN0IGFkZE5ld1RvdWdodCA9IChkYXRhLCBpZEVsZW1lbnQgPSAnLmpzLXRvdWdodHMtYXJlYScpID0+IHtcbiAgY29uc29sZS5sb2coJ0FncmVnYW5kbyB0YXJlYSBhIGxhIHBhbnRhbGxhJylcbiAgY29uc3QgeyB0aXRsZSwgdG91Z2h0IH0gPSBkYXRhXG4gIGNvbnNvbGUubG9nKHRvdWdodClcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZEVsZW1lbnQpXG4gIGNvbnN0IHBJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5vLXRvdWdodHMnKVxuXG4gIGlmKHBJbmZvKSBwSW5mby5yZW1vdmUoKVxuXG4gIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLFxuICAgIGA8ZGl2IGNsYXNzPVwiY2FyZCB3LTUwIGNvbC1sZy0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHt0aXRsZX08L2g1PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwianMtY2xvc2UtYnRuXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+JHt0b3VnaHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmBcbiAgKVxufSIsImltcG9ydCB7IGFkZEFsZXJ0cyB9IGZyb20gXCIuL2FkZEFsZXJ0c1wiXG5cbmV4cG9ydCBjb25zdCBjaGVja0ZvclZhbGlkYXRpb25FcnJvcnNXaGVuQ3JlYXRpbmdUaG91Z2h0ID0gKGRhdGEpID0+IHtcbiAgXG4gIGRhdGEubWFwKGVsZW0gPT4ge1xuICAgIGFkZEFsZXJ0cyhcbiAgICAgICdkYW5nZXInLFxuICAgICAgYCR7ZWxlbX1gXG4gICAgKVxuICB9KVxuXG59IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnRQYXJhZ3JhcGggPSAoZWxlbWVudEhUTUwsIHRleHRFbGVtZW50KSA9PiB7XG4gIGVsZW1lbnRIVE1MLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgYDxwIGNsYXNzPVwianMtbm8tdG91Z2h0c1wiPiR7dGV4dEVsZW1lbnR9PC9wPmBcbiAgKVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRQYXJhZ3JhcGggfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50UGFyYWdyYXBoXCJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRob3VndGhzID0gKFxuICBhcnJheSxcbiAgaWRFbGVtZW50ID0gJy5qcy10b3VnaHRzLWFyZWEnXG4pID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZEVsZW1lbnQpXG4gIFxuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgY3JlYXRlRWxlbWVudFBhcmFncmFwaChcbiAgICAgIGRpdixcbiAgICAgICdObyB0aWVuZXMgbmluZ3VuIHBlbnNhbWllbnRvLCBwZXJvIHB1ZWRlcyBjb21lbnphciBhZ3JlZ2FuZG8gYWxndW5vJ1xuICAgIClcbiAgfVxuXG4gIGFycmF5Lm1hcCh0b3VnaHQgPT4ge1xuICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLFxuICAgIGA8ZGl2IGNsYXNzPVwiY2FyZCB3LTUwIGNvbC1sZy0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHt0b3VnaHQudGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImpzLWNsb3NlLWJ0blwiIGRhdGEtbmFtZT1cIiR7dG91Z2h0LnRpdGxlfVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiR7dG91Z2h0LnRvdWdodH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YFxuICAgIClcbiAgfSlcbiBcbn0iLCJleHBvcnQgY29uc3QgZGVsZXRlRWxlbWVudEJ5RGF0YXNldCA9IChkYXRhc2V0KSA9PiB7XG4gIGNvbnN0IGRpdlRvdWdodHMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jbG9zZS1idG4nKVxuICApO1xuICBcbiAgZGl2VG91Z2h0cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgaWYgKGRhdGFzZXQgPT09IGVsZW1lbnQuZGF0YXNldC5uYW1lKSB7XG4gICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICB9XG4gIH0pXG59IiwiZXhwb3J0IGNvbnN0IGRlbGV0ZUlucHV0cyA9IChpZEVsZW1lbnQpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWRFbGVtZW50KVxuICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSlcbiAgaW5wdXRzLm1hcChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9ICcnKVxuXG59XG5cblxuIiwiaW1wb3J0IHsgYWRkQWxlcnRzIH0gZnJvbSAnLi9mdW5jdGlvbnMvYWRkQWxlcnRzJ1xuaW1wb3J0IHsgYWRkTmV3VG91Z2h0IH0gZnJvbSAnLi9mdW5jdGlvbnMvYWRkTmV3VG91Z2h0J1xuaW1wb3J0IHsgY2hlY2tGb3JWYWxpZGF0aW9uRXJyb3JzV2hlbkNyZWF0aW5nVGhvdWdodCB9IGZyb20gJy4vZnVuY3Rpb25zL2NoZWNrRm9yVmFsaWRhdGlvbkVycm9ycydcbmltcG9ydCB7IGNyZWF0ZVRob3VndGhzIH0gZnJvbSAnLi9mdW5jdGlvbnMvY3JlYXRlVGhvdWd0aHMnXG5pbXBvcnQgeyBkZWxldGVFbGVtZW50QnlEYXRhc2V0IH0gZnJvbSAnLi9mdW5jdGlvbnMvZGVsZXRlRWxlbWVudEJ5RGF0YXNldCdcbmltcG9ydCB7IGRlbGV0ZUlucHV0cyB9IGZyb20gJy4vZnVuY3Rpb25zL2RlbGV0ZUlucHV0cydcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBcbiAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknLCB7XG4gICAgbWV0aG9kOiAnR0VUJ1xuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGNyZWF0ZVRob3VndGhzKVxuICAgIC5jYXRjaChjb25zb2xlLmxvZylcbiAgXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9ybScpXG4gIFxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSlcbiAgICBjb25zdCB2YWx1ZXMgPSBpbnB1dHMubWFwKGlucHV0ID0+IGlucHV0LnZhbHVlKVxuXG4gICAgY29uc3QgZGF0YU9iaiA9IHtcbiAgICAgIHRpdGxlOiB2YWx1ZXNbMF0sXG4gICAgICB0b3VnaHQ6IHZhbHVlc1sxXVxuICAgIH1cblxuICAgIGZldGNoKCcvJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhT2JqKVxuICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgIGlmIChkYXRhLmVycm9ycykge1xuICAgICAgICAgIHJldHVybiBjaGVja0ZvclZhbGlkYXRpb25FcnJvcnNXaGVuQ3JlYXRpbmdUaG91Z2h0KFxuICAgICAgICAgICAgZGF0YS5lcnJvcnNcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZUlucHV0cygnLmpzLWZvcm0nKVxuICAgICAgICBhZGRBbGVydHMoXG4gICAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAgICdQZW5zYW1pZW50byBndWFyZGFkbyBjb24gZXhpdG8nXG4gICAgICAgIClcbiAgICAgICAgYWRkTmV3VG91Z2h0KGRhdGEpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgYWRkQWxlcnRzKFxuICAgICAgICAgICdkYW5nZXInLFxuICAgICAgICAgICdIYSBvY3VycmlkbyB1biBlcnJvciBpbnRlbnRhIGRlIG51ZXZvJ1xuICAgICAgICApXG4gICAgICB9KVxuICAgIFxuICB9KVxuXG4gIGNvbnN0IGFyZWFUb3VndGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRvdWdodHMnKVxuICBhcmVhVG91Z3Rocy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1NQQU4nKSByZXR1cm4gXG5cbiAgICBjb25zdCBpZEVsZW1lbnQgPSB7XG4gICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LmRhdGFzZXQubmFtZVxuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJHtpZEVsZW1lbnR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWRFbGVtZW50KVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpXG4gICAgICBkZWxldGVFbGVtZW50QnlEYXRhc2V0KGRhdGEudGl0bGUpXG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9KVxuICBcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9