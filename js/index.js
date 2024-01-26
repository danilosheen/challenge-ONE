function resetText() {
  let banner = document.querySelector(".img-banner");
  banner.style.display = "block";

  let contentDecrypt = document.querySelector(".content-decrypt");
  contentDecrypt.style.display = "block";

  let texto = document.querySelector(".container-text-decrypt");
  texto.style.display = "none";
}

function limparTexto() {
  let textToCrypt = document.getElementById("text-area-input");
  textToCrypt.value = "";
}

function limparContainerDecrypt() {

  let contentDecrypt = document.querySelector(".content-decrypt");
  contentDecrypt.style.display = "none";
}

function criptografarPalavras(texto) {
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

function descriptografarPalavras(texto) {
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return texto;
}

function textCopied() {
  let buttonCopied = document.querySelector(".button-copiar");
  buttonCopied.textContent = "Copiado!";
  buttonCopied.setAttribute("disabled", "disabled");
  buttonCopied.style.backgroundColor = "#d2f8d2";
  buttonCopied.style.color = "#0a3871";
}

function resetButtonCopied() {
  let buttonCopied = document.querySelector(".button-copiar");
  buttonCopied.textContent = "Copiar";
  buttonCopied.removeAttribute("disabled");
  buttonCopied.style.backgroundColor = "transparent";
  buttonCopied.style.color = "#0a3871";
}

function copiarTexto() {
  var textoParaCopiar = document.querySelector(".text-decrypt").value;

  navigator.clipboard
    .writeText(textoParaCopiar)
    .then(textCopied())
    .catch(function (error) {
      console.error("Erro ao copiar texto para o clipboard: ", error);
    });

  limparTexto();
}

function crypt() {
  limparContainerDecrypt();

  resetButtonCopied();

  let textToCrypt = document.getElementById("text-area-input").value;

  let textCrypt = criptografarPalavras(textToCrypt);

  let texto = document.querySelector(".text-decrypt");
  texto.textContent = textCrypt;

  let containerTexto = document.querySelector(".container-text-decrypt");
  containerTexto.style.display = "block";

  let botaoCopiar = document.querySelector(".button-copiar");
  botaoCopiar.style.display = "block";

  limparTexto();
}

function decrypt() {
  limparContainerDecrypt();

  resetButtonCopied();

  let textToDerypt = document.getElementById("text-area-input").value;

  let textDecrypt = descriptografarPalavras(textToDerypt);

  let texto = document.querySelector(".text-decrypt");
  texto.textContent = textDecrypt;

  let containerTexto = document.querySelector(".container-text-decrypt");
  containerTexto.style.display = "block";

  limparTexto();
}
