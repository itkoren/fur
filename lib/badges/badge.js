/**
 * @file Abstract badge object.
 * @see {@link https://www.npmjs.org/package/gh-badges|gh-badges}
 * @memberof badges
 * @abstract
 * @augments Image
 * @constructor Badge
 * @author Taka Okunishi
 *
 */

"use strict";

var define = require('../util/define'),
    _ghBadge = require('./_gh_badge'),
    _svg2png = require('./_svg2png'),
    async = require('async'),
    Image = require('../images/image');

var Badge = module.exports = define({
    prototype: Image,
    accessors: [
    /**
     * @function Badge.prototype.style
     * @param {string} value - Badge style. "default" or "flat".
     */
        'style',
    /**
     * @function Badge.prototype.leftColor
     * @param {string} leftColor - Leftside color.
     */
        'leftColor',
    /**
     * @function Badge.prototype.rightColor
     * @param {string} rightColor - Rightside color.
     */
        'rightColor',
    /**
     * @function Badge.prototype.leftText
     * @param {string} leftText - Leftside text.
     */
        'leftText',
    /**
     * @function Badge.prototype.rightTest
     * @param {string} rightTest - Rightside text.
     */
        'rightText'
    ],
    /**
     * @lends Badge.prototype
     */
    properties: {
        _style: 'default',
        _leftColor: '#AAA',
        _rightColor: '#8AE',
        _leftText: 'left',
        _rightText: 'right',
        /**
         * Convert to svg data.
         * @function
         * @param {function} callback - Callback when done.
         */
        toSVG: function (callback) {
            var s = this,
                ghBadge = _ghBadge();
            ghBadge({
                template: s._style,
                text: [s._leftText, s._rightText],
                colorA: s._leftColor,
                colorB: s._rightColor
            }, function (data) {
                callback && callback.call(s, null, data);
            });
        },
        /**
         * Write file as png.
         * @function
         * @param {string} filename - Filename to write.
         * @param {function} callback - Callback when done.
         */
        writeAsPNG: function (filename, callback) {
            var s = this;
            async.waterfall([
                function (callback) {
                    s.toSVG(callback);
                },
                function (svg, callback) {
                    _svg2png(svg, filename, callback);
                }
            ], callback)
        }
    }
});

