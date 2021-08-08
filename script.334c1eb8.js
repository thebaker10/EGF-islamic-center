// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/@fortawesome/fontawesome-free/css/all.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\webfonts\\fa-brands-400.eot":[["fa-brands-400.7b5acd02.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"./..\\webfonts\\fa-brands-400.woff2":[["fa-brands-400.34cc846b.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"./..\\webfonts\\fa-brands-400.woff":[["fa-brands-400.75159956.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"./..\\webfonts\\fa-brands-400.ttf":[["fa-brands-400.f885063e.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"./..\\webfonts\\fa-brands-400.svg":[["fa-brands-400.1f0eb095.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"./..\\webfonts\\fa-regular-400.eot":[["fa-regular-400.d4b9b17f.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"./..\\webfonts\\fa-regular-400.woff2":[["fa-regular-400.82c42f2f.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"./..\\webfonts\\fa-regular-400.woff":[["fa-regular-400.adc5c7aa.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"./..\\webfonts\\fa-regular-400.ttf":[["fa-regular-400.b073eab5.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"./..\\webfonts\\fa-regular-400.svg":[["fa-regular-400.16d6ac71.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"./..\\webfonts\\fa-solid-900.eot":[["fa-solid-900.0b60ff24.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"./..\\webfonts\\fa-solid-900.woff2":[["fa-solid-900.55d5ef42.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"./..\\webfonts\\fa-solid-900.woff":[["fa-solid-900.f824330b.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"./..\\webfonts\\fa-solid-900.ttf":[["fa-solid-900.47a039f3.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"./..\\webfonts\\fa-solid-900.svg":[["fa-solid-900.d08d5f59.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__spreadArray = __spreadArray;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */


function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || from);
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
},{}],"../node_modules/@firebase/util/dist/index.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areCookiesEnabled = areCookiesEnabled;
exports.async = async;
exports.calculateBackoffMillis = calculateBackoffMillis;
exports.contains = contains;
exports.createMockUserToken = createMockUserToken;
exports.createSubscribe = createSubscribe;
exports.deepCopy = deepCopy;
exports.deepEqual = deepEqual;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.extractQuerystring = extractQuerystring;
exports.getGlobal = getGlobal;
exports.getModularInstance = getModularInstance;
exports.getUA = getUA;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isIndexedDBAvailable = isIndexedDBAvailable;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.jsonEval = jsonEval;
exports.map = map;
exports.ordinal = ordinal;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringify = stringify;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
exports.validateNamespace = validateNamespace;
exports.validateArgCount = exports.stringToByteArray = exports.stringLength = exports.issuedAtTime = exports.isValidTimestamp = exports.isValidFormat = exports.isAdmin = exports.decode = exports.base64Encode = exports.base64Decode = exports.base64 = exports.assertionError = exports.assert = exports.Sha1 = exports.RANDOM_FACTOR = exports.MAX_VALUE_MILLIS = exports.FirebaseError = exports.ErrorFactory = exports.Deferred = exports.CONSTANTS = void 0;

var _tslib = require("tslib");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,

  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,

  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws an error if the provided assertion is falsy
 */

exports.CONSTANTS = CONSTANTS;

var assert = function (assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */


exports.assert = assert;

var assertionError = function (message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.assertionError = assertionError;

var stringToByteArray$1 = function (str) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */


var byteArrayToString = function (bytes) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0,
      c = 0;

  while (pos < bytes.length) {
    var c1 = bytes[pos++];

    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }

  return out.join('');
}; // We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()


var base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,

  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,

  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,

  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,

  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },

  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },

  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',

  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray: function (input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }

    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];

    for (var i = 0; i < input.length; i += 3) {
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;

      if (!haveByte3) {
        outByte4 = 64;

        if (!haveByte2) {
          outByte3 = 64;
        }
      }

      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }

    return output.join('');
  },

  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString: function (input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }

    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },

  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString: function (input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }

    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },

  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray: function (input, webSafe) {
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];

    for (var i = 0; i < input.length;) {
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;

      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }

      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);

      if (byte3 !== 64) {
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);

        if (byte4 !== 64) {
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }

    return output;
  },

  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_: function () {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

      for (var i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
/**
 * URL-safe base64 encoding
 */

exports.base64 = base64;

var base64Encode = function (str) {
  var utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */


exports.base64Encode = base64Encode;

var base64Decode = function (str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }

  return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */


exports.base64Decode = base64Decode;

function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */


function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }

  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());

    case Object:
      if (target === undefined) {
        target = {};
      }

      break;

    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;

    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }

  for (var prop in source) {
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }

    target[prop] = deepExtend(target[prop], source[prop]);
  }

  return target;
}

