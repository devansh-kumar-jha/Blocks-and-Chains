const crypto = require("crypto");
const fs = require("fs");

const data = 'my data';

fs.openSync("./private.pem","r");
var privateKey = fs.readFileSync("./private.pem",'utf8');

fs.openSync("./public.pem","r");
var publicKey = fs.readFileSync("./public.pem",'utf8');

const signature1 = crypto.privateEncrypt(
    {
        key : privateKey,
        padding : crypto.constants.RSA_PKCS1_PADDING,
        encoding : 'utf8'
    },
    Buffer.from(data)
)

console.log(signature1.toString('hex'));

const signature2 = crypto.publicDecrypt(
    {
        key : publicKey,
        padding : crypto.constants.RSA_PKCS1_PADDING,
        encoding : 'utf8'
    },
    signature1
)

console.log(signature2.toString());