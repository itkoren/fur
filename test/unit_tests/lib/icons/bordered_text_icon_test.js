/**
 * @file nodeunit test case for "borderedTextIcon"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var BorderedTextIcon = require('../../../../lib/icons/bordered_text_icon.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Bordered text icon.'] = function (test) {
    var icon = new BorderedTextIcon({
            borderColor: '#AAA',
            text: 'foo'
        }),
        filename = testHelper.resolveWorkFile('work_bordered_text_icon.svg');
    icon.writeAsSVG(filename, function (err) {
        test.ifError(err);
        test.done();
    });
};