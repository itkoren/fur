/**
 * @file Configuration for "ci/task.galleryTask".
 * @memberof module:ci/config
 * @member galleryTaskConfig
 * @property {object} base - Gallery base configuration.
 * @property {object} index - Gallery index configuration.
 * @property {object} webFont - Web font gallery configuration.
 * @property {object} colorScheme - Color scheme configuration.
 */

"use strict";

exports.base = [
    {
        tmpl: 'tmpl/css/gallery.css.dot',
        file: 'doc/gallery/gallery.css'
    },
    {
        tmpl: 'tmpl/js/gallery.js.dot',
        file: 'doc/gallery/gallery.js'
    }
];

exports.index = {
    file: 'doc/gallery/index.html',
    tmpl: 'tmpl/html/gallery-index.html.dot'
};

exports.webFont = {
    file: 'doc/gallery/web-font-gallery.html',
    tmpl: 'tmpl/html/web-font-gallery.html.dot',
    worker: 'galleryWebFonts',
    workerOptions: {
        fontsDir:'../fonts',
        catalogFile: 'assets/catalogs/web-font-catalog.json'
    }
};

exports.colorScheme = {
    file: 'doc/gallery/color-scheme-gallery.html',
    tmpl: 'tmpl/html/color-scheme-gallery.html.dot',
    worker: 'galleryColorSchemes',
    workerOptions: {
        catalogFile: 'assets/catalogs/color-scheme-catalog.json'
    }
};