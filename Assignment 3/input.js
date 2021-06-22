const fs1 = require("fs");
const fs2 = require("fs");
const fs_temp = require("fs");
const ps = require("prompt-sync");
const nano = require("nano-time");
const createHash = require("crypto");
const prompt = ps();
const fse = require("fs-extra");

fs1.openSync("./a.dat","w");

let input_no = prompt("Enter the number of input to be read ");

for(let i=0;i<input_no;i++) {
    let trans_ID = prompt("Enter Transaction ID(Hex) : ");
    trans_ID = trans_ID.toString('Hex'); 
    let index = prompt("Index Number(Integer) : ");
    let sign = prompt("Enter Signature(Hex) : ");
    sign = sign.toString('Hex');
    let length = sign.length;

}

let output_no = prompt("Enter the number of outputs ");

for(let i=0;i<output_no;i++) {
    let coin_no = prompt("Enter number of coins(64 bit integer) : ");
    let public = prompt("Enter complete location for the Public key file ");

    try {
        fs_temp.openSync(public,"r");
        var publicKey = fs_temp.readFileSync(public,'utf8');
        fs_temp.close();
    
        fs_temp.openSync("./public.pem","w");
        fs_temp.writeFileSync("./public.pem",publicKey,"utf8");
        fs_temp.close(); 
    }
    catch {
        console.log("Sorry error in opening files :(")
    }
}

fs1.close();
fs1.openSync("./a.dat","r");
let data = fs.readFileSync("./a.dat",'utf8');

fs2.openSync("./the_calculated_transaction_ID_in_hex.dat","w");

// const trans_ID = crypto.privateEncrypt(
//     {
//         key : privateKey,
//         padding : crypto.constants.RSA_PKCS1_PADDING,
//         encoding : 'utf8'
//     },
//     Buffer.from(x)
// )

var trans_ID = createHash("sha256");
trans_ID.update(data); 

fs2.writeFileSync("./the_calculated_transaction_ID_in_hex.dat",trans_ID.toString('hex'),'utf8');

const unixTime = 1210981217;
const date = new Date(unixTime*1000);
console.log(date.toLocaleDateString("en-US"));

fse.copy('./a.dat', './the_calculated_transaction_ID_in_hex.dat', function (err) {     
    if (err)  return console.error(err)
});


fs1.unlink("./a.dat", (err) => {
    if (err) {  
        console.log("A internal error occured");
        throw err; 
    }
    // console.log("File is deleted");
});

fs2.close();