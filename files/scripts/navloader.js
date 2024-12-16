async function addNav(){
    var navId = "a#nav" + window.location.href.split('/').pop();
    $("#navout").load(`/navbar/${navId} .nav`);
}
function setactivenav(){
    var navId = "a#nav" + window.location.href.split('/').pop();
    if(navId == "a#nav"){
        setTimeout(() => {
            var navId = "a#navhome";
            $(navId).addClass('navactive');
        }, 100)
    }else{
        setTimeout(() => {
            $(navId).addClass('navactive');
        }, 100)
    }
}
addNav()
