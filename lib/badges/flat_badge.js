/**
 * @file Flat style badge.
 * @see {@link https://www.npmjs.org/package/gh-badges|gh-badges}
 * @memberof badges
 * @augments Badge
 * @constructor FlatBadge
 * @author Taka Okunishi
 *
 */

"use strict";

var _defineBadge = require('./_define_badge');

module.exports = _defineBadge({
    properties: {
        _style: 'flat'
    }
});