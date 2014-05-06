/**
 * @file Configuration for "ci/task.faviconTask".
 * @memberof module:ci/config
 * @member faviconTaskConfig
 * @property {object} tickTask - Configuration for tick-tack favicons.
 * @property {object} fur - Configuration for fur favicons.
 * @property {object} ppAbstract - Configuration for pp-abstract favicons.
 */

"use strict";

var util = require('util'),
    formats = ['svg', 'png'];

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
            fontSize: 160,
            text: 'fur',
            colorTheme: 'bb',
            fontTheme: 'a'
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