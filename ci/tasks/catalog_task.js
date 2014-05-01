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

exports = module.exports = function (grunt, config, callback) {
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
            var content = exports._toJson(data);
            var changed = exports._toJson(exports._requireSafely(dest)) !== content;
            callback(null, changed, content)
        },
        function (changed, content, callback) {
            if (changed) {
                writeReadonlyFile(dest, content, function (err) {
                    if (!err) {
                        grunt.log.writeln('File created:%s', dest);
                    }
                });
            } else {
                callback();
            }
        }
    ], function (err) {
        callback(err);
    });
};
exports._toJson = function (data) {
    return data && JSON.stringify(data, null, 4);
};
exports._requireSafely = function (filename) {
    try {
        return require(filename);
    } catch (e) {
        return null;
    }
};