/**
 * @file Configuration for ci/task.scaffoldTask.
 * @ignore
 */

exports['ci'] = [
    {
        filename: 'ci/bin/build',
        tmpl: 'tmpl/bin/ci_bin.dot',
        data: {
            taskName: 'build'
        }
    }
];
