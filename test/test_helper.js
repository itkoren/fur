/**
 * @file Convenience functions for testing.
 * @module testHelper
 * @author Taka Okunishi
 *
 */

var path = require('path'),
    fs = require('fs');

/**
 * Test root directory.
 * @memberof module:testHelper
 * @property testDir
 * @type {String}
 */
exports.testDir = __dirname;

/**
 * Mock directory path.
 * @memberof module:testHelper
 * @property mockDir
 * @type {String}
 */
exports.mockDir = path.resolve(exports.testDir, 'mock');

/**
 * Work directory path.
 * @memberof module:testHelper
 * @property workDir
 * @type {String}
 */
exports.workDir = path.resolve(exports.testDir, '.work');


/**
 * Resolve mock file path from file name.
 * @memberof module:testHelper
 * @function resolveMockFile
 * @param  {string} filename - Mock filename.
 * @returns {string} - Full path of mock resource file.
 */
exports.resolveMockFile = function (filename) {
    filename = path.join.apply(path, arguments);
    return path.resolve(exports.mockDir, filename);
};

/**
 * Resolve work file path from file name.
 * @memberof module:testHelper
 * @function resolveWorkFile
 * @param {string} filename - Work filename.
 * @returns {string} - Full path of work resource file.
 */
exports.resolveWorkFile = function (filename) {
    filename = path.join.apply(path, arguments);
    return path.resolve(exports.workDir, filename);
};


/**
 * Read mock file content.
 * @memberof module:testHelper
 * @function readMockFile
 * @param {string} filename - Mock filename.
 * @returns {buffer} - Read content.
 */
exports.readMockFileSync = function (filename) {
    var filepath = exports.resolveMockFile(filename);
    return fs.readFileSync(filepath);
};


/**
 * Read mock work content.
 * @memberof module:testHelper
 * @function readWorkFile
 * @param {string} filename - Work filename.
 * @returns {buffer} - Read content.
 */
exports.readWorkFileSync = function (filename) {
    var filepath = exports.resolveWorkFile(filename);
    fs.readFileSync(filepath);
};


/**
 * Require mock file content.
 * @memberof module:testHelper
 * @function requireMockModule
 * @param {string} filename - Mock filename.
 * @param {function} callback - Callback with contents.
 */
exports.requireMockModule = function (filename, callback) {
    var filepath = exports.resolveMockFile(filename);
    return require(filepath, callback);
};


/**
 * Require mock work content.
 * @memberof module:testHelper
 * @function requireWorkModule
 * @param {string} filename - Work filename.
 * @param {function} callback - Callback with contents.
 */
exports.requireWorkModule = function (filename, callback) {
    var filepath = exports.resolveWorkFile(filename);
    return require(filepath, callback);
};

/**
 * Remove directory recursively.
 * @memberof module:testHelper
 * @function _rmdirRecursiveSync
 * @param {string} dirname - Directory name.
 * @protected
 * @ignore
 */
exports._rmdirRecursiveSync = function (dirname) {
    if (!fs.existsSync(dirname)) return;
    fs.readdirSync(dirname)
        .map(function (filename) {
            return path.resolve(dirname, filename);
        })
        .forEach(function (filename) {
            var isSymlink = fs.lstatSync(filename).isSymbolicLink();
            if (isSymlink) {
                fs.unlinkSync(filename);
            } else {
                var isDir = fs.statSync(filename).isDirectory();
                if (isDir) {
                    exports._rmdirRecursiveSync(filename);
                } else {
                    fs.unlinkSync(filename);
                }
            }
        });
    fs.rmdirSync(dirname);
};

/**
 * Make a directory with parents.
 * @memberof module:testHelper
 * @function _mkdirPSync
 * @param {string} dirname - Directory name to make.
 * @protected
 */
exports._mkdirPSync = function (dirname) {
    if (fs.existsSync(dirname)) return;
    var parentDir = path.dirname(dirname);
    if (!fs.existsSync(parentDir)) {
        exports._mkdirPSync(parentDir);
    }
    fs.mkdirSync(dirname);
};


/**
 * Prepare clean work directory.
 * @memberof module:testHelper
 * @function prepareCleanWorkDir
 * @param {string} dirname - Directory name to prepare.
 * @returns {string} - Work directory name.
 */
exports.prepareCleanWorkDir = function (dirname) {
    var isExistingFile = fs.existsSync(dirname) && !fs.statSync(dirname).isDirectory();
    if (isExistingFile) {
        throw new Error('A file exists at a path:' + dirname);
    }
    exports._rmdirRecursiveSync(dirname);
    exports._mkdirPSync(dirname);
    return dirname;
};

/**
 * Prepare clean work directory.
 * @memberof module:testHelper
 * @function prepareCleanWorkDirForTestFile
 * @param {string} testFile - Test file name.
 * @returns {string} - Work directory name.
 */
exports.prepareCleanWorkDirForTestFile = function (testFile) {
    var dirname = path.relative(exports.testDir, path.dirname(testFile)),
        basename = path.basename(testFile, path.extname(testFile));
    var name = path.join(dirname, basename).split(path.sep).join('_');
    var workDirname = exports.resolveWorkFile(name);
    return exports.prepareCleanWorkDir(workDirname);
};

/**
 * Inject a mock to a module.
 * @memberof module:testHelper
 * @function inject
 * @param {object} module - Module to injected.
 * @param {string} key - Injection key.
 * @param {*} injection - Mock property to inject.
 */
exports.inject = function (module, key, injection) {
    exports._injectStack.push({
        module: module,
        key: key,
        origin: module[key],
        injection: injection
    });
    module[key] = injection;
};

/**
 * Pop injected.
 * @memberof module:testHelper
 * @function popInjected
 * @returns {*} - Injected object.
 */
exports.popInjected = function () {
    return exports._injectStack.pop();
};

/**
 * Restore injected.
 * @memberof module:testHelper
 * @function restoreInjected
 */
exports.restoreInjected = function () {
    var data = exports.popInjected();
    if (data) {
        data.module[data.key] = data.origin;
    }
};

/**
 * Restore all injected.
 * @memberof module:testHelper
 * @function restoreAllInjected
 */
exports.restoreAllInjected = function () {
    while (exports._injectStack.length) {
        exports.restoreInjected();
    }
};


/**
 * Get all values.
 */
exports.allValues = function (obj) {
    return Object.keys(obj).map(function (key) {
        return obj[key];
    })
};

exports._injectStack = [];

exports.existsSync = fs.existsSync;