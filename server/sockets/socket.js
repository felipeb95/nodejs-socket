const {io} = require('../server')

io.on('connection', (client) => {
  console.log('Usuario conectado');

  client.emit('enviarMensaje', {nombre: 'Felipe', apellido: 'Balbontin'})

  client.on('disconnect', () => {
      console.log('Usuario desconectado');
  })

  client.on('enviarMensaje', (msg, callback) => {
      // console.log(msg);
      // if (msg.usuario) {
      //     callback({
      //         res: 'ok'
      //     })
      // } else {
      //     callback({
      //         res: ':('
      //     })
      // }

      client.broadcast.emit('enviarMensaje', msg)
  })
})