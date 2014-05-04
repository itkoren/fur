/**
 * @file ico task.
 * @memberof module:ci/tasks
 * @function icoTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var ico = require('../../lib/commands/ico');

module.exports = function (grunt, config, callback) {
    ico(config.src, config.dest, {}, function (err) {
        if (!err) {
            grunt.log.writeln('ICO file created: %s', config.dest);
            callback(err);
        }
    });
};