/**
 * @file Scaffold task.
 * @memberof module:ci/task
 * @function scaffoldTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */
var async = require('async'),
    grunt = require('grunt'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    renderDotTmpl = require('../../lib/util/render_dot_tmpl');

module.exports = function (grunt, config, callback) {
    async.eachLimit(config, 5, function (config, callback) {
        var dest = config.filename,
            tmpl = config.tmpl,
            data = config.data;
        fs.exists(dest, function (exists) {
            if (exists) {
                callback();
                return;
            }
            async.series([
                function (callback) {
                    mkdirp(path.dirname(dest), callback);
                },
                function (callback) {
                    renderDotTmpl(tmpl, data, dest, callback);
                }
            ], function (err) {
                if (!err) {
                    grunt.log.writeln('File created: ' + dest);
                }
                callback(err);
            });
        });
    }, callback);
};