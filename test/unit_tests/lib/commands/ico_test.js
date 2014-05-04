/**
 * @file nodeunit test case for "ico}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var ico = require('../../../../lib/commands/ico.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    process.env.FUR_PRINT_DISABLED = 'TRUE';
    done();
};

exports.tearDown = function (done) {
    process.env.FUR_PRINT_DISABLED = 'FALSE';
    done();
};

exports['Ico.'] = function (test) {
    var src = testHelper.resolveMockFile('mock-png.png'),
        dest = testHelper.resolveWorkFile('work-command-ico.ico');
    ico(src, dest, function (err) {
        test.ifError(err);
        test.done();
    });
};