function isValidKey(key) {
  return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Deferred =
/** @class */
function () {
  function Deferred() {
    var _this = this;

    this.reject = function () {};

    this.resolve = function () {};

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */


  Deferred.prototype.wrapCallback = function (callback) {
    var _this = this;

    return function (error, value) {
      if (error) {
        _this.reject(error);
      } else {
        _this.resolve(value);
      }

      if (typeof callback === 'function') {
        // Attaching noop handler just in case developer wasn't expecting
        // promises
        _this.promise.catch(function () {}); // Some of our callbacks don't expect a value and our own tests
        // assert that the parameter length is 1


        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };

  return Deferred;
}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.Deferred = Deferred;

function createMockUserToken(token, projectId) {
  if (token.uid) {
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  } // Unsecured JWTs use "none" as the algorithm.


  var header = {
    alg: 'none',
    type: 'JWT'
  };
  var project = projectId || 'demo-project';
  var iat = token.iat || 0;
  var sub = token.sub || token.user_id;

  if (!sub) {
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  }

  var payload = (0, _tslib.__assign)({
    // Set all required fields to decent defaults
    iss: "https://securetoken.google.com/" + project,
    aud: project,
    iat: iat,
    exp: iat + 3600,
    auth_time: iat,
    sub: sub,
    user_id: sub,
    firebase: {
      sign_in_provider: 'custom',
      identities: {}
    }
  }, token); // Unsecured JWTs use the empty string as a signature.

  var signature = '';
  return [base64.encodeString(JSON.stringify(header),
  /*webSafe=*/
  false), base64.encodeString(JSON.stringify(payload),
  /*webSafe=*/
  false), signature].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */


function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */


function isMobileCordova() {
  return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/


function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
/**
 * Detect Browser Environment
 */


function isBrowser() {
  return typeof self === 'object' && self.self === self;
}

function isBrowserExtension() {
  var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
  return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */


function isReactNative() {
  return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */


function isElectron() {
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */


function isIE() {
  var ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */


function isUWP() {
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */


function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */


function isSafari() {
  return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */


function isIndexedDBAvailable() {
  return 'indexedDB' in self && indexedDB != null;
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */


function validateIndexedDBOpenable() {
  return new Promise(function (resolve, reject) {
    try {
      var preExist_1 = true;
      var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
      var request_1 = self.indexedDB.open(DB_CHECK_NAME_1);

      request_1.onsuccess = function () {
        request_1.result.close(); // delete database only when it doesn't pre-exist

        if (!preExist_1) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
        }

        resolve(true);
      };

      request_1.onupgradeneeded = function () {
        preExist_1 = false;
      };

      request_1.onerror = function () {
        var _a;

        reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      };
    } catch (error) {
      reject(error);
    }
  });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */


function areCookiesEnabled() {
  if (!navigator || !navigator.cookieEnabled) {
    return false;
  }

  return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */


function getGlobal() {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ERROR_NAME = 'FirebaseError'; // Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

var FirebaseError =
/** @class */
function (_super) {
  (0, _tslib.__extends)(FirebaseError, _super);

  function FirebaseError(code, message, customData) {
    var _this = _super.call(this, message) || this;

    _this.code = code;
    _this.customData = customData;
    _this.name = ERROR_NAME; // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(_this, FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }

    return _this;
  }

  return FirebaseError;
}(Error);

exports.FirebaseError = FirebaseError;

var ErrorFactory =
/** @class */
function () {
  function ErrorFactory(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }

  ErrorFactory.prototype.create = function (code) {
    var data = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }

    var customData = data[0] || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  };

  return ErrorFactory;
}();

exports.ErrorFactory = ErrorFactory;

function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}

var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */

function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */


function stringify(data) {
  return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var decode = function (token) {
  var header = {},
      claims = {},
      data = {},
      signature = '';

  try {
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}

  return {
    header: header,
    claims: claims,
    data: data,
    signature: signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.decode = decode;

var isValidTimestamp = function (token) {
  var claims = decode(token).claims;
  var now = Math.floor(new Date().getTime() / 1000);
  var validSince = 0,
      validUntil = 0;

  if (typeof claims === 'object') {
    if (claims.hasOwnProperty('nbf')) {
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) {
      validSince = claims['iat'];
    }

    if (claims.hasOwnProperty('exp')) {
      validUntil = claims['exp'];
    } else {
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }

  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.isValidTimestamp = isValidTimestamp;

var issuedAtTime = function (token) {
  var claims = decode(token).claims;

  if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
    return claims['iat'];
  }

  return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.issuedAtTime = issuedAtTime;

var isValidFormat = function (token) {
  var decoded = decode(token),
      claims = decoded.claims;
  return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.isValidFormat = isValidFormat;

var isAdmin = function (token) {
  var claims = decode(token).claims;
  return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.isAdmin = isAdmin;

function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

function map(obj, fn, contextObj) {
  var res = {};

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }

  return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */


function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  for (var _i = 0, aKeys_1 = aKeys; _i < aKeys_1.length; _i++) {
    var k = aKeys_1[_i];

    if (!bKeys.includes(k)) {
      return false;
    }

    var aProp = a[k];
    var bProp = b[k];

    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }

  for (var _a = 0, bKeys_1 = bKeys; _a < bKeys_1.length; _a++) {
    var k = bKeys_1[_a];

    if (!aKeys.includes(k)) {
      return false;
    }
  }

  return true;
}

function isObject(thing) {
  return thing !== null && typeof thing === 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */


function querystring(querystringParams) {
  var params = [];

  var _loop_1 = function (key, value) {
    if (Array.isArray(value)) {
      value.forEach(function (arrayVal) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };

  for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
    var _b = _a[_i],
        key = _b[0],
        value = _b[1];

    _loop_1(key, value);
  }

  return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */


function querystringDecode(querystring) {
  var obj = {};
  var tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(function (token) {
    if (token) {
      var _a = token.split('='),
          key = _a[0],
          value = _a[1];

      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */


function extractQuerystring(url) {
  var queryStart = url.indexOf('?');

  if (!queryStart) {
    return '';
  }

  var fragmentStart = url.indexOf('#', queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */

/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */


var Sha1 =
/** @class */
function () {
  function Sha1() {
    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */

    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */

    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */

    this.pad_ = [];
    /**
     * @private {number}
     */

    this.inbuf_ = 0;
    /**
     * @private {number}
     */

    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;

    for (var i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }

    this.reset();
  }

  Sha1.prototype.reset = function () {
    this.chain_[0] = 0x67452301;
    this.chain_[1] = 0xefcdab89;
    this.chain_[2] = 0x98badcfe;
    this.chain_[3] = 0x10325476;
    this.chain_[4] = 0xc3d2e1f0;
    this.inbuf_ = 0;
    this.total_ = 0;
  };
  /**
   * Internal compress helper function.
   * @param buf Block to compress.
   * @param offset Offset of the block in the buffer.
   * @private
   */


  Sha1.prototype.compress_ = function (buf, offset) {
    if (!offset) {
      offset = 0;
    }

    var W = this.W_; // get 16 big endian words

    if (typeof buf === 'string') {
      for (var i = 0; i < 16; i++) {
        // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
        // have a bug that turns the post-increment ++ operator into pre-increment
        // during JIT compilation.  We have code that depends heavily on SHA-1 for
        // correctness and which is affected by this bug, so I've removed all uses
        // of post-increment ++ in which the result value is used.  We can revert
        // this change once the Safari bug
        // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
        // most clients have been updated.
        W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
        offset += 4;
      }
    } else {
      for (var i = 0; i < 16; i++) {
        W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
        offset += 4;
      }
    } // expand to 80 words


    for (var i = 16; i < 80; i++) {
      var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      W[i] = (t << 1 | t >>> 31) & 0xffffffff;
    }

    var a = this.chain_[0];
    var b = this.chain_[1];
    var c = this.chain_[2];
    var d = this.chain_[3];
    var e = this.chain_[4];
    var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

    for (var i = 0; i < 80; i++) {
      if (i < 40) {
        if (i < 20) {
          f = d ^ b & (c ^ d);
          k = 0x5a827999;
        } else {
          f = b ^ c ^ d;
          k = 0x6ed9eba1;
        }
      } else {
        if (i < 60) {
          f = b & c | d & (b | c);
          k = 0x8f1bbcdc;
        } else {
          f = b ^ c ^ d;
          k = 0xca62c1d6;
        }
      }

      var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) & 0xffffffff;
      b = a;
      a = t;
    }

    this.chain_[0] = this.chain_[0] + a & 0xffffffff;
    this.chain_[1] = this.chain_[1] + b & 0xffffffff;
    this.chain_[2] = this.chain_[2] + c & 0xffffffff;
    this.chain_[3] = this.chain_[3] + d & 0xffffffff;
    this.chain_[4] = this.chain_[4] + e & 0xffffffff;
  };

  Sha1.prototype.update = function (bytes, length) {
    // TODO(johnlenz): tighten the function signature and remove this check
    if (bytes == null) {
      return;
    }

    if (length === undefined) {
      length = bytes.length;
    }

    var lengthMinusBlock = length - this.blockSize;
    var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

    var buf = this.buf_;
    var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

    while (n < length) {
      // When we have no data in the block to top up, we can directly process the
      // input buffer (assuming it contains sufficient data). This gives ~25%
      // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
      // the data is provided in large chunks (or in multiples of 64 bytes).
      if (inbuf === 0) {
        while (n <= lengthMinusBlock) {
          this.compress_(bytes, n);
          n += this.blockSize;
        }
      }

      if (typeof bytes === 'string') {
        while (n < length) {
          buf[inbuf] = bytes.charCodeAt(n);
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      } else {
        while (n < length) {
          buf[inbuf] = bytes[n];
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      }
    }

    this.inbuf_ = inbuf;
    this.total_ += length;
  };
  /** @override */


  Sha1.prototype.digest = function () {
    var digest = [];
    var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

    if (this.inbuf_ < 56) {
      this.update(this.pad_, 56 - this.inbuf_);
    } else {
      this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    } // Add # bits.


    for (var i = this.blockSize - 1; i >= 56; i--) {
      this.buf_[i] = totalBits & 255;
      totalBits /= 256; // Don't use bit-shifting here!
    }

    this.compress_(this.buf_);
    var n = 0;

    for (var i = 0; i < 5; i++) {
      for (var j = 24; j >= 0; j -= 8) {
        digest[n] = this.chain_[i] >> j & 255;
        ++n;
      }
    }

    return digest;
  };

  return Sha1;
}();
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */


exports.Sha1 = Sha1;

function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */


var ObserverProxy =
/** @class */
function () {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  function ObserverProxy(executor, onNoObservers) {
    var _this = this;

    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0; // Micro-task scheduling by calling task.then().

    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.

    this.task.then(function () {
      executor(_this);
    }).catch(function (e) {
      _this.error(e);
    });
  }

  ObserverProxy.prototype.next = function (value) {
    this.forEachObserver(function (observer) {
      observer.next(value);
    });
  };

  ObserverProxy.prototype.error = function (error) {
    this.forEachObserver(function (observer) {
      observer.error(error);
    });
    this.close(error);
  };

  ObserverProxy.prototype.complete = function () {
    this.forEachObserver(function (observer) {
      observer.complete();
    });
    this.close();
  };
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */


  ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
    var _this = this;

    var observer;

    if (nextOrObserver === undefined && error === undefined && complete === undefined) {
      throw new Error('Missing Observer.');
    } // Assemble an Observer object when passed as callback functions.


    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error: error,
        complete: complete
      };
    }

    if (observer.next === undefined) {
      observer.next = noop;
    }

    if (observer.error === undefined) {
      observer.error = noop;
    }

    if (observer.complete === undefined) {
      observer.complete = noop;
    }

    var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
    // just respond to the Observer with the final error or complete
    // event.

    if (this.finalized) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        try {
          if (_this.finalError) {
            observer.error(_this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {// nothing
        }

        return;
      });
    }

    this.observers.push(observer);
    return unsub;
  }; // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.


  ObserverProxy.prototype.unsubscribeOne = function (i) {
    if (this.observers === undefined || this.observers[i] === undefined) {
      return;
    }

    delete this.observers[i];
    this.observerCount -= 1;

    if (this.observerCount === 0 && this.onNoObservers !== undefined) {
      this.onNoObservers(this);
    }
  };

  ObserverProxy.prototype.forEachObserver = function (fn) {
    if (this.finalized) {
      // Already closed by previous event....just eat the additional values.
      return;
    } // Since sendOne calls asynchronously - there is no chance that
    // this.observers will become undefined.


    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  }; // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.


  ObserverProxy.prototype.sendOne = function (i, fn) {
    var _this = this; // Execute the callback asynchronously
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      if (_this.observers !== undefined && _this.observers[i] !== undefined) {
        try {
          fn(_this.observers[i]);
        } catch (e) {
          // Ignore exceptions raised in Observers or missing methods of an
          // Observer.
          // Log error to console. b/31404806
          if (typeof console !== 'undefined' && console.error) {
            console.error(e);
          }
        }
      }
    });
  };

  ObserverProxy.prototype.close = function (err) {
    var _this = this;

    if (this.finalized) {
      return;
    }

    this.finalized = true;

    if (err !== undefined) {
      this.finalError = err;
    } // Proxy is no longer needed - garbage collect references
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      _this.observers = undefined;
      _this.onNoObservers = undefined;
    });
  };

  return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types


function async(fn, onError) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    Promise.resolve(true).then(function () {
      fn.apply(void 0, args);
    }).catch(function (error) {
      if (onError) {
        onError(error);
      }
    });
  };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */


function implementsAnyMethods(obj, methods) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
    var method = methods_1[_i];

    if (method in obj && typeof obj[method] === 'function') {
      return true;
    }
  }

  return false;
}

function noop() {// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */


var validateArgCount = function (fnName, minCount, maxCount, argCount) {
  var argError;

  if (argCount < minCount) {
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) {
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }

  if (argError) {
    var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */


exports.validateArgCount = validateArgCount;

function errorPrefix(fnName, argName) {
  return fnName + " failed: " + argName + " argument ";
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */


function validateNamespace(fnName, namespace, optional) {
  if (optional && !namespace) {
    return;
  }

  if (typeof namespace !== 'string') {
    //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
  }
}

function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
  if (optional && !callback) {
    return;
  }

  if (typeof callback !== 'function') {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
  }
}

function validateContextObject(fnName, argumentName, context, optional) {
  if (optional && !context) {
    return;
  }

  if (typeof context !== 'object' || context === null) {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

/**
 * @param {string} str
 * @return {Array}
 */


var stringToByteArray = function (str) {
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

    if (c >= 0xd800 && c <= 0xdbff) {
      var high = c - 0xd800; // the high 10 bits.

      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

      c = 0x10000 + (high << 10) + low;
    }

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */


exports.stringToByteArray = stringToByteArray;

var stringLength = function (str) {
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }

  return p;
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The amount of milliseconds to exponentially increase.
 */


exports.stringLength = stringLength;
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */

var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */

var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.

/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */

exports.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */

exports.RANDOM_FACTOR = RANDOM_FACTOR;

function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
  if (intervalMillis === void 0) {
    intervalMillis = DEFAULT_INTERVAL_MILLIS;
  }

  if (backoffFactor === void 0) {
    backoffFactor = DEFAULT_BACKOFF_FACTOR;
  } // Calculates an exponentially increasing value.
  // Deviation: calculates value from count and a constant interval, so we only need to save value
  // and count to restore state.


  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount); // A random "fuzz" to avoid waves of retries.
  // Deviation: randomFactor is required.

  var randomWait = Math.round( // A fraction of the backoff value to add/subtract.
  // Deviation: changes multiplication order to improve readability.
  RANDOM_FACTOR * currBaseValue * ( // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
  // if we add or subtract.
  Math.random() - 0.5) * 2); // Limits backoff to max to avoid effectively permanent backoff.

  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provide English ordinal letters after a number
 */


function ordinal(i) {
  if (!Number.isFinite(i)) {
    return "" + i;
  }

  return i + indicator(i);
}

function indicator(i) {
  i = Math.abs(i);
  var cent = i % 100;

  if (cent >= 10 && cent <= 20) {
    return 'th';
  }

  var dec = i % 10;

  if (dec === 1) {
    return 'st';
  }

  if (dec === 2) {
    return 'nd';
  }

  if (dec === 3) {
    return 'rd';
  }

  return 'th';
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
},{"tslib":"../node_modules/tslib/tslib.es6.js"}],"../node_modules/@firebase/component/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.ComponentContainer = exports.Component = void 0;

var _tslib = require("tslib");

var _util = require("@firebase/util");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component =
/** @class */
function () {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  function Component(name, instanceFactory, type) {
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */

    this.serviceProps = {};
    this.instantiationMode = "LAZY"
    /* LAZY */
    ;
    this.onInstanceCreated = null;
  }

  Component.prototype.setInstantiationMode = function (mode) {
    this.instantiationMode = mode;
    return this;
  };

  Component.prototype.setMultipleInstances = function (multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };

  Component.prototype.setServiceProps = function (props) {
    this.serviceProps = props;
    return this;
  };

  Component.prototype.setInstanceCreatedCallback = function (callback) {
    this.onInstanceCreated = callback;
    return this;
  };

  return Component;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.Component = Component;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */

var Provider =
/** @class */
function () {
  function Provider(name, container) {
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.onInitCallbacks = new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */


  Provider.prototype.get = function (identifier) {
    // if multipleInstances is not supported, use the default name
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new _util.Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);

      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        // initialize the service if it can be auto-initialized
        try {
          var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });

          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {// when the instance factory throws an exception during get(), it should not cause
          // a fatal error. We just return the unresolved promise in this case.
        }
      }
    }

    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };

  Provider.prototype.getImmediate = function (options) {
    var _a; // if multipleInstances is not supported, use the default name


    var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;

    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
      if (optional) {
        return null;
      } else {
        throw Error("Service " + this.name + " is not available");
      }
    }
  };

  Provider.prototype.getComponent = function () {
    return this.component;
  };

  Provider.prototype.setComponent = function (component) {
    var e_1, _a;

    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }

    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }

    this.component = component; // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)

    if (!this.shouldAutoInitialize()) {
      return;
    } // if the service is eager, initialize the default instance


    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({
          instanceIdentifier: DEFAULT_ENTRY_NAME
        });
      } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
      }
    }

    try {
      // Create service instances for the pending promises and resolve them
      // NOTE: if this.multipleInstances is false, only the default instance will be created
      // and all promises with resolve with it regardless of the identifier.
      for (var _b = (0, _tslib.__values)(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = (0, _tslib.__read)(_c.value, 2),
            instanceIdentifier = _d[0],
            instanceDeferred = _d[1];

        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

        try {
          // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
          var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) {// when the instance factory throws an exception, it should not cause
          // a fatal error. We just leave the promise unresolved.
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Provider.prototype.clearInstance = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    this.instancesDeferred.delete(identifier);
    this.instances.delete(identifier);
  }; // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?


  Provider.prototype.delete = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var services;
      return (0, _tslib.__generator)(this, function (_a) {
        switch (_a.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4
            /*yield*/
            , Promise.all((0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(services.filter(function (service) {
              return 'INTERNAL' in service;
            }) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map(function (service) {
              return service.INTERNAL.delete();
            }))), (0, _tslib.__read)(services.filter(function (service) {
              return '_delete' in service;
            }) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map(function (service) {
              return service._delete();
            }))))];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Provider.prototype.isComponentSet = function () {
    return this.component != null;
  };

  Provider.prototype.isInitialized = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    return this.instances.has(identifier);
  };

  Provider.prototype.initialize = function (opts) {
    var e_2, _a;

    if (opts === void 0) {
      opts = {};
    }

    var _b = opts.options,
        options = _b === void 0 ? {} : _b;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);

    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
    }

    if (!this.isComponentSet()) {
      throw Error("Component " + this.name + " has not been registered yet");
    }

    var instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options: options
    });

    try {
      // resolve any pending promise waiting for the service instance
      for (var _c = (0, _tslib.__values)(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var _e = (0, _tslib.__read)(_d.value, 2),
            instanceIdentifier = _e[0],
            instanceDeferred = _e[1];

        var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

        if (normalizedIdentifier === normalizedDeferredIdentifier) {
          instanceDeferred.resolve(instance);
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return instance;
  };
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */


  Provider.prototype.onInit = function (callback, identifier) {
    var _a;

    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    var existingInstance = this.instances.get(normalizedIdentifier);

    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }

    return function () {
      existingCallbacks.delete(callback);
    };
  };
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */


  Provider.prototype.invokeOnInitCallbacks = function (instance, identifier) {
    var e_3, _a;

    var callbacks = this.onInitCallbacks.get(identifier);

    if (!callbacks) {
      return;
    }

    try {
      for (var callbacks_1 = (0, _tslib.__values)(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
        var callback = callbacks_1_1.value;

        try {
          callback(instance, identifier);
        } catch (_b) {// ignore errors in the onInit callback
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  };

  Provider.prototype.getOrInitializeService = function (_a) {
    var instanceIdentifier = _a.instanceIdentifier,
        _b = _a.options,
        options = _b === void 0 ? {} : _b;
    var instance = this.instances.get(instanceIdentifier);

    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options: options
      });
      this.instances.set(instanceIdentifier, instance);
      /**
       * Invoke onInit listeners.
       * Note this.component.onInstanceCreated is different, which is used by the component creator,
       * while onInit listeners are registered by consumers of the provider.
       */

      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      /**
       * Order is important
       * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
       * makes `isInitialized()` return true.
       */

      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_c) {// ignore errors in the onInstanceCreatedCallback
        }
      }
    }

    return instance || null;
  };

  Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier; // assume multiple instances are supported before the component is provided.
    }
  };

  Provider.prototype.shouldAutoInitialize = function () {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    /* EXPLICIT */
    ;
  };

  return Provider;
}(); // undefined should be passed to the service factory for the default instance


exports.Provider = Provider;

function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}

function isComponentEager(component) {
  return component.instantiationMode === "EAGER"
  /* EAGER */
  ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */


var ComponentContainer =
/** @class */
function () {
  function ComponentContainer(name) {
    this.name = name;
    this.providers = new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */


  ComponentContainer.prototype.addComponent = function (component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }

    provider.setComponent(component);
  };

  ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      // delete the existing provider from the container, so we can register the new component
      this.providers.delete(component.name);
    }

    this.addComponent(component);
  };
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */


  ComponentContainer.prototype.getProvider = function (name) {
    if (this.providers.has(name)) {
      return this.providers.get(name);
    } // create a Provider for a service that hasn't registered with Firebase


    var provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  };

  ComponentContainer.prototype.getProviders = function () {
    return Array.from(this.providers.values());
  };

  return ComponentContainer;
}();

exports.ComponentContainer = ComponentContainer;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@firebase/util":"../node_modules/@firebase/util/dist/index.esm.js"}],"../node_modules/@firebase/logger/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;
exports.Logger = exports.LogLevel = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;
/**
 * A container for all of the Logger instances
 */


var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */

var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (exports.LogLevel = LogLevel = {}));

var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
/**
 * The default log level
 */

var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */

var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = 'log', _a[LogLevel.VERBOSE] = 'log', _a[LogLevel.INFO] = 'info', _a[LogLevel.WARN] = 'warn', _a[LogLevel.ERROR] = 'error', _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */

var defaultLogHandler = function (instance, logType) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (logType < instance.logLevel) {
    return;
  }

  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];

  if (method) {
    console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};

var Logger =
/** @class */
function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */

    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */

    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */

    this._userLogHandler = null;
    /**
     * Capture the current instance for later use
     */

    instances.push(this);
  }

  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function () {
      return this._logLevel;
    },
    set: function (val) {
      if (!(val in LogLevel)) {
        throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
      }

      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  }); // Workaround for setter/getter having to be the same type.

  Logger.prototype.setLogLevel = function (val) {
    this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
  };

  Object.defineProperty(Logger.prototype, "logHandler", {
    get: function () {
      return this._logHandler;
    },
    set: function (val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }

      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "userLogHandler", {
    get: function () {
      return this._userLogHandler;
    },
    set: function (val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * The functions below are all based on the `console` interface
   */

  Logger.prototype.debug = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
  };

  Logger.prototype.log = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
  };

  Logger.prototype.info = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
  };

  Logger.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
  };

  Logger.prototype.error = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
  };

  return Logger;
}();

exports.Logger = Logger;

function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.setLogLevel(level);
  });
}

function setUserLogHandler(logCallback, options) {
  var _loop_1 = function (instance) {
    var customLogLevel = null;

    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }

    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = function (instance, level) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        var message = args.map(function (arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === 'string') {
            return arg;
          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function (arg) {
          return arg;
        }).join(' ');

        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        }
      };
    }
  };

  for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
    var instance = instances_1[_i];

    _loop_1(instance);
  }
}
},{}],"../node_modules/@firebase/app/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebase = exports.default = void 0;

