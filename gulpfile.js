const gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./build_tasks', {recurse: true});

gulp.task('dev', ['styles:dev', 'scripts:dev', 'copy:dev', 'browser-sync']);
gulp.task('build', ['test', 'docs', 'styles:dev', 'scripts:dev', 'copy']);