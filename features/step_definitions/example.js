const { Given, When, Then } = require('cucumber');
const { browser, element, by } = require('protractor');
const { expect } = require('chai');

Given('I am on the homepage', async function() {
  expect(true).to.be.true;
  console.log ("Given step executed");
  // await browser.get('https://www.example.com');
});

When('I search for {string}', async function(searchTerm) {
  // const searchBox = element(by.name('search'));
  // await searchBox.sendKeys(searchTerm);
  // await searchBox.submit();
  expect(true).to.be.true;
  console.log ("When step executed");
});

Then('I should see search results', async function() {
  // const searchResults = element(by.id('search-results'));
  // const isDisplayed = await searchResults.isDisplayed();
  // expect(isDisplayed).to.be.true;
  expect(false).to.be.true;
  console.log ("Then step executed");
});
