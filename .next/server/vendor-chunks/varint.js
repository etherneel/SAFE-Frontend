"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/varint";
exports.ids = ["vendor-chunks/varint"];
exports.modules = {

/***/ "(ssr)/./node_modules/varint/decode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/decode.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nmodule.exports = read;\nvar MSB = 0x80, REST = 0x7F;\nfunction read(buf, offset) {\n    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;\n    do {\n        if (counter >= l || shift > 49) {\n            read.bytes = 0;\n            throw new RangeError(\"Could not decode varint\");\n        }\n        b = buf[counter++];\n        res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);\n        shift += 7;\n    }while (b >= MSB);\n    read.bytes = counter - offset;\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2RlY29kZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTSxNQUNOQyxPQUFPO0FBRVgsU0FBU0YsS0FBS0csR0FBRyxFQUFFQyxNQUFNO0lBQ3ZCLElBQUlDLE1BQVMsR0FDVEQsU0FBU0EsVUFBVSxHQUNuQkUsUUFBUyxHQUNUQyxVQUFVSCxRQUNWSSxHQUNBQyxJQUFJTixJQUFJTyxNQUFNO0lBRWxCLEdBQUc7UUFDRCxJQUFJSCxXQUFXRSxLQUFLSCxRQUFRLElBQUk7WUFDOUJOLEtBQUtXLEtBQUssR0FBRztZQUNiLE1BQU0sSUFBSUMsV0FBVztRQUN2QjtRQUNBSixJQUFJTCxHQUFHLENBQUNJLFVBQVU7UUFDbEJGLE9BQU9DLFFBQVEsS0FDWCxDQUFDRSxJQUFJTixJQUFHLEtBQU1JLFFBQ2QsQ0FBQ0UsSUFBSU4sSUFBRyxJQUFLVyxLQUFLQyxHQUFHLENBQUMsR0FBR1I7UUFDN0JBLFNBQVM7SUFDWCxRQUFTRSxLQUFLUCxLQUFJO0lBRWxCRCxLQUFLVyxLQUFLLEdBQUdKLFVBQVVIO0lBRXZCLE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLWFwcC8uL25vZGVfbW9kdWxlcy92YXJpbnQvZGVjb2RlLmpzP2ZjMGIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZWFkXG5cbnZhciBNU0IgPSAweDgwXG4gICwgUkVTVCA9IDB4N0ZcblxuZnVuY3Rpb24gcmVhZChidWYsIG9mZnNldCkge1xuICB2YXIgcmVzICAgID0gMFxuICAgICwgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgICAsIHNoaWZ0ICA9IDBcbiAgICAsIGNvdW50ZXIgPSBvZmZzZXRcbiAgICAsIGJcbiAgICAsIGwgPSBidWYubGVuZ3RoXG5cbiAgZG8ge1xuICAgIGlmIChjb3VudGVyID49IGwgfHwgc2hpZnQgPiA0OSkge1xuICAgICAgcmVhZC5ieXRlcyA9IDBcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDb3VsZCBub3QgZGVjb2RlIHZhcmludCcpXG4gICAgfVxuICAgIGIgPSBidWZbY291bnRlcisrXVxuICAgIHJlcyArPSBzaGlmdCA8IDI4XG4gICAgICA/IChiICYgUkVTVCkgPDwgc2hpZnRcbiAgICAgIDogKGIgJiBSRVNUKSAqIE1hdGgucG93KDIsIHNoaWZ0KVxuICAgIHNoaWZ0ICs9IDdcbiAgfSB3aGlsZSAoYiA+PSBNU0IpXG5cbiAgcmVhZC5ieXRlcyA9IGNvdW50ZXIgLSBvZmZzZXRcblxuICByZXR1cm4gcmVzXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlYWQiLCJNU0IiLCJSRVNUIiwiYnVmIiwib2Zmc2V0IiwicmVzIiwic2hpZnQiLCJjb3VudGVyIiwiYiIsImwiLCJsZW5ndGgiLCJieXRlcyIsIlJhbmdlRXJyb3IiLCJNYXRoIiwicG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/decode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/encode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/encode.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nmodule.exports = encode;\nvar MSB = 0x80, REST = 0x7F, MSBALL = ~REST, INT = Math.pow(2, 31);\nfunction encode(num, out, offset) {\n    if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {\n        encode.bytes = 0;\n        throw new RangeError(\"Could not encode varint\");\n    }\n    out = out || [];\n    offset = offset || 0;\n    var oldOffset = offset;\n    while(num >= INT){\n        out[offset++] = num & 0xFF | MSB;\n        num /= 128;\n    }\n    while(num & MSBALL){\n        out[offset++] = num & 0xFF | MSB;\n        num >>>= 7;\n    }\n    out[offset] = num | 0;\n    encode.bytes = offset - oldOffset + 1;\n    return out;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2VuY29kZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTSxNQUNOQyxPQUFPLE1BQ1BDLFNBQVMsQ0FBQ0QsTUFDVkUsTUFBTUMsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFFdEIsU0FBU04sT0FBT08sR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU07SUFDOUIsSUFBSUMsT0FBT0MsZ0JBQWdCLElBQUlKLE1BQU1HLE9BQU9DLGdCQUFnQixFQUFFO1FBQzVEWCxPQUFPWSxLQUFLLEdBQUc7UUFDZixNQUFNLElBQUlDLFdBQVc7SUFDdkI7SUFDQUwsTUFBTUEsT0FBTyxFQUFFO0lBQ2ZDLFNBQVNBLFVBQVU7SUFDbkIsSUFBSUssWUFBWUw7SUFFaEIsTUFBTUYsT0FBT0gsSUFBSztRQUNoQkksR0FBRyxDQUFDQyxTQUFTLEdBQUcsTUFBTyxPQUFRUjtRQUMvQk0sT0FBTztJQUNUO0lBQ0EsTUFBTUEsTUFBTUosT0FBUTtRQUNsQkssR0FBRyxDQUFDQyxTQUFTLEdBQUcsTUFBTyxPQUFRUjtRQUMvQk0sU0FBUztJQUNYO0lBQ0FDLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHRixNQUFNO0lBRXBCUCxPQUFPWSxLQUFLLEdBQUdILFNBQVNLLFlBQVk7SUFFcEMsT0FBT047QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MtYXBwLy4vbm9kZV9tb2R1bGVzL3ZhcmludC9lbmNvZGUuanM/Yzk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGVuY29kZVxuXG52YXIgTVNCID0gMHg4MFxuICAsIFJFU1QgPSAweDdGXG4gICwgTVNCQUxMID0gflJFU1RcbiAgLCBJTlQgPSBNYXRoLnBvdygyLCAzMSlcblxuZnVuY3Rpb24gZW5jb2RlKG51bSwgb3V0LCBvZmZzZXQpIHtcbiAgaWYgKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICYmIG51bSA+IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgZW5jb2RlLmJ5dGVzID0gMFxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDb3VsZCBub3QgZW5jb2RlIHZhcmludCcpXG4gIH1cbiAgb3V0ID0gb3V0IHx8IFtdXG4gIG9mZnNldCA9IG9mZnNldCB8fCAwXG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcblxuICB3aGlsZShudW0gPj0gSU5UKSB7XG4gICAgb3V0W29mZnNldCsrXSA9IChudW0gJiAweEZGKSB8IE1TQlxuICAgIG51bSAvPSAxMjhcbiAgfVxuICB3aGlsZShudW0gJiBNU0JBTEwpIHtcbiAgICBvdXRbb2Zmc2V0KytdID0gKG51bSAmIDB4RkYpIHwgTVNCXG4gICAgbnVtID4+Pj0gN1xuICB9XG4gIG91dFtvZmZzZXRdID0gbnVtIHwgMFxuICBcbiAgZW5jb2RlLmJ5dGVzID0gb2Zmc2V0IC0gb2xkT2Zmc2V0ICsgMVxuICBcbiAgcmV0dXJuIG91dFxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbmNvZGUiLCJNU0IiLCJSRVNUIiwiTVNCQUxMIiwiSU5UIiwiTWF0aCIsInBvdyIsIm51bSIsIm91dCIsIm9mZnNldCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJieXRlcyIsIlJhbmdlRXJyb3IiLCJvbGRPZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/encode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/index.js":
/*!**************************************!*\
  !*** ./node_modules/varint/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = {\n    encode: __webpack_require__(/*! ./encode.js */ \"(ssr)/./node_modules/varint/encode.js\"),\n    decode: __webpack_require__(/*! ./decode.js */ \"(ssr)/./node_modules/varint/decode.js\"),\n    encodingLength: __webpack_require__(/*! ./length.js */ \"(ssr)/./node_modules/varint/length.js\")\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHO0lBQ2JDLFFBQVFDLG1CQUFPQSxDQUFDO0lBQ2hCQyxRQUFRRCxtQkFBT0EsQ0FBQztJQUNoQkUsZ0JBQWdCRixtQkFBT0EsQ0FBQztBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MtYXBwLy4vbm9kZV9tb2R1bGVzL3ZhcmludC9pbmRleC5qcz9iNmI0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGVuY29kZTogcmVxdWlyZSgnLi9lbmNvZGUuanMnKVxuICAsIGRlY29kZTogcmVxdWlyZSgnLi9kZWNvZGUuanMnKVxuICAsIGVuY29kaW5nTGVuZ3RoOiByZXF1aXJlKCcuL2xlbmd0aC5qcycpXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImVuY29kZSIsInJlcXVpcmUiLCJkZWNvZGUiLCJlbmNvZGluZ0xlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/length.js":
/*!***************************************!*\
  !*** ./node_modules/varint/length.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nvar N1 = Math.pow(2, 7);\nvar N2 = Math.pow(2, 14);\nvar N3 = Math.pow(2, 21);\nvar N4 = Math.pow(2, 28);\nvar N5 = Math.pow(2, 35);\nvar N6 = Math.pow(2, 42);\nvar N7 = Math.pow(2, 49);\nvar N8 = Math.pow(2, 56);\nvar N9 = Math.pow(2, 63);\nmodule.exports = function(value) {\n    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2xlbmd0aC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSUEsS0FBS0MsS0FBS0MsR0FBRyxDQUFDLEdBQUk7QUFDdEIsSUFBSUMsS0FBS0YsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSUUsS0FBS0gsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSUcsS0FBS0osS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSUksS0FBS0wsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSUssS0FBS04sS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSU0sS0FBS1AsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSU8sS0FBS1IsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSVEsS0FBS1QsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFFckJTLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxLQUFLO0lBQzlCLE9BQ0VBLFFBQVFiLEtBQUssSUFDYmEsUUFBUVYsS0FBSyxJQUNiVSxRQUFRVCxLQUFLLElBQ2JTLFFBQVFSLEtBQUssSUFDYlEsUUFBUVAsS0FBSyxJQUNiTyxRQUFRTixLQUFLLElBQ2JNLFFBQVFMLEtBQUssSUFDYkssUUFBUUosS0FBSyxJQUNiSSxRQUFRSCxLQUFLLElBQ0E7QUFFakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLWFwcC8uL25vZGVfbW9kdWxlcy92YXJpbnQvbGVuZ3RoLmpzP2YwZGIiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgTjEgPSBNYXRoLnBvdygyLCAgNylcbnZhciBOMiA9IE1hdGgucG93KDIsIDE0KVxudmFyIE4zID0gTWF0aC5wb3coMiwgMjEpXG52YXIgTjQgPSBNYXRoLnBvdygyLCAyOClcbnZhciBONSA9IE1hdGgucG93KDIsIDM1KVxudmFyIE42ID0gTWF0aC5wb3coMiwgNDIpXG52YXIgTjcgPSBNYXRoLnBvdygyLCA0OSlcbnZhciBOOCA9IE1hdGgucG93KDIsIDU2KVxudmFyIE45ID0gTWF0aC5wb3coMiwgNjMpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPCBOMSA/IDFcbiAgOiB2YWx1ZSA8IE4yID8gMlxuICA6IHZhbHVlIDwgTjMgPyAzXG4gIDogdmFsdWUgPCBONCA/IDRcbiAgOiB2YWx1ZSA8IE41ID8gNVxuICA6IHZhbHVlIDwgTjYgPyA2XG4gIDogdmFsdWUgPCBONyA/IDdcbiAgOiB2YWx1ZSA8IE44ID8gOFxuICA6IHZhbHVlIDwgTjkgPyA5XG4gIDogICAgICAgICAgICAgIDEwXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOMSIsIk1hdGgiLCJwb3ciLCJOMiIsIk4zIiwiTjQiLCJONSIsIk42IiwiTjciLCJOOCIsIk45IiwibW9kdWxlIiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/length.js\n");

/***/ })

};
;