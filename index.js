const express = require('express');
const fs = require('fs')
const app = express();
const path = require('path')
let pagesPath = path.join(process.cwd(), '/pages/index.html');
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(fs.readFileSync(pagesPath))
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));