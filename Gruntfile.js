var stylePath = 'style/',
	iconsPath = stylePath + 'icons/svg/',
	fontPath = stylePath + 'fonts/',
	jsPath = 'js/',
	imgOutputPath = 'images/output/',
	imgSrcPath = 'images/src/';


module.exports = function(grunt) {

	grunt.log.write('This is how you log inside the gruntfile');


	/* Timegrunt ===============================================
	https://www.npmjs.org/package/time-grunt
	============================================================ */
	require('time-grunt')(grunt);


	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		/* Grunricon ===============================================
		  https://www.npmjs.org/package/grunt-contrib-compass
		============================================================ */
		grunticon: {
			myIcons: {
				files: [{
					expand: true,
					cwd: iconsPath,
					src: ['*.svg', '*.png'],
					dest: stylePath+'css/'
				}],
				options: {
					loadersnippet: "grunticon.loader.js"
				}
			}
		},

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
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-contrib-imagemin');


	// Default task(s).
	grunt.registerTask('default',
		[
		'grunticon',
		'imagemin'
		]
	);

};