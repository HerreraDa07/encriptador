let texto;
function encriptarMensaje() {
    let textoDigitado = document.getElementById('entradaUsuario').value;
    texto = textoDigitado;
    if (texto != '') {
        elementosTextoHtml('textoRecibido', texto);
    }
    else {
        elementosTextoHtml('textoRecibido', 'No ha digitado');
    }
}
function copiarTexto() {
    let textoRecibido = document.getElementById('textoRecibido').innerText;
}
function elementosTextoHtml(id, texto) {
    let elementoPagina = document.getElementById(id);
    elementoPagina.innerHTML = texto;
}
function programaIniciado() {
    elementosTextoHtml('textoRecibido', 'Aun no ha digitado ningun mensaje. Por favor, ingresa un texto.');
}
function elementoIconoHtml(id) {
    let botonPresionado = id;
    if (botonPresionado == 'botonEncriptar') {
        encriptarMensaje();
        if (texto == '') {
            document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-simbolo-pregunta.svg)');
        }
        else {
            document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-candado-cerrado.svg)');
        }
    }
    else if (botonPresionado == 'botonDesencriptar') {
        if (texto == '') {
            document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-simbolo-pregunta.svg)');
        }
        else {
            document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-candado-abierto.svg)');
        }
    }
}
function presionoBoton(id) {
    elementoIconoHtml(id);
}
programaIniciado();