/**
 * @file Generate font sub set file.
 * @memberof util
 * @function subsetFontFile.
 * @param {string} subset text - Text file which contains letters to subset.
 * @param {string} src - Source file name.
 * @param {string} dest - Destination file name.
 * @param callback
 */

"use strict";

var async = require('async'),
    path = require('path'),
    util = require('util'),
    childProcess = require('child_process');

exports = module.exports = function subsetFontFile(subset, src, dest, callback) {
    console.log('subset', subset);
    var command = [
        'python',
        exports._supsetPy(),
        src,
        dest,
        '<',
        subset
    ].join(' ');
    childProcess.exec(command, function (err, stdOut, stdErr) {
        if (stdOut) {
            console.log(stdOut);
        }
        if (stdErr) {
            console.error(stdErr);
        }
        callback(err);
    });
};

/**
 * Subset python file.
 * @protected
 * @ignore
 */
exports._supsetPy = function () {
    return path.resolve(__dirname, '../../support/subset.py');
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