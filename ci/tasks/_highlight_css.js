/**
 * @memberof module:ci/tasks
 * @function _highlightCss
 * @protected
 * @returns {string}
 */

var cleanCss = require('clean-css'),
    fs = require('fs'),
    path = require('path');

module.exports = function highlightCss() {
    var dirname = path.dirname(require.resolve('highlight')),
        filename = path.resolve(dirname, 'vendor/highlight.js/styles/idea.css');
    return new cleanCss().minify(fs.readFileSync(filename).toString());
};