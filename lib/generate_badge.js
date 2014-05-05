/**
 * Generate a budge.
 * @memberof module:fur
 * @function generateBadge
 * @param {string} filename - Filename to generate.
 * @param {object} options - Optional settings.
 * @param {string} [options.colorTheme='a'] - Color theme name.
 * @param {string} options.style - "default" or "flat".
 * @param {string} options.texts - Badge texts.
 * @param {function} callback - Callback when done.
 * @example
 *      generateBadge('foo/bar.svg', {
 *          colorTheme: 'd',
 *          style: 'flat',
 *          texts: 'powered by, apeman '
 *      }, function(){
 *
 *      });
 * @author Taka Okunishi
 */

var Badge = require('./badges/badge'),
    fallbackCopy = require('./util/fallback_copy'),
    catalogs = require('./catalogs');

module.exports = function generateBadge(filename, options, callback) {
    var st = fallbackCopy({
        colorTheme: 'a',
        format: filename.split('.').pop(),
        style: 'default',
        texts:'foo,bar'
    }, options);

    var colorScheme = catalogs.colorSchemeCatalog[st.colorTheme],
        colors = colorScheme.colors;

    var texts = st.texts.split(',');

    var badge = new Badge({
        style: st.style,
        leftColor: colors[0],
        rightColor: colors[1],
        leftText: texts[0],
        rightText: texts[1]
    });

    switch (st.format) {
        case 'svg':
            badge.writeAsSVG(filename, callback);
            break;
        case 'png':
            badge.writeAsPNG(filename, callback);
            break;
        default:
            callback(new Error('Unknown format: ' + format));
            break;
    }
};