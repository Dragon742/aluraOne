let lista_teclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < lista_teclas.length; contador++){
    const tecla = lista_teclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocar_som(idAudio);
    }
    tecla.onkeydown = function(){
        tecla.classList.add("ativa");
    }
    tecla.onkeyup = function(){
        tecla;this.classList.remove("ativa");
    }
}

function tocar_som(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}