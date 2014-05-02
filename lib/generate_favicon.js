/**
 * Generate a favicon
 * @memberof module:fur
 * @function generateFavicon
 * @param {string} filename - File name to generate.
 * @param {object} options - Optional settings.
 * @param {string} options.letter - Letter to draw.
 * @param {string} [style='simple'] - Style name.
 * @param {number} [size=256] - Image size.
 * @param {string} [color='#FFF'] - Color.
 * @param {string} [BackgroundColor='#FA9'] - Background color.
 * @param {string} [options.format=svg] - File format.
 * @param {function} callback - Callback when done.
 */

var icons = require('./icons');

exports = module.exports = function generateFavicon(filename, options, callback) {
    var format = options.format || 'svg',
        size = options.size || 256;
    var Icon = exports._IconForStyle(options.style || 'simple'),
        icon = new Icon({
            size: size,
            color: options.color || '#FFF',
            text: options.letter,
            fontSize: size * 0.8,
            fontFamily: options.fontFamily,
            backgroundColor: options.backgroundColor || '#FA9'
        });

    if (options.fontFilename) {
        icon.addCustomFont(options.fontFamily, options.fontFilename);
    }

    icon.write(filename, format, callback);
};

exports._IconForStyle = function (style) {
    switch (style) {
        case 'simple':
            return icons.TextIcon;
        default:
            throw new Error('Unknown style: ' + style);

    }
};