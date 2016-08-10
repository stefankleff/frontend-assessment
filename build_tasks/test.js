const gulp = require('gulp');
const xo = require('gulp-xo');
const shell = require('gulp-shell');

gulp.task('test:dev', shell.task([
    'babel-node test/tests.js | faucet',
]));

gulp.task('lint:dev', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(xo());
});

gulp.task('test', ['lint:dev', 'test:dev']);