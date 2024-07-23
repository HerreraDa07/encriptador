let texto;
function copiarTexto() {
    let textoRecibido = document.getElementById('textoRecibido').innerText;
    navigator.clipboard.writeText(textoRecibido).then(() => {
        elementosTextoHtml('textoRecibido', '');
        document.getElementById('botonCopiar').setAttribute('disabled', true);
    })
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
            document.getElementById('botonCopiar').removeAttribute('disabled');
        }
    }
    else if (botonPresionado == 'botonDesencriptar') {
        encriptarMensaje();
        if (texto == '') {
            document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-simbolo-pregunta.svg)');
        }
        else {
            document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-candado-abierto.svg)');
            document.getElementById('botonCopiar').removeAttribute('disabled');
        }
    }
    else if (botonPresionado == 'botonCopiar') {
        copiarTexto();
    }
}
function elementosTextoHtml(id, texto) {
    let elementoPagina = document.getElementById(id);
    elementoPagina.innerHTML = texto;
}
function encriptarMensaje() {
    let textoDigitado = document.getElementById('entradaUsuario').value;
    texto = textoDigitado;
    if (texto != '') {
        elementosTextoHtml('textoRecibido', texto);
        document.getElementById('entradaUsuario').value = '';
    }
    else {
        elementosTextoHtml('textoRecibido', 'No ha digitado');
    }
}
function presionoBoton(id) {
    elementoIconoHtml(id);
}
function programaIniciado() {
    elementosTextoHtml('textoRecibido', 'Aun no ha digitado ningun mensaje. Por favor, ingresa un texto.');
    document.getElementById('botonCopiar').setAttribute('disabled', true);
}
programaIniciado();