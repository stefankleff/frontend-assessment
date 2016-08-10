const gulp = require('gulp');
const path = require('path');
const merge = require('utils-merge');
const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

gulp.task('scripts:dev', () => {
	const args = {
		entries : './src/js/main.js',
		debug: true
	};

	const bundler = watchify(browserify('./src/js/main.js', merge(watchify.args, args)))
		.transform(babelify, {
			presets: ['es2015'],
			ignore: /(node_modules)/
		});


	bundler.on('update', function () {
		bundle_js(bundler)
	});

	return bundle_js(bundler)
});




function bundle_js(bundler) {
	return bundler.bundle()
		.on('error', notify.onError('Error: <%= error.message %>'))
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(gulp.dest('./public/js'));
	// .pipe(notify('Task "scripts" completed'));
}