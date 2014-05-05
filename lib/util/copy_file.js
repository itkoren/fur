/**
 * @file Copy file.
 * @memberof util
 * @function copyFile
 * @param {string} src - File path to copy from.
 * @param {string} dest - File path to copy to.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 *
 */

var fs = require('fs');
exports = module.exports = function copyFile(src, dest, callback) {
    fs.exists(src, function (exists) {
        if (!exists) {
            callback(new Error('File not exists: ' + src));
            return;
        }
        var readStream = fs.createReadStream(src),
            writeStream = fs.createWriteStream(dest);

        var errorHandler = exports._errorHandler(callback);
        readStream.on('error', errorHandler);
        writeStream.on('error', errorHandler);
        writeStream.on('close', function () {
            callback(null);
        });
        readStream.pipe(writeStream);
    });
};

exports._errorHandler = function (callback) {
    return function (err) {
        callback && callback(err);
        callback = null;
    };
};