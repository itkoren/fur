/**
 * @file nodeunit test case for "textLogo"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var TextLogo = require('../../../../lib/logos/text_logo.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};
exports['Text logo.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_text_logo.svg');
    new TextLogo({
        text: 'foo',
        backgroundColor: '#EEE',
        fontSize: 200
    }).writeAsSVG(filename, function (err) {
            test.ifError(err);
            test.done();
        });
};