/**
 * @file gallery task.
 * @memberof module:ci/tasks
 * @function galleryTask
 * @param grunt
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var path = require('path'),
    async = require('async'),
    util = require('util'),
    changeCase = require('change-case'),
    os = require('os'),
    galleryWorkers = require('./gallery_workers'),
    renderDotFile = require('../../lib/util/render_dot_tmpl');

exports = module.exports = function (grunt, config, callback) {
    var basedir = process.cwd();
    async.eachSeries([].concat(config), function (config, callback) {
        var tmpl = path.resolve(config.tmpl),
            dest = path.resolve(config.file);
        exports._data(config.worker, config.workerOptions, function (err, data) {
            var destDir = path.dirname(dest);
            data._relativePathToBaseDir = path.relative(destDir, basedir);
            data._title = changeCase.titleCase(path.basename(dest, path.extname(dest)));
            data._footerHtml = exports._footerHtml;
            data._headHtml = exports._headHtml;
            data._links = exports._links;
            renderDotFile(tmpl, data, dest, function (err) {
                if (!err) {
                    grunt.log.writeln('File crated:', dest);
                }
                callback(err);
            });
        });
    }, callback);
};

exports._data = function (worker, workerOptions, callback) {
    if (!worker) {
        callback(null, {});
        return;
    }
    var isValid = !!galleryWorkers[worker];
    if (!isValid) {
        callback(new Error('Unknown worker: ' + worker));
        return;
    }
    galleryWorkers[worker](workerOptions || {}, callback);

};

exports._headHtml = [
    '<meta charset="UTF-8">',
    '<link rel="stylesheet" href="gallery.css"/>',
    '<script src="gallery.js"></script>',
    '<link rel="icon" href="favicon.png"/>'
].join(os.EOL);

exports._footerHtml = [
    '<a id="jump-to-top-btn" href="#">&#8679;Jump to Top</a>'
].join(os.EOL);

exports._links = [
    {
        title: 'color-scheme',
        href: 'color-scheme-gallery.html'
    },
    {
        title: 'web-font',
        href: 'web-font-gallery.html'
    }
];