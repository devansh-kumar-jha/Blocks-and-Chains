const http = require('http');
const fs = require('fs');

const PORT = 5500;

const server = http.createServer( function(req, res) {   
    res.writeHead(200 , { 'Content-Type': 'text/html' });
    let str = fs.readFileSync('practise.html');
    res.write(str);
    str = fs.readFileSync('request.html');
    res.write(str);
    res.end();
    console.log("Worked correctly !!");
});
   
server.listen(PORT, function(error) {
    if(error) {   
        console.log('something went wrong',error);
    }  else {
        console.log(`Server is listening to https://localhost/${PORT}`);
    }    
});
