//Establece conexión
var socket = io();

var label = $('#lblNuevoTicket')

socket.on('connect', function() {
  console.log('Conectado a sv');
})

socket.on('disconnect', function() {
  console.log('Desconectado a sv');
})

socket.on('estadoActual', function(res) {
  label.text(res.actual)
})

$('button').on('click', function() {
  socket.emit('siguienteTicket', null, function(siguienteTicket) {
    label.text(siguienteTicket);
  })
})