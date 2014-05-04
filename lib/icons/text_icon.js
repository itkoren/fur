/**
 * @file Text icon.
 * @memberof icons
 * @augments Icon
 * @constructor TextIcon
 * @author Taka Okunishi
 *
 */

"use strict";


var _defineIcon = require('./_define_icon'),
    fabric = require('fabric').fabric;


var TextIcon = module.exports = _defineIcon({
    accessors: [
    /**
     * @function TextIcon.prototype.text
     * @param {number} value - Text.
     */
        'text',
    /**
     * @function TextIcon.prototype.color
     * @param {number} value - Text color.
     */
        'color',
    /**
     * @function TextIcon.prototype.fontFamily
     * @param {string} value - Font family.
     */
        'fontFamily',
    /**
     * @function TextIcon.prototype.fontSize
     * @param {number} value - Font size.
     */
        'fontSize',
    /**
     * @function TextIcon.prototype.textTop
     * @param {number} value - Text top position.
     */
        'textTop',
    /**
     * @function TextIcon.prototype.textLeft
     * @param {number} value - Text left position.
     */
        'textLeft'
    ],
    /**
     * @lends TextIcon.prototype
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
            return new fabric.Text(s._text, {
                fontFamily: s._fontFamily,
                fontSize: s._fontSize,
                fill: s._color,
                top: s._textTop || 0,
                left: s._textLeft || 0,
                textAlign: 'center'
            });
        },
        /**
         * Drawable objects.
         * @function
         * @returns {fabric.Object[]} - Drawable objects.
         */
        drawables: function () {
            var s = this,
                drawables = s.__proto__.__proto__.drawables.call(s);
            return drawables.concat([
                s.newTextObject()
            ]);
        }
    }
});