/**
 * @file Generate a badge.
 * @see {@link http://www.npmjs.org/package/gh-badges|gh-badges}
 * @memberof commands
 * @function badge
 * @param {string} filename - Filename to generate.
 * @param {object} options - Optional settings.
 * @param {string} [options.colorTheme='a'] - Color theme name.
 * @param {string} options.style - "default" or "flat".
 * @param {string} options.texts - Badge texts.
 * @param {function} callback - Callback when done.
 * @example
 *      badge('foo.png', {
 *          colorTheme: 'e',
 *          texts: 'powered by, apeman ',
 *          style: 'flat'
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