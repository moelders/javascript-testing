/**
 * Start the server. Registered tasks:
 *   - connect
 *   - run
 *
 * @param {Object} grunt Reference to the current Grunt process.
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.config.set('connect', {
    dev: {
      options: {
        base: '<%= source.app %>',
        port: '<%= server.port %>',
        open: false,
        keepalive: true
      }
    }
  });
};
