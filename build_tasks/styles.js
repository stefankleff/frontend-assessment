const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('styles:dev', ['styles:watch', 'styles']);

gulp.task('styles:watch', () => {
	return gulp.watch(['./src/scss/**/*'], ['styles']);
});

gulp.task('styles', () => {
	return gulp.src('./src/scss/styles.scss')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(sass({includePaths: ['./src/scss']}))
		.pipe(prefix(['last 2 versions', 'Android > 4']))
		.pipe(gulp.dest('./public/css'));
});