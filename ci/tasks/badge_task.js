/**
 * @file badge task.
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
    generateBadgeSvg = require('../../lib/badge/generate_badge_svg');

module.exports = function (grunt, config, callback) {
    async.eachLimit(config, 4, function (config, callback) {
        var filename = config.filename;
        generateBadgeSvg(config.style,
            config.texts,
            config.colors,
            filename,
            function (err) {
                if (!err) {
                    grunt.log.writeln('Badge file created: %s', filename);
                }
                callback(err);
            }
        );
    }, callback);
};