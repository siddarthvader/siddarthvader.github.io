module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        port: process.env.PORT || 3000,

        bower_concat: {
            basic: {
                dest: 'app/__generated/bower_concatenated.js',
                dependencies: {}
            }
        },
        processhtml: {
            options: {},
            production: {
                files: {
                    'index.html': ['index.html']
                }
            },
            dev: {
                files: {
                    'index_desktop.html': ['index.html']
                }

            }
        },
        uglify: {
            script: {
                files: {
                    'app/__dist/desktop.min.js': ['app/__generated/bower_concatenated.js']
                }
            }
        },
        clean: {
			trash: {
				src: ['app/__dist', 'app/__generated']
			},
            all: {
				src: ['app/__dist', 'app/__generated','index_desktop.html']
			}
		}
    });


    grunt.loadNpmTasks('grunt-bower-concat');		//Concatenate bower dependencies
    grunt.loadNpmTasks('grunt-processhtml');		//Process HTML inclusions (this might make many of the above obsolete)
    grunt.loadNpmTasks('grunt-contrib-uglify');     //uglify your code    
    grunt.loadNpmTasks('grunt-contrib-clean');		//clean files

    grunt.registerTask('build', ['bower_concat','uglify:script' ,'processhtml:production', 'clean:trash']);
    grunt.registerTask('buildDev', ['bower_concat','uglify:script' ,'processhtml:dev', 'clean:trash']);

};
