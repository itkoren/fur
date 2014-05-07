/**
 * @file Convert a png file to ico.
 * @memberof commands
 * @function ico
 * @param {string} src - Source file name.
 * @param {string} dest - Destination file name.
 * @param {function} [callback]  - Callback when done.
 * @example
 *      ico('foo.png', 'foo.ico');
 * @author Taka Okunishi
 */

"use strict";

var convertPngToIco = require('../convert_png_to_ico'),
    print = require('../util/print');

module.exports = function ico(src, dest, options, callback) {
    convertPngToIco(src, dest, options,function (err) {
        if (!err) {
            print.info('File generated:', dest);
        }
        callback && callback(err);
    });
};