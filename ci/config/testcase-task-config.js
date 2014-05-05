/**
 * @file Configuration for "ci/task.testcaseTask".
 * @memberof module:ci/config
 * @member testcaseTaskConfig
 * @property {object} uniteTests - Unit test target config.
 */

"use strict";

exports.unitTests = {
    type: 'nodeunit',
    srcBase: 'test/unit_tests',
    srcPattern: '**/*_test.js',
    dest: 'test/.testcases.md',
    tmpl: 'tmpl/md/testcases.md.dot'
};