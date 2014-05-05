/**
 * @file Configuration for "ci/task.badgeTask".
 * @memberof module:ci/config
 * @member badgeTaskConfig
 * @property {object} - apeman - Apeman badge configuration.
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
            colors: ['rgb(80,40,0)', 'rgb(220,160,0)'],
            texts: ['powered by', ' apeman ']
        }
    }
});

