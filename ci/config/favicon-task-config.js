/**
 * @file Configuration for ci/task.favicon.
 * @ignore
 */

"use strict";

var util = require('util'),
    formats = ['svg', 'png'];

exports.tickTack = formats.map(function (format) {
    return {
        filename: util.format('dist/images/tick-tack/tick-tack-favicon.%s', format),
        options: {
            letter: 'tt',
            format: format,
            fontSize: 240,
            backgroundColor: '#FF9B88',
            font: 'k'
        }
    }
});

exports.ppAbstract = formats.map(function (format) {
    return {
        filename: util.format('dist/images/pp-abstract/pp-abstract-favicon.%s', format),
        options: {
            letter:'a',
            format:format,
            fontSize:240,
            backgroundColor:'#55DDAA',
            font:'f'
        }
    }
})
;