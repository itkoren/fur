/**
 * Create a font subset.
 * @memberof commands
 * @function subset
 * @author Taka Okunishi
 */

"use strict";

var generateSubset = require('../generate_subset'),
    print = require('../util/print');

module.exports = function subset(letter, src, dest, callback) {
    generateSubset(letter, src, dest, function (err) {
        if (!err) {
            print.info('File generated:', dest);
        }
        callback && callback(err);
    });
};