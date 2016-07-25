const gulp = require('gulp');
const path = require('path');

const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const merge = require('utils-merge');
const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


gulp.task('dev', ['styles:dev', 'scripts:dev', 'copy:dev', 'browser-sync']);


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });

    gulp.watch('./public/**/*').on('change', reload);
});


/**
 * Copy HTML
 */

gulp.task('copy:dev', ['copy:watch', 'copy']);

gulp.task('copy:watch', function (cb) {
    console.log('watch')
    return gulp.watch(['./src/index.html'], ['copy']);
});

gulp.task('copy', function (cb) {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./public'))
        .pipe(notify({
            message: 'Task "copy" completed',
            onLast: true
        }));
});


/**
 * Styles generation
 */

gulp.task('styles:dev', ['styles:watch', 'styles']);

gulp.task('styles:watch', function () {
    return gulp.watch(['./src/scss/**/*'], ['styles']);
});

gulp.task('styles', function() {
    return gulp.src('./src/scss/styles.scss')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sass({includePaths: ['./src/scss']}))
        .pipe(prefix(['last 2 versions', 'Android > 4']))
        .pipe(gulp.dest('./public/css'))
        .pipe(notify('Task "styles" completed'));
});


/**
 * Scripts generation
 */
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
        .pipe(gulp.dest('./public/js'))
        .pipe(notify('Task "scripts" completed'));
}
