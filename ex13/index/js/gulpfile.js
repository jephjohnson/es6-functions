'use strict';

var gulp       	= require('gulp');
var js          = require('./gulp-tasks/javascript.js');
var css        	= require('./gulp-tasks/css.js');
var html       	= require('./gulp-tasks/html.js');
var browsersync = require('./gulp-tasks/browsersync.js');

/*
 * Helper gulp tasks.
 *
 * You will likely never invoke these directly.
 */
gulp.task('js', js);
gulp.task('css', css);
gulp.task('html', html);
gulp.task('browsersync', browsersync);


/**
 * Watch task
 */
gulp.task('watch', function() {
	gulp.watch( ['src/**/*.hbs', 'src/data/*.json'], ['html'] );
	gulp.watch( ['src/**/*.scss'], ['css'] );
	gulp.watch( ['src/**/*.js'], ['js'] );
});


/**
 * Main build task.
 */
gulp.task('build', ['html', 'css', 'js']);
gulp.task('default', ['build', 'browsersync', 'watch']);
