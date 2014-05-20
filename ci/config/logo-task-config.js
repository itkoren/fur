/**
 * @file Configuration for "ci/task.logoTask".
 * @memberof module:ci/config
 * @member logoTaskConfig
 * @property {object[]} samples - Sample logos.
 * @property {object[]} fur - fur logos.
 * @property {object[]} tickTack - tickTack logos.
 * @property {object[]} tickTack - tickTack logos.
 * @property {object[]} pp-abstract - pp-abstract logos.
 * @property {object[]} pp-static - pp-static logos.
 * @property {object[]} restfulViewer - restful-viewer logos.
 *
 */

"use strict";

var util = require('util'),
    formats = ['svg', 'png'];

var STYLES = require('../../lib/generate_logo').STYLES;

exports.samples = STYLES.map(function (style) {
    return {
        filename: util.format('doc/resources/images/logo-sample-%s.png', style),
        options: {
            style: style,
            text: 'foo',
            colorTheme: 'z',
            fontTheme: 'aj',
            width: 256,
            height: 128,
            fontSize: 108
        }
    }
});


exports.fur = formats.map(function (format) {
    return {
        filename: 'dist/images/fur/fur-logo.' + format,
        options: {
            fontSize: 104,
            text: 'FUR',
            colorTheme: 'bb',
            fontTheme: 'by',
            height: 256,
            width: 256 * 1.4
        }
    }
});


exports.tickTack = formats.map(function (format) {
    return {
        filename: 'dist/images/tick-tack/tick-tack-logo.' + format,
        options: {
            fontSize: 104,
            text: 'tick-tack',
            textLeft: -3,
            colorTheme: 'fo',
            fontTheme: 'bb',
            height: 256,
            width: 256 * 2.0
        }
    }
});

exports.restfulViewer = formats.map(function (format) {
    return {
        filename: 'dist/images/restful-viewer/restful-viewer-logo.' + format,
        options: {
            fontSize: 104,
            text: 'Restful Viewer',
            colorTheme: 'ht',
            fontTheme: 'x',
            height: 256,
            width: 256 * 2.7
        }
    }
});


exports.ppAbstract = formats.map(function (format) {
    return {
        filename: 'dist/images/pp-abstract/pp-abstract-logo.' + format,
        options: {
            fontSize: 104,
            text: 'pp-abstract',
            colorTheme: 'a',
            fontTheme: 'e',
            height: 256,
            width: 256 * 2.5
        }
    }
});


exports.ppStatic = formats.map(function (format) {
    return {
        filename: 'dist/images/pp-static/pp-static-logo.' + format,
        options: {
            fontSize: 104,
            text: 'pp-static',
            colorTheme: 'gs',
            fontTheme: 'j',
            height: 256,
            width: 256 * 2.4
        }
    }
});

exports.xxPaperwork = formats.map(function (format) {
    return {
        filename: 'dist/images/xx-paperwork/xx-paperwork-logo.' + format,
        options: {
            fontSize: 104,
            text: 'pp-static',
            textTop: -10,
            colorTheme: 'jj',
            fontTheme: 'l',
            height: 256,
            width: 256 * 2.4
        }
    }
});