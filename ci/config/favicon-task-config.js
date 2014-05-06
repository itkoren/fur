/**
 * @file Configuration for "ci/task.faviconTask".
 * @memberof module:ci/config
 * @member faviconTaskConfig
 * @property {object} samples - Sample favicons.
 * @property {object} tickTask - Configuration for tick-tack favicons.
 * @property {object} fur - Configuration for fur favicons.
 * @property {object} ppAbstract - Configuration for pp-abstract favicons.
 * @property {object} ppStatic - Configuration for pp-static favicons.
 */

"use strict";

var util = require('util'),
    formats = ['svg', 'png'];

var STYLES = require('../../lib/generate_favicon').STYLES;

exports.samples = STYLES.map(function (style) {
    return {
        filename: util.format('doc/images/favicon-sample-%s.png', style),
        options: {
            style: style,
            text: 'U',
            colorTheme: 't',
            fontTheme: 'ab',
            size: 128,
            fontSize: 108
        }
    }
});


exports.tickTack = formats.map(function (format) {
    return {
        filename: 'dist/images/tick-tack/tick-tack-favicon.' + format,
        options: {
            text: 'tt',
            colorTheme: 'jr',
            fontTheme: 'n',
            fontSize: 290
        }
    }
});

exports.fur = formats.map(function (format) {
    return {
        filename: 'dist/images/fur/fur-favicon.' + format,
        options: {
            fontSize: 104,
            text: 'FUR',
            colorTheme: 'bb',
            fontTheme: 'by'
        }
    }
});

exports.ppAbstract = formats.map(function (format) {
    return {
        filename: 'dist/images/pp-abstract/pp-abstract-favicon.' + format,
        options: {
            text: 'a',
            colorTheme: 'a',
            fontTheme: 'e',
            fontSize: 260,
            style: 'circle',
            textTop: -24,
            textLeft: -15

        }
    }
});

exports.ppStatic = formats.map(function (format) {
    return {
        filename: 'dist/images/pp-static/pp-static-favicon.' + format,
        options: {
            text: 's',
            colorTheme: 'gs',
            fontTheme: 'j',
            style: 'bordered',
            textTop: -24
        }
    }
});