/**
 * @file Configuration for ci/task.scaffoldTask.
 * @ignore
 */


var util = require('util'),
    path = require('path'),
    fs = require('fs'),
    changeCase = require('change-case');

var baseDir = path.resolve(__dirname, '../../'),
    libDir = path.resolve(baseDir, 'lib');

var moduleNames = fs.readdirSync(libDir)
    .filter(function (filename) {
        return filename !== 'index.js';
    });

var binNames = [
    'build',
    'test'
];

exports.ciBin = binNames.map(function (name) {
    return {
        filename: util.format('ci/bin/%s', name),
        tmpl: 'tmpl/bin/ci_bin.dot',
        data: {
            taskName: name
        }
    }
});

exports.libIndex = moduleNames.map(function (name) {
    return {
        filename: util.format('lib/%s/index.js', name),
        tmpl: 'tmpl/js/index.js.dot',
        data: {
            moduleName: util.format('fur/%s', name)
        }
    };
});


exports.libUnitTests = moduleNames.map(function (moduleName) {
    function capitalize(string) {
        return string.substr(0, 1).toUpperCase() + string.substr(1);
    }

    var dirname = path.resolve(libDir, moduleName);
    return fs.readdirSync(dirname)
        .filter(function (filename) {
            return filename !== 'index.js';
        })
        .map(function (filename) {
            return path.resolve(dirname, filename);
        })
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
            }
        })
        ;
}).
    reduce(function (result, cur) {
        return result.concat(cur);
    }, []);
