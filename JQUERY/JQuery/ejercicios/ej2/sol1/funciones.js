var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos(){
  var x;
  x=$("#tabla1 tr");
  x.click(cambiarColorTabla1);
  y=$("#tabla2 tr");
  y.click(cambiarColorTabla2);
}
function cambiarColorTabla1(){
  var x;
  x=$(this);
  x.css("background-color","#ffff00");
}
function cambiarColorTabla2(){
  var y;
  y=$(this);
  y.css("background-color","#33FF39");
}
