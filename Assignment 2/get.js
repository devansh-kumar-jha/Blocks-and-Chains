const ps = require("prompt-sync");
const fs = require("fs");

const prompt = ps();

let public = prompt("Enter complete location for the Public key file ");
let private = prompt("Enter complete location for the Private key file ");

try {
    fs.openSync(public,"r");
    var publicKey = fs.readFileSync(public,'utf8');

    fs.openSync(private,"r");
    var privateKey = fs.readFileSync(private,'utf8');

    fs.openSync("./public.pem","w");
    fs.writeFileSync("./public.pem",publicKey,"utf8");

    fs.openSync("./private.pem","w");
    fs.writeFileSync("./private.pem",privateKey,"utf8"); 
}
catch {
    console.log("Sorry error in opening files :(")
}