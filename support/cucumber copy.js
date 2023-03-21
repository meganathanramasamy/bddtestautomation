const { setWorldConstructor } = require('cucumber');
const { browser } = require('protractor');
const fs = require('fs');
const path = require('path');
const AllureReporter = require('cucumberjs-allure-reporter');

setWorldConstructor(function({ attach }) {
  this.attach = attach;
});

// exports.config = {
//   framework: 'custom',
//   frameworkPath: require.resolve('protractor-cucumber-framework'),
//   specs: ['./1features/*.feature'],
//   cucumberOpts: {
//     require: ['./features/step_definitions/*.js'],
//     format: ['json:reports/results.json'],
//     strict: true,
//     // format: 'json:reports/cucumber_report.json'
//   },
//   onPrepare: function () {
//     browser.ignoreSynchronization = true;
//     browser.manage().window().maximize();
//     browser.waitForAngularEnabled(false);
//     jasmine.getEnv().addReporter(new AllureReporter({
//       resultsDir: 'reports/allure-results'
//     }));
//   },
//   onComplete: function () {
//     const reportPath = path.join(__dirname, '/reports/allure-report');
//     if (!fs.existsSync(reportPath)) {
//       fs.mkdirSync(reportPath);
//     }
//     const allureCommand = `allure generate ${path.join(__dirname, '/reports/allure-results')} -o ${reportPath}`;
//     const allureGenerate = require('child_process').execSync(allureCommand).toString();
//     console.log(allureGenerate);
//   }
// };


// const {AllureReporter} = require('cucumberjs-allure-reporter');

// module.exports = {
//   // ...
//   reporters: [AllureReporter],
//   reporterOptions: {
//     allure: {
//       outputDir: 'allure-results',
//       disableWebdriverStepsReporting: true,
//       disableMochaCompatibility: true
//     }
//   }
// };



// const { AllureRuntime, InMemoryAllureWriter, ContentType } = require('allure-js-commons');
// const { AllureCucumber } = require('allure-cucumberjs');

// const reporterOptions = {
//   targetDir: './reports/allure-results',
//   tagsList: ['@smoke', '@regression'],
// };

// const allureRuntime = new AllureRuntime({ writer: new InMemoryAllureWriter(), resultsDir: reporterOptions.targetDir });

// module.exports = {
//   default: `--format-options '{"snippetInterface": "async-await"}' --require features --require step_definitions --format node_modules/cucumberjs-allure-reporter ${reporterOptions.tagsList.map(tag => `--tags ${tag}`).join(' ')}`,
//   afterLaunch: function() {
//     const allureCucumber = new AllureCucumber(allureRuntime);
//     allureCucumber.write(reporterOptions.targetDir);
//   }
// };

// exports.config = {
//   // ... other configuration options
//   cucumberOpts: {
//     format: 'json:reports/cucumber_report.json',
//     // ... other options
//   },
//   // ... other configuration options
// };


module.exsports = {
  // The directory where your Cucumber feature files are located
  fseaturePath: './features',

  // The directory where your step definitions are located
  stepDefinitions: './step_definitions',

  // Enable verbose output
  verbose: true,

  // Specify the format of the output (optional)
  format: ['pretty', 'json:reports/cucumber.json'],

  // Define custom world parameters (optional)
  worldParameters: {
    browser: 'chrome',
    baseUrl: 'http://localhost:3000'
  },

  // Define hooks (optional)
  beforeScenario: function() {
    // Code to run before each scenario
  },

  afterScenario: function() {
    // Code to run after each scenario
  },

  beforeFeature: function() {
    // Code to run before each feature
  },

  afterFeature: function() {
    // Code to run after each feature
  }
};
