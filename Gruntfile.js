module.exports = function (grunt) {

    var _sDirBase = './';

    grunt.util.linefeed = "\n";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // jasmine specs

        jasmine: {
            unitTests: {
              src: _sDirBase + 'js/fx.form.interactive.js',
              options: {
                vendor : _sDirBase + 'tests/jasmine/helpers/stubs.js',
                specs: _sDirBase + 'tests/jasmine/example.js',
                keepRunner : true
              }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

};
