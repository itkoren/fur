/**
 * @file Catalog web font data.
 * @memberof catalogWorkers
 * @function catalogWebFonts
 * @param {object} options - Catalog options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

var path = require('path'),
    glob = require('glob'),
    changeCase = require('change-case'),
    alphabeticalIndex = require('../../../lib/util/alphabetical_index');


module.exports = function catalogWebFonts(options, callback) {
    var basedir = process.cwd();
    glob(path.resolve(options.pattern), function (err, src) {
        if (err) {
            callback(err);
            return;
        }
        var data = {};
        src.forEach(function (src, i) {
            var extname = path.extname(src),
                basename = path.basename(src, extname);
            data[alphabeticalIndex(i)] = {
                filename: path.relative(basedir, src),
                fontFamily: changeCase.titleCase(basename)
            }
        });
        callback(null, data);
    });
};