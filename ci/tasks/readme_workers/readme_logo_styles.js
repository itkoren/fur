/**
 * @file Contents for logo styles.
 * @memberof module:ci/workers
 * @function readmeWorkers.readmeLogoStyle
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 */

"use strict";

var os = require('os'),
    path = require('path'),
    util = require('util'),
    _sampleImageCols = require('./_sample_image_cols'),
    _rowsFromCols = require('./_rows_from_cols'),
    logoTaskConfig = require('../../config/logo-task-config');

exports = module.exports = function (callback) {
    var cols = _sampleImageCols(logoTaskConfig.samples, 64);
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