var _tslib = require("tslib");

var _util = require("@firebase/util");

var _component = require("@firebase/component");

var _logger = require("@firebase/logger");

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;

var ERRORS = (_a$1 = {}, _a$1["no-app"
/* NO_APP */
] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _a$1["bad-app-name"
/* BAD_APP_NAME */
] = "Illegal App name: '{$appName}", _a$1["duplicate-app"
/* DUPLICATE_APP */
] = "Firebase App named '{$appName}' already exists", _a$1["app-deleted"
/* APP_DELETED */
] = "Firebase App named '{$appName}' already deleted", _a$1["invalid-app-argument"
/* INVALID_APP_ARGUMENT */
] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _a$1["invalid-log-argument"
/* INVALID_LOG_ARGUMENT */
] = 'First argument to `onLog` must be null or a function.', _a$1);
var ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);
var name$c = "@firebase/app";
var version$1 = "0.6.29";
var name$b = "@firebase/analytics";
var name$a = "@firebase/app-check";
var name$9 = "@firebase/auth";
var name$8 = "@firebase/database";
var name$7 = "@firebase/functions";
var name$6 = "@firebase/installations";
var name$5 = "@firebase/messaging";
var name$4 = "@firebase/performance";
var name$3 = "@firebase/remote-config";
var name$2 = "@firebase/storage";
var name$1 = "@firebase/firestore";
var name = "firebase-wrapper";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _a;

var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a = {}, _a[name$c] = 'fire-core', _a[name$b] = 'fire-analytics', _a[name$a] = 'fire-app-check', _a[name$9] = 'fire-auth', _a[name$8] = 'fire-rtdb', _a[name$7] = 'fire-fn', _a[name$6] = 'fire-iid', _a[name$5] = 'fire-fcm', _a[name$4] = 'fire-perf', _a[name$3] = 'fire-rc', _a[name$2] = 'fire-gcs', _a[name$1] = 'fire-fst', _a['fire-js'] = 'fire-js', _a[name] = 'fire-js-all', _a);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var logger = new _logger.Logger('@firebase/app');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */

var FirebaseAppImpl =
/** @class */
function () {
  function FirebaseAppImpl(options, config, firebase_) {
    var _this = this;

    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config.name;
    this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
    this.options_ = (0, _util.deepCopy)(options);
    this.container = new _component.ComponentContainer(config.name); // add itself to container

    this._addComponent(new _component.Component('app', function () {
      return _this;
    }, "PUBLIC"
    /* PUBLIC */
    )); // populate ComponentContainer with existing components


    this.firebase_.INTERNAL.components.forEach(function (component) {
      return _this._addComponent(component);
    });
  }

  Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
    get: function () {
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function (val) {
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "name", {
    get: function () {
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "options", {
    get: function () {
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: false,
    configurable: true
  });

  FirebaseAppImpl.prototype.delete = function () {
    var _this = this;

    return new Promise(function (resolve) {
      _this.checkDestroyed_();

      resolve();
    }).then(function () {
      _this.firebase_.INTERNAL.removeApp(_this.name_);

      return Promise.all(_this.container.getProviders().map(function (provider) {
        return provider.delete();
      }));
    }).then(function () {
      _this.isDeleted_ = true;
    });
  };
  /**
   * Return a service instance associated with this app (creating it
   * on demand), identified by the passed instanceIdentifier.
   *
   * NOTE: Currently storage and functions are the only ones that are leveraging this
   * functionality. They invoke it by calling:
   *
   * ```javascript
   * firebase.app().storage('STORAGE BUCKET ID')
   * ```
   *
   * The service name is passed to this already
   * @internal
   */


  FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
    var _a;

    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }

    this.checkDestroyed_(); // Initialize instance if InstatiationMode is `EXPLICIT`.

    var provider = this.container.getProvider(name);

    if (!provider.isInitialized() && ((_a = provider.getComponent()) === null || _a === void 0 ? void 0 : _a.instantiationMode) === "EXPLICIT"
    /* EXPLICIT */
    ) {
        provider.initialize();
      } // getImmediate will always succeed because _getService is only called for registered components.


    return provider.getImmediate({
      identifier: instanceIdentifier
    });
  };
  /**
   * Remove a service instance from the cache, so we will create a new instance for this service
   * when people try to get this service again.
   *
   * NOTE: currently only firestore is using this functionality to support firestore shutdown.
   *
   * @param name The service name
   * @param instanceIdentifier instance identifier in case multiple instances are allowed
   * @internal
   */


  FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    this.container.getProvider(name).clearInstance(instanceIdentifier);
  };
  /**
   * @param component the component being added to this app's container
   */


  FirebaseAppImpl.prototype._addComponent = function (component) {
    try {
      this.container.addComponent(component);
    } catch (e) {
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  };

  FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
    this.container.addOrOverwriteComponent(component);
  };

  FirebaseAppImpl.prototype.toJSON = function () {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  };
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */


  FirebaseAppImpl.prototype.checkDestroyed_ = function () {
    if (this.isDeleted_) {
      throw ERROR_FACTORY.create("app-deleted"
      /* APP_DELETED */
      , {
        appName: this.name_
      });
    }
  };

  return FirebaseAppImpl;
}(); // Prevent dead-code elimination of these methods w/o invalid property
// copying.


FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log('dc');
var version = "8.8.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */

function createFirebaseNamespaceCore(firebaseAppImpl) {
  var apps = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var components = new Map(); // A namespace is a plain JavaScript Object.

  var namespace = {
    // Hack to prevent Babel from modifying the object returned
    // as the firebase namespace.
    // @ts-ignore
    __esModule: true,
    initializeApp: initializeApp,
    // @ts-ignore
    app: app,
    registerVersion: registerVersion,
    setLogLevel: _logger.setLogLevel,
    onLog: onLog,
    // @ts-ignore
    apps: null,
    SDK_VERSION: version,
    INTERNAL: {
      registerComponent: registerComponent,
      removeApp: removeApp,
      components: components,
      useAsService: useAsService
    }
  }; // Inject a circular default export to allow Babel users who were previously
  // using:
  //
  //   import firebase from 'firebase';
  //   which becomes: var firebase = require('firebase').default;
  //
  // instead of
  //
  //   import * as firebase from 'firebase';
  //   which becomes: var firebase = require('firebase');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  namespace['default'] = namespace; // firebase.apps is a read-only getter.

  Object.defineProperty(namespace, 'apps', {
    get: getApps
  });
  /**
   * Called by App.delete() - but before any services associated with the App
   * are deleted.
   */

  function removeApp(name) {
    delete apps[name];
  }
  /**
   * Get the App object for a given name (or DEFAULT).
   */


  function app(name) {
    name = name || DEFAULT_ENTRY_NAME;

    if (!(0, _util.contains)(apps, name)) {
      throw ERROR_FACTORY.create("no-app"
      /* NO_APP */
      , {
        appName: name
      });
    }

    return apps[name];
  } // @ts-ignore


  app['App'] = firebaseAppImpl;

  function initializeApp(options, rawConfig) {
    if (rawConfig === void 0) {
      rawConfig = {};
    }

    if (typeof rawConfig !== 'object' || rawConfig === null) {
      var name_1 = rawConfig;
      rawConfig = {
        name: name_1
      };
    }

    var config = rawConfig;

    if (config.name === undefined) {
      config.name = DEFAULT_ENTRY_NAME;
    }

    var name = config.name;

    if (typeof name !== 'string' || !name) {
      throw ERROR_FACTORY.create("bad-app-name"
      /* BAD_APP_NAME */
      , {
        appName: String(name)
      });
    }

    if ((0, _util.contains)(apps, name)) {
      throw ERROR_FACTORY.create("duplicate-app"
      /* DUPLICATE_APP */
      , {
        appName: name
      });
    }

    var app = new firebaseAppImpl(options, config, namespace);
    apps[name] = app;
    return app;
  }
  /*
   * Return an array of all the non-deleted FirebaseApps.
   */


  function getApps() {
    // Make a copy so caller cannot mutate the apps list.
    return Object.keys(apps).map(function (name) {
      return apps[name];
    });
  }

  function registerComponent(component) {
    var componentName = component.name;

    if (components.has(componentName)) {
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC"
      /* PUBLIC */
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      namespace[componentName] : null;
    }

    components.set(componentName, component); // create service namespace for public components

    if (component.type === "PUBLIC"
    /* PUBLIC */
    ) {
        // The Service namespace is an accessor function ...
        var serviceNamespace = function (appArg) {
          if (appArg === void 0) {
            appArg = app();
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          if (typeof appArg[componentName] !== 'function') {
            // Invalid argument.
            // This happens in the following case: firebase.storage('gs:/')
            throw ERROR_FACTORY.create("invalid-app-argument"
            /* INVALID_APP_ARGUMENT */
            , {
              appName: componentName
            });
          } // Forward service instance lookup to the FirebaseApp.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any


          return appArg[componentName]();
        }; // ... and a container for service-level properties.


        if (component.serviceProps !== undefined) {
          (0, _util.deepExtend)(serviceNamespace, component.serviceProps);
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any


        namespace[componentName] = serviceNamespace; // Patch the FirebaseAppImpl prototype
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
        // option added to the no-explicit-any rule when ESlint releases it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var serviceFxn = this._getService.bind(this, componentName);

          return serviceFxn.apply(this, component.multipleInstances ? args : []);
        };
      } // add the component to existing app instances


    for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) {
      var appName = _a[_i];

      apps[appName]._addComponent(component);
    }

    return component.type === "PUBLIC"
    /* PUBLIC */
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace[componentName] : null;
  }

  function registerVersion(libraryKeyOrName, version, variant) {
    var _a; // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.


    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

    if (variant) {
      library += "-" + variant;
    }

    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);

    if (libraryMismatch || versionMismatch) {
      var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

      if (libraryMismatch) {
        warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
      }

      if (libraryMismatch && versionMismatch) {
        warning.push('and');
      }

      if (versionMismatch) {
        warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
      }

      logger.warn(warning.join(' '));
      return;
    }

    registerComponent(new _component.Component(library + "-version", function () {
      return {
        library: library,
        version: version
      };
    }, "VERSION"
    /* VERSION */
    ));
  }

  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
      throw ERROR_FACTORY.create("invalid-log-argument"
      /* INVALID_LOG_ARGUMENT */
      );
    }

    (0, _logger.setUserLogHandler)(logCallback, options);
  } // Map the requested service to a registered service name
  // (used to map auth to serverAuth service when needed).


  function useAsService(app, name) {
    if (name === 'serverAuth') {
      return null;
    }

    var useService = name;
    return useService;
  }

  return namespace;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */


