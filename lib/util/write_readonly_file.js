/**
 * @file Write a readonly file.
 * @memberof util
 * @function writeReadonlyFile
 * @param {string} filename - File name to write.
 * @param {string} content - Content to write.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 */

var fs = require('fs'),
    async = require('async');

module.exports = function (filename, content, callback) {
    async.series([
        function (callback) {
            fs.exists(filename, function (exists) {
                if (exists) {
                    fs.chmod(filename, '777', callback);
                } else {
                    callback(null);
                }
            })
        },
        function (callback) {
            fs.writeFile(filename, content, callback);
        },
        function (callback) {
            fs.chmod(filename, '444', callback);
        }
    ], callback);
};