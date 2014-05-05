/**
 * Generate a badge.
 * @memberof commands
 * @function badge
 * @param {string} src - Source file name.
 * @param {string} dest - Destination file name.
 * @param {function} [callback]  - Callback when done.
 * @example
 *      badge('foo.png', {
 *          colorTheme: 'e',
 *          texts: 'powered by, apeman '
 *      });
 * @author Taka Okunishi
 */

"use strict";

var generateBadge = require('../generate_badge'),
    print = require('../util/print');

module.exports = function badge(filename, options, callback) {
    generateBadge(filename, options, function (err) {
        if (!err) {
            print.info('File generated:', filename);
        }
        callback && callback(err);
    });
};