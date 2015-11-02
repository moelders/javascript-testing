/**
 * Run the tests. Registered tasks:
 *   - test
 *   - test:unit
 *   - test:functional
 *   - test:coverage
 *
 * @param {Object} grunt Reference to the current Grunt process.
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');

  grunt.config.set('karma', {
    unit: {
      options: {
        configFile: './<%= source.test %>/config/karma.unit.conf.js'
      }
    },
    coverage: {
      options: {
        configFile: './<%= source.test %>/config/karma.coverage.conf.js'
      }
    }
  });

  // Register the test tasks.
  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:coverage', ['karma:coverage']);
  grunt.registerTask('test', ['test:unit']);
};
