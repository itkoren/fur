/**
 * @file favicon task.
 * @memberof module:ci/tasks
 * @function faviconTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var async = require('async'),
    generateFavicon = require('../../lib/generate_favicon');

exports = module.exports = function (grunt, config, callback) {
    async.eachSeries(config, function (config, callback) {
        var filename = config.filename,
            options = config.options,
            font = exports._fontData(options.font);
        if (font) {
            options.fontFamily = font.fontFamily;
            options.fontFilename = font.filename;
        }
        generateFavicon(filename, options,
            function (err) {
                if (!err) {
                    grunt.log.writeln('Favicon file created: %s', filename);
                }
                callback(err);
            });
    }, callback);
};

exports._fontData = function (font) {
    if (!font) {
        return null;
    }
    var data = require('../../assets/catalogs/web-font-catalog'),
        found = data[font.trim()];
    if (!found) {
        throw new Error('Font not found :' + font);
    }
    return {
        fontFamily: found.fontFamily,
        filename: found.filename
    };

};