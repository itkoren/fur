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
    path = require('path'),
    url = require('url'),
    childProcess = require('child_process'),
    async = require('async');


exports = module.exports = function (options, callback) {
    var example = options.example || '';
    async.series([
        function (callback) {
            var samples = (options.sampleImages || []).map(function (sampleImages) {
                return exports._sample(sampleImages.name, sampleImages.data, options.baseURL);
            }).join(os.EOL);
            callback(null, samples);
        },
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
        },
        function (callback) {
            var seeMore = options.seeMore,
                line = seeMore ? util.format('[See more examples](%s).', seeMore) : null;
            callback(null, line);
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

exports._sample = function (name, data, baseURL) {
    var cols = exports._sampleImageCols(data, 64, baseURL);
    var row0 = exports._rowsFromCols(cols, 0),
        row1 = row0.map(function () {
            return ':--------:'
        }),
        row2 = exports._rowsFromCols(cols, 1);
    var rows = [
        row0,
        row1,
        row2
    ]
        .map(function (row) {
            return [].concat('').concat(row).concat('').join(' | ').trim();
        })
        .join(os.EOL);
    return [
        exports._subTitle(name),
        '',
        rows
    ].join(os.EOL);
};

exports._sampleImageCols = function (data, h, baseURL) {
    return data.map(function (data) {
        var filename = data.filename;
        var extname = path.extname(filename),
            basename = path.basename(filename, extname),
            fileURL = url.resolve(baseURL, filename);
        return [
            data.options.style,
            util.format('<a href="%s" ><img alt="%s" src="%s" style="height:%dpx" height="%d" /></a>',
                fileURL, basename, fileURL, h, h)
        ];
    });
};

exports._rowsFromCols = function (cols, rownum) {
    return cols.map(function (col) {
        return col[rownum];
    });
};


exports._existsFilter = function (entry) {
    return !!entry;
};

exports._subTitle = function (subTitle) {
    return util.format('### %s ###', subTitle);
}