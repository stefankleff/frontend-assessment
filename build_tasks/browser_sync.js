const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// Static server
gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: './public'
		}
	});

	gulp.watch('./public/**/*').on('change', reload);
});