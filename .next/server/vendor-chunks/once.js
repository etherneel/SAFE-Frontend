"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/once";
exports.ids = ["vendor-chunks/once"];
exports.modules = {

/***/ "(ssr)/./node_modules/once/once.js":
/*!***********************************!*\
  !*** ./node_modules/once/once.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wrappy = __webpack_require__(/*! wrappy */ \"(ssr)/./node_modules/wrappy/wrappy.js\");\nmodule.exports = wrappy(once);\nmodule.exports.strict = wrappy(onceStrict);\nonce.proto = once(function() {\n    Object.defineProperty(Function.prototype, \"once\", {\n        value: function() {\n            return once(this);\n        },\n        configurable: true\n    });\n    Object.defineProperty(Function.prototype, \"onceStrict\", {\n        value: function() {\n            return onceStrict(this);\n        },\n        configurable: true\n    });\n});\nfunction once(fn) {\n    var f = function() {\n        if (f.called) return f.value;\n        f.called = true;\n        return f.value = fn.apply(this, arguments);\n    };\n    f.called = false;\n    return f;\n}\nfunction onceStrict(fn) {\n    var f = function() {\n        if (f.called) throw new Error(f.onceError);\n        f.called = true;\n        return f.value = fn.apply(this, arguments);\n    };\n    var name = fn.name || \"Function wrapped with `once`\";\n    f.onceError = name + \" shouldn't be called more than once\";\n    f.called = false;\n    return f;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb25jZS9vbmNlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUNyQkMsT0FBT0MsT0FBTyxHQUFHSCxPQUFPSTtBQUN4QkYscUJBQXFCLEdBQUdGLE9BQU9NO0FBRS9CRixLQUFLRyxLQUFLLEdBQUdILEtBQUs7SUFDaEJJLE9BQU9DLGNBQWMsQ0FBQ0MsU0FBU0MsU0FBUyxFQUFFLFFBQVE7UUFDaERDLE9BQU87WUFDTCxPQUFPUixLQUFLLElBQUk7UUFDbEI7UUFDQVMsY0FBYztJQUNoQjtJQUVBTCxPQUFPQyxjQUFjLENBQUNDLFNBQVNDLFNBQVMsRUFBRSxjQUFjO1FBQ3REQyxPQUFPO1lBQ0wsT0FBT04sV0FBVyxJQUFJO1FBQ3hCO1FBQ0FPLGNBQWM7SUFDaEI7QUFDRjtBQUVBLFNBQVNULEtBQU1VLEVBQUU7SUFDZixJQUFJQyxJQUFJO1FBQ04sSUFBSUEsRUFBRUMsTUFBTSxFQUFFLE9BQU9ELEVBQUVILEtBQUs7UUFDNUJHLEVBQUVDLE1BQU0sR0FBRztRQUNYLE9BQU9ELEVBQUVILEtBQUssR0FBR0UsR0FBR0csS0FBSyxDQUFDLElBQUksRUFBRUM7SUFDbEM7SUFDQUgsRUFBRUMsTUFBTSxHQUFHO0lBQ1gsT0FBT0Q7QUFDVDtBQUVBLFNBQVNULFdBQVlRLEVBQUU7SUFDckIsSUFBSUMsSUFBSTtRQUNOLElBQUlBLEVBQUVDLE1BQU0sRUFDVixNQUFNLElBQUlHLE1BQU1KLEVBQUVLLFNBQVM7UUFDN0JMLEVBQUVDLE1BQU0sR0FBRztRQUNYLE9BQU9ELEVBQUVILEtBQUssR0FBR0UsR0FBR0csS0FBSyxDQUFDLElBQUksRUFBRUM7SUFDbEM7SUFDQSxJQUFJRyxPQUFPUCxHQUFHTyxJQUFJLElBQUk7SUFDdEJOLEVBQUVLLFNBQVMsR0FBR0MsT0FBTztJQUNyQk4sRUFBRUMsTUFBTSxHQUFHO0lBQ1gsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MtYXBwLy4vbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcz81M2I4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciB3cmFwcHkgPSByZXF1aXJlKCd3cmFwcHknKVxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcHkob25jZSlcbm1vZHVsZS5leHBvcnRzLnN0cmljdCA9IHdyYXBweShvbmNlU3RyaWN0KVxuXG5vbmNlLnByb3RvID0gb25jZShmdW5jdGlvbiAoKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICdvbmNlJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb25jZSh0aGlzKVxuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2VTdHJpY3QnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlU3RyaWN0KHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChmLmNhbGxlZCkgcmV0dXJuIGYudmFsdWVcbiAgICBmLmNhbGxlZCA9IHRydWVcbiAgICByZXR1cm4gZi52YWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBmLmNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiBmXG59XG5cbmZ1bmN0aW9uIG9uY2VTdHJpY3QgKGZuKSB7XG4gIHZhciBmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChmLmNhbGxlZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihmLm9uY2VFcnJvcilcbiAgICBmLmNhbGxlZCA9IHRydWVcbiAgICByZXR1cm4gZi52YWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICB2YXIgbmFtZSA9IGZuLm5hbWUgfHwgJ0Z1bmN0aW9uIHdyYXBwZWQgd2l0aCBgb25jZWAnXG4gIGYub25jZUVycm9yID0gbmFtZSArIFwiIHNob3VsZG4ndCBiZSBjYWxsZWQgbW9yZSB0aGFuIG9uY2VcIlxuICBmLmNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiBmXG59XG4iXSwibmFtZXMiOlsid3JhcHB5IiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvbmNlIiwic3RyaWN0Iiwib25jZVN0cmljdCIsInByb3RvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwiZm4iLCJmIiwiY2FsbGVkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJFcnJvciIsIm9uY2VFcnJvciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/once/once.js\n");

/***/ })

};
;