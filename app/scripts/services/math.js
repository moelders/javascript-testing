(function(window, log) {
  var logger = log.getLogger('mathService');

  logger.info('Service math started');

  this.math = {

    /**
     * @prop {number} total - the total value
     */
    total: 0,

    /**
     * Divide number a on b and return result
     * @param {number} a - divider
     * @param {number} b - divisor
     * @return {number} - result
     */
    div: function(a, b) {
      var result = 0;

      if (b) {
        result = a / b;
      } else {
        throw Error('divisor-zero');
      }

      return result;
    },

    /**
     * Add a number to the total
     * @param {number} n - a number add to
     */
    add: function(n) {
      this.total = window.tools.sum(this.total, n);
    },

    /**
     * Add random number to the total
     * @return {Promise} - jQuery promise
     */
    addRandom: function() {
      var _this = this;

      return window.tools.getRandomNumbers().then(function(random) {
        logger.debug('Generated randon value: ', random);
        _this.add(random);
      });
    }
  };
}(window, window.log));
