const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const options = {
  port: 443,
  path: '/todos/1',
  method: 'GET'
};

https.createServer(options, app).listen(443, () => {
    console.log('Server is running on https://localhost:3000');
});
