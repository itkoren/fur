/**
 * @file Render dot template.
 * @memberof util
 * @function renderDotTmpl
 * @param {string|function} tmpl - Template file name or function.
 * @param {object} data - Template data.
 * @param {string} dest - Destination file name.
 * @param {function} callback - Callback when done.
 * @see {@link https://www.npmjs.org/package/dot|dot }
 * @author Taka Okunishi
 *
 */

var fs = require('fs'),
    dot = require('dot'),
    async = require('async');

exports = module.exports = function (tmpl, data, dest, callback) {
    async.waterfall([
        function (callback) {
            exports._loadTmpl(tmpl, callback);
        },
        function (tmpl, callback) {
            var rendered = tmpl(data);
            exports._write(dest, rendered, callback);
        }
    ], callback);
};

exports._write = function (dest, content, callback) {
    async.waterfall([
        function (callback) {
            fs.exists(dest, function (exists) {
                if (exists) {
                    fs.readFile(dest, callback);
                } else {
                    callback(null, null);
                }
            });
        },
        function (old, callback) {
            var skip = (old && old.toString()) === content.toString();
            if (skip) {
                callback(null, true);
            } else {
                fs.writeFile(dest, content, callback);
            }
        }
    ], callback);
};

exports._loadTmpl = function (tmpl, callback) {
    if (typeof(tmpl) === 'string') {
        async.waterfall([
            function (callback) {
                fs.readFile(tmpl, callback)
            },
            function (buffer, callback) {
                exports._compile(buffer, callback);
            }
        ], callback);
    } else {
        callback(null, tmpl);
    }
};

exports._compile = function (src, callback) {
    var settings = exports._templateSettings;
    try {
        var compiled = dot.template(src.toString(), settings);
        callback(null, compiled);
    } catch (e) {
        callback(e);
    }
};


exports._templateSettings = {
    evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
    interpolate: /\{\{=([\s\S]+?)\}\}/g,
    encode: /\{\{!([\s\S]+?)\}\}/g,
    use: /\{\{#([\s\S]+?)\}\}/g,
    useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
    define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
    defineParams: /^\s*([\w$]+):([\s\S]+)/,
    conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
    iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
    varname: 'it',
    strip: false,
    append: true,
    selfcontained: false
};
