async function addNav(){
    $("#navout").load("/navbar .nav");
    setTimeout(setactivenav(), 300)
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
