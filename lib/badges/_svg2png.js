/**
 * @file Convert a svg to png.
 * @memberof badges
 * @function _svg2png
 * @protected
 * @ignore
 * @author Taka Okunishi
 *
 */

var path = require('path'),
    fs = require('fs');

module.exports = function (svg, filename, callback) {
    var badgeDir = path.dirname(require.resolve('../../support/shields/badge')),
        here = process.cwd();
    process.chdir(badgeDir);
    var svg2img = require('../../support/shields/svg-to-img');
    process.chdir(here);
    var writeStream = fs.createWriteStream(filename);
    svg2img(svg, 'png', writeStream);
    writeStream.on('error', function () {
        callback(new Error('Failed to create png image'));
    });
    writeStream.on('close', function () {
        callback();
    });
};