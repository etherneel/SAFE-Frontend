"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rlp";
exports.ids = ["vendor-chunks/rlp"];
exports.modules = {

/***/ "(ssr)/./node_modules/rlp/dist/index.js":
/*!****************************************!*\
  !*** ./node_modules/rlp/dist/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar __importDefault = (void 0) && (void 0).__importDefault || function(mod) {\n    return mod && mod.__esModule ? mod : {\n        \"default\": mod\n    };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.getLength = exports.decode = exports.encode = void 0;\nconst bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ \"(ssr)/./node_modules/bn.js/lib/bn.js\"));\n/**\n * RLP Encoding based on: https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP\n * This function takes in a data, convert it to buffer if not, and a length for recursion\n * @param input - will be converted to buffer\n * @returns returns buffer of encoded data\n **/ function encode(input) {\n    if (Array.isArray(input)) {\n        const output = [];\n        for(let i = 0; i < input.length; i++){\n            output.push(encode(input[i]));\n        }\n        const buf = Buffer.concat(output);\n        return Buffer.concat([\n            encodeLength(buf.length, 192),\n            buf\n        ]);\n    } else {\n        const inputBuf = toBuffer(input);\n        return inputBuf.length === 1 && inputBuf[0] < 128 ? inputBuf : Buffer.concat([\n            encodeLength(inputBuf.length, 128),\n            inputBuf\n        ]);\n    }\n}\nexports.encode = encode;\n/**\n * Parse integers. Check if there is no leading zeros\n * @param v The value to parse\n * @param base The base to parse the integer into\n */ function safeParseInt(v, base) {\n    if (v[0] === \"0\" && v[1] === \"0\") {\n        throw new Error(\"invalid RLP: extra zeros\");\n    }\n    return parseInt(v, base);\n}\nfunction encodeLength(len, offset) {\n    if (len < 56) {\n        return Buffer.from([\n            len + offset\n        ]);\n    } else {\n        const hexLength = intToHex(len);\n        const lLength = hexLength.length / 2;\n        const firstByte = intToHex(offset + 55 + lLength);\n        return Buffer.from(firstByte + hexLength, \"hex\");\n    }\n}\nfunction decode(input, stream = false) {\n    if (!input || input.length === 0) {\n        return Buffer.from([]);\n    }\n    const inputBuffer = toBuffer(input);\n    const decoded = _decode(inputBuffer);\n    if (stream) {\n        return decoded;\n    }\n    if (decoded.remainder.length !== 0) {\n        throw new Error(\"invalid remainder\");\n    }\n    return decoded.data;\n}\nexports.decode = decode;\n/**\n * Get the length of the RLP input\n * @param input\n * @returns The length of the input or an empty Buffer if no input\n */ function getLength(input) {\n    if (!input || input.length === 0) {\n        return Buffer.from([]);\n    }\n    const inputBuffer = toBuffer(input);\n    const firstByte = inputBuffer[0];\n    if (firstByte <= 0x7f) {\n        return inputBuffer.length;\n    } else if (firstByte <= 0xb7) {\n        return firstByte - 0x7f;\n    } else if (firstByte <= 0xbf) {\n        return firstByte - 0xb6;\n    } else if (firstByte <= 0xf7) {\n        // a list between  0-55 bytes long\n        return firstByte - 0xbf;\n    } else {\n        // a list  over 55 bytes long\n        const llength = firstByte - 0xf6;\n        const length = safeParseInt(inputBuffer.slice(1, llength).toString(\"hex\"), 16);\n        return llength + length;\n    }\n}\nexports.getLength = getLength;\n/** Decode an input with RLP */ function _decode(input) {\n    let length, llength, data, innerRemainder, d;\n    const decoded = [];\n    const firstByte = input[0];\n    if (firstByte <= 0x7f) {\n        // a single byte whose value is in the [0x00, 0x7f] range, that byte is its own RLP encoding.\n        return {\n            data: input.slice(0, 1),\n            remainder: input.slice(1)\n        };\n    } else if (firstByte <= 0xb7) {\n        // string is 0-55 bytes long. A single byte with value 0x80 plus the length of the string followed by the string\n        // The range of the first byte is [0x80, 0xb7]\n        length = firstByte - 0x7f;\n        // set 0x80 null to 0\n        if (firstByte === 0x80) {\n            data = Buffer.from([]);\n        } else {\n            data = input.slice(1, length);\n        }\n        if (length === 2 && data[0] < 0x80) {\n            throw new Error(\"invalid rlp encoding: byte must be less 0x80\");\n        }\n        return {\n            data: data,\n            remainder: input.slice(length)\n        };\n    } else if (firstByte <= 0xbf) {\n        // string is greater than 55 bytes long. A single byte with the value (0xb7 plus the length of the length),\n        // followed by the length, followed by the string\n        llength = firstByte - 0xb6;\n        if (input.length - 1 < llength) {\n            throw new Error(\"invalid RLP: not enough bytes for string length\");\n        }\n        length = safeParseInt(input.slice(1, llength).toString(\"hex\"), 16);\n        if (length <= 55) {\n            throw new Error(\"invalid RLP: expected string length to be greater than 55\");\n        }\n        data = input.slice(llength, length + llength);\n        if (data.length < length) {\n            throw new Error(\"invalid RLP: not enough bytes for string\");\n        }\n        return {\n            data: data,\n            remainder: input.slice(length + llength)\n        };\n    } else if (firstByte <= 0xf7) {\n        // a list between  0-55 bytes long\n        length = firstByte - 0xbf;\n        innerRemainder = input.slice(1, length);\n        while(innerRemainder.length){\n            d = _decode(innerRemainder);\n            decoded.push(d.data);\n            innerRemainder = d.remainder;\n        }\n        return {\n            data: decoded,\n            remainder: input.slice(length)\n        };\n    } else {\n        // a list  over 55 bytes long\n        llength = firstByte - 0xf6;\n        length = safeParseInt(input.slice(1, llength).toString(\"hex\"), 16);\n        const totalLength = llength + length;\n        if (totalLength > input.length) {\n            throw new Error(\"invalid rlp: total length is larger than the data\");\n        }\n        innerRemainder = input.slice(llength, totalLength);\n        if (innerRemainder.length === 0) {\n            throw new Error(\"invalid rlp, List has a invalid length\");\n        }\n        while(innerRemainder.length){\n            d = _decode(innerRemainder);\n            decoded.push(d.data);\n            innerRemainder = d.remainder;\n        }\n        return {\n            data: decoded,\n            remainder: input.slice(totalLength)\n        };\n    }\n}\n/** Check if a string is prefixed by 0x */ function isHexPrefixed(str) {\n    return str.slice(0, 2) === \"0x\";\n}\n/** Removes 0x from a given String */ function stripHexPrefix(str) {\n    if (typeof str !== \"string\") {\n        return str;\n    }\n    return isHexPrefixed(str) ? str.slice(2) : str;\n}\n/** Transform an integer into its hexadecimal value */ function intToHex(integer) {\n    if (integer < 0) {\n        throw new Error(\"Invalid integer as argument, must be unsigned!\");\n    }\n    const hex = integer.toString(16);\n    return hex.length % 2 ? `0${hex}` : hex;\n}\n/** Pad a string to be even */ function padToEven(a) {\n    return a.length % 2 ? `0${a}` : a;\n}\n/** Transform an integer into a Buffer */ function intToBuffer(integer) {\n    const hex = intToHex(integer);\n    return Buffer.from(hex, \"hex\");\n}\n/** Transform anything into a Buffer */ function toBuffer(v) {\n    if (!Buffer.isBuffer(v)) {\n        if (typeof v === \"string\") {\n            if (isHexPrefixed(v)) {\n                return Buffer.from(padToEven(stripHexPrefix(v)), \"hex\");\n            } else {\n                return Buffer.from(v);\n            }\n        } else if (typeof v === \"number\" || typeof v === \"bigint\") {\n            if (!v) {\n                return Buffer.from([]);\n            } else {\n                return intToBuffer(v);\n            }\n        } else if (v === null || v === undefined) {\n            return Buffer.from([]);\n        } else if (v instanceof Uint8Array) {\n            return Buffer.from(v);\n        } else if (bn_js_1.default.isBN(v)) {\n            // converts a BN to a Buffer\n            return Buffer.from(v.toArray());\n        } else {\n            throw new Error(\"invalid type\");\n        }\n    }\n    return v;\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmxwL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixJQUFJQSxrQkFBa0IsQ0FBQyxNQUFHLEtBQUssT0FBRyxFQUFFQSxlQUFlLElBQUssU0FBVUMsR0FBRztJQUNqRSxPQUFPLE9BQVFBLElBQUlDLFVBQVUsR0FBSUQsTUFBTTtRQUFFLFdBQVdBO0lBQUk7QUFDNUQ7QUFDQUUsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELGlCQUFpQixHQUFHQSxjQUFjLEdBQUdBLGNBQWMsR0FBRyxLQUFLO0FBQzNELE1BQU1LLFVBQVVWLGdCQUFnQlcsbUJBQU9BLENBQUMsbURBQU87QUFDL0M7Ozs7O0VBS0UsR0FDRixTQUFTRixPQUFPRyxLQUFLO0lBQ2pCLElBQUlDLE1BQU1DLE9BQU8sQ0FBQ0YsUUFBUTtRQUN0QixNQUFNRyxTQUFTLEVBQUU7UUFDakIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlKLE1BQU1LLE1BQU0sRUFBRUQsSUFBSztZQUNuQ0QsT0FBT0csSUFBSSxDQUFDVCxPQUFPRyxLQUFLLENBQUNJLEVBQUU7UUFDL0I7UUFDQSxNQUFNRyxNQUFNQyxPQUFPQyxNQUFNLENBQUNOO1FBQzFCLE9BQU9LLE9BQU9DLE1BQU0sQ0FBQztZQUFDQyxhQUFhSCxJQUFJRixNQUFNLEVBQUU7WUFBTUU7U0FBSTtJQUM3RCxPQUNLO1FBQ0QsTUFBTUksV0FBV0MsU0FBU1o7UUFDMUIsT0FBT1csU0FBU04sTUFBTSxLQUFLLEtBQUtNLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFDeENBLFdBQ0FILE9BQU9DLE1BQU0sQ0FBQztZQUFDQyxhQUFhQyxTQUFTTixNQUFNLEVBQUU7WUFBTU07U0FBUztJQUN0RTtBQUNKO0FBQ0FsQixjQUFjLEdBQUdJO0FBQ2pCOzs7O0NBSUMsR0FDRCxTQUFTZ0IsYUFBYUMsQ0FBQyxFQUFFQyxJQUFJO0lBQ3pCLElBQUlELENBQUMsQ0FBQyxFQUFFLEtBQUss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QUFTN0IsU0FBU0UsQ0FBQztJQUNmLElBQUksQ0FBQ04sT0FBT3FDLFFBQVEsQ0FBQy9CLElBQUk7UUFDckIsSUFBSSxPQUFPQSxNQUFNLFVBQVU7WUFDdkIsSUFBSXVCLGNBQWN2QixJQUFJO2dCQUNsQixPQUFPTixPQUFPWSxJQUFJLENBQUNzQixVQUFVSCxlQUFlekIsS0FBSztZQUNyRCxPQUNLO2dCQUNELE9BQU9OLE9BQU9ZLElBQUksQ0FBQ047WUFDdkI7UUFDSixPQUNLLElBQUksT0FBT0EsTUFBTSxZQUFZLE9BQU9BLE1BQU0sVUFBVTtZQUNyRCxJQUFJLENBQUNBLEdBQUc7Z0JBQ0osT0FBT04sT0FBT1ksSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FDSztnQkFDRCxPQUFPd0IsWUFBWTlCO1lBQ3ZCO1FBQ0osT0FDSyxJQUFJQSxNQUFNLFFBQVFBLE1BQU1nQyxXQUFXO1lBQ3BDLE9BQU90QyxPQUFPWSxJQUFJLENBQUMsRUFBRTtRQUN6QixPQUNLLElBQUlOLGFBQWFpQyxZQUFZO1lBQzlCLE9BQU92QyxPQUFPWSxJQUFJLENBQUNOO1FBQ3ZCLE9BQ0ssSUFBSWhCLFFBQVFrRCxPQUFPLENBQUNDLElBQUksQ0FBQ25DLElBQUk7WUFDOUIsNEJBQTRCO1lBQzVCLE9BQU9OLE9BQU9ZLElBQUksQ0FBQ04sRUFBRW9DLE9BQU87UUFDaEMsT0FDSztZQUNELE1BQU0sSUFBSWxDLE1BQU07UUFDcEI7SUFDSjtJQUNBLE9BQU9GO0FBQ1gsRUFDQSxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLWFwcC8uL25vZGVfbW9kdWxlcy9ybHAvZGlzdC9pbmRleC5qcz8yMDc5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRMZW5ndGggPSBleHBvcnRzLmRlY29kZSA9IGV4cG9ydHMuZW5jb2RlID0gdm9pZCAwO1xuY29uc3QgYm5fanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYm4uanNcIikpO1xuLyoqXG4gKiBSTFAgRW5jb2RpbmcgYmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS93aWtpL3dpa2kvJTVCRW5nbGlzaCU1RC1STFBcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgaW4gYSBkYXRhLCBjb252ZXJ0IGl0IHRvIGJ1ZmZlciBpZiBub3QsIGFuZCBhIGxlbmd0aCBmb3IgcmVjdXJzaW9uXG4gKiBAcGFyYW0gaW5wdXQgLSB3aWxsIGJlIGNvbnZlcnRlZCB0byBidWZmZXJcbiAqIEByZXR1cm5zIHJldHVybnMgYnVmZmVyIG9mIGVuY29kZWQgZGF0YVxuICoqL1xuZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChlbmNvZGUoaW5wdXRbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWYgPSBCdWZmZXIuY29uY2F0KG91dHB1dCk7XG4gICAgICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFtlbmNvZGVMZW5ndGgoYnVmLmxlbmd0aCwgMTkyKSwgYnVmXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpbnB1dEJ1ZiA9IHRvQnVmZmVyKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGlucHV0QnVmLmxlbmd0aCA9PT0gMSAmJiBpbnB1dEJ1ZlswXSA8IDEyOFxuICAgICAgICAgICAgPyBpbnB1dEJ1ZlxuICAgICAgICAgICAgOiBCdWZmZXIuY29uY2F0KFtlbmNvZGVMZW5ndGgoaW5wdXRCdWYubGVuZ3RoLCAxMjgpLCBpbnB1dEJ1Zl0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuLyoqXG4gKiBQYXJzZSBpbnRlZ2Vycy4gQ2hlY2sgaWYgdGhlcmUgaXMgbm8gbGVhZGluZyB6ZXJvc1xuICogQHBhcmFtIHYgVGhlIHZhbHVlIHRvIHBhcnNlXG4gKiBAcGFyYW0gYmFzZSBUaGUgYmFzZSB0byBwYXJzZSB0aGUgaW50ZWdlciBpbnRvXG4gKi9cbmZ1bmN0aW9uIHNhZmVQYXJzZUludCh2LCBiYXNlKSB7XG4gICAgaWYgKHZbMF0gPT09ICcwJyAmJiB2WzFdID09PSAnMCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIFJMUDogZXh0cmEgemVyb3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KHYsIGJhc2UpO1xufVxuZnVuY3Rpb24gZW5jb2RlTGVuZ3RoKGxlbiwgb2Zmc2V0KSB7XG4gICAgaWYgKGxlbiA8IDU2KSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShbbGVuICsgb2Zmc2V0XSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBoZXhMZW5ndGggPSBpbnRUb0hleChsZW4pO1xuICAgICAgICBjb25zdCBsTGVuZ3RoID0gaGV4TGVuZ3RoLmxlbmd0aCAvIDI7XG4gICAgICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IGludFRvSGV4KG9mZnNldCArIDU1ICsgbExlbmd0aCk7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShmaXJzdEJ5dGUgKyBoZXhMZW5ndGgsICdoZXgnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQsIHN0cmVhbSA9IGZhbHNlKSB7XG4gICAgaWYgKCFpbnB1dCB8fCBpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKFtdKTtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRCdWZmZXIgPSB0b0J1ZmZlcihpbnB1dCk7XG4gICAgY29uc3QgZGVjb2RlZCA9IF9kZWNvZGUoaW5wdXRCdWZmZXIpO1xuICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZWQ7XG4gICAgfVxuICAgIGlmIChkZWNvZGVkLnJlbWFpbmRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHJlbWFpbmRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZC5kYXRhO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBSTFAgaW5wdXRcbiAqIEBwYXJhbSBpbnB1dFxuICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgaW5wdXQgb3IgYW4gZW1wdHkgQnVmZmVyIGlmIG5vIGlucHV0XG4gKi9cbmZ1bmN0aW9uIGdldExlbmd0aChpbnB1dCkge1xuICAgIGlmICghaW5wdXQgfHwgaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShbXSk7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0QnVmZmVyID0gdG9CdWZmZXIoaW5wdXQpO1xuICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IGlucHV0QnVmZmVyWzBdO1xuICAgIGlmIChmaXJzdEJ5dGUgPD0gMHg3Zikge1xuICAgICAgICByZXR1cm4gaW5wdXRCdWZmZXIubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIGlmIChmaXJzdEJ5dGUgPD0gMHhiNykge1xuICAgICAgICByZXR1cm4gZmlyc3RCeXRlIC0gMHg3ZjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmlyc3RCeXRlIDw9IDB4YmYpIHtcbiAgICAgICAgcmV0dXJuIGZpcnN0Qnl0ZSAtIDB4YjY7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZpcnN0Qnl0ZSA8PSAweGY3KSB7XG4gICAgICAgIC8vIGEgbGlzdCBiZXR3ZWVuICAwLTU1IGJ5dGVzIGxvbmdcbiAgICAgICAgcmV0dXJuIGZpcnN0Qnl0ZSAtIDB4YmY7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhIGxpc3QgIG92ZXIgNTUgYnl0ZXMgbG9uZ1xuICAgICAgICBjb25zdCBsbGVuZ3RoID0gZmlyc3RCeXRlIC0gMHhmNjtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2FmZVBhcnNlSW50KGlucHV0QnVmZmVyLnNsaWNlKDEsIGxsZW5ndGgpLnRvU3RyaW5nKCdoZXgnKSwgMTYpO1xuICAgICAgICByZXR1cm4gbGxlbmd0aCArIGxlbmd0aDtcbiAgICB9XG59XG5leHBvcnRzLmdldExlbmd0aCA9IGdldExlbmd0aDtcbi8qKiBEZWNvZGUgYW4gaW5wdXQgd2l0aCBSTFAgKi9cbmZ1bmN0aW9uIF9kZWNvZGUoaW5wdXQpIHtcbiAgICBsZXQgbGVuZ3RoLCBsbGVuZ3RoLCBkYXRhLCBpbm5lclJlbWFpbmRlciwgZDtcbiAgICBjb25zdCBkZWNvZGVkID0gW107XG4gICAgY29uc3QgZmlyc3RCeXRlID0gaW5wdXRbMF07XG4gICAgaWYgKGZpcnN0Qnl0ZSA8PSAweDdmKSB7XG4gICAgICAgIC8vIGEgc2luZ2xlIGJ5dGUgd2hvc2UgdmFsdWUgaXMgaW4gdGhlIFsweDAwLCAweDdmXSByYW5nZSwgdGhhdCBieXRlIGlzIGl0cyBvd24gUkxQIGVuY29kaW5nLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogaW5wdXQuc2xpY2UoMCwgMSksXG4gICAgICAgICAgICByZW1haW5kZXI6IGlucHV0LnNsaWNlKDEpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChmaXJzdEJ5dGUgPD0gMHhiNykge1xuICAgICAgICAvLyBzdHJpbmcgaXMgMC01NSBieXRlcyBsb25nLiBBIHNpbmdsZSBieXRlIHdpdGggdmFsdWUgMHg4MCBwbHVzIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyBmb2xsb3dlZCBieSB0aGUgc3RyaW5nXG4gICAgICAgIC8vIFRoZSByYW5nZSBvZiB0aGUgZmlyc3QgYnl0ZSBpcyBbMHg4MCwgMHhiN11cbiAgICAgICAgbGVuZ3RoID0gZmlyc3RCeXRlIC0gMHg3ZjtcbiAgICAgICAgLy8gc2V0IDB4ODAgbnVsbCB0byAwXG4gICAgICAgIGlmIChmaXJzdEJ5dGUgPT09IDB4ODApIHtcbiAgICAgICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gaW5wdXQuc2xpY2UoMSwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuZ3RoID09PSAyICYmIGRhdGFbMF0gPCAweDgwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgcmxwIGVuY29kaW5nOiBieXRlIG11c3QgYmUgbGVzcyAweDgwJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICByZW1haW5kZXI6IGlucHV0LnNsaWNlKGxlbmd0aCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGZpcnN0Qnl0ZSA8PSAweGJmKSB7XG4gICAgICAgIC8vIHN0cmluZyBpcyBncmVhdGVyIHRoYW4gNTUgYnl0ZXMgbG9uZy4gQSBzaW5nbGUgYnl0ZSB3aXRoIHRoZSB2YWx1ZSAoMHhiNyBwbHVzIHRoZSBsZW5ndGggb2YgdGhlIGxlbmd0aCksXG4gICAgICAgIC8vIGZvbGxvd2VkIGJ5IHRoZSBsZW5ndGgsIGZvbGxvd2VkIGJ5IHRoZSBzdHJpbmdcbiAgICAgICAgbGxlbmd0aCA9IGZpcnN0Qnl0ZSAtIDB4YjY7XG4gICAgICAgIGlmIChpbnB1dC5sZW5ndGggLSAxIDwgbGxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIFJMUDogbm90IGVub3VnaCBieXRlcyBmb3Igc3RyaW5nIGxlbmd0aCcpO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCA9IHNhZmVQYXJzZUludChpbnB1dC5zbGljZSgxLCBsbGVuZ3RoKS50b1N0cmluZygnaGV4JyksIDE2KTtcbiAgICAgICAgaWYgKGxlbmd0aCA8PSA1NSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIFJMUDogZXhwZWN0ZWQgc3RyaW5nIGxlbmd0aCB0byBiZSBncmVhdGVyIHRoYW4gNTUnKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0gaW5wdXQuc2xpY2UobGxlbmd0aCwgbGVuZ3RoICsgbGxlbmd0aCk7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIFJMUDogbm90IGVub3VnaCBieXRlcyBmb3Igc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICByZW1haW5kZXI6IGlucHV0LnNsaWNlKGxlbmd0aCArIGxsZW5ndGgpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChmaXJzdEJ5dGUgPD0gMHhmNykge1xuICAgICAgICAvLyBhIGxpc3QgYmV0d2VlbiAgMC01NSBieXRlcyBsb25nXG4gICAgICAgIGxlbmd0aCA9IGZpcnN0Qnl0ZSAtIDB4YmY7XG4gICAgICAgIGlubmVyUmVtYWluZGVyID0gaW5wdXQuc2xpY2UoMSwgbGVuZ3RoKTtcbiAgICAgICAgd2hpbGUgKGlubmVyUmVtYWluZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgZCA9IF9kZWNvZGUoaW5uZXJSZW1haW5kZXIpO1xuICAgICAgICAgICAgZGVjb2RlZC5wdXNoKGQuZGF0YSk7XG4gICAgICAgICAgICBpbm5lclJlbWFpbmRlciA9IGQucmVtYWluZGVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBkZWNvZGVkLFxuICAgICAgICAgICAgcmVtYWluZGVyOiBpbnB1dC5zbGljZShsZW5ndGgpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYSBsaXN0ICBvdmVyIDU1IGJ5dGVzIGxvbmdcbiAgICAgICAgbGxlbmd0aCA9IGZpcnN0Qnl0ZSAtIDB4ZjY7XG4gICAgICAgIGxlbmd0aCA9IHNhZmVQYXJzZUludChpbnB1dC5zbGljZSgxLCBsbGVuZ3RoKS50b1N0cmluZygnaGV4JyksIDE2KTtcbiAgICAgICAgY29uc3QgdG90YWxMZW5ndGggPSBsbGVuZ3RoICsgbGVuZ3RoO1xuICAgICAgICBpZiAodG90YWxMZW5ndGggPiBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBybHA6IHRvdGFsIGxlbmd0aCBpcyBsYXJnZXIgdGhhbiB0aGUgZGF0YScpO1xuICAgICAgICB9XG4gICAgICAgIGlubmVyUmVtYWluZGVyID0gaW5wdXQuc2xpY2UobGxlbmd0aCwgdG90YWxMZW5ndGgpO1xuICAgICAgICBpZiAoaW5uZXJSZW1haW5kZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgcmxwLCBMaXN0IGhhcyBhIGludmFsaWQgbGVuZ3RoJyk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGlubmVyUmVtYWluZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgZCA9IF9kZWNvZGUoaW5uZXJSZW1haW5kZXIpO1xuICAgICAgICAgICAgZGVjb2RlZC5wdXNoKGQuZGF0YSk7XG4gICAgICAgICAgICBpbm5lclJlbWFpbmRlciA9IGQucmVtYWluZGVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBkZWNvZGVkLFxuICAgICAgICAgICAgcmVtYWluZGVyOiBpbnB1dC5zbGljZSh0b3RhbExlbmd0aCksXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqIENoZWNrIGlmIGEgc3RyaW5nIGlzIHByZWZpeGVkIGJ5IDB4ICovXG5mdW5jdGlvbiBpc0hleFByZWZpeGVkKHN0cikge1xuICAgIHJldHVybiBzdHIuc2xpY2UoMCwgMikgPT09ICcweCc7XG59XG4vKiogUmVtb3ZlcyAweCBmcm9tIGEgZ2l2ZW4gU3RyaW5nICovXG5mdW5jdGlvbiBzdHJpcEhleFByZWZpeChzdHIpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIGlzSGV4UHJlZml4ZWQoc3RyKSA/IHN0ci5zbGljZSgyKSA6IHN0cjtcbn1cbi8qKiBUcmFuc2Zvcm0gYW4gaW50ZWdlciBpbnRvIGl0cyBoZXhhZGVjaW1hbCB2YWx1ZSAqL1xuZnVuY3Rpb24gaW50VG9IZXgoaW50ZWdlcikge1xuICAgIGlmIChpbnRlZ2VyIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW50ZWdlciBhcyBhcmd1bWVudCwgbXVzdCBiZSB1bnNpZ25lZCEnKTtcbiAgICB9XG4gICAgY29uc3QgaGV4ID0gaW50ZWdlci50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIGhleC5sZW5ndGggJSAyID8gYDAke2hleH1gIDogaGV4O1xufVxuLyoqIFBhZCBhIHN0cmluZyB0byBiZSBldmVuICovXG5mdW5jdGlvbiBwYWRUb0V2ZW4oYSkge1xuICAgIHJldHVybiBhLmxlbmd0aCAlIDIgPyBgMCR7YX1gIDogYTtcbn1cbi8qKiBUcmFuc2Zvcm0gYW4gaW50ZWdlciBpbnRvIGEgQnVmZmVyICovXG5mdW5jdGlvbiBpbnRUb0J1ZmZlcihpbnRlZ2VyKSB7XG4gICAgY29uc3QgaGV4ID0gaW50VG9IZXgoaW50ZWdlcik7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGhleCwgJ2hleCcpO1xufVxuLyoqIFRyYW5zZm9ybSBhbnl0aGluZyBpbnRvIGEgQnVmZmVyICovXG5mdW5jdGlvbiB0b0J1ZmZlcih2KSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSGV4UHJlZml4ZWQodikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20ocGFkVG9FdmVuKHN0cmlwSGV4UHJlZml4KHYpKSwgJ2hleCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdiA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50VG9CdWZmZXIodik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChibl9qc18xLmRlZmF1bHQuaXNCTih2KSkge1xuICAgICAgICAgICAgLy8gY29udmVydHMgYSBCTiB0byBhIEJ1ZmZlclxuICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHYudG9BcnJheSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0eXBlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZ2V0TGVuZ3RoIiwiZGVjb2RlIiwiZW5jb2RlIiwiYm5fanNfMSIsInJlcXVpcmUiLCJpbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsIm91dHB1dCIsImkiLCJsZW5ndGgiLCJwdXNoIiwiYnVmIiwiQnVmZmVyIiwiY29uY2F0IiwiZW5jb2RlTGVuZ3RoIiwiaW5wdXRCdWYiLCJ0b0J1ZmZlciIsInNhZmVQYXJzZUludCIsInYiLCJiYXNlIiwiRXJyb3IiLCJwYXJzZUludCIsImxlbiIsIm9mZnNldCIsImZyb20iLCJoZXhMZW5ndGgiLCJpbnRUb0hleCIsImxMZW5ndGgiLCJmaXJzdEJ5dGUiLCJzdHJlYW0iLCJpbnB1dEJ1ZmZlciIsImRlY29kZWQiLCJfZGVjb2RlIiwicmVtYWluZGVyIiwiZGF0YSIsImxsZW5ndGgiLCJzbGljZSIsInRvU3RyaW5nIiwiaW5uZXJSZW1haW5kZXIiLCJkIiwidG90YWxMZW5ndGgiLCJpc0hleFByZWZpeGVkIiwic3RyIiwic3RyaXBIZXhQcmVmaXgiLCJpbnRlZ2VyIiwiaGV4IiwicGFkVG9FdmVuIiwiYSIsImludFRvQnVmZmVyIiwiaXNCdWZmZXIiLCJ1bmRlZmluZWQiLCJVaW50OEFycmF5IiwiZGVmYXVsdCIsImlzQk4iLCJ0b0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rlp/dist/index.js\n");

/***/ })

};
;