// Karma shared configuration

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../../',

    // list of files / patterns to load in the browser
    files: [
      'app/bower-components/jquery/dist/jquery.js',
      'app/bower-components/loglevel/dist/loglevel.js',

      'app/scripts/services/**/*.js',
      'app/scripts/controllers/**/*.js',
      'app/scripts/main.js',

      'test/specs/unit/**/*.spec.js',

      'test/config/mocha-globals.js',
    ],

    // list of files / patterns to exclude
    exclude: [],

    /* Enable / disable watching file and executing tests
     * whenever any file changes
     */
    autoWatch: true,

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'chai-sinon'
    ],

    // Shared plugins (default is 'karma-*'):
    plugins: [
      'karma-*'
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
