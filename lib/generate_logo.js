/**
 * Generate a logo.
 * @memberof module:fur
 * @function generateLogo
 * @param {string} filename - File name to generate.
 * @param {object} options - Optional settings.
 * @param {string} [options.colorTheme='a'] - Color theme name.
 * @param {string} [options.fontTheme='a'] - Font theme name.
 * @param {number} [options.fontSize] - Font size.
 * @param {string} [options.format] - File format ('svg', 'png'). Default value is filename extension.
 * @param {number} [options.width=256] - Image width.
 * @param {number} [options.height=512] - Image height.
 * @param {string} [options.style='simple'] - Style name.
 * 'simple'
 * @param {string} [options.text='foo'] - Text to draw.
 * @param {number} [options.textLeft=0] - Text left position.
 * @param {number} [options.textTop=0] - Text top position.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";

var logos = require('./logos'),
    path = require('path'),
    changeCase = require('change-case'),
    fallbackCopy = require('./util/fallback_copy'),
    catalogs = require('./catalogs');

var basedir = path.resolve(__dirname, '../');

var _logoStyles = {
    simple: logos.TextLogo
};


exports = module.exports = function generateLogo(filename, options, callback) {
    var st = fallbackCopy({
        colorTheme: 'a',
        fontTheme: 'a',
        format: filename.split('.').pop(),
        width: 512,
        height: 256,
        style: 'simple',
        text: path.basename(filename)[0],
        textLeft: 0,
        textTop: 0
    }, options);


    var colorScheme = catalogs.colorSchemeCatalog[st.colorTheme],
        webFont = catalogs.webFontCatalog[st.fontTheme];

    var Logo = exports._LogoForStyle(st.style);
    var logo = new Logo({
        width: Number(st.width),
        height: Number(st.height),
        text: st.text,
        textLeft: Number(st.textLeft),
        textTop: Number(st.textTop),
        fontSize: Number(st.fontSize) || Number(st.size),
        fontFamily: webFont.fontFamily,
        backgroundColor: colorScheme.colors[0],
    });

    logo.addCustomFont(webFont.fontFamily, path.resolve(basedir, webFont.filename));

    logo
        .write(filename, st.format, callback);
};


exports.STYLES = Object.keys(_logoStyles);


exports._LogoForStyle = function (style) {
    var key = style && changeCase.paramCase(style.trim());
    var resolved = _logoStyles[key];
    if (!resolved) {
        throw new Error('Unknown style: ' + style);
    }
    return resolved;
};



