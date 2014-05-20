/**
 * @file Gallery icons.
 * @memberof module:ci/tasks
 * @function galleryWorkers.galleryIcons
 * @param {object} options - Gallery options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";


var util = require('util'),
    fs = require('fs'),
    css = require('css'),
    async = require('async'),
    path = require('path');

exports = module.exports = function galleryIcons(options, callback) {
    var styleFile = path.resolve(options.styleFile),
        iconSelectorIgnore = [].concat(options.iconSelectorIgnore);
    async.waterfall([
        function (callback) {
            exports._iconSelectors(styleFile, iconSelectorIgnore, callback);
        },
        function (selectors, callback) {
            if (options.convert) {
                selectors = selectors.map(options.convert);
            }
            var data = {
                styleClass: options.styleClass,
                selectors: selectors,
                styleRef: path.relative(path.dirname(options._dest), styleFile)
            };
            callback(null, data);
        }
    ], callback);
};


exports._iconSelectors = function (styleFile, ignorePattern, callback) {
    async.waterfall([
        function (callback) {
            fs.readFile(styleFile, callback)
        },
        function (buffer, callback) {
            var parsed = css.parse(buffer.toString());
            callback(null, parsed);
        },
        function (css, callback) {
            var selectors = css.stylesheet.rules
                .filter(function (rule) {
                    return rule.type === 'rule';
                })
                .map(function (rule) {
                    return rule.selectors
                })
                .reduce(function (result, current) {
                    return result.concat(current);
                }, [])
                .filter(function (selector) {
                    for (var i = 0; i < ignorePattern.length; i++) {
                        var hit = !!selector.match(ignorePattern[i]);
                        if (hit) {
                            return false;
                        }
                    }
                    return true;
                });
            callback(null, selectors);
        }
    ], callback);
};