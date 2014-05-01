/**
 * @file favicon task.
 * @memberof module:ci/tasks
 * @function faviconTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var async = require('async'),
    generateFavicon = require('../../lib/generate_favicon');

module.exports = function (grunt, config, callback) {
    async.eachSeries(config, function (config, callback) {
        var filename = config.filename,
            options = config.options;
        generateFavicon(filename, options,
            function (err) {
                if (!err) {
                    grunt.log.writeln('Favicon file created: %s', filename);
                }
                callback(err);
            });
    }, callback);
};