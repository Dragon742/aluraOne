let lista_teclas = document.querySelectorAll(".tecla");

lista_teclas[0].addEventListener('click', tocar_som_pom);
lista_teclas[1].addEventListener('click', tocar_som_clap);
lista_teclas[2].addEventListener('click', tocar_som_tim);
lista_teclas[3].addEventListener('click', tocar_som_puff);
lista_teclas[4].addEventListener('click', tocar_som_splash);
lista_teclas[5].addEventListener('click', tocar_som_toim);
lista_teclas[6].addEventListener('click', tocar_som_psh);
lista_teclas[7].addEventListener('click', tocar_som_tic);
lista_teclas[8].addEventListener('click', tocar_som_tom);

function tocar_som_pom(){
    document.querySelector("#som_tecla_pom").play();
}

function tocar_som_clap(){
    document.querySelector("#som_tecla_clap").play();
}

function tocar_som_tim(){
    document.querySelector("#som_tecla_tim").play();
}

function tocar_som_puff(){
    document.querySelector("#som_tecla_puff").play();
}

function tocar_som_splash(){
    document.querySelector("#som_tecla_splash").play();
}

function tocar_som_toim(){
    document.querySelector("#som_tecla_toim").play();
}

function tocar_som_psh(){
    document.querySelector("#som_tecla_psh").play();
}

function tocar_som_tic(){
    document.querySelector("#som_tecla_tic").play();
}

function tocar_som_tom(){
    document.querySelector("#som_tecla_tom").play();
}