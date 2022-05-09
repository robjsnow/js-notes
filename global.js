//Global object for NODE.js

//Sets an Interval that runs every 1 second
const interval = setInterval(() => {
  console.log("in the interval");
}, 1000);

//Sets a Timeout that will run after 5 seconds
setTimeout(() => {
  console.log("in the timeout");
  clearInterval(interval); //Stops the interval
}, 5000);

console.log("directory name: " + __dirname);
console.log("full path: " + __filename);
