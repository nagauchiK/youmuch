function init() {
	alert("youmuch");
	var data = "";
	$(function() {
			$.ajax({
			type : 'GET',
			cache : false,
			url : '',
        	data: data
   		})  
		.done(function(data) {
			alert("success");
    		$('.main').html("success");
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown) {
			alert("error");
		    console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        	console.log("textStatus     : " + textStatus);
        	console.log("errorThrown    : " + errorThrown.message);
		})
		.always(function() {
		});
	});
}
