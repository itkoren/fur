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
     * @function TextIcon.text
     * @param {number} value - Text.
     */
        'text',
    /**
     * @function TextIcon.color
     * @param {number} value - Text color.
     */
        'color',
    /**
     * @function TextIcon.fontFamily
     * @param {string} value - Font family.
     */
        'fontFamily',
    /**
     * @function TextIcon.fontSize
     * @param {number} value - Font size.
     */
        'fontSize'
    ],
    /**
     * @lends TextIcon
     */
    properties: {
        _color: '#FFF',
        _text: '',
        _fontSize: 24,
        _fontFamily: 'Hoefler Text',
        /**
         * @function
         * @@returns {fabric.Text} - New text object.
         */
        newTextObject: function () {
            var s = this;
            return new fabric.Text(s._text, {
                fontFamily: s._fontFamily,
                fontSize: s._fontSize,
                fill: s._color,
                originX: 'center',
                originY: 'center',
                left: s._fontSize / 2,
                top: s._fontSize / 2
            })
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