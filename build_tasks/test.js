const gulp = require('gulp');
const xo = require('gulp-xo');

gulp.task('test:dev', () => {
	return gulp.src('./src/js/**/*.js')
		.pipe(xo());
});