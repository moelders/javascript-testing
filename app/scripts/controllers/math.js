(function(jQuery, math, log) {
  var addButton = jQuery('#addButton'),
    numberInput = jQuery('#numberField'),
    randomButton = jQuery('#addRandomButton'),
    total = jQuery('#total'),
    logger = log.getLogger('indexController');

  logger.info('Controller math started');

  /**
   * Render value as total.
   * @param {string|number} value - value to render.
   */
  function renderTotal(value) {
    total.html(value);
  }

  // Enable add button if the input is a number.
  numberInput.on('keyup change', function(event) {
    numberInput.val(event.target.value.replace(/[^0-9]/g, ''));
    addButton.prop('disabled', !parseFloat(event.target.value));
  });

  // Add the number to the total.
  addButton.click(function(event) {
    math.add(numberInput.val());
    renderTotal(math.total);

    numberInput.val('');
    addButton.prop('disabled', true);

    event.preventDefault();
  });

  // Generate a random number and update the total.
  randomButton.click(function() {
    math.addRandom().then(function() {
      renderTotal(math.total);
    });
  });

  renderTotal(this.math.total);
}(window.jQuery, window.math, window.log));