function createFirebaseNamespace() {
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = (0, _tslib.__assign)((0, _tslib.__assign)({}, namespace.INTERNAL), {
    createFirebaseNamespace: createFirebaseNamespace,
    extendNamespace: extendNamespace,
    createSubscribe: _util.createSubscribe,
    ErrorFactory: _util.ErrorFactory,
    deepExtend: _util.deepExtend
  });
  /**
   * Patch the top-level firebase namespace with additional properties.
   *
   * firebase.INTERNAL.extendNamespace()
   */

  function extendNamespace(props) {
    (0, _util.deepExtend)(namespace, props);
  }

  return namespace;
}

var firebase$1 = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PlatformLoggerService =
/** @class */
function () {
  function PlatformLoggerService(container) {
    this.container = container;
  } // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.


  PlatformLoggerService.prototype.getPlatformInfoString = function () {
    var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
    // version components.

    return providers.map(function (provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function (logString) {
      return logString;
    }).join(' ');
  };

  return PlatformLoggerService;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */


function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
  /* VERSION */
  ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerCoreComponents(firebase, variant) {
  firebase.INTERNAL.registerComponent(new _component.Component('platform-logger', function (container) {
    return new PlatformLoggerService(container);
  }, "PRIVATE"
  /* PRIVATE */
  )); // Register `app` package.

  firebase.registerVersion(name$c, version$1, variant); // Register platform SDK identifier (no version).

  firebase.registerVersion('fire-js', '');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any


if ((0, _util.isBrowser)() && self.firebase !== undefined) {
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "); // eslint-disable-next-line

  var sdkVersion = self.firebase.SDK_VERSION;

  if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}

var initializeApp = firebase$1.initializeApp; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any

firebase$1.initializeApp = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  } // Environment check before initializing app
  // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
  // in @firebase/logger


  if ((0, _util.isNode)()) {
    logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
  }

  return initializeApp.apply(undefined, args);
};

var firebase = firebase$1;
exports.firebase = firebase;
registerCoreComponents(firebase);
var _default = firebase;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@firebase/util":"../node_modules/@firebase/util/dist/index.esm.js","@firebase/component":"../node_modules/@firebase/component/dist/index.esm.js","@firebase/logger":"../node_modules/@firebase/logger/dist/index.esm.js"}],"../node_modules/firebase/app/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _app.default;
  }
});

var _app = _interopRequireDefault(require("@firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = "firebase";
var version = "8.9.0";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

_app.default.registerVersion(name, version, 'app');

_app.default.SDK_VERSION = version;
},{"@firebase/app":"../node_modules/@firebase/app/dist/index.esm.js"}],"../node_modules/idb/build/idb.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.idb = {}));
}(this, function (exports) { 'use strict';

  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  function openDb(name, version, upgradeCallback) {
    var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
    var request = p.request;

    if (request) {
      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };
    }

    return p.then(function(db) {
      return new DB(db);
    });
  }

  function deleteDb(name) {
    return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
  }

  exports.openDb = openDb;
  exports.deleteDb = deleteDb;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

},{}],"../node_modules/@firebase/installations/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerInstallations = registerInstallations;

var _app = _interopRequireDefault(require("@firebase/app"));

var _component = require("@firebase/component");

var _tslib = require("tslib");

var _util = require("@firebase/util");

var _idb = require("idb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = "@firebase/installations";
var version = "0.4.31";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:" + version;
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour

var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _a;

var ERROR_DESCRIPTION_MAP = (_a = {}, _a["missing-app-config-values"
/* MISSING_APP_CONFIG_VALUES */
] = 'Missing App configuration value: "{$valueName}"', _a["not-registered"
/* NOT_REGISTERED */
] = 'Firebase Installation is not registered.', _a["installation-not-found"
/* INSTALLATION_NOT_FOUND */
] = 'Firebase Installation not found.', _a["request-failed"
/* REQUEST_FAILED */
] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a["app-offline"
/* APP_OFFLINE */
] = 'Could not process request. Application offline.', _a["delete-pending-registration"
/* DELETE_PENDING_REGISTRATION */
] = "Can't delete installation while there is a pending registration request.", _a);
var ERROR_FACTORY = new _util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */

function isServerError(error) {
  return error instanceof _util.FirebaseError && error.code.includes("request-failed"
  /* REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getInstallationsEndpoint(_a) {
  var projectId = _a.projectId;
  return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}

function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2
    /* COMPLETED */
    ,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}

function getErrorFromResponse(requestName, response) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var responseJson, errorData;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , response.json()];

        case 1:
          responseJson = _a.sent();
          errorData = responseJson.error;
          return [2
          /*return*/
          , ERROR_FACTORY.create("request-failed"
          /* REQUEST_FAILED */
          , {
            requestName: requestName,
            serverCode: errorData.code,
            serverMessage: errorData.message,
            serverStatus: errorData.status
          })];
      }
    });
  });
}

function getHeaders(_a) {
  var apiKey = _a.apiKey;
  return new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}

function getHeadersWithAuth(appConfig, _a) {
  var refreshToken = _a.refreshToken;
  var headers = getHeaders(appConfig);
  headers.append('Authorization', getAuthorizationHeader(refreshToken));
  return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */


function retryIfServerError(fn) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var result;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fn()];

        case 1:
          result = _a.sent();

          if (result.status >= 500 && result.status < 600) {
            // Internal Server Error. Retry request.
            return [2
            /*return*/
            , fn()];
          }

          return [2
          /*return*/
          , result];
      }
    });
  });
}

function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  // This works because the server will never respond with fractions of a second.
  return Number(responseExpiresIn.replace('s', '000'));
}

function getAuthorizationHeader(refreshToken) {
  return INTERNAL_AUTH_VERSION + " " + refreshToken;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function createInstallationRequest(appConfig, _a) {
  var fid = _a.fid;
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          endpoint = getInstallationsEndpoint(appConfig);
          headers = getHeaders(appConfig);
          body = {
            fid: fid,
            authVersion: INTERNAL_AUTH_VERSION,
            appId: appConfig.appId,
            sdkVersion: PACKAGE_VERSION
          };
          request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          return [4
          /*yield*/
          , retryIfServerError(function () {
            return fetch(endpoint, request);
          })];

        case 1:
          response = _b.sent();
          if (!response.ok) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , response.json()];

        case 2:
          responseValue = _b.sent();
          registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2
            /* COMPLETED */
            ,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
          };
          return [2
          /*return*/
          , registeredInstallationEntry];

        case 3:
          return [4
          /*yield*/
          , getErrorFromResponse('Create Installation', response)];

        case 4:
          throw _b.sent();
      }
    });
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Returns a promise that resolves after given time passes. */


function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function bufferToBase64UrlSafe(array) {
  var b64 = btoa(String.fromCharCode.apply(String, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(array))));
  return b64.replace(/\+/g, '-').replace(/\//g, '_');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */

function generateFid() {
  try {
    // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
    // bytes. our implementation generates a 17 byte array instead.
    var fidByteArray = new Uint8Array(17);
    var crypto_1 = self.crypto || self.msCrypto;
    crypto_1.getRandomValues(fidByteArray); // Replace the first 4 random bits with the constant FID header of 0b0111.

    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    var fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    // FID generation errored
    return INVALID_FID;
  }
}
/** Converts a FID Uint8Array to a base64 string representation. */


function encode(fidByteArray) {
  var b64String = bufferToBase64UrlSafe(fidByteArray); // Remove the 23rd character that was added because of the extra 4 bits at the
  // end of our 17 byte array, and the '=' padding.

  return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Returns a string key that can be used to identify the app. */


function getKey(appConfig) {
  return appConfig.appName + "!" + appConfig.appId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */

function fidChanged(appConfig, fid) {
  var key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}

function addCallback(appConfig, callback) {
  // Open the broadcast channel if it's not already open,
  // to be able to listen to change events from other tabs.
  getBroadcastChannel();
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);

  if (!callbackSet) {
    callbackSet = new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }

  callbackSet.add(callback);
}

function removeCallback(appConfig, callback) {
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);

  if (!callbackSet) {
    return;
  }

  callbackSet.delete(callback);

  if (callbackSet.size === 0) {
    fidChangeCallbacks.delete(key);
  } // Close broadcast channel if there are no more callbacks.


  closeBroadcastChannel();
}

function callFidChangeCallbacks(key, fid) {
  var e_1, _a;

  var callbacks = fidChangeCallbacks.get(key);

  if (!callbacks) {
    return;
  }

  try {
    for (var callbacks_1 = (0, _tslib.__values)(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
      var callback = callbacks_1_1.value;
      callback(fid);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}

function broadcastFidChange(key, fid) {
  var channel = getBroadcastChannel();

  if (channel) {
    channel.postMessage({
      key: key,
      fid: fid
    });
  }

  closeBroadcastChannel();
}

var broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */

function getBroadcastChannel() {
  if (!broadcastChannel && 'BroadcastChannel' in self) {
    broadcastChannel = new BroadcastChannel('[Firebase] FID Change');

    broadcastChannel.onmessage = function (e) {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }

  return broadcastChannel;
}

function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;

function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0, _idb.openDb)(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
      // We don't use 'break' in this switch statement, the fall-through
      // behavior is what we want, because if there are multiple versions between
      // the old version and the current version, we want ALL the migrations
      // that correspond to those versions to run, not only the last one.
      // eslint-disable-next-line default-case
      switch (upgradeDB.oldVersion) {
        case 0:
          upgradeDB.createObjectStore(OBJECT_STORE_NAME);
      }
    });
  }

  return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */


function set(appConfig, value) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var key, db, tx, objectStore, oldValue;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          objectStore = tx.objectStore(OBJECT_STORE_NAME);
          return [4
          /*yield*/
          , objectStore.get(key)];

        case 2:
          oldValue = _a.sent();
          return [4
          /*yield*/
          , objectStore.put(value, key)];

        case 3:
          _a.sent();

          return [4
          /*yield*/
          , tx.complete];

        case 4:
          _a.sent();

          if (!oldValue || oldValue.fid !== value.fid) {
            fidChanged(appConfig, value.fid);
          }

          return [2
          /*return*/
          , value];
      }
    });
  });
}
/** Removes record(s) from the objectStore that match the given key. */


function remove(appConfig) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var key, db, tx;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          return [4
          /*yield*/
          , tx.objectStore(OBJECT_STORE_NAME).delete(key)];

        case 2:
          _a.sent();

          return [4
          /*yield*/
          , tx.complete];

        case 3:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */


function update(appConfig, updateFn) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var key, db, tx, store, oldValue, newValue;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          store = tx.objectStore(OBJECT_STORE_NAME);
          return [4
          /*yield*/
          , store.get(key)];

        case 2:
          oldValue = _a.sent();
          newValue = updateFn(oldValue);
          if (!(newValue === undefined)) return [3
          /*break*/
          , 4];
          return [4
          /*yield*/
          , store.delete(key)];

        case 3:
          _a.sent();

          return [3
          /*break*/
          , 6];

        case 4:
          return [4
          /*yield*/
          , store.put(newValue, key)];

        case 5:
          _a.sent();

          _a.label = 6;

        case 6:
          return [4
          /*yield*/
          , tx.complete];

        case 7:
          _a.sent();

          if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
            fidChanged(appConfig, newValue.fid);
          }

          return [2
          /*return*/
          , newValue];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */


function getInstallationEntry(appConfig) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var registrationPromise, installationEntry;

    var _a;

    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , update(appConfig, function (oldEntry) {
            var installationEntry = updateOrCreateInstallationEntry(oldEntry);
            var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
            registrationPromise = entryWithPromise.registrationPromise;
            return entryWithPromise.installationEntry;
          })];

        case 1:
          installationEntry = _b.sent();
          if (!(installationEntry.fid === INVALID_FID)) return [3
          /*break*/
          , 3];
          _a = {};
          return [4
          /*yield*/
          , registrationPromise];

        case 2:
          // FID generation failed. Waiting for the FID from the server.
          return [2
          /*return*/
          , (_a.installationEntry = _b.sent(), _a)];

        case 3:
          return [2
          /*return*/
          , {
            installationEntry: installationEntry,
            registrationPromise: registrationPromise
          }];
      }
    });
  });
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */


function updateOrCreateInstallationEntry(oldEntry) {
  var entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
    /* NOT_STARTED */

  };
  return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */


