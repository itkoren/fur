/**
 * @file Configuration for "ci/task.scaffoldTask".
 * @memberof module:ci/config
 * @member scaffoldTaskConfig
 * @property {object} ciTask - Ci task files scaffold config.
 * @property {object} ciConfig - Ci config files scaffold config.
 * @property {object} ciBin - Ci bin files scaffold config.
 * @property {object} libIndex - Ci lib index files task config.
 * @property {object}
 *
 */


var util = require('util'),
    path = require('path'),
    fs = require('fs'),
    changeCase = require('change-case');

var baseDir = path.resolve(__dirname, '../../'),
    libDir = path.resolve(baseDir, 'lib');

function capitalize(string) {
    return string.substr(0, 1).toUpperCase() + string.substr(1);
}

function isDir(filename) {
    return fs.statSync(filename).isDirectory();
}


var moduleNames = fs.readdirSync(libDir)
    .filter(function (filename) {
        return filename !== 'index.js';
    });


var binNames = [
    'build',
    'coverage',
    'draw',
    'install',
    'doc',
    'test',
    'publish',
    'release'
];

var taskNames = [
    'badge',
    'catalog',
    'favicon',
    'logo',
    'font',
    'gallery',
    'ico',
    'index',
    'readme',
    'scaffold',
    'static',
    'tag',
    'taskguide',
    'testcase',
    'versionup',
    'wiki',
    'tickTackResources'
];

exports.ciTask = taskNames.map(function (name) {
    return {
        filename: util.format('ci/tasks/%s_task.js', changeCase.snakeCase(name)),
        tmpl: 'tmpl/js/ci_task.js.dot',
        data: {
            taskName: name
        }
    };
});

exports.ciConfig = taskNames.map(function (name) {
    return {
        filename: util.format('ci/config/%s-task-config.js', changeCase.paramCase(name)),
        tmpl: 'tmpl/js/ci-task-config.js.dot',
        data: {
            taskName: name
        }
    };
});


exports.ciBin = binNames.map(function (name) {
    return {
        filename: util.format('ci/bin/%s', changeCase.snakeCase(name)),
        tmpl: 'tmpl/bin/ci_bin.dot',
        data: {
            taskName: name
        }
    };
});

exports.libIndex = moduleNames
    .filter(function (filename) {
        return isDir(path.resolve(libDir, filename));
    })
    .map(function (name) {
        return {
            filename: util.format('lib/%s/index.js', changeCase.snakeCase(name)),
            tmpl: 'tmpl/js/index.js.dot',
            data: {
                moduleName: util.format('fur/%s', name)
            }
        };
    });

exports.libUnitTests = moduleNames.map(function (moduleName) {

    var dirname = path.resolve(libDir, moduleName);
    var filenames;
    if (isDir(dirname)) {
        filenames = fs.readdirSync(dirname)
            .filter(function (filename) {
                return filename !== 'index.js';
            })
            .map(function (filename) {
                return path.resolve(dirname, filename);
            });
    } else {
        filenames = [dirname];
    }
    return filenames
        .map(function (filename) {
            var extname = path.extname(filename),
                basename = path.basename(filename, extname);
            var modulePath = path.relative(baseDir, filename),
                testFilename = path.join(
                    'test/unit_tests',
                    path.dirname(modulePath),
                    (basename + '_test' + extname)
                );
            return {
                filename: testFilename,
                tmpl: 'tmpl/js/unit_test.js.dot',
                data: {
                    moduleName: changeCase.camelCase(basename),
                    relativePathToBaseDir: path.relative(path.dirname(testFilename), baseDir),
                    modulePath: modulePath,
                    testCaseName: capitalize(changeCase.sentenceCase(basename)) + '.'
                }
            };
        })
        ;
}).
    reduce(function (result, cur) {
        return result.concat(cur);
    }, []);
