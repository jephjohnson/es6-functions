var browserSync = require('browser-sync').create();

module.exports = function() {
	browserSync.init({
		server: "./build",
		files: [
			"build/css/*.css",
			"build/js/*.js",
			"build/*.html"
		]
	});

	browserSync.stream();
};
