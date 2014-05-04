/**
 * @file Configuration for ci/task.favicon.
 * @ignore
 */

"use strict";

var util = require('util'),
    formats = ['svg', 'png'];

exports.tickTack = formats.map(function (format) {
    return {
        name: 'dist/images/tick-tack/tick-tack-favicon',
        format: format,
        letter: 'tt',
        color: 'd',
        font: 'k'
    }
});

exports.fur = formats.map(function (format) {
    return {
        fontSize: 160,
        name: 'dist/images/fur/fur-favicon',
        format: format,
        letter: 'fur',
        color: 'bb',
        font: 'a',
        textAdjustPosition: format === 'png' ? {
            left: -38, top: -9
        } : null
    }
});

exports.ppAbstract = formats.map(function (format) {
    return {
        name: 'dist/images/pp-abstract/pp-abstract-favicon',
        format: format,
        letter: 'a',
        color: 'k',
        font: 'f'
    }
})
;