async function addNav(){
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
addNav()
