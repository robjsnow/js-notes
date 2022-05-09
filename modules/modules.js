//vehicles.js code is executed, and then vehicles is assigned an empty object {}
const vehicleTypes = require("./vehicles");

//pets.js code is executed, then petData is assigned {names, ages} object
//because of the module.exports line on pets.js file
const petData = require("./pets");

console.log(petData.names);
console.log(petData.ages);

//We could just get the names of petData instead with destructuring
const { names } = require("./pets");
console.log(names);

//Example of requiring the built-in os core module
const os = require("os");
console.log(os.platform(), os.homedir());
