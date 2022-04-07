//opcion 1
/*
var x;
x=$(document);
x.ready(function(){
  var x;
  x=$("#titulo1");
  x.click(function() {
    var x;
    x=$("#titulo1");
    x.css("color","#E78513");
    x.css("background-color","#131BE7");
    x.css("font-family","\'Courier\'");
  });

  x=$("#titulo2");
  x.click(function () {
    var x;
    x=$("#titulo2");
    x.css("color","#E713C2");
    x.css("background-color","#64E713");
    x.css("font-family","\'Arial\'");
  });
})
*/
//opcion 2

$(document).ready(function(){

	$("#titulo1").click(function(){
		$("#titulo1").css("color","red");
		$("#titulo1").css("background-color","#131BE7");
		$("#titulo1").css("font-family","\'Courier\'");
	});

	$("#titulo2").click(function(){
		$("#titulo2").css({"color":"#E713C2", "background-color":"green","font-family":"Arial"});
	});

});
