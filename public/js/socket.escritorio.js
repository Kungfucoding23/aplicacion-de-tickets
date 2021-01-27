var socket = io()

var searchParams = new URLSearchParams(window.location.search)
    //valida si tiene el escritorio
if (!searchParams.has('escritorio')) {
    //si no existe me salgo de la pantalla
    window.location = 'index.html'
    throw new Error('El escritorio es necesario')
}

//si viene info sobre el escritorio

var label = $('small')

var escritorio = searchParams.get('escritorio')
$('h1').text('Escritorio ' + escritorio)

$('button').on('click', () => {
    // var audio = new Audio('../audio/new-ticket.js')
    // audio.play()
    socket.emit('atenderTicket', { escritorio: escritorio }, (resp) => {
        if (resp === 'No hay tickets') {
            //si no hay tickets muestra una alerta
            label.text(resp)
            alert(resp)
            return
        }
        label.text('Ticket' + resp.numero)
    })
})