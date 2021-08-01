const express = require('express');
const crypto = require('crypto');

const web = express();
const port = 8787;

web.use(express.json());
web.use(express.urlencoded({ extended: false }));

web.post('/hash', (req, res) => {
  let str = crypto.createHash('SHA256').update(req.body.data).digest('Hex');
  console.log(str);
  res.send({ hash: str });
});

web.listen(port, () => {
  console.log(`Web server is listening to http://localhost:${port}/hash`);
});
