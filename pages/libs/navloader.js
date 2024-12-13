$("#navout").load("/navbar .nav");
page = "#" + window.location.href.split("/").pop()
$(page).addClass("navactive")