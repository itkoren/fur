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
    },
    {
        filename: 'ci/bin/test',
        tmpl: 'tmpl/bin/ci_bin.dot',
        data: {
            taskName: 'test'
        }
    }
];

//exports['unit-tests'] = [
//    {
//        filename: 'test/unit_tests/lib/util/'
//    }
//];
