/**
 * @file Contents about favicon command.
 * @memberof module:ci/tasks
 * @function wikiWorkers.wikiFurFavicon
 * @param {object} options - Worker options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";
var _commandHelp = require('./_command_help'),
    os = require('os'),
    async = require('async');

exports = module.exports = function (options, callback) {
    async.series([
        function (callback) {
            _commandHelp('favicon', callback);
        }
    ], function (err, result) {
        callback(err, result.join(os.EOL));
    });
};