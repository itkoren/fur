/**
 * @file Increment project version.
 * @memberof module:ci/tasks
 * @function versionupTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var fs = require('fs'),
    path = require('path');

module.exports = function (grunt, config, callback) {
    var filename = path.resolve(config.packageJsonPath),
        data = require(filename);
    var versions = data.version.split('.');
    versions.push(Number(versions.pop()) + 1);
    data.version = versions.join('.');

    fs.writeFile(filename, JSON.stringify(data, null, 4), function (err) {
        if (!err) {
            grunt.log.writeln('Version did up to:', data.version);
        }
        callback();
    });
};