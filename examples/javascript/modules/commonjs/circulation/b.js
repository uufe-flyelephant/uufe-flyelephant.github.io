exports.loaded = false;
var a = require('./a.js')
console.log("a in b is " + JSON.stringify(a))
exports.loaded = true;
console.log("b complete")
