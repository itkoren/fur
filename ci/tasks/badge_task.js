/**
 * @file Generate badges.
 * @memberof module:ci/tasks
 * @function badgeTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";

var async = require('async'),
    generateBadge = require('../../lib/generate_badge');

module.exports = function (grunt, config, callback) {
    async.eachSeries(config, function (config, callback) {
        var filename = config.filename,
            options = config.options;
        generateBadge(filename, options,
            function (err) {
                if (!err) {
                    grunt.log.writeln('Badge file created: %s', filename);
                }
                callback(err);
            }
        );
    }, callback);
};