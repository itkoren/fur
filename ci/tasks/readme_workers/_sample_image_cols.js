/**
 * @file Base url string.
 * @memberof module:ci/tasks
 * @function readmeWorkers._sampleImageCols
 * @protected
 * @ignore
 */

"use strict";

var path = require('path'),
    util = require('util'),
    url = require('url'),
    _baseUrl = require('./_base_url');

module.exports = function _sampleImageCols(data, h) {
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