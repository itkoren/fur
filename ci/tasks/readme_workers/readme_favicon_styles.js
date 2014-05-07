/**
 * @file Contents for favicon styles.
 * @memberof module:ci/workers
 * @function readmeWorkers.readmeFaviconStyle
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";

var os = require('os'),
    path = require('path'),
    util = require('util'),
    _sampleImageCols = require('./_sample_image_cols'),
    _rowsFromCols = require('./_rows_from_cols'),
    faviconTaskConfig = require('../../config/favicon-task-config');


exports = module.exports = function (callback) {
    var cols = _sampleImageCols(faviconTaskConfig.samples, 64);
    var row0 = _rowsFromCols(cols, 0),
        row1 = row0.map(function () {
            return ':--------:'
        }),
        row2 = _rowsFromCols(cols, 1);
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

