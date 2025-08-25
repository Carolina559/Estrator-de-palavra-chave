 const botaoMostraPalaavra= documnto.querySelector("#botao-palavrachave");
 botaoMostraPalaavra.addEventListener("click",mostraPalavraChave);
 function mostraPalavraChave(){
     const texto= documento.querySelector("#entrada-de-texto").valeu;
     const campoResultado= documento.querySelector("#resultado-palavrachave");
     const palavrachave= processaTexto(texto);
     campoResultado.textoContent= palavrachave.join(",");
 }
function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);

   return palavras;
}
