/**
 * @file Gallery color schemes.
 * @memberof galleryWorkers
 * @function galleryColorSchemes
 * @param {object} options - Gallery options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */


var util = require('util'),
    path = require('path');

module.exports = function galleryColorSchemes(options, callback) {
    var catalog = require(path.resolve(options.catalogFile)),
        result = {
            schemes: Object.keys(catalog).map(function (name) {
                var data = catalog[name];
                return {
                    name: name,
                    scheme: data.scheme,
                    variation: data.variation,
                    hue: data.hue,
                    colors: data.colors,
                    tones: data.tones
                }
            })
        };
    callback(null, result);
};