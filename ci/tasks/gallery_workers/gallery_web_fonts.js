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
                    var font = catalog[theme];
                    return {
                        url: [options.fontsDir, theme + path.extname(font.filename)].join('/'),
                        fontFamily: font.fontFamily,
                        fontFile: path.basename(font.filename),
                        name: theme,
                        className: util.format('font-%s', theme)
                    }
                }
            )
        };
    callback(null, result);
};