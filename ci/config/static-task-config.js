/**
 * @file Configuration for "ci/task.staticTask".
 * @memberof module:ci/config
 * @member staticTaskConfig
 * @property {object[]} doc - Static files for doc directory.
 *
 */

"use strict";


exports.doc = [
    {
        src: 'assets/bower_components/angular/angular.js',
        dest: [
            'doc/resources/javascripts/angular.js',
            'dist/javascripts/angular.js'
        ]
    },
    {
        src: 'assets/bower_components/font-awesome/fonts/fontawesome-webfont.woff',
        dest: [
            'doc/resources/fonts/fontawesome-webfont.woff',
            "dist/fonts/fontawesome-webfont.woff"
        ]
    },
    {
        src: 'assets/bower_components/font-awesome/css/font-awesome.css',
        dest: [
            'doc/resources/stylesheets/font-awesome.css',
            'dist/stylesheets/font-awesome.css'
        ]
    },
    {
        src: 'assets/bower_components/ionicons/css/ionicons.css',
        dest: [
            'doc/resources/stylesheets/ionicons.css',
            'dist/stylesheets/ionicons.css'
        ]
    },
    {
        src: 'assets/bower_components/ionicons/fonts/ionicons.woff',
        dest: [
            'doc/resources/fonts/ionicons.woff',
            'dist/fonts/ionicons.woff'
        ]
    },
    {
        src: 'dist/images/fur/fur-logo.png',
        dest: 'doc/resources/images/logo.png'
    },
    {
        src: 'dist/images/fur/fur-favicon.png',
        dest: 'doc/resources/images/favicon.png'
    }
]
    .map(function (workerOptions) {
        return {
            worker: 'staticCopy',
            workerOptions: workerOptions
        }
    });