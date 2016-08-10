const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');

gulp.task('doc', function (cb) {
	gulp.src(['./api_docs/README.md', './src/js/**/*.js'], {read: false})
		.pipe(jsdoc(cb));
});