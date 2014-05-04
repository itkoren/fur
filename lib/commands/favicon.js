/**
 * @file Favicon command.
 * @memberof catalogs
 * @function favicon
 * @param {object} options - Command options.
 * @param {string} options.font - Font theme name.
 * @param {string} options.color - Color theme name.
 * @param {string} options.letter - Letter to print on font.
 * @param {function} callback - Callback when done.
 * @example
 *      favicon('foo.svg', {
 *          font: 'a',
 *          color: 'e',
 *          text: 'tt'
 *      }, function() {
 *      }
 * @author Taka Okunishi
 *
 */

"use strict";

var generateFavicon = require('../generate_favicon'),
    catalogs = require('../catalogs'),
    print = require('../util/print'),
    path = require('path');

module.exports = function favicon(filename, options, callback) {
    var colorScheme = catalogs.colorSchemeCatalog[options.color || 'a'],
        webFont = catalogs.webFontCatalog[options.font || 'a'],
        letter = options.text || options.letter || path.basename(filename)[0];
    generateFavicon(filename, {
        format: options.format || 'png',
        size: options.size || 256,
        style: options.style || 'simple',
        fontFamily: webFont.fontFamily,
        fontFilename: webFont.filename,
        letter: letter,
        backgroundColor: colorScheme.colors[0]
    }, function (err) {
        if (!err) {
            print.info('File generated:', filename);
        }
        callback(err);
    });
};