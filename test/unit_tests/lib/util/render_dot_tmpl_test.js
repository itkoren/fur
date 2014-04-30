/**
 * @file nodeunit test case for fur/util.renderDotTmpl
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var renderDotTmpl = require('../../../../lib/util/render_dot_tmpl'),
    testHelper = require('../../../test_helper');

exports['Load tmpl.'] = function (test) {
    var tmplFile = testHelper.resolveMockFile('mock_dot.dot');
    renderDotTmpl._loadTmpl(tmplFile, function (err, tmpl) {
        test.ifError(err);
        test.ok(tmpl);
        test.done();
    });
};

exports['Render dot tmpl.'] = function (test) {
    var workDir = testHelper.prepareCleanWorkDirForTestFile(__filename),
        tmplFile = testHelper.resolveMockFile('mock_dot.dot'),
        dest = workDir + '/work_rendered.txt';
    renderDotTmpl(tmplFile, {
        foo: 'bar'
    }, dest, function (err) {
        test.ok(testHelper.existsSync(dest));
        test.ifError(err);
        test.done();
    });
};