function triggerRegistrationIfNecessary(appConfig, installationEntry) {
  if (installationEntry.registrationStatus === 0
  /* NOT_STARTED */
  ) {
      if (!navigator.onLine) {
        // Registration required but app is offline.
        var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"
        /* APP_OFFLINE */
        ));
        return {
          installationEntry: installationEntry,
          registrationPromise: registrationPromiseWithError
        };
      } // Try registering. Change status to IN_PROGRESS.


      var inProgressEntry = {
        fid: installationEntry.fid,
        registrationStatus: 1
        /* IN_PROGRESS */
        ,
        registrationTime: Date.now()
      };
      var registrationPromise = registerInstallation(appConfig, inProgressEntry);
      return {
        installationEntry: inProgressEntry,
        registrationPromise: registrationPromise
      };
    } else if (installationEntry.registrationStatus === 1
  /* IN_PROGRESS */
  ) {
      return {
        installationEntry: installationEntry,
        registrationPromise: waitUntilFidRegistration(appConfig)
      };
    } else {
    return {
      installationEntry: installationEntry
    };
  }
}
/** This will be executed only once for each new Firebase Installation. */


function registerInstallation(appConfig, installationEntry) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var registeredInstallationEntry, e_1;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 7]);

          return [4
          /*yield*/
          , createInstallationRequest(appConfig, installationEntry)];

        case 1:
          registeredInstallationEntry = _a.sent();
          return [2
          /*return*/
          , set(appConfig, registeredInstallationEntry)];

        case 2:
          e_1 = _a.sent();
          if (!(isServerError(e_1) && e_1.customData.serverCode === 409)) return [3
          /*break*/
          , 4]; // Server returned a "FID can not be used" error.
          // Generate a new ID next time.

          return [4
          /*yield*/
          , remove(appConfig)];

        case 3:
          // Server returned a "FID can not be used" error.
          // Generate a new ID next time.
          _a.sent();

          return [3
          /*break*/
          , 6];

        case 4:
          // Registration failed. Set FID as not registered.
          return [4
          /*yield*/
          , set(appConfig, {
            fid: installationEntry.fid,
            registrationStatus: 0
            /* NOT_STARTED */

          })];

        case 5:
          // Registration failed. Set FID as not registered.
          _a.sent();

          _a.label = 6;

        case 6:
          throw e_1;

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/** Call if FID registration is pending in another request. */


function waitUntilFidRegistration(appConfig) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var entry, _a, installationEntry, registrationPromise;

    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , updateInstallationRequest(appConfig)];

        case 1:
          entry = _b.sent();
          _b.label = 2;

        case 2:
          if (!(entry.registrationStatus === 1
          /* IN_PROGRESS */
          )) return [3
            /*break*/
            , 5]; // createInstallation request still in progress.

          return [4
          /*yield*/
          , sleep(100)];

        case 3:
          // createInstallation request still in progress.
          _b.sent();

          return [4
          /*yield*/
          , updateInstallationRequest(appConfig)];

        case 4:
          entry = _b.sent();
          return [3
          /*break*/
          , 2];

        case 5:
          if (!(entry.registrationStatus === 0
          /* NOT_STARTED */
          )) return [3
            /*break*/
            , 7];
          return [4
          /*yield*/
          , getInstallationEntry(appConfig)];

        case 6:
          _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

          if (registrationPromise) {
            return [2
            /*return*/
            , registrationPromise];
          } else {
            // if there is no registrationPromise, entry is registered.
            return [2
            /*return*/
            , installationEntry];
          }

        case 7:
          return [2
          /*return*/
          , entry];
      }
    });
  });
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */


function updateInstallationRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!oldEntry) {
      throw ERROR_FACTORY.create("installation-not-found"
      /* INSTALLATION_NOT_FOUND */
      );
    }

    return clearTimedOutRequest(oldEntry);
  });
}

function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
      /* NOT_STARTED */

    };
  }

  return entry;
}

function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1
  /* IN_PROGRESS */
  && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function generateAuthTokenRequest(_a, installationEntry) {
  var appConfig = _a.appConfig,
      platformLoggerProvider = _a.platformLoggerProvider;
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          platformLogger = platformLoggerProvider.getImmediate({
            optional: true
          });

          if (platformLogger) {
            headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
          }

          body = {
            installation: {
              sdkVersion: PACKAGE_VERSION
            }
          };
          request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          return [4
          /*yield*/
          , retryIfServerError(function () {
            return fetch(endpoint, request);
          })];

        case 1:
          response = _b.sent();
          if (!response.ok) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , response.json()];

        case 2:
          responseValue = _b.sent();
          completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
          return [2
          /*return*/
          , completedAuthToken];

        case 3:
          return [4
          /*yield*/
          , getErrorFromResponse('Generate Auth Token', response)];

        case 4:
          throw _b.sent();
      }
    });
  });
}

function getGenerateAuthTokenEndpoint(appConfig, _a) {
  var fid = _a.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */


function refreshAuthToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var tokenPromise, entry, authToken, _a;

    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , update(dependencies.appConfig, function (oldEntry) {
            if (!isEntryRegistered(oldEntry)) {
              throw ERROR_FACTORY.create("not-registered"
              /* NOT_REGISTERED */
              );
            }

            var oldAuthToken = oldEntry.authToken;

            if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
              // There is a valid token in the DB.
              return oldEntry;
            } else if (oldAuthToken.requestStatus === 1
            /* IN_PROGRESS */
            ) {
                // There already is a token request in progress.
                tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                return oldEntry;
              } else {
              // No token or token expired.
              if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline"
                /* APP_OFFLINE */
                );
              }

              var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
              tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
              return inProgressEntry;
            }
          })];

        case 1:
          entry = _b.sent();
          if (!tokenPromise) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , tokenPromise];

        case 2:
          _a = _b.sent();
          return [3
          /*break*/
          , 4];

        case 3:
          _a = entry.authToken;
          _b.label = 4;

        case 4:
          authToken = _a;
          return [2
          /*return*/
          , authToken];
      }
    });
  });
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */


function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var entry, authToken;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , updateAuthTokenRequest(dependencies.appConfig)];

        case 1:
          entry = _a.sent();
          _a.label = 2;

        case 2:
          if (!(entry.authToken.requestStatus === 1
          /* IN_PROGRESS */
          )) return [3
            /*break*/
            , 5]; // generateAuthToken still in progress.

          return [4
          /*yield*/
          , sleep(100)];

        case 3:
          // generateAuthToken still in progress.
          _a.sent();

          return [4
          /*yield*/
          , updateAuthTokenRequest(dependencies.appConfig)];

        case 4:
          entry = _a.sent();
          return [3
          /*break*/
          , 2];

        case 5:
          authToken = entry.authToken;

          if (authToken.requestStatus === 0
          /* NOT_STARTED */
          ) {
              // The request timed out or failed in a different call. Try again.
              return [2
              /*return*/
              , refreshAuthToken(dependencies, forceRefresh)];
            } else {
            return [2
            /*return*/
            , authToken];
          }

      }
    });
  });
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */


function updateAuthTokenRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create("not-registered"
      /* NOT_REGISTERED */
      );
    }

    var oldAuthToken = oldEntry.authToken;

    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, oldEntry), {
        authToken: {
          requestStatus: 0
          /* NOT_STARTED */

        }
      });
    }

    return oldEntry;
  });
}

function fetchAuthTokenFromServer(dependencies, installationEntry) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 8]);

          return [4
          /*yield*/
          , generateAuthTokenRequest(dependencies, installationEntry)];

        case 1:
          authToken = _a.sent();
          updatedInstallationEntry = (0, _tslib.__assign)((0, _tslib.__assign)({}, installationEntry), {
            authToken: authToken
          });
          return [4
          /*yield*/
          , set(dependencies.appConfig, updatedInstallationEntry)];

        case 2:
          _a.sent();

          return [2
          /*return*/
          , authToken];

        case 3:
          e_1 = _a.sent();
          if (!(isServerError(e_1) && (e_1.customData.serverCode === 401 || e_1.customData.serverCode === 404))) return [3
          /*break*/
          , 5]; // Server returned a "FID not found" or a "Invalid authentication" error.
          // Generate a new ID next time.

          return [4
          /*yield*/
          , remove(dependencies.appConfig)];

        case 4:
          // Server returned a "FID not found" or a "Invalid authentication" error.
          // Generate a new ID next time.
          _a.sent();

          return [3
          /*break*/
          , 7];

        case 5:
          updatedInstallationEntry = (0, _tslib.__assign)((0, _tslib.__assign)({}, installationEntry), {
            authToken: {
              requestStatus: 0
              /* NOT_STARTED */

            }
          });
          return [4
          /*yield*/
          , set(dependencies.appConfig, updatedInstallationEntry)];

        case 6:
          _a.sent();

          _a.label = 7;

        case 7:
          throw e_1;

        case 8:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function isEntryRegistered(installationEntry) {
  return installationEntry !== undefined && installationEntry.registrationStatus === 2
  /* COMPLETED */
  ;
}

function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2
  /* COMPLETED */
  && !isAuthTokenExpired(authToken);
}

function isAuthTokenExpired(authToken) {
  var now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */


function makeAuthTokenRequestInProgressEntry(oldEntry) {
  var inProgressAuthToken = {
    requestStatus: 1
    /* IN_PROGRESS */
    ,
    requestTime: Date.now()
  };
  return (0, _tslib.__assign)((0, _tslib.__assign)({}, oldEntry), {
    authToken: inProgressAuthToken
  });
}

function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1
  /* IN_PROGRESS */
  && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getId(dependencies) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var _a, installationEntry, registrationPromise;

    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , getInstallationEntry(dependencies.appConfig)];

        case 1:
          _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

          if (registrationPromise) {
            registrationPromise.catch(console.error);
          } else {
            // If the installation is already registered, update the authentication
            // token if needed.
            refreshAuthToken(dependencies).catch(console.error);
          }

          return [2
          /*return*/
          , installationEntry.fid];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var authToken;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , completeInstallationRegistration(dependencies.appConfig)];

        case 1:
          _a.sent();

          return [4
          /*yield*/
          , refreshAuthToken(dependencies, forceRefresh)];

        case 2:
          authToken = _a.sent();
          return [2
          /*return*/
          , authToken.token];
      }
    });
  });
}

