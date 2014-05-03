/**
 * @file Catalog color schemes.
 * @memberof catalogWorkers
 * @function catalogColorSchemes
 * @param {object} options - Catalog options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

var onecolor = require('onecolor'),
    ColorScheme = require('color-scheme'),
    alphabeticalIndex = require('../../../lib/util/alphabetical_index');

exports = module.exports = function catalogColorSchemes(options, callback) {
    var data = {}, i = 0;
    options.schemes.forEach(function (scheme) {
        options.variations.forEach(function (variation) {
            options.hues.forEach(function (hue) {
                var values = new ColorScheme()
                    .from_hue(exports._hueValue(hue))
                    .scheme(scheme)
                    .variation(variation)
                    .colors()
                    .map(function (color) {
                        return '#' + color.toUpperCase();
                    });
                data[alphabeticalIndex(i)] = {
                    scheme: scheme,
                    variation: variation,
                    hue: hue,
                    colors: values,
                    tones: values.slice(0, 4).map(function (value) {
                        return onecolor(value).saturation(0).hex().toUpperCase();
                    })
                };
                i++;
            });
        });
    });
    callback(null, data);
};

exports._hueValue = function (name) {
    var index = [
        'red',
        'red-orange',
        'orange',
        'orange-yellow',
        'yellow',
        'yellow-green',
        'green',
        'green-blue',
        'blue',
        'blue-violet',
        'violet',
        'violet-red'
    ].indexOf(name);
    if (index === -1) {
        return null;
    }
    return 30 * index;
};