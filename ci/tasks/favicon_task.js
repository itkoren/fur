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
    _catalogSearch = require('./_catalog_search'),
    generateFavicon = require('../../lib/generate_favicon');

exports = module.exports = function (grunt, config, callback) {
    async.eachSeries(config, function (config, callback) {
        var format = config.format,
            filename = [config.name, format].join('.'),
            font = _catalogSearch.searchWebFont(config.font) || {},
            colorScheme = _catalogSearch.searchColorScheme(config.color),
            letter = config.letter;

        generateFavicon(filename, {
                format: format,
                letter: letter,
                fontFamily: font.fontFamily,
                fontFilename: font.filename,
                backgroundColor: colorScheme.colors[0]
            },
            function (err) {
                if (!err) {
                    grunt.log.writeln('Favicon file created: %s', filename);
                }
                callback(err);
            });
    }, callback);
};

