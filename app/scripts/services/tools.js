(function(jQuery, log) {
  var logger = log.getLogger('toolsService');

  logger.info('Service tools started');

  this.tools = {

    /**
     * Make sum of two numbers.
     * @param {*} a - first number to sum.
     * @param {*} b - second number to sum.
     * @return {number} - result of sum.
     */
    sum: function(a, b) {
      return (parseFloat(a) || 0) + (parseFloat(b) || 0);
    },

    /**
     * Get random number by using service random.org.
     * @param {number} [quantity=1] - count of numbers to get.
     * @return {Promise} - jQuery promise.
     */
    getRandomNumbers: function() {
      var url = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1' +
          '&base=10&format=plain&rnd=new';

      return jQuery.getJSON(url, {
          num: 1,
          min: 1,
          max: 100,
          col: 1,
          base: 10,
          format: 'plain',
          rnd: 'new'
        });
    }
  };
}(window.jQuery, window.log));
