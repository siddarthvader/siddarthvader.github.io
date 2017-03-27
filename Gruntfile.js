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
        ngtemplates: {
            desktop: {
                cwd: 'app/',
                src: ['desktop/**/**.html'],
                dest: 'public/__generated/desktop_templates.js'
            },
            options: {
                module: 'sydApp',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeComments: true, // Only if you don't use comment directives!
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            }
        },
        ngAnnotate: {
            dist: {
                files: {
                    'app/__generated/desktop_annotated_concatenated.js': ['app/*.js', 'app/desktop/**/*.js', 'app/directive/**/*.js', 'app/routes/**/*.js', 'app/_directives/**/*.js', 'public/__generated/desktop_templates.js']
                }
            }
        },
        uglify: {
            script: {
                files: {
                    'app/__dist/desktop.min.js': ['app/__generated/bower_concatenated.js', 'app/__generated/desktop_annotated_concatenated.js']
                }
            }
        },
        clean: {
            trash: {
                src: ['app/__dist', 'app/__generated']
            },
            all: {
                src: ['app/__dist', 'app/__generated', 'index_desktop.html']
            }
        },
        copy: {
            indexCopy: {
                files: [
                    {
                        expand: true,
                        src: ['index.html'],
                        dest: 'reserve/'
                    }
                ]
            }
        }
    });


    grunt.loadNpmTasks('grunt-bower-concat');		//Concatenate bower dependencies
    grunt.loadNpmTasks('grunt-processhtml');		//Process HTML inclusions (this might make many of the above obsolete)
    grunt.loadNpmTasks('grunt-contrib-uglify');     //uglify your code    
    grunt.loadNpmTasks('grunt-contrib-clean');		//clean files
    grunt.loadNpmTasks('grunt-contrib-copy');       //for copying file
    grunt.loadNpmTasks('grunt-angular-templates');


    grunt.registerTask('build', ['bower_concat', 'ngtemplates:desktop','ngAnnotate:dist','uglify:script', 'processhtml:production', 'clean:trash']);
    grunt.registerTask('buildDev', ['bower_concat', 'uglify:script', 'processhtml:dev', 'clean:trash']);

};
