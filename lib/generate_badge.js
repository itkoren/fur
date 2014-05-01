/**
 * Generate a budge.
 * @memberof module:fur
 * @function generateBadge
 * @param {string} filename - Filename to generate.
 * @param {object} options - Optional settings.
 * @param {string} [options.format=svg] - File format.
 * @param {string} options.style - "default" or "flat".
 * @param {string[]} options.colors - Badge colors.
 * @param {string[]} options.texts - Badge texts.
 * @param {function} callback - Callback when done.
 * @example
 *      generateBadge('foo/bar.svg', {
 *          style: style,
 *          format: 'svg',
 *          colors: ['#999', '#36E'],
 *          texts: ['powered by', ' apeman ']
 *      }, function(){
 *
 *      });
 */

var Badge = require('./badges/badge');

module.exports = function generateBadge(filename, options, callback) {
    var colors = options.colors || [],
        texts = options.texts || [],
        style = options.style || 'default',
        format = options.format || 'svg';
    var badge = new Badge({
        style: style,
        leftColor: colors[0],
        rightColor: colors[1],
        leftText: texts[0],
        rightText: texts[1]
    });
    switch (format) {
        case 'svg':
            badge.writeAsSVG(filename, callback);
            break;
        default:
            callback(new Error('Unknown format: ' + format));
            break;
    }
};