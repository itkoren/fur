/**
 * @file nodeunit test case for "define}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var define = require('../../../../lib/util/define.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Define.'] = function (test) {
    var O = define({
        accessors: ['foo']
    });
    var o = new O({});
    o.foo('bar');
    test.equal(o._foo, 'bar');
    test.equal(o.foo(), o._foo);
    test.done();
};