$("#navout").load("/navbar .nav");
const url = window.location.href
const activepage = url.split("/").pop()
$(`#${activepage}`).c