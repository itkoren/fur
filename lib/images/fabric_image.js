/**
 * @file Abstract image using fabric.
 * @see {@link https://www.npmjs.org/package/fabric|fabric}
 * @memberof images
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
    cheerio = require('cheerio'),
    mkdirp = require('mkdirp'),
    ttf2woff = require('ttf2woff'),
    Image = require('./image');

var FabricImage = module.exports = define({
    init: function (values) {
        var s = this;
        s.set(values);
        s._customFontData = [];
    },
    accessors: [
    /**
     * @function FabricImage.prototype.width
     * @param {number} value - Image width.
     */
        'width',
    /**
     * @function FabricImage.prototype.height
     * @param {number} value - Image height.
     */
        'height',
    ],
    prototype: Image,
    /**
     * @lends FabricImage.prototype
     */
    properties: {
        _width: 256,
        _height: 256,
        _customFontData: null,
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
            return s;
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
            canvas.renderAll();
            var drawables = s.drawables();
            for (var i = 0; i < drawables.length; i++) {
                canvas.add(drawables[i]);
            }
            canvas.renderAll();
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
                var $ = cheerio.load(svg, {xmlMode: true});
                $('defs').append(style);
                callback(null, $.html());
            });
        },
        svgFontFamilyStyle: function (callback) {
            var s = this;
            async.map(s._customFontData, function (fontData, callback) {
                var filename = fontData.filename,
                    isTTF = FabricImage._isTTF(filename);
                fs.readFile(filename, function (err, buffer) {
                    if (isTTF) {
                        buffer = FabricImage._toWOFF(buffer);
                    }
                    if (err) {
                        callback(err);
                        return;
                    }
                    var style = util.format('@font-face {font-family: "%s"; src: url("data:application/font-woff;charset=utf-8;base64,%s");}',
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
                var style = util.format('<style type="text/css">%s</style>', lines.join(' '));
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
            process.nextTick(function () {
                async.waterfall([
                    function (callback) {
                        FabricImage._writeStream(filename, callback);
                    },
                    function (outStream, callback) {
                        var inStream = canvas.createPNGStream();
                        FabricImage._pipe(
                            inStream, outStream, callback
                        );
                    }
                ], callback);

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


FabricImage._writeStream = function (filename, callback) {
    async.series([
        function (callback) {
            fs.exists(filename, function (exists) {
                if (exists) {
                    fs.unlink(filename, callback);
                } else {
                    callback();
                }
            })
        },
        function (callback) {
            mkdirp(path.dirname(filename), callback);
        },
    ], function (err) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, fs.createWriteStream(filename));
    });
};

FabricImage._pipe = function (reader, writer, callback) {
    reader.pipe(writer);
    reader.on('error', function (err) {
        callback && callback(err);
        callback = null;
    });
    reader.on('end', function (code) {
        process.nextTick(function () {
            var err = code == 0 ? null : new Error('Stream finished with code: ' + code);
            callback && callback(err);
            callback = null;
        });
    });
};

FabricImage._isTTF = function (filename) {
    var extname = path.extname(filename);
    return ['.ttf', '.otf'].indexOf(extname) !== -1;
};

FabricImage._toWOFF = function (buffer) {
    var ttf = new Uint8Array(buffer);
    return new Buffer(ttf2woff(ttf, {}).buffer);
};