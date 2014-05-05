/**
 * @file Configuration for "ci/task.indexTask".
 * @memberof module:ci/config
 * @member indexTaskConfig
 * @property {object} ciTasks - Index file for ci/tasks directory.
 * @property {object} ciConfig - Index file for ci/config directory.
 * @property {object} libBadges - Index file for lib/badges directory.
 * @property {object} libCommands - Index file for lib/commands directory.
 * @property {object} libIcons - Index file for lib/icons directory.
 * @property {object} libImages - Index file for lib/images directory.
 * @property {object} libUtil - Index file for lib/util directory.
 * @property {object} lib - Index file for lib directory.
 */

"use strict";

var pkg = require('../../package');

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

exports.libBadges = {
    pattern: 'lib/badges/*badge.js',
    dest: 'lib/badges/index.js',
    tmpl: 'tmpl/js/fur_namespace_index.js.dot',
    description: 'Fur badges.',
    capitalize: true
};

exports.libCommands = {
    pattern: 'lib/commands/*.js',
    dest: 'lib/commands/index.js',
    tmpl: 'tmpl/js/fur_namespace_index.js.dot',
    description: 'Fur commands.'
};

exports.libIcons = {
    pattern: 'lib/icons/*icon.js',
    dest: 'lib/icons/index.js',
    tmpl: 'tmpl/js/fur_namespace_index.js.dot',
    description: 'Fur icons.',
    capitalize:true
};

exports.libImages = {
    pattern: 'lib/images/*image.js',
    dest: 'lib/images/index.js',
    tmpl: 'tmpl/js/fur_namespace_index.js.dot',
    description: 'Fur images.',
    capitalize:true
};

exports.libUtil = {
    pattern: 'lib/util/*.js',
    dest: 'lib/util/index.js',
    tmpl: 'tmpl/js/fur_namespace_index.js.dot',
    description: 'Fur util.'
};

exports.lib = {
    pattern: 'lib/*',
    dest: 'lib/index.js',
    tmpl: 'tmpl/js/index.js.dot',
    description: pkg.description,
    see: '@see {@link https://github.com/tick-tack/fur|fur}'
};