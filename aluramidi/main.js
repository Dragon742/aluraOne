let lista_teclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < lista_teclas.length; contador++){
    const tecla = lista_teclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocar_som(idAudio);
    }
    tecla.onkeydown = function(evento){
        if(evento.code=="Enter" || evento.code=="Space"){
            tecla.classList.add("ativa");
        }
    }
    tecla.onkeyup = function(){
        tecla;this.classList.remove("ativa");
    }
}

function tocar_som(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento.localName === "audio" && elemento.localName != null){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}