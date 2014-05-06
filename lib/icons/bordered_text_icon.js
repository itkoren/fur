/**
 * @file Bordered text icon.
 * @memberof icons
 * @augments TextIcon
 * @constructor BorderedTextIcon
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
        _color: null,
        backgroundColor: function () {
            return '#FFF';
        },
        color: function () {
            var s = this;
            return s._color || s.borderColor();
        },
        borderWidth: function () {
            var s = this;
            return s.size() * 0.1;
        }
    }
});