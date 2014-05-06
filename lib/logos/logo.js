/**
 * @file Abstract logo object.
 * @memberof logos
 * @abstract
 * @augments FabricImage
 * @constructor Logo
 * @author Taka Okunishi
 *
 */


"use strict";

var define = require('../util/define'),
    fabric = require('fabric').fabric,
    FabricImage = require('../images/fabric_image');


var Logo = module.exports = define({
    prototype: FabricImage,
    accessors: [
    /**
     * @function Logo.prototype.backgroundColor
     * @param {number} value - Background color.
     */
        'backgroundColor'
    ],
    /**
     * @lends Logo.prototype
     */
    properties: {
        /**
         * Create a new background rect.
         * @function
         * @returns {fabric.Rect} - New background object.
         */
        newBackgroundObject: function () {
            var s = this;
            var w = s.width(),
                h = s.height();
            return new fabric.Rect({
                width: w,
                height: h,
                fill: s.backgroundColor(),
                originX: 'center',
                originY: 'center',
                left: w / 2,
                top: h / 2
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