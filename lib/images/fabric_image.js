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
    util = require('util'),
    async = require('async'),
    path = require('path'),
    fabric = require('fabric').fabric,
    Image = require('./image');

FabricImage = module.exports = define({
    prototype: Image,
    /**
     * @lends FabricImage
     */
    properties: {
        _width: 256,
        _height: 256,
        _customFontData: [],
        /**
         * Add font.
         * @param {string} fontFamily - Font family.
         * @param {string} filename - Font file name.
         */
        addCustomFont: function (fontFamily, filename) {
            var s = this;
            s._customFontData.push({
                fontFamily: fontFamily,
                filename: path.resolve(filename)
            });
        },
        /**
         * Load custom fonts.
         * @param {fabric.Canvas} canvas - A canvas.
         * @returns {fabric.Canvas}
         */
        loadCustomFonts: function (canvas) {
            var s = this;
            if (!canvas.Font) {
                console.warn('Custom font not supported!');
                return canvas;
            }
            s._customFontData.forEach(function (data) {
                try {
                    var font = new canvas.Font(data.fontFamily, data.filename);
                    canvas.contextContainer.addFont(font);
                } catch (e) {
                    console.error(e);
                }
            });
            return canvas;
        },
        /**
         * Create a new canvas.
         * @function
         * @returns {fabric.Canvas} - New canvas object.
         */
        createCanvas: function () {
            var s = this;
            var canvas = fabric.createCanvasForNode(s.width(), s.height());
            s.loadCustomFonts(canvas);
            return  canvas;
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
            s.svgFontFamilyStyle(function (err, style) {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null, svg);
            });
        },
        svgFontFamilyStyle: function (callback) {
            var s = this;
            async.map(s._customFontData, function (fontData) {
                fs.readFile(fontData.filename, function (err, buffer) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    var style = util.format('@font-face {font-family: "%s"; src: url("%s");}',
                        fontData.fontFamily,
                        buffer.toString('base64')
                    );
                    callback(null, style);
                })
            }, function (err, lines) {
                if (err) {
                    callback(err);
                    return;
                }
                var style = util.format('<style>%s</style>', lines.concat(' '));
                callback(null, style);
            });
        },
        /**
         * Write as png file.
         * @function
         * @param {string} filename - Filename to write.
         * @param {function} callback - Callback when done.
         */
        writeAsPNG: function (filename, callback) {
            var s = this;
            var canvas = s.draw();
            var inStream = canvas.createPNGStream(),
                outStream = FabricImage._writeStream(filename);
            FabricImage._pipe(
                inStream,
                outStream,
                function (err) {
                    process.nextTick(function () {
                        callback(err);
                    });
                });
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

FabricImage._writeStream = function (filename) {
    if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
    }
    return fs.createWriteStream(filename);
};

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