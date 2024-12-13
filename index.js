const express = require('express');
const fs = require('fs')
const app = express();
const path = require('path')
let pagesPath = path.join(process.cwd(), '/pages/index.html');
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(fs.readFileSync(pagesPath))
});
app.get('/lib/:filetype/:filename', (req, res) => {
    let filename = req.params.filename;
    let filetype = req.params.filetype;
    let filePath = path.join(process.cwd(), `/pages/libs/${filename}`);
    if(filetype == 'js'){
        res.set('Content-Type', 'application/javascript');
    }else{
        res.set('Content-Type', 'text/css');
    }
    res.send(fs.readFileSync(filePath))
})
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));