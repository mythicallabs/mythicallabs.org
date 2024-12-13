$("#navout").load("/navbar .nav");
page = "#nav" + window.location.href.split("/").pop()
alert(page)
$(page).addClass(".navactive")