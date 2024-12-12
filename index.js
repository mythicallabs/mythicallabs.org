const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const options = {
    key: fs.readFileSync('path/to/your/key.pem'),
    cert: fs.readFileSync('path/to/your/cert.pem')
};

https.createServer(options, app).listen(3000, () => {
    console.log('Server is running on https://localhost:3000');
});
