"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/utf-8-validate";
exports.ids = ["vendor-chunks/utf-8-validate"];
exports.modules = {

/***/ "(ssr)/./node_modules/utf-8-validate/fallback.js":
/*!*************************************************!*\
  !*** ./node_modules/utf-8-validate/fallback.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n/**\n * Checks if a given buffer contains only correct UTF-8.\n * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by\n * Markus Kuhn.\n *\n * @param {Buffer} buf The buffer to check\n * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`\n * @public\n */ function isValidUTF8(buf) {\n    const len = buf.length;\n    let i = 0;\n    while(i < len){\n        if ((buf[i] & 0x80) === 0x00) {\n            i++;\n        } else if ((buf[i] & 0xe0) === 0xc0) {\n            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // overlong\n            ) {\n                return false;\n            }\n            i += 2;\n        } else if ((buf[i] & 0xf0) === 0xe0) {\n            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || // overlong\n            buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // surrogate (U+D800 - U+DFFF)\n            ) {\n                return false;\n            }\n            i += 3;\n        } else if ((buf[i] & 0xf8) === 0xf0) {\n            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || // overlong\n            buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF\n            ) {\n                return false;\n            }\n            i += 4;\n        } else {\n            return false;\n        }\n    }\n    return true;\n}\nmodule.exports = isValidUTF8;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvZmFsbGJhY2suanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Q0FRQyxHQUNELFNBQVNBLFlBQVlDLEdBQUc7SUFDdEIsTUFBTUMsTUFBTUQsSUFBSUUsTUFBTTtJQUN0QixJQUFJQyxJQUFJO0lBRVIsTUFBT0EsSUFBSUYsSUFBSztRQUNkLElBQUksQ0FBQ0QsR0FBRyxDQUFDRyxFQUFFLEdBQUcsSUFBRyxNQUFPLE1BQU07WUFDNUJBO1FBQ0YsT0FBTyxJQUFJLENBQUNILEdBQUcsQ0FBQ0csRUFBRSxHQUFHLElBQUcsTUFBTyxNQUFNO1lBQ25DLElBQ0VBLElBQUksTUFBTUYsT0FDVixDQUFDRCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxRQUN4QixDQUFDSCxHQUFHLENBQUNHLEVBQUUsR0FBRyxJQUFHLE1BQU8sS0FBTSxXQUFXO2NBQ3JDO2dCQUNBLE9BQU87WUFDVDtZQUVBQSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUNILEdBQUcsQ0FBQ0csRUFBRSxHQUFHLElBQUcsTUFBTyxNQUFNO1lBQ25DLElBQ0VBLElBQUksS0FBS0YsT0FDVCxDQUFDRCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxRQUN4QixDQUFDSCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxRQUN4QkgsR0FBRyxDQUFDRyxFQUFFLEtBQUssUUFBUSxDQUFDSCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxRQUFTLFdBQVc7WUFDL0RILEdBQUcsQ0FBQ0csRUFBRSxLQUFLLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRyxJQUFJLEVBQUUsR0FBRyxJQUFHLE1BQU8sS0FBTSw4QkFBOEI7Y0FDL0U7Z0JBQ0EsT0FBTztZQUNUO1lBRUFBLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQ0gsR0FBRyxDQUFDRyxFQUFFLEdBQUcsSUFBRyxNQUFPLE1BQU07WUFDbkMsSUFDRUEsSUFBSSxLQUFLRixPQUNULENBQUNELEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCSCxHQUFHLENBQUNHLEVBQUUsS0FBSyxRQUFRLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQVMsV0FBVztZQUMvREgsR0FBRyxDQUFDRyxFQUFFLEtBQUssUUFBUUgsR0FBRyxDQUFDRyxJQUFJLEVBQUUsR0FBRyxRQUFRSCxHQUFHLENBQUNHLEVBQUUsR0FBRyxLQUFNLGFBQWE7Y0FDcEU7Z0JBQ0EsT0FBTztZQUNUO1lBRUFBLEtBQUs7UUFDUCxPQUFPO1lBQ0wsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQUMsT0FBT0MsT0FBTyxHQUFHTiIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MtYXBwLy4vbm9kZV9tb2R1bGVzL3V0Zi04LXZhbGlkYXRlL2ZhbGxiYWNrLmpzPzQ2ODkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIGJ1ZmZlciBjb250YWlucyBvbmx5IGNvcnJlY3QgVVRGLTguXG4gKiBQb3J0ZWQgZnJvbSBodHRwczovL3d3dy5jbC5jYW0uYWMudWsvJTdFbWdrMjUvdWNzL3V0ZjhfY2hlY2suYyBieVxuICogTWFya3VzIEt1aG4uXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiBUaGUgYnVmZmVyIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYGJ1ZmAgY29udGFpbnMgb25seSBjb3JyZWN0IFVURi04LCBlbHNlIGBmYWxzZWBcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFVURjgoYnVmKSB7XG4gIGNvbnN0IGxlbiA9IGJ1Zi5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGlmICgoYnVmW2ldICYgMHg4MCkgPT09IDB4MDApIHsgIC8vIDB4eHh4eHh4XG4gICAgICBpKys7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhlMCkgPT09IDB4YzApIHsgIC8vIDExMHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAxID09PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2ldICYgMHhmZSkgPT09IDB4YzAgIC8vIG92ZXJsb25nXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDI7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmMCkgPT09IDB4ZTApIHsgIC8vIDExMTB4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAyID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgYnVmW2ldID09PSAweGUwICYmIChidWZbaSArIDFdICYgMHhlMCkgPT09IDB4ODAgfHwgIC8vIG92ZXJsb25nXG4gICAgICAgIGJ1ZltpXSA9PT0gMHhlZCAmJiAoYnVmW2kgKyAxXSAmIDB4ZTApID09PSAweGEwICAvLyBzdXJyb2dhdGUgKFUrRDgwMCAtIFUrREZGRilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gMztcbiAgICB9IGVsc2UgaWYgKChidWZbaV0gJiAweGY4KSA9PT0gMHhmMCkgeyAgLy8gMTExMTB4eHggMTB4eHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgIGlmIChcbiAgICAgICAgaSArIDMgPj0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgMl0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2kgKyAzXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIGJ1ZltpXSA9PT0gMHhmMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZjApID09PSAweDgwIHx8ICAvLyBvdmVybG9uZ1xuICAgICAgICBidWZbaV0gPT09IDB4ZjQgJiYgYnVmW2kgKyAxXSA+IDB4OGYgfHwgYnVmW2ldID4gMHhmNCAgLy8gPiBVKzEwRkZGRlxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNWYWxpZFVURjg7XG4iXSwibmFtZXMiOlsiaXNWYWxpZFVURjgiLCJidWYiLCJsZW4iLCJsZW5ndGgiLCJpIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utf-8-validate/fallback.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/utf-8-validate/index.js":
/*!**********************************************!*\
  !*** ./node_modules/utf-8-validate/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\ntry {\n    module.exports = __webpack_require__(/*! node-gyp-build */ \"(ssr)/./node_modules/node-gyp-build/index.js\")(__dirname);\n} catch (e) {\n    module.exports = __webpack_require__(/*! ./fallback */ \"(ssr)/./node_modules/utf-8-validate/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJO0lBQ0ZBLE9BQU9DLE9BQU8sR0FBR0MsbUJBQU9BLENBQUMsc0VBQWtCQztBQUM3QyxFQUFFLE9BQU9DLEdBQUc7SUFDVkoseUdBQXlCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy1hcHAvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvaW5kZXguanM/YWY2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnbm9kZS1neXAtYnVpbGQnKShfX2Rpcm5hbWUpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFsbGJhY2snKTtcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIl9fZGlybmFtZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utf-8-validate/index.js\n");

/***/ })

};
;