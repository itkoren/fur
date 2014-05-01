/**
 * @file Configuration for ci/task.badge.
 * @ignore
 */

"use strict";

var util = require('util'),
    changeCase = require('change-case'),
    styles = ['default', 'flat'];

exports.apeman = styles.map(function (style) {
    return {
        filename: util.format('dist/images/apeman/apeman-badge-%s.svg', changeCase.paramCase(style)),
        options: {
            style: style,
            format: 'svg',
            colors: ['#999', '#36E'],
            texts: ['powered by', ' apeman ']
        }
    }
});

