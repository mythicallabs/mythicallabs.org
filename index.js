const express = require('express');
const fs = require('fs')
const app = express();
const path = require('path')
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(fs.readFileSync(path.join(process.cwd(), '/files/pages/index.html')));
})
app.get('/favicon.ico', (req, res) => {
    res.set('Content-Type', 'image/x-icon');
    res.send(fs.readFileSync(path.join(process.cwd(), '/favicon.ico')))
})
app.get('/pay', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(`<html><script>window.location.href = '/couldhavebeenhacked'</script></html>`);
})
app.get('/devmsg', (req, res) => {
    from = req.query.from;
        const filePath = path.join(process.cwd(), '/files/pages/devmsg.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).send('Error reading file');
            }
            let modifiedData = data.replace(`<button class="button" onclick="window.location.href = '/about'">Back to</button>`, `<button class="button" onclick="window.location.href = '/${from}'">Back to ${from}</button>`);
            res.set('Content-Type', 'text/html');
            res.send(modifiedData);
        });
})
app.get('/:page', (req, res) => {
    let page = req.params.page;
        try{
            res.set('Content-Type', 'text/html');
            res.send(fs.readFileSync(path.join(process.cwd(), '/files/pages/', page +'.html')));
        }catch(err){
            res.set('Content-Type', 'text/html');
            res.send(fs.readFileSync(path.join(process.cwd(), '/files/pages/404.html')))
        }
});
app.get('/file/:filetype/:filename', (req, res) => {
    const filename = req.params.filename;
    const filetype = req.params.filetype;
    if(filetype == 'js'){
        res.set('Content-Type', 'application/javascript');
        filePath = path.join(process.cwd(), `/files/scripts/${filename}`)
    }else if(filetype == 'css'){
        res.set('Content-Type', 'text/css');
        filePath = path.join(process.cwd(), `/files/styles/${filename}`)
    }else if(filetype == 'jpeg'){
        res.set('Content-Type', 'image/jpeg');
        filePath = path.join(process.cwd(), `/files/images/${filename}`)
    }
    res.send(fs.readFileSync(filePath))
})
app.get('/global/:file', (req, res) => {
    const file = req.params.file;
    if(file == 'js'){
        res.set('Content-Type', 'application/javascript');
        filePath = path.join(process.cwd(), `/files/global/mythicalglobal.js`)
    }else if(file == 'css'){
        res.set('Content-Type', 'text/css');
        filePath = path.join(process.cwd(), `/files/global/mythicalglobal.css`)
    }
    res.send(fs.readFileSync(filePath))
})
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));