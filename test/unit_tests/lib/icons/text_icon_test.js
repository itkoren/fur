/**
 * @file nodeunit test case for "textIcon}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var TextIcon = require('../../../../lib/icons/text_icon.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Text icon.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_text_icon.svg');
    new TextIcon({
        text: 'foo',
        backgroundColor: '#EEE',
        fontSize:200
    }).writeAsSVG(filename, function (err) {
            test.ifError(err);
            test.done();
        });
};