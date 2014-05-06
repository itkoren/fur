/**
 * @file Contents about dependencies.
 * @memberof module:ci/tasks
 * @function wikiWorkers.wikiDependencies
 * @param {object} options - Worker options.
 * @param {string} options.packageJsonFile - Package json file path.
 * @param {string} options.bowerJsonFile - Bower json file path.
 * @param {function} callback - Callback when done.
 *
 */

var changeCase = require('change-case'),
    path = require('path'),
    os = require('os'),
    fs = require('fs'),
    spdxLicenses = require('spdx-licenses'),
    util = require('util');

exports = module.exports = function (options, callback) {
    var packageJsonFile = options.packageJsonFile,
        bowerJsonFile = options.bowerJsonFile;
    var npmData = packageJsonFile && require(path.resolve(packageJsonFile)) || {},
        bowerData = bowerJsonFile && require(path.resolve(bowerJsonFile)) || {};

    callback(null, [
        'Third party libraries which fur dependes on.',
        '',
        exports._npmDependencies(npmData.dependencies || {}, 'npm dependencies'),
        '',
        exports._npmDependencies(npmData.dependencies || {}, 'npm dev dependencies')
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
                    license: exports._licenseForPackageData(packageData) ||
                        exports._licenseForPackageDir(path.dirname(packageFilename)),
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
        util.format('## %s ##', title),
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

exports._licenseForPackageData = function (data) {
    return [].concat(data.license || data.licenses || [])
        .map(function (license) {
            return license && license.type || license || null;
        })
        .filter(function (license) {
            return !!license;
        })
        .join(',');
};


exports._licenseForPackageDir = function (dirname) {
    var readmeFile = path.resolve(dirname, 'README.md'),
        readmeExists = fs.existsSync(readmeFile);
    if (readmeExists) {
        var readmeContent = exports._parseReadmeFile(readmeFile),
            license = readmeContent
                .filter(function (section) {
                    var title = section.title || '';
                    return !!title.trim().match(/license/i);
                })
                .map(function (section) {
                    return section.content.filter(function (line) {
                        return !!line;
                    }).shift();
                })
                .map(function (line) {
                    var keywords = line.split(/\s/g) || [];
                    for (var i = 0; i < keywords.length; i++) {
                        var keyword = keywords[i];
                        var info = keyword && spdxLicenses.spdx(keyword.trim())
                        if (info) {
                            return info.id;
                        }
                    }
                    return null;
                })
                .filter(function (id) {
                    return !!id;
                })
                .shift();
        return license || null;
    }
    return null;
};

exports._parseReadmeFile = function (filename) {
    var lines = fs.readFileSync(filename).toString().split(os.EOL);
    return lines.reduce(function (result, line) {
        var section = result[result.length - 1];
        var isHeader = !!line.match(/^#+/);
        if (isHeader) {
            result.push({title: line, content: []});
        } else {
            var isSeperator = !!line.match(/^\-\-|^==/);
            if (isSeperator) {
                var lastLine = section.content.pop();
                result.push({title: lastLine, content: []});
            } else {
                if (!!line) {
                    section.content.push(line);
                }
            }
        }
        return result;
    }, [
        {title: null, content: []}
    ]);
};

exports._bowerDependencies = function () {

};

