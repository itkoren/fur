/**
 * @file Scaffold task.
 * @memberof module:ci/task
 * @function scaffoldTask
 *
 */
var async = require('async'),
    grunt = require('grunt'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    renderDotTmpl = require('../../lib/util/render_dot_tmpl');

module.exports = function () {
    var task = this,
        done = task.async(),
        config = task.data;
    async.eachLimit(config, 5, function (config, callback) {
        var dest = config.filename;
        fs.exists(dest, function (exists) {
            if (exists) {
                callback();
                return;
            }
            mkdirp(path.dirname(dest), function (err) {
                if (err) {
                    callback(err);
                    return;
                }
                renderDotTmpl(config.tmpl, config.data, dest, function (err) {
                    if (err) {
                        grunt.log.error(err);
                    } else {
                        grunt.log.writeln('File created: ' + dest);
                    }
                    callback(err);
                });
            });
        });
    }, function () {
        done();
    });
};