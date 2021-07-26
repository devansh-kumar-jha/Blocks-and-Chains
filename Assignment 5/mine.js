const fs = require('fs');
const fs_temp = require('fs');
const crypto = require('crypto');
const nano = require('nano-time');
const ps = require('prompt-sync');

const GIGA = 1000000000;
const prompt = ps();

let index = prompt("Index of the block                                   ");
let hash  = prompt("Hash of the parent block(in hex)                     ");
let tar   = prompt("Target Value(in hex)                                 ");
let block = prompt("Enter the location of file containing body of block  ");

let str = fs_temp.readFileSync(block);
let b_hash = crypto.createHash('SHA256').update(str).digest('hex');
let nonce = 1n;
var flag = 0;

let start_time = nano();

while(flag==0) {
    let fd = fs.openSync("block.dat","w+");

    let timestamp = BigInt(Date.now());
    
    push_number(index,4);
    push_hash(hash);
    push_hash(b_hash);
    push_hash(tar);
    push_number(timestamp,8);
    push_number(nonce,8);

    let str1 = fs.readFileSync("block.dat");
    let check_hash = crypto.createHash('SHA256').update(str1).digest('hex');

    if(check_hash<=tar) {
        flag=1;
        console.log("The appropriate set of nonce and time stamp is - ");
        console.log("NONCE VALUE ----- ",parseInt(nonce));
        console.log("TIMESTAMP ------- ",parseInt(timestamp));
        console.log("HASH OF BLOCK --- ",check_hash);
    }

    fs.close(fd, (err) => {
        if (err) {
        console.error('Internal ERROR', err);
        }  
    });

    nonce = nonce + 1n;
}

let end_time=nano();
console.log("Time consumed =   ",(end_time-start_time)/GIGA,"seconds");

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

        for(let i=0;i<size;i++) {

            buf[size-i-1]= parseInt(val % 256n);
            val = val/256n;
    
        }
    }

    fs.writeFileSync("block.dat", buf);
    return;
}

function push_hash(str)
{
    let arr = new Uint8Array(Buffer.from(str, 'hex'));
    
    fs.writeFileSync("block.dat", arr);
    return;
}

function push_text(str)
{
    let arr = new Uint8Array(Buffer.from(str, 'utf-8'));
    
    fs.writeFileSync("block.dat", arr);
    return;
}
