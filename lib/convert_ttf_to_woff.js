/**
 * @file Convert a tt file to woff.
 * @memberof module:fur
 * @function convertTtfToWoff
 * @param {string} src - Source file name.
 * @param {string} dest - Destination file name.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 */

var ttf2woff = require('ttf2woff'),
    async = require('async'),
    fs = require('fs');

module.exports = function convertTtfToWoff(src, dest, callback) {
    async.waterfall([
        function (callback) {
            fs.readFile(src, callback);
        },
        function (buffer, callback) {
            var ttf = new Uint8Array(buffer),
                woff = new Buffer(ttf2woff(ttf, {}).buffer);
            callback(null, woff);
        },
        function (woff, callback) {
            fs.writeFile(dest, woff, callback);
        }
    ], callback);
};