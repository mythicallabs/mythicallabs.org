const express = require('express');
const fs = require('fs')
const app = express();
const path = require('path')
let pagesPath = path.join(process.cwd(), '/pages');
app.get('/', (req, res) => res.sendFile(fs.readFileSync(process.cwd() + '/pages/index.html')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));