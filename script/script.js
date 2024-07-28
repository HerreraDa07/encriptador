const minimoDePalabras = 2;
let maximoDePalabras;
function botonDesencriptar() {
    let textoDigitado = document.getElementById('entradaUsuario').value; /* Extrae el mensaje del textarea */
    let contenido = textoDigitado.trim(); /* Eliminar los espacios en blanco al inicio y al final del mensaje */
    let numeroDePalabras = contenido.split(/\s+/); /* Separa las palabras y las enumera */
    if (contenido != '') {
        if (numeroDePalabras.length > minimoDePalabras) {
            let texto = verificador(contenido); /* Estudia el mensaje digitado */
            if (texto) {
                let mensaje = desencriptar(contenido); /* Pasa el valor tipo string del textarea a una nueva variable modificable */
                cambiarTextosHtml('textoRecibido', mensaje); /* Envía el mensaje al bloque de interacción del usuario */
                document.getElementById('botonCopiar').removeAttribute('disabled'); /* Activa el botón de copiar */
                document.getElementById('entradaUsuario').value = ''; /* Borra el valor que tenga el textarea */
            }
            else {
                cambiarTextosHtml('textoRecibido', 'El texto que has digitado ya está desencriptado');
                /* Envía el mensaje al bloque de interacción del usuario */
                document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-simbolo-alerta.svg)');
                document.getElementById('entradaUsuario').value = ''; /* Borra el valor que tenga el textarea */
            }
        }
        else {
            cambiarTextosHtml('textoRecibido', 'El mensaje debe ser más largo'); /* Envía el mensaje al bloque de interacción del usuario */
            document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-letra.svg)');
            document.getElementById('entradaUsuario').value = ''; /* Borra el valor que tenga el textarea */
        }
    }
    else {
        cambiarTextosHtml('textoRecibido', '¡Error! No ha digitado ningún mensaje. Por favor, ingrese el texto que desea encriptar o desencriptar.');
        /* Bloque receptor: Mensaje al no recibir ningún texto */
        document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-simbolo-pregunta.svg)');
        /* Bloque receptor: Coloca icono del símbolo de pregunta */
        document.getElementById('botonCopiar').setAttribute('disabled', true); /* Desactiva el botón de copiar */
    }
}
function botonEncriptar() {
    let textoDigitado = document.getElementById('entradaUsuario').value; /* Extrae el mensaje del textarea */
    let contenido = textoDigitado.trim(); /* Eliminar los espacios en blanco al inicio y al final del mensaje */
    let numeroDePalabras = contenido.split(/\s+/); /* Separa las palabras y las enumera */
    if (contenido != '') {
        if (numeroDePalabras.length > minimoDePalabras) {
            let texto = verificador(contenido); /* Estudia el mensaje digitado */
            if (texto) {
                cambiarTextosHtml('textoRecibido', 'El texto que has digitado ya está encriptado');
                /* Envía el mensaje al bloque de interacción del usuario */
                document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-simbolo-alerta.svg)');
                document.getElementById('entradaUsuario').value = ''; /* Borra el valor que tenga el textarea */
            }
            else {
                let mensaje = encriptar(contenido); /* Pasa el valor tipo string del textarea a una nueva variable modificable */
                cambiarTextosHtml('textoRecibido', mensaje); /* Envía el mensaje al bloque de interacción del usuario */
                document.getElementById('botonCopiar').removeAttribute('disabled'); /* Activa el botón de copiar */
                document.getElementById('entradaUsuario').value = ''; /* Borra el valor que tenga el textarea */
            }
        }
        else {
            cambiarTextosHtml('textoRecibido', 'El mensaje debe ser más largo'); /* Envía el mensaje al bloque de interacción del usuario */
            document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-letra.svg)');
            document.getElementById('entradaUsuario').value = ''; /* Borra el valor que tenga el textarea */
        }
    }
    else {
        cambiarTextosHtml('textoRecibido', '¡Error! No ha digitado ningún mensaje. Por favor, ingrese el texto que desea encriptar o desencriptar.');
        /* Bloque receptor: Mensaje al no recibir ningún texto */
        document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-simbolo-pregunta.svg)');
        /* Bloque receptor: Coloca icono del símbolo de pregunta */
        document.getElementById('botonCopiar').setAttribute('disabled', true); /* Desactiva el botón de copiar */
    }
}
function cambiarTextosHtml(id, texto) {
    let textoHtml = document.getElementById(id); /* Guarda el ID (recibido) de un objeto HTML en una variable modificable */
    textoHtml.innerHTML = texto; /* accede al valor tipo string del objeto ID (recibido) y le da el valor de texto (recibido) */
}
function copiarTexto() {
    let textoCopiado = document.getElementById('textoRecibido').innerText; /* Guarda el valor del mensaje (string) del bloque receptor */
    navigator.clipboard.writeText(textoCopiado).then(() => /* Copia en la papelera el valor de la variable modificable */ {
        cambiarTextosHtml('textoRecibido', ''); /* Bloque receptor: Borra el mensaje */
        document.getElementById('botonCopiar').setAttribute('disabled', true); /* Desactiva el botón de copiar */
        document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-campana.svg)');
    });
}
function desencriptar(texto) {
    let reemplazarPalabras = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
    /* Variable que contiene las palabras claves y las vocales para desencriptar */
    let regex = new RegExp(Object.keys(reemplazarPalabras).join('|'), 'g');
    /* Identifica las palabras claves por una expresión regular */
    return texto.replace(regex, function (remplazar) {
        /* Validación de palabras claves en el mensaje (recibido) y reemplazo por vocales */
        return reemplazarPalabras[remplazar];
        /* Accede a la variable y obtiene las vocales */
    });
}
function encriptar(texto) {
    let remplazarVocales = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    /* Variable que contiene las vocales y las palabras claves para encriptar */
    return texto.replace(/[aeiou]/g, function (remplazar) {
        /* Validación de vocales en el mensaje (recibido) y reemplazo por palabras claves */
        return remplazarVocales[remplazar];
        /* Accede a la variable y obtiene las palabras claves*/
    });
}
function paginaIniciada() {
    document.getElementById('botonCopiar').setAttribute('disabled', true); /* Desactiva el botón de copiar */
    document.getElementById('entradaUsuario').addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z ]/g, ''); /* Impide que se usen caracteres especiales */
        this.value = this.value.toLowerCase(); /* Convierte las letras mayúsculas en letras minúsculas */
        if (window.innerWidth <= 768) { maximoDePalabras = 147; }
        else if (window.innerWidth <= 1024) { maximoDePalabras = 443; }
        else if (window.innerWidth >= 1024) { maximoDePalabras = 195; }
        if (this.value.length > maximoDePalabras) {
            this.value = this.value.slice(0, maximoDePalabras); /* Limita la candidas de palabras que se pueden digitar */
        }
    });
    cambiarTextosHtml('textoRecibido', 'Ningún mensaje ha sido digitado. Ingresa el texto que desees encriptar o desencriptar.');
    /* Bloque receptor: Mensaje inicial */
}
function presionoBoton(id) {
    let boton = id; /* Le da el valor del ID (recibido) a una nueva variable modificable */
    if (boton == 'botonEncriptar') {
        document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-candado-cerrado.svg)');
        /* Bloque receptor: Coloca icono del candado cerrado */
        botonEncriptar(); /* Al presionar el botón de encriptar, manda a llamar a la función para encriptar */
    }
    else if (boton == 'botonDesencriptar') {
        document.documentElement.style.setProperty('--icono-tres', 'url(/recursos/icono-candado-abierto.svg)');
        /* Bloque receptor: Coloca icono del candado abierto */
        botonDesencriptar(); /* Al presionar el botón de desencriptar, manda a llamar a la función para desencriptar */
    }
    else if (boton = 'botonCopiar') {
        copiarTexto(); /* Al presionar el botón de copiar, manda a llamar a la función para copiar texto */
    }
}
function verificador(texto) {
    let palabrasClave = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    /* Palabras clave a identificar */
    let conteo = 0;
    /* Variable contador */
    for (let palabra of palabrasClave) {
        let regex = new RegExp(palabra, 'g');
        /* Crea la expresión regular para buscar globalmente las palabras claves almacenadas */
        let coincidencias = texto.match(regex);
        /* Identifica todas las palabras claves en el texto digitado */
        if (coincidencias) {
            conteo += coincidencias.length;
            /* Se le suman al contador el número de palabras claves encontradas */
        }
    }
    /* Si las palabras claves superan al contador, se considera como encriptado */
    return conteo >= 3;
}
paginaIniciada(); /* Inicia la página */