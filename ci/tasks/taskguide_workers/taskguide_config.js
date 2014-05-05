/**
 * @file Configurations.
 * @memberof module:ci/tasks
 * @function taskguideWorkers.taskguideConfig
 * @param {string} pattern - Config filename pattern.
 * @param {function} callback - Callback when done.
 */

var path = require('path'),
    async = require('async'),
    changeCase = require('change-case'),
    highlight = require('highlight').Highlight,
    glob = require('glob');

module.exports = function (pattern, callback) {
    async.waterfall([
        function (callback) {
            glob(path.resolve(pattern), callback);
        },
        function (filenames, callback) {
            var data = filenames.map(function (filename) {
                var extname = path.extname(filename),
                    basename = path.basename(filename, extname);
                return {
                    name: changeCase.camelCase(basename),
                    filename: path.relative(process.cwd(), filename),
                    data: highlight(
                        "var config = " + JSON.stringify(require(filename), null, 4)
                    ).replace('<span class="keyword">var</span> config = ','')

                }
            });
            callback(null, data);
        }
    ], callback);
};