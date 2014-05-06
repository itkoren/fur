/**
 * @file Contents about dependencies.
 * @memberof module:ci/tasks
 * @function readmeWorkers.readmeDependencies
 * @param {string} packageJsonFile - Package json file path.
 * @param {string} bowerJsonFile - Bower json file path.
 * @param {function} callback - Callback when done.
 *
 */

var changeCase = require('change-case'),
    path = require('path'),
    os = require('os'),
    fs = require('fs'),
    util = require('util');

exports = module.exports = function (packageJsonFile, bowerJsonFile, callback) {
    var npmData = require(path.resolve(packageJsonFile)),
        bowerData = require(path.resolve(bowerJsonFile));

    callback(null, [
        exports._npmDependencies(npmData.dependencies || {}, 'npm dependencies')
    ].join(os.EOL));
};


exports._row = function (data) {
    return [].concat('').concat(data).concat('').join(' | ').trim();
};

exports._npmDependencies = function (data, title) {
    var head = exports._row([
            'name',
            'version',
            'description',
            'license'
        ]),
        neck = exports._row([
            ':-----',
            ':-----:',
            ':-----',
            ':-----:'
        ]),
        body = Object.keys(data)
            .map(function (name) {
                try {
                    return require.resolve(name);
                } catch (e) {
                    return null;
                }
            })
            .filter(function (resolved) {
                return !!resolved;
            })
            .map(function (resolved) {
                var dirname = path.dirname(resolved);
                return exports._findup(dirname, 'package.json');
            })
            .filter(function (packageFilename) {
                return !!packageFilename;
            })
            .map(function (packageFilename) {
                var packageData = require(packageFilename),
                    repository = packageData.repository;
                return {
                    name: packageData.name,
                    version: packageData.version,
                    license: [].concat(packageData.license || packageData.licenses || [])
                        .map(function (license) {
                            return license && license.type || license || null;
                        })
                        .filter(function (license) {
                            return !!license;
                        })
                        .join(','),
                    description: packageData.description,
                    url: packageData.homepage || repository && repository.url || repository || null
                };
            })
            .map(function (data) {
                return exports._row([
                    util.format('[%s](%s)', data.name, data.url),
                    data.version,
                    data.description,
                    data.license,
                ]);
            });
    return [
        util.format('<a name="%s"></a>', title),
        util.format('**%s**', title),
        '',
        head,
        neck
    ]
        .concat(body)
        .concat([
            ''
        ])
        .join(os.EOL);
}


exports._findup = function (dirname, filename) {
    var resolved = path.resolve(dirname, filename),
        exists = fs.existsSync(resolved);
    if (exists) {
        return resolved;
    }
    var parentDirname = path.dirname(dirname),
        hasParent = parentDirname && (parentDirname !== dirname);
    return hasParent ? exports._findup(parentDirname, filename) : null;
};

exports._bowerDependencies = function () {

};

