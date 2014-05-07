/**
 * @file Configuration for "ci/task.wikiTask".
 * @memberof module:ci/config
 * @member wikiTaskConfig
 */

"use strict";

var wikiTaskConfig = exports.dependencies = {
    dest: '.submodules/wiki/Dependencies.md',
    worker: 'wikiDependencies',
    workerOptions: {
        description: 'Third party libraries which fur depends on.',
        packageJsonFile: 'package.json',
        bowerJsonFile: 'dist/bower.json',
        bowerComponentsDir: 'dist/bower_components'
    }
};