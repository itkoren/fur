/**
 * @file nodeunit test case for "favicon}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var favicon = require('../../../../lib/commands/favicon.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    process.env.FUR_PRINT_DISABLED = 'TRUE';
    done();
};

exports.tearDown = function (done) {
    process.env.FUR_PRINT_DISABLED = 'FALSE';
    done();
};

exports['Favicon.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work-command-favicon.svg');
    favicon(filename, {
        font: 'a',
        color: 'e',
        format: 'svg'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};