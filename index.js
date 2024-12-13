const express = require('express');
const fs = require('fs')
const app = express();
const path = require('path')
let indexpath = path.join(process.cwd(), '/pages/index.html');
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(fs.readFileSync(indexpath));
})
app.get('/favicon.ico', (req, res) => {
    res.set('Content-Type', 'image/x-icon');
    res.send(fs.readFileSync(path.join(process.cwd(), '/favicon.ico')))
})
app.get('/:page', (req, res) => {
    let page = req.params.page;
        try{
            res.set('Content-Type', 'text/html');
            res.send(fs.readFileSync(path.join(process.cwd(), '/pages/', page +'.html')));
        }catch(err){
            res.set('Content-Type', 'text/html');
            res.send(fs.readFileSync(path.join(process.cwd(), '/pages/404.html')))
        }
});
app.get('/file/:filetype/:filename', (req, res) => {
    const filename = req.params.filename;
    const filetype = req.params.filetype;
    if(filetype == 'js'){
        res.set('Content-Type', 'application/javascript');
        filePath = path.join(process.cwd(), `/pages/libs/${filename}`)
    }else if(filetype == 'css'){
        res.set('Content-Type', 'text/css');
        filePath = path.join(process.cwd(), `/pages/libs/${filename}`)
    }else if(filetype == 'jpeg'){
        res.set('Content-Type', 'image/jpeg');
        filePath = path.join(process.cwd(), `/images/${filename}`)
    }
    res.send(fs.readFileSync(filePath))
})
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));