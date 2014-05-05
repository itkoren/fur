/**
 * @file font task.
 * @memberof module:ci/tasks
 * @function fontTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var path = require('path'),
    util = require('util'),
    async = require('async'),
    mkdirp = require('mkdirp'),
    convertTTF2Woff = require('../../lib/convert_ttf_to_woff'),
    fs = require('fs');

exports = module.exports = function (grunt, config, callback) {
    var fonts = exports._fontData(config.catalog),
        destDir = path.resolve(config.destDir);
    async.series([
        function (callback) {
            mkdirp(destDir, callback)
        },
        function (callback) {
            exports._writeFontFiles(fonts, destDir, callback);
        }
    ], function (err) {
        if (!err) {
            grunt.log.writeln('Font published to dir:', destDir);
        }
        callback(err);
    });
};

exports._writeFontFiles = function (data, destDir, callback) {
    async.eachLimit(data, 10, function (data, callback) {
        var extname = path.extname(data.filename),
            dest = path.resolve(destDir, data.theme + '.woff'),
            src = path.resolve(data.filename);
        convertTTF2Woff(src, dest, callback);
    }, callback);
};


exports._fontData = function (catalogFile) {
    var catalog = require(path.resolve(catalogFile));
    return Object.keys(catalog).map(function (theme) {
        var data = catalog[theme];
        data.theme = theme;
        return data;
    })
};