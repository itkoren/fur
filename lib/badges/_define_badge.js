/**
 * Define a badge.
 * @function _defineBadge
 * @memberof module:fur.badges
 * @param {object} def - Badge definition.
 * @returns {object} Defined object.
 * @protected
 *
 */

var define = require('../util/define');

module.exports = function (def) {
    def.prototype = require('./badge');
    return define(def);
};