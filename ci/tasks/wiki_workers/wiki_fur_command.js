/**
 * @file Contents about fur command.
 * @memberof module:ci/tasks
 * @function wikiWorkers.wikiFurCommand
 * @param {object} options - Worker options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

"use strict";
var os = require('os'),
    util = require('util'),
    childProcess = require('child_process'),
    async = require('async');

exports = module.exports = function (options, callback) {
    var example = options.example || '';
    async.series([
        function (callback) {
            exports._commandHelp(options.command, callback);
        },
        function (callback) {
            callback(null, [
                '',
                exports._subTitle('Example'),
                '',
                '```bash',
                example,
                '```'
            ].join(os.EOL));
        }
    ], function (err, result) {
        callback(err, result.join(os.EOL));
    });
};

exports._commandHelp = function (command, callback) {
    var bin = require.resolve('../../../bin/fur');
    var executable = [bin, command || '', '-h'].filter(exports._existsFilter).join(' ');
    childProcess.exec(executable, function (err, stdOut, stdErr) {
        if (stdErr && stdErr.trim()) {
            console.error(stdErr);
        }
        var result = [
            '',
            exports._subTitle('Help'),
            '',
            '```bash',
            ['$', 'fur', command, '-h'].filter(exports._existsFilter).join(' '),
            stdOut.replace(/\n$/, ''),
            '```'
        ].join(os.EOL);
        callback(err, result);
    });
};

exports._existsFilter = function (entry) {
    return !!entry;
};

exports._subTitle = function (subTitle) {
    return util.format('### %s ###', subTitle);
}