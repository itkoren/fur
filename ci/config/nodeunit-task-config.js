/**
 * @file Nodeunit task config.
 * @see https://github.com/gruntjs/grunt-contrib-nodeunit
 * @memberof module:ci/config
 * @member nodeunitTaskConfig
 * @property {string[]} unitTests - Unit test target files.
 *
 */

exports.unitTests = [
    'test/unit_tests/**/*_test.js'
];