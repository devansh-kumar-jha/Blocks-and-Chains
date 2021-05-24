const crypto = require("crypto")
const fs = require('fs');

fs.openSync("./public.pem","r");
var publicKey = fs.readFileSync("./public.pem",'utf8');

fs.openSync("./un-encrypted.txt","r");
var text = fs.readFileSync("./un-encrypted.txt",'utf8');

fs.openSync("./encrypted.txt","r");
var encrypted = fs.readFileSync("./encrypted.txt",'utf8');

try {
    const decrypted = crypto.publicDecrypt(
        {
            key : publicKey,
            padding : crypto.constants.RSA_PKCS1_PADDING,
            encoding : 'utf8'
        },
        Buffer.from(encrypted,"hex")
    )
    
    console.log("Decrypted String :",decrypted.toString());
    console.log('Signature Verified !!!')
}
catch(err) {
    console.log('Verification Failed !!!')
}


