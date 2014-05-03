/**
 * @file nodeunit test case for "print}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var print = require('../../../../lib/util/print.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    console.____log = console.log;
    console.log = function () {
    };
    done();
};

exports.tearDown = function (done) {
    console.log = console.____log;
    delete console.____log;
    done();
};

exports['Print.'] = function (test) {
    ['FALSE', 'TRUE'].forEach(function (flg) {
        process.env.FUR_PRINT_DISABLED = flg;
        print('Normal print.', 1);
        print(new Error(), {foo: 'bar'});
        print.info('Info print.', 2);
        print.ng('NG print.', 3);
        print.ng.detail('NG Detail print.', 4);
        print.ok('OK print.', 5);
        print.debug('foo');
        print._indents.push(10);
        print.debug('bar');
        print._indents.pop();
    });
    process.env.APEMAN_PRINT_DISABLED = 'FALSE';
    print('foo', 'bar');


    print._log('foo', 'bar');
    test.done();
};