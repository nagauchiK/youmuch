function init() {
$(function () {
  $.ajax({
    url:'../tkn.dat',
    success: function(data){
      var data_array = data.split(/\r\n|\r|\n/);  // 改行コードで分割
      var len = data_array.length;

      for (var i = 0; i < len; i++){
        console.log(data_array[i]);
      }
    }
  });
});
alert("youmuch");
}
