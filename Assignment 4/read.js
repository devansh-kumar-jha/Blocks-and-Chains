const fs = require('fs');
const crypto = require('crypto');
const ps = require('prompt-sync');
const Transaction = require('../Classes/Transaction');
const Input = require('../Classes/Input');
const Output = require('../Classes/Output');

const prompt = ps();

console.log("Enter the correct location of the file from which data is to be taken as input");
var file = prompt();

let fd = fs.openSync(file,"r");

var str = fs.readFileSync(file);

fs.close(fd, (err) => {
    if (err) {
      console.error('Internal ERROR', err);
    }  
});

let trans_ID = crypto.createHash('SHA256').update(str).digest('hex');

let ctr = 0;
let trans = new Transaction;

trans.timestamp = read_number(8);
trans.num_inputs = read_number(4);

for(let i=0;i<trans.num_inputs;i++) {
    let inp = new Input;

    inp.txnid = read_hash(32);
    inp.index = read_number(4);
    inp.siglength = read_number(4);
    inp.sig = read_hash(inp.siglength);

    trans.push_inputs(inp);
}

trans.num_outputs = read_number(4);

for(let i=0;i<trans.num_outputs;i++) {
    let out = new Output;
    out.coins = read_number(8);
    out.len = read_number(4);
    out.key = read_text(out.len);

    trans.push_outputs(out);
}

console.log("\n\n***********DATA IN THE FILE***********\n\n");
console.log("Transaction ID --> ",trans_ID,"\n");
console.log(trans);
console.log("\n\n Exiting Successfully");

function read_number(size)
{
    if(size<8) {
        let ans = 0;
        for(let i=0;i<size;i++) {
            ans = ans * 256;
            ans+=str[ctr+i];
        }
        ctr = ctr+size;
        return ans;
    }
    else {
        let ans = 0n;
        for(let i=0;i<size;i++) {
            ans = ans * 256n;
            ans+=BigInt(str[ctr+i]);
        }
        ctr = ctr+size;
        return ans;
    }
}

function read_hash(size)
{
    let data = str.toString("hex",ctr,ctr+size);
    ctr = ctr+size;
    return data;
}

function read_text(size)
{
    let data = str.toString("utf-8",ctr,ctr+size);
    ctr = ctr+size;
    return data;
}
