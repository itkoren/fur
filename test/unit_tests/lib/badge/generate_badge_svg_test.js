/**
 * @file nodeunit test case for "generateBadgeSvg}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var generateBadgeSvg = require('../../../../lib/badge/generate_badge_svg.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Generate badge svg.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_badge.svg');
    generateBadgeSvg('flat',
        ['foo', 'bar'],
        ['#999', '#36E'],
        filename,
        function (err) {
            test.ifError(err);
            test.done();
        }
    );
};