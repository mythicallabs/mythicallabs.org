//All code written by Rainier Hughes
//All code is not be copied, shared, or modified without written permisson from Rainier Hughes
//(c)Rainier Hughes 2024
async function addNav(){
    if(window.location.href.includes('project?p=')){
        await $("#navout").load(`/navbar .nav`);
    }else{
    let navId = "#nav" + window.location.href.split('/').pop();
    if(navId == '#nav'){
        navId = '#navhome';
    }
    await $("#navout").load(`/navbar .nav`);
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
    </style>`
}
}
addNav()
