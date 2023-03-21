const { Before, After } = require('cucumber');
const { browser } = require('protractor');

Before(async function () {
  // Code to be executed before each scenario
});

After(async function (scenario) {
  // Code to be executed after each scenario
  console.log('Test results:', results);
  done();
});