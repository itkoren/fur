/**
 * @file Abstract icon object.
 * @memberof module:fur.icons
 * @abstract
 * @augments module:fur.images.Image
 * @constructor Icon
 * @author Taka Okunishi
 *
 */


"use strict";

var define = require('../util/define'),
    fabric = require('fabric').fabric,
    Image = require('../images/image');


var Icon = module.exports = define({
    prototype: Image,
    accessors: [
    /**
     * @function module:fur.icons.Icon.size
     * @param {number} value - Image size.
     */
        'size',
    /**
     * @function module:fur.icons.Icon.backgroundColor
     * @param {number} value - Background color.
     */
        'backgroundColor',
    /**
     * @function module:fur.icons.Icon.borderWidth
     * @param {number} value - Border width.
     */
        'borderWidth',
    /**
     * @function module:fur.icons.Icon.borderColor
     * @param {string} value - Border color.
     */
        'borderColor',
    /**
     * @function module:fur.icons.Icon.cornerRadius
     * @param {number} value - Corner radius.
     */
        'cornerRadius'
    ],
    /**
     * @lends module:fur.icons.Icon
     */
    properties: {
        _size: 256,
        _cornerRadius: 0,
        _backgroundColor: 'transparent',
        _borderWidth: 0,
        _borderColor: 'transparent',
        /**
         * @function
         * @returns {fabric.Canvas} - New canvas object.
         */
        createCanvas: function () {
            var s = this,
                size = s._size;
            return fabric.createCanvasForNode(size, size);
        },
        /**
         * @function
         * @returns {fabric.Rect} - New background.
         */
        newBackground: function () {
            var s = this,
                size = s._size;
            return new fabric.Rect({
                width: size - s._borderWidth,
                height: size - s._borderWidth,
                rx: s._cornerRadius,
                ry: s._cornerRadius,
                fill: s._backgroundColor,
                originX: 'center',
                originY: 'center',
                left: size / 2,
                top: size / 2,
                borderColor: '#3AF',
                hasBorders: s._borderWidth > 0,
                stroke: s._borderColor,
                strokeWidth: s._borderWidth
            })
        },
        drawOnCanvas: function (canvas) {
            var s = this;
            canvas.add(s.newBackground());
            return canvas;
        },
        draw:function(){
            var s = this,
                canvas = s.createCanvas();
            return s.drawOnCanvas(canvas);
        }
    }
});