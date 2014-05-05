/**
 * @file Configuration for "ci/task.taskguideTask".
 * @memberof module:ci/config
 * @member taskguideTaskConfig
 * @proeprty {object} project - Project taskguide configuration.
 */

"use strict";

exports.project = {
    tmpl: 'tmpl/md/taskguide.md.dot',
    dest: 'ci/.taskguide.md'
};