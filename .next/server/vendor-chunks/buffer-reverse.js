"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-reverse";
exports.ids = ["vendor-chunks/buffer-reverse"];
exports.modules = {

/***/ "(ssr)/./node_modules/buffer-reverse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/buffer-reverse/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\nmodule.exports = function reverse(src) {\n    var buffer = new Buffer(src.length);\n    for(var i = 0, j = src.length - 1; i <= j; ++i, --j){\n        buffer[i] = src[j];\n        buffer[j] = src[i];\n    }\n    return buffer;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnVmZmVyLXJldmVyc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFBQSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsUUFBU0MsR0FBRztJQUNwQyxJQUFJQyxTQUFTLElBQUlDLE9BQU9GLElBQUlHLE1BQU07SUFFbEMsSUFBSyxJQUFJQyxJQUFJLEdBQUdDLElBQUlMLElBQUlHLE1BQU0sR0FBRyxHQUFHQyxLQUFLQyxHQUFHLEVBQUVELEdBQUcsRUFBRUMsRUFBRztRQUNwREosTUFBTSxDQUFDRyxFQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssRUFBRTtRQUNsQkosTUFBTSxDQUFDSSxFQUFFLEdBQUdMLEdBQUcsQ0FBQ0ksRUFBRTtJQUNwQjtJQUVBLE9BQU9IO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLWFwcC8uL25vZGVfbW9kdWxlcy9idWZmZXItcmV2ZXJzZS9pbmRleC5qcz8yZWFiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmV2ZXJzZSAoc3JjKSB7XG4gIHZhciBidWZmZXIgPSBuZXcgQnVmZmVyKHNyYy5sZW5ndGgpXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBzcmMubGVuZ3RoIC0gMTsgaSA8PSBqOyArK2ksIC0taikge1xuICAgIGJ1ZmZlcltpXSA9IHNyY1tqXVxuICAgIGJ1ZmZlcltqXSA9IHNyY1tpXVxuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlclxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXZlcnNlIiwic3JjIiwiYnVmZmVyIiwiQnVmZmVyIiwibGVuZ3RoIiwiaSIsImoiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/buffer-reverse/index.js\n");

/***/ })

};
;