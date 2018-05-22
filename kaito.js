$(function() {
	$('#Button1').click(function(){
		binanceData();
	});
})



function binanceData() {
	var data = "";
	var url = "https://n3zoeu504a.execute-api.us-west-2.amazonaws.com/beta";
	$(function() {
			$.ajax({
			type : 'GET',
			cache : false,
			dataType : 'json',
			url : url,
        	data : data
   		})  
		.done(function(data) {
			alert("success");
			alert(data);
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