const { JsonFormatter } = require('cucumber');
const fs = require('fs');
const path = require('path');

module.exports = {
  // ... other options ...
  after: function (results, done) {
    console.log('Test results:', results);
    done();
  }
  // ... other options ...
};

