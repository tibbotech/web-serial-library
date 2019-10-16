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
var DECODER = new TextDecoder();
var bufferedData = '';

var Serial =
/*#__PURE__*/
function () {
  function Serial(device, options) {
    (0, _classCallCheck2.default)(this, Serial);
    this.usb = device;
    this.requestTimedOut = false;
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
    this.autoReadData = options !== undefined && options.autoReadData !== undefined ? options.autoReadData : true;
    this.flowControl = options !== undefined && options.flowControl !== undefined ? options.flowControl : 'OFF';
    this.baud = options !== undefined && options.baud !== undefined ? options.baud : 38400;
    this.encoding = options !== undefined && options.encoding !== undefined ? options.encoding : '';
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
                _context.next = 13;
                return this.setFlowControl(this.flowControl);

              case 13:
                this.setTimers();
                if (this.connectOK) this.connectOK();
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);
                if (this.connectFail) this.connectFail();

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 17]]);
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

      this.dataTimer = setInterval(this.readTimer.bind(this), 1);
      this.canRead = true;

      if (this.modemStateTimer !== undefined) {
        clearInterval(this.modemStateTimer);
      }

      this.modemStateTimer = setInterval(this.getModemState.bind(this, this.usb), 1);
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
                    if (this.getFlowControlCallback) this.getFlowControlCallback(entries[i][0]);
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
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (bufferedData !== '') {
                  this.serDataArrival(bufferedData);
                  bufferedData = '';
                }

              case 1:
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
    key: "autoRead",
    value: function () {
      var _ref15 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15() {
        var r;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.usb.transferIn(2, 64);

              case 2:
                r = _context15.sent;
                return _context15.abrupt("return", new Uint8Array(r.data.buffer));

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function autoRead() {
        return _ref15.apply(this, arguments);
      }

      return autoRead;
    }()
  }, {
    key: "readTimer",
    value: function () {
      var _ref16 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee16() {
        var data;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!(this.canRead && this.usb != null)) {
                  _context16.next = 13;
                  break;
                }

                this.canRead = false;
                _context16.prev = 2;
                _context16.next = 5;
                return this.autoRead();

              case 5:
                data = _context16.sent;

                if (data) {
                  if (this.encoding === 'UTF8') {
                    data = DECODER.decode(data);
                  }

                  if (this.encoding === 'HEX') {
                    data = this.byteToHexString(data);
                  }

                  if (this.serDataArrival !== undefined) {
                    if (this.autoReadData) {
                      this.serDataArrival(data);
                    } else {
                      bufferedData = bufferedData + data;
                    }
                  }
                }

                _context16.next = 12;
                break;

              case 9:
                _context16.prev = 9;
                _context16.t0 = _context16["catch"](2);

                if (_context16.t0.name === 'NotFoundError' && _context16.t0.code === 8 && _context16.t0.message.indexOf('disconnected') >= 0) {
                  clearInterval(this.dataTimer);
                  clearInterval(this.modemStateTimer);
                  if (this.connectionError) this.connectionError();
                }

              case 12:
                this.canRead = true;

              case 13:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[2, 9]]);
      }));

      function readTimer() {
        return _ref16.apply(this, arguments);
      }

      return readTimer;
    }()
  }, {
    key: "byteToHexString",
    value: function byteToHexString(uint8arr) {
      if (!uint8arr) {
        return '';
      }

      var hexStr = '';

      for (var i = 0; i < uint8arr.length; i++) {
        var hex = (uint8arr[i] & 0xff).toString(16);
        hex = hex.length === 1 ? '0' + hex : hex;
        hexStr += hex;
      }

      return hexStr.toUpperCase();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGliYm9XZWJTZXJpYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGliYm9XZWJTZXJpYWwvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1RpYmJvV2ViU2VyaWFsLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vVGliYm9XZWJTZXJpYWwvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL1RpYmJvV2ViU2VyaWFsLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9UaWJib1dlYlNlcmlhbC8uL3NyYy9TZXJpYWwuanMiXSwibmFtZXMiOlsiQ09OVFJPTF9DT01NQU5EUyIsIklGQ19FTkFCTEUiLCJTRVRfQkFVRERJViIsIkdFVF9CQVVERElWIiwiU0VUX0xJTkVfQ1RMIiwiR0VUX0xJTkVfQ1RMIiwiU0VUX0JSRUFLIiwiSU1NX0NIQVIiLCJTRVRfTUhTIiwiR0VUX01ETVNUUyIsIlNFVF9YT04iLCJTRVRfWE9GRiIsIlNFVF9FVkVOVE1BU0siLCJHRVRfRVZFTlRNQVNLIiwiR0VUX0VWRU5UU1RBVEUiLCJTRVRfQ0hBUiIsIkdFVF9DSEFSUyIsIkdFVF9QUk9QUyIsIkdFVF9DT01NX1NUQVRVUyIsIlJFU0VUIiwiUFVSR0UiLCJTRVRfRkxPVyIsIkdFVF9GTE9XIiwiRU1CRURfRVZFTlRTIiwiR0VUX0JBVURSQVRFIiwiU0VUX0JBVURSQVRFIiwiU0VUX0NIQVJTIiwiVkVORE9SX1NQRUNJRklDIiwiTElORV9TVEFURVMiLCJEVFIiLCJSVFMiLCJDVFMiLCJEU1IiLCJSSSIsIkRDRCIsIkZMT1dfQ09OVFJPTCIsIk9GRiIsIkNUU19SVFMiLCJYT05fWE9GRiIsIlNQRUNJQUxfQ0hBUkFDVEVSUyIsIkVPRkNIQVIiLCJpbmRleCIsInZhbHVlIiwiRVJST1JDSEFSIiwiQlJFQUtDSEFSIiwiRVZFTlRDSEFSIiwiWE9OQ0hBUiIsIlhPRkZDSEFSIiwiREVDT0RFUiIsIlRleHREZWNvZGVyIiwiYnVmZmVyZWREYXRhIiwiU2VyaWFsIiwiZGV2aWNlIiwib3B0aW9ucyIsInVzYiIsInJlcXVlc3RUaW1lZE91dCIsIm1vZGVtU3RhdGUiLCJtb2RlbVN0YXRlQ2hhbmdlZCIsInVuZGVmaW5lZCIsImdldEZsb3dDb250cm9sQ2FsbGJhY2siLCJmbG93Q29udHJvbENoYW5nZWQiLCJiYXVkQ2hhbmdlT0siLCJzZXJEYXRhQXJyaXZhbCIsInNlckRhdGFTZW50IiwiY29ubmVjdEZhaWwiLCJjb25uZWN0T0siLCJkaXNjb25uZWN0T0siLCJjb25uZWN0aW9uRXJyb3IiLCJhdXRvUmVhZERhdGEiLCJmbG93Q29udHJvbCIsImJhdWQiLCJlbmNvZGluZyIsIm9wZW4iLCJzZWxlY3RDb25maWd1cmF0aW9uIiwiY2xhaW1JbnRlcmZhY2UiLCJlbmFibGUiLCJzZXRCYXVkIiwic2V0Rmxvd0NvbnRyb2wiLCJzZXRUaW1lcnMiLCJjb250cm9sVHJhbnNmZXJPdXQiLCJyZXF1ZXN0VHlwZSIsInJlY2lwaWVudCIsInJlcXVlc3QiLCJkYXRhVGltZXIiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZWFkVGltZXIiLCJiaW5kIiwiY2FuUmVhZCIsIm1vZGVtU3RhdGVUaW1lciIsImdldE1vZGVtU3RhdGUiLCJjbG9zZSIsImFyciIsImkiLCJsZW5ndGgiLCJieXRlIiwiVWludDhBcnJheSIsInNldENoYXIiLCJTcGVjaWFsQ2hhcmFjdGVySW5kZXgiLCJTcGVjaWFsQ2hhcmFjdGVyVmFsdWUiLCJjb250cm9sVHJhbnNmZXJJbiIsInJlc3VsdCIsImRhdGEiLCJnZXRJbnQ4IiwidXBkYXRlTW9kZW1TdGF0ZSIsIkludDMyQXJyYXkiLCJidWZmZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiQXJyYXkiLCJmcm9tIiwiZW50cmllcyIsIk9iamVjdCIsImEiLCJlbmMiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInRyYW5zZmVyT3V0IiwibGluZSIsInNldE1IUyIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2ZlckluIiwiciIsImF1dG9SZWFkIiwiZGVjb2RlIiwiYnl0ZVRvSGV4U3RyaW5nIiwibmFtZSIsImNvZGUiLCJtZXNzYWdlIiwiaW5kZXhPZiIsInVpbnQ4YXJyIiwiaGV4U3RyIiwiaGV4IiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLG1CQUFPLENBQUMsaUZBQXFCOzs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLGdFQUFXOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QXRDLEVBQTBDO0FBQ3RDLFlBQUl3QyxHQUFHLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDdEMsQ0FBRCxDQUFSLEdBQWMsSUFBZixFQUFxQnlDLFFBQXJCLENBQThCLEVBQTlCLENBQVY7QUFDQUQsV0FBRyxHQUFJQSxHQUFHLENBQUN2QyxNQUFKLEtBQWUsQ0FBaEIsR0FBcUIsTUFBTXVDLEdBQTNCLEdBQWlDQSxHQUF2QztBQUNBRCxjQUFNLElBQUlDLEdBQVY7QUFDSDs7QUFDRCxhQUFPRCxNQUFNLENBQUNHLFdBQVAsRUFBUDtBQUNIOzs7OztBQUlMQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFBRXRGLFFBQU0sRUFBTkEsTUFBRjtBQUFVdkIsYUFBVyxFQUFYQSxXQUFWO0FBQXVCTyxjQUFZLEVBQVpBO0FBQXZCLENBQWpCLEMiLCJmaWxlIjoiVGliYm9XZWJTZXJpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlRpYmJvV2ViU2VyaWFsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRpYmJvV2ViU2VyaWFsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRpYmJvV2ViU2VyaWFsXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL1NlcmlhbC5qc1wiKTtcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsImNvbnN0IENPTlRST0xfQ09NTUFORFMgPSB7XHJcbiAgICBJRkNfRU5BQkxFOiAweDAwLFxyXG4gICAgU0VUX0JBVURESVY6IDB4MDEsXHJcbiAgICBHRVRfQkFVRERJVjogMHgwMixcclxuICAgIFNFVF9MSU5FX0NUTDogMHgwMyxcclxuICAgIEdFVF9MSU5FX0NUTDogMHgwNCxcclxuICAgIFNFVF9CUkVBSzogMHgwNSxcclxuICAgIElNTV9DSEFSOiAweDA2LFxyXG4gICAgU0VUX01IUzogMHgwNyxcclxuICAgIEdFVF9NRE1TVFM6IDB4MDgsXHJcbiAgICBTRVRfWE9OOiAweDA5LFxyXG4gICAgU0VUX1hPRkY6IDB4MEEsXHJcbiAgICBTRVRfRVZFTlRNQVNLOiAweDBCLFxyXG4gICAgR0VUX0VWRU5UTUFTSzogMHgwQyxcclxuICAgIEdFVF9FVkVOVFNUQVRFOiAweDE2LFxyXG4gICAgU0VUX0NIQVI6IDB4MEQsXHJcbiAgICBHRVRfQ0hBUlM6IDB4MEUsXHJcbiAgICBHRVRfUFJPUFM6IDB4MEYsXHJcbiAgICBHRVRfQ09NTV9TVEFUVVM6IDB4MTAsXHJcbiAgICBSRVNFVDogMHgxMSxcclxuICAgIFBVUkdFOiAweDEyLFxyXG4gICAgU0VUX0ZMT1c6IDB4MTMsXHJcbiAgICBHRVRfRkxPVzogMHgxNCxcclxuICAgIEVNQkVEX0VWRU5UUzogMHgxNSxcclxuICAgIEdFVF9CQVVEUkFURTogMHgxRCxcclxuICAgIFNFVF9CQVVEUkFURTogMHgxRSxcclxuICAgIFNFVF9DSEFSUzogMHgxOSxcclxuICAgIFZFTkRPUl9TUEVDSUZJQzogMHhGRlxyXG59O1xyXG5cclxuY29uc3QgTElORV9TVEFURVMgPSB7XHJcbiAgICBEVFI6IDEsXHJcbiAgICBSVFM6IDIsXHJcbiAgICBDVFM6IDE2LFxyXG4gICAgRFNSOiAzMixcclxuICAgIFJJOiA2NCxcclxuICAgIERDRDogMTI4XHJcbn07XHJcblxyXG5jb25zdCBGTE9XX0NPTlRST0wgPSB7XHJcbiAgICBPRkY6IFswLCAwLCAwLCAwXSxcclxuICAgIENUU19SVFM6IFs4LCAxNDQsIDAsIDBdLFxyXG4gICAgWE9OX1hPRkY6IFswLCAxOSwgNDAwLCA0MDBdXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSB7XHJcbiAgICBFT0ZDSEFSOiB7IGluZGV4OiAwLCB2YWx1ZTogMCB9LFxyXG4gICAgRVJST1JDSEFSOiB7IGluZGV4OiAxLCB2YWx1ZTogMCB9LFxyXG4gICAgQlJFQUtDSEFSOiB7IGluZGV4OiAyLCB2YWx1ZTogMCB9LFxyXG4gICAgRVZFTlRDSEFSOiB7IGluZGV4OiAzLCB2YWx1ZTogMCB9LFxyXG4gICAgWE9OQ0hBUjogeyBpbmRleDogNCwgdmFsdWU6IDE3IH0sXHJcbiAgICBYT0ZGQ0hBUjogeyBpbmRleDogNSwgdmFsdWU6IDE5IH1cclxufTtcclxuXHJcbmNvbnN0IERFQ09ERVIgPSBuZXcgVGV4dERlY29kZXIoKTtcclxuXHJcbmxldCBidWZmZXJlZERhdGEgPSAnJztcclxuXHJcbmNsYXNzIFNlcmlhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZXZpY2UsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnVzYiA9IGRldmljZTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RUaW1lZE91dCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW9kZW1TdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5EVFIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuUlRTID0gbnVsbDtcclxuICAgICAgICB0aGlzLkNUUyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5EU1IgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuUkkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuRENEID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbVN0YXRlQ2hhbmdlZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmdldEZsb3dDb250cm9sQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5mbG93Q29udHJvbENoYW5nZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5iYXVkQ2hhbmdlT0sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zZXJEYXRhQXJyaXZhbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNlckRhdGFTZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdEZhaWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0T0sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0T0sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b1JlYWREYXRhID0gb3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuYXV0b1JlYWREYXRhICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmF1dG9SZWFkRGF0YSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5mbG93Q29udHJvbCA9IG9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmZsb3dDb250cm9sICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmZsb3dDb250cm9sIDogJ09GRic7XHJcbiAgICAgICAgdGhpcy5iYXVkID0gb3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuYmF1ZCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5iYXVkIDogMzg0MDA7XHJcbiAgICAgICAgdGhpcy5lbmNvZGluZyA9IG9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmVuY29kaW5nICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmVuY29kaW5nIDogJyc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy51c2Iub3BlbigpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVzYi5zZWxlY3RDb25maWd1cmF0aW9uKDEpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVzYi5jbGFpbUludGVyZmFjZSgwKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5lbmFibGUoKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRCYXVkKHRoaXMuYmF1ZCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0Rmxvd0NvbnRyb2wodGhpcy5mbG93Q29udHJvbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZXJzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RPSykgdGhpcy5jb25uZWN0T0soKTtcclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0RmFpbCkgdGhpcy5jb25uZWN0RmFpbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBlbmFibGUoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51c2IuY29udHJvbFRyYW5zZmVyT3V0KHtcclxuICAgICAgICAgICAgcmVxdWVzdFR5cGU6ICd2ZW5kb3InLFxyXG4gICAgICAgICAgICByZWNpcGllbnQ6ICdkZXZpY2UnLFxyXG4gICAgICAgICAgICByZXF1ZXN0OiBDT05UUk9MX0NPTU1BTkRTLklGQ19FTkFCTEUsXHJcbiAgICAgICAgICAgIGluZGV4OiAweDAwLFxyXG4gICAgICAgICAgICB2YWx1ZTogMHgwMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhVGltZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZGF0YVRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhVGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnJlYWRUaW1lci5iaW5kKHRoaXMpLCAxKTtcclxuICAgICAgICB0aGlzLmNhblJlYWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVtU3RhdGVUaW1lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb2RlbVN0YXRlVGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVtU3RhdGVUaW1lciA9IHNldEludGVydmFsKHRoaXMuZ2V0TW9kZW1TdGF0ZS5iaW5kKHRoaXMsIHRoaXMudXNiKSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZGF0YVRpbWVyKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMubW9kZW1TdGF0ZVRpbWVyKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVzYi5jbG9zZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2Nvbm5lY3RPSykgdGhpcy5kaXNjb25uZWN0T0soKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNb2RlbVN0YXRlKG1vZGVtU3RhdGUpIHtcclxuICAgICAgICB0aGlzLm1vZGVtU3RhdGUgPSBtb2RlbVN0YXRlO1xyXG4gICAgICAgIHRoaXMuRFRSID0gKG1vZGVtU3RhdGUgJiBMSU5FX1NUQVRFUy5EVFIpID4gMCA/IDEgOiAwO1xyXG4gICAgICAgIHRoaXMuUlRTID0gKG1vZGVtU3RhdGUgJiBMSU5FX1NUQVRFUy5SVFMpID4gMCA/IDEgOiAwO1xyXG4gICAgICAgIHRoaXMuQ1RTID0gKG1vZGVtU3RhdGUgJiBMSU5FX1NUQVRFUy5DVFMpID4gMCA/IDEgOiAwO1xyXG4gICAgICAgIHRoaXMuRFNSID0gKG1vZGVtU3RhdGUgJiBMSU5FX1NUQVRFUy5EU1IpID4gMCA/IDEgOiAwO1xyXG4gICAgICAgIHRoaXMuUkkgPSAobW9kZW1TdGF0ZSAmIExJTkVfU1RBVEVTLlJJKSA+IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLkRDRCA9IChtb2RlbVN0YXRlICYgTElORV9TVEFURVMuRENEKSA+IDAgPyAxIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRCYXVkKGJhdWQpIHtcclxuICAgICAgICB0aGlzLmJhdWQgPSBiYXVkO1xyXG4gICAgICAgIGxldCBhcnIgPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJ5dGUgPSBiYXVkICYgMHhmZjtcclxuICAgICAgICAgICAgYXJyW2ldID0gYnl0ZTtcclxuICAgICAgICAgICAgYmF1ZCA9IChiYXVkIC0gYnl0ZSkgLyAyNTY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMudXNiLmNvbnRyb2xUcmFuc2Zlck91dCh7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiAnZGV2aWNlJyxcclxuICAgICAgICAgICAgcmVxdWVzdDogQ09OVFJPTF9DT01NQU5EUy5TRVRfQkFVRFJBVEUsXHJcbiAgICAgICAgICAgIGluZGV4OiAweDAwLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0sIG5ldyBVaW50OEFycmF5KGFycikpO1xyXG4gICAgICAgIGlmICh0aGlzLmJhdWRDaGFuZ2VPSykgdGhpcy5iYXVkQ2hhbmdlT0sodGhpcy5iYXVkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0aWFsaXplU3BlY2lhbENoYXJhY3RlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDaGFyKFNQRUNJQUxfQ0hBUkFDVEVSUy5YT0ZGQ0hBUi5pbmRleCwgU1BFQ0lBTF9DSEFSQUNURVJTLlhPRkZDSEFSLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldENoYXIoU1BFQ0lBTF9DSEFSQUNURVJTLlhPTkNIQVIuaW5kZXgsIFNQRUNJQUxfQ0hBUkFDVEVSUy5YT05DSEFSLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRDaGFyKFNwZWNpYWxDaGFyYWN0ZXJJbmRleCwgU3BlY2lhbENoYXJhY3RlclZhbHVlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51c2IuY29udHJvbFRyYW5zZmVyT3V0KHtcclxuICAgICAgICAgICAgcmVxdWVzdFR5cGU6ICd2ZW5kb3InLFxyXG4gICAgICAgICAgICByZWNpcGllbnQ6ICdkZXZpY2UnLFxyXG4gICAgICAgICAgICByZXF1ZXN0OiBDT05UUk9MX0NPTU1BTkRTLlNFVF9DSEFSLFxyXG4gICAgICAgICAgICBpbmRleDogMHgwMCxcclxuICAgICAgICAgICAgdmFsdWU6ICgoU3BlY2lhbENoYXJhY3RlckluZGV4IDw8IDgpICYgMHhGRjAwKSB8IFNwZWNpYWxDaGFyYWN0ZXJWYWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldE1IUyh2YWx1ZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXNiLmNvbnRyb2xUcmFuc2Zlck91dCh7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiAnZGV2aWNlJyxcclxuICAgICAgICAgICAgcmVxdWVzdDogQ09OVFJPTF9DT01NQU5EUy5TRVRfTUhTLFxyXG4gICAgICAgICAgICBpbmRleDogMHgwMCxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlIHwgMHgyMDAgfCAweDEwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEJhdWQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51c2IuY29udHJvbFRyYW5zZmVySW4oe1xyXG4gICAgICAgICAgICByZXF1ZXN0VHlwZTogJ3ZlbmRvcicsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudDogJ2RldmljZScsXHJcbiAgICAgICAgICAgIHJlcXVlc3Q6IENPTlRST0xfQ09NTUFORFMuU0VUX0JBVURESVYsXHJcbiAgICAgICAgICAgIGluZGV4OiAweDAwLFxyXG4gICAgICAgICAgICB2YWx1ZTogMHgwXHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0TW9kZW1TdGF0ZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy51c2IuY29udHJvbFRyYW5zZmVySW4oe1xyXG4gICAgICAgICAgICByZXF1ZXN0VHlwZTogJ3ZlbmRvcicsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudDogJ2RldmljZScsXHJcbiAgICAgICAgICAgIHJlcXVlc3Q6IENPTlRST0xfQ09NTUFORFMuR0VUX01ETVNUUyxcclxuICAgICAgICAgICAgaW5kZXg6IDB4MDAsXHJcbiAgICAgICAgICAgIHZhbHVlOiAweDBcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuZGF0YS5nZXRJbnQ4KCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5tb2RlbVN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZW1TdGF0ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbVN0YXRlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbVN0YXRlQ2hhbmdlZCh0aGlzLkRUUiwgdGhpcy5SVFMsIHRoaXMuQ1RTLCB0aGlzLkRTUiwgdGhpcy5SSSwgdGhpcy5EQ0QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEZsb3dDb250cm9sKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnVzYi5jb250cm9sVHJhbnNmZXJJbih7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiAnZGV2aWNlJyxcclxuICAgICAgICAgICAgcmVxdWVzdDogQ09OVFJPTF9DT01NQU5EUy5HRVRfRkxPVyxcclxuICAgICAgICAgICAgaW5kZXg6IDB4MDAsXHJcbiAgICAgICAgICAgIHZhbHVlOiAweDBcclxuICAgICAgICB9LCAxNik7XHJcbiAgICAgICAgdmFyIGFyciA9IG5ldyBJbnQzMkFycmF5KHJlc3VsdC5kYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgYXJyID0gSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShhcnIpKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoRkxPV19DT05UUk9MKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGVudHJpZXNbaV1bMV0pID09PSBhcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEZsb3dDb250cm9sQ2FsbGJhY2spIHRoaXMuZ2V0Rmxvd0NvbnRyb2xDYWxsYmFjayhlbnRyaWVzW2ldWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRGbG93Q29udHJvbCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBhcnIgPSBGTE9XX0NPTlRST0xbdmFsdWVdO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXNiLmNvbnRyb2xUcmFuc2Zlck91dCh7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiAnZGV2aWNlJyxcclxuICAgICAgICAgICAgcmVxdWVzdDogMHgxMyxcclxuICAgICAgICAgICAgaW5kZXg6IDB4MDAsXHJcbiAgICAgICAgICAgIHZhbHVlOiAweDBcclxuICAgICAgICB9LCBuZXcgSW50MzJBcnJheShhcnIpKTtcclxuICAgICAgICBpZiAodGhpcy5mbG93Q29udHJvbENoYW5nZWQpIHRoaXMuZmxvd0NvbnRyb2xDaGFuZ2VkKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB3cml0ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIGEgPSBuZXcgVWludDhBcnJheSgpO1xyXG4gICAgICAgIHZhciBlbmMgPSBuZXcgVGV4dEVuY29kZXIoKTtcclxuICAgICAgICBhID0gZW5jLmVuY29kZShkYXRhKTtcclxuICAgICAgICBpZiAoYS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXNiLnRyYW5zZmVyT3V0KDIsIGEpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJEYXRhU2VudCkgdGhpcy5zZXJEYXRhU2VudChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdG9nZ2xlTElORShsaW5lKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRNSFMobGluZSBeIHRoaXMubW9kZW1TdGF0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xpbmUgdG9nZ2xlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlYWQoKSB7XHJcbiAgICAgICAgaWYgKGJ1ZmZlcmVkRGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJEYXRhQXJyaXZhbChidWZmZXJlZERhdGEpO1xyXG4gICAgICAgICAgICBidWZmZXJlZERhdGEgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYXV0b1JlYWQoKSB7XHJcbiAgICAgICAgY29uc3QgciA9IGF3YWl0IHRoaXMudXNiLnRyYW5zZmVySW4oMiwgNjQpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShyLmRhdGEuYnVmZmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZWFkVGltZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUmVhZCAmJiB0aGlzLnVzYiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUmVhZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmF1dG9SZWFkKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuY29kaW5nID09PSAnVVRGOCcpIHtkYXRhID0gREVDT0RFUi5kZWNvZGUoZGF0YSk7fVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuY29kaW5nID09PSAnSEVYJykge2RhdGEgPSB0aGlzLmJ5dGVUb0hleFN0cmluZyhkYXRhKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VyRGF0YUFycml2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvUmVhZERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyRGF0YUFycml2YWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJlZERhdGEgPSBidWZmZXJlZERhdGEgKyBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJyAmJiBleC5jb2RlID09PSA4ICYmIGV4Lm1lc3NhZ2UuaW5kZXhPZignZGlzY29ubmVjdGVkJykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb2RlbVN0YXRlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25FcnJvcikgdGhpcy5jb25uZWN0aW9uRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhblJlYWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieXRlVG9IZXhTdHJpbmcodWludDhhcnIpIHtcclxuICAgICAgICBpZiAoIXVpbnQ4YXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhleFN0ciA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdWludDhhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGhleCA9ICh1aW50OGFycltpXSAmIDB4ZmYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgaGV4ID0gKGhleC5sZW5ndGggPT09IDEpID8gJzAnICsgaGV4IDogaGV4O1xyXG4gICAgICAgICAgICBoZXhTdHIgKz0gaGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGV4U3RyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2VyaWFsLCBMSU5FX1NUQVRFUywgRkxPV19DT05UUk9MIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=