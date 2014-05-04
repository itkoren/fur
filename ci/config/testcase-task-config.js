/**
 * @file Configuration for ci/task.testcase.
 * @ignore
 */

"use strict";

exports.unitTests = {
    type: 'nodeunit',
    srcBase: 'test/unit_tests',
    srcPattern: '**/*_test.js',
    dest: 'test/unit_tests.js',
    tmpl: 'tmpl/js/unit_tests.js.dot'
};