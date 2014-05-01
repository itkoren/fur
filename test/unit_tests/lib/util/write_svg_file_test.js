/**
 * @file nodeunit test case for "writeSvgFile}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var writeSvgFile = require('../../../../lib/util/write_svg_file.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Write svg file.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_svg.svg');
    writeSvgFile(filename, '<svg/>', function (err) {
        test.ifError(err);
        test.done();
    });
};