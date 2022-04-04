//opcion 1
/*
var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos() {
   var x=$("#boton1");
   x.click(ocultarMostrarRecuadro);
}

function ocultarMostrarRecuadro() {
  var x=$("#descripcion");
  x.toggle("slow");
}

*/


//opcion 2

$(document).ready(function(){

	$("#boton1").click(function(){
    $("#descripcion").toggle("slow");
	});

});
