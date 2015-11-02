/**
 * Register Grunt tasks to automate workflow.
 *
 * Exposes the following tasks:
 *   grunt
 *
 * @param {Object} grunt Grunt configuration.
 */
module.exports = function(grunt) {
  var timer = require('grunt-timer');

  // Timer init to show execute time of grunt task.
  timer.init(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    source: {
      app: 'app',
      build: 'build',
      doc: 'doc',
      test: 'test',
      grunt: 'Gruntfile.js'
    },
    server: {
      host: 'localhost',
      port: '9000'
    }
  });

  grunt.loadTasks('build/grunt-tasks');

  grunt.registerTask('default', ['connect:dev']);
};
