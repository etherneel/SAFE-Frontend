"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-browser";
exports.ids = ["vendor-chunks/detect-browser"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-browser/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/detect-browser/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BotInfo: () => (/* binding */ BotInfo),\n/* harmony export */   BrowserInfo: () => (/* binding */ BrowserInfo),\n/* harmony export */   NodeInfo: () => (/* binding */ NodeInfo),\n/* harmony export */   ReactNativeInfo: () => (/* binding */ ReactNativeInfo),\n/* harmony export */   SearchBotDeviceInfo: () => (/* binding */ SearchBotDeviceInfo),\n/* harmony export */   browserName: () => (/* binding */ browserName),\n/* harmony export */   detect: () => (/* binding */ detect),\n/* harmony export */   detectOS: () => (/* binding */ detectOS),\n/* harmony export */   getNodeVersion: () => (/* binding */ getNodeVersion),\n/* harmony export */   parseUserAgent: () => (/* binding */ parseUserAgent)\n/* harmony export */ });\nvar __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {\n    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar BrowserInfo = /** @class */ function() {\n    function BrowserInfo(name, version, os) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.type = \"browser\";\n    }\n    return BrowserInfo;\n}();\n\nvar NodeInfo = /** @class */ function() {\n    function NodeInfo(version) {\n        this.version = version;\n        this.type = \"node\";\n        this.name = \"node\";\n        this.os = process.platform;\n    }\n    return NodeInfo;\n}();\n\nvar SearchBotDeviceInfo = /** @class */ function() {\n    function SearchBotDeviceInfo(name, version, os, bot) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.bot = bot;\n        this.type = \"bot-device\";\n    }\n    return SearchBotDeviceInfo;\n}();\n\nvar BotInfo = /** @class */ function() {\n    function BotInfo() {\n        this.type = \"bot\";\n        this.bot = true; // NOTE: deprecated test name instead\n        this.name = \"bot\";\n        this.version = null;\n        this.os = null;\n    }\n    return BotInfo;\n}();\n\nvar ReactNativeInfo = /** @class */ function() {\n    function ReactNativeInfo() {\n        this.type = \"react-native\";\n        this.name = \"react-native\";\n        this.version = null;\n        this.os = null;\n    }\n    return ReactNativeInfo;\n}();\n\n// tslint:disable-next-line:max-line-length\nvar SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;\nvar SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\\ Jeeves\\/Teoma|ia_archiver)/;\nvar REQUIRED_VERSION_PARTS = 3;\nvar userAgentRules = [\n    [\n        \"aol\",\n        /AOLShield\\/([0-9\\._]+)/\n    ],\n    [\n        \"edge\",\n        /Edge\\/([0-9\\._]+)/\n    ],\n    [\n        \"edge-ios\",\n        /EdgiOS\\/([0-9\\._]+)/\n    ],\n    [\n        \"yandexbrowser\",\n        /YaBrowser\\/([0-9\\._]+)/\n    ],\n    [\n        \"kakaotalk\",\n        /KAKAOTALK\\s([0-9\\.]+)/\n    ],\n    [\n        \"samsung\",\n        /SamsungBrowser\\/([0-9\\.]+)/\n    ],\n    [\n        \"silk\",\n        /\\bSilk\\/([0-9._-]+)\\b/\n    ],\n    [\n        \"miui\",\n        /MiuiBrowser\\/([0-9\\.]+)$/\n    ],\n    [\n        \"beaker\",\n        /BeakerBrowser\\/([0-9\\.]+)/\n    ],\n    [\n        \"edge-chromium\",\n        /EdgA?\\/([0-9\\.]+)/\n    ],\n    [\n        \"chromium-webview\",\n        /(?!Chrom.*OPR)wv\\).*Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"chrome\",\n        /(?!Chrom.*OPR)Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"phantomjs\",\n        /PhantomJS\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"crios\",\n        /CriOS\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"firefox\",\n        /Firefox\\/([0-9\\.]+)(?:\\s|$)/\n    ],\n    [\n        \"fxios\",\n        /FxiOS\\/([0-9\\.]+)/\n    ],\n    [\n        \"opera-mini\",\n        /Opera Mini.*Version\\/([0-9\\.]+)/\n    ],\n    [\n        \"opera\",\n        /Opera\\/([0-9\\.]+)(?:\\s|$)/\n    ],\n    [\n        \"opera\",\n        /OPR\\/([0-9\\.]+)(:?\\s|$)/\n    ],\n    [\n        \"pie\",\n        /^Microsoft Pocket Internet Explorer\\/(\\d+\\.\\d+)$/\n    ],\n    [\n        \"pie\",\n        /^Mozilla\\/\\d\\.\\d+\\s\\(compatible;\\s(?:MSP?IE|MSInternet Explorer) (\\d+\\.\\d+);.*Windows CE.*\\)$/\n    ],\n    [\n        \"netfront\",\n        /^Mozilla\\/\\d\\.\\d+.*NetFront\\/(\\d.\\d)/\n    ],\n    [\n        \"ie\",\n        /Trident\\/7\\.0.*rv\\:([0-9\\.]+).*\\).*Gecko$/\n    ],\n    [\n        \"ie\",\n        /MSIE\\s([0-9\\.]+);.*Trident\\/[4-7].0/\n    ],\n    [\n        \"ie\",\n        /MSIE\\s(7\\.0)/\n    ],\n    [\n        \"bb10\",\n        /BB10;\\sTouch.*Version\\/([0-9\\.]+)/\n    ],\n    [\n        \"android\",\n        /Android\\s([0-9\\.]+)/\n    ],\n    [\n        \"ios\",\n        /Version\\/([0-9\\._]+).*Mobile.*Safari.*/\n    ],\n    [\n        \"safari\",\n        /Version\\/([0-9\\._]+).*Safari/\n    ],\n    [\n        \"facebook\",\n        /FB[AS]V\\/([0-9\\.]+)/\n    ],\n    [\n        \"instagram\",\n        /Instagram\\s([0-9\\.]+)/\n    ],\n    [\n        \"ios-webview\",\n        /AppleWebKit\\/([0-9\\.]+).*Mobile/\n    ],\n    [\n        \"ios-webview\",\n        /AppleWebKit\\/([0-9\\.]+).*Gecko\\)$/\n    ],\n    [\n        \"curl\",\n        /^curl\\/([0-9\\.]+)$/\n    ],\n    [\n        \"searchbot\",\n        SEARCHBOX_UA_REGEX\n    ]\n];\nvar operatingSystemRules = [\n    [\n        \"iOS\",\n        /iP(hone|od|ad)/\n    ],\n    [\n        \"Android OS\",\n        /Android/\n    ],\n    [\n        \"BlackBerry OS\",\n        /BlackBerry|BB10/\n    ],\n    [\n        \"Windows Mobile\",\n        /IEMobile/\n    ],\n    [\n        \"Amazon OS\",\n        /Kindle/\n    ],\n    [\n        \"Windows 3.11\",\n        /Win16/\n    ],\n    [\n        \"Windows 95\",\n        /(Windows 95)|(Win95)|(Windows_95)/\n    ],\n    [\n        \"Windows 98\",\n        /(Windows 98)|(Win98)/\n    ],\n    [\n        \"Windows 2000\",\n        /(Windows NT 5.0)|(Windows 2000)/\n    ],\n    [\n        \"Windows XP\",\n        /(Windows NT 5.1)|(Windows XP)/\n    ],\n    [\n        \"Windows Server 2003\",\n        /(Windows NT 5.2)/\n    ],\n    [\n        \"Windows Vista\",\n        /(Windows NT 6.0)/\n    ],\n    [\n        \"Windows 7\",\n        /(Windows NT 6.1)/\n    ],\n    [\n        \"Windows 8\",\n        /(Windows NT 6.2)/\n    ],\n    [\n        \"Windows 8.1\",\n        /(Windows NT 6.3)/\n    ],\n    [\n        \"Windows 10\",\n        /(Windows NT 10.0)/\n    ],\n    [\n        \"Windows ME\",\n        /Windows ME/\n    ],\n    [\n        \"Windows CE\",\n        /Windows CE|WinCE|Microsoft Pocket Internet Explorer/\n    ],\n    [\n        \"Open BSD\",\n        /OpenBSD/\n    ],\n    [\n        \"Sun OS\",\n        /SunOS/\n    ],\n    [\n        \"Chrome OS\",\n        /CrOS/\n    ],\n    [\n        \"Linux\",\n        /(Linux)|(X11)/\n    ],\n    [\n        \"Mac OS\",\n        /(Mac_PowerPC)|(Macintosh)/\n    ],\n    [\n        \"QNX\",\n        /QNX/\n    ],\n    [\n        \"BeOS\",\n        /BeOS/\n    ],\n    [\n        \"OS/2\",\n        /OS\\/2/\n    ]\n];\nfunction detect(userAgent) {\n    if (!!userAgent) {\n        return parseUserAgent(userAgent);\n    }\n    if (typeof document === \"undefined\" && typeof navigator !== \"undefined\" && navigator.product === \"ReactNative\") {\n        return new ReactNativeInfo();\n    }\n    if (typeof navigator !== \"undefined\") {\n        return parseUserAgent(navigator.userAgent);\n    }\n    return getNodeVersion();\n}\nfunction matchUserAgent(ua) {\n    // opted for using reduce here rather than Array#first with a regex.test call\n    // this is primarily because using the reduce we only perform the regex\n    // execution once rather than once for the test and for the exec again below\n    // probably something that needs to be benchmarked though\n    return ua !== \"\" && userAgentRules.reduce(function(matched, _a) {\n        var browser = _a[0], regex = _a[1];\n        if (matched) {\n            return matched;\n        }\n        var uaMatch = regex.exec(ua);\n        return !!uaMatch && [\n            browser,\n            uaMatch\n        ];\n    }, false);\n}\nfunction browserName(ua) {\n    var data = matchUserAgent(ua);\n    return data ? data[0] : null;\n}\nfunction parseUserAgent(ua) {\n    var matchedRule = matchUserAgent(ua);\n    if (!matchedRule) {\n        return null;\n    }\n    var name = matchedRule[0], match = matchedRule[1];\n    if (name === \"searchbot\") {\n        return new BotInfo();\n    }\n    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)\n    var versionParts = match[1] && match[1].split(\".\").join(\"_\").split(\"_\").slice(0, 3);\n    if (versionParts) {\n        if (versionParts.length < REQUIRED_VERSION_PARTS) {\n            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);\n        }\n    } else {\n        versionParts = [];\n    }\n    var version = versionParts.join(\".\");\n    var os = detectOS(ua);\n    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);\n    if (searchBotMatch && searchBotMatch[1]) {\n        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);\n    }\n    return new BrowserInfo(name, version, os);\n}\nfunction detectOS(ua) {\n    for(var ii = 0, count = operatingSystemRules.length; ii < count; ii++){\n        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];\n        var match = regex.exec(ua);\n        if (match) {\n            return os;\n        }\n    }\n    return null;\n}\nfunction getNodeVersion() {\n    var isNode = typeof process !== \"undefined\" && process.version;\n    return isNode ? new NodeInfo(process.version.slice(1)) : null;\n}\nfunction createVersionParts(count) {\n    var output = [];\n    for(var ii = 0; ii < count; ii++){\n        output.push(\"0\");\n    }\n    return output;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LWJyb3dzZXIvZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGdCQUFnQixTQUFLLElBQUksU0FBSSxDQUFDQSxhQUFhLElBQUssU0FBVUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7SUFDeEUsSUFBSUEsUUFBUUMsVUFBVUMsTUFBTSxLQUFLLEdBQUcsSUFBSyxJQUFJQyxJQUFJLEdBQUdDLElBQUlMLEtBQUtHLE1BQU0sRUFBRUcsSUFBSUYsSUFBSUMsR0FBR0QsSUFBSztRQUNqRixJQUFJRSxNQUFNLENBQUVGLENBQUFBLEtBQUtKLElBQUcsR0FBSTtZQUNwQixJQUFJLENBQUNNLElBQUlBLEtBQUtDLE1BQU1DLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNWLE1BQU0sR0FBR0k7WUFDbERFLEVBQUUsQ0FBQ0YsRUFBRSxHQUFHSixJQUFJLENBQUNJLEVBQUU7UUFDbkI7SUFDSjtJQUNBLE9BQU9MLEdBQUdZLE1BQU0sQ0FBQ0wsTUFBTUMsTUFBTUMsU0FBUyxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ1Y7QUFDdEQ7QUFDQSxJQUFJWSxjQUFjLFdBQVcsR0FBSTtJQUM3QixTQUFTQSxZQUFZQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsRUFBRTtRQUNsQyxJQUFJLENBQUNGLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLEVBQUUsR0FBR0E7UUFDVixJQUFJLENBQUNDLElBQUksR0FBRztJQUNoQjtJQUNBLE9BQU9KO0FBQ1g7QUFDdUI7QUFDdkIsSUFBSUssV0FBVyxXQUFXLEdBQUk7SUFDMUIsU0FBU0EsU0FBU0gsT0FBTztRQUNyQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNFLElBQUksR0FBRztRQUNaLElBQUksQ0FBQ0gsSUFBSSxHQUFHO1FBQ1osSUFBSSxDQUFDRSxFQUFF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QXFCekIsTUFBTSxFQUFFb0QsS0FBS0MsT0FBT0QsS0FBTTtRQUNwRSxJQUFJZixLQUFLWixvQkFBb0IsQ0FBQzJCLEdBQUcsRUFBRXhDLEtBQUt5QixFQUFFLENBQUMsRUFBRSxFQUFFRSxRQUFRRixFQUFFLENBQUMsRUFBRTtRQUM1RCxJQUFJUSxRQUFRTixNQUFNRSxJQUFJLENBQUNQO1FBQ3ZCLElBQUlXLE9BQU87WUFDUCxPQUFPakM7UUFDWDtJQUNKO0lBQ0EsT0FBTztBQUNYO0FBQ08sU0FBU29CO0lBQ1osSUFBSXNCLFNBQVMsT0FBT3ZDLFlBQVksZUFBZUEsUUFBUUosT0FBTztJQUM5RCxPQUFPMkMsU0FBUyxJQUFJeEMsU0FBU0MsUUFBUUosT0FBTyxDQUFDTCxLQUFLLENBQUMsTUFBTTtBQUM3RDtBQUNBLFNBQVMyQyxtQkFBbUJJLEtBQUs7SUFDN0IsSUFBSUUsU0FBUyxFQUFFO0lBQ2YsSUFBSyxJQUFJSCxLQUFLLEdBQUdBLEtBQUtDLE9BQU9ELEtBQU07UUFDL0JHLE9BQU9DLElBQUksQ0FBQztJQUNoQjtJQUNBLE9BQU9EO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLWFwcC8uL25vZGVfbW9kdWxlcy9kZXRlY3QtYnJvd3Nlci9lcy9pbmRleC5qcz9lZjBlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbnZhciBCcm93c2VySW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCcm93c2VySW5mbyhuYW1lLCB2ZXJzaW9uLCBvcykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLm9zID0gb3M7XG4gICAgICAgIHRoaXMudHlwZSA9ICdicm93c2VyJztcbiAgICB9XG4gICAgcmV0dXJuIEJyb3dzZXJJbmZvO1xufSgpKTtcbmV4cG9ydCB7IEJyb3dzZXJJbmZvIH07XG52YXIgTm9kZUluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZUluZm8odmVyc2lvbikge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbm9kZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdub2RlJztcbiAgICAgICAgdGhpcy5vcyA9IHByb2Nlc3MucGxhdGZvcm07XG4gICAgfVxuICAgIHJldHVybiBOb2RlSW5mbztcbn0oKSk7XG5leHBvcnQgeyBOb2RlSW5mbyB9O1xudmFyIFNlYXJjaEJvdERldmljZUluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VhcmNoQm90RGV2aWNlSW5mbyhuYW1lLCB2ZXJzaW9uLCBvcywgYm90KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMub3MgPSBvcztcbiAgICAgICAgdGhpcy5ib3QgPSBib3Q7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib3QtZGV2aWNlJztcbiAgICB9XG4gICAgcmV0dXJuIFNlYXJjaEJvdERldmljZUluZm87XG59KCkpO1xuZXhwb3J0IHsgU2VhcmNoQm90RGV2aWNlSW5mbyB9O1xudmFyIEJvdEluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm90SW5mbygpIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ2JvdCc7XG4gICAgICAgIHRoaXMuYm90ID0gdHJ1ZTsgLy8gTk9URTogZGVwcmVjYXRlZCB0ZXN0IG5hbWUgaW5zdGVhZFxuICAgICAgICB0aGlzLm5hbWUgPSAnYm90JztcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcyA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBCb3RJbmZvO1xufSgpKTtcbmV4cG9ydCB7IEJvdEluZm8gfTtcbnZhciBSZWFjdE5hdGl2ZUluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVhY3ROYXRpdmVJbmZvKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSAncmVhY3QtbmF0aXZlJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ3JlYWN0LW5hdGl2ZSc7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub3MgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3ROYXRpdmVJbmZvO1xufSgpKTtcbmV4cG9ydCB7IFJlYWN0TmF0aXZlSW5mbyB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxudmFyIFNFQVJDSEJPWF9VQV9SRUdFWCA9IC9hbGV4YXxib3R8Y3Jhd2woZXJ8aW5nKXxmYWNlYm9va2V4dGVybmFsaGl0fGZlZWRidXJuZXJ8Z29vZ2xlIHdlYiBwcmV2aWV3fG5hZ2lvc3xwb3N0cmFua3xwaW5nZG9tfHNsdXJwfHNwaWRlcnx5YWhvbyF8eWFuZGV4LztcbnZhciBTRUFSQ0hCT1RfT1NfUkVHRVggPSAvKG51aGt8Y3VybHxHb29nbGVib3R8WWFtbXlib3R8T3BlbmJvdHxTbHVycHxNU05Cb3R8QXNrXFwgSmVldmVzXFwvVGVvbWF8aWFfYXJjaGl2ZXIpLztcbnZhciBSRVFVSVJFRF9WRVJTSU9OX1BBUlRTID0gMztcbnZhciB1c2VyQWdlbnRSdWxlcyA9IFtcbiAgICBbJ2FvbCcsIC9BT0xTaGllbGRcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2VkZ2UnLCAvRWRnZVxcLyhbMC05XFwuX10rKS9dLFxuICAgIFsnZWRnZS1pb3MnLCAvRWRnaU9TXFwvKFswLTlcXC5fXSspL10sXG4gICAgWyd5YW5kZXhicm93c2VyJywgL1lhQnJvd3NlclxcLyhbMC05XFwuX10rKS9dLFxuICAgIFsna2FrYW90YWxrJywgL0tBS0FPVEFMS1xccyhbMC05XFwuXSspL10sXG4gICAgWydzYW1zdW5nJywgL1NhbXN1bmdCcm93c2VyXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ3NpbGsnLCAvXFxiU2lsa1xcLyhbMC05Ll8tXSspXFxiL10sXG4gICAgWydtaXVpJywgL01pdWlCcm93c2VyXFwvKFswLTlcXC5dKykkL10sXG4gICAgWydiZWFrZXInLCAvQmVha2VyQnJvd3NlclxcLyhbMC05XFwuXSspL10sXG4gICAgWydlZGdlLWNocm9taXVtJywgL0VkZ0E/XFwvKFswLTlcXC5dKykvXSxcbiAgICBbXG4gICAgICAgICdjaHJvbWl1bS13ZWJ2aWV3JyxcbiAgICAgICAgLyg/IUNocm9tLipPUFIpd3ZcXCkuKkNocm9tKD86ZXxpdW0pXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvLFxuICAgIF0sXG4gICAgWydjaHJvbWUnLCAvKD8hQ2hyb20uKk9QUilDaHJvbSg/OmV8aXVtKVxcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydwaGFudG9tanMnLCAvUGhhbnRvbUpTXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvXSxcbiAgICBbJ2NyaW9zJywgL0NyaU9TXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvXSxcbiAgICBbJ2ZpcmVmb3gnLCAvRmlyZWZveFxcLyhbMC05XFwuXSspKD86XFxzfCQpL10sXG4gICAgWydmeGlvcycsIC9GeGlPU1xcLyhbMC05XFwuXSspL10sXG4gICAgWydvcGVyYS1taW5pJywgL09wZXJhIE1pbmkuKlZlcnNpb25cXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnb3BlcmEnLCAvT3BlcmFcXC8oWzAtOVxcLl0rKSg/Olxcc3wkKS9dLFxuICAgIFsnb3BlcmEnLCAvT1BSXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvXSxcbiAgICBbJ3BpZScsIC9eTWljcm9zb2Z0IFBvY2tldCBJbnRlcm5ldCBFeHBsb3JlclxcLyhcXGQrXFwuXFxkKykkL10sXG4gICAgWydwaWUnLCAvXk1vemlsbGFcXC9cXGRcXC5cXGQrXFxzXFwoY29tcGF0aWJsZTtcXHMoPzpNU1A/SUV8TVNJbnRlcm5ldCBFeHBsb3JlcikgKFxcZCtcXC5cXGQrKTsuKldpbmRvd3MgQ0UuKlxcKSQvXSxcbiAgICBbJ25ldGZyb250JywgL15Nb3ppbGxhXFwvXFxkXFwuXFxkKy4qTmV0RnJvbnRcXC8oXFxkLlxcZCkvXSxcbiAgICBbJ2llJywgL1RyaWRlbnRcXC83XFwuMC4qcnZcXDooWzAtOVxcLl0rKS4qXFwpLipHZWNrbyQvXSxcbiAgICBbJ2llJywgL01TSUVcXHMoWzAtOVxcLl0rKTsuKlRyaWRlbnRcXC9bNC03XS4wL10sXG4gICAgWydpZScsIC9NU0lFXFxzKDdcXC4wKS9dLFxuICAgIFsnYmIxMCcsIC9CQjEwO1xcc1RvdWNoLipWZXJzaW9uXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ2FuZHJvaWQnLCAvQW5kcm9pZFxccyhbMC05XFwuXSspL10sXG4gICAgWydpb3MnLCAvVmVyc2lvblxcLyhbMC05XFwuX10rKS4qTW9iaWxlLipTYWZhcmkuKi9dLFxuICAgIFsnc2FmYXJpJywgL1ZlcnNpb25cXC8oWzAtOVxcLl9dKykuKlNhZmFyaS9dLFxuICAgIFsnZmFjZWJvb2snLCAvRkJbQVNdVlxcLyhbMC05XFwuXSspL10sXG4gICAgWydpbnN0YWdyYW0nLCAvSW5zdGFncmFtXFxzKFswLTlcXC5dKykvXSxcbiAgICBbJ2lvcy13ZWJ2aWV3JywgL0FwcGxlV2ViS2l0XFwvKFswLTlcXC5dKykuKk1vYmlsZS9dLFxuICAgIFsnaW9zLXdlYnZpZXcnLCAvQXBwbGVXZWJLaXRcXC8oWzAtOVxcLl0rKS4qR2Vja29cXCkkL10sXG4gICAgWydjdXJsJywgL15jdXJsXFwvKFswLTlcXC5dKykkL10sXG4gICAgWydzZWFyY2hib3QnLCBTRUFSQ0hCT1hfVUFfUkVHRVhdLFxuXTtcbnZhciBvcGVyYXRpbmdTeXN0ZW1SdWxlcyA9IFtcbiAgICBbJ2lPUycsIC9pUChob25lfG9kfGFkKS9dLFxuICAgIFsnQW5kcm9pZCBPUycsIC9BbmRyb2lkL10sXG4gICAgWydCbGFja0JlcnJ5IE9TJywgL0JsYWNrQmVycnl8QkIxMC9dLFxuICAgIFsnV2luZG93cyBNb2JpbGUnLCAvSUVNb2JpbGUvXSxcbiAgICBbJ0FtYXpvbiBPUycsIC9LaW5kbGUvXSxcbiAgICBbJ1dpbmRvd3MgMy4xMScsIC9XaW4xNi9dLFxuICAgIFsnV2luZG93cyA5NScsIC8oV2luZG93cyA5NSl8KFdpbjk1KXwoV2luZG93c185NSkvXSxcbiAgICBbJ1dpbmRvd3MgOTgnLCAvKFdpbmRvd3MgOTgpfChXaW45OCkvXSxcbiAgICBbJ1dpbmRvd3MgMjAwMCcsIC8oV2luZG93cyBOVCA1LjApfChXaW5kb3dzIDIwMDApL10sXG4gICAgWydXaW5kb3dzIFhQJywgLyhXaW5kb3dzIE5UIDUuMSl8KFdpbmRvd3MgWFApL10sXG4gICAgWydXaW5kb3dzIFNlcnZlciAyMDAzJywgLyhXaW5kb3dzIE5UIDUuMikvXSxcbiAgICBbJ1dpbmRvd3MgVmlzdGEnLCAvKFdpbmRvd3MgTlQgNi4wKS9dLFxuICAgIFsnV2luZG93cyA3JywgLyhXaW5kb3dzIE5UIDYuMSkvXSxcbiAgICBbJ1dpbmRvd3MgOCcsIC8oV2luZG93cyBOVCA2LjIpL10sXG4gICAgWydXaW5kb3dzIDguMScsIC8oV2luZG93cyBOVCA2LjMpL10sXG4gICAgWydXaW5kb3dzIDEwJywgLyhXaW5kb3dzIE5UIDEwLjApL10sXG4gICAgWydXaW5kb3dzIE1FJywgL1dpbmRvd3MgTUUvXSxcbiAgICBbJ1dpbmRvd3MgQ0UnLCAvV2luZG93cyBDRXxXaW5DRXxNaWNyb3NvZnQgUG9ja2V0IEludGVybmV0IEV4cGxvcmVyL10sXG4gICAgWydPcGVuIEJTRCcsIC9PcGVuQlNEL10sXG4gICAgWydTdW4gT1MnLCAvU3VuT1MvXSxcbiAgICBbJ0Nocm9tZSBPUycsIC9Dck9TL10sXG4gICAgWydMaW51eCcsIC8oTGludXgpfChYMTEpL10sXG4gICAgWydNYWMgT1MnLCAvKE1hY19Qb3dlclBDKXwoTWFjaW50b3NoKS9dLFxuICAgIFsnUU5YJywgL1FOWC9dLFxuICAgIFsnQmVPUycsIC9CZU9TL10sXG4gICAgWydPUy8yJywgL09TXFwvMi9dLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3QodXNlckFnZW50KSB7XG4gICAgaWYgKCEhdXNlckFnZW50KSB7XG4gICAgICAgIHJldHVybiBwYXJzZVVzZXJBZ2VudCh1c2VyQWdlbnQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgICAgICByZXR1cm4gbmV3IFJlYWN0TmF0aXZlSW5mbygpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlVXNlckFnZW50KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Tm9kZVZlcnNpb24oKTtcbn1cbmZ1bmN0aW9uIG1hdGNoVXNlckFnZW50KHVhKSB7XG4gICAgLy8gb3B0ZWQgZm9yIHVzaW5nIHJlZHVjZSBoZXJlIHJhdGhlciB0aGFuIEFycmF5I2ZpcnN0IHdpdGggYSByZWdleC50ZXN0IGNhbGxcbiAgICAvLyB0aGlzIGlzIHByaW1hcmlseSBiZWNhdXNlIHVzaW5nIHRoZSByZWR1Y2Ugd2Ugb25seSBwZXJmb3JtIHRoZSByZWdleFxuICAgIC8vIGV4ZWN1dGlvbiBvbmNlIHJhdGhlciB0aGFuIG9uY2UgZm9yIHRoZSB0ZXN0IGFuZCBmb3IgdGhlIGV4ZWMgYWdhaW4gYmVsb3dcbiAgICAvLyBwcm9iYWJseSBzb21ldGhpbmcgdGhhdCBuZWVkcyB0byBiZSBiZW5jaG1hcmtlZCB0aG91Z2hcbiAgICByZXR1cm4gKHVhICE9PSAnJyAmJlxuICAgICAgICB1c2VyQWdlbnRSdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZWQsIF9hKSB7XG4gICAgICAgICAgICB2YXIgYnJvd3NlciA9IF9hWzBdLCByZWdleCA9IF9hWzFdO1xuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1YU1hdGNoID0gcmVnZXguZXhlYyh1YSk7XG4gICAgICAgICAgICByZXR1cm4gISF1YU1hdGNoICYmIFticm93c2VyLCB1YU1hdGNoXTtcbiAgICAgICAgfSwgZmFsc2UpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyTmFtZSh1YSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hVc2VyQWdlbnQodWEpO1xuICAgIHJldHVybiBkYXRhID8gZGF0YVswXSA6IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVc2VyQWdlbnQodWEpIHtcbiAgICB2YXIgbWF0Y2hlZFJ1bGUgPSBtYXRjaFVzZXJBZ2VudCh1YSk7XG4gICAgaWYgKCFtYXRjaGVkUnVsZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG5hbWUgPSBtYXRjaGVkUnVsZVswXSwgbWF0Y2ggPSBtYXRjaGVkUnVsZVsxXTtcbiAgICBpZiAobmFtZSA9PT0gJ3NlYXJjaGJvdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCb3RJbmZvKCk7XG4gICAgfVxuICAgIC8vIERvIG5vdCB1c2UgUmVnRXhwIGZvciBzcGxpdCBvcGVyYXRpb24gYXMgc29tZSBicm93c2VyIGRvIG5vdCBzdXBwb3J0IGl0IChTZWU6IGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9jcm9zcy1icm93c2VyLXNwbGl0KVxuICAgIHZhciB2ZXJzaW9uUGFydHMgPSBtYXRjaFsxXSAmJiBtYXRjaFsxXS5zcGxpdCgnLicpLmpvaW4oJ18nKS5zcGxpdCgnXycpLnNsaWNlKDAsIDMpO1xuICAgIGlmICh2ZXJzaW9uUGFydHMpIHtcbiAgICAgICAgaWYgKHZlcnNpb25QYXJ0cy5sZW5ndGggPCBSRVFVSVJFRF9WRVJTSU9OX1BBUlRTKSB7XG4gICAgICAgICAgICB2ZXJzaW9uUGFydHMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHZlcnNpb25QYXJ0cywgdHJ1ZSksIGNyZWF0ZVZlcnNpb25QYXJ0cyhSRVFVSVJFRF9WRVJTSU9OX1BBUlRTIC0gdmVyc2lvblBhcnRzLmxlbmd0aCksIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2ZXJzaW9uUGFydHMgPSBbXTtcbiAgICB9XG4gICAgdmFyIHZlcnNpb24gPSB2ZXJzaW9uUGFydHMuam9pbignLicpO1xuICAgIHZhciBvcyA9IGRldGVjdE9TKHVhKTtcbiAgICB2YXIgc2VhcmNoQm90TWF0Y2ggPSBTRUFSQ0hCT1RfT1NfUkVHRVguZXhlYyh1YSk7XG4gICAgaWYgKHNlYXJjaEJvdE1hdGNoICYmIHNlYXJjaEJvdE1hdGNoWzFdKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2VhcmNoQm90RGV2aWNlSW5mbyhuYW1lLCB2ZXJzaW9uLCBvcywgc2VhcmNoQm90TWF0Y2hbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJyb3dzZXJJbmZvKG5hbWUsIHZlcnNpb24sIG9zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RPUyh1YSkge1xuICAgIGZvciAodmFyIGlpID0gMCwgY291bnQgPSBvcGVyYXRpbmdTeXN0ZW1SdWxlcy5sZW5ndGg7IGlpIDwgY291bnQ7IGlpKyspIHtcbiAgICAgICAgdmFyIF9hID0gb3BlcmF0aW5nU3lzdGVtUnVsZXNbaWldLCBvcyA9IF9hWzBdLCByZWdleCA9IF9hWzFdO1xuICAgICAgICB2YXIgbWF0Y2ggPSByZWdleC5leGVjKHVhKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZVZlcnNpb24oKSB7XG4gICAgdmFyIGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnZlcnNpb247XG4gICAgcmV0dXJuIGlzTm9kZSA/IG5ldyBOb2RlSW5mbyhwcm9jZXNzLnZlcnNpb24uc2xpY2UoMSkpIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVZlcnNpb25QYXJ0cyhjb3VudCkge1xuICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgY291bnQ7IGlpKyspIHtcbiAgICAgICAgb3V0cHV0LnB1c2goJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbiJdLCJuYW1lcyI6WyJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImFyZ3VtZW50cyIsImxlbmd0aCIsImkiLCJsIiwiYXIiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImNvbmNhdCIsIkJyb3dzZXJJbmZvIiwibmFtZSIsInZlcnNpb24iLCJvcyIsInR5cGUiLCJOb2RlSW5mbyIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIlNlYXJjaEJvdERldmljZUluZm8iLCJib3QiLCJCb3RJbmZvIiwiUmVhY3ROYXRpdmVJbmZvIiwiU0VBUkNIQk9YX1VBX1JFR0VYIiwiU0VBUkNIQk9UX09TX1JFR0VYIiwiUkVRVUlSRURfVkVSU0lPTl9QQVJUUyIsInVzZXJBZ2VudFJ1bGVzIiwib3BlcmF0aW5nU3lzdGVtUnVsZXMiLCJkZXRlY3QiLCJ1c2VyQWdlbnQiLCJwYXJzZVVzZXJBZ2VudCIsImRvY3VtZW50IiwibmF2aWdhdG9yIiwicHJvZHVjdCIsImdldE5vZGVWZXJzaW9uIiwibWF0Y2hVc2VyQWdlbnQiLCJ1YSIsInJlZHVjZSIsIm1hdGNoZWQiLCJfYSIsImJyb3dzZXIiLCJyZWdleCIsInVhTWF0Y2giLCJleGVjIiwiYnJvd3Nlck5hbWUiLCJkYXRhIiwibWF0Y2hlZFJ1bGUiLCJtYXRjaCIsInZlcnNpb25QYXJ0cyIsInNwbGl0Iiwiam9pbiIsImNyZWF0ZVZlcnNpb25QYXJ0cyIsImRldGVjdE9TIiwic2VhcmNoQm90TWF0Y2giLCJpaSIsImNvdW50IiwiaXNOb2RlIiwib3V0cHV0IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-browser/es/index.js\n");

/***/ })

};
;