/**
 * Define a logo.
 * @function _defineLogo
 * @memberof module:fur.logos
 * @param {object} def - Logo definition.
 * @returns {object} Defined object.
 * @protected
 * @author Taka Okunishi
 *
 */

var define = require('../util/define');

module.exports = function (def) {
    def.prototype = def.prototype || require('./logo');
    return define(def);
};