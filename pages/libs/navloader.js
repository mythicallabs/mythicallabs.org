$("#navout").load("/navbar .nav");
page = "a#nav.navitem" + window.location.href.split("/").pop()
alert(page)
$(page).addClass("navactive")