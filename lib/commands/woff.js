/**
 * @file Convert a ttf file to woff.
 * @memberof commands
 * @function woff
 * @param {string} src - Source ttf file path.
 * @param {string} dest - Destination woff file path.
 * @param {object} options - Convert options.
 * @param {function} callback - Callback when done.
 * @example
 *      resize('favicon.png', {
 *          width: 32,
 *          height: 32
 *      }, function(err) {
 *      }
 *
 * @author Taka Okunishi
 *
 */

"use strict";

var convertTtfToWoff = require('../convert_ttf_to_woff'),
    print = require('../util/print');

module.exports = function resize(src, dest, options, callback) {
    convertTtfToWoff(src, dest, options, function (err) {
        if (!err) {
            print.info('File generated:', dest);
        }
        callback && callback(err);
    });
};