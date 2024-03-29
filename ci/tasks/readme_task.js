/**
 * @file Update readme document.
 * @memberof module:ci/tasks
 * @function readmeTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var path = require('path'),
    async = require('async'),
    readmeWorkers = require('./readme_workers'),
    util = require('util'),
    os = require('os'),
    fs = require('fs');

exports = module.exports = function (grunt, config, callback) {

    async.waterfall([
        function (callback) {
            exports._data(config, callback);
        },
        function (data, callback) {
            exports._rewrite(config.readmeFile, data, callback);
        }
    ], function (err) {
        if (!err) {
            grunt.log.writeln('File rewrited:', config.readmeFile);
        }
        callback(err);
    });
};

exports._data = function (config, callback) {
    async.series([
        function (callback) {
            readmeWorkers.readmeCommands(callback)
        },
        function (callback) {
            readmeWorkers.readmeExamples(callback);
        },
        function (callback) {
            var commandsWiki = config.commandWikiLinks.map(function (link) {
                return util.format('+ [%s](%s/%s)', link.title, config.wikiBaseUrl, link.href);
            }).join(os.EOL);
            callback(null, commandsWiki);
        }
    ], function (err, data) {
        callback(err, {
            furCommand: data[0],
            examples: data[1],
            commandsWiki: data[2]
        });
    });
};

exports._rewrite = function (filename, data, callback) {
    async.waterfall([
        function (callback) {
            fs.readFile(filename, callback);
        },
        function (content, callback) {
            content = content.toString().split(os.EOL)
                .filter(function (line) {
                    return !line.match(/generated with \[DocToc\]/);
                })
                .reduce(function (result, line) {
                    function maker(line, pattern) {
                        var match = line.match(pattern);
                        var found = match && match[1] && match[1].split(/\s/g).shift();
                        return  found && found.trim();
                    }

                    var start = maker(line, /<!\-\-\s+START\s*(.*)\s*\-\->/);
                    if (start) {
                        var key = start.split('.').pop();
                        if (data[key]) {
                            result.content = result.content.concat([
                                line,
                                "<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->",
                                ''
                            ]);
                            result.content.push(data[key]);
                            result.content.push('');
                            result.maker = start;
                        }
                    } else {
                        var end = maker(line, /<!\-\-\s+END\s*(.*)\s*\-\->/);
                        if (end) {
                            if (result.maker === end) {
                                result.maker = null;
                            }
                        }
                    }
                    if (!result.maker) {
                        result.content.push(line);
                    }
                    return result;
                }, {
                    content: [],
                    maker: null
                })
                .content
                .join(os.EOL);
            callback(null, content);
        },
        function (content, callback) {
            fs.writeFile(filename, content, callback);
        }
    ], callback);
};
