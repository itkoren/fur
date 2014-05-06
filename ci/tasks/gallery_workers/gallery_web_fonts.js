/**
 * @file Gallery web fonts.
 * @memberof module:ci/tasks
 * @function galleryWorkers.galleryWebFonts
 * @param {object} options - Gallery options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */
var util = require('util'),
    path = require('path');

module.exports = function galleryWebFonts(options, callback) {
    var catalog = require(path.resolve(options.catalogFile)),
        result = {
            fonts: Object.keys(catalog).map(function (theme) {
                    var font = catalog[theme],
                        format = 'woff';
                    return {
                        url: [options.fontsDir, [theme, format].join('.')].join('/'),
                        fontFamily: font.fontFamily,
                        format: 'woff',
                        fontFile: path.basename(font.filename),
                        name: theme,
                        className: util.format('font-%s', theme)
                    }
                }
            )
        };
    callback(null, result);
};