function borrarDatosCaja() {
    let textoDigitado = document.getElementById('entradaUsuario').value;
    let textoParaEncriptar = textoDigitado;
    elementosHtml('textoEncriptado', textoParaEncriptar)
}
function copiarTexto() {
    let textoCopiado = document.getElementById('encriptador').innerText;
    console.log(textoCopiado);
}
function elementosHtml(id, texto) {
    let elementoPagina = document.getElementById(id);
    elementoPagina.innerHTML = texto;
}
function programaIniciado() {
    elementosHtml('textoEncriptado', 'Aun no ha encriptado ningun mensaje');
}
programaIniciado();