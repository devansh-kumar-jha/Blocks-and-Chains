const express = require('express');
const url = require('url');
const crypto = require('crypto');

const web = express();
const port = 8787;

web.get('/', (req, res) => {
  console.log("fine working on it....");
  console.log(req.url);
  let data = 'hello';
  let str = crypto.createHash('SHA256').update(data).digest('Hex');
  res.send(str+"\n\n"+"so our URL is\n"+req.url);
  console.log("Ok it worked");
  console.log(str+"\n\n"+"so our URL is\n"+req.url);
});

web.listen(port, () => {
  console.log(`Web server is listening to http://localhost:${port}`);
  // console.log(`Please click on the link https://localhost:${port}/path/to/file/index.html?name=value for a example`);
});
