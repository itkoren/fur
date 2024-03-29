/**
 * @file Convert a png image to ico image.
 * @memberof module:fur
 * @function convertPngToIco
 * @param {string} src - Source file name.
 * @param {string} dest - Destination file name.
 * @param {object} options - Resize options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

var imagemagick = require('imagemagick');

module.exports = function convertPngToIco(src, dest, options, callback) {
    imagemagick.convert([
        src,
        '-bordercolor', 'white',
        '-clone', '0',
        '-border', '0',
        '-delete', '0',
        '-alpha', 'off',
        '-colors', '256',
        dest
    ], function (err, stdOut, stdErr) {
        callback(err || stdErr || null);
    });
};