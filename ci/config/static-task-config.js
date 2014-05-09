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
    }
];