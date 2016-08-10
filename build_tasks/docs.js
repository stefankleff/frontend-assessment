const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');

gulp.task('docs', function (cb) {
	gulp.src('./src/js/**/*.js', {read: false})
		.pipe(jsdoc(cb));
});