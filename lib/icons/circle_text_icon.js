/**
 * @file Circle text icon.
 * @memberof icons
 * @augments TextIcon
 * @constructor CircleTextIcon
 * @author Taka Okunishi
 *
 */

"use strict";

var _defineIcon = require('./_define_icon'),
    TextIcon = require('./text_icon');

var RoundedTextIcon = module.exports = _defineIcon({
    prototype: TextIcon,
    accessors: [
    ],
    properties: {
        newBackgroundObject: function () {
            var s = this,
                backgroundObject = TextIcon.prototype.newBackgroundObject.apply(s, arguments);
            backgroundObject.rx = backgroundObject.ry = s.size() / 2;
            return backgroundObject;
        }
    }
});