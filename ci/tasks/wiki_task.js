/**
 * @file wiki task.
 * @memberof module:ci/tasks
 * @function wikiTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {string} config.description - Description text for the wiki page.
 * @param {string} config.worker - Task worker.
 * @param {object} config.workerOptions - Worker options.
 * @param {object} config.links - Links data.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var wikiWorkers = require('./wiki_workers'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    util = require('util'),
    fs = require('fs'),
    os = require('os'),
    async = require('async');

exports = module.exports = function (grunt, config, callback) {
    var filename = path.resolve(config.filename),
        worker = wikiWorkers[config.worker],
        workerOptions = config.workerOptions || {},
        links = config.links || {},
        description = config.description || '';
    if (!worker) {
        callback(new Error('Unknown worker: ' + worker));
        return;
    }
    async.waterfall([
        function (callback) {
            fs.exists(filename, function (exists) {
                if (!exists) {
                    callback(null, '');
                    return;
                }
                fs.readFile(filename, callback);
            });
        },
        function (buffer, callback) {
            workerOptions.originalContents = workerOptions.originalContents || buffer.toString();
            worker(workerOptions, callback);
        },
        function (content, callback) {
            callback(null, [
                description,
                '',
                content,
                '',
                exports._keyValue(links).map(function (link) {
                    return util.format('[%s]: %s', link.key, link.value);
                }).join(os.EOL)
            ].join(os.EOL));
        },
        function (content, callback) {
            content = (content + os.EOL).trim();
            exports._write(filename, content, callback);
        }
    ], function (err) {
        if (!err) {
            grunt.log.writeln('File created: ', filename);
        }
        callback(err);
    });
};

exports._keyValue = function (data) {
    return Object.keys(data).map(function (key) {
        return {
            key: key,
            value: data[key]
        }
    });
}

exports._write = function (dest, content, callback) {
    async.series([
        function (callback) {
            mkdirp(path.dirname(dest), callback);
        },
        function (callback) {
            fs.writeFile(dest, content, callback);
        }
    ], callback);
};