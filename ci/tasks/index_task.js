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
    fs = require('fs'),
    renderDotTmpl = require('../../lib/util/render_dot_tmpl');


exports = module.exports = function (grunt, config, callback) {
    var pattern = path.resolve(config.pattern),
        dest = path.resolve(config.dest),
        destDir = path.dirname(dest),
        tmpl = path.resolve(config.tmpl);
    async.waterfall([
        function (callback) {
            fs.exists(dest, function (exists) {
                if (exists) {
                    fs.chmod(dest, '777', callback);
                } else {
                    callback(null);
                }
            });
        },
        function (callback) {
            exports._data(destDir, pattern, callback);
        },
        function (data, callback) {
            data.moduleName = config.moduleName || data.moduleName;
            data.description = config.description || '';
            data.see = [].concat(config.see || []);
            if (config.capitalize) {
                data.subModules = data.subModules.map(function (subModule) {
                    subModule.exportsName = exports._capitalize(subModule.exportsName);
                    return subModule;
                });
            }
            renderDotTmpl(tmpl, data, dest, callback);
        },
        function (changed, callback) {
            if (changed) {
                grunt.log.writeln('File created: ', dest);
            }
            fs.chmod(dest, '444', callback);
        }
    ], callback);
};

exports._data = function (destDir, pattern, callback) {
    async.waterfall([
        function (callback) {
            glob(pattern, callback);
        },
        function (filenames, callback) {
            var pkg = require('../../package.json');
            var data = {
                moduleName: path.relative('.', destDir).split(path.sep).map(function (dirname) {
                    return changeCase.camelCase(dirname);
                }).join('/'),
                moduleShortName: changeCase.camelCase(path.basename(destDir)),
                subModules: filenames
                    .filter(function (filename) {
                        return !!filename;
                    })
                    .filter(function (filename) {
                        return path.basename(filename) !== 'index.js';
                    })
                    .filter(function (filename) {
                        return !path.basename(filename).match(/^_/);
                    })
                    .map(function (filename) {
                        var extname = path.extname(filename),
                            basename = path.basename(filename, extname);
                        return {
                            exportsName: changeCase.camelCase(basename),
                            requireName: ['.', path.relative(destDir, filename)].join(path.sep)
                        }
                    }),
                author: pkg.author.name || pkg.author
            }
            callback(null, data);
        }
    ], callback);
};

exports._capitalize = function (name) {
    return name[0].toUpperCase() + name.substr(1);
    ;
};