function cambiarTextosHtml(id, texto) {
    let textoHtml = document.getElementById(id); /* Guarda el id (recibido) de un objeto html en una variable modificable */
    textoHtml.innerHTML = texto; /* accede al valor tipo string del objeto id (recibido) y le da el valor de texto (recibido) */
}
function copiarTexto() {
    let textoCopiado = document.getElementById('textoRecibido').innerText; /* Guarda el valor del mensaje (string) del bloque receptor */
    navigator.clipboard.writeText(textoCopiado).then(() => /* Copia en la papelera el valor de la variable modificable*/ {
        cambiarTextosHtml('textoRecibido', ''); /* Bloque receptor: Borra el mensaje */
        document.getElementById('botonCopiar').setAttribute('disabled', true); /* Desactiva el boton de copiar */
    });
}
function encriptar(texto) {
    let remplazarVocales = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    /* Variable que contiene las vocales y las palabras claves para encriptar */
    return texto.replace(/[aeiou]/g, function (remplazar) {
        /* Validacion de vocales en el mensaje (recibido) y remplazo por palabras claves */
        return remplazarVocales[remplazar];
        /* Accede a la variable y obtiene las palabras claves*/
    });
}
function paginaIniciada() {
    document.getElementById('botonCopiar').setAttribute('disabled', true); /* Desactiva el boton de Copiar */
    document.getElementById('entradaUsuario').addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z ]/g, ''); /* Impide que se usen caracteres especiales */
        this.value = this.value.toLowerCase(); /* Convierte las letras mayusculas en letras minusculas */
    });
    cambiarTextosHtml('textoRecibido', 'Ningún mensaje ha sido digitado. Ingresa el texto que desees encriptar o desencriptar.');
    /* Bloque receptor: Mensaje inicial */
}
function presionoBoton(id) {
    let boton = id; /* Le da el valor del id (recibido) a una nueva variable modificable */
    if (boton == 'botonEncriptar') {
        document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-candado-cerrado.svg)');
        /* Bloque receptor: Coloca icono del candado cerrado */
        recibirTexto(); /* Al presionar el boton de encriptar manda a llamar a la funcion que guarda el mensaje del textarea */
    }
    else if (boton == 'botonDesencriptar') {
        document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-candado-abierto.svg)');
        /* Bloque receptor: Coloca icono del candado abierto */
        recibirTexto(); /* Al presionar el boton de desencriptar manda a llamar a la funcion que guarda el mensaje del textarea */
    }
    else if (boton = 'botonCopiar') {
        copiarTexto(); /* Al presionar el boton de copiar manda a llamar a la funcion para copiar texto */
    }
}
function recibirTexto() {
    let textoDigitado = document.getElementById('entradaUsuario').value; /* Extrae el mensaje del textarea */
    let mensaje = encriptar(textoDigitado); /* Pasa el valor tipo string del textarea a una nueva variable modificable */
    if (mensaje != '') {
        document.getElementById('botonCopiar').removeAttribute('disabled'); /* Activa el boton de Copiar */
        document.getElementById('entradaUsuario').value = ''; /* Borra el valor que tenga el textarea */
        cambiarTextosHtml('textoRecibido', mensaje); /* Envia el mensaje a  */
    } else {
        document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-simbolo-pregunta.svg)');
        /* Bloque receptor: Coloca icono del simbolo de pregunta */
        cambiarTextosHtml('textoRecibido', '¡Error! No ha digitado ningún mensaje. Por favor, ingrese el texto que desea encriptar o desencriptar.');
        /* Bloque receptor: Mensaje al no recibir ningun texto */
    }
}
paginaIniciada(); /* Inicia la pagina */