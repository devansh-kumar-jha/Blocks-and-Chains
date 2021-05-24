const crypto = require("crypto")
const fs = require('fs');
const ps = require("prompt-sync");
const prompt = ps();

let x = prompt("Enter the text to be encrypted ");

fs.openSync("./un-encrypted.txt","w");
fs.writeFileSync("./un-encrypted.txt",x.toString('hex'),'utf8');

fs.openSync("./private.pem","r");
var privateKey = fs.readFileSync("./private.pem",'utf8');

fs.openSync("./public.pem","r");
var publicKey = fs.readFileSync("./public.pem",'utf8');

const signature = crypto.privateEncrypt(
    {
        key : privateKey,
        padding : crypto.constants.RSA_PKCS1_PADDING,
        encoding : 'utf8'
    },
    Buffer.from(x)
)

console.log(signature.toString('hex'));

fs.openSync("./encrypted.txt","w");
fs.writeFileSync("./encrypted.txt",signature.toString('hex'),'utf8');
