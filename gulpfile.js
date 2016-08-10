const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

requireDir('./build_tasks', {recurse: true});

gulp.task('dev', ['styles:dev', 'scripts:dev', 'copy:dev', 'browser-sync']);

gulp.task('build', function(cb){
	runSequence('test', 'docs', ['styles', 'scripts'], 'copy', cb);
});