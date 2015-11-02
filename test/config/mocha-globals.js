// Executes once before the first describe.
before(function() {
  logLevel = log.getLevel();

  // Set minimum log level
  log.setLevel(log.levels.SILENT);
});

// Executes once after all the describes.
after(function() {
  log.setLevel(logLevel);
});

// Executed before every test.
beforeEach(function() {});

// Executed after every test.
afterEach(function() {});
