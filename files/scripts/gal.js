async function a(){
    await fetch('/pdata', { 
        method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        for(i=1; json.server.amount >= i; i++){
            let org = document.getElementById('photosout').innerHTML
            let mod = old + `<img src='/photography/photo/${i}.jpg'>`
            org = mod
        }
    });
}