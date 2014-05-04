/**
 * @file Configuration for ci/task.favicon.
 * @ignore
 */

"use strict";

var util = require('util'),
    formats = ['svg', 'png'];

exports.tickTack = formats.map(function (format) {
    return {
        filename: 'dist/images/tick-tack/tick-tack-favicon.' + format,
        options: {
            format: format,
            text: 'tt',
            colorTheme: 'd',
            fontTheme: 'k'
        }
    }
});

exports.fur = formats.map(function (format) {
    return {
        filename: 'dist/images/fur/fur-favicon.' + format,
        options: {
            fontSize: 160,
            format: format,
            text: 'fur',
            colorTheme: 'bb',
            fontTheme: 'a'
        }
    }
});

exports.ppAbstract = formats.map(function (format) {
    return {
        filename: 'dist/images/pp-abstract/pp-abstract-favicon.format',
        options: {
            format: format,
            text: 'a',
            colorTheme: 'k',
            fontTheme: 'f'
        }
    }
})
;