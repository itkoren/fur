/**
 * @file static task.
 * @memberof module:ci/tasks
 * @function staticTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";

var staticWorkers = require('./static_workers'),
    async = require('async');

module.exports = function (grunt, config, callback) {
    async.eachSeries(
        [].concat(config),
        function (config, callback) {
            var worker = staticWorkers[config.worker],
                options = config.workerOptions || {};
            worker(options, function (err, msg) {
                if (!!msg) {
                    grunt.log.writeln(msg);
                }
                callback(err);
            });
        },
        function (err) {
            callback(err);
        }
    )
};