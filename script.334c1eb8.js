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
},{"./..\\webfonts\\fa-brands-400.eot":[["fa-brands-400.7b5acd02.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"./..\\webfonts\\fa-brands-400.woff2":[["fa-brands-400.34cc846b.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"./..\\webfonts\\fa-brands-400.woff":[["fa-brands-400.75159956.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"./..\\webfonts\\fa-brands-400.ttf":[["fa-brands-400.f885063e.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"./..\\webfonts\\fa-brands-400.svg":[["fa-brands-400.1f0eb095.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"./..\\webfonts\\fa-regular-400.eot":[["fa-regular-400.d4b9b17f.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"./..\\webfonts\\fa-regular-400.woff2":[["fa-regular-400.82c42f2f.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"./..\\webfonts\\fa-regular-400.woff":[["fa-regular-400.adc5c7aa.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"./..\\webfonts\\fa-regular-400.ttf":[["fa-regular-400.b073eab5.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"./..\\webfonts\\fa-regular-400.svg":[["fa-regular-400.16d6ac71.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"./..\\webfonts\\fa-solid-900.eot":[["fa-solid-900.0b60ff24.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"./..\\webfonts\\fa-solid-900.woff2":[["fa-solid-900.55d5ef42.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"./..\\webfonts\\fa-solid-900.woff":[["fa-solid-900.f824330b.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"./..\\webfonts\\fa-solid-900.ttf":[["fa-solid-900.47a039f3.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"./..\\webfonts\\fa-solid-900.svg":[["fa-solid-900.d08d5f59.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"script/Services/CalenderAPIService.ts":[function(require,module,exports) {
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
exports.initCalendar = exports.toggleNavbar = void 0;

var Calendar_1 = __importDefault(require("./Calendar"));

function toggleNavbar() {
  var sections = document.querySelectorAll("section");
  var navBar = document.querySelector("nav");

  var hideNavBar = function hideNavBar() {
    return navBar.classList.add("hidden");
  };

  var showNavBar = function showNavBar() {
    return navBar.classList.remove("hidden");
  };

  var options = {
    root: document.querySelector("scroll-container"),
    rootMargin: "0px",
    threshold: 1.0
  };

  for (var i = 0; i < sections.length; i++) {
    if (i < 2) {
      new IntersectionObserver(hideNavBar, options).observe(sections[i]);
    } else {
      new IntersectionObserver(showNavBar, options).observe(sections[i]);
    }
  }

  hideNavBar();
}

exports.toggleNavbar = toggleNavbar;

function initCalendar() {
  var calendar = new Calendar_1.default();
  calendar.init();
}

exports.initCalendar = initCalendar;
},{"./Calendar":"script/Index/Calendar.ts"}],"script/Index/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexFunctions = void 0;

var UX_1 = require("./UX");

function IndexFunctions() {
  UX_1.toggleNavbar();
  UX_1.initCalendar();
}

exports.IndexFunctions = IndexFunctions;
},{"./UX":"script/Index/UX.ts"}],"script/script.ts":[function(require,module,exports) {
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