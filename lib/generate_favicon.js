/**
 * Generate a favicon
 * @memberof module:fur
 * @function generateFavicon
 * @param {string} filename - File name to generate.
 * @param {object} options - Optional settings.
 * @param {string} [options.colorTheme='a'] - Color theme name.
 * @param {string} [options.fontTheme='a'] - Font theme name.
 * @param {string} [options.format] - File format ('svg', 'png'). Default value is filename extension.
 * @param {number} [options.size=256] - Image size.
 * @param {string} [options.style='simple'] - Style name.
 * @param {string} [options.text='foo'] - Text to draw.
 * @param {number} [options.textLeft=0] - Text left position.
 * @param {number} [options.textTop=0] - Text top position.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

var icons = require('./icons'),
    path = require('path'),
    fallbackCopy = require('./util/fallback_copy'),
    catalogs = require('./catalogs');

exports = module.exports = function generateFavicon(filename, options, callback) {

    var st = fallbackCopy({
        colorTheme: 'a',
        fontTheme: 'a',
        format: filename.split('.').pop(),
        size: 256,
        style: 'simple',
        text: path.basename(filename)[0],
        textLeft: 0,
        textTop: 0
    }, options);

    var colorScheme = catalogs.colorSchemeCatalog[st.colorTheme],
        webFont = catalogs.webFontCatalog[st.fontTheme];

    var Icon = exports._IconForStyle(st.style);
    var icon = new Icon({
        size: Number(st.size),
        color: colorScheme.tones[0],
        text: st.text,
        textLeft: st.textLeft,
        textTop: st.textTop,
        fontSize: st.fontSize,
        fontFamily: webFont.fontFamily,
        backgroundColor: colorScheme.colors[0]
    });

    icon.addCustomFont(webFont.fontFamily, webFont.filename);

    icon
        .write(filename, st.format, callback);
};

exports._IconForStyle = function (style) {
    switch (style) {
        case 'simple':
            return icons.TextIcon;
        default:
            throw new Error('Unknown style: ' + style);

    }
};