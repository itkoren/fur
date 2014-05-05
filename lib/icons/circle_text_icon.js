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
    fabric = require('fabric').fabric,
    TextIcon = require('./text_icon');

module.exports = _defineIcon({
    prototype: TextIcon,
    accessors: [
    ],
    properties: {
        /**
         * Create a new background rect.
         * @function
         * @returns {fabric.Rect} - New background object.
         */
        newBackgroundObject: function () {
            var s = this,
                size = s.size();
            var radius = (size - s.borderWidth()) / 2;
            return new fabric.Circle({
                radius: radius,
                fill: s.backgroundColor(),
                originX: 'center',
                originY: 'center',
                borderColor: s.borderColor(),
                left: radius,
                top: radius,
                hasBorders: s.borderWidth() > 0
            })
        }
    }
});