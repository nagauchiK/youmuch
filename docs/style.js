function init() {
$(function () {
  $.ajax({
    dataType: 'text',
    url:'../tkn.dat',
  })
  .done(function(data){
    alert(data);
  })
  .fail(function(){
    alert("ada");
  });
});
alert("youmuch");
}
