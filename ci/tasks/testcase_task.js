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
            var testFiles = src.map(function (filename) {
                return path.relative(srcBase, filename);
            })
            exports._testFiles(testFiles, callback);
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

exports._testFiles = function (filenames, callback) {
    var dirnames = filenames.map(function (filename) {
        return exports._dirnames(filename);
    }).reduce(function (result, dirnames) {
        dirnames.forEach(function (dirname) {
            var notFound = result.indexOf(dirname) === -1;
            if (notFound) {
                result.push(dirname);
            }
        });
        return result;
    }, []);
    callback(null, {
            testcases: dirnames.concat(filenames)
                .sort(function (a, b) {
                    return a.localeCompare(b);
                })
                .map(function (filename) {
                    var dirname = path.dirname(filename),
                        extname = path.extname(filename),
                        basename = path.basename(filename, extname);
                    return {
                        dirnames: dirname.split(path.sep).filter(function (dirname) {
                            return dirname !== '.';
                        }),
                        name: changeCase.camelCase(basename)
                    }
                })
                .filter(function (data) {
                    return !!data.name;
                })
        }
    )
    ;
};

exports._dirnames = function (filename) {
    var dirname = path.dirname(filename);
    var isRoot = dirname === filename;
    var result = [dirname];
    return isRoot ? result : result.concat(exports._dirnames(dirname));
};