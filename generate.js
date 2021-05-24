var crypto = require("crypto");
const fs = require('fs');

function Generate()
{
    var { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
    })
    
    var public = publicKey.export(
        {
            type : 'pkcs1',
            format : 'pem'
        }
    )

    var private = privateKey.export(
        {
            type : 'pkcs1',
            format : 'pem'
        }
    )
    
    fs.openSync("./public.pem","w");
    fs.writeFileSync("./public.pem",public,"utf8");

    fs.openSync("./private.pem","w");
    fs.writeFileSync("./private.pem",private,"utf8"); 
}

Generate();
