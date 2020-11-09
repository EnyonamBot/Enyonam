const Enyonam = require("./lib/Client");
const { token } = require("../config.json");
var Enyo = new Enyonam(token);
Enyo.init();
