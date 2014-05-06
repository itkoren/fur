/**
 * @file Contents for favicon styles.
 * @type {exports}
 */

var os = require('os'),
    path = require('path'),
    util = require('util'),
    url = require('url'),
    _baseUrl = require('./_base_url'),
    faviconTaskConfig = require('../../config/favicon-task-config');

exports = module.exports = function (callback) {
    var cols = exports._sampleImageCols(faviconTaskConfig.samples, 64);
    var row0 = exports._rowsFromCols(cols, 0),
        row1 = row0.map(function () {
            return ':--------:'
        }),
        row2 = exports._rowsFromCols(cols, 1);
    var rows = [
        row0,
        row1,
        row2
    ]
        .map(function (row) {
            return [].concat('').concat(row).concat('').join(' | ').trim();
        })
        .join(os.EOL);
    callback(null, [
        '',
        rows
    ].join(os.EOL));
};

exports._rowsFromCols = function (cols, rownum) {
    return cols.map(function (col) {
        return col[rownum];
    });
};

exports._sampleImageCols = function (data, h) {
    return data.map(function (data) {
        var filename = data.filename;
        var extname = path.extname(filename),
            basename = path.basename(filename, extname),
            fileURL = url.resolve(_baseUrl, filename);
        return [
            data.options.style,
            util.format('<a href="%s" ><img alt="%s" src="%s" style="height:%dpx" height="%d" /></a>',
                fileURL, basename, fileURL, h, h)
        ];
    });
};