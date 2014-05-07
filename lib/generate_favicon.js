/**
 * Generate a favicon
 * @memberof module:fur
 * @function generateFavicon
 * @param {string} filename - File name to generate.
 * @param {object} options - Optional settings.
 * @param {string} [options.colorTheme='a'] - Color theme name.
 * @param {string} [options.fontTheme='a'] - Font theme name.
 * @param {number} [options.fontSize] - Font size.
 * @param {string} [options.format] - File format ('svg', 'png'). Default value is filename extension.
 * @param {number} [options.size=128] - Image size.
 * @param {string} [options.style='simple'] - Style name.
 * 'simple, 'round', 'circle', 'bordered'
 * @param {string} [options.text='foo'] - Text to draw.
 * @param {number} [options.textLeft=0] - Text left position.
 * @param {number} [options.textTop=0] - Text top position.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";

var icons = require('./icons'),
    path = require('path'),
    changeCase = require('change-case'),
    fallbackCopy = require('./util/fallback_copy'),
    catalogs = require('./catalogs');

var basedir = path.resolve(__dirname, '../');

var _iconStyles = {
    simple: icons.TextIcon,
    round: icons.RoundTextIcon,
    circle: icons.CircleTextIcon,
    bordered: icons.BorderedTextIcon
};


exports = module.exports = function generateFavicon(filename, options, callback) {
    var st = fallbackCopy({
        colorTheme: 'a',
        fontTheme: 'a',
        format: filename.split('.').pop(),
        size: 128,
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
        text: st.text,
        textLeft: Number(st.textLeft),
        textTop: Number(st.textTop),
        fontSize: Number(st.fontSize) || Number(st.size),
        fontFamily: webFont.fontFamily,
        backgroundColor: colorScheme.colors[0],
        borderColor: colorScheme.colors[0]
    });

    icon.addCustomFont(webFont.fontFamily, path.resolve(basedir, webFont.filename));

    icon
        .write(filename, st.format, callback);
};


exports.STYLES = Object.keys(_iconStyles);


exports._IconForStyle = function (style) {
    var key = style && changeCase.paramCase(style.trim());
    var resolved = _iconStyles[key];
    if (!resolved) {
        throw new Error('Unknown style: ' + style);
    }
    return resolved;
};



