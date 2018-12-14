var gulp             = require( 'gulp' );
var source           = require( 'vinyl-source-stream' );
var sass             = require( 'gulp-sass' );
var postcss          = require( 'gulp-postcss' );
var autoprefixer     = require( 'autoprefixer' );
var eol              = require( 'gulp-line-ending-corrector' );
var stripCssComments = require( 'gulp-strip-css-comments' );
var sourcemaps       = require( 'gulp-sourcemaps' );
var cssnano          = require( 'cssnano' );
var rename           = require( 'gulp-rename' );
var browserSync      = require( 'browser-sync' );

module.exports = function() {
	var postCssPlugins = [
		autoprefixer({browsers: ['Chrome >= 50', 'ff >= 40', 'ie >= 11', 'Safari >= 9']}),
		// cssnano()
	];

	return gulp.src( ['src/css/main.scss'] )
		.pipe( stripCssComments() )
		.pipe( eol({eolc: 'LF', encoding: 'utf8'}) )
		.pipe( sourcemaps.init() )
		.pipe(sass({
			outputStyle: 'compressed',
			includePaths: ['node_modules/susy/sass']
		}).on('error', sass.logError))
		.pipe( postcss( postCssPlugins ) )
		.pipe( sourcemaps.write('.') )
		.pipe(rename({dirname: ''}))
		.pipe( gulp.dest( 'build/css' ) )
		.pipe(browserSync.reload({stream: true}));
};
