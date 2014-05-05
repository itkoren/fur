/**
 * @file Define a class.
 * @memberof util
 * @function define
 * @param {object} def - Constructor definition.
 * @param {function} def.init - Initializer of function.
 * @param {object} def.properties - Properties for prototype.
 * @param {string[]} def.accessor - Generate attr accessor methods.
 * @author Taka Okunishi
 *
 */
exports = module.exports = function (def) {
    var Constructor = function () {
        var s = this;
        if (s.init) {
            s.init.apply(s, arguments);
        }
    };

    var Prototype = def.prototype || def.Prototype;
    if (Prototype) {
        Constructor.prototype = new Prototype();
    }

    var properties = def.properties || def.property || {};
    exports._addProperty(Constructor, properties);

    var init = def.init || def.initialize;
    if (init) {
        Constructor.prototype.init = init;
    }

    Constructor.prototype.toString = function () {
        return def;
    };

    Constructor.prototype.set = exports._set;
    Constructor.prototype.get = exports._get;

    var accessor = def.accessor || def.accessors || [];
    exports._addAccessor(Constructor, accessor);

    return Constructor;
};


exports._set = function (values) {
    var s = this;
    values && Object.keys(values).forEach(function (key) {
        if (!s[key]) {
            throw new Error('Unknown key: ' + key);
        }
        var val = values[key];
        s[key](val);
    });
    return s;
};

exports._get = function (key) {
    var s = this;
    return s[key]();
};


/**
 * Add a property to a Constructor.
 * @param {function} Constructor
 * @param {object} property
 * @protected
 * @ignore
 */
exports._addProperty = function (Constructor, property) {
    Object.keys(property).forEach(function (name) {
        Constructor.prototype[name] = property[name];
    });
};

/**
 * Add attr accessors a Constructor.
 * @param {function} Constructor - function to add attr
 * @param {string} attr - attribute name
 * @returns {function} Constructor
 * @protected
 * @ignore
 */
exports._addAccessor = function (Constructor, attr) {
    if (!(attr instanceof Array)) attr = attr.split(',');
    attr.forEach(function (attr) {
        var valueKey = ('_' + attr);
        if (Constructor.prototype[valueKey] === undefined) {
            Constructor.prototype[valueKey] = null;
        }
        Constructor.prototype[attr] = Constructor.prototype[attr] || function () {
            var s = this;
            if (arguments.length) {
                s[valueKey] = arguments[0];
                return s;
            } else {
                return s[valueKey];
            }
        };
    });
    return Constructor;
};