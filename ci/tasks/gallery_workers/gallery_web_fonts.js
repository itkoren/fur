/**
 * @file Gallery web fonts.
 * @memberof galleryWorkers
 * @function galleryWebFonts
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
            fonts: Object.keys(catalog).map(function (name) {
                    var font = catalog[name];
                    return {
                        url: font.filename, //TODO
                        fontFamily: font.fontFamily,
                        fontFile: path.basename(font.filename),
                        name: name,
                        className: util.format('font-%s', name)
                    }
                }
            )
        };
    callback(null, result);
};