/**
 * @file Configuration for "ci/task.fontTask".
 * @memberof module:ci/config
 * @member fontTaskConfig
 * @property {object} doc - Publish fonts to doc directory.
 * @property {object} dist - Publish fonts to dist directory.
 *
 */

"use strict";

exports.doc = {
    catalog: 'assets/catalogs/web-font-catalog.json',
    destDir: 'doc/resources/fonts/theme'
};


exports.dist = {
    catalog: 'assets/catalogs/web-font-catalog.json',
    destDir: 'dist/fonts/theme'
};
