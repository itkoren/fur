/**
 * @file Embed links to wiki.
 * @memberof module:ci/tasks
 * @function wikiWorkers.wikiEmbedLinks
 * @param {object} options - Worker options.
 * @param {object} options.originalContents - Original contents.
 * @param {object} options.links - Links to embed.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */
var os = require('os'),
    util = require('util');


module.exports = function (options, callback) {
    var embedding = false;
    var newContent = (options.originalContents || '')
        .split(os.EOL)
        .filter(function (line) {
            return !!line;
        })
        .map(function (line) {

            var start = !!line.match(/<!\-\-\s+START\s*embedLink\s*\-\->/);
            console.log('line', line, start);
            if (start) {
                embedding = embedding || start;
                return [
                    line,
                    "<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt wiki TO UPDATE -->",
                    '',
                    options.links.map(function (link) {
                        return util.format('[%s](%s)', link.title, link.href);
                    }).join(os.EOL),
                    ''
                ].join(os.EOL)
            } else {
                if (embedding) {
                    var end = !!line.match(/<!\-\-\s+END\s*embedLink\s*\-\->/);
                    embedding = embedding && !end;
                    if (embedding) {
                        return '<!-- Line to delete -->';
                    }
                }
            }
            return line;
        })
        .filter(function (line) {
            return !(line.match('<!-- Line to delete -->'));
        })
        .join(os.EOL);
    callback(null, newContent);
};