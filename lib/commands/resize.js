/**
 * @file Resize a image.
 * @memberof commands
 * @function resizeImage
 * @param {string} src - Source image file path.
 * @param {string} dest - Destination image file path.
 * @param {object} options - Resize options.
 * @param {number} options.width - Resize image width.
 * @param {number} options.height - Resize image height.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 */

"use strict";

var resizeImage = require('../resize_image'),
    print = require('../util/print');

module.exports = function resize(src, dest, options, callback) {
    resizeImage(src, dest, options, function (err) {
        if (!err) {
            print.info('Image resized:', dest);
        }
        callback && callback(err);
    });
};