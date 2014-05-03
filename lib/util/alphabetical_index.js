/**
 * @file Alphabet base index.
 * @memberof module:util
 * @function alphabeticalIndex.
 * @param {number} i - Index number.
 * @author Taka Okunishi
 *
 */

"use strict";

module.exports = function alphabeticalIndex(i) {
    var result = '';
    if (i >= 26) {
        result = alphabeticalIndex(parseInt(i / 26) - 1);
    }
    result += String.fromCharCode(97 + i % 26);
    return result;
};