/**
 * @file Configuration for ci/task.gallery.
 * @ignore
 */

"use strict";

exports.project = {
    dir: 'doc/gallery',
    tmpl: {
        baseCss: 'tmpl/css/gallery.css.dot',
        fontHtml: 'tmpl/html/font-gallery.html.dot'
    },
    catalog: {
        font: 'assets/catalogs/web-font-catalog.json'
    }
};