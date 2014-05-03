/**
 * @file nodeunit test case for "catalogs}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var catalogs = require('../../../lib/catalogs.js'),
    testHelper = require('../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Catalogs.'] = function (test) {
    test.ok(catalogs.colorSchemeCatalog);
    test.ok(catalogs.webFontCatalog);
    test.done();
};