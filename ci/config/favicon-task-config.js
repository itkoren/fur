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
            backgroundColor: '#FF9B88',
            fontFamily: 'Arvo-BoldItalic'
        }
    }
});