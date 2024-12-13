$("#navout").load("/navbar .nav");
$("a#nav"+window.location.href.split('/').pop()).addClass('navactive')