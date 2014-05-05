/**
 * @file Configuration for "ci/task.badgeTask".
 * @memberof module:ci/config
 * @member badgeTaskConfig
 * @property {object} - apeman - Apeman badge configuration.
 */

"use strict";

var util = require('util'),
    changeCase = require('change-case'),
    formats = ['svg', 'png'],
    styles = ['default', 'flat'];

var variations = formats
    .map(function (format) {
        return styles.map(function (style) {
            return {
                style: style,
                format: format
            }
        });
    })
    .reduce(function (result, current) {
        return result.concat(current);
    }, []);

exports.apeman = variations.map(function (variation) {
    var style = variation.style,
        format = variation.format;
    return {
        filename: util.format('dist/images/apeman/apeman-badge-%s.%s',
            changeCase.paramCase(style),
            format),
        options: {
            style: style,
            colorTheme: 'bb',
            texts: 'powered by , apeman '
        }
    };
});

