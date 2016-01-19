module.exports = function(grunt) {

    grunt.initConfig({
        less : {
            dist : {
                files : {
                    './css/app.css' : './less/app.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
}
