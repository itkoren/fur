/**
 * @file Default style badge.
 * @see {@link https://www.npmjs.org/package/gh-badges|gh-badges}
 * @memberof module:fur.badges
 * @augment
 * @constructor DefaultBadge
 * @author Taka Okunishi
 *
 */

var _defineBadge = require('./_define_badge');

module.exports = _defineBadge({
    properties: {
        _style: 'default'
    }
});