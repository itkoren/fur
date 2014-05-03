/**
 * Define a icon.
 * @function _defineIcon
 * @memberof module:fur.icons
 * @param {object} def - Icon definition.
 * @returns {object} Defined object.
 * @protected
 * @author Taka Okunishi
 *
 */

var define = require('../util/define');

module.exports = function (def) {
    def.prototype = require('./icon');
    return define(def);
};