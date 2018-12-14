var gulp        = require( 'gulp' );
var assemble    = require( 'assemble' )();
var extname     = require( 'gulp-extname' );
var rename      = require( 'gulp-rename' );
var helpers     = require( 'handlebars-helpers' )();
var browserSync = require( 'browser-sync' );

module.exports = function() {
	assemble.option('layout', 'default');
	assemble.layouts('src/layouts/*.hbs');
	assemble.partials('src/partials/**/*.hbs');
	assemble.pages('src/pages/**/*.hbs');
	assemble.data('src/data/*.json');
	assemble.helpers(helpers);

	function errorHandler (error) {
		console.log(error.toString());
		this.emit('end');
	}

	return assemble.toStream('pages')
		.pipe(assemble.renderFile())
		.on('error', errorHandler)
		.pipe(extname())
		.pipe(rename({dirname: ''}))
		.pipe(assemble.dest('build'))
		.pipe(browserSync.reload({stream: true}));
};
