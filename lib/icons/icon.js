/**
 * @file Abstract icon object.
 * @memberof fur.icons
 * @abstract
 * @augments Image
 * @constructor Icon
 * @author Taka Okunishi
 *
 */


"use strict";

var define = require('../util/define'),
    fabric = require('fabric').fabric,
    fs = require('fs'),
    Image = require('../images/image');


var Icon;
Icon = module.exports = define({
    prototype: Image,
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
        /**
         * Create a new canvas.
         * @function
         * @returns {fabric.Canvas} - New canvas object.
         */
        createCanvas: function () {
            var s = this,
                size = s._size;
            return fabric.createCanvasForNode(size, size);
        },
        /**
         * Create a new background rect.
         * @function
         * @returns {fabric.Rect} - New background object.
         */
        newBackgroundObject: function () {
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
        },
        /**
         * Draw an image.
         * @function
         * @returns {fabric.Canvas}
         */
        draw: function () {
            var s = this,
                canvas = s.createCanvas();
            var drawables = s.drawables();
            for (var i = 0; i < drawables.length; i++) {
                canvas.add(drawables[i]);
            }
            return canvas;
        },
        /**
         * Convert to svg data.
         * @function
         * @param {function} callback - Callback when done.
         */
        toSVG: function (callback) {
            var s = this,
                svg = s.draw().toSVG();
            callback(null, svg);
        },
        /**
         * Write as png file.
         * @function
         * @param {string} filename - Filename to write.
         * @param {function} callback - Callback when done.
         */
        writeAsPNG: function (filename, callback) {
            var s = this;
            var inStream = s.draw().createPNGStream(),
                outStream = fs.createWriteStream(filename);
            Icon._pipe(
                inStream,
                outStream,
                callback);
        }
    }
});

Icon._pipe = function (reader, writer, callback) {
    reader.pipe(writer);
    reader.on('error', function (err) {
        callback && callback(err);
        callback = null;
    });
    reader.on('end', function () {
        callback && callback();
        callback = null;
    });
};