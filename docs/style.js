function init() {
$(function () {
  $.ajax({
    url:'../tkn.dat',
    success: function(data){
      alert(data);
    }
  });
});
alert("youmuch");
}
