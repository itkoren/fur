/**
 * @file Generate font sub set file.
 * @memberof util
 * @function subsetFontFile.
 * @param {string} subset - Letters to subset.
 * @param {string} src - Source file name.
 * @param {string} dest - Destination file name.
 * @param callback
 */

"use strict";

var async = require('async'),
    path = require('path'),
    childProcess = require('child_process');

exports = module.exports = function subsetFontFile(subset, src, dest, callback) {
    var args = [
        exports._supsetPy(),
        subset,
        src,
        dest
    ];
    exports._spawnPython(args, callback);
};

/**
 * Subset python file.
 * @protected
 * @ignore
 */
exports._supsetPy = function () {
    return path.resolve(__dirname, '../../support/font-extractor/font-extractor.py');
};

/**
 * Spawn python command.
 * @param args
 * @param callback
 * @protected
 * @ignore
 */
exports._spawnPython = function (args, callback) {
    var spawned = childProcess.spawn('python', args, callback);
    spawned.stdout.pipe(process.stdout);
    spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function (code) {
        var err = code == 0 ? null : new Error('Exist with code:' + code);
        callback(err);
    });
};