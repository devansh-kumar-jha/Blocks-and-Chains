const express = require('express');
const web = express();

const PORT = 8787;

web.get('/',(req,res) => {
    // res.send('Hello world');
    res.send("Hello World"+" So how was it? :)");
    console.log("So how was it? :)");
});

web.listen(PORT,() => {
    console.log(`Listening to http://localhost:${PORT}`);
});
