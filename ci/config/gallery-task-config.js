/**
 * @file Configuration for ci/task.gallery.
 * @ignore
 */

"use strict";

exports.base = [
    {
        tmpl: 'tmpl/css/gallery.css.dot',
        file: 'doc/gallery/gallery.css'
    }
];

exports.font = {
    file: 'doc/gallery/web-font-gallery.html',
    tmpl: 'tmpl/html/web-font-gallery.html.dot',
    worker: 'galleryWebFonts',
    workerOptions: {
        catalogFile: 'assets/catalogs/web-font-catalog.json'
    }
};
