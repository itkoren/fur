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

module.exports = function staticCopy(options, callback) {
    var src = path.resolve(options.src),
        dest = path.resolve(options.dest);
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