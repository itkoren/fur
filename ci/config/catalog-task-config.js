/**
 * @file Configuration for ci/task.catalog.
 * @ignore
 */

"use strict";

exports.webFonts = {
    dest: 'assets/catalogs/web-font-catalog.json',
    worker: 'catalogWebFonts',
    workerOptions: {
        pattern: 'assets/web_fonts/**/*.+(ttf|otf)'
    }
};


//exports.colorSchemes = {
//    dest: 'assets/catalogs/color-schemes-catalog.json',
//    worker: 'colorScheme',
//    workerOptions: {
//
//    }
//};