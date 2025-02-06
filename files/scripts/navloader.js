//All code written by Rainier Hughes
//All code is not be copied, shared, or modified without written permisson from Rainier Hughes
//(c)Rainier Hughes 2024
async function addNav(){
    if(window.location.href.includes('project?p=')){
        await $("#navout").load(`/navbar`);
    }else{
        let navId = "#nav" + window.location.href.split('/').pop();
        if(navId == '#nav'){
            navId = '#navhome';
        }
        await $("#navout").load(`/navbar`);
        document.head.innerHTML = document.head.innerHTML + `<style>
        ${navId}{
            float: left;
            padding: 20px 30px 10px 30px;
            height: 40px;
            font-size: 1.5em;
            text-decoration: none;
            background-color: #3a4add;
        }
        ${navId}:hover{
            background-color: #3a4add;
        }
        </style>`;
    }
}
async function hidenavarr() {
    document.querySelector(".navarrow.right").style.display = 'none';
}
async function isLocalStorageAvailable(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}
async function savenavpos(){
    var navElement = document.querySelector('.nav');
    if(await isLocalStorageAvailable()){
        window.addEventListener('beforeunload', function() {
            localStorage.setItem('navScrollPosition', navElement.scrollLeft);
        });

        var scrollPosition = localStorage.getItem('navScrollPosition');
        if (scrollPosition) {
            navElement.scrollLeft = parseInt(scrollPosition);
        }
    }else{
        window.addEventListener('beforeunload', function() {
            window.document.cookie = `navScrollPosition=${navElement.scrollLeft}; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/`
        });

        var scrollPosition = function(){
            let cookieArr = window.document.cookie.split(";");
            for (let i = 0; i < cookieArr.length; i++) {
                let cookiePair = cookieArr[i].split("=");
                if ('navScrollPosition' === cookiePair[0].trim()) {
                    return cookiePair[1];
                }
            }
        console.log('no cookie')
        return null;
        }
        if (scrollPosition != null) {
            navElement.scrollLeft = parseInt(scrollPosition);
        }
    }
}
addNav();
