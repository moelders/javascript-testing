// Karma coverage configuration

module.exports = function(config) {
  var baseConfig = require('../config/karma.conf');

  baseConfig(config);

  config.set({
    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },

    reporters: ['coverage'],

    coverageReporter: {
      reporters: [
        {
          type: 'text'
        }, {
          type: 'lcov',
          dir: 'test/results/coverage',
          subdir: function(browserName) {
            return browserName.toLowerCase().split(/[\s/-]/)[0];
          }
        }
      ]
    }
  });
};
