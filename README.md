# JavaScript testing

The goal of this example is to know how to write tests for Javascript projects.
- Configure the tools.
- Run the tests in a non-UI browser: [PhantomJS](http://phantomjs.org/).
- Mocking the dependencies.
- Replace server requests using _Sinon_.
- Debugging the tests and its source-code using _Chrome dev tools_.

## Tools

- [Karma](https://karma-runner.github.io/0.13/index.html): this test-runner can be different configurations for the different types of tests.
    - The runner is configured to use the Mocha framework, a preferred browser, the test output format -junit- and other features such as coverage results.
    - The preferred browser is PhantomJS because is a non-UI browser which can be used with the continuous-integration tool.
        Other browsers: almost any commercial browser can be used as executor: Firefox, Chrome, Safari, etc.
- [Mocha](http://mochajs.org/): test framework running on NodeJS and the browser that allows to make asynchronous testing easily.
- [Chai](http://chaijs.com/): the assertion library, is compatible with Mocha and allows to choose a TDD/BDD assert types.
    - [Expect](http://chaijs.com/api/bdd/): assertion methods for BDD expectations. Expect has also been choosed because it does not modify the object prototype.
- [Sinon](http://sinonjs.org/docs/): used for spying, creating stubs and mocking the tests, is very powerful and with Sinon-Chai library is fully compatible with Chai expectations.
    - [Sinon-Chai](http://chaijs.com/plugins/sinon-chai): extension of Chai expectations to be used with Sinon.

## Installation

Make sure this is installed first:
- [Node.js](https://nodejs.org/en/)

The next step is install the Grunt and Bower globally if they are not installed yet:
> npm install -g grunt bower

Install dependencies:
> npm install
> bower install

## Running tests

[Grunt](http://gruntjs.com/) is the tool used to run the tests, it will launch _karma_ with its different configurations.

Available grunt task:
> grunt test:unit
> grunt test:coverage

### Debugging

In order to debug in _Chrome_ for example, the _karma_ base configuration has to be updated, ``karma.conf.js``:

- ``browsers``: browsers which will be opened to run the tests, more than one could be choosen at a time.
- ``singleRun``: if ``true`` the browser will be stopped after the first execution, else the browser will keep alive and listening for file modifications to run the tests automatically.
    - For continuous integration the value should be: ``true``.

```js
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
```

## Coverage

The coverage analysis is written directly in the console, however a more detailed one can be found in the folder: ``test/results/coverage``.

Example:

```
----------------------|----------|----------|----------|----------|----------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------------------|----------|----------|----------|----------|----------------|
 scripts\             |      100 |      100 |      100 |      100 |                |
  main.js             |      100 |      100 |      100 |      100 |                |
 scripts\controllers\ |       50 |      100 |    33.33 |       50 |                |
  math.js             |       50 |      100 |    33.33 |       50 |... 30,32,37,38 |
 scripts\services\    |      100 |      100 |      100 |      100 |                |
  math.js             |      100 |      100 |      100 |      100 |                |
  tools.js            |      100 |      100 |      100 |      100 |                |
----------------------|----------|----------|----------|----------|----------------|
All files             |    78.57 |      100 |    73.33 |    78.57 |                |
----------------------|----------|----------|----------|----------|----------------|
```
