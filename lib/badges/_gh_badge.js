/**
 * @file Gh badges module.
 * @see {@link https://www.npmjs.org/package/gh-badges|gh-badges}
 * @memberof badges
 * @function _ghBadge
 * @protected
 * @ignore
 * @author Taka Okunishi
 *
 */

var path = require('path');

module.exports = function () {
    var badgeDir = path.dirname(require.resolve('../../support/shields/badge')),
        here = process.cwd();
    process.chdir(badgeDir);
    var required = require('../../support/shields/badge');
    process.chdir(here);
    return required;
};