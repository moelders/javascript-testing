// Karma configuration for unit-test

module.exports = function(config) {
  var baseConfig = require('../config/karma.conf');

  baseConfig(config);

  config.set({
    reporters: ['dots', 'junit'],

    junitReporter: {
      outputFile: 'test/results/unit/test-results.xml'
    }
  });
};
