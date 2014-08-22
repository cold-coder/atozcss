var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('webserver', function(){
	gulp.src('app')
		.pipe(webserver({
			livereload: true,
			directoryListing: false,
			fallback:'index.html',
			open: true
		})) 
});