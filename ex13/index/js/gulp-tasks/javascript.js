var browserify  = require('browserify');
var buffer      = require('vinyl-buffer');
var gulp        = require('gulp');
var rename      = require('gulp-rename');
var source      = require('vinyl-source-stream');
var sourceMaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var handleError = require("./utils/handleerror");

var config = {
	buildDest: './build/js/',
	main: { 
		src: './src/js/main.js',
		output: 'main.js'
	}
};


module.exports = function() {
	return browserify(config.main.src)
	.bundle()
	.on('error', handleError)
	.pipe(source(config.main.src))
	.pipe(buffer())
	.pipe(rename(config.main.output))
	.pipe(sourceMaps.init({ loadMaps : true }))
	.pipe(sourceMaps.write('.'))		
	.pipe(gulp.dest(config.buildDest))
	.pipe(browserSync.reload({stream: true}));
};
