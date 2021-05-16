var rsa = require("node-rsa");
const fs = require('fs');

function Generate()
{
    var key = new rsa({b:2048});
    
    var public = key.exportKey("public");
    var private = key.exportKey("private");

    fs.openSync("./Keys/public.pem","w");
    fs.writeFileSync("./Keys/public.pem",public,"utf8");

    fs.openSync("./Keys/private.pem","w");
    fs.writeFileSync("./Keys/private.pem",private,"utf8");
}

Generate();
