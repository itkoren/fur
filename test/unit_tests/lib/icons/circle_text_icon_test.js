/**
 * @file nodeunit test case for "circleTextIcon"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var CircleTextIcon = require('../../../../lib/icons/circle_text_icon.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Circle text icon.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_circle_text_icon.svg');
    new CircleTextIcon({
        text: 'foo',
        backgroundColor: '#38A',
        fontSize: 200
    }).writeAsSVG(filename, function (err) {
            test.ifError(err);
            test.done();
        });
};