/**
 * @file Text logo.
 * @memberof logos
 * @augments Logo
 * @constructor TextLogo
 * @author Taka Okunishi
 *
 */

"use strict";


var _defineLogo = require('./_define_logo'),
    Logo = require('./logo'),
    fabric = require('fabric').fabric;


var TextLogo = module.exports = _defineLogo({
    accessors: [
    /**
     * @function TextLogo.prototype.text
     * @param {number} value - Text.
     */
        'text',
    /**
     * @function TextLogo.prototype.color
     * @param {number} value - Text color.
     */
        'color',
    /**
     * @function TextLogo.prototype.fontFamily
     * @param {string} value - Font family.
     */
        'fontFamily',
    /**
     * @function TextLogo.prototype.fontSize
     * @param {number} value - Font size.
     */
        'fontSize',
    /**
     * @function TextLogo.prototype.textTop
     * @param {number} value - Text top position.
     */
        'textTop',
    /**
     * @function TextLogo.prototype.textLeft
     * @param {number} value - Text left position.
     */
        'textLeft'
    ],
    /**
     * @lends TextLogo.prototype
     */
    properties: {
        _color: '#FFF',
        _text: '',
        _fontSize: 24,
        _textTop: 0,
        _textLeft: 0,
        _fontFamily: 'Hoefler Text',
        /**
         * @function
         * @returns {fabric.Text} - New text object.
         */
        newTextObject: function () {
            var s = this;
            var w = s.width(),
                h = s.height(),
                top = s.textTop() || 0,
                left = s.textLeft() || 0;

            return new fabric.Text(s.text(), {
                fontFamily: s.fontFamily(),
                fontSize: s.fontSize(),
                fill: s.color(),
                top: h / 2 + top,
                left: w / 2 + left,
                lineHeight: 1.25,
                originX: 'center',
                originY: 'center',
                textAlign: 'left'
            });
        },
        /**
         * Drawable objects.
         * @function
         * @returns {fabric.Object[]} - Drawable objects.
         */
        drawables: function () {
            var s = this,
                drawables = Logo.prototype.drawables.call(s);
            return drawables.concat([
                s.newTextObject()
            ]);
        }
    }
});