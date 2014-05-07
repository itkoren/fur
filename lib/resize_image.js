/**
 * @file Resize a image.
 * @memberof module:fur
 * @function resizeImage
 * @param {string} src - Source image file path.
 * @param {string} dest - Destination image file path.
 * @param {object} options - Resize options.
 * @param {number} options.width - Resize image width.
 * @param {number} options.height - Resize image height.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */
exports = module.exports = function resizeImage(src, dest, options, callback) {
    var missing = exports._findMissing(options || {});
    if (missing.length) {
        callback(new Error(missing.join(',') + ' is required!'));
        return;

    }

    var imagemagick = require('imagemagick');
    try {
        imagemagick.resize({
            srcPath: src,
            dstPath: dest,
            width: options.width,
            height: options.height
        }, function (err) {
            callback(err);
        });
    } catch (e) {
        callback(new Error('Resized image failed with error: ' + e));
    }
};

exports._required = [
    'width', 'height'
];

exports._findMissing = function (options) {
    return exports._required.filter(function (key) {
        return !options[key];
    });
};