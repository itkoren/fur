/**
 * @file Generate catalog files.
 * @memberof module:ci/tasks
 * @function catalogTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var path = require('path'),
    async = require('async'),
    catalogWorkers = require('./catalog_workers'),
    writeReadonlyFile = require('../../lib/util/write_readonly_file');

exports = module.exports = function (grunt, config, callback) {
    var dest = path.resolve(config.dest);
    async.waterfall([
        function (callback) {
            var worker = catalogWorkers[config.worker];
            if (!worker) {
                callback(new Error('Unknown worker: ' + config.worker));
                return;
            }
            worker(config.workerOptions || {}, callback);
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
                    callback(err);
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