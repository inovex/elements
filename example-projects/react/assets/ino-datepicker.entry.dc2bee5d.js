import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as createCommonjsModule, a as commonjsGlobal } from "./_commonjsHelpers-6ccee0aa.3580eb33.js";
import { h as hasSlotContent } from "./component-utils-1c4ae7be.6d485fb9.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
var flatpickr = createCommonjsModule(function(module, exports) {
  /* flatpickr v4.6.3, @license MIT */
  (function(global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
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
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var HOOKS = [
      "onChange",
      "onClose",
      "onDayCreate",
      "onDestroy",
      "onKeyDown",
      "onMonthChange",
      "onOpen",
      "onParseConfig",
      "onReady",
      "onValueUpdate",
      "onYearChange",
      "onPreCalendarPosition"
    ];
    var defaults = {
      _disable: [],
      _enable: [],
      allowInput: false,
      altFormat: "F j, Y",
      altInput: false,
      altInputClass: "form-control input",
      animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
      ariaDateFormat: "F j, Y",
      clickOpens: true,
      closeOnSelect: true,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: false,
      enable: [],
      enableSeconds: false,
      enableTime: false,
      errorHandler: function(err) {
        return typeof console !== "undefined" && console.warn(err);
      },
      getWeek: function(givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
      },
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: false,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      monthSelectorType: "dropdown",
      nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: false,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: void 0,
      prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: false,
      showMonths: 1,
      static: false,
      time_24hr: false,
      weekNumbers: false,
      wrap: false
    };
    var english = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ]
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        longhand: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
          return "th";
        switch (s % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year",
      hourAriaLabel: "Hour",
      minuteAriaLabel: "Minute",
      time_24hr: false
    };
    var pad = function(number) {
      return ("0" + number).slice(-2);
    };
    var int = function(bool) {
      return bool === true ? 1 : 0;
    };
    function debounce(func, wait, immediate) {
      if (immediate === void 0) {
        immediate = false;
      }
      var timeout;
      return function() {
        var context = this, args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = window.setTimeout(function() {
          timeout = null;
          if (!immediate)
            func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
          func.apply(context, args);
      };
    }
    var arrayify = function(obj) {
      return obj instanceof Array ? obj : [obj];
    };
    function toggleClass(elem, className, bool) {
      if (bool === true)
        return elem.classList.add(className);
      elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
      var e = window.document.createElement(tag);
      className = className || "";
      content = content || "";
      e.className = className;
      if (content !== void 0)
        e.textContent = content;
      return e;
    }
    function clearNode(node) {
      while (node.firstChild)
        node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
      if (condition(node))
        return node;
      else if (node.parentNode)
        return findParent(node.parentNode, condition);
      return void 0;
    }
    function createNumberInput(inputClassName, opts) {
      var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
      if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
      } else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
      }
      if (opts !== void 0)
        for (var key in opts)
          numInput.setAttribute(key, opts[key]);
      wrapper.appendChild(numInput);
      wrapper.appendChild(arrowUp);
      wrapper.appendChild(arrowDown);
      return wrapper;
    }
    function getEventTarget(event) {
      if (typeof event.composedPath === "function") {
        var path = event.composedPath();
        return path[0];
      }
      return event.target;
    }
    var doNothing = function() {
      return void 0;
    };
    var monthToStr = function(monthNumber, shorthand, locale) {
      return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
    };
    var revFormat = {
      D: doNothing,
      F: function(dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
      },
      G: function(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      H: function(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      J: function(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      K: function(dateObj, amPM, locale) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
      },
      M: function(dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
      },
      S: function(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      U: function(_, unixSeconds) {
        return new Date(parseFloat(unixSeconds) * 1e3);
      },
      W: function(dateObj, weekNum, locale) {
        var weekNumber = parseInt(weekNum);
        var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
      },
      Y: function(dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
      },
      Z: function(_, ISODate) {
        return new Date(ISODate);
      },
      d: function(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      h: function(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      i: function(dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
      },
      j: function(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      l: doNothing,
      m: function(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      n: function(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      s: function(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      u: function(_, unixMillSeconds) {
        return new Date(parseFloat(unixMillSeconds));
      },
      w: doNothing,
      y: function(dateObj, year) {
        dateObj.setFullYear(2e3 + parseFloat(year));
      }
    };
    var tokenRegex = {
      D: "(\\w+)",
      F: "(\\w+)",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "(\\w+)",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "(\\w+)",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      u: "(.+)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})"
    };
    var formats = {
      Z: function(date) {
        return date.toISOString();
      },
      D: function(date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
      },
      F: function(date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
      },
      G: function(date, locale, options) {
        return pad(formats.h(date, locale, options));
      },
      H: function(date) {
        return pad(date.getHours());
      },
      J: function(date, locale) {
        return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
      },
      K: function(date, locale) {
        return locale.amPM[int(date.getHours() > 11)];
      },
      M: function(date, locale) {
        return monthToStr(date.getMonth(), true, locale);
      },
      S: function(date) {
        return pad(date.getSeconds());
      },
      U: function(date) {
        return date.getTime() / 1e3;
      },
      W: function(date, _, options) {
        return options.getWeek(date);
      },
      Y: function(date) {
        return date.getFullYear();
      },
      d: function(date) {
        return pad(date.getDate());
      },
      h: function(date) {
        return date.getHours() % 12 ? date.getHours() % 12 : 12;
      },
      i: function(date) {
        return pad(date.getMinutes());
      },
      j: function(date) {
        return date.getDate();
      },
      l: function(date, locale) {
        return locale.weekdays.longhand[date.getDay()];
      },
      m: function(date) {
        return pad(date.getMonth() + 1);
      },
      n: function(date) {
        return date.getMonth() + 1;
      },
      s: function(date) {
        return date.getSeconds();
      },
      u: function(date) {
        return date.getTime();
      },
      w: function(date) {
        return date.getDay();
      },
      y: function(date) {
        return String(date.getFullYear()).substring(2);
      }
    };
    var createDateFormatter = function(_a) {
      var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
      return function(dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;
        if (config.formatDate !== void 0) {
          return config.formatDate(dateObj, frmt, locale);
        }
        return frmt.split("").map(function(c, i, arr) {
          return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
        }).join("");
      };
    };
    var createDateParser = function(_a) {
      var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
      return function(date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date)
          return void 0;
        var locale = customLocale || l10n;
        var parsedDate;
        var dateOrig = date;
        if (date instanceof Date)
          parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" && date.toFixed !== void 0)
          parsedDate = new Date(date);
        else if (typeof date === "string") {
          var format = givenFormat || (config || defaults).dateFormat;
          var datestr = String(date).trim();
          if (datestr === "today") {
            parsedDate = new Date();
            timeless = true;
          } else if (/Z$/.test(datestr) || /GMT$/.test(datestr))
            parsedDate = new Date(date);
          else if (config && config.parseDate)
            parsedDate = config.parseDate(date, format);
          else {
            parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
            var matched = void 0, ops = [];
            for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
              var token_1 = format[i];
              var isBackSlash = token_1 === "\\";
              var escaped = format[i - 1] === "\\" || isBackSlash;
              if (tokenRegex[token_1] && !escaped) {
                regexStr += tokenRegex[token_1];
                var match = new RegExp(regexStr).exec(date);
                if (match && (matched = true)) {
                  ops[token_1 !== "Y" ? "push" : "unshift"]({
                    fn: revFormat[token_1],
                    val: match[++matchIndex]
                  });
                }
              } else if (!isBackSlash)
                regexStr += ".";
              ops.forEach(function(_a2) {
                var fn = _a2.fn, val = _a2.val;
                return parsedDate = fn(parsedDate, val, locale) || parsedDate;
              });
            }
            parsedDate = matched ? parsedDate : void 0;
          }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
          config.errorHandler(new Error("Invalid date provided: " + dateOrig));
          return void 0;
        }
        if (timeless === true)
          parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
      };
    };
    function compareDates(date1, date2, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }
      if (timeless !== false) {
        return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
      }
      return date1.getTime() - date2.getTime();
    }
    var isBetween = function(ts, ts1, ts2) {
      return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
      DAY: 864e5
    };
    if (typeof Object.assign !== "function") {
      Object.assign = function(target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (!target) {
          throw TypeError("Cannot convert undefined or null to object");
        }
        var _loop_1 = function(source2) {
          if (source2) {
            Object.keys(source2).forEach(function(key) {
              return target[key] = source2[key];
            });
          }
        };
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
          var source = args_1[_a];
          _loop_1(source);
        }
        return target;
      };
    }
    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
      var self = {
        config: __assign({}, defaults, flatpickr2.defaultConfig),
        l10n: english
      };
      self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
      self._handlers = [];
      self.pluginElements = [];
      self.loadedPlugins = [];
      self._bind = bind;
      self._setHoursFromDate = setHoursFromDate;
      self._positionCalendar = positionCalendar;
      self.changeMonth = changeMonth;
      self.changeYear = changeYear;
      self.clear = clear;
      self.close = close;
      self._createElement = createElement;
      self.destroy = destroy;
      self.isEnabled = isEnabled;
      self.jumpToDate = jumpToDate;
      self.open = open;
      self.redraw = redraw;
      self.set = set;
      self.setDate = setDate;
      self.toggle = toggle;
      function setupHelperFunctions() {
        self.utils = {
          getDaysInMonth: function(month, yr) {
            if (month === void 0) {
              month = self.currentMonth;
            }
            if (yr === void 0) {
              yr = self.currentYear;
            }
            if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
              return 29;
            return self.l10n.daysInMonth[month];
          }
        };
      }
      function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
          build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
          if (self.config.enableTime) {
            setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : void 0);
          }
          updateValue(false);
        }
        setCalendarWidth();
        self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
          positionCalendar();
        }
        triggerEvent("onReady");
      }
      function bindToInstance(fn) {
        return fn.bind(self);
      }
      function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1)
          return;
        else if (config.noCalendar !== true) {
          window.requestAnimationFrame(function() {
            if (self.calendarContainer !== void 0) {
              self.calendarContainer.style.visibility = "hidden";
              self.calendarContainer.style.display = "block";
            }
            if (self.daysContainer !== void 0) {
              var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
              self.daysContainer.style.width = daysWidth + "px";
              self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
              self.calendarContainer.style.removeProperty("visibility");
              self.calendarContainer.style.removeProperty("display");
            }
          });
        }
      }
      function updateTime(e) {
        if (self.selectedDates.length === 0) {
          setDefaultTime();
        }
        if (e !== void 0 && e.type !== "blur") {
          timeWrapper(e);
        }
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
          self._debouncedChange();
        }
      }
      function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
      }
      function military2ampm(hour) {
        switch (hour % 24) {
          case 0:
          case 12:
            return 12;
          default:
            return hour % 12;
        }
      }
      function setHoursFromInputs() {
        if (self.hourElement === void 0 || self.minuteElement === void 0)
          return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
        if (self.amPM !== void 0) {
          hours = ampm2military(hours, self.amPM.textContent);
        }
        var limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
        var limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
        if (limitMaxHours) {
          var maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
          hours = Math.min(hours, maxTime.getHours());
          if (hours === maxTime.getHours())
            minutes = Math.min(minutes, maxTime.getMinutes());
          if (minutes === maxTime.getMinutes())
            seconds = Math.min(seconds, maxTime.getSeconds());
        }
        if (limitMinHours) {
          var minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
          hours = Math.max(hours, minTime.getHours());
          if (hours === minTime.getHours())
            minutes = Math.max(minutes, minTime.getMinutes());
          if (minutes === minTime.getMinutes())
            seconds = Math.max(seconds, minTime.getSeconds());
        }
        setHours(hours, minutes, seconds);
      }
      function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date)
          setHours(date.getHours(), date.getMinutes(), date.getSeconds());
      }
      function setDefaultHours() {
        var hours = self.config.defaultHour;
        var minutes = self.config.defaultMinute;
        var seconds = self.config.defaultSeconds;
        if (self.config.minDate !== void 0) {
          var minHr = self.config.minDate.getHours();
          var minMinutes = self.config.minDate.getMinutes();
          hours = Math.max(hours, minHr);
          if (hours === minHr)
            minutes = Math.max(minMinutes, minutes);
          if (hours === minHr && minutes === minMinutes)
            seconds = self.config.minDate.getSeconds();
        }
        if (self.config.maxDate !== void 0) {
          var maxHr = self.config.maxDate.getHours();
          var maxMinutes = self.config.maxDate.getMinutes();
          hours = Math.min(hours, maxHr);
          if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
          if (hours === maxHr && minutes === maxMinutes)
            seconds = self.config.maxDate.getSeconds();
        }
        setHours(hours, minutes, seconds);
      }
      function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== void 0) {
          self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
          return;
        self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== void 0)
          self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
        if (self.secondElement !== void 0)
          self.secondElement.value = pad(seconds);
      }
      function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);
        if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
          changeYear(year);
        }
      }
      function bind(element2, event, handler, options) {
        if (event instanceof Array)
          return event.forEach(function(ev) {
            return bind(element2, ev, handler, options);
          });
        if (element2 instanceof Array)
          return element2.forEach(function(el) {
            return bind(el, event, handler, options);
          });
        element2.addEventListener(event, handler, options);
        self._handlers.push({
          element: element2,
          event,
          handler,
          options
        });
      }
      function onClick(handler) {
        return function(evt) {
          evt.which === 1 && handler(evt);
        };
      }
      function triggerChange() {
        triggerEvent("onChange");
      }
      function bindEvents() {
        if (self.config.wrap) {
          ["open", "close", "toggle", "clear"].forEach(function(evt) {
            Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
              return bind(el, "click", self[evt]);
            });
          });
        }
        if (self.isMobile) {
          setupMobile();
          return;
        }
        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
          bind(self.daysContainer, "mouseover", function(e) {
            if (self.config.mode === "range")
              onMouseOver(e.target);
          });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static)
          bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== void 0)
          bind(window.document, "touchstart", documentClick);
        else
          bind(window.document, "mousedown", onClick(documentClick));
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "mousedown", onClick(self.open));
        }
        if (self.daysContainer !== void 0) {
          bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
          bind(self.monthNav, ["keyup", "increment"], onYearInput);
          bind(self.daysContainer, "mousedown", onClick(selectDate));
        }
        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
          var selText = function(e) {
            return e.target.select();
          };
          bind(self.timeContainer, ["increment"], updateTime);
          bind(self.timeContainer, "blur", updateTime, { capture: true });
          bind(self.timeContainer, "mousedown", onClick(timeIncrement));
          bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
          if (self.secondElement !== void 0)
            bind(self.secondElement, "focus", function() {
              return self.secondElement && self.secondElement.select();
            });
          if (self.amPM !== void 0) {
            bind(self.amPM, "mousedown", onClick(function(e) {
              updateTime(e);
              triggerChange();
            }));
          }
        }
      }
      function jumpToDate(jumpDate, triggerChange2) {
        var jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
          if (jumpTo !== void 0) {
            self.currentYear = jumpTo.getFullYear();
            self.currentMonth = jumpTo.getMonth();
          }
        } catch (e) {
          e.message = "Invalid date supplied: " + jumpTo;
          self.config.errorHandler(e);
        }
        if (triggerChange2 && self.currentYear !== oldYear) {
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }
        if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
          triggerEvent("onMonthChange");
        }
        self.redraw();
      }
      function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow"))
          incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
      }
      function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
        var event = createEvent2("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
      }
      function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
          fragment.appendChild(buildMonthNav());
          self.innerContainer = createElement("div", "flatpickr-innerContainer");
          if (self.config.weekNumbers) {
            var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
            self.innerContainer.appendChild(weekWrapper);
            self.weekNumbers = weekNumbers;
            self.weekWrapper = weekWrapper;
          }
          self.rContainer = createElement("div", "flatpickr-rContainer");
          self.rContainer.appendChild(buildWeekdays());
          if (!self.daysContainer) {
            self.daysContainer = createElement("div", "flatpickr-days");
            self.daysContainer.tabIndex = -1;
          }
          buildDays();
          self.rContainer.appendChild(self.daysContainer);
          self.innerContainer.appendChild(self.rContainer);
          fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
          fragment.appendChild(buildTime());
        }
        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate === true);
        toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
        if (self.config.inline || self.config.static) {
          self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
          if (self.config.inline) {
            if (!customAppend && self.element.parentNode)
              self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
            else if (self.config.appendTo !== void 0)
              self.config.appendTo.appendChild(self.calendarContainer);
          }
          if (self.config.static) {
            var wrapper = createElement("div", "flatpickr-wrapper");
            if (self.element.parentNode)
              self.element.parentNode.insertBefore(wrapper, self.element);
            wrapper.appendChild(self.element);
            if (self.altInput)
              wrapper.appendChild(self.altInput);
            wrapper.appendChild(self.calendarContainer);
          }
        }
        if (!self.config.static && !self.config.inline)
          (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
      }
      function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
          self.todayDateElem = dayElement;
          dayElement.classList.add("today");
          dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
          dayElement.tabIndex = -1;
          if (isDateSelected(date)) {
            dayElement.classList.add("selected");
            self.selectedDateElem = dayElement;
            if (self.config.mode === "range") {
              toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
              toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
              if (className === "nextMonthDay")
                dayElement.classList.add("inRange");
            }
          }
        } else {
          dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
          if (isDateInRange(date) && !isDateSelected(date))
            dayElement.classList.add("inRange");
        }
        if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
          self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
      }
      function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range")
          onMouseOver(targetNode);
      }
      function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for (var m = startMonth; m != endMonth; m += delta) {
          var month = self.daysContainer.children[m];
          var startIndex = delta > 0 ? 0 : month.children.length - 1;
          var endIndex = delta > 0 ? month.children.length : -1;
          for (var i = startIndex; i != endIndex; i += delta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
              return c;
          }
        }
        return void 0;
      }
      function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
          var month = self.daysContainer.children[m];
          var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
          var numMonthDays = month.children.length;
          for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta))
              return focusOnDayElem(c);
          }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return void 0;
      }
      function focusOnDay(current, offset) {
        var dayFocused = isInView(document.activeElement || document.body);
        var startElem = current !== void 0 ? current : dayFocused ? document.activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === void 0)
          return self._input.focus();
        if (!dayFocused)
          return focusOnDayElem(startElem);
        getNextAvailableDay(startElem, offset);
      }
      function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
          days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
          days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
          days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
      }
      function buildDays() {
        if (self.daysContainer === void 0) {
          return;
        }
        clearNode(self.daysContainer);
        if (self.weekNumbers)
          clearNode(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < self.config.showMonths; i++) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
          onMouseOver();
        }
      }
      function buildMonthSwitch() {
        if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
          return;
        var shouldBuildMonth = function(month2) {
          if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month2 < self.config.minDate.getMonth()) {
            return false;
          }
          return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month2 > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (var i = 0; i < 12; i++) {
          if (!shouldBuildMonth(i))
            continue;
          var month = createElement("option", "flatpickr-monthDropdown-month");
          month.value = new Date(self.currentYear, i).getMonth().toString();
          month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
          month.tabIndex = -1;
          if (self.currentMonth === i) {
            month.selected = true;
          }
          self.monthsDropdownContainer.appendChild(month);
        }
      }
      function buildMonth() {
        var container = createElement("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement;
        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
          monthElement = createElement("span", "cur-month");
        } else {
          self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
          bind(self.monthsDropdownContainer, "change", function(e) {
            var target = e.target;
            var selectedMonth = parseInt(target.value, 10);
            self.changeMonth(selectedMonth - self.currentMonth);
            triggerEvent("onMonthChange");
          });
          buildMonthSwitch();
          monthElement = self.monthsDropdownContainer;
        }
        var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
          yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
          yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
          yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
          container,
          yearElement,
          monthElement
        };
      }
      function buildMonths() {
        clearNode(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
          self.yearElements = [];
          self.monthElements = [];
        }
        for (var m = self.config.showMonths; m--; ) {
          var month = buildMonth();
          self.yearElements.push(month.yearElement);
          self.monthElements.push(month.monthElement);
          self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
      }
      function buildMonthNav() {
        self.monthNav = createElement("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
          get: function() {
            return self.__hidePrevMonthArrow;
          },
          set: function(bool) {
            if (self.__hidePrevMonthArrow !== bool) {
              toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
              self.__hidePrevMonthArrow = bool;
            }
          }
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
          get: function() {
            return self.__hideNextMonthArrow;
          },
          set: function(bool) {
            if (self.__hideNextMonthArrow !== bool) {
              toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
              self.__hideNextMonthArrow = bool;
            }
          }
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
      }
      function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
          self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour", {
          "aria-label": self.l10n.hourAriaLabel
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = createNumberInput("flatpickr-minute", {
          "aria-label": self.l10n.minuteAriaLabel
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
          self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
          self.timeContainer.classList.add("hasSeconds");
          var secondInput = createNumberInput("flatpickr-second");
          self.secondElement = secondInput.getElementsByTagName("input")[0];
          self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
          self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
          self.secondElement.setAttribute("min", "0");
          self.secondElement.setAttribute("max", "59");
          self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
          self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
          self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
          self.amPM.title = self.l10n.toggleTitle;
          self.amPM.tabIndex = -1;
          self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
      }
      function buildWeekdays() {
        if (!self.weekdayContainer)
          self.weekdayContainer = createElement("div", "flatpickr-weekdays");
        else
          clearNode(self.weekdayContainer);
        for (var i = self.config.showMonths; i--; ) {
          var container = createElement("div", "flatpickr-weekdaycontainer");
          self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
      }
      function updateWeekdays() {
        if (!self.weekdayContainer) {
          return;
        }
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.slice();
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
          weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }
        for (var i = self.config.showMonths; i--; ) {
          self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
        }
      }
      function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
          weekWrapper,
          weekNumbers
        };
      }
      function changeMonth(value, isOffset) {
        if (isOffset === void 0) {
          isOffset = true;
        }
        var delta = isOffset ? value : value - self.currentMonth;
        if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
          return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
          self.currentYear += self.currentMonth > 11 ? 1 : -1;
          self.currentMonth = (self.currentMonth + 12) % 12;
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
      }
      function clear(triggerChangeEvent, toInitial) {
        if (triggerChangeEvent === void 0) {
          triggerChangeEvent = true;
        }
        if (toInitial === void 0) {
          toInitial = true;
        }
        self.input.value = "";
        if (self.altInput !== void 0)
          self.altInput.value = "";
        if (self.mobileInput !== void 0)
          self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = void 0;
        if (toInitial === true) {
          self.currentYear = self._initialDate.getFullYear();
          self.currentMonth = self._initialDate.getMonth();
        }
        self.showTimeInput = false;
        if (self.config.enableTime === true) {
          setDefaultHours();
        }
        self.redraw();
        if (triggerChangeEvent)
          triggerEvent("onChange");
      }
      function close() {
        self.isOpen = false;
        if (!self.isMobile) {
          if (self.calendarContainer !== void 0) {
            self.calendarContainer.classList.remove("open");
          }
          if (self._input !== void 0) {
            self._input.classList.remove("active");
          }
        }
        triggerEvent("onClose");
      }
      function destroy() {
        if (self.config !== void 0)
          triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--; ) {
          var h2 = self._handlers[i];
          h2.element.removeEventListener(h2.event, h2.handler, h2.options);
        }
        self._handlers = [];
        if (self.mobileInput) {
          if (self.mobileInput.parentNode)
            self.mobileInput.parentNode.removeChild(self.mobileInput);
          self.mobileInput = void 0;
        } else if (self.calendarContainer && self.calendarContainer.parentNode) {
          if (self.config.static && self.calendarContainer.parentNode) {
            var wrapper = self.calendarContainer.parentNode;
            wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
            if (wrapper.parentNode) {
              while (wrapper.firstChild)
                wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
              wrapper.parentNode.removeChild(wrapper);
            }
          } else
            self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
          self.input.type = "text";
          if (self.altInput.parentNode)
            self.altInput.parentNode.removeChild(self.altInput);
          delete self.altInput;
        }
        if (self.input) {
          self.input.type = self.input._type;
          self.input.classList.remove("flatpickr-input");
          self.input.removeAttribute("readonly");
          self.input.value = "";
        }
        [
          "_showTimeInput",
          "latestSelectedDateObj",
          "_hideNextMonthArrow",
          "_hidePrevMonthArrow",
          "__hideNextMonthArrow",
          "__hidePrevMonthArrow",
          "isMobile",
          "isOpen",
          "selectedDateElem",
          "minDateHasTime",
          "maxDateHasTime",
          "days",
          "daysContainer",
          "_input",
          "_positionElement",
          "innerContainer",
          "rContainer",
          "monthNav",
          "todayDateElem",
          "calendarContainer",
          "weekdayContainer",
          "prevMonthNav",
          "nextMonthNav",
          "monthsDropdownContainer",
          "currentMonthElement",
          "currentYearElement",
          "navigationCurrentMonth",
          "selectedDateElem",
          "config"
        ].forEach(function(k) {
          try {
            delete self[k];
          } catch (_) {
          }
        });
      }
      function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem))
          return true;
        return self.calendarContainer.contains(elem);
      }
      function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
          var eventTarget_1 = getEventTarget(e);
          var isCalendarElement = isCalendarElem(eventTarget_1);
          var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
          var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
          var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
            return elem.contains(eventTarget_1);
          });
          if (lostFocus && isIgnored) {
            if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
              updateTime();
            }
            self.close();
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
              self.clear(false);
              self.redraw();
            }
          }
        }
      }
      function changeYear(newYear) {
        if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
          return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
          self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
          self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
          self.redraw();
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }
      }
      function isEnabled(date, timeless) {
        if (timeless === void 0) {
          timeless = true;
        }
        var dateToCheck = self.parseDate(date, void 0, timeless);
        if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0)
          return false;
        if (self.config.enable.length === 0 && self.config.disable.length === 0)
          return true;
        if (dateToCheck === void 0)
          return false;
        var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
          d = array[i];
          if (typeof d === "function" && d(dateToCheck))
            return bool;
          else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
            return bool;
          else if (typeof d === "string" && dateToCheck !== void 0) {
            var parsed = self.parseDate(d, void 0, true);
            return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
          } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
            return bool;
        }
        return !bool;
      }
      function isInView(elem) {
        if (self.daysContainer !== void 0)
          return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
        return false;
      }
      function onKeyDown(e) {
        var isInput = e.target === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
          if (allowInput) {
            self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
            return e.target.blur();
          } else {
            self.open();
          }
        } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
          var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);
          switch (e.keyCode) {
            case 13:
              if (isTimeObj) {
                e.preventDefault();
                updateTime();
                focusAndClose();
              } else
                selectDate(e);
              break;
            case 27:
              e.preventDefault();
              focusAndClose();
              break;
            case 8:
            case 46:
              if (isInput && !self.config.allowInput) {
                e.preventDefault();
                self.clear();
              }
              break;
            case 37:
            case 39:
              if (!isTimeObj && !isInput) {
                e.preventDefault();
                if (self.daysContainer !== void 0 && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
                  var delta_1 = e.keyCode === 39 ? 1 : -1;
                  if (!e.ctrlKey)
                    focusOnDay(void 0, delta_1);
                  else {
                    e.stopPropagation();
                    changeMonth(delta_1);
                    focusOnDay(getFirstAvailableDay(1), 0);
                  }
                }
              } else if (self.hourElement)
                self.hourElement.focus();
              break;
            case 38:
            case 40:
              e.preventDefault();
              var delta = e.keyCode === 40 ? 1 : -1;
              if (self.daysContainer && e.target.$i !== void 0 || e.target === self.input || e.target === self.altInput) {
                if (e.ctrlKey) {
                  e.stopPropagation();
                  changeYear(self.currentYear - delta);
                  focusOnDay(getFirstAvailableDay(1), 0);
                } else if (!isTimeObj)
                  focusOnDay(void 0, delta * 7);
              } else if (e.target === self.currentYearElement) {
                changeYear(self.currentYear - delta);
              } else if (self.config.enableTime) {
                if (!isTimeObj && self.hourElement)
                  self.hourElement.focus();
                updateTime(e);
                self._debouncedChange();
              }
              break;
            case 9:
              if (isTimeObj) {
                var elems = [
                  self.hourElement,
                  self.minuteElement,
                  self.secondElement,
                  self.amPM
                ].concat(self.pluginElements).filter(function(x) {
                  return x;
                });
                var i = elems.indexOf(e.target);
                if (i !== -1) {
                  var target = elems[i + (e.shiftKey ? -1 : 1)];
                  e.preventDefault();
                  (target || self._input).focus();
                }
              } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(e.target) && e.shiftKey) {
                e.preventDefault();
                self._input.focus();
              }
              break;
          }
        }
        if (self.amPM !== void 0 && e.target === self.amPM) {
          switch (e.key) {
            case self.l10n.amPM[0].charAt(0):
            case self.l10n.amPM[0].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[0];
              setHoursFromInputs();
              updateValue();
              break;
            case self.l10n.amPM[1].charAt(0):
            case self.l10n.amPM[1].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[1];
              setHoursFromInputs();
              updateValue();
              break;
          }
        }
        if (isInput || isCalendarElem(e.target)) {
          triggerEvent("onKeyDown", e);
        }
      }
      function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled")))
          return;
        var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0, maxRange = 0;
        for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
          if (!isEnabled(new Date(t), true)) {
            containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
            if (t < initialDate && (!minRange || t > minRange))
              minRange = t;
            else if (t > initialDate && (!maxRange || t < maxRange))
              maxRange = t;
          }
        }
        for (var m = 0; m < self.config.showMonths; m++) {
          var month = self.daysContainer.children[m];
          var _loop_1 = function(i2, l2) {
            var dayElem = month.children[i2], date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
            if (outOfRange) {
              dayElem.classList.add("notAllowed");
              ["inRange", "startRange", "endRange"].forEach(function(c) {
                dayElem.classList.remove(c);
              });
              return "continue";
            } else if (containsDisabled && !outOfRange)
              return "continue";
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c) {
              dayElem.classList.remove(c);
            });
            if (elem !== void 0) {
              elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
              if (initialDate < hoverDate && timestamp === initialDate)
                dayElem.classList.add("startRange");
              else if (initialDate > hoverDate && timestamp === initialDate)
                dayElem.classList.add("endRange");
              if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
                dayElem.classList.add("inRange");
            }
          };
          for (var i = 0, l = month.children.length; i < l; i++) {
            _loop_1(i, l);
          }
        }
      }
      function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
          positionCalendar();
      }
      function setDefaultTime() {
        self.setDate(self.config.minDate !== void 0 ? new Date(self.config.minDate.getTime()) : new Date(), true);
        setDefaultHours();
        updateValue();
      }
      function open(e, positionElement) {
        if (positionElement === void 0) {
          positionElement = self._positionElement;
        }
        if (self.isMobile === true) {
          if (e) {
            e.preventDefault();
            e.target && e.target.blur();
          }
          if (self.mobileInput !== void 0) {
            self.mobileInput.focus();
            self.mobileInput.click();
          }
          triggerEvent("onOpen");
          return;
        }
        if (self._input.disabled || self.config.inline)
          return;
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
          self.calendarContainer.classList.add("open");
          self._input.classList.add("active");
          triggerEvent("onOpen");
          positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
          if (self.selectedDates.length === 0) {
            setDefaultTime();
          }
          if (self.config.allowInput === false && (e === void 0 || !self.timeContainer.contains(e.relatedTarget))) {
            setTimeout(function() {
              return self.hourElement.select();
            }, 50);
          }
        }
      }
      function minMaxDateSetter(type) {
        return function(date) {
          var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
          var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
          if (dateObj !== void 0) {
            self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
          }
          if (self.selectedDates) {
            self.selectedDates = self.selectedDates.filter(function(d) {
              return isEnabled(d);
            });
            if (!self.selectedDates.length && type === "min")
              setHoursFromDate(dateObj);
            updateValue();
          }
          if (self.daysContainer) {
            redraw();
            if (dateObj !== void 0)
              self.currentYearElement[type] = dateObj.getFullYear().toString();
            else
              self.currentYearElement.removeAttribute(type);
            self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
          }
        };
      }
      function parseConfig() {
        var boolOpts = [
          "wrap",
          "weekNumbers",
          "allowInput",
          "clickOpens",
          "time_24hr",
          "enableTime",
          "noCalendar",
          "altInput",
          "shorthandCurrentMonth",
          "inline",
          "static",
          "enableSeconds",
          "disableMobile"
        ];
        var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats2 = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
          get: function() {
            return self.config._enable;
          },
          set: function(dates) {
            self.config._enable = parseDateRules(dates);
          }
        });
        Object.defineProperty(self.config, "disable", {
          get: function() {
            return self.config._disable;
          },
          set: function(dates) {
            self.config._disable = parseDateRules(dates);
          }
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
          var defaultDateFormat = flatpickr2.defaultConfig.dateFormat || defaults.dateFormat;
          formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
          var defaultAltFormat = flatpickr2.defaultConfig.altFormat || defaults.altFormat;
          formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        if (!userConfig.altInputClass) {
          self.config.altInputClass = self.input.className + " " + self.config.altInputClass;
        }
        Object.defineProperty(self.config, "minDate", {
          get: function() {
            return self.config._minDate;
          },
          set: minMaxDateSetter("min")
        });
        Object.defineProperty(self.config, "maxDate", {
          get: function() {
            return self.config._maxDate;
          },
          set: minMaxDateSetter("max")
        });
        var minMaxTimeSetter = function(type) {
          return function(val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
          };
        };
        Object.defineProperty(self.config, "minTime", {
          get: function() {
            return self.config._minTime;
          },
          set: minMaxTimeSetter("min")
        });
        Object.defineProperty(self.config, "maxTime", {
          get: function() {
            return self.config._maxTime;
          },
          set: minMaxTimeSetter("max")
        });
        if (userConfig.mode === "time") {
          self.config.noCalendar = true;
          self.config.enableTime = true;
        }
        Object.assign(self.config, formats2, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
          self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        HOOKS.filter(function(hook) {
          return self.config[hook] !== void 0;
        }).forEach(function(hook) {
          self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var i = 0; i < self.config.plugins.length; i++) {
          var pluginConf = self.config.plugins[i](self) || {};
          for (var key in pluginConf) {
            if (HOOKS.indexOf(key) > -1) {
              self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
            } else if (typeof userConfig[key] === "undefined")
              self.config[key] = pluginConf[key];
          }
        }
        triggerEvent("onParseConfig");
      }
      function setupLocale() {
        if (typeof self.config.locale !== "object" && typeof flatpickr2.l10ns[self.config.locale] === "undefined")
          self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = __assign({}, flatpickr2.l10ns["default"], typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr2.l10ns[self.config.locale] : void 0);
        tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === void 0 && flatpickr2.defaultConfig.time_24hr === void 0) {
          self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = createDateFormatter(self);
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
      }
      function positionCalendar(customPositionElement) {
        if (self.calendarContainer === void 0)
          return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function(acc, child) {
          return acc + child.offsetHeight;
        }, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
        var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
          return;
        var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
        var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
          return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
          self.calendarContainer.style.left = left + "px";
          self.calendarContainer.style.right = "auto";
        } else if (!centerMost) {
          self.calendarContainer.style.left = "auto";
          self.calendarContainer.style.right = right + "px";
        } else {
          var doc = document.styleSheets[0];
          if (doc === void 0)
            return;
          var bodyWidth = window.document.body.offsetWidth;
          var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
          var centerBefore = ".flatpickr-calendar.centerMost:before";
          var centerAfter = ".flatpickr-calendar.centerMost:after";
          var centerIndex = doc.cssRules.length;
          var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
          toggleClass(self.calendarContainer, "rightMost", false);
          toggleClass(self.calendarContainer, "centerMost", true);
          doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
          self.calendarContainer.style.left = centerLeft + "px";
          self.calendarContainer.style.right = "auto";
        }
      }
      function redraw() {
        if (self.config.noCalendar || self.isMobile)
          return;
        updateNavigationCurrentMonth();
        buildDays();
      }
      function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
          setTimeout(self.close, 0);
        } else {
          self.close();
        }
      }
      function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function(day) {
          return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
        };
        var t = findParent(e.target, isSelectable);
        if (t === void 0)
          return;
        var target = t;
        var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
          self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
          var selectedIndex = isDateSelected(selectedDate);
          if (selectedIndex)
            self.selectedDates.splice(parseInt(selectedIndex), 1);
          else
            self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
          if (self.selectedDates.length === 2) {
            self.clear(false, false);
          }
          self.latestSelectedDateObj = selectedDate;
          self.selectedDates.push(selectedDate);
          if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
            self.selectedDates.sort(function(a, b) {
              return a.getTime() - b.getTime();
            });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
          var isNewYear = self.currentYear !== selectedDate.getFullYear();
          self.currentYear = selectedDate.getFullYear();
          self.currentMonth = selectedDate.getMonth();
          if (isNewYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
          }
          triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (self.config.enableTime)
          setTimeout(function() {
            return self.showTimeInput = true;
          }, 50);
        if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1)
          focusOnDayElem(target);
        else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) {
          self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== void 0)
          self.hourElement !== void 0 && self.hourElement.focus();
        if (self.config.closeOnSelect) {
          var single = self.config.mode === "single" && !self.config.enableTime;
          var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
          if (single || range) {
            focusAndClose();
          }
        }
        triggerChange();
      }
      var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate]
      };
      function set(option, value) {
        if (option !== null && typeof option === "object") {
          Object.assign(self.config, option);
          for (var key in option) {
            if (CALLBACKS[key] !== void 0)
              CALLBACKS[key].forEach(function(x) {
                return x();
              });
          }
        } else {
          self.config[option] = value;
          if (CALLBACKS[option] !== void 0)
            CALLBACKS[option].forEach(function(x) {
              return x();
            });
          else if (HOOKS.indexOf(option) > -1)
            self.config[option] = arrayify(value);
        }
        self.redraw();
        updateValue(false);
      }
      function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
          dates = inputDate.map(function(d) {
            return self.parseDate(d, format);
          });
        else if (inputDate instanceof Date || typeof inputDate === "number")
          dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
          switch (self.config.mode) {
            case "single":
            case "time":
              dates = [self.parseDate(inputDate, format)];
              break;
            case "multiple":
              dates = inputDate.split(self.config.conjunction).map(function(date) {
                return self.parseDate(date, format);
              });
              break;
            case "range":
              dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
                return self.parseDate(date, format);
              });
              break;
          }
        } else
          self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = dates.filter(function(d) {
          return d instanceof Date && isEnabled(d, false);
        });
        if (self.config.mode === "range")
          self.selectedDates.sort(function(a, b) {
            return a.getTime() - b.getTime();
          });
      }
      function setDate(date, triggerChange2, format) {
        if (triggerChange2 === void 0) {
          triggerChange2 = false;
        }
        if (format === void 0) {
          format = self.config.dateFormat;
        }
        if (date !== 0 && !date || date instanceof Array && date.length === 0)
          return self.clear(triggerChange2);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
          self.clear(false);
        }
        updateValue(triggerChange2);
        if (triggerChange2)
          triggerEvent("onChange");
      }
      function parseDateRules(arr) {
        return arr.slice().map(function(rule) {
          if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
            return self.parseDate(rule, void 0, true);
          } else if (rule && typeof rule === "object" && rule.from && rule.to)
            return {
              from: self.parseDate(rule.from, void 0),
              to: self.parseDate(rule.to, void 0)
            };
          return rule;
        }).filter(function(x) {
          return x;
        });
      }
      function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
        if (preloadedDate)
          setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
          self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== void 0)
          self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== void 0)
          self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
          get: function() {
            return self._showTimeInput;
          },
          set: function(bool) {
            self._showTimeInput = bool;
            if (self.calendarContainer)
              toggleClass(self.calendarContainer, "showTimeInput", bool);
            self.isOpen && positionCalendar();
          }
        });
      }
      function setupInputs() {
        self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
        if (!self.input) {
          self.config.errorHandler(new Error("Invalid input element specified"));
          return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
          self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
          self._input = self.altInput;
          self.altInput.placeholder = self.input.placeholder;
          self.altInput.disabled = self.input.disabled;
          self.altInput.required = self.input.required;
          self.altInput.tabIndex = self.input.tabIndex;
          self.altInput.type = "text";
          self.input.setAttribute("type", "hidden");
          if (!self.config.static && self.input.parentNode)
            self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
          self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
      }
      function setupMobile() {
        var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
        if (self.selectedDates.length > 0) {
          self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
          self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
          self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== void 0)
          self.altInput.type = "hidden";
        try {
          if (self.input.parentNode)
            self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (_a) {
        }
        bind(self.mobileInput, "change", function(e) {
          self.setDate(e.target.value, false, self.mobileFormatStr);
          triggerEvent("onChange");
          triggerEvent("onClose");
        });
      }
      function toggle(e) {
        if (self.isOpen === true)
          return self.close();
        self.open(e);
      }
      function triggerEvent(event, data) {
        if (self.config === void 0)
          return;
        var hooks = self.config[event];
        if (hooks !== void 0 && hooks.length > 0) {
          for (var i = 0; hooks[i] && i < hooks.length; i++)
            hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
          self.input.dispatchEvent(createEvent2("change"));
          self.input.dispatchEvent(createEvent2("input"));
        }
      }
      function createEvent2(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
      }
      function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
          if (compareDates(self.selectedDates[i], date) === 0)
            return "" + i;
        }
        return false;
      }
      function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
          return false;
        return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
      }
      function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
          return;
        self.yearElements.forEach(function(yearElement, i) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
            self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
          } else {
            self.monthsDropdownContainer.value = d.getMonth().toString();
          }
          yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
      }
      function getDateStr(format) {
        return self.selectedDates.map(function(dObj) {
          return self.formatDate(dObj, format);
        }).filter(function(d, i, arr) {
          return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
        }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
      }
      function updateValue(triggerChange2) {
        if (triggerChange2 === void 0) {
          triggerChange2 = true;
        }
        if (self.mobileInput !== void 0 && self.mobileFormatStr) {
          self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== void 0) {
          self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange2 !== false)
          triggerEvent("onValueUpdate");
      }
      function onMonthNavClick(e) {
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);
        if (isPrevMonth || isNextMonth) {
          changeMonth(isPrevMonth ? -1 : 1);
        } else if (self.yearElements.indexOf(e.target) >= 0) {
          e.target.select();
        } else if (e.target.classList.contains("arrowUp")) {
          self.changeYear(self.currentYear + 1);
        } else if (e.target.classList.contains("arrowDown")) {
          self.changeYear(self.currentYear - 1);
        }
      }
      function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", input = e.target;
        if (self.amPM !== void 0 && e.target === self.amPM) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }
        var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
          var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
          if (newValue < min) {
            newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
            if (isMinuteElem)
              incrementNumInput(void 0, -1, self.hourElement);
          } else if (newValue > max) {
            newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
            if (isMinuteElem)
              incrementNumInput(void 0, 1, self.hourElement);
          }
          if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
            self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
          }
          input.value = pad(newValue);
        }
      }
      init();
      return self;
    }
    function _flatpickr(nodeList, config) {
      var nodes = Array.prototype.slice.call(nodeList).filter(function(x) {
        return x instanceof HTMLElement;
      });
      var instances = [];
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
          if (node.getAttribute("data-fp-omit") !== null)
            continue;
          if (node._flatpickr !== void 0) {
            node._flatpickr.destroy();
            node._flatpickr = void 0;
          }
          node._flatpickr = FlatpickrInstance(node, config || {});
          instances.push(node._flatpickr);
        } catch (e) {
          console.error(e);
        }
      }
      return instances.length === 1 ? instances[0] : instances;
    }
    if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
      HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
        return _flatpickr(this, config);
      };
      HTMLElement.prototype.flatpickr = function(config) {
        return _flatpickr([this], config);
      };
    }
    var flatpickr2 = function(selector, config) {
      if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
      } else if (selector instanceof Node) {
        return _flatpickr([selector], config);
      } else {
        return _flatpickr(selector, config);
      }
    };
    flatpickr2.defaultConfig = {};
    flatpickr2.l10ns = {
      en: __assign({}, english),
      "default": __assign({}, english)
    };
    flatpickr2.localize = function(l10n) {
      flatpickr2.l10ns["default"] = __assign({}, flatpickr2.l10ns["default"], l10n);
    };
    flatpickr2.setDefaults = function(config) {
      flatpickr2.defaultConfig = __assign({}, flatpickr2.defaultConfig, config);
    };
    flatpickr2.parseDate = createDateParser({});
    flatpickr2.formatDate = createDateFormatter({});
    flatpickr2.compareDates = compareDates;
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
      jQuery.fn.flatpickr = function(config) {
        return _flatpickr(this, config);
      };
    }
    Date.prototype.fp_incr = function(days) {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
      window.flatpickr = flatpickr2;
    }
    return flatpickr2;
  });
});
var de = createCommonjsModule(function(module, exports) {
  (function(global, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
      l10ns: {}
    };
    var German = {
      weekdays: {
        shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        longhand: [
          "Sonntag",
          "Montag",
          "Dienstag",
          "Mittwoch",
          "Donnerstag",
          "Freitag",
          "Samstag"
        ]
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "M\xE4r",
          "Apr",
          "Mai",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Okt",
          "Nov",
          "Dez"
        ],
        longhand: [
          "Januar",
          "Februar",
          "M\xE4rz",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Dezember"
        ]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "KW",
      rangeSeparator: " bis ",
      scrollTitle: "Zum \xC4ndern scrollen",
      toggleTitle: "Zum Umschalten klicken",
      time_24hr: true
    };
    fp.l10ns.de = German;
    var de2 = fp.l10ns;
    exports2.German = German;
    exports2.default = de2;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
});
var _default = createCommonjsModule(function(module, exports) {
  (function(global, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    var english = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ]
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        longhand: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
          return "th";
        switch (s % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year",
      hourAriaLabel: "Hour",
      minuteAriaLabel: "Minute",
      time_24hr: false
    };
    exports2.default = english;
    exports2.english = english;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
});
const datepickerLocales = {
  de: de.German,
  en: _default.english
};
const defaultLang = "de";
const isLanguageSupported = (lang) => {
  return lang in datepickerLocales;
};
const getDatepickerLocale = (el) => {
  const closestElement = el.closest("[lang]");
  const lang = closestElement ? closestElement.lang : defaultLang;
  if (!isLanguageSupported(lang)) {
    console.warn(`Language "${lang}" is not supported. Using "${defaultLang}" instead.`);
    return datepickerLocales[defaultLang];
  }
  return datepickerLocales[lang];
};
const createDatePickerOptions = ({ dateFormat, defaultDate, minDate, maxDate, mode, static: staticVal }) => ({
  defaultDate,
  dateFormat,
  minDate,
  maxDate,
  mode,
  "static": staticVal
});
var monthSelect = createCommonjsModule(function(module, exports) {
  (function(global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
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
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var monthToStr = function(monthNumber, shorthand, locale) {
      return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
    };
    var defaultConfig = {
      shorthand: false,
      dateFormat: "F Y",
      altFormat: "F Y",
      theme: "light"
    };
    function monthSelectPlugin(pluginConfig) {
      var config = __assign({}, defaultConfig, pluginConfig);
      return function(fp) {
        fp.config.dateFormat = config.dateFormat;
        fp.config.altFormat = config.altFormat;
        var self = { monthsContainer: null };
        function clearUnnecessaryDOMElements() {
          if (!fp.rContainer || !fp.daysContainer || !fp.weekdayContainer)
            return;
          fp.rContainer.removeChild(fp.daysContainer);
          fp.rContainer.removeChild(fp.weekdayContainer);
          for (var index = 0; index < fp.monthElements.length; index++) {
            var element = fp.monthElements[index];
            if (!element.parentNode)
              continue;
            element.parentNode.removeChild(element);
          }
        }
        function addListeners() {
          fp._bind(fp.prevMonthNav, "click", function() {
            fp.currentYear -= 1;
            selectYear();
          });
          fp._bind(fp.nextMonthNav, "mousedown", function() {
            fp.currentYear += 1;
            selectYear();
          });
        }
        function addMonths() {
          if (!fp.rContainer)
            return;
          self.monthsContainer = fp._createElement("div", "flatpickr-monthSelect-months");
          self.monthsContainer.tabIndex = -1;
          fp.calendarContainer.classList.add("flatpickr-monthSelect-theme-" + config.theme);
          for (var i = 0; i < 12; i++) {
            var month = fp._createElement("span", "flatpickr-monthSelect-month");
            month.dateObj = new Date(fp.currentYear, i);
            month.$i = i;
            month.textContent = monthToStr(i, config.shorthand, fp.l10n);
            month.tabIndex = -1;
            month.addEventListener("click", selectMonth);
            self.monthsContainer.appendChild(month);
            if (fp.config.minDate && month.dateObj < fp.config.minDate || fp.config.maxDate && month.dateObj > fp.config.maxDate) {
              month.classList.add("disabled");
            }
          }
          fp.rContainer.appendChild(self.monthsContainer);
        }
        function setCurrentlySelected() {
          if (!fp.rContainer)
            return;
          var currentlySelected = fp.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected");
          for (var index = 0; index < currentlySelected.length; index++) {
            currentlySelected[index].classList.remove("selected");
          }
          var month = fp.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child(" + (fp.currentMonth + 1) + ")");
          if (month) {
            month.classList.add("selected");
          }
        }
        function selectYear() {
          var selectedDate = fp.selectedDates[0];
          if (selectedDate) {
            selectedDate = new Date(selectedDate);
            selectedDate.setFullYear(fp.currentYear);
            if (fp.config.minDate && selectedDate < fp.config.minDate) {
              selectedDate = fp.config.minDate;
            }
            if (fp.config.maxDate && selectedDate > fp.config.maxDate) {
              selectedDate = fp.config.maxDate;
            }
            fp.currentYear = selectedDate.getFullYear();
            fp.currentYearElement.value = String(fp.currentYear);
            setCurrentlySelected();
          }
          if (fp.rContainer) {
            var months = fp.rContainer.querySelectorAll(".flatpickr-monthSelect-month");
            months.forEach(function(month) {
              month.dateObj.setFullYear(fp.currentYear);
              if (fp.config.minDate && month.dateObj < fp.config.minDate || fp.config.maxDate && month.dateObj > fp.config.maxDate) {
                month.classList.add("disabled");
              } else {
                month.classList.remove("disabled");
              }
            });
          }
        }
        function selectMonth(e) {
          e.preventDefault();
          e.stopPropagation();
          if (e.target instanceof Element && !e.target.classList.contains("disabled")) {
            setMonth(e.target.dateObj);
            fp.close();
          }
        }
        function setMonth(date) {
          var selectedDate = new Date(date);
          selectedDate.setFullYear(fp.currentYear);
          fp.currentMonth = selectedDate.getMonth();
          fp.setDate(selectedDate, true);
          setCurrentlySelected();
        }
        var shifts = {
          37: -1,
          39: 1,
          40: 3,
          38: -3
        };
        function onKeyDown(_, __, ___, e) {
          var shouldMove = shifts[e.keyCode] !== void 0;
          if (!shouldMove && e.keyCode !== 13) {
            return;
          }
          if (!fp.rContainer || !self.monthsContainer)
            return;
          var currentlySelected = fp.rContainer.querySelector(".flatpickr-monthSelect-month.selected");
          var index = Array.prototype.indexOf.call(self.monthsContainer.children, document.activeElement);
          if (index === -1) {
            var target = currentlySelected || self.monthsContainer.firstElementChild;
            target.focus();
            index = target.$i;
          }
          if (shouldMove) {
            self.monthsContainer.children[(12 + index + shifts[e.keyCode]) % 12].focus();
          } else if (e.keyCode === 13 && self.monthsContainer.contains(document.activeElement)) {
            setMonth(document.activeElement.dateObj);
          }
        }
        function destroyPluginInstance() {
          if (self.monthsContainer !== null) {
            var months = self.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month");
            for (var index = 0; index < months.length; index++) {
              months[index].removeEventListener("click", selectMonth);
            }
          }
        }
        return {
          onParseConfig: function() {
            fp.config.mode = "single";
            fp.config.enableTime = false;
          },
          onValueUpdate: setCurrentlySelected,
          onKeyDown,
          onReady: [
            clearUnnecessaryDOMElements,
            addListeners,
            addMonths,
            setCurrentlySelected,
            function() {
              fp.loadedPlugins.push("monthSelect");
            }
          ],
          onDestroy: destroyPluginInstance
        };
      };
    }
    return monthSelectPlugin;
  });
});
const monthChangeHandler = (instance, yearOffset, onValueChange) => {
  const currentDate = instance.selectedDates[0];
  if (!currentDate || instance.selectedDates.length !== 1) {
    return;
  }
  const formattedDate = changeYearByOne(currentDate, instance.config.dateFormat, yearOffset);
  onValueChange(formattedDate);
};
const changeYearByOne = (value, format, yearOffset) => {
  const year = value.getFullYear();
  const month = value.getMonth();
  const day = value.getDate();
  const newYear = year + yearOffset;
  const newDate = new Date(newYear, month, day);
  return flatpickr.formatDate(newDate, format);
};
const monthChangePrevHandler = (instance, onValueChange) => monthChangeHandler(instance, -1, onValueChange);
const monthChangeNextHandler = (instance, onValueChange) => monthChangeHandler(instance, 1, onValueChange);
const createMonthPickerOptions = ({ minDate, maxDate, defaultDate, dateFormat, onValueChange, static: staticVal }) => {
  if (!onValueChange) {
    throw new Error(`No 'onValueChange' function passed to the MonthPicker. This should not happen.`);
  }
  return {
    plugins: [
      monthSelect({
        dateFormat: dateFormat === "d-m-Y" ? "m.Y" : dateFormat
      })
    ],
    maxDate,
    minDate,
    defaultDate,
    static: staticVal,
    onReady: (_, __, instance) => {
      instance.prevMonthNav.addEventListener("click", () => monthChangePrevHandler(instance, onValueChange));
      instance.nextMonthNav.addEventListener("click", () => monthChangeNextHandler(instance, onValueChange));
    },
    onDestroy: (_, __, instance) => {
      instance.prevMonthNav.removeEventListener("click", () => monthChangePrevHandler(instance, onValueChange));
      instance.nextMonthNav.removeEventListener("click", () => monthChangeNextHandler(instance, onValueChange));
    }
  };
};
const createTimePickerOptions = ({ defaultHour, defaultMinute, enableTime, time_24hr, minuteIncrement, hourIncrement, noCalendar, static: staticVal }) => ({
  defaultHour,
  defaultMinute,
  enableTime,
  time_24hr,
  minuteIncrement,
  hourIncrement,
  noCalendar,
  "static": staticVal
});
const PickerTypes = {
  Date: "date",
  Month: "month",
  Time: "time",
  DateTime: "datetime"
};
const createPicker = (type, options) => {
  switch (type) {
    case PickerTypes.Date:
      return createDatePickerOptions(options);
    case PickerTypes.Time:
      return createTimePickerOptions(Object.assign(Object.assign({}, options), { noCalendar: true }));
    case PickerTypes.DateTime:
      return Object.assign(Object.assign({}, createDatePickerOptions(options)), createTimePickerOptions(options));
    case PickerTypes.Month:
      return createMonthPickerOptions(options);
  }
};
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}
function isEqual(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}
const NUMBERS_WITH_SPECIAL_CHARS = /(\d[^a-z]+)/g;
class Validator {
  constructor({ disabled, dateFormat, isRanged, minDate, maxDate }) {
    this.validate = (value) => {
      if (this._isDisabled) {
        return true;
      }
      if (!value) {
        return true;
      }
      if (!this.validateFormat(value)) {
        return false;
      }
      if (this._minDate && !this.validateMin(value)) {
        return false;
      }
      if (this._maxDate && !this.validateMax(value)) {
        return false;
      }
      if (this._isRanged && !this.validateRange(value)) {
        return false;
      }
      return true;
    };
    this.validateMin = (value) => this._isRanged ? this.validateMinRange(value) : this.validateMinSingle(value);
    this.validateMinSingle = (value) => {
      const parsedDate = this.parseDate(value);
      return isEqual(parsedDate, this._minDate) || isAfter(parsedDate, this._minDate);
    };
    this.validateMinRange = (value) => {
      return !Validator.convertToRangeArray(value).map(this.validateMinSingle).includes(false);
    };
    this.validateMax = (value) => this._isRanged ? this.validateMaxRange(value) : this.validateMaxSingle(value);
    this.validateMaxSingle = (value) => {
      const parsedDate = this.parseDate(value);
      return isEqual(parsedDate, this._maxDate) || isBefore(parsedDate, this._maxDate);
    };
    this.validateMaxRange = (value) => {
      return !Validator.convertToRangeArray(value).map(this.validateMaxSingle).includes(false);
    };
    this.validateFormat = (value) => this._isRanged ? this.validateFormatRange(value) : this.validateFormatSingle(value);
    this.validateFormatSingle = (value) => {
      try {
        const parsedDate = this.parseDate(value);
        const formattedDate = flatpickr.formatDate(parsedDate, this._dateFormat);
        return formattedDate == value;
      } catch (_) {
      }
    };
    this.validateFormatRange = (value) => {
      return !Validator.convertToRangeArray(value).map(this.validateFormatSingle).includes(false);
    };
    this.parseDate = (value) => {
      const parsedDate = flatpickr.parseDate(value, this._dateFormat);
      if (!parsedDate) {
        throw new Error(`Could not parse Date ${value}`);
      }
      return parsedDate;
    };
    this.validateRange = (value) => {
      const dates = Validator.convertToRangeArray(value).map((date) => this.parseDate(date));
      if (dates.length <= 1) {
        return true;
      }
      return dates[1] >= dates[0];
    };
    this._isDisabled = disabled;
    this._dateFormat = dateFormat;
    this._isRanged = isRanged;
    this.minDate = minDate;
    this.maxDate = maxDate;
  }
  set isDisabled(value) {
    this._isDisabled = value;
  }
  set dateFormat(value) {
    this._dateFormat = value;
  }
  set minDate(value) {
    if (!value) {
      this._minDate = void 0;
      return;
    }
    try {
      this._minDate = this.parseDate(value);
    } catch (_) {
      throw new Error(`Minimum date (${value}) could not be parsed. Make sure to provide a date in the following format: ${this._dateFormat}`);
    }
  }
  set maxDate(value) {
    if (!value) {
      this._maxDate = void 0;
      return;
    }
    try {
      this._maxDate = this.parseDate(value);
    } catch (_) {
      throw new Error(`Maximum date (${value}) could not be parsed. Make sure to provide a date in the following format: ${this._dateFormat}`);
    }
  }
  set isRanged(value) {
    this._isRanged = value;
  }
}
Validator.convertToRangeArray = (value) => value.match(NUMBERS_WITH_SPECIAL_CHARS).map((match) => match.trim());
const inoDatepickerCss = '.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, 0.08);box-shadow:1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, 0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:"";height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.rightMost:after{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0, 0, 0, 0.9);fill:rgba(0, 0, 0, 0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0, 0, 0, 0.9);fill:rgba(0, 0, 0, 0.9)}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0;}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0;}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill 0.1s;transition:fill 0.1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57, 57, 57, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0, 0, 0, 0.1)}.numInputWrapper span:active{background:rgba(0, 0, 0, 0.2)}.numInputWrapper span:after{display:block;content:"";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57, 57, 57, 0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57, 57, 57, 0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0, 0, 0, 0.5)}.numInputWrapper:hover{background:rgba(0, 0, 0, 0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:0.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0, 0, 0, 0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0, 0, 0, 0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0, 0, 0, 0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 0.5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0, 0, 0, 0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 0.5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0, 0, 0, 0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0, 0, 0, 0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57, 57, 57, 0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57, 57, 57, 0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7, 5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7, 5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57, 57, 57, 0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:"";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.flatpickr-monthSelect-months{margin:10px 1px 3px 1px;flex-wrap:wrap}.flatpickr-monthSelect-month{background:none;border:0;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;display:inline-block;font-weight:400;margin:0.5px;justify-content:center;padding:10px;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;text-align:center;width:33%}.flatpickr-monthSelect-month.disabled{color:#eee}.flatpickr-monthSelect-month.disabled:hover,.flatpickr-monthSelect-month.disabled:focus{cursor:not-allowed;background:none !important}.flatpickr-monthSelect-theme-dark{background:#3f4458}.flatpickr-monthSelect-theme-dark .flatpickr-current-month input.cur-year{color:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-months .flatpickr-prev-month,.flatpickr-monthSelect-theme-dark .flatpickr-months .flatpickr-next-month{color:#fff;fill:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month{color:rgba(255, 255, 255, 0.95)}.flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-month:focus{background:#e6e6e6;cursor:pointer;outline:0}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month:focus{background:#646c8c;border-color:#646c8c}.flatpickr-monthSelect-month.selected{background-color:#569ff7;color:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.selected{background:#80cbc4;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#80cbc4}ino-datepicker{display:block}ino-datepicker ino-input,ino-datepicker .flatpickr-wrapper,ino-datepicker .mdc-text-field{width:100%}ino-datepicker .mdc-text-field--with-leading-icon .mdc-text-field__icon,ino-datepicker .mdc-text-field--with-trailing-icon .mdc-text-field__icon{bottom:20px}.flatpickr-calendar{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:0.875rem;font-weight:400;box-shadow:0 3px 20px 0 rgba(0, 0, 0, 0.2);border-radius:0 6px 6px 6px;margin-top:4px}.flatpickr-calendar::before,.flatpickr-calendar::after{display:none}.flatpickr-calendar:not(.noCalendar):not(.flatpickr-monthSelect-theme-light){width:auto}.flatpickr-calendar.flatpickr-monthSelect-theme-light{min-width:300px}.flatpickr-calendar input{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:0.875rem;font-weight:400}.flatpickr-calendar.inline{padding:0;box-shadow:none;display:flex;flex-direction:column;align-items:center}.flatpickr-calendar .flatpickr-current-month{padding-top:8px;font-size:0.8125rem}.flatpickr-calendar:not(.inline) .flatpickr-current-month{padding-top:20px}.flatpickr-calendar .flatpickr-months{padding:0 20px 0 6px;margin-bottom:10px;border-radius:24px;width:100%}.flatpickr-calendar .flatpickr-months .flatpickr-month{height:38px}.flatpickr-calendar .flatpickr-months .flatpickr-month .cur-month,.flatpickr-calendar .flatpickr-months .flatpickr-month .numInput,.flatpickr-calendar .flatpickr-months .flatpickr-month .flatpickr-monthDropdown-months{font-weight:600;margin-right:4px;min-width:100px;letter-spacing:0.025rem}.flatpickr-calendar .flatpickr-months .flatpickr-disabled{display:block;visibility:hidden}.flatpickr-calendar .flatpickr-months .ino-datepicker__icon{pointer-events:none;display:block;--ino-icon-height:12px;--ino-icon-width:12px;--ino-icon-color:#3d40f5}.flatpickr-calendar:not(.inline) .flatpickr-prev-month{padding:22px 12px 10px 36px !important}.flatpickr-calendar:not(.inline) .flatpickr-next-month{padding:22px 36px 12px 10px !important}.flatpickr-calendar .flatpickr-innerContainer{padding:0 20px 15px 20px}.flatpickr-calendar .flatpickr-innerContainer .flatpickr-weekday{font-weight:500;color:rgba(0, 0, 0, 0.8)}.flatpickr-calendar .flatpickr-day{margin:4px;font-weight:500;max-width:32px;height:32px;line-height:30px}.flatpickr-calendar .flatpickr-day:not(.flatpickr-disabled):not(.selected):not(.startRange):not(.endRange){color:#777777}.flatpickr-calendar .flatpickr-day.nextMonthDay:not(.flatpickr-disabled):not(.selected):not(.startRange):not(.endRange),.flatpickr-calendar .flatpickr-day.prevMonthDay:not(.flatpickr-disabled):not(.selected):not(.startRange):not(.endRange){color:#9d9d9d}.flatpickr-calendar .flatpickr-day:hover:not(.flatpickr-disabled):not(.selected):not(.startRange):not(.endRange),.flatpickr-calendar .flatpickr-day:focus:not(.flatpickr-disabled):not(.selected):not(.startRange):not(.endRange){color:#3d40f5;background-color:#d0d0e6;border-color:#d0d0e6}.flatpickr-calendar .flatpickr-day.today:not(.flatpickr-disabled):not(.selected):not(.startRange):not(.endRange){color:#3d40f5}.flatpickr-calendar .flatpickr-day.today:not(.flatpickr-disabled):not(.selected):not(.startRange):not(.endRange):not(.inRange){border:1px solid #3d40f5}.flatpickr-calendar .flatpickr-day.selected,.flatpickr-calendar .flatpickr-day.endRange,.flatpickr-calendar .flatpickr-day.endRange:hover,.flatpickr-calendar .flatpickr-day.startRange,.flatpickr-calendar .flatpickr-day.startRange:hover{background-color:#3d40f5;border-color:#3d40f5;color:white;font-weight:600;line-height:32px}.flatpickr-calendar .flatpickr-day.inRange:not(.selected){border-color:#d0d0e6;background-color:#d0d0e6;box-shadow:-12px 0 0 #d0d0e6, 12px 0 0 #d0d0e6}.flatpickr-calendar .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-calendar .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:-12px 0 0 #d0d0e6}.flatpickr-calendar .flatpickr-monthSelect-months{display:flex;flex-wrap:wrap;margin-top:0;margin-bottom:10px}.flatpickr-calendar .flatpickr-monthSelect-months .flatpickr-monthSelect-month{font-weight:500;width:30%;margin:3px;border-radius:20px}.flatpickr-calendar .flatpickr-monthSelect-months .flatpickr-monthSelect-month.selected{background-color:#3d40f5;font-weight:600;color:white}.flatpickr-calendar .flatpickr-monthSelect-months .flatpickr-monthSelect-month:hover:not(.selected){background-color:#d0d0e6}';
let Datepicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.value = "";
    this.attachToBody = true;
    this.dateFormat = "d-m-Y";
    this.defaultHour = 12;
    this.defaultMinute = 0;
    this.type = "date";
    this.minuteStep = 5;
    this.hourStep = 1;
    this.isValid = true;
    this.focusInputField = () => {
      const currentFocus = document.activeElement;
      const input = this.el.querySelector("input");
      if (currentFocus.tagName !== "input") {
        input.focus();
      }
    };
  }
  appendToChanged(appendTo) {
    const appendToElement = document.querySelector(appendTo);
    appendToElement && this.redraw();
  }
  valueChanged(value) {
    var _a;
    this.validate(value);
    if (!this.disabled && this.isValid) {
      (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.setDate(value, true);
    }
  }
  minChanged(min) {
    var _a;
    this.validator.minDate = min;
    this.validate();
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("minDate", min);
  }
  maxChanged(max) {
    var _a;
    this.validator.maxDate = max;
    this.validate();
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("maxDate", max);
  }
  rangeChanged(val) {
    this.redraw();
    this.validator.isRanged = val;
    this.validate();
  }
  disabledOrInlineChanged(newValue) {
    this.maybeCreate();
    this.validator.isDisabled = newValue;
    this.validate();
  }
  attachToBodyChanged(attachToBody) {
    var _a;
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("static", !attachToBody);
  }
  dateFormatChanged(dateFormat) {
    var _a;
    this.validator.dateFormat = dateFormat;
    this.validate();
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("dateFormat", dateFormat);
  }
  defaultDateChanged(defaultDate) {
    var _a;
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("defaultDate", defaultDate);
  }
  defaultHourChanged(value) {
    var _a;
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("defaultHour", value);
  }
  defaultMinuteChanged(value) {
    var _a;
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("defaultMinute", value);
  }
  twelveHourTimeChanged(value) {
    var _a;
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("time_24hr", !value);
  }
  typeChanged() {
    this.redraw();
  }
  minuteStepChanged(value) {
    var _a;
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("minuteIncrement", value);
  }
  hourStepChanged(value) {
    var _a;
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.set("hourIncrement", value);
  }
  inoInputClickedHandler(e) {
    const target = e.target;
    if (this.disabled || !this.inoInputEl.contains(target)) {
      return;
    }
    this.toggleFlatpickr();
  }
  iconClickedHandler() {
    this.focusInputField();
    this.toggleFlatpickr();
  }
  errorHandler(value) {
    if (this.disabled || !this.flatpickr) {
      return;
    }
    switch (value) {
      case true:
      case false:
        this.isValid = !value;
        break;
      default:
        this.validate();
    }
  }
  async redraw() {
    this.maybeDispose();
    this.maybeCreate();
  }
  async setFocus() {
    var _a;
    (_a = this.inoInputEl) === null || _a === void 0 ? void 0 : _a.setFocus();
  }
  async setBlur() {
    var _a;
    (_a = this.inoInputEl) === null || _a === void 0 ? void 0 : _a.setBlur();
  }
  connectedCallback() {
    this.validator = new Validator({
      dateFormat: this.dateFormat,
      disabled: this.disabled,
      isRanged: this.range,
      minDate: this.min,
      maxDate: this.max
    });
    this.maybeCreate();
  }
  componentDidLoad() {
    this.maybeCreate();
  }
  disconnectedCallback() {
    this.maybeDispose();
  }
  toggleFlatpickr() {
    this.maybeCreate();
    this.flatpickr.toggle();
  }
  validate(value = this.value) {
    this.isValid = !this.error && this.validator.validate(value);
  }
  maybeCreate() {
    var _a, _b;
    if (this.flatpickr || this.disabled) {
      return;
    }
    const target = this.el.querySelector("ino-input");
    if (this.disabled || !target) {
      return;
    }
    const sharedOptions = {
      allowInput: true,
      clickOpens: false,
      prevArrow: '<ino-icon class="ino-datepicker__icon" icon="arrow_left"></ino-icon>',
      nextArrow: '<ino-icon class="ino-datepicker__icon" icon="arrow_right"></ino-icon>',
      ignoredFocusElements: [],
      wrap: false,
      locale: getDatepickerLocale(this.el),
      onValueUpdate: (_, newValue) => this.valueChange.emit(newValue)
    };
    if (this.appendTo) {
      sharedOptions.appendTo = document.getElementById(this.appendTo);
    }
    if (this.inline) {
      sharedOptions.appendTo = (_a = sharedOptions.appendTo) !== null && _a !== void 0 ? _a : this.el;
      sharedOptions.inline = true;
    }
    const typeSpecificOptions = createPicker(this.type, {
      defaultHour: !this.value && this.defaultHour,
      defaultMinute: !this.value && this.defaultMinute,
      defaultDate: !this.value && this.defaultDate,
      enableTime: true,
      time_24hr: !this.twelveHourTime,
      minuteIncrement: this.minuteStep,
      hourIncrement: this.hourStep,
      dateFormat: this.dateFormat,
      minDate: this.min,
      maxDate: this.max,
      mode: this.range ? "range" : "single",
      static: !this.attachToBody,
      onValueChange: (value) => this.valueChange.emit(value)
    });
    const options = Object.assign(Object.assign({}, sharedOptions), typeSpecificOptions);
    this.flatpickr = flatpickr(target, options);
    if (this.value) {
      (_b = this.flatpickr) === null || _b === void 0 ? void 0 : _b.setDate(this.value);
    }
    this.value && this.errorHandler(this.error);
  }
  maybeDispose() {
    var _a;
    (_a = this.flatpickr) === null || _a === void 0 ? void 0 : _a.destroy();
    this.flatpickr = null;
  }
  render() {
    const hasTrailingIcon = hasSlotContent(this.el, "icon-trailing");
    const hasLeadingIcon = hasSlotContent(this.el, "icon-leading");
    return h(Host, null, h("ino-input", { type: "text", autocomplete: "off", disabled: this.disabled, autoFocus: this.autoFocus, name: this.name, required: this.required, label: this.label, error: !this.isValid, "icon-leading": true, value: this.value, helper: this.helper, placeholder: this.placeholder, outline: this.outline, "helper-persistent": this.helperPersistent, "helper-validation": this.helperValidation, "show-label-hint": this.showLabelHint, onValueChange: (e) => this.valueChange.emit(e.detail), ref: (inoInputEl) => this.inoInputEl = inoInputEl }, !this.inline && h("ino-icon", { clickable: !this.disabled, icon: this.type === "time" ? "time" : "calendar", slot: "icon-leading" }), this.inline && hasLeadingIcon && h("slot", { name: "icon-leading" }), this.inline && hasTrailingIcon && h("slot", { name: "icon-trailing" })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "appendTo": ["appendToChanged"],
      "value": ["valueChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "range": ["rangeChanged"],
      "disabled": ["disabledOrInlineChanged"],
      "inline": ["disabledOrInlineChanged"],
      "attachToBody": ["attachToBodyChanged"],
      "dateFormat": ["dateFormatChanged"],
      "defaultDate": ["defaultDateChanged"],
      "defaultHour": ["defaultHourChanged"],
      "defaultMinute": ["defaultMinuteChanged"],
      "twelveHourTime": ["twelveHourTimeChanged"],
      "type": ["typeChanged"],
      "minuteStep": ["minuteStepChanged"],
      "hourStep": ["hourStepChanged"],
      "error": ["errorHandler"]
    };
  }
};
Datepicker.style = inoDatepickerCss;
export { Datepicker as ino_datepicker };
