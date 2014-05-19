/**
 * @file Copy static file.
 * @memberof module:ci/tasks
 * @function staticWorkers.staticCopy
 * @param {object} options
 * @param {string} options.src - Source file name.
 * @param {string} options.dest - Destination file name.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";

var path = require('path'),
    mkdirp = require('mkdirp'),
    async = require('async'),
    copyFile = require('../../../lib/util/copy_file');

exports = module.exports = function staticCopy(options, callback) {
    var src = path.resolve(options.src),
        dest = [].concat(options.dest || []).map(function (dest) {
            return path.resolve(dest);
        });
    async.each(dest, function (dest, callback) {
        exports._copy(src, dest, callback);
    }, callback);

};

exports._copy = function (src, dest, callback) {
    async.series([
        function (callback) {
            mkdirp(path.dirname(dest), callback);
        },
        function (callback) {
            copyFile(src, dest, callback);
        }
    ], function (err) {
        var msg = !!err ? null : 'File copied to:' + dest;
        callback(err, msg);

    });
};