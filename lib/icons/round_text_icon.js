/**
 * @file Round text icon.
 * @memberof icons
 * @augments TextIcon
 * @constructor RoundTextIcon
 * @author Taka Okunishi
 *
 */

"use strict";

var _defineIcon = require('./_define_icon'),
    TextIcon = require('./text_icon');

module.exports = _defineIcon({
    prototype: TextIcon,
    accessors: [
    ],
    properties: {
        cornerRadius: function () {
            var s = this;
            return s._cornerRadius || s.size() / 5;
        }
    }
});