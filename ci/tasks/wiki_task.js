/**
 * @file wiki task.
 * @memberof module:ci/tasks
 * @function wikiTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var wikiWorkers = require('./wiki_workers'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    fs = require('fs'),
    async = require('async');

exports = module.exports = function (grunt, config, callback) {
    var dest = path.resolve(config.dest),
        worker = wikiWorkers[config.worker],
        workerOptions = config.workerOptions || {};
    async.waterfall([
        function (callback) {
            worker(workerOptions, callback);
        },
        function (content, callback) {
            exports._write(dest, content, callback);
        }
    ], function (err) {
        if (!err) {
            grunt.log.writeln('File created: ', dest);
        }
        callback(err);
    });
};

exports._write = function (dest, content, callback) {
    async.series([
        function (callback) {
            mkdirp(path.dirname(dest), callback);
        },
        function (callback) {
            fs.writeFile(dest, content, callback);
        }
    ], callback);
};