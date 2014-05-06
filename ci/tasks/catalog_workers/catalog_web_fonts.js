/**
 * @file Catalog web font data.
 * @memberof module:ci/tasks
 * @function catalogWorkers.catalogWebFonts
 * @param {object} options - Catalog options.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

var path = require('path'),
    glob = require('glob'),
    changeCase = require('change-case'),
    alphabeticalIndex = require('../../../lib/util/alphabetical_index');


exports = module.exports = function catalogWebFonts(options, callback) {
    var basedir = process.cwd();
    glob(path.resolve(options.pattern), function (err, src) {
        if (err) {
            callback(err);
            return;
        }
        var data = {};

        var nextTheme = exports._bindNextTheme(data),
            reserved = exports._bindReservedTheme(options._oldCatalog || { }, 'filename');

        src.forEach(function (src, i) {
            var extname = path.extname(src),
                basename = path.basename(src, extname),
                relativeName = path.relative(basedir, src);
            var theme = reserved(relativeName) || nextTheme();
            if (data[theme]) {
                data[nextTheme()] = data[theme];
            }
            data[theme] = {
                filename: relativeName,
                fontFamily: changeCase.titleCase(basename)
            }
        });
        callback(null, exports._sortKeys(data));
    });
};

exports._bindReservedTheme = function (oldCatalog, key) {
    var themes = Object.keys(oldCatalog);
    return function (value) {
        for (var i = 0; i < themes.length; i++) {
            var theme = themes[i];
            var hit = oldCatalog[ theme][key] === value;
            if (hit) {
                return theme;
            }
        }
        return null;
    }
};

exports._bindNextTheme = function (data) {
    var index = 0;
    return function () {

        var theme;
        do {
            theme = alphabeticalIndex(index++);
        } while (data[theme]);
        return theme;
    };
};

exports._sortKeys = function (obj) {
    var result = {};
    Object.keys(obj).sort(function (a, b) {
        return (a.length - b.length) ||
            (a.localeCompare(b));
    }).forEach(function (key) {
        result[key] = obj[key];
    });
    return result;
};

