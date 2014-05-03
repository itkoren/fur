/**
 * @file gallery task.
 * @memberof module:ci/tasks
 * @function galleryTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var path = require('path'),
    async = require('async'),
    util = require('util'),
    galleryWorkers = require('./gallery_workers'),
    renderDotFile = require('../../lib/util/render_dot_tmpl');

exports = module.exports = function (grunt, config, callback) {
    var basedir = process.cwd();
    async.eachSeries([].concat(config), function (config, callback) {
        var tmpl = path.resolve(config.tmpl),
            dest = path.resolve(config.file);
        exports._data(config.worker, config.workerOptions, function (err, data) {
            var destDir = path.dirname(dest);
            data.relativePathToBaseDir = path.relative(destDir, basedir);
            renderDotFile(tmpl, data, dest, function (err) {
                if (!err) {
                    grunt.log.writeln('File crated:', dest);
                }
                callback(err);
            });
        });
    }, callback);
};

exports._data = function (worker, workerOptions, callback) {
    if (!worker) {
        callback(null, {});
        return;
    }
    var isValid = !!galleryWorkers[worker];
    if (!isValid) {
        callback(new Error('Unknown worker: ' + worker));
        return;
    }
    galleryWorkers[worker](workerOptions || {}, callback);

};