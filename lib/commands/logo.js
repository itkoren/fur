/**
 * @file Logo command.
 * @memberof commands
 * @function logo
 * @param {string} filename - File name to generate.
 * @param {object} options - Optional settings.
 * @param {string} [options.colorTheme='a'] - Color theme name.
 * @param {string} [options.fontTheme='a'] - Font theme name.
 * @param {number} [options.fontSize] - Font size.
 * @param {string} [options.format] - File format ('svg', 'png'). Default value is filename extension.
 * @param {number} [options.width=512] - Image width.
 * @param {number} [options.height=256] - Image height.
 * @param {string} [options.style='simple', 'circle', 'bordered'] - Style name.
 * @param {string} [options.text='foo'] - Text to draw.
 * @param {number} [options.textLeft=0] - Text left position.
 * @param {number} [options.textTop=0] - Text top position.
 * @param {function} callback - Callback when done.
 * @example
 *      logo('foo.svg', {
 *          fontTheme: 'a',
 *          colorTheme: 'e',
 *          text: 'tt'
 *      }, function(err) {
 *      }
 * @author Taka Okunishi
 *
 */

"use strict";

var generateLogo = require('../generate_logo'),
    print = require('../util/print');

module.exports = function logo(filename, options, callback) {
    generateLogo(filename, options, function (err) {
        if (!err) {
            print.info('File generated:', filename);
        }
        callback && callback(err);
    });
};