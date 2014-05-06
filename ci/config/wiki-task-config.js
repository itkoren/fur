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
        packageJsonFile: 'package.json',
        bowerJsonFile: 'dist/bower.json'
    }
};