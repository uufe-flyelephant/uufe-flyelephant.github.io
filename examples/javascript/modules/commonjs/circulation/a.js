exports.loaded = false;
var b = require('./b.js')
console.log("b in a is " + JSON.stringify(b))
exports.loaded = true;
console.log("a complete")
