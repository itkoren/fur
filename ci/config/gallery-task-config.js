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
        file: 'doc/resources/stylesheets/gallery.css'
    },
    {
        tmpl: 'tmpl/js/gallery.js.dot',
        file: 'doc/resources/javascripts/gallery.js'
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
        fontsDir: '../resources/fonts/theme',
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


exports.ioniconsIcon = {
    file: 'doc/gallery/icon-ionicons-icon-gallery.html',
    tmpl: 'tmpl/html/icon-gallery.html.dot',
    worker: 'galleryIcons',
    workerOptions: {
        styleFile: 'doc/resources/stylesheets/ionicons.css',
        styleClass: 'icon',
        iconSelectorIgnore: [
            /@/,
            /:before/,
            /^\.ionicons$/,
            /^\.ion-spin$/,
            /^\.ion$/,
            /^\.ion\-loading\-/
        ]
    }
};

exports.fontAwesomeIcon = {
    file: 'doc/gallery/icon-font-awesome-icon-gallery.html',
    tmpl: 'tmpl/html/icon-gallery.html.dot',
    worker: 'galleryIcons',
    workerOptions: {
        styleFile: 'doc/resources/stylesheets/font-awesome.css',
        styleClass: 'fa',
        convert: function (val) {
            return val.replace(/:before/, '');
        },
        iconSelectorIgnore: [
            /@/,
            /^\.fa$/,
            /^\.fa\-lg$/,
            /^\.fa\-ul/,
            /^\.fa\-li/,
            /^\.fa\-rotate/,
            /^\.fa\-border/,
            /^\.fa\-fw/,
            /^\.fa\-spin/,
            /^\.fa\-inverse/,
            /^\.fa\-boarder/,
            /^\.fa\-\dx$/,
            /\.pull\-/,
            /^\.fa\-flip\-/,
            /^\.fa\-stack$/,
            /^\.fa\-stack\-/
        ]
    }
};