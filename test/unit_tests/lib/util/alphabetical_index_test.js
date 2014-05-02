/**
 * @file nodeunit test case for "alphabeticalIndex}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var alphabeticalIndex = require('../../../../lib/util/alphabetical_index.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Alphabetical index.'] = function (test) {
    test.equal(alphabeticalIndex(0), "a");
    test.equal(alphabeticalIndex(1), "b");
    test.equal(alphabeticalIndex(25), "z");
    test.equal(alphabeticalIndex(26), "aa");
    test.equal(alphabeticalIndex(27), "ab");
    test.equal(alphabeticalIndex(51), "az");
    test.equal(alphabeticalIndex(52), "ba");
    test.done();
};