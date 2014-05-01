/**
 * @file Gh badges module.
 * @memberof fur/badge
 * @function _ghBadge
 * @protected
 * @ignore
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