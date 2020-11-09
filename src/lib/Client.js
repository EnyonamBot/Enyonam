const eris = require("eris");
module.exports = class Enyonam extends eris {
  constructor() {}

  init() {
      console.log("This should be doing something useful, but its not")
  }

  initDB() {}

  // extra functions, useful for db related things.

  /**
   * Function to get user, returns db statistics and discord information
   * @param {number} userID 
   */
  getUser(userID) {}
};
