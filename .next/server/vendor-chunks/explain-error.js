"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/explain-error";
exports.ids = ["vendor-chunks/explain-error"];
exports.modules = {

/***/ "(ssr)/./node_modules/explain-error/index.js":
/*!*********************************************!*\
  !*** ./node_modules/explain-error/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nfunction getStack(err) {\n    if (err.stack && err.name && err.message) return err.stack.substring(err.name.length + 3 + err.message.length).split(\"\\n\");\n    else if (err.stack) return err.stack.split(\"\\n\");\n}\nfunction removePrefix(a, b) {\n    return a.filter(function(e) {\n        return !~b.indexOf(e);\n    });\n}\nvar explain = module.exports = function(err, message) {\n    if (!(err.stack && err.name && err.message)) {\n        console.error(new Error(\"stackless error\"));\n        return err;\n    }\n    var _err = new Error(message);\n    var stack = removePrefix(getStack(_err).slice(1), getStack(err)).join(\"\\n\");\n    _err.__proto__ = err;\n    _err.stack = _err.name + \": \" + _err.message + \"\\n\" + stack + \"\\n  \" + err.stack;\n    return _err;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXhwbGFpbi1lcnJvci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsU0FBU0EsU0FBU0MsR0FBRztJQUNuQixJQUFHQSxJQUFJQyxLQUFLLElBQUlELElBQUlFLElBQUksSUFBSUYsSUFBSUcsT0FBTyxFQUNyQyxPQUFPSCxJQUFJQyxLQUFLLENBQUNHLFNBQVMsQ0FBQ0osSUFBSUUsSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSUwsSUFBSUcsT0FBTyxDQUFDRSxNQUFNLEVBQ2hFQyxLQUFLLENBQUM7U0FDTixJQUFHTixJQUFJQyxLQUFLLEVBQ2YsT0FBT0QsSUFBSUMsS0FBSyxDQUFDSyxLQUFLLENBQUM7QUFDM0I7QUFFQSxTQUFTQyxhQUFjQyxDQUFDLEVBQUVDLENBQUM7SUFDekIsT0FBT0QsRUFBRUUsTUFBTSxDQUFDLFNBQVVDLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUNGLEVBQUVHLE9BQU8sQ0FBQ0Q7SUFDckI7QUFDRjtBQUVBLElBQUlFLFVBQVVDLE9BQU9DLE9BQU8sR0FBRyxTQUFVZixHQUFHLEVBQUVHLE9BQU87SUFDbkQsSUFBRyxDQUFFSCxDQUFBQSxJQUFJQyxLQUFLLElBQUlELElBQUlFLElBQUksSUFBSUYsSUFBSUcsT0FBTyxHQUFHO1FBQzFDYSxRQUFRQyxLQUFLLENBQUMsSUFBSUMsTUFBTTtRQUN4QixPQUFPbEI7SUFDVDtJQUVBLElBQUltQixPQUFPLElBQUlELE1BQU1mO0lBQ3JCLElBQUlGLFFBQVFNLGFBQWFSLFNBQVNvQixNQUFNQyxLQUFLLENBQUMsSUFBSXJCLFNBQVNDLE1BQU1xQixJQUFJLENBQUM7SUFFdEVGLEtBQUtHLFNBQVMsR0FBR3RCO0lBRWpCbUIsS0FBS2xCLEtBQUssR0FDUmtCLEtBQUtqQixJQUFJLEdBQUcsT0FBT2lCLEtBQUtoQixPQUFPLEdBQUcsT0FDbENGLFFBQVEsU0FBU0QsSUFBSUMsS0FBSztJQUU1QixPQUFPa0I7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MtYXBwLy4vbm9kZV9tb2R1bGVzL2V4cGxhaW4tZXJyb3IvaW5kZXguanM/NmJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGdldFN0YWNrKGVycikge1xuICBpZihlcnIuc3RhY2sgJiYgZXJyLm5hbWUgJiYgZXJyLm1lc3NhZ2UpXG4gICAgcmV0dXJuIGVyci5zdGFjay5zdWJzdHJpbmcoZXJyLm5hbWUubGVuZ3RoICsgMyArIGVyci5tZXNzYWdlLmxlbmd0aClcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgZWxzZSBpZihlcnIuc3RhY2spXG4gICAgcmV0dXJuIGVyci5zdGFjay5zcGxpdCgnXFxuJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJlZml4IChhLCBiKSB7XG4gIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiAhfmIuaW5kZXhPZihlKVxuICB9KVxufVxuXG52YXIgZXhwbGFpbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVyciwgbWVzc2FnZSkge1xuICBpZighKGVyci5zdGFjayAmJiBlcnIubmFtZSAmJiBlcnIubWVzc2FnZSkpIHtcbiAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcignc3RhY2tsZXNzIGVycm9yJykpXG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgdmFyIF9lcnIgPSBuZXcgRXJyb3IobWVzc2FnZSlcbiAgdmFyIHN0YWNrID0gcmVtb3ZlUHJlZml4KGdldFN0YWNrKF9lcnIpLnNsaWNlKDEpLCBnZXRTdGFjayhlcnIpKS5qb2luKCdcXG4nKVxuXG4gIF9lcnIuX19wcm90b19fID0gZXJyXG5cbiAgX2Vyci5zdGFjayA9XG4gICAgX2Vyci5uYW1lICsgJzogJyArIF9lcnIubWVzc2FnZSArICdcXG4nICtcbiAgICBzdGFjayArICdcXG4gICcgKyBlcnIuc3RhY2tcblxuICByZXR1cm4gX2VyclxufVxuXG5cblxuIl0sIm5hbWVzIjpbImdldFN0YWNrIiwiZXJyIiwic3RhY2siLCJuYW1lIiwibWVzc2FnZSIsInN1YnN0cmluZyIsImxlbmd0aCIsInNwbGl0IiwicmVtb3ZlUHJlZml4IiwiYSIsImIiLCJmaWx0ZXIiLCJlIiwiaW5kZXhPZiIsImV4cGxhaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJfZXJyIiwic2xpY2UiLCJqb2luIiwiX19wcm90b19fIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/explain-error/index.js\n");

/***/ })

};
;