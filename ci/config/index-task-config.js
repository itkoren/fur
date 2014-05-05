/**
 * @file Configuration for "ci/task.indexTask".
 * @memberof module:ci/config
 * @member indexTaskConfig
 * @property {object} ciTasks - Index file for ci/tasks directory.
 * @property {object} ciConfig - Index file for ci/config directory.
 */

"use strict";

exports.ciTasks = {
    pattern: 'ci/tasks/*_task.js',
    dest: 'ci/tasks/index.js',
    tmpl: 'tmpl/js/index.js.dot'
};

exports.ciConfig = {
    pattern: 'ci/config/*-config.js',
    dest: 'ci/config/index.js',
    tmpl: 'tmpl/js/index.js.dot'
};