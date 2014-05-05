/**
 * @file Configuration for ci/task.testcase.
 * @ignore
 */

"use strict";

exports.unitTests = {
    type: 'nodeunit',
    srcBase: 'test/unit_tests',
    srcPattern: '**/*_test.js',
    dest: 'test/.testcases.md',
    tmpl: 'tmpl/md/testcases.md.dot'
};