/**
 * @file testcase task.
 * @memberof module:ci/tasks
 * @function testcaseTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {string} confir.srcBase - Source base directory name.
 * @param {string} config.srcPattern - Source file name pattern.
 * @param {string} config.tmpl - Template file name.
 * @param {stirng} config.dest - Destination file name.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var async = require('async'),
    mkdirp = require('mkdirp'),
    glob = require('glob'),
    changeCase = require('change-case'),
    path = require('path'),
    renderDotTmpl = require('../../lib/util/render_dot_tmpl');

exports = module.exports = function (grunt, config, callback) {
    var srcBase = path.resolve(config.srcBase),
        src = path.resolve(srcBase, config.srcPattern),
        tmpl = path.resolve(config.tmpl),
        dest = path.resolve(config.dest);
    async.waterfall([
        function (callback) {
            glob(src, callback);
        },
        function (src, callback) {
            exports._testFiles(srcBase, src, callback);
        }
    ], function (err, data) {
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
};

exports._testFiles = function (base, filenames, callback) {
    function toKey(dirname) {
        return changeCase.camelCase(path.basename(dirname));
    }

    function toKeys(dirname) {
        return dirname.split(path.sep)
            .map(function (name) {
                return toKey(name);
            }).join('.');
    }

    var root = 'unitTests';
    callback(null, {
        root: root,
        namespaces: filenames
            .map(function (filename) {
                var dirname = path.dirname(filename);
                return path.relative(base, dirname)
            })
            .filter(function (dirname) {
                return !!dirname;
            })
            .sort(function (a, b) {
                return a.split(path.sep).length - b.split(path.sep).length;
            })
            .filter(function (dirname, i, drinames) {
                return drinames.indexOf(dirname) == i
            })
            .map(function (dirname) {
                return {
                    parent: toKeys(path.join(root, path.dirname(dirname))),
                    name: toKey(dirname),
                    dirname: dirname,
                    keys: toKeys(dirname)
                }
            }),
        suites: filenames
            .map(function (filename) {
                return {
                    filename: path.relative(base, filename),
                    data: require(filename)
                }
            })
            .map(function (file) {
                var filename = file.filename,
                    data = file.data;
                var extname = path.extname(filename),
                    basename = path.basename(filename, extname);
                var dirname = path.dirname(filename);
                return {
                    parent: toKeys(path.join(root, dirname)),
                    name: toKey(basename.replace()),
                    keys: toKeys(path.join(dirname, basename)),
                    testcases: Object.keys(data).map(function (key) {
                        return {
                            name: key,
                            filename: filename
                        }
                    })
                }
            })
    });
};