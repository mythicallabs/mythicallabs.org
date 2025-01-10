const express = require('express');
const fs = require('fs');
const { console } = require('inspector');
const app = express();
const path = require('path')
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(fs.readFileSync(path.join(process.cwd(), '/files/pages/base/index.html')));
})
app.get('/favicon.ico', (req, res) => {
    res.set('Content-Type', 'image/x-icon');
    res.send(fs.readFileSync(path.join(process.cwd(), '/favicon.ico')))
})
app.get('/devmsg', (req, res) => {
    from = req.query.from;
        const filePath = path.join(process.cwd(), '/files/pages/base/devmsg.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.set('Content-Type', 'text/html')
                deliver404error(req, res, err, 'Back to', 'projects')            
            }
            let modifiedData = data.replace(`<button class="button" onclick="window.location.href = '/about'">Back to</button>`, `<button class="button" onclick="window.location.href = '/${from}'">Back to ${from}</button>`);
            res.set('Content-Type', 'text/html');
            res.send(modifiedData);
        });
})
app.get('/photography', (req, res) => {
    try{
        res.set('Content-Type', 'text/html')
        res.send(fs.readFileSync(path.join(process.cwd(), '/files/photography/pages/index.html')))
    }catch(err){
        res.set('Content-Type', 'text/html')
        deliver404error(req, res, err, 'Back to', 'homepage')
    }
})
app.get('/pdata', (req, res) => {
    try{
        res.set('Content-Type', 'application/json')
        res.send(JSON.stringify(fs.readFileSync(path.join(process.cwd(), '/files/photography/photos/photos.json'))))
    }catch(err){
        res.set('Content-Type', 'application/json')
        res.status(404).send('404 Not Found')
        console.log("CRIT ERROR: PHOTOS JSON NOT FOUND")
    }
})
app.get('/search', (req, res) => {
    if(req.query.q){
        
    }
})
app.get('/:page', (req, res) => {
    let page = req.params.page;
        try{
            res.set('Content-Type', 'text/html');
            res.send(fs.readFileSync(path.join(process.cwd(), '/files/pages/base/', page +'.html')));
        }catch(err){
            res.set('Content-Type', 'text/html');
            deliver404error(req, res, err, 'Back to', 'homepage')
        }
});
app.get('/projects/:projectname/:projectpage', (req, res) => {
    const projectname = req.params.projectname
    const projectpage = req.params.projectpage
    if(projectpage == ''){
        projectpage = 'index'
    }
    try{
        res.set('Content-Type', 'text/html')
        res.send(fs.readFileSync(path.join(process.cwd(), '/files/pages/projects/' + projectname + '/' + projectpage + '.html')))
    }catch(err){
        res.set('Content-Type', 'text/html')
        deliver404error(req, res, err, 'Back to', 'projects')
    }
})
app.get('/photography/:page', (req, res) => {
    const page = req.params.page
    if(page == ''){
        projectpage = 'index'
    }
    try{
        res.set('Content-Type', 'text/html')
        res.send(fs.readFileSync(path.join(process.cwd(), '/files/photography/pages/' + page + '.html')))
    }catch(err){
        res.set('Content-Type', 'text/html')
        deliver404error(req, res, err, 'Back to', 'photography')
    }
})
app.get('/photography/photo/:photo', (req, res) => {
    const photo = req.params.photo
    if(photo == ''){
        res.set('Content-Type', 'text/html')
        deliver404error(req, res, err, 'Back to', 'photography', 'We couldnt find that photo')
    }
    try{
        res.set('Content-Type', 'text/html')
        if(type == 0){
            res.send(fs.readFileSync(path.join(process.cwd(), '/files/photography/photos/' + photo + type)))
        }
    }catch(err){
        res.set('Content-Type', 'text/html')
        deliver404error(req, res, err, 'Back to', 'projects')
    }
})
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
    }else if(filetype == 'png'){
        res.set('Content-Type', 'image/png');
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

function deliver404error(req, res, err, message, backto, custommessage){
    //assuming that the homepage is located at 
    let pnfmessage = `Oops, looks like that page dosen't exsits.`
    if(custommessage){
        pnfmessage = custommessage;
    }
    if(backto == "homepage"){
        pagepath = ''
    }else{
        pagepath = backto
    }
    const filePath = path.join(process.cwd(), '/files/pages/base/404.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        data = data.replace(`<button class="button" onclick="window.location.href = '/about'">[BACKTO]</button>`, `<button class="button" onclick="window.location.href = '/${pagepath}'">${message} ${backto}</button>`);
        data = data.replace(`<p>[MESSAGE]</p>`, `<p>${pnfmessage}</p>`)
        return res.send(data);
    });
}