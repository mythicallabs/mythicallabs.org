var p = 1;
async function a(){
    await fetch('/pdata', { 
        method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        for(i=json.server.amount; 1 <= i; i--){
            let org = document.getElementById('photosout').innerHTML
            let mod = org + `<img src='/photography/photo/${i}.jpg' class='galleryimage'>`
            document.getElementById('photosout').innerHTML = mod
        }
    });
}
async function frontone(){
    p++
    document.getElementById('photosout').innerHTML = "";
    document.getElementById('pageno').innerHTML = p;
    await fetch('/pdata', { 
        method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        for(i=json.server.amount-(p*10); p*10 <= i; i--){
            let org = document.getElementById('photosout').innerHTML
            let mod = org + `<img src='/photography/photo/${i}.jpg' class='galleryimage'>`
            document.getElementById('photosout').innerHTML = mod
        }
    });
}
async function backone(){
    if(p == 2){
    document.getElementById('photosout').innerHTML = "";
    await fetch('/pdata', { 
        method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        for(i=json.server.amount; 1 <= i; i--){
            let org = document.getElementById('photosout').innerHTML
            let mod = org + `<img src='/photography/photo/${i}.jpg' class='galleryimage'>`
            document.getElementById('photosout').innerHTML = mod
        }
    });
}
p--
document.getElementById('pageno').innerHTML = p;
}
a()