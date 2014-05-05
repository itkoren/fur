/**
 * @file Configuration for "ci/task.taskguideTask".
 * @memberof module:ci/config
 * @member taskguideTaskConfig
 * @property {object} project - Project taskguide configuration.
 */

"use strict";

exports.project = {
    tmpl: 'tmpl/md/taskguide.md.dot',
    dest: 'ci/.taskguide.md',
    configFiles: 'ci/config/*-config.js',
    links: {
        chmod: 'https://github.com/JamesMGreene/grunt-chmod',
        exec: 'https://github.com/jharding/grunt-exec',
        jsdoc: 'https://github.com/krampstudio/grunt-jsdoc',
        nodeunit: 'https://github.com/gruntjs/grunt-contrib-nodeunit',
        mkdir: 'https://github.com/rubenv/grunt-mkdir'
    }
};