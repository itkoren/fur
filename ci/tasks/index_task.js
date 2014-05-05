/**
 * @file index task.
 * @memberof module:ci/tasks
 * @function indexTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var changeCase = require('change-case'),
    async = require('async'),
    path = require('path'),
    glob = require('glob'),
    renderDotTmpl = require('../../lib/util/render_dot_tmpl');

exports = module.exports = function (grunt, config, callback) {
    var pattern = path.resolve(config.pattern),
        dest = path.resolve(config.dest),
        destDir = path.dirname(dest),
        tmpl = path.resolve(config.tmpl);
    async.waterfall([
        function (callback) {
            exports._data(destDir, pattern, callback);
        },
        function (data, callback) {
            renderDotTmpl(tmpl, data, dest, callback);
        }
    ], function (err) {
        if (!err) {
            grunt.log.writeln('File created: ', dest);
        }
        callback(err);
    })
};

exports._data = function (destDir, pattern, callback) {
    async.waterfall([
        function (callback) {
            glob(pattern, callback);
        },
        function (filenames, callback) {
            var data = {
                moduleName: path.relative('.', destDir).split(path.sep).map(function (dirname) {
                    return changeCase.camelCase(dirname);
                }).join('/'),
                subModules: filenames.map(function (filename) {
                    var extname = path.extname(filename),
                        basename = path.basename(filename, extname);
                    return {
                        exportsName: changeCase.camelCase(basename),
                        requireName: path.join(',', path.relative(destDir, filename))
                    }
                })
            }
            callback(null, data);
        }
    ], callback);
};