var stylePath = 'style/',
	iconsPath = stylePath + 'icons/svg/',
	fontPath = stylePath + 'fonts/',
	jsPath = 'js/',
	imgOutputPath = 'images/output/',
	imgSrcPath = 'images/src/';


module.exports = function(grunt) {

	/* Timegrunt ===============================================
	https://www.npmjs.org/package/time-grunt
	============================================================ */
	require('time-grunt')(grunt);


	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/* Imagemin ===============================================
  		https://github.com/gruntjs/grunt-contrib-imagemin
		============================================================ */
		imagemin: {
			options: {
				cache: false,
				optimizationLevel: 5
			},

			dist: {
				files: [{
					expand: true,
					cwd: imgSrcPath,
					src: ['**/*.{png,jpg,jpeg,gif}'],
					dest: imgOutputPath
				}]
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-imagemin');


	// Default task(s).
	grunt.registerTask('default',
		[
		'imagemin'
		]
	);

};