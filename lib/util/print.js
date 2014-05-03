/**
 * @file Print messages to console.
 * @memberof util
 * @function print
 * @author Taka Okunishi
 *
 */

var color = require('cli-color');

function join(messages) {
    return Array.prototype.slice.call(messages, 0)
        .map(function (data) {
            if (data instanceof Error) {
                return data.stack;
            }
            if (typeof(data) === 'object') {
                return JSON.stringify(data, null, 4);
            }
            return data;
        })
        .join(' ');
}

exports = module.exports = function () {
    var enabled = (process.env.FUR_PRINT_DISABLED != 'TRUE');
    enabled && exports._log.apply(exports, arguments);
};

exports._indents = [];
exports._log = function () {
    var msg = join(arguments);
    var indent = exports._indents[exports._indents.length - 1] || 0;
    for (var i = 0; i < indent; i++) {
        msg = '\t' + msg;
    }
    console.log(msg);
};

exports.debug = function (msg) {
    msg = color.white(join(arguments));
    exports(msg);
};


exports.info = function (msg) {
    msg = color.magenta(join(arguments));
    exports(msg);
};

exports.ng = function (msg) {
    msg = color.red.bold(join(arguments));
    exports._indents.push(0);
    exports(msg);
    exports._indents.pop();
};

exports.ng.detail = function (msg) {
    msg = color.red(join(arguments));
    exports._indents.push(0);
    exports(msg);
    exports._indents.pop();
};


exports.ok = function (msg) {
    msg = color.green.bold(join(arguments));
    exports(msg);
};
