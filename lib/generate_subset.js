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
    letters = (letters || '')
        .split('')
        .filter(function (letter, i, array) {
            return array.indexOf(letter) === i;
        })
        .sort(function (a, b) {
            return a.localeCompare(b);
        })
        .join('');
    var workFile = path.resolve(__dirname, '.work_subset.txt.tmp');
    async.series([
        function (callback) {
            fs.writeFile(workFile, letters, callback);
        },
        function (callback) {
            subsetFontFile(workFile,
                path.resolve(src),
                path.resolve(dest),
                callback);
        },
        function (callback) {
            fs.unlink(workFile)
        }
    ], callback);
};