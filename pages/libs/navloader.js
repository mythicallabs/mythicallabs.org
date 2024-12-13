$("#navout").load("/navbar .nav");
page = "#" + window.location.href.split("/").pop()
alert(page)
$(page).addClass("navactive")