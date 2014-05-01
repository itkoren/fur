/**
 * @file catalog task.
 * @memberof module:ci/tasks
 * @function catalogTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var glob = require('glob'),
    path = require('path'),
    async = require('async'),
    writeReadonlyFile = require('../../lib/util/write_readonly_file');

module.exports = function (grunt, config, callback) {
    var dest = path.resolve(config.dest),
        pattern = path.resolve(config.pattern),
        basedir = process.cwd();
    async.waterfall([
        function (callback) {
            glob(pattern, callback);
        },
        function (src, callback) {
            var data = {};
            src.forEach(function (src) {
                var extname = path.extname(src),
                    basename = path.basename(src, extname);
                data[basename] = {
                    filename: path.relative(basedir, src),
                    type: extname.replace(/\./g, '')
                }
            });
            callback(null, data);
        },
        function (data, callback) {
            var content = JSON.stringify(data, null, 4);
            writeReadonlyFile(dest, content, callback);
        }
    ], function (err) {
        if (!err) {
            grunt.log.writeln('File created:%s', dest);
        }
        callback(err);
    });
};