/**
 * @file Base url string.
 * @memberof module:ci/tasks
 * @function readmeWorkers._rowsFromCols
 * @protected
 * @ignore
 */

"use strict";


module.exports = function _rowsFromCols(cols, rownum) {
    return cols.map(function (col) {
        return col[rownum];
    });
};
