const express = require('express');
const url = require('url');

const web = express();
const port = 8787;

web.get('/', (req, res) => {
  console.log("fine working on it....");
  console.log(req.url);
});

web.listen(port, () => {
  console.log(`Web server is listening to http://localhost:${port}`);
  console.log(`Please click on the link https://localhost:${port}/path/to/file/index.html?name=value for a example`);
});