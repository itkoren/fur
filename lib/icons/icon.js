/**
 * @file Abstract icon object.
 * @memberof icons
 * @abstract
 * @augments FabricImage
 * @constructor Icon
 * @author Taka Okunishi
 *
 */


"use strict";

var define = require('../util/define'),
    fabric = require('fabric').fabric,
    FabricImage = require('../images/fabric_image');


var Icon;
Icon = module.exports = define({
    prototype: FabricImage,
    accessors: [
    /**
     * @function Icon.size
     * @param {number} value - Image size.
     */
        'size',
    /**
     * @function Icon.backgroundColor
     * @param {number} value - Background color.
     */
        'backgroundColor',
    /**
     * @function Icon.borderWidth
     * @param {number} value - Border width.
     */
        'borderWidth',
    /**
     * @function Icon.borderColor
     * @param {string} value - Border color.
     */
        'borderColor',
    /**
     * @function Icon.cornerRadius
     * @param {number} value - Corner radius.
     */
        'cornerRadius'
    ],
    /**
     * @lends Icon
     */
    properties: {
        _size: 256,
        _cornerRadius: 0,
        _backgroundColor: 'transparent',
        _borderWidth: 0,
        _borderColor: 'transparent',
        width: function (val) {
            var s = this;
            return s.size.apply(s, arguments);
        },
        height: function (val) {
            var s = this;
            return s.size.apply(s, arguments);
        },
        /**
         * Create a new background rect.
         * @function
         * @returns {fabric.Rect} - New background object.
         */
        newBackgroundObject: function () {
            var s = this,
                size = s.size();
            return new fabric.Rect({
                width: size - s.borderWidth(),
                height: size - s.borderWidth(),
                rx: s.cornerRadius(),
                ry: s.cornerRadius(),
                fill: s.backgroundColor(),
                originX: 'center',
                originY: 'center',
                left: size / 2,
                top: size / 2,
                borderColor: '#3AF',
                hasBorders: s.borderWidth() > 0,
                stroke: s.borderColor(),
                strokeWidth: s.borderWidth()
            })
        },
        /**
         * Drawable objects.
         * @function
         * @returns {fabric.Object[]} - Drawable objects.
         */
        drawables: function () {
            var s = this;
            return [
                s.newBackgroundObject()
            ];
        }
    }
});