function completeInstallationRegistration(appConfig) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var registrationPromise;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , getInstallationEntry(appConfig)];

        case 1:
          registrationPromise = _a.sent().registrationPromise;
          if (!registrationPromise) return [3
          /*break*/
          , 3]; // A createInstallation request is in progress. Wait until it finishes.

          return [4
          /*yield*/
          , registrationPromise];

        case 2:
          // A createInstallation request is in progress. Wait until it finishes.
          _a.sent();

          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function deleteInstallationRequest(appConfig, installationEntry) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var endpoint, headers, request, response;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          endpoint = getDeleteEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          request = {
            method: 'DELETE',
            headers: headers
          };
          return [4
          /*yield*/
          , retryIfServerError(function () {
            return fetch(endpoint, request);
          })];

        case 1:
          response = _a.sent();
          if (!!response.ok) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , getErrorFromResponse('Delete Installation', response)];

        case 2:
          throw _a.sent();

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function getDeleteEndpoint(appConfig, _a) {
  var fid = _a.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function deleteInstallation(dependencies) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var appConfig, entry;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          appConfig = dependencies.appConfig;
          return [4
          /*yield*/
          , update(appConfig, function (oldEntry) {
            if (oldEntry && oldEntry.registrationStatus === 0
            /* NOT_STARTED */
            ) {
                // Delete the unregistered entry without sending a deleteInstallation request.
                return undefined;
              }

            return oldEntry;
          })];

        case 1:
          entry = _a.sent();
          if (!entry) return [3
          /*break*/
          , 6];
          if (!(entry.registrationStatus === 1
          /* IN_PROGRESS */
          )) return [3
            /*break*/
            , 2]; // Can't delete while trying to register.

          throw ERROR_FACTORY.create("delete-pending-registration"
          /* DELETE_PENDING_REGISTRATION */
          );

        case 2:
          if (!(entry.registrationStatus === 2
          /* COMPLETED */
          )) return [3
            /*break*/
            , 6];
          if (!!navigator.onLine) return [3
          /*break*/
          , 3];
          throw ERROR_FACTORY.create("app-offline"
          /* APP_OFFLINE */
          );

        case 3:
          return [4
          /*yield*/
          , deleteInstallationRequest(appConfig, entry)];

        case 4:
          _a.sent();

          return [4
          /*yield*/
          , remove(appConfig)];

        case 5:
          _a.sent();

          _a.label = 6;

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 */


function onIdChange(_a, callback) {
  var appConfig = _a.appConfig;
  addCallback(appConfig, callback);
  return function () {
    removeCallback(appConfig, callback);
  };
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function extractAppConfig(app) {
  var e_1, _a;

  if (!app || !app.options) {
    throw getMissingValueError('App Configuration');
  }

  if (!app.name) {
    throw getMissingValueError('App Name');
  } // Required app config keys


  var configKeys = ['projectId', 'apiKey', 'appId'];

  try {
    for (var configKeys_1 = (0, _tslib.__values)(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
      var keyName = configKeys_1_1.value;

      if (!app.options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}

function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values"
  /* MISSING_APP_CONFIG_VALUES */
  , {
    valueName: valueName
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerInstallations(instance) {
  var installationsName = 'installations';
  instance.INTERNAL.registerComponent(new _component.Component(installationsName, function (container) {
    var app = container.getProvider('app').getImmediate(); // Throws if app isn't configured properly.

    var appConfig = extractAppConfig(app);
    var platformLoggerProvider = container.getProvider('platform-logger');
    var dependencies = {
      appConfig: appConfig,
      platformLoggerProvider: platformLoggerProvider
    };
    var installations = {
      app: app,
      getId: function () {
        return getId(dependencies);
      },
      getToken: function (forceRefresh) {
        return getToken(dependencies, forceRefresh);
      },
      delete: function () {
        return deleteInstallation(dependencies);
      },
      onIdChange: function (callback) {
        return onIdChange(dependencies, callback);
      }
    };
    return installations;
  }, "PUBLIC"
  /* PUBLIC */
  ));
  instance.registerVersion(name, version);
}

registerInstallations(_app.default);
},{"@firebase/app":"../node_modules/@firebase/app/dist/index.esm.js","@firebase/component":"../node_modules/@firebase/component/dist/index.esm.js","tslib":"../node_modules/tslib/tslib.es6.js","@firebase/util":"../node_modules/@firebase/util/dist/index.esm.js","idb":"../node_modules/idb/build/idb.js"}],"../node_modules/@firebase/analytics/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factory = factory;
exports.getGlobalVars = getGlobalVars;
exports.registerAnalytics = registerAnalytics;
exports.resetGlobalVars = resetGlobalVars;
exports.settings = settings;

var _tslib = require("tslib");

var _app = _interopRequireDefault(require("@firebase/app"));

require("@firebase/installations");

var _logger = require("@firebase/logger");

var _util = require("@firebase/util");

var _component = require("@firebase/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Key to attach FID to in gtag params.
var GA_FID_KEY = 'firebase_id';
var ORIGIN_KEY = 'origin';
var FETCH_TIMEOUT_MILLIS = 60 * 1000;
var DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
var GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
var GtagCommand;

(function (GtagCommand) {
  GtagCommand["EVENT"] = "event";
  GtagCommand["SET"] = "set";
  GtagCommand["CONFIG"] = "config";
})(GtagCommand || (GtagCommand = {}));
/**
 * Officially recommended event names for gtag.js
 * Any other string is also allowed.
 *
 * @public
 */


var EventName;

(function (EventName) {
  EventName["ADD_SHIPPING_INFO"] = "add_shipping_info";
  EventName["ADD_PAYMENT_INFO"] = "add_payment_info";
  EventName["ADD_TO_CART"] = "add_to_cart";
  EventName["ADD_TO_WISHLIST"] = "add_to_wishlist";
  EventName["BEGIN_CHECKOUT"] = "begin_checkout";
  /**
   * @deprecated
   * This event name is deprecated and is unsupported in updated
   * Enhanced Ecommerce reports.
   */

  EventName["CHECKOUT_PROGRESS"] = "checkout_progress";
  EventName["EXCEPTION"] = "exception";
  EventName["GENERATE_LEAD"] = "generate_lead";
  EventName["LOGIN"] = "login";
  EventName["PAGE_VIEW"] = "page_view";
  EventName["PURCHASE"] = "purchase";
  EventName["REFUND"] = "refund";
  EventName["REMOVE_FROM_CART"] = "remove_from_cart";
  EventName["SCREEN_VIEW"] = "screen_view";
  EventName["SEARCH"] = "search";
  EventName["SELECT_CONTENT"] = "select_content";
  EventName["SELECT_ITEM"] = "select_item";
  EventName["SELECT_PROMOTION"] = "select_promotion";
  /** @deprecated */

  EventName["SET_CHECKOUT_OPTION"] = "set_checkout_option";
  EventName["SHARE"] = "share";
  EventName["SIGN_UP"] = "sign_up";
  EventName["TIMING_COMPLETE"] = "timing_complete";
  EventName["VIEW_CART"] = "view_cart";
  EventName["VIEW_ITEM"] = "view_item";
  EventName["VIEW_ITEM_LIST"] = "view_item_list";
  EventName["VIEW_PROMOTION"] = "view_promotion";
  EventName["VIEW_SEARCH_RESULTS"] = "view_search_results";
})(EventName || (EventName = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */


function logEvent(gtagFunction, initializationPromise, eventName, eventParams, options) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var measurementId, params;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(options && options.global)) return [3
          /*break*/
          , 1];
          gtagFunction(GtagCommand.EVENT, eventName, eventParams);
          return [2
          /*return*/
          ];

        case 1:
          return [4
          /*yield*/
          , initializationPromise];

        case 2:
          measurementId = _a.sent();
          params = (0, _tslib.__assign)((0, _tslib.__assign)({}, eventParams), {
            'send_to': measurementId
          });
          gtagFunction(GtagCommand.EVENT, eventName, params);
          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */


function setCurrentScreen(gtagFunction, initializationPromise, screenName, options) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var measurementId;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(options && options.global)) return [3
          /*break*/
          , 1];
          gtagFunction(GtagCommand.SET, {
            'screen_name': screenName
          });
          return [2
          /*return*/
          , Promise.resolve()];

        case 1:
          return [4
          /*yield*/
          , initializationPromise];

        case 2:
          measurementId = _a.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            'screen_name': screenName
          });
          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */


function setUserId(gtagFunction, initializationPromise, id, options) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var measurementId;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(options && options.global)) return [3
          /*break*/
          , 1];
          gtagFunction(GtagCommand.SET, {
            'user_id': id
          });
          return [2
          /*return*/
          , Promise.resolve()];

        case 1:
          return [4
          /*yield*/
          , initializationPromise];

        case 2:
          measurementId = _a.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            'user_id': id
          });
          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */


function setUserProperties(gtagFunction, initializationPromise, properties, options) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var flatProperties, _i, _a, key, measurementId;

    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          if (!(options && options.global)) return [3
          /*break*/
          , 1];
          flatProperties = {};

          for (_i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
            key = _a[_i]; // use dot notation for merge behavior in gtag.js

            flatProperties["user_properties." + key] = properties[key];
          }

          gtagFunction(GtagCommand.SET, flatProperties);
          return [2
          /*return*/
          , Promise.resolve()];

        case 1:
          return [4
          /*yield*/
          , initializationPromise];

        case 2:
          measurementId = _b.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            'user_properties': properties
          });
          _b.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */


function setAnalyticsCollectionEnabled(initializationPromise, enabled) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var measurementId;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , initializationPromise];

        case 1:
          measurementId = _a.sent();
          window["ga-disable-" + measurementId] = !enabled;
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var logger = new _logger.Logger('@firebase/analytics');
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */

function insertScriptTag(dataLayerName, measurementId) {
  var script = document.createElement('script');
  script.src = GTAG_URL + "?l=" + dataLayerName + "&id=" + measurementId;
  script.async = true;
  document.head.appendChild(script);
}
/**
 * Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */


function getOrCreateDataLayer(dataLayerName) {
  // Check for existing dataLayer and create if needed.
  var dataLayer = [];

  if (Array.isArray(window[dataLayerName])) {
    dataLayer = window[dataLayerName];
  } else {
    window[dataLayerName] = dataLayer;
  }

  return dataLayer;
}
/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */


function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          correspondingAppId = measurementIdToAppId[measurementId];
          _a.label = 1;

        case 1:
          _a.trys.push([1, 7,, 8]);

          if (!correspondingAppId) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , initializationPromisesMap[correspondingAppId]];

        case 2:
          _a.sent();

          return [3
          /*break*/
          , 6];

        case 3:
          return [4
          /*yield*/
          , Promise.all(dynamicConfigPromisesList)];

        case 4:
          dynamicConfigResults = _a.sent();
          foundConfig = dynamicConfigResults.find(function (config) {
            return config.measurementId === measurementId;
          });
          if (!foundConfig) return [3
          /*break*/
          , 6];
          return [4
          /*yield*/
          , initializationPromisesMap[foundConfig.appId]];

        case 5:
          _a.sent();

          _a.label = 6;

        case 6:
          return [3
          /*break*/
          , 8];

        case 7:
          e_1 = _a.sent();
          logger.error(e_1);
          return [3
          /*break*/
          , 8];

        case 8:
          gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */


function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _loop_1, _i, gaSendToList_1, sendToId, state_1, e_2;

    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 4,, 5]);

          initializationPromisesToWaitFor = [];
          if (!(gtagParams && gtagParams['send_to'])) return [3
          /*break*/
          , 2];
          gaSendToList = gtagParams['send_to']; // Make it an array if is isn't, so it can be dealt with the same way.

          if (!Array.isArray(gaSendToList)) {
            gaSendToList = [gaSendToList];
          }

          return [4
          /*yield*/
          , Promise.all(dynamicConfigPromisesList)];

        case 1:
          dynamicConfigResults = _a.sent();

          _loop_1 = function (sendToId) {
            // Any fetched dynamic measurement ID that matches this 'send_to' ID
            var foundConfig = dynamicConfigResults.find(function (config) {
              return config.measurementId === sendToId;
            });
            var initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];

            if (initializationPromise) {
              initializationPromisesToWaitFor.push(initializationPromise);
            } else {
              // Found an item in 'send_to' that is not associated
              // directly with an FID, possibly a group.  Empty this array,
              // exit the loop early, and let it get populated below.
              initializationPromisesToWaitFor = [];
              return "break";
            }
          };

          for (_i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
            sendToId = gaSendToList_1[_i];
            state_1 = _loop_1(sendToId);
            if (state_1 === "break") break;
          }

          _a.label = 2;

        case 2:
          // This will be unpopulated if there was no 'send_to' field , or
          // if not all entries in the 'send_to' field could be mapped to
          // a FID. In these cases, wait on all pending initialization promises.
          if (initializationPromisesToWaitFor.length === 0) {
            initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
          } // Run core gtag function with args after all relevant initialization
          // promises have been resolved.


          return [4
          /*yield*/
          , Promise.all(initializationPromisesToWaitFor)];

        case 3:
          // Run core gtag function with args after all relevant initialization
          // promises have been resolved.
          _a.sent(); // Workaround for http://b/141370449 - third argument cannot be undefined.


          gtagCore(GtagCommand.EVENT, measurementId, gtagParams || {});
          return [3
          /*break*/
          , 5];

        case 4:
          e_2 = _a.sent();
          logger.error(e_2);
          return [3
          /*break*/
          , 5];

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 */


function wrapGtag(gtagCore,
/**
 * Allows wrapped gtag calls to wait on whichever intialization promises are required,
 * depending on the contents of the gtag params' `send_to` field, if any.
 */
initializationPromisesMap,
/**
 * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
 * before determining what initialization promises (which include FIDs) to wait for.
 */
dynamicConfigPromisesList,
/**
 * Wrapped gtag config calls can narrow down which initialization promise (with FID)
 * to wait for if the measurementId is already fetched, by getting the corresponding appId,
 * which is the key for the initialization promises map.
 */
measurementIdToAppId) {
  /**
   * Wrapper around gtag that ensures FID is sent with gtag calls.
   * @param command Gtag command type.
   * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
   * @param gtagParams Params if event is EVENT/CONFIG.
   */
  function gtagWrapper(command, idOrNameOrParams, gtagParams) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var e_3;
      return (0, _tslib.__generator)(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 6,, 7]);

            if (!(command === GtagCommand.EVENT)) return [3
            /*break*/
            , 2]; // If EVENT, second arg must be measurementId.

            return [4
            /*yield*/
            , gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams)];

          case 1:
            // If EVENT, second arg must be measurementId.
            _a.sent();

            return [3
            /*break*/
            , 5];

          case 2:
            if (!(command === GtagCommand.CONFIG)) return [3
            /*break*/
            , 4]; // If CONFIG, second arg must be measurementId.

            return [4
            /*yield*/
            , gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams)];

          case 3:
            // If CONFIG, second arg must be measurementId.
            _a.sent();

            return [3
            /*break*/
            , 5];

          case 4:
            // If SET, second arg must be params.
            gtagCore(GtagCommand.SET, idOrNameOrParams);
            _a.label = 5;

          case 5:
            return [3
            /*break*/
            , 7];

          case 6:
            e_3 = _a.sent();
            logger.error(e_3);
            return [3
            /*break*/
            , 7];

          case 7:
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  return gtagWrapper;
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
 */


function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
  // Create a basic core gtag function
  var gtagCore = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Must push IArguments object, not an array.


    window[dataLayerName].push(arguments);
  }; // Replace it with existing one if found


  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
    // @ts-ignore
    gtagCore = window[gtagFunctionName];
  }

  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
  return {
    gtagCore: gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
/**
 * Returns first script tag in DOM matching our gtag url pattern.
 */


function findGtagScriptOnPage() {
  var scriptTags = window.document.getElementsByTagName('script');

  for (var _i = 0, _a = Object.values(scriptTags); _i < _a.length; _i++) {
    var tag = _a[_i];

    if (tag.src && tag.src.includes(GTAG_URL)) {
      return tag;
    }
  }

  return null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;

var ERRORS = (_a = {}, _a["already-exists"
/* ALREADY_EXISTS */
] = 'A Firebase Analytics instance with the appId {$id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each appId.', _a["already-initialized"
/* ALREADY_INITIALIZED */
] = 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.', _a["interop-component-reg-failed"
/* INTEROP_COMPONENT_REG_FAILED */
] = 'Firebase Analytics Interop Component failed to instantiate: {$reason}', _a["invalid-analytics-context"
/* INVALID_ANALYTICS_CONTEXT */
] = 'Firebase Analytics is not supported in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}', _a["indexeddb-unavailable"
/* INDEXEDDB_UNAVAILABLE */
] = 'IndexedDB unavailable or restricted in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}', _a["fetch-throttle"
/* FETCH_THROTTLE */
] = 'The config fetch request timed out while in an exponential backoff state.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["config-fetch-failed"
/* CONFIG_FETCH_FAILED */
] = 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}', _a["no-api-key"
/* NO_API_KEY */
] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid API key.', _a["no-app-id"
/* NO_APP_ID */
] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid app ID.', _a);
var ERROR_FACTORY = new _util.ErrorFactory('analytics', 'Analytics', ERRORS);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Backoff factor for 503 errors, which we want to be conservative about
 * to avoid overloading servers. Each retry interval will be
 * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
 * will be ~30 seconds (with fuzzing).
 */

