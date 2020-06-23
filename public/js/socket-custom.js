var socket = io();
socket.on("connect", function () {
  console.log("Conectado al sv");
});
socket.on("disconnect", function () {
  console.log("Desconectado al sv");
});

socket.emit("enviarMensaje", { usuario: "Fernando", edad: 24 }, function (res) {
  console.log(res);
});

socket.on("enviarMensaje", function (msg) {
  console.log(msg);
});
