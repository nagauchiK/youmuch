function init() {
$(function () {
  $.ajax({
    dataType:'text',
    url:'tkn.dat'
  })
  .done(function(data){
    alert(data);
  })
  .fail(function(XMLHttpRequest, textStatus, errorThrown) {
		alert( "error" ); //通信が失敗した場合、errorを表示
		console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        	console.log("textStatus     : " + textStatus);
        	console.log("errorThrown    : " + errorThrown.message);
	  	console.dir(arguments);
});
});
/*
var tet="";
tet.load("tkn.data");
alert(tet);
*/
alert("youmuch");
}
