/**
 * @file Configuration for "ci/task.tickTackResourcesTask".
 * @memberof module:ci/config
 * @member tickTackResourcesTaskConfig
 */

"use strict";

exports.images = {
    srcDir: 'dist',
    destDir: '.submodules/tick-tack-resources',
    patterns: [
        'images/**/*.png',
        'images/**/*.svg'
    ]
};

exports.fonts = {
    srcDir: 'dist',
    destDir: '.submodules/tick-tack-resources',
    patterns: [
        'fonts/**/*.woff'
    ]
};

exports.json = {
    srcDir: 'dist',
    destDir: '.submodules/tick-tack-resources',
    patterns: [
        'json/**/*.json'
    ]
};