// const allureReporter = require('@wdio/allure-reporter').default;
// const {setDefaultTimeout} = require('cucumber');
// setDefaultTimeout(60000);

// function createAllureXMLDir(){
//     try{
//         fs.mkdirSync(`allure-results/xml`,{recursive:true});
//     }catch(e){
//         console.log('Error creating directory:', e);
//     }
// }
// allureReporter.addFeature('Feature');
// allureReporter.addEnvironment('Environment', false);
// allureReporter.addDescription('Description');
// allureReporter.addSeverity('critical');
// allureReporter.addIssue('JIRA-123', 'http://jira.example.com/browse/JIRA-123');
// allureReporter.addTestId('TestId-123');
// allureReporter.addAttachment('attachment', 'Screenshot', 'image/png');
// allureReporter.addStep('Step name');
// allureReporter.addArgument('argument', 'value');
// createAllureXMLDir();

// //working code start
// const { exec } = require('child_process');

// exec('npx cucumber-js', (error, stdout, stderr) => {
//   console.log(stdout);
//   console.error(stderr);
//   if (error) {
//     console.error(`CucumberJS test failed: ${error}`);
//     process.exit(1);
//   }
// });
// //working code end

const { exec } = require('child_process');
const reporter = require('cucumber-html-reporter');

//npx cucumber-js -r ./support/cucumber.js
exec('npx cucumber-js -r ./cucumber.js', (error, stdout, stderr) => {
  console.log(stdout);
  console.error(stderr);
  if (error) {
    console.error(`CucumberJS test failed: ${error}`);
    process.exit(1);
  }

  const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
      'App Version': '1.0.0',
      'Test Environment': 'DEV',
      'Browser': 'Chrome  91.0.4472.77',
      'Platform': 'Windows 10',
      'Parallel': 'Scenarios',
      'Executed': 'Local'
    }
  };

  //reporter.generate(options);
});
