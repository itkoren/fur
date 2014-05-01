/**
 * @file Write svg file.
 * @memberof fur/util
 * @function writeSvgFile
 * @param {string} filename - SVG file name.
 * @param {object} data - SVG data.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

var path = require('path'),
    fs = require('fs'),
    mkdirp = require('mkdirp');

module.exports = function (filename, data, callback) {
    mkdirp(path.dirname(filename), function (err) {
        if (err) {
            callback(err);
            return;
        }
        fs.writeFile(filename, data, callback);
    });
};