const gulp = require('gulp');

gulp.task('copy:dev', ['copy:watch', 'copy']);

gulp.task('copy:watch', () => {
	console.log('watch');
	return gulp.watch(['./src/index.html'], ['copy']);
});

gulp.task('copy', () => {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./public'));
});