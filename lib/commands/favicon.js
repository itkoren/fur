/**
 * @file Favicon command.
 * @memberof commands
 * @function favicon
 * @param {string} filename - File name to generate.
 * @param {object} options - Optional settings.
 * @param {string} [options.colorTheme='a'] - Color theme name.
 * @param {string} [options.fontTheme='a'] - Font theme name.
 * @param {number} [options.fontSize] - Font size.
 * @param {string} [options.format] - File format ('svg', 'png'). Default value is filename extension.
 * @param {number} [options.size=256] - Image size.
 * @param {string} [options.style='simple'] - Style name.
 * @param {string} [options.text='foo'] - Text to draw.
 * @param {number} [options.textLeft=0] - Text left position.
 * @param {number} [options.textTop=0] - Text top position.
 * @param {function} callback - Callback when done.
 * @param {function} [callback] - Callback when done.
 * @example
 *      favicon('foo.svg', {
 *          fontTheme: 'a',
 *          colorTheme: 'e',
 *          text: 'tt'
 *      }, function() {
 *      }
 * @author Taka Okunishi
 *
 */

"use strict";

var generateFavicon = require('../generate_favicon'),
    print = require('../util/print');

module.exports = function favicon(filename, options, callback) {
    generateFavicon(filename, options, function (err) {
        if (!err) {
            print.info('File generated:', filename);
        }
        callback && callback(err);
    });
};