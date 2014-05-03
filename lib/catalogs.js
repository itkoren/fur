/**
 * @file Catalogs.
 * @memberof module:fur
 * @namespace catalogs
 */

"use strict";

module.exports = {
    /**
     * Color scheme catalogs.
     * @memberof catalogs
     * @type {object}
     */
    get colorSchemeCatalog() {
        return require('../assets/catalogs/color-scheme-catalog')
    },
    /**
     * Web font catalogs.
     * @memberof catalogs
     * @type {object}
     */
    get webFontCatalog() {
        return require('../assets/catalogs/web-font-catalog')
    }
};