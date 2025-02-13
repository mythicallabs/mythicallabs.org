//All code written by Rainier Hughes
//All code is not be copied, shared, or modified without written permisson from Rainier Hughes
//(c)Rainier Hughes 2024
var p = 1;
let serveramt;
async function a(){
    await fetch('/pdata', { 
        method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        serveramt = json.server.amount;
    });
    if(serveramt < 12){
        for(i=serveramt; 1 <= i; i--){
            let org = document.getElementById('photosout').innerHTML
            let mod = org + `<img src='/photography/photo/${i}.jpg?g=true' class='galleryimage' onclick='window.location.href = "/photography/photo/${i}.jpg"'>`
            document.getElementById('photosout').innerHTML = mod
        }
    }else{
        for(i=12; 1 <= i; i--){
            let org = document.getElementById('photosout').innerHTML
            let mod = org + `<img src='/photography/photo/${i}.jpg?g=true' class='galleryimage' onclick='window.location.href = "/photography/photo/${i}.jpg"'>`
            document.getElementById('photosout').innerHTML = mod
        }
    }
}
async function frontone(){
    if(p*12 < serveramt){
        p++
        document.getElementById('photosout').innerHTML = "";
        document.getElementById('pageno').innerHTML = p;
        for(i=p*12; p*12 <= i; i--){
            let org = document.getElementById('photosout').innerHTML
            let mod = org + `<img src='/photography/photo/${i}.jpg?g=true' class='galleryimage' onclick='window.location.href = "/photography/photo/${i}.jpg?g=rendered"'>`
            document.getElementById('photosout').innerHTML = mod
        }
    }
}
async function backone(){
    if(p > 1){
        if(p*12 < serveramt){
            p--
            document.getElementById('photosout').innerHTML = "";
            document.getElementById('pageno').innerHTML = p;
            for(i=p*12; p*12 <= i; i--){
                let org = document.getElementById('photosout').innerHTML
                let mod = org + `<img src='/photography/photo/${i}.jpg?g=true' class='galleryimage' onclick='window.location.href = "/photography/photo/${i}.jpg?g=rendered"'>`
                document.getElementById('photosout').innerHTML = mod
            }
        }
    }
}
a()