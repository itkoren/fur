/**
 * @file Abstract badge object.
 * @see {@link https://www.npmjs.org/package/gh-badges|gh-badges}
 * @memberof module:fur.badges
 * @abstract
 * @augments module:fur.images.Image
 * @constructor Badge
 * @author Taka Okunishi
 *
 */
"use strict";

var define = require('../util/define'),
    _ghBadge = require('./_gh_badge'),
    Image = require('../images/image');

var Badge = module.exports = define({
    prototype: Image,
    accessors: [
    /**
     * @function module:fur.badges.Badge.style
     * @param {string} value - Badge style. "default" or "flat".
     */
        'style',
    /**
     * @function module:fur.badges.Badge.leftColor
     * @param {string} leftColor - Leftside color.
     */
        'leftColor',
    /**
     * @function module:fur.badges.Badge.rightColor
     * @param {string} rightColor - Rightside color.
     */
        'rightColor',
    /**
     * @function module:fur.badges.Badge.leftText
     * @param {string} leftText - Leftside text.
     */
        'leftText',
    /**
     * @function module:fur.badges.Badge.rightTest
     * @param {string} rightTest - Rightside text.
     */
        'rightText'
    ],
    properties: {
        _style: 'default',
        _leftColor: '#AAA',
        _rightColor: '#8AE',
        _leftText: 'left',
        _rightText: 'right',
        /**
         * Convert to svg data.
         * @function module:fur.badges.Badge.toSVG
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
        }

    }
});

