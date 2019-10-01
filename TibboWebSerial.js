(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TibboWebSerial", [], factory);
	else if(typeof exports === 'object')
		exports["TibboWebSerial"] = factory();
	else
		root["TibboWebSerial"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Serial.js");
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

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
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
        if (delegate.iterator.return) {
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
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
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
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
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
        var i = -1, next = function next() {
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
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
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
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
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

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
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
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./src/Serial.js":
/*!***********************!*\
  !*** ./src/Serial.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var CONTROL_COMMANDS = {
  IFC_ENABLE: 0x00,
  SET_BAUDDIV: 0x01,
  GET_BAUDDIV: 0x02,
  SET_LINE_CTL: 0x03,
  GET_LINE_CTL: 0x04,
  SET_BREAK: 0x05,
  IMM_CHAR: 0x06,
  SET_MHS: 0x07,
  GET_MDMSTS: 0x08,
  SET_XON: 0x09,
  SET_XOFF: 0x0A,
  SET_EVENTMASK: 0x0B,
  GET_EVENTMASK: 0x0C,
  GET_EVENTSTATE: 0x16,
  SET_CHAR: 0x0D,
  GET_CHARS: 0x0E,
  GET_PROPS: 0x0F,
  GET_COMM_STATUS: 0x10,
  RESET: 0x11,
  PURGE: 0x12,
  SET_FLOW: 0x13,
  GET_FLOW: 0x14,
  EMBED_EVENTS: 0x15,
  GET_BAUDRATE: 0x1D,
  SET_BAUDRATE: 0x1E,
  SET_CHARS: 0x19,
  VENDOR_SPECIFIC: 0xFF
};
var LINE_STATES = {
  DTR: 1,
  RTS: 2,
  CTS: 16,
  DSR: 32,
  RI: 64,
  DCD: 128
};
var FLOW_CONTROL = {
  OFF: [0, 0, 0, 0],
  CTS_RTS: [8, 144, 0, 0],
  XON_XOFF: [0, 19, 400, 400]
};
var SPECIAL_CHARACTERS = {
  EOFCHAR: {
    index: 0,
    value: 0
  },
  ERRORCHAR: {
    index: 1,
    value: 0
  },
  BREAKCHAR: {
    index: 2,
    value: 0
  },
  EVENTCHAR: {
    index: 3,
    value: 0
  },
  XONCHAR: {
    index: 4,
    value: 17
  },
  XOFFCHAR: {
    index: 5,
    value: 19
  }
};
var DEFAULT_BAUD = 38400;

var Serial =
/*#__PURE__*/
function () {
  function Serial(device) {
    (0, _classCallCheck2.default)(this, Serial);
    this.usb = device;
    this.baud = DEFAULT_BAUD;
    this.modemState = null;
    this.DTR = null;
    this.RTS = null;
    this.CTS = null;
    this.DSR = null;
    this.RI = null;
    this.DCD = null;
    this.modemStateChanged = undefined;
    this.getFlowControlCallback = undefined;
    this.flowControlChanged = undefined;
    this.baudChangeOK = undefined;
    this.serDataArrival = undefined;
    this.serDataSent = undefined;
    this.connectFail = undefined;
    this.connectOK = undefined;
    this.disconnectOK = undefined;
    this.connectionError = undefined;
  }

  (0, _createClass2.default)(Serial, [{
    key: "connect",
    value: function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.usb.open();

              case 3:
                _context.next = 5;
                return this.usb.selectConfiguration(1);

              case 5:
                _context.next = 7;
                return this.usb.claimInterface(0);

              case 7:
                _context.next = 9;
                return this.enable();

              case 9:
                _context.next = 11;
                return this.setBaud(this.baud);

              case 11:
                this.setTimers();
                if (this.connectOK) this.connectOK();
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                if (this.connectFail) this.connectFail();

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      function connect() {
        return _ref.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "enable",
    value: function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.usb.controlTransferOut({
                  requestType: 'vendor',
                  recipient: 'device',
                  request: CONTROL_COMMANDS.IFC_ENABLE,
                  index: 0x00,
                  value: 0x01
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function enable() {
        return _ref2.apply(this, arguments);
      }

      return enable;
    }()
  }, {
    key: "setTimers",
    value: function setTimers() {
      if (this.dataTimer !== undefined) {
        clearInterval(this.dataTimer);
      }

      if (this.modemStateTimer !== undefined) {
        clearInterval(this.modemStateTimer);
      }

      this.dataTimer = setInterval(this.readTimer.bind(this), 1);
      this.modemStateTimer = setInterval(this.getModemState.bind(this, this.usb), 1);
      this.canRead = true;
    }
  }, {
    key: "disconnect",
    value: function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                clearInterval(this.dataTimer);
                clearInterval(this.modemStateTimer);
                _context3.next = 4;
                return this.usb.close();

              case 4:
                if (this.disconnectOK) this.disconnectOK();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function disconnect() {
        return _ref3.apply(this, arguments);
      }

      return disconnect;
    }()
  }, {
    key: "updateModemState",
    value: function updateModemState(modemState) {
      this.modemState = modemState;
      this.DTR = (modemState & LINE_STATES.DTR) > 0 ? 1 : 0;
      this.RTS = (modemState & LINE_STATES.RTS) > 0 ? 1 : 0;
      this.CTS = (modemState & LINE_STATES.CTS) > 0 ? 1 : 0;
      this.DSR = (modemState & LINE_STATES.DSR) > 0 ? 1 : 0;
      this.RI = (modemState & LINE_STATES.RI) > 0 ? 1 : 0;
      this.DCD = (modemState & LINE_STATES.DCD) > 0 ? 1 : 0;
    }
  }, {
    key: "setBaud",
    value: function () {
      var _ref4 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(baud) {
        var arr, i, byte;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.baud = baud;
                arr = [0, 0, 0, 0];

                for (i = 0; i < arr.length; i++) {
                  byte = baud & 0xff;
                  arr[i] = byte;
                  baud = (baud - byte) / 256;
                }

                _context4.next = 5;
                return this.usb.controlTransferOut({
                  requestType: 'vendor',
                  recipient: 'device',
                  request: CONTROL_COMMANDS.SET_BAUDRATE,
                  index: 0x00,
                  value: 0
                }, new Uint8Array(arr));

              case 5:
                if (this.baudChangeOK) this.baudChangeOK(this.baud);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function setBaud(_x) {
        return _ref4.apply(this, arguments);
      }

      return setBaud;
    }()
  }, {
    key: "initializeSpecialCharacters",
    value: function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5() {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.setChar(SPECIAL_CHARACTERS.XOFFCHAR.index, SPECIAL_CHARACTERS.XOFFCHAR.value);
                this.setChar(SPECIAL_CHARACTERS.XONCHAR.index, SPECIAL_CHARACTERS.XONCHAR.value);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function initializeSpecialCharacters() {
        return _ref5.apply(this, arguments);
      }

      return initializeSpecialCharacters;
    }()
  }, {
    key: "setChar",
    value: function () {
      var _ref6 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(SpecialCharacterIndex, SpecialCharacterValue) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.usb.controlTransferOut({
                  requestType: 'vendor',
                  recipient: 'device',
                  request: CONTROL_COMMANDS.SET_CHAR,
                  index: 0x00,
                  value: SpecialCharacterIndex << 8 & 0xFF00 | SpecialCharacterValue
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function setChar(_x2, _x3) {
        return _ref6.apply(this, arguments);
      }

      return setChar;
    }()
  }, {
    key: "setMHS",
    value: function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(value) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.usb.controlTransferOut({
                  requestType: 'vendor',
                  recipient: 'device',
                  request: CONTROL_COMMANDS.SET_MHS,
                  index: 0x00,
                  value: value | 0x200 | 0x100
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function setMHS(_x4) {
        return _ref7.apply(this, arguments);
      }

      return setMHS;
    }()
  }, {
    key: "getBaud",
    value: function () {
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8() {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.usb.controlTransferIn({
                  requestType: 'vendor',
                  recipient: 'device',
                  request: CONTROL_COMMANDS.SET_BAUDDIV,
                  index: 0x00,
                  value: 0x0
                }, 1);

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getBaud() {
        return _ref8.apply(this, arguments);
      }

      return getBaud;
    }()
  }, {
    key: "getModemState",
    value: function () {
      var _ref9 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9() {
        var result;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.usb.controlTransferIn({
                  requestType: 'vendor',
                  recipient: 'device',
                  request: CONTROL_COMMANDS.GET_MDMSTS,
                  index: 0x00,
                  value: 0x0
                }, 1);

              case 2:
                result = _context9.sent;
                result = result.data.getInt8();

                if (result !== this.modemState) {
                  this.updateModemState(result);

                  if (this.modemStateChanged) {
                    this.modemStateChanged(this.DTR, this.RTS, this.CTS, this.DSR, this.RI, this.DCD);
                  }
                }

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getModemState() {
        return _ref9.apply(this, arguments);
      }

      return getModemState;
    }()
  }, {
    key: "getFlowControl",
    value: function () {
      var _ref10 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10() {
        var result, arr, entries, i;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.usb.controlTransferIn({
                  requestType: 'vendor',
                  recipient: 'device',
                  request: CONTROL_COMMANDS.GET_FLOW,
                  index: 0x00,
                  value: 0x0
                }, 16);

              case 2:
                result = _context10.sent;
                arr = new Int32Array(result.data.buffer);
                arr = JSON.stringify(Array.from(arr));
                entries = Object.entries(FLOW_CONTROL);

                for (i = 0; i < entries.length; i++) {
                  if (JSON.stringify(entries[i][1]) === arr) {
                    if (this.getFlowControlCallback) this.getFlowControlCallback(entries[i][0]); // console.log(entries[i][0])
                  }
                }

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getFlowControl() {
        return _ref10.apply(this, arguments);
      }

      return getFlowControl;
    }()
  }, {
    key: "setFlowControl",
    value: function () {
      var _ref11 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(value) {
        var arr;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                arr = FLOW_CONTROL[value];
                _context11.next = 3;
                return this.usb.controlTransferOut({
                  requestType: 'vendor',
                  recipient: 'device',
                  request: 0x13,
                  index: 0x00,
                  value: 0x0
                }, new Int32Array(arr));

              case 3:
                if (this.flowControlChanged) this.flowControlChanged(value);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function setFlowControl(_x5) {
        return _ref11.apply(this, arguments);
      }

      return setFlowControl;
    }()
  }, {
    key: "write",
    value: function () {
      var _ref12 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(data) {
        var a, enc;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                a = new Uint8Array();
                enc = new TextEncoder();
                a = enc.encode(data);

                if (!(a.length > 0)) {
                  _context12.next = 7;
                  break;
                }

                _context12.next = 6;
                return this.usb.transferOut(2, a);

              case 6:
                if (this.serDataSent) this.serDataSent(data);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function write(_x6) {
        return _ref12.apply(this, arguments);
      }

      return write;
    }()
  }, {
    key: "toggleLINE",
    value: function () {
      var _ref13 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(line) {
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.setMHS(line ^ this.modemState);

              case 2:
                console.log('Line toggled');

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function toggleLINE(_x7) {
        return _ref13.apply(this, arguments);
      }

      return toggleLINE;
    }()
  }, {
    key: "read",
    value: function () {
      var _ref14 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14() {
        var r;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.usb.transferIn(2, 64);

              case 2:
                r = _context14.sent;
                return _context14.abrupt("return", new Uint8Array(r.data.buffer));

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function read() {
        return _ref14.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "readTimer",
    value: function () {
      var _ref15 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15() {
        var data, dec;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(this.canRead && this.usb !== null)) {
                  _context15.next = 13;
                  break;
                }

                this.canRead = false;
                _context15.prev = 2;
                _context15.next = 5;
                return this.read();

              case 5:
                data = _context15.sent;

                if (data) {
                  if (this.serDataArrival !== undefined) {
                    dec = new TextDecoder();
                    this.serDataArrival(dec.decode(data));
                  }
                }

                _context15.next = 12;
                break;

              case 9:
                _context15.prev = 9;
                _context15.t0 = _context15["catch"](2);

                if (_context15.t0.name === 'NotFoundError' && _context15.t0.code === 8 && _context15.t0.message.indexOf('disconnected') >= 0) {
                  clearInterval(this.dataTimer);
                  clearInterval(this.modemStateTimer);
                  if (this.connectionError) this.connectionError();
                }

              case 12:
                this.canRead = true;

              case 13:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[2, 9]]);
      }));

      function readTimer() {
        return _ref15.apply(this, arguments);
      }

      return readTimer;
    }()
  }]);
  return Serial;
}();

module.exports = {
  Serial: Serial,
  LINE_STATES: LINE_STATES,
  FLOW_CONTROL: FLOW_CONTROL
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGliYm9XZWJTZXJpYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGliYm9XZWJTZXJpYWwvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1RpYmJvV2ViU2VyaWFsLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vVGliYm9XZWJTZXJpYWwvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL1RpYmJvV2ViU2VyaWFsLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC8uL3NyYy9TZXJpYWwuanMiXSwibmFtZXMiOlsiQ09OVFJPTF9DT01NQU5EUyIsIklGQ19FTkFCTEUiLCJTRVRfQkFVRERJViIsIkdFVF9CQVVERElWIiwiU0VUX0xJTkVfQ1RMIiwiR0VUX0xJTkVfQ1RMIiwiU0VUX0JSRUFLIiwiSU1NX0NIQVIiLCJTRVRfTUhTIiwiR0VUX01ETVNUUyIsIlNFVF9YT04iLCJTRVRfWE9GRiIsIlNFVF9FVkVOVE1BU0siLCJHRVRfRVZFTlRNQVNLIiwiR0VUX0VWRU5UU1RBVEUiLCJTRVRfQ0hBUiIsIkdFVF9DSEFSUyIsIkdFVF9QUk9QUyIsIkdFVF9DT01NX1NUQVRVUyIsIlJFU0VUIiwiUFVSR0UiLCJTRVRfRkxPVyIsIkdFVF9GTE9XIiwiRU1CRURfRVZFTlRTIiwiR0VUX0JBVURSQVRFIiwiU0VUX0JBVURSQVRFIiwiU0VUX0NIQVJTIiwiVkVORE9SX1NQRUNJRklDIiwiTElORV9TVEFURVMiLCJEVFIiLCJSVFMiLCJDVFMiLCJEU1IiLCJSSSIsIkRDRCIsIkZMT1dfQ09OVFJPTCIsIk9GRiIsIkNUU19SVFMiLCJYT05fWE9GRiIsIlNQRUNJQUxfQ0hBUkFDVEVSUyIsIkVPRkNIQVIiLCJpbmRleCIsInZhbHVlIiwiRVJST1JDSEFSIiwiQlJFQUtDSEFSIiwiRVZFTlRDSEFSIiwiWE9OQ0hBUiIsIlhPRkZDSEFSIiwiREVGQVVMVF9CQVVEIiwiU2VyaWFsIiwiZGV2aWNlIiwidXNiIiwiYmF1ZCIsIm1vZGVtU3RhdGUiLCJtb2RlbVN0YXRlQ2hhbmdlZCIsInVuZGVmaW5lZCIsImdldEZsb3dDb250cm9sQ2FsbGJhY2siLCJmbG93Q29udHJvbENoYW5nZWQiLCJiYXVkQ2hhbmdlT0siLCJzZXJEYXRhQXJyaXZhbCIsInNlckRhdGFTZW50IiwiY29ubmVjdEZhaWwiLCJjb25uZWN0T0siLCJkaXNjb25uZWN0T0siLCJjb25uZWN0aW9uRXJyb3IiLCJvcGVuIiwic2VsZWN0Q29uZmlndXJhdGlvbiIsImNsYWltSW50ZXJmYWNlIiwiZW5hYmxlIiwic2V0QmF1ZCIsInNldFRpbWVycyIsImNvbnRyb2xUcmFuc2Zlck91dCIsInJlcXVlc3RUeXBlIiwicmVjaXBpZW50IiwicmVxdWVzdCIsImRhdGFUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJtb2RlbVN0YXRlVGltZXIiLCJzZXRJbnRlcnZhbCIsInJlYWRUaW1lciIsImJpbmQiLCJnZXRNb2RlbVN0YXRlIiwiY2FuUmVhZCIsImNsb3NlIiwiYXJyIiwiaSIsImxlbmd0aCIsImJ5dGUiLCJVaW50OEFycmF5Iiwic2V0Q2hhciIsIlNwZWNpYWxDaGFyYWN0ZXJJbmRleCIsIlNwZWNpYWxDaGFyYWN0ZXJWYWx1ZSIsImNvbnRyb2xUcmFuc2ZlckluIiwicmVzdWx0IiwiZGF0YSIsImdldEludDgiLCJ1cGRhdGVNb2RlbVN0YXRlIiwiSW50MzJBcnJheSIsImJ1ZmZlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwiT2JqZWN0IiwiYSIsImVuYyIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwidHJhbnNmZXJPdXQiLCJsaW5lIiwic2V0TUhTIiwiY29uc29sZSIsImxvZyIsInRyYW5zZmVySW4iLCJyIiwicmVhZCIsImRlYyIsIlRleHREZWNvZGVyIiwiZGVjb2RlIiwibmFtZSIsImNvZGUiLCJtZXNzYWdlIiwiaW5kZXhPZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLG1CQUFPLENBQUMsaUZBQXFCOzs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLGdFQUFXOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7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Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQUlILEtBQUtoQixPQUFMLElBQWdCLEtBQUsvQixHQUFMLEtBQWEsSTs7Ozs7QUFDN0IscUJBQUsrQixPQUFMLEdBQWUsS0FBZjs7O3VCQUVxQixLQUFLa0MsSUFBTCxFOzs7QUFBYnRCLG9COztBQUNKLG9CQUFJQSxJQUFKLEVBQVU7QUFDTixzQkFBSSxLQUFLbkMsY0FBTCxLQUF3QkosU0FBNUIsRUFBdUM7QUFDL0I4RCx1QkFEK0IsR0FDekIsSUFBSUMsV0FBSixFQUR5QjtBQUVuQyx5QkFBSzNELGNBQUwsQ0FBb0IwRCxHQUFHLENBQUNFLE1BQUosQ0FBV3pCLElBQVgsQ0FBcEI7QUFDSDtBQUNKOzs7Ozs7Ozs7QUFFRCxvQkFBSSxjQUFHMEIsSUFBSCxLQUFZLGVBQVosSUFBK0IsY0FBR0MsSUFBSCxLQUFZLENBQTNDLElBQWdELGNBQUdDLE9BQUgsQ0FBV0MsT0FBWCxDQUFtQixjQUFuQixLQUFzQyxDQUExRixFQUE2RjtBQUN6Ri9DLCtCQUFhLENBQUMsS0FBS0QsU0FBTixDQUFiO0FBQ0FDLCtCQUFhLENBQUMsS0FBS0MsZUFBTixDQUFiO0FBQ0Esc0JBQUksS0FBS2IsZUFBVCxFQUEwQixLQUFLQSxlQUFMO0FBQzdCOzs7QUFFTCxxQkFBS2tCLE9BQUwsR0FBZSxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtaMEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUU1RSxRQUFNLEVBQU5BLE1BQUY7QUFBVXJCLGFBQVcsRUFBWEEsV0FBVjtBQUF1Qk8sY0FBWSxFQUFaQTtBQUF2QixDQUFqQixDIiwiZmlsZSI6IlRpYmJvV2ViU2VyaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJUaWJib1dlYlNlcmlhbFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUaWJib1dlYlNlcmlhbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUaWJib1dlYlNlcmlhbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9TZXJpYWwuanNcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJjb25zdCBDT05UUk9MX0NPTU1BTkRTID0ge1xyXG4gICAgSUZDX0VOQUJMRTogMHgwMCxcclxuICAgIFNFVF9CQVVERElWOiAweDAxLFxyXG4gICAgR0VUX0JBVURESVY6IDB4MDIsXHJcbiAgICBTRVRfTElORV9DVEw6IDB4MDMsXHJcbiAgICBHRVRfTElORV9DVEw6IDB4MDQsXHJcbiAgICBTRVRfQlJFQUs6IDB4MDUsXHJcbiAgICBJTU1fQ0hBUjogMHgwNixcclxuICAgIFNFVF9NSFM6IDB4MDcsXHJcbiAgICBHRVRfTURNU1RTOiAweDA4LFxyXG4gICAgU0VUX1hPTjogMHgwOSxcclxuICAgIFNFVF9YT0ZGOiAweDBBLFxyXG4gICAgU0VUX0VWRU5UTUFTSzogMHgwQixcclxuICAgIEdFVF9FVkVOVE1BU0s6IDB4MEMsXHJcbiAgICBHRVRfRVZFTlRTVEFURTogMHgxNixcclxuICAgIFNFVF9DSEFSOiAweDBELFxyXG4gICAgR0VUX0NIQVJTOiAweDBFLFxyXG4gICAgR0VUX1BST1BTOiAweDBGLFxyXG4gICAgR0VUX0NPTU1fU1RBVFVTOiAweDEwLFxyXG4gICAgUkVTRVQ6IDB4MTEsXHJcbiAgICBQVVJHRTogMHgxMixcclxuICAgIFNFVF9GTE9XOiAweDEzLFxyXG4gICAgR0VUX0ZMT1c6IDB4MTQsXHJcbiAgICBFTUJFRF9FVkVOVFM6IDB4MTUsXHJcbiAgICBHRVRfQkFVRFJBVEU6IDB4MUQsXHJcbiAgICBTRVRfQkFVRFJBVEU6IDB4MUUsXHJcbiAgICBTRVRfQ0hBUlM6IDB4MTksXHJcbiAgICBWRU5ET1JfU1BFQ0lGSUM6IDB4RkZcclxufTtcclxuXHJcbmNvbnN0IExJTkVfU1RBVEVTID0ge1xyXG4gICAgRFRSOiAxLFxyXG4gICAgUlRTOiAyLFxyXG4gICAgQ1RTOiAxNixcclxuICAgIERTUjogMzIsXHJcbiAgICBSSTogNjQsXHJcbiAgICBEQ0Q6IDEyOFxyXG59O1xyXG5cclxuY29uc3QgRkxPV19DT05UUk9MID0ge1xyXG4gICAgT0ZGOiBbMCwgMCwgMCwgMF0sXHJcbiAgICBDVFNfUlRTOiBbOCwgMTQ0LCAwLCAwXSxcclxuICAgIFhPTl9YT0ZGOiBbMCwgMTksIDQwMCwgNDAwXVxyXG59O1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0ge1xyXG4gICAgRU9GQ0hBUjogeyBpbmRleDogMCwgdmFsdWU6IDAgfSxcclxuICAgIEVSUk9SQ0hBUjogeyBpbmRleDogMSwgdmFsdWU6IDAgfSxcclxuICAgIEJSRUFLQ0hBUjogeyBpbmRleDogMiwgdmFsdWU6IDAgfSxcclxuICAgIEVWRU5UQ0hBUjogeyBpbmRleDogMywgdmFsdWU6IDAgfSxcclxuICAgIFhPTkNIQVI6IHsgaW5kZXg6IDQsIHZhbHVlOiAxNyB9LFxyXG4gICAgWE9GRkNIQVI6IHsgaW5kZXg6IDUsIHZhbHVlOiAxOSB9XHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0JBVUQgPSAzODQwMDtcclxuXHJcbmNsYXNzIFNlcmlhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZXZpY2UpIHtcclxuICAgICAgICB0aGlzLnVzYiA9IGRldmljZTtcclxuICAgICAgICB0aGlzLmJhdWQgPSBERUZBVUxUX0JBVUQ7XHJcbiAgICAgICAgdGhpcy5tb2RlbVN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLkRUUiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5SVFMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuQ1RTID0gbnVsbDtcclxuICAgICAgICB0aGlzLkRTUiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5SSSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5EQ0QgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVtU3RhdGVDaGFuZ2VkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZ2V0Rmxvd0NvbnRyb2xDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmZsb3dDb250cm9sQ2hhbmdlZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmJhdWRDaGFuZ2VPSyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNlckRhdGFBcnJpdmFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2VyRGF0YVNlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0RmFpbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RPSyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RPSyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb25uZWN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXNiLm9wZW4oKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy51c2Iuc2VsZWN0Q29uZmlndXJhdGlvbigxKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy51c2IuY2xhaW1JbnRlcmZhY2UoMCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZW5hYmxlKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0QmF1ZCh0aGlzLmJhdWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpbWVycygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0T0spIHRoaXMuY29ubmVjdE9LKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdEZhaWwpIHRoaXMuY29ubmVjdEZhaWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZW5hYmxlKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXNiLmNvbnRyb2xUcmFuc2Zlck91dCh7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiAnZGV2aWNlJyxcclxuICAgICAgICAgICAgcmVxdWVzdDogQ09OVFJPTF9DT01NQU5EUy5JRkNfRU5BQkxFLFxyXG4gICAgICAgICAgICBpbmRleDogMHgwMCxcclxuICAgICAgICAgICAgdmFsdWU6IDB4MDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVRpbWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGFUaW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVtU3RhdGVUaW1lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb2RlbVN0YXRlVGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFUaW1lciA9IHNldEludGVydmFsKHRoaXMucmVhZFRpbWVyLmJpbmQodGhpcyksIDEpO1xyXG4gICAgICAgIHRoaXMubW9kZW1TdGF0ZVRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5nZXRNb2RlbVN0YXRlLmJpbmQodGhpcywgdGhpcy51c2IpLCAxKTtcclxuICAgICAgICB0aGlzLmNhblJlYWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGFUaW1lcik7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLm1vZGVtU3RhdGVUaW1lcik7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51c2IuY2xvc2UoKTtcclxuICAgICAgICBpZiAodGhpcy5kaXNjb25uZWN0T0spIHRoaXMuZGlzY29ubmVjdE9LKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTW9kZW1TdGF0ZShtb2RlbVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbVN0YXRlID0gbW9kZW1TdGF0ZTtcclxuICAgICAgICB0aGlzLkRUUiA9IChtb2RlbVN0YXRlICYgTElORV9TVEFURVMuRFRSKSA+IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLlJUUyA9IChtb2RlbVN0YXRlICYgTElORV9TVEFURVMuUlRTKSA+IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLkNUUyA9IChtb2RlbVN0YXRlICYgTElORV9TVEFURVMuQ1RTKSA+IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLkRTUiA9IChtb2RlbVN0YXRlICYgTElORV9TVEFURVMuRFNSKSA+IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLlJJID0gKG1vZGVtU3RhdGUgJiBMSU5FX1NUQVRFUy5SSSkgPiAwID8gMSA6IDA7XHJcbiAgICAgICAgdGhpcy5EQ0QgPSAobW9kZW1TdGF0ZSAmIExJTkVfU1RBVEVTLkRDRCkgPiAwID8gMSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0QmF1ZChiYXVkKSB7XHJcbiAgICAgICAgdGhpcy5iYXVkID0gYmF1ZDtcclxuICAgICAgICBsZXQgYXJyID0gWzAsIDAsIDAsIDBdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYnl0ZSA9IGJhdWQgJiAweGZmO1xyXG5cclxuICAgICAgICAgICAgYXJyW2ldID0gYnl0ZTtcclxuICAgICAgICAgICAgYmF1ZCA9IChiYXVkIC0gYnl0ZSkgLyAyNTY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMudXNiLmNvbnRyb2xUcmFuc2Zlck91dCh7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiAnZGV2aWNlJyxcclxuICAgICAgICAgICAgcmVxdWVzdDogQ09OVFJPTF9DT01NQU5EUy5TRVRfQkFVRFJBVEUsXHJcbiAgICAgICAgICAgIGluZGV4OiAweDAwLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0sIG5ldyBVaW50OEFycmF5KGFycikpO1xyXG4gICAgICAgIGlmICh0aGlzLmJhdWRDaGFuZ2VPSykgdGhpcy5iYXVkQ2hhbmdlT0sodGhpcy5iYXVkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0aWFsaXplU3BlY2lhbENoYXJhY3RlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGFyKFNQRUNJQUxfQ0hBUkFDVEVSUy5YT0ZGQ0hBUi5pbmRleCwgU1BFQ0lBTF9DSEFSQUNURVJTLlhPRkZDSEFSLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldENoYXIoU1BFQ0lBTF9DSEFSQUNURVJTLlhPTkNIQVIuaW5kZXgsIFNQRUNJQUxfQ0hBUkFDVEVSUy5YT05DSEFSLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRDaGFyKFNwZWNpYWxDaGFyYWN0ZXJJbmRleCwgU3BlY2lhbENoYXJhY3RlclZhbHVlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51c2IuY29udHJvbFRyYW5zZmVyT3V0KHtcclxuICAgICAgICAgICAgcmVxdWVzdFR5cGU6ICd2ZW5kb3InLFxyXG4gICAgICAgICAgICByZWNpcGllbnQ6ICdkZXZpY2UnLFxyXG4gICAgICAgICAgICByZXF1ZXN0OiBDT05UUk9MX0NPTU1BTkRTLlNFVF9DSEFSLFxyXG4gICAgICAgICAgICBpbmRleDogMHgwMCxcclxuICAgICAgICAgICAgdmFsdWU6ICgoU3BlY2lhbENoYXJhY3RlckluZGV4IDw8IDgpICYgMHhGRjAwKSB8IFNwZWNpYWxDaGFyYWN0ZXJWYWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldE1IUyh2YWx1ZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXNiLmNvbnRyb2xUcmFuc2Zlck91dCh7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiAnZGV2aWNlJyxcclxuICAgICAgICAgICAgcmVxdWVzdDogQ09OVFJPTF9DT01NQU5EUy5TRVRfTUhTLFxyXG4gICAgICAgICAgICBpbmRleDogMHgwMCxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlIHwgMHgyMDAgfCAweDEwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEJhdWQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51c2IuY29udHJvbFRyYW5zZmVySW4oe1xyXG4gICAgICAgICAgICByZXF1ZXN0VHlwZTogJ3ZlbmRvcicsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudDogJ2RldmljZScsXHJcbiAgICAgICAgICAgIHJlcXVlc3Q6IENPTlRST0xfQ09NTUFORFMuU0VUX0JBVURESVYsXHJcbiAgICAgICAgICAgIGluZGV4OiAweDAwLFxyXG4gICAgICAgICAgICB2YWx1ZTogMHgwXHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0TW9kZW1TdGF0ZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy51c2IuY29udHJvbFRyYW5zZmVySW4oe1xyXG4gICAgICAgICAgICByZXF1ZXN0VHlwZTogJ3ZlbmRvcicsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudDogJ2RldmljZScsXHJcbiAgICAgICAgICAgIHJlcXVlc3Q6IENPTlRST0xfQ09NTUFORFMuR0VUX01ETVNUUyxcclxuICAgICAgICAgICAgaW5kZXg6IDB4MDAsXHJcbiAgICAgICAgICAgIHZhbHVlOiAweDBcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuZGF0YS5nZXRJbnQ4KCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5tb2RlbVN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZW1TdGF0ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbVN0YXRlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbVN0YXRlQ2hhbmdlZCh0aGlzLkRUUiwgdGhpcy5SVFMsIHRoaXMuQ1RTLCB0aGlzLkRTUiwgdGhpcy5SSSwgdGhpcy5EQ0QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEZsb3dDb250cm9sKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnVzYi5jb250cm9sVHJhbnNmZXJJbih7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiAnZGV2aWNlJyxcclxuICAgICAgICAgICAgcmVxdWVzdDogQ09OVFJPTF9DT01NQU5EUy5HRVRfRkxPVyxcclxuICAgICAgICAgICAgaW5kZXg6IDB4MDAsXHJcbiAgICAgICAgICAgIHZhbHVlOiAweDBcclxuICAgICAgICB9LCAxNik7XHJcbiAgICAgICAgdmFyIGFyciA9IG5ldyBJbnQzMkFycmF5KHJlc3VsdC5kYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgYXJyID0gSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShhcnIpKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoRkxPV19DT05UUk9MKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGVudHJpZXNbaV1bMV0pID09PSBhcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEZsb3dDb250cm9sQ2FsbGJhY2spIHRoaXMuZ2V0Rmxvd0NvbnRyb2xDYWxsYmFjayhlbnRyaWVzW2ldWzBdKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVudHJpZXNbaV1bMF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0Rmxvd0NvbnRyb2wodmFsdWUpIHtcclxuICAgICAgICBsZXQgYXJyID0gRkxPV19DT05UUk9MW3ZhbHVlXTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVzYi5jb250cm9sVHJhbnNmZXJPdXQoe1xyXG4gICAgICAgICAgICByZXF1ZXN0VHlwZTogJ3ZlbmRvcicsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudDogJ2RldmljZScsXHJcbiAgICAgICAgICAgIHJlcXVlc3Q6IDB4MTMsXHJcbiAgICAgICAgICAgIGluZGV4OiAweDAwLFxyXG4gICAgICAgICAgICB2YWx1ZTogMHgwXHJcbiAgICAgICAgfSwgbmV3IEludDMyQXJyYXkoYXJyKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZmxvd0NvbnRyb2xDaGFuZ2VkKSB0aGlzLmZsb3dDb250cm9sQ2hhbmdlZCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgd3JpdGUoZGF0YSkge1xyXG4gICAgICAgIHZhciBhID0gbmV3IFVpbnQ4QXJyYXkoKTtcclxuICAgICAgICB2YXIgZW5jID0gbmV3IFRleHRFbmNvZGVyKCk7XHJcbiAgICAgICAgYSA9IGVuYy5lbmNvZGUoZGF0YSk7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVzYi50cmFuc2Zlck91dCgyLCBhKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VyRGF0YVNlbnQpIHRoaXMuc2VyRGF0YVNlbnQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRvZ2dsZUxJTkUobGluZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0TUhTKGxpbmUgXiB0aGlzLm1vZGVtU3RhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMaW5lIHRvZ2dsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZWFkKCkge1xyXG4gICAgICAgIGNvbnN0IHIgPSBhd2FpdCB0aGlzLnVzYi50cmFuc2ZlckluKDIsIDY0KTtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoci5kYXRhLmJ1ZmZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVhZFRpbWVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhblJlYWQgJiYgdGhpcy51c2IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SZWFkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMucmVhZCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJEYXRhQXJyaXZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWMgPSBuZXcgVGV4dERlY29kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJEYXRhQXJyaXZhbChkZWMuZGVjb2RlKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXgubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InICYmIGV4LmNvZGUgPT09IDggJiYgZXgubWVzc2FnZS5pbmRleE9mKCdkaXNjb25uZWN0ZWQnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGFUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLm1vZGVtU3RhdGVUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkVycm9yKSB0aGlzLmNvbm5lY3Rpb25FcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUmVhZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2VyaWFsLCBMSU5FX1NUQVRFUywgRkxPV19DT05UUk9MIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=