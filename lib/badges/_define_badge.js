/**
 * Define a badge.
 * @function _defineBadge
 * @memberof badges
 * @param {object} def - Badge definition.
 * @returns {object} Defined object.
 * @protected
 * @author Taka Okunishi
 *
 */

var define = require('../util/define');

module.exports = function (def) {
    def.prototype = require('./badge');
    return define(def);
};