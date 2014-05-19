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
        worker: 'staticCopy',
        workerOptions: {
            src: 'assets/bower_components/angular/angular.js',
            dest: 'doc/resources/javascripts/angular.js'
        }
    },
    {
        worker: 'staticCopy',
        workerOptions: {
            src: 'assets/bower_components/font-awesome/fonts/fontawesome-webfont.woff',
            dest: 'doc/resources/fonts/fontawesome-webfont.woff'
        }
    },
    {
        worker: 'staticCopy',
        workerOptions: {
            src: 'assets/bower_components/font-awesome/css/font-awesome.css',
            dest: 'doc/resources/stylesheets/font-awesome.css'
        }
    },
    {
        worker: 'staticCopy',
        workerOptions: {
            src: 'assets/bower_components/ionicons/css/ionicons.css',
            dest: 'doc/resources/stylesheets/ionicons.css'
        }
    },
    {
        worker: 'staticCopy',
        workerOptions: {
            src: 'assets/bower_components/ionicons/fonts/ionicons.woff',
            dest: 'doc/resources/fonts/ionicons.woff'
        }
    },
    {
        worker: 'staticCopy',
        workerOptions: {
            src: 'dist/images/fur/fur-logo.png',
            dest: 'doc/resources/images/logo.png'
        }
    },
    {
        worker: 'staticCopy',
        workerOptions: {
            src: 'dist/images/fur/fur-favicon.png',
            dest: 'doc/resources/images/favicon.png'
        }
    }
];