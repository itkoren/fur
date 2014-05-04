/**
 * @file Favicon command.
 * @memberof commands
 * @function favicon
 * @param {string} filename - Filename to generate.
 * @param {object} options - Command options.
 * @param {function} [callback] - Callback when done.
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
    print = require('../util/print');

module.exports = function favicon(filename, options, callback) {
    generateFavicon(filename, options, function (err) {
        if (!err) {
            print.info('File generated:', filename);
        }
        callback && callback(err);
    });
};