module.exports = function(grunt) {

    grunt.initConfig({
        less : {
            dev : {
                files : {
                    './css/app.css' : './less/app.less'
                }
            },
            dist : {
                options : {
                    compress : true,
                    sourceMap : true
                },
                files : {
                    './css/app.min.css' : './less/app.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
}
