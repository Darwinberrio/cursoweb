var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos(){
  var x;
  x=$("#parrafo1");
  x.click(presionParrafo)
}
function presionParrafo(){
  alert("Se presionó el párrafo");
}
