/**
 * @file Copy property only unless destination object has it.
 * @memberof util
 * @function fallbackCopy
 * @param {object} src - Source object.
 * @param {object} dest - Destination object.
 * @returns {object} - Copied object.
 */


module.exports = function fallbackCopy(src, dest) {
    if (!dest) {
        dest = {};
    }
    for (var key in src) {
        if (src.hasOwnProperty(key)) {
            if (!dest.hasOwnProperty(key)) {
                dest[key] = src[key];
            }
        }
    }
    return dest;
};