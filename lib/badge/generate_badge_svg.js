/**
 * @file Generate badge svg file.
 * @memberof fur/badge
 * @function generateBadgeSvg
 * @param {string} style - "default" or "flat"
 * @param {string[]} texts - Badge texts.
 * @param {string[]} colors - Badge colors.
 * @param {string} dest - Destination file name.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";

var _ghBadge = require('./_gh_badge'),
    writeSvgFile = require('../util/write_svg_file');

module.exports = function (style, texts, colors, dest, callback) {
    var ghBadge = _ghBadge();
    ghBadge({
        template: style || 'default',
        text: texts,
        colorA: colors[0],
        colorB: colors[1]

    }, function (data) {
        writeSvgFile(dest, data, callback);
    });
};