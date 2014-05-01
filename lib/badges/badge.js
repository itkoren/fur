/**
 * @file Abstract badge object.
 * @see {@link https://www.npmjs.org/package/gh-badges|gh-badges}
 * @memberof module:fur.badges
 * @abstract
 * @constructor Badge
 * @author Taka Okunishi
 *
 */
var define = require('../util/define'),
    _ghBadge = require('./_gh_badge'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    async = require('async');

var Badge = module.exports = define({
    init: function (values) {
        var s = this;
        s.set(values);
    },
    accessors: [
    /**
     * @function module:fur.badges.Badge.style
     * @param {string} value - Badge style. "default" or "flat".
     */
        'style',
    /**
     * @function module:fur.badges.Badge.leftColor
     * @param {string} leftColor - Leftside color.
     */
        'leftColor',
    /**
     * @function module:fur.badges.Badge.rightColor
     * @param {string} rightColor - Rightside color.
     */
        'rightColor',
    /**
     * @function module:fur.badges.Badge.leftText
     * @param {string} leftText - Leftside text.
     */
        'leftText',
    /**
     * @function module:fur.badges.Badge.leftTest
     * @param {string} leftTest - Leftside text.
     */
        'topText'
    ],
    properties: {
        _style: 'default',
        _leftColor: '#AAA',
        _rightColor: '#38E',
        _leftText: 'left',
        _rightText: 'right',
        /**
         * Convert to svg data.
         * @function module:fur.badges.Badge.toSVG
         * @param {function} callback - Callback when done.
         */
        toSVG: function (callback) {
            var s = this,
                ghBadge = _ghBadge();
            ghBadge({
                template: s._style,
                text: [s._leftText, s._rightText],
                colorA: s._leftColor,
                colorB: s._rightColor
            }, function (data) {
                callback && callback.call(s, null, data);
            });
        },
        /**
         * Write as svg file.
         * @param {string} filename - Filename to write.
         * @param {function} callback - Callback when done.
         */
        writeAsSVG: function (filename, callback) {
            var s = this;
            async.waterfall([
                function (callback) {
                    s.toSVG(callback);
                },
                function (data, callback) {
                    Badge.writeFile(filename, data, callback);
                }
            ], callback);
        }
    }
});

Badge.writeFile = function (filename, content, callback) {
    async.series([
        function (callback) {
            var dirname = path.dirname(filename);
            mkdirp(dirname, callback);
        },
        function (callback) {
            fs.writeFile(filename, content, callback);
        }
    ], callback);
};
