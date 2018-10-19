module.exports = function(grunt) {
    grunt.initConfig({
        svgstore: {
            options: {
                svg: {
                    'xmlns': "http://www.w3.org/2000/svg",
                    'xmlns:xlink': "http://www.w3.org/1999/xlink"
                }
            },
            default: {
                files: { 'dist/sprites.svg': ['svgs/*.svg'] }
            }
        }
    });
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.registerTask('default', ['svgstore']);
};
