module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        port: process.env.PORT || 3000,

        bower_concat: {
            basic: {
                dest: 'public/__generated/bower_concatenated.js',
                dependencies: {}
            }
        },
        processhtml: {
            options: {},
            production: {
                files: {
                    //'public/index_desktop_production.html': ['public/index_desktop.html'],
                    //'public/index_mobile_production.html': ['public/index_mobile.html'],
                    'index.html': ['index.html']
                }
            },
            productionLocalHost: {
                files: {
                    'public/index_desktop_production_local.html': ['public/index_desktop.html'],
                    'public/index_mobile_production_local.html': ['public/index_mobile.html']

                }
            },
            main: {
                files: {
                    'index.html': ['index.html']
                }

            }
        },
        clean: {
            trash: {
                src: ['public/__generated']
            }
        },
    });


    grunt.loadNpmTasks('grunt-bower-concat');		//Concatenate bower dependencies
    grunt.loadNpmTasks('grunt-processhtml');		//Process HTML inclusions (this might make many of the above obsolete)
    grunt.loadNpmTasks('grunt-contrib-clean');		//clean files


    grunt.registerTask('build', ['bower_concat', 'processhtml:production', 'clean:trash']);

};
