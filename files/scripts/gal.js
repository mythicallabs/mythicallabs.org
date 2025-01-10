async function a(){
    await fetch('/pdata', { 
        method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        for(i=0; json.server.amount > i; i++){
            let old = document.getElementById('photosout').innerHTML
            let new = old + '<img src'
        }
    });
}