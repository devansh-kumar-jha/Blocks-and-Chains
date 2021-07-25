const nano = require("nano-time");

let time = nano();
console.log("Timestamp with nano-second precision - ",time);
console.log("Length of string generated           - ",time.length);
time = BigInt(time);
console.log("Timestamp as a Big Integer number    - ",time);