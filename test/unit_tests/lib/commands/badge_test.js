/**
 * @file nodeunit test case for "badge"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var badge = require('../../../../lib/commands/badge.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function(done) {
    process.env.FUR_PRINT_DISABLED = 'TRUE';
    done();
};

exports.tearDown = function(done) {
    process.env.FUR_PRINT_DISABLED = 'FALSE';
    done();
};

exports['Badge.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_generated_badge.svg');
    badge(filename, {}, function (err) {
        test.ifError(err);
        test.done();
    });
};