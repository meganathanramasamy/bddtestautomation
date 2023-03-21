const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {
    // Define any variables or resources that should be shared between step definitions
    this.variable1 = null;
    this.variable2 = null;
  }
}

setWorldConstructor(CustomWorld);
