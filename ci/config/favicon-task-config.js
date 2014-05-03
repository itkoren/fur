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