/**
 * @file logo task.
 * @memberof module:ci/tasks
 * @function logoTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var async = require('async'),
    generateLogo = require('../../lib/generate_logo');

module.exports = function (grunt, config, callback) {
    async.eachSeries(config, function (config, callback) {
        var filename = config.filename;
        generateLogo(filename, config.options,
            function (err) {
                if (!err) {
                    grunt.log.writeln('Logo file created: %s', filename);
                }
                callback(err);
            });
    }, callback);
};