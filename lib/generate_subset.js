/**
 * @memberof module:fur
 * @function generateSubset
 * @param {string} letters - Letters to generate.
 * @param {string} src - Source file name.
 * @param {string} dest - Destination file name.
 * @param {function} callback - Callback when done.
 */

"use strict";

var subsetFontFile = require('./util/subset_font_file'),
    async = require('async'),
    path = require('path'),
    fs = require('fs');

module.exports = function generateSubset(letters, src, dest, callback) {
    var workFile = path.resolve(__dirname, '.work_subset.txt.tmp');
    async.series([
        function (callback) {
            fs.writeFile(workFile, letters, callback);
        },
        function (callback) {
            subsetFontFile(workFile, src, dest, callback);
        },
        function (callback) {
            fs.unlink(workFile)
        }
    ], callback);
};