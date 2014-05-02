/**
 * @file Abstract image object.
 * @memberof fur.images
 * @abstract
 * @constructor Image
 * @author Taka Okunishi
 *
 */


var define = require('../util/define'),
    mkdirp = require('mkdirp'),
    fs = require('fs'),
    path = require('path'),
    async = require('async');

var Image = module.exports = define({
    init: function (values) {
        var s = this;
        s.set(values);
    },
    /**
     * @lends Image
     */
    properties: {
        /**
         * Convert to svg data.
         * @abstract
         * @function
         * @param {function} callback - Callback when done.
         */
        toSVG: function (callback) {
            callback(new Error('Not implemented!'));
        },
        /**
         * Write as svg file.
         * @function
         * @param {string} filename - Filename to write.
         * @param {function} callback - Callback when done.
         */
        writeAsSVG: function (filename, callback) {
            var s = this;
            async.waterfall([
                function (callback) {
                    s.toSVG(callback);
                },
                function (data, callback) {
                    Image._writeFile(filename, data, callback);
                }
            ], callback);
        }
    }
});

Image._writeFile = function (filename, content, callback) {
    async.series([
        function (callback) {
            var dirname = path.dirname(filename);
            mkdirp(dirname, callback);
        },
        function (callback) {
            fs.writeFile(filename, content, callback);
        }
    ], callback);
};
