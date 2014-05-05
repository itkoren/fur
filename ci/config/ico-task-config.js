/**
 * @file Configuration for "ci/task.icoTask".
 * @memberof module:ci/config
 * @member icoTaskConfig
 * @property {object} tickTack - Configuration for tick-tack ico image.
 * @property {object} fur - Configuration for fur ico image.
 * @property {object} ppAbstract - Configuration for pp-abstract ico image.
 */

"use strict";


exports.tickTack = {
    src: 'dist/images/tick-tack/tick-tack-favicon.png',
    dest: 'dist/images/tick-tack/tick-tack-favicon.ico'
};


exports.fur = {
    src: 'dist/images/fur/fur-favicon.png',
    dest: 'dist/images/fur/fur-favicon.ico'
};


exports.ppAbstract = {
    src: 'dist/images/pp-abstract/pp-abstract-favicon.png',
    dest: 'dist/images/pp-abstract/pp-abstract-favicon.ico'
};