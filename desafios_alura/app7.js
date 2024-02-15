function IMC(peso, altura){
    let imc = peso/altura^2;
    return imc;
}

function fatorial(n){
    let i = 1;
    let resultado = 1;
    while (i <= n){
        resultado = resultado * i;
        i++;
    }
    return resultado;
}

function conversao(dolar){
    let reais = dolar * 4.8;
    return reais;
}

function areaPerimetro(altura, largura){
    let area = altura * largura;
    let perimetro = altura*2 + largura*2;
    return area, perimetro;
}

function areaPerimetroCirculo(raio){
    let area = 3.14*raio^2;
    let perimetro = 2*3.14*raio;
    return area, perimetro;
}

function tabuada(n){
    let i = 1;
    while (i <= 10){
        window.alert(n*i);
    }
}