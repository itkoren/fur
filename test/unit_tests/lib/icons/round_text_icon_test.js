/**
 * @file nodeunit test case for "roundTextIcon"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var RoundTextIcon = require('../../../../lib/icons/round_text_icon.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Round text icon.'] = function (test) {
    var icon = new RoundTextIcon({
            borderColor: '#AAA',
            text: 'foo'
        }),
        filename = testHelper.resolveWorkFile('work_round_text_icon.svg');
    icon.writeAsSVG(filename, function (err) {
        test.ifError(err);
        test.done();
    });
};