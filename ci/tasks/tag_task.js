/**
 * @file Create a tag on remote git.
 * @memberof module:ci/tasks
 * @function tagTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var fs = require('fs'),
    childProcess = require('child_process'),
    util = require('util'),
    path = require('path');


exports = module.exports = function (grunt, config, callback) {
    var packageData = require(path.resolve(config.packageJsonPath)),
        tagName = util.format('v%s', packageData.version);

    exports._tagExists(tagName, function (err, exists) {
        if (err) {
            callback(err);
            return;
        }
        if (exists) {
            grunt.log.writeln('Tag %s already exists.', tagName);
            return;
        }
        exports._addTag(tagName, function (err) {
            if (err) {
                callback(err);
                return;
            }
            exports._pushTags(function (err) {
                if (!err) {
                    grunt.log.writeln('New tag created: %s', tagName);
                }
                callback(err);
            });
        });
    });
};

exports._execCommand = function (command, callback) {
    childProcess.exec(command, function (err, stdOut, stdErr) {
        callback(err || stdErr || null, !!stdOut);
    });
};

/**
 * Find out if a tag exists of not.
 * @param {string} tagName - Tag name to find out.
 * @param {function} callback - Callback when done.
 * @private
 */
exports._tagExists = function (tagName, callback) {
    var command = util.format('git tag -l %s', tagName);
    exports._execCommand(command, callback);
};

/**
 * Add new tag.
 * @param {string} tagName - Tag name to add.
 * @param {function} callback - Callback when done.
 * @private
 */
exports._addTag = function (tagName, callback) {
    var command = util.format('git tag %s', tagName);
    exports._execCommand(command, callback);
};

/**
 * Push tags.
 * @param {function} callback - Callback when done.
 * @private
 */
exports._pushTags = function (callback) {
    var command = 'git push --tags';
    exports._execCommand(command, callback);
};