var LONG_RETRY_FACTOR = 30;
/**
 * Base wait interval to multiplied by backoffFactor^backoffCount.
 */

var BASE_INTERVAL_MILLIS = 1000;
/**
 * Stubbable retry data storage class.
 */

var RetryData =
/** @class */
function () {
  function RetryData(throttleMetadata, intervalMillis) {
    if (throttleMetadata === void 0) {
      throttleMetadata = {};
    }

    if (intervalMillis === void 0) {
      intervalMillis = BASE_INTERVAL_MILLIS;
    }

    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }

  RetryData.prototype.getThrottleMetadata = function (appId) {
    return this.throttleMetadata[appId];
  };

  RetryData.prototype.setThrottleMetadata = function (appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  };

  RetryData.prototype.deleteThrottleMetadata = function (appId) {
    delete this.throttleMetadata[appId];
  };

  return RetryData;
}();

var defaultRetryData = new RetryData();
/**
 * Set GET request headers.
 * @param apiKey App API key.
 */

function getHeaders(apiKey) {
  return new Headers({
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}
/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */


function fetchDynamicConfig(appFields) {
  var _a;

  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var appId, apiKey, request, appUrl, response, errorMessage, jsonResponse;
    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          appId = appFields.appId, apiKey = appFields.apiKey;
          request = {
            method: 'GET',
            headers: getHeaders(apiKey)
          };
          appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
          return [4
          /*yield*/
          , fetch(appUrl, request)];

        case 1:
          response = _b.sent();
          if (!(response.status !== 200 && response.status !== 304)) return [3
          /*break*/
          , 6];
          errorMessage = '';
          _b.label = 2;

        case 2:
          _b.trys.push([2, 4,, 5]);

          return [4
          /*yield*/
          , response.json()];

        case 3:
          jsonResponse = _b.sent();

          if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
            errorMessage = jsonResponse.error.message;
          }

          return [3
          /*break*/
          , 5];

        case 4:
          _b.sent();

          return [3
          /*break*/
          , 5];

        case 5:
          throw ERROR_FACTORY.create("config-fetch-failed"
          /* CONFIG_FETCH_FAILED */
          , {
            httpStatus: response.status,
            responseMessage: errorMessage
          });

        case 6:
          return [2
          /*return*/
          , response.json()];
      }
    });
  });
}
/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */


function fetchDynamicConfigWithRetry(app, // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
retryData, timeoutMillis) {
  if (retryData === void 0) {
    retryData = defaultRetryData;
  }

  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var _a, appId, apiKey, measurementId, throttleMetadata, signal;

    var _this = this;

    return (0, _tslib.__generator)(this, function (_b) {
      _a = app.options, appId = _a.appId, apiKey = _a.apiKey, measurementId = _a.measurementId;

      if (!appId) {
        throw ERROR_FACTORY.create("no-app-id"
        /* NO_APP_ID */
        );
      }

      if (!apiKey) {
        if (measurementId) {
          return [2
          /*return*/
          , {
            measurementId: measurementId,
            appId: appId
          }];
        }

        throw ERROR_FACTORY.create("no-api-key"
        /* NO_API_KEY */
        );
      }

      throttleMetadata = retryData.getThrottleMetadata(appId) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
      };
      signal = new AnalyticsAbortSignal();
      setTimeout(function () {
        return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
          return (0, _tslib.__generator)(this, function (_a) {
            // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
            signal.abort();
            return [2
            /*return*/
            ];
          });
        });
      }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
      return [2
      /*return*/
      , attemptFetchDynamicConfigWithRetry({
        appId: appId,
        apiKey: apiKey,
        measurementId: measurementId
      }, throttleMetadata, signal, retryData)];
    });
  });
}
/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */


function attemptFetchDynamicConfigWithRetry(appFields, _a, signal, retryData // for testing
) {
  var throttleEndTimeMillis = _a.throttleEndTimeMillis,
      backoffCount = _a.backoffCount;

  if (retryData === void 0) {
    retryData = defaultRetryData;
  }

  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var appId, measurementId, e_1, response, e_2, backoffMillis, throttleMetadata;
    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          appId = appFields.appId, measurementId = appFields.measurementId;
          _b.label = 1;

        case 1:
          _b.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , setAbortableTimeout(signal, throttleEndTimeMillis)];

        case 2:
          _b.sent();

          return [3
          /*break*/
          , 4];

        case 3:
          e_1 = _b.sent();

          if (measurementId) {
            logger.warn("Timed out fetching this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (" provided in the \"measurementId\" field in the local Firebase config. [" + e_1.message + "]"));
            return [2
            /*return*/
            , {
              appId: appId,
              measurementId: measurementId
            }];
          }

          throw e_1;

        case 4:
          _b.trys.push([4, 6,, 7]);

          return [4
          /*yield*/
          , fetchDynamicConfig(appFields)];

        case 5:
          response = _b.sent(); // Note the SDK only clears throttle state if response is success or non-retriable.

          retryData.deleteThrottleMetadata(appId);
          return [2
          /*return*/
          , response];

        case 6:
          e_2 = _b.sent();

          if (!isRetriableError(e_2)) {
            retryData.deleteThrottleMetadata(appId);

            if (measurementId) {
              logger.warn("Failed to fetch this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (" provided in the \"measurementId\" field in the local Firebase config. [" + e_2.message + "]"));
              return [2
              /*return*/
              , {
                appId: appId,
                measurementId: measurementId
              }];
            } else {
              throw e_2;
            }
          }

          backoffMillis = Number(e_2.customData.httpStatus) === 503 ? (0, _util.calculateBackoffMillis)(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : (0, _util.calculateBackoffMillis)(backoffCount, retryData.intervalMillis);
          throttleMetadata = {
            throttleEndTimeMillis: Date.now() + backoffMillis,
            backoffCount: backoffCount + 1
          }; // Persists state.

          retryData.setThrottleMetadata(appId, throttleMetadata);
          logger.debug("Calling attemptFetch again in " + backoffMillis + " millis");
          return [2
          /*return*/
          , attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData)];

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */


function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise(function (resolve, reject) {
    // Derives backoff from given end time, normalizing negative numbers to zero.
    var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    var timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

    signal.addEventListener(function () {
      clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

      reject(ERROR_FACTORY.create("fetch-throttle"
      /* FETCH_THROTTLE */
      , {
        throttleEndTimeMillis: throttleEndTimeMillis
      }));
    });
  });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */


function isRetriableError(e) {
  if (!(e instanceof _util.FirebaseError) || !e.customData) {
    return false;
  } // Uses string index defined by ErrorData, which FirebaseError implements.


  var httpStatus = Number(e.customData['httpStatus']);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */


var AnalyticsAbortSignal =
/** @class */
function () {
  function AnalyticsAbortSignal() {
    this.listeners = [];
  }

  AnalyticsAbortSignal.prototype.addEventListener = function (listener) {
    this.listeners.push(listener);
  };

  AnalyticsAbortSignal.prototype.abort = function () {
    this.listeners.forEach(function (listener) {
      return listener();
    });
  };

  return AnalyticsAbortSignal;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function validateIndexedDB() {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var e_1;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!!(0, _util.isIndexedDBAvailable)()) return [3
          /*break*/
          , 1];
          logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
          /* INDEXEDDB_UNAVAILABLE */
          , {
            errorInfo: 'IndexedDB is not available in this environment.'
          }).message);
          return [2
          /*return*/
          , false];

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , (0, _util.validateIndexedDBOpenable)()];

        case 2:
          _a.sent();

          return [3
          /*break*/
          , 4];

        case 3:
          e_1 = _a.sent();
          logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
          /* INDEXEDDB_UNAVAILABLE */
          , {
            errorInfo: e_1
          }).message);
          return [2
          /*return*/
          , false];

        case 4:
          return [2
          /*return*/
          , true];
      }
    });
  });
}
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations FirebaseInstallations instance.
 *
 * @returns Measurement ID.
 */


function initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var dynamicConfigPromise, fidPromise, _a, dynamicConfig, fid, configProperties;

    var _b;

    return (0, _tslib.__generator)(this, function (_c) {
      switch (_c.label) {
        case 0:
          dynamicConfigPromise = fetchDynamicConfigWithRetry(app); // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.

          dynamicConfigPromise.then(function (config) {
            measurementIdToAppId[config.measurementId] = config.appId;

            if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
              logger.warn("The measurement ID in the local Firebase config (" + app.options.measurementId + ")" + (" does not match the measurement ID fetched from the server (" + config.measurementId + ").") + " To ensure analytics events are always sent to the correct Analytics property," + " update the" + " measurement ID field in the local config or remove it from the local config.");
            }
          }).catch(function (e) {
            return logger.error(e);
          }); // Add to list to track state of all dynamic config promises.

          dynamicConfigPromisesList.push(dynamicConfigPromise);
          fidPromise = validateIndexedDB().then(function (envIsValid) {
            if (envIsValid) {
              return installations.getId();
            } else {
              return undefined;
            }
          });
          return [4
          /*yield*/
          , Promise.all([dynamicConfigPromise, fidPromise])];

        case 1:
          _a = _c.sent(), dynamicConfig = _a[0], fid = _a[1]; // Detect if user has already put the gtag <script> tag on this page.

          if (!findGtagScriptOnPage()) {
            insertScriptTag(dataLayerName, dynamicConfig.measurementId);
          } // This command initializes gtag.js and only needs to be called once for the entire web app,
          // but since it is idempotent, we can call it multiple times.
          // We keep it together with other initialization logic for better code structure.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any


          gtagCore('js', new Date());
          configProperties = (_b = {}, // guard against developers accidentally setting properties with prefix `firebase_`
          _b[ORIGIN_KEY] = 'firebase', _b.update = true, _b);

          if (fid != null) {
            configProperties[GA_FID_KEY] = fid;
          } // It should be the first config command called on this GA-ID
          // Initialize this GA-ID and set FID on it using the gtag config API.
          // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
          // `configProperties`.


          gtagCore(GtagCommand.CONFIG, dynamicConfig.measurementId, configProperties);
          return [2
          /*return*/
          , dynamicConfig.measurementId];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */


var initializationPromisesMap = {};
/**
 * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
 * wait on all these to be complete in order to determine if it can selectively
 * wait for only certain initialization (FID) promises or if it must wait for all.
 */

var dynamicConfigPromisesList = [];
/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */

var measurementIdToAppId = {};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */

var dataLayerName = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */

var gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */

var gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */

var wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */

var globalInitDone = false;
/**
 * For testing
 */

function resetGlobalVars(newGlobalInitDone, newInitializationPromisesMap, newDynamicPromises) {
  if (newGlobalInitDone === void 0) {
    newGlobalInitDone = false;
  }

  if (newInitializationPromisesMap === void 0) {
    newInitializationPromisesMap = {};
  }

  if (newDynamicPromises === void 0) {
    newDynamicPromises = [];
  }

  globalInitDone = newGlobalInitDone;
  initializationPromisesMap = newInitializationPromisesMap;
  dynamicConfigPromisesList = newDynamicPromises;
  dataLayerName = 'dataLayer';
  gtagName = 'gtag';
}
/**
 * For testing
 */


function getGlobalVars() {
  return {
    initializationPromisesMap: initializationPromisesMap,
    dynamicConfigPromisesList: dynamicConfigPromisesList
  };
}
/**
 * This must be run before calling firebase.analytics() or it won't
 * have any effect.
 * @param options Custom gtag and dataLayer names.
 */


function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY.create("already-initialized"
    /* ALREADY_INITIALIZED */
    );
  }

  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }

  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */


function warnOnBrowserContextMismatch() {
  var mismatchedEnvMessages = [];

  if ((0, _util.isBrowserExtension)()) {
    mismatchedEnvMessages.push('This is a browser extension environment.');
  }

  if (!(0, _util.areCookiesEnabled)()) {
    mismatchedEnvMessages.push('Cookies are not available.');
  }

  if (mismatchedEnvMessages.length > 0) {
    var details = mismatchedEnvMessages.map(function (message, index) {
      return "(" + (index + 1) + ") " + message;
    }).join(' ');
    var err = ERROR_FACTORY.create("invalid-analytics-context"
    /* INVALID_ANALYTICS_CONTEXT */
    , {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}

function factory(app, installations) {
  warnOnBrowserContextMismatch();
  var appId = app.options.appId;

  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id"
    /* NO_APP_ID */
    );
  }

  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn("The \"apiKey\" field is empty in the local Firebase config. This is needed to fetch the latest" + (" measurement ID for this Firebase app. Falling back to the measurement ID " + app.options.measurementId) + " provided in the \"measurementId\" field in the local Firebase config.");
    } else {
      throw ERROR_FACTORY.create("no-api-key"
      /* NO_API_KEY */
      );
    }
  }

  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY.create("already-exists"
    /* ALREADY_EXISTS */
    , {
      id: appId
    });
  }

  if (!globalInitDone) {
    // Steps here should only be done once per page: creation or wrapping
    // of dataLayer and global gtag function.
    getOrCreateDataLayer(dataLayerName);

    var _a = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName),
        wrappedGtag = _a.wrappedGtag,
        gtagCore = _a.gtagCore;

    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  } // Async but non-blocking.
  // This map reflects the completion state of all promises for each appId.


  initializationPromisesMap[appId] = initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName);
  var analyticsInstance = {
    app: app,
    // Public methods return void for API simplicity and to better match gtag,
    // while internal implementations return promises.
    logEvent: function (eventName, eventParams, options) {
      logEvent(wrappedGtagFunction, initializationPromisesMap[appId], eventName, eventParams, options).catch(function (e) {
        return logger.error(e);
      });
    },
    setCurrentScreen: function (screenName, options) {
      setCurrentScreen(wrappedGtagFunction, initializationPromisesMap[appId], screenName, options).catch(function (e) {
        return logger.error(e);
      });
    },
    setUserId: function (id, options) {
      setUserId(wrappedGtagFunction, initializationPromisesMap[appId], id, options).catch(function (e) {
        return logger.error(e);
      });
    },
    setUserProperties: function (properties, options) {
      setUserProperties(wrappedGtagFunction, initializationPromisesMap[appId], properties, options).catch(function (e) {
        return logger.error(e);
      });
    },
    setAnalyticsCollectionEnabled: function (enabled) {
      setAnalyticsCollectionEnabled(initializationPromisesMap[appId], enabled).catch(function (e) {
        return logger.error(e);
      });
    },
    INTERNAL: {
      delete: function () {
        delete initializationPromisesMap[appId];
        return Promise.resolve();
      }
    }
  };
  return analyticsInstance;
}

var name = "@firebase/analytics";
var version = "0.6.17";
/**
 * Type constant for Firebase Analytics.
 */

var ANALYTICS_TYPE = 'analytics';

function registerAnalytics(instance) {
  instance.INTERNAL.registerComponent(new _component.Component(ANALYTICS_TYPE, function (container) {
    // getImmediate for FirebaseApp will always succeed
    var app = container.getProvider('app').getImmediate();
    var installations = container.getProvider('installations').getImmediate();
    return factory(app, installations);
  }, "PUBLIC"
  /* PUBLIC */
  ).setServiceProps({
    settings: settings,
    EventName: EventName,
    isSupported: isSupported
  }));
  instance.INTERNAL.registerComponent(new _component.Component('analytics-internal', internalFactory, "PRIVATE"
  /* PRIVATE */
  ));
  instance.registerVersion(name, version);

  function internalFactory(container) {
    try {
      var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: analytics.logEvent
      };
    } catch (e) {
      throw ERROR_FACTORY.create("interop-component-reg-failed"
      /* INTEROP_COMPONENT_REG_FAILED */
      , {
        reason: e
      });
    }
  }
}

registerAnalytics(_app.default);
/**
 * this is a public static method provided to users that wraps four different checks:
 *
 * 1. check if it's not a browser extension environment.
 * 1. check if cookie is enabled in current browser.
 * 3. check if IndexedDB is supported by the browser environment.
 * 4. check if the current browser context is valid for using IndexedDB.
 *
 */

function isSupported() {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var isDBOpenable;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if ((0, _util.isBrowserExtension)()) {
            return [2
            /*return*/
            , false];
          }

          if (!(0, _util.areCookiesEnabled)()) {
            return [2
            /*return*/
            , false];
          }

          if (!(0, _util.isIndexedDBAvailable)()) {
            return [2
            /*return*/
            , false];
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , (0, _util.validateIndexedDBOpenable)()];

        case 2:
          isDBOpenable = _a.sent();
          return [2
          /*return*/
          , isDBOpenable];

        case 3:
          _a.sent();

          return [2
          /*return*/
          , false];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","@firebase/app":"../node_modules/@firebase/app/dist/index.esm.js","@firebase/installations":"../node_modules/@firebase/installations/dist/index.esm.js","@firebase/logger":"../node_modules/@firebase/logger/dist/index.esm.js","@firebase/util":"../node_modules/@firebase/util/dist/index.esm.js","@firebase/component":"../node_modules/@firebase/component/dist/index.esm.js"}],"script/Services/Analytics.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var app_1 = __importDefault(require("firebase/app"));

require("@firebase/analytics");

function InitFirebaseAnalytics() {
  var firebaseConfig = {
    apiKey: "AIzaSyAHaQDXYUBmapvU3Rz9K1O7WJRlrZrQF5A",
    authDomain: "egf-islamic-center-321017.firebaseapp.com",
    projectId: "egf-islamic-center-321017",
    storageBucket: "egf-islamic-center-321017.appspot.com",
    messagingSenderId: "49382867005",
    appId: "1:49382867005:web:ba2b53cb022a55f4116a54",
    measurementId: "G-3CKG710W7E"
  };
  app_1.default.initializeApp(firebaseConfig);
  app_1.default.analytics();
}

exports.default = InitFirebaseAnalytics;
},{"firebase/app":"../node_modules/firebase/app/dist/index.esm.js","@firebase/analytics":"../node_modules/@firebase/analytics/dist/index.esm.js"}],"script/Services/CalenderAPIService.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CalendarAPIService =
/** @class */
function () {
  function CalendarAPIService() {
    this.apiKey = "AIzaSyD227OlDj5joTJ_SlnqDXwkOMQs-eKLLoU";
    this.calendarID = "5sos0lr58khddl91ebog1muvbc@group.calendar.google.com";
    this.maxResults = 4;
  }

  CalendarAPIService.prototype.getEvents = function () {
    return __awaiter(this, void 0, Promise, function () {
      var data, events;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.getDataFromAPI()];

          case 1:
            data = _a.sent();
            events = this.convertData(data);
            return [2
            /*return*/
            , events];
        }
      });
    });
  };

  CalendarAPIService.prototype.getDataFromAPI = function () {
    return __awaiter(this, void 0, Promise, function () {
      var date, calendarData;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            date = new Date().toISOString();
            return [4
            /*yield*/
            , fetch("https://www.googleapis.com/calendar/v3/calendars/" + this.calendarID + "/events?maxResults=" + this.maxResults + "&orderBy=startTime&singleEvents=True&timeMin=" + date + "&key=" + this.apiKey).then(function (body) {
              return body.json();
            })];

          case 1:
            calendarData = _a.sent();
            return [2
            /*return*/
            , calendarData];
        }
      });
    });
  };

  CalendarAPIService.prototype.convertData = function (data) {
    var events = new Array();

    for (var _i = 0, _a = data.items; _i < _a.length; _i++) {
      var item = _a[_i];
      var event = {
        date: new Date(item.start.dateTime),
        name: item.summary
      };
      events.push(event);
    }

    return events;
  };

  return CalendarAPIService;
}();

exports.default = CalendarAPIService;
},{}],"script/Index/Calendar.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CalenderAPIService_1 = __importDefault(require("./../Services/CalenderAPIService"));

var Calendar =
/** @class */
function () {
  function Calendar() {
    this.eventsCon = document.querySelector(".events");
    this.daysEle = new Array();
    this.daysUntilToday = 0;
  }

  Calendar.prototype.init = function () {
    return __awaiter(this, void 0, void 0, function () {
      var date, events, monthNameEle, _i, events_1, event, event, err_1, event;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            date = new Date();
            return [4
            /*yield*/
            , new CalenderAPIService_1.default().getEvents()];

          case 1:
            events = _a.sent();
            monthNameEle = document.querySelector(".calender_nav .date");
            this.generateCalendarDays();

            if (events.length > 0) {
              for (_i = 0, events_1 = events; _i < events_1.length; _i++) {
                event = events_1[_i];
                this.makeEventCard(event);

                if (event.date.getMonth() === date.getMonth()) {
                  this.markCalendarDay(event.date.getDate());
                }
              }
            } else {
              event = {
                name: "Sorry, there are no upcoming events",
                date: new Date()
              };
              this.makeEventCard(event);
            }

            this.renderCalendar();
            monthNameEle.innerText = this.monthToString(date.getMonth()) + " " + date.getFullYear();
            return [3
            /*break*/
            , 3];

          case 2:
            err_1 = _a.sent();
            console.error(err_1);
            event = {
              name: "Sorry, something went wrong on our end!",
              date: new Date()
            };
            this.makeEventCard(event);
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Calendar.prototype.generateCalendarDays = function () {
    var date = new Date();
    var daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate() + 1;
    this.fillDaysUntilToday(date.getDay());

    for (var i = 1; i <= daysInMonth; i++) {
      var ele = document.createElement("span");
      ele.innerText = i.toString();
      this.daysEle.push(ele);
    }
  };

  Calendar.prototype.fillDaysUntilToday = function (todaysDay) {
    var daysAwayFromToday = 7 - todaysDay;
    this.addDisabledDays(daysAwayFromToday);
    this.daysUntilToday = daysAwayFromToday;
  };

  Calendar.prototype.addDisabledDays = function (amount) {
    for (var i = 1; i <= amount; i++) {
      var span = document.createElement("span");
      span.classList.add("disabled");
      this.daysEle.push(span);
    }
  };

  Calendar.prototype.markCalendarDay = function (dayNumber) {
    this.daysEle[dayNumber - 1 + this.daysUntilToday].classList.add("highlight");
  };

  Calendar.prototype.renderCalendar = function () {
    var gridEle = document.querySelector(".grid");

    for (var _i = 0, _a = this.daysEle; _i < _a.length; _i++) {
      var span = _a[_i];
      gridEle.appendChild(span);
    }
  };

  Calendar.prototype.makeEventCard = function (event) {
    var eventEle = document.createElement("div");
    var dayNumberEle = document.createElement("div");
    var dateEle = document.createElement("div");
    var monthYearEle = document.createElement("div");
    var dayNameEle = document.createElement("div");
    var titleEle = document.createElement("div");
    eventEle.classList.add("event");
    dayNumberEle.classList.add("dayNumber");
    dateEle.classList.add("date");
    monthYearEle.classList.add("monthYear");
    dayNameEle.classList.add("dayName");
    titleEle.classList.add("title");
    eventEle.appendChild(dayNumberEle);
    dateEle.appendChild(monthYearEle);
    dateEle.appendChild(dayNameEle);
    eventEle.appendChild(dateEle);
    eventEle.appendChild(titleEle);
    dayNumberEle.innerText = event.date.getDate().toString();
    monthYearEle.innerText = this.monthToString(event.date.getMonth()) + " " + event.date.getFullYear();
    dayNameEle.innerText = this.dayToString(event.date.getDay());
    titleEle.innerText = event.name;
    this.eventsCon.appendChild(eventEle);
  }; //convert a month number to a string


  Calendar.prototype.monthToString = function (month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }; //convert a day number to a string 


  Calendar.prototype.dayToString = function (day) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
  };

  return Calendar;
}();

exports.default = Calendar;
},{"./../Services/CalenderAPIService":"script/Services/CalenderAPIService.ts"}],"script/Index/UX.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchResources = exports.initCalendar = void 0;

var Calendar_1 = __importDefault(require("./Calendar"));

function initCalendar() {
  var calendar = new Calendar_1.default();
  calendar.init();
}

exports.initCalendar = initCalendar;

function switchResources() {
  var tabs = document.querySelectorAll(".tab");
  var explanations = document.querySelectorAll(".explanation");
  var currentTab = 0;
  tabs.forEach(function (tab, i) {
    return tab.addEventListener("click", function () {
      clearInterval(autoTabSwitcher);
      switchTab(i);
    });
  });
  var autoTabSwitcher = setInterval(function () {
    if (currentTab < 4) currentTab++;else currentTab = 0;
    switchTab(currentTab);
  }, 4000);

  function switchTab(tabNumber) {
    removeAllSelected();
    tabs[tabNumber].classList.add("selected");
    explanations[tabNumber].classList.add("selected");
  }

  function removeAllSelected() {
    tabs.forEach(function (tab) {
      return tab.classList.remove("selected");
    });
    explanations.forEach(function (explanation) {
      return explanation.classList.remove("selected");
    });
  }
}

exports.switchResources = switchResources;
},{"./Calendar":"script/Index/Calendar.ts"}],"script/Index/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexFunctions = void 0;

var Analytics_1 = __importDefault(require("../Services/Analytics"));

var UX_1 = require("./UX");

function IndexFunctions() {
  UX_1.initCalendar();
  UX_1.switchResources();
  Analytics_1.default();
}

exports.IndexFunctions = IndexFunctions;
},{"../Services/Analytics":"script/Services/Analytics.ts","./UX":"script/Index/UX.ts"}],"script/script.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
// import "@fortawesome/fontawesome-free/css/solid.min.css";

require("@fortawesome/fontawesome-free/css/all.min.css");

var index_1 = require("./Index/index");

index_1.IndexFunctions();
},{"@fortawesome/fontawesome-free/css/all.min.css":"../node_modules/@fortawesome/fontawesome-free/css/all.min.css","./Index/index":"script/Index/index.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1029" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script/script.ts"], null)
//# sourceMappingURL=/script.334c1eb8.js.map