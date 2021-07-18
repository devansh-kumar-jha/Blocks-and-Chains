const crypto = require('crypto');
const ps = require("prompt-sync");
const prompt = ps();

let tar='0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';

let a = prompt("Enter the required string ");

var i = 1;

while(1) {
    var b = a;
    b = b+i;

    // This is the main implementation consisting of the 
    var x = crypto.createHash('sha256').update(b).digest('hex');

    if(x<=tar) {
        console.log(x);
        break;
    }     

    i++;
}

console.log(i);