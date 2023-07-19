const taTexto = document.querySelector(".ta-texto");
const taMensaje = document.querySelector(".ta-mensaje");
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(taTexto.value);
    taMensaje.value = textoEncriptado;
    taTexto.value = "";
    taMensaje.style.backgroundImage = none;
}

function encriptar(stringEncriptado) {
    let MatrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < MatrizCodigo.length; i++){
        if (stringEncriptado.includes(MatrizCodigo[i][0])) {

            stringEncriptado = stringEncriptado.replaceAll(MatrizCodigo[i][0],MatrizCodigo[i][1]);
            
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(taTexto.value);
    taMensaje.value = textoEncriptado;
    taTexto.value = "";
}

function desencriptar(stringDesencriptado) {
    let MatrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < MatrizCodigo.length; i++){
        if (stringDesencriptado.includes(MatrizCodigo[i][1])) {

            stringDesencriptado = stringDesencriptado.replaceAll(MatrizCodigo[i][1],MatrizCodigo[i][0]);
            
        }
    }
    return stringDesencriptado;
}

function btnCopiar() {
    const textoCopiado = copiar(taMensaje.value)
    taMensaje.value = textoCopiado;
}

function copiar(){
    taMensaje.select();
    navigator.clipboard.writeText(taMensaje.value)
    taMensaje.value = "";
    alert("Texto Copiado")
}
  