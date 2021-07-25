const fs = require("fs");
const fs_temp = require("fs");
const ps = require("prompt-sync");
const nano = require("nano-time");
const crypto = require("crypto");
const Transaction = require("../Classes/Transaction");
const Output = require("../Classes/Output");
const Input = require("../Classes/Input");

const prompt = ps();
let fd = fs.openSync("./hash.dat","a+");


let trans = new Transaction;

console.log("Enter the number of inputs in the transaction(Enter a integer)");
let input_no = prompt();
trans.num_inputs = parseInt(input_no);
console.log("Number of inputs to be given\n",trans.num_inputs);


for(let i=0;i<trans.num_inputs;i++) {

    let inp = new Input;
    console.log("INPUT NUMBER --> ",i);

    console.log("Enter Transaction ID for this input (32 bytes in Hex)");
    let trans_ID = prompt();
    if(trans_ID.length != 64) {
        if(trans_ID.length > 64) {
            console.log("Size greater than 32 bytes, last bytes would be automatically dropped.");
            let short_TRANS_ID = trans_ID.charAt(0);
            for(let j=1;j<64;j++) {
                short_TRANS_ID = short_TRANS_ID.concat(trans_ID.charAt(j));
            }
            trans_ID=short_TRANS_ID;
        }
        else {
            console.log("Size less than 32 bytes, concatenationg 0 at the end.");
            while(trans_ID.length !=64 ) {
                trans_ID = trans_ID.concat('0');
            }       
        }
    }
    inp.txnid=trans_ID;
    
    console.log("Index Number for this input(Integer)");
    let index = prompt();
    inp.index=parseInt(index);
    if(inp.index<0) {
        console.log("Negative value would be changed automatically to positive.");
        inp.index= -1*inp.index;
    }

    console.log("Enter Signature for the this input(Hex string)");
    console.log("Please provide a signature of even length to avoid any kind of internal errors.");
    let sign = prompt();
    if(sign.length%2!=0) {
        console.log("String has odd length so it would be adjusted with 0 added at last");
        sign.concat('0');
    }
    inp.sig=sign;

    inp.siglength=sign.length/2;

    trans.push_inputs(inp);
}


console.log("Enter the number of outputs in the transaction(Enter a integer)");
let output_no = prompt();
trans.num_outputs = parseInt(output_no);
console.log("Number of outputs to be given\n",trans.num_outputs);


for(let i=0;i<output_no;i++) {
    
    let out = new Output;
    console.log("OUTPUT NUMBER --> ",i);

    console.log("Enter number of coins for this output(64 bit integer)");
    let coin_no = prompt();
    if(BigInt(coin_no) >= 0n) {
        out.coins=BigInt(coin_no);
    }
    else {
        console.log("The number is less than zero setting coins to be zero");
        out.coins=0;
    }

    console.log("Enter complete location for the file containing public key");
    let public = prompt();
    let publicKey;
    try {
        publicKey = fs_temp.readFileSync(public,'utf8'); 
    }
    catch(err) {
        console.log("Sorry error in opening files... taking the default public key file");
        publicKey = fs_temp.readFileSync("public.pem",'utf8');
    }
    out.key=publicKey;

    out.len=publicKey.length;

    trans.push_outputs(out);
}


let inputs = trans.get_inputs();
let outputs = trans.get_outputs();
let time = nano();
time=BigInt(time);

console.log("\n\n The transaction file to be pushed will be");
console.log(" ***************INPUTS**************\n",inputs,"\n");
console.log(" ***************OUTPUTS*************\n",outputs,"\n");
console.log(" *********TIMESTAMP GENERATED*******\n",time,"\n");
console.log(" Writing to the file, please wait......");


push_number(time,8);

push_number(trans.num_inputs,4);

for (let inp of inputs) {
    push_hash(inp.txnid);
    push_number(inp.index,4);
    push_number(inp.siglength,4);
    push_hash(inp.sig);
}

push_number(trans.num_outputs,4);

for (let out of outputs) {
    push_number(out.coins,8);
    push_number(out.len,4);
    push_text(out.key);
}

let name = name_set();

console.log(" File Created with the name\n",name);

fs.close(fd, (err) => {
    if (err) {
      console.error('Internal ERROR', err);
    }  
});

console.log(" Exited sucessfully");


function push_number(val,size)
{    
    let buf = new Uint8Array(size);
    if(size<8) {
        for(let i=0;i<size;i++) {

            buf[size-i-1]= val % 256;
            val = val/256;
    
        }
    }
    else if(size>=8) {
        val = Number(val);

        for(let i=0;i<size;i++) {

            buf[size-i-1]= val % 256;
            val = val/256;
    
        }
    }

    fs.appendFileSync("hash.dat", buf);
    return;
}

function push_hash(str)
{
    let arr = new Uint8Array(Buffer.from(str, 'hex'));
    
    fs.appendFileSync("hash.dat", arr);
    return;
}

function push_text(str)
{
    let arr = new Uint8Array(Buffer.from(str, 'utf-8'));
    
    fs.appendFileSync("hash.dat", arr);
    return;
}

function name_set()
{
    let data = fs.readFileSync("hash.dat");
    let hash = crypto.createHash('SHA256').update(data).digest('hex');
    hash = hash.toString();
    hash = hash.concat(".dat");

    fs.renameSync("hash.dat",hash);
    return hash;
}

