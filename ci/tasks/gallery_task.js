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
    changeCase = require('change-case'),
    renderDotFile = require('../../lib/util/render_dot_tmpl');

exports = module.exports = function (grunt, config, callback) {
    var baseDir = process.cwd(),
        destDir = path.resolve(config.dir);
    async.series([
        function (callback) {
            var tmpl = config.tmpl.baseCss,
                data = {},
                dest = path.resolve(destDir, 'gallery.css');
            renderDotFile(tmpl, data, dest, callback);
        },
        function (callback) {
            var tmpl = config.tmpl.fontHtml,
                data = exports._generateFontData(config.catalog.font),
                dest = path.resolve(destDir, 'font-gallery.html');

            data.relativePathToBaseDir = path.relative(destDir, baseDir);
            renderDotFile(tmpl, data, dest, callback);
        }
    ], function (err) {
        if (!err) {
            grunt.log.writeln('Gallery generated: %s', destDir);
        }
        callback(err);
    })
};


exports._generateFontData = function (catalogFile) {
    var data = require(path.resolve(catalogFile));
    return {
        fonts: Object.keys(data).map(function (name) {
            var font = data[name];
            return {
                url: font.filename, //TODO
                fontFamily: name,
                name:name,
                className: changeCase.paramCase(name)
            }
        })
    }
};