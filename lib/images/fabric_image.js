/**
 * @file Abstract image using fabric.
 * @see {@link https://www.npmjs.org/package/fabric|fabric}
 * @memberof fur.images
 * @abstract
 * @constructor FabricImage
 * @author Taka Okunishi
 *
 */


var define = require('../util/define'),
    fs = require('fs'),
    fabric = require('fabric').fabric,
    Image = require('./Image');

FabricImage = module.exports = define({
    prototype: Image,
    /**
     * @lends FabricImage
     */
    properties: {
        _width: 256,
        _height: 256,
        /**
         * Create a new canvas.
         * @function
         * @returns {fabric.Canvas} - New canvas object.
         */
        createCanvas: function () {
            var s = this,
                size = s._size;
            return fabric.createCanvasForNode(s.width(), s.height());
        },
        /**
         * Drawable objects.
         * @function
         * @returns {fabric.Object[]} - Drawable objects.
         */
        drawables: function () {
            return [];
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
            FabricImage._pipe(
                inStream,
                outStream,
                callback);
        },
        /**
         * Write a file.
         * @param {string} filename - File name to write.
         * @param {string} format - Format to write.
         * @param {function} callback - Callback when done.
         */
        write: function (filename, format, callback) {
            var s = this;
            switch (format) {
                case 'svg':
                    s.writeAsSVG(filename, callback);
                    break;
                case 'png':
                    s.writeAsPNG(filename, callback);
                    break;
                default:
                    callback(new Error('Unknown format: ' + format));
                    break;
            }
        }
    }
});


FabricImage._pipe = function (reader, writer, callback) {
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