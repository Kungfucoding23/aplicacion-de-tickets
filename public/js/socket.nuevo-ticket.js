// Comando para establecer la conexión

var socket = io()

var label = $('#lblNuevoTicket')

socket.on('connect', () => {
    console.log('Conectado al servidor')
})

socket.on('disconnect', () => {
    console.log('Perdimos conexion')
})

// on 'estadoActual'
socket.on('estadoActual', (actual) => {
    label.text(actual.actual)
})

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket)
    })
})