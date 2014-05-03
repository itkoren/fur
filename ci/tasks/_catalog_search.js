/**
 * @file Search catalog.
 * @memberof module:ci/tasks
 * @namespace _catalogSearch
 * @protected
 * @author Taka Okunishi
 *
 */

"use strict";

exports.searchWebFont = function (key) {
    var data = require('../../assets/catalogs/web-font-catalog');
    return exports._search(data, key);
};

exports.searchColorScheme = function (key) {
    var data = require('../../assets/catalogs/color-scheme-catalog');
    return exports._search(data, key);
};

exports._search = function (data, key) {
    return data && data[key] || key;
};