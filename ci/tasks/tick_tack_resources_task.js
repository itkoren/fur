/**
 * @file tickTackResources task.
 * @memberof module:ci/tasks
 * @function tickTackResourcesTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var async = require('async'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    copyFile = require('../../lib/util/copy_file'),
    glob = require('glob');

exports = module.exports = function (grunt, config, callback) {
    var srcDir = path.resolve(config.srcDir),
        destDir = path.resolve(config.destDir);
    async.waterfall([
        function (callback) {
            exports._expand(srcDir, config.patterns, callback);
        },
        function (src, callback) {
            async.each(src, function (src, callback) {
                var filename = path.relative(srcDir, src),
                    dest = path.resolve(destDir, filename);
                exports._copy(src, dest, callback);
            }, callback)
        }
    ], function (err) {
        if (!err) {
            console.log('File copied to dir:', destDir);
        }
        callback(err);
    });
};

exports._copy = function (src, dest, callback) {
    async.series([
        function (callback) {
            mkdirp(path.dirname(dest), callback);
        },
        function (callback) {
            copyFile(src, dest, callback);
        }
    ], callback);
};

exports._expand = function (basedir, patterns, callback) {
    async.concat(
        [].concat(patterns),
        function (pattern, callback) {
            glob(path.resolve(basedir, pattern), callback);
        },
        callback);
};