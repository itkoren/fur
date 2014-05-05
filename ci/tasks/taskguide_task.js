/**
 * @file Generate taskguide file.
 * @memberof module:ci/tasks
 * @function taskguideTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var async = require('async'),
    mkdirp = require('mkdirp'),
    taskguideWorkers = require('./taskguide_workers'),
    highlight = require("highlight").Highlight,
    _highlightCss = require('./_highlight_css'),
    path = require('path'),
    renderDotTmpl = require('../../lib/util/render_dot_tmpl');

exports = module.exports = function (grunt, config, callback) {
    var tmpl = path.resolve(config.tmpl),
        dest = path.resolve(config.dest);

    exports._data(config, function (err, data) {
        async.series([
            function (callback) {
                mkdirp(path.dirname(dest), callback);
            },
            function (callback) {
                renderDotTmpl(tmpl, data, dest, callback);
            }
        ], function (err) {
            if (!err) {
                grunt.log.writeln('File created: ', dest);
            }
            callback();
        });
    });

};

exports._data = function (config, callback) {
    async.series([
        function (callback) {
            taskguideWorkers.taskguidAvailables(callback);
        },
        function (callback) {
            taskguideWorkers.taskguideUsage(callback);
        },
        function (callback) {
            taskguideWorkers.taskguideConfig(config.configFiles, callback);
        }
    ], function (err, data) {
        callback(err, {
            highlightCss: _highlightCss(),
            availables: data[0],
            usage: data[1],
            configs: data[2]
        });
    